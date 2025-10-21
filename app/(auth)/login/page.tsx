"use client";

import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { loginAction, type LoginActionState } from "./actions";

const initialState: LoginActionState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full rounded-xl py-6 text-base font-bold"
      disabled={pending}
    >
      {pending ? "Входим..." : "Войти"}
    </Button>
  );
}

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { callbackUrl?: string };
}) {
  const callbackUrl = searchParams?.callbackUrl ?? "/";
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-4 py-16">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <div className="relative h-14 w-14 animate-bounce-soft rounded-full bg-primary text-white">
          <Image
            src="/mascot/lexy.png"
            alt="Lexy mascot"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">Lex Moscua</h1>
          <p className="text-sm text-muted-foreground">
            Авторизуйтесь, чтобы продолжить обучение праву.
          </p>
        </div>
      </div>

      <form
        action={formAction}
        className="space-y-6 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-lg"
      >
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
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
            placeholder="admin@lex.local"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-foreground"
          >
            Пароль
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="••••••••"
          />
        </div>

        {state?.error ? (
          <p className="rounded-xl border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">
            {state.error}
          </p>
        ) : null}

        <SubmitButton />

        <p className="text-center text-xs text-muted-foreground">
          Войдя, вы соглашаетесь с{" "}
          <Link href="/terms" className="font-semibold text-primary underline">
            правилами платформы
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
