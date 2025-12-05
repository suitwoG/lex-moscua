"use server";

import bcrypt from "bcrypt";
import { signIn } from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { ensurePasswordHashColumn } from "@/lib/auth/password-column";

export type RegisterActionState = {
  error?: string;
};

const registerSchema = z
  .object({
    name: z.string().min(2, "Имя должно быть не короче двух символов.").max(100, "Слишком длинное имя."),
    email: z.string().email("Введите корректный email.").transform((value) => value.trim().toLowerCase()),
    password: z.string().min(6, "Пароль не может быть короче шести символов."),
    confirmPassword: z.string().min(6, "Подтвердите пароль."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Пароли не совпадают.",
    path: ["confirmPassword"],
  });

function getFirstError(error: z.ZodError) {
  return error.errors[0]?.message ?? "Заполните обязательные поля.";
}

export async function registerAction(
  _prevState: RegisterActionState | undefined,
  formData: FormData,
): Promise<RegisterActionState> {
  const callbackUrl = String(formData.get("callbackUrl") ?? "/");
  const parseResult = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!parseResult.success) {
    return { error: getFirstError(parseResult.error) };
  }

  const { name, email, password } = parseResult.data;

  try {
    await ensurePasswordHashColumn();

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { error: "Такой email уже зарегистрирован. Попробуйте войти." };
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: {
        email,
        name,
        passwordHash,
      },
    });

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl,
    });

    if (result?.error) {
      return { error: "Аккаунт создан, но войти не удалось. Попробуйте авторизоваться вручную." };
    }
  } catch (error) {
    console.error("Register failed:", error);
    if (error instanceof Error) {
      if (error.message.includes("no such table") || error.message.includes("no column named passwordHash")) {
        return {
          error: "База данных ещё не создана. Выполните `npx prisma db push && npm run db:seed` и попробуйте снова.",
        };
      }
      if (error.message.includes("UNIQUE constraint failed")) {
        return { error: "Такой email уже зарегистрирован. Попробуйте войти." };
      }
    }
    return { error: "Не удалось создать аккаунт. Попробуйте снова позже." };
  }

  redirect(callbackUrl || "/");
}
