"use server";

import { signIn } from "next-auth";
import { redirect } from "next/navigation";

export type LoginActionState = {
  error?: string;
};

export async function loginAction(
  _prevState: LoginActionState | undefined,
  formData: FormData,
): Promise<LoginActionState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const callbackUrl = String(formData.get("callbackUrl") ?? "/");

  if (!email || !password) {
    return { error: "Введите email и пароль." };
  }

  const result = await signIn("credentials", {
    redirect: false,
    email,
    password,
    callbackUrl,
  });

  if (result?.error) {
    return { error: "Неверный email или пароль." };
  }

  redirect(callbackUrl || "/");
}
