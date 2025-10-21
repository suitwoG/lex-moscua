import type { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { AdminSidebar, adminNavItems } from "./_components/admin-sidebar";
import { authOptions } from "@/lib/auth/options";

const ADMIN_ROOT = "/admin";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/login?callbackUrl=${encodeURIComponent(ADMIN_ROOT)}`);
  }

  if ((session.user as { role?: string } | undefined)?.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="flex min-h-dvh bg-slate-950 text-slate-100">
      <AdminSidebar items={adminNavItems} />
      <div className="flex-1">{children}</div>
    </div>
  );
}
