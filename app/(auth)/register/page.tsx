"use client";

import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { registerAction, type RegisterActionState } from "./actions";

const initialState: RegisterActionState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full rounded-xl py-6 text-base font-bold" disabled={pending}>
      {pending ? "Создаём..." : "Создать аккаунт"}
    </Button>
  );
}

export default function RegisterPage({
  searchParams,
}: {
  searchParams?: { callbackUrl?: string };
}) {
  const callbackUrl = searchParams?.callbackUrl ?? "/";
  const [state, formAction] = useFormState(registerAction, initialState);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-4 py-16">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <div className="relative h-14 w-14 animate-bounce-soft rounded-full bg-primary text-white">
          <Image src="/mascot/lexy.svg" alt="Lexy mascot" fill className="object-contain" priority />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">Присоединяйтесь к Lex Moscua</h1>
          <p className="text-sm text-muted-foreground">
            Зарегистрируйтесь и начните отслеживать прогресс, получать XP и открывать новые уроки.
          </p>
        </div>
      </div>

      <form action={formAction} className="space-y-6 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-lg">
        <input type="hidden" name="callbackUrl" value={callbackUrl} />

        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
            Имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Например, Анна"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-semibold text-foreground">
            Пароль
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Минимум 6 символов"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-semibold text-foreground">
            Повторите пароль
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Для проверки"
          />
        </div>

        {state?.error ? (
          <p className="rounded-xl border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">
            {state.error}
          </p>
        ) : null}

        <SubmitButton />

        <p className="text-center text-sm text-muted-foreground">
          Уже есть аккаунт?{" "}
          <Link href="/login" className="font-semibold text-primary underline">
            Войдите
          </Link>
        </p>
      </form>
    </div>
  );
}
