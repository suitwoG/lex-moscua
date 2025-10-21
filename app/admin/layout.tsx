import type { ReactNode } from "react";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth/options";

const ADMIN_ROOT = "/admin";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    const callback = encodeURIComponent(ADMIN_ROOT);
    redirect(`/login?callbackUrl=${callback}`);
  }

  if (session.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      {children}
    </div>
  );
}
