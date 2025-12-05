"use server";

import { signIn } from "next-auth";
import { redirect } from "next/navigation";

export type LoginActionState = {
  error?: string;
};

function normalizeEmail(value: FormDataEntryValue | null) {
  return String(value ?? "").trim().toLowerCase();
}

export async function loginAction(
  _prevState: LoginActionState | undefined,
  formData: FormData,
): Promise<LoginActionState> {
  const email = normalizeEmail(formData.get("email"));
  const password = String(formData.get("password") ?? "");
  const callbackUrl = String(formData.get("callbackUrl") ?? "/");

  if (!email || !password) {
    return { error: "Введите email и пароль." };
  }

  try {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl,
    });

    if (result?.error) {
      return { error: "Неверный email или пароль." };
    }
  } catch (error) {
    console.error("Login failed:", error);
    if (error instanceof Error && error.message.includes("no such table")) {
      return {
        error: "База данных ещё не инициализирована. Выполните `npx prisma db push && npm run db:seed`.",
      };
    }
    return { error: "Не удалось выполнить вход. Попробуйте ещё раз позже." };
  }

  redirect(callbackUrl || "/");
}
