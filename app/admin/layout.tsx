import type { ReactNode } from "react";
import { AdminSidebar, adminNavItems } from "./_components/admin-sidebar";

export const metadata = { title: "Admin • Lex MOSCUA" };

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh bg-slate-950 text-slate-100">
      <AdminSidebar items={adminNavItems} />
      <div className="flex-1">{children}</div>
    </div>
  );
}
