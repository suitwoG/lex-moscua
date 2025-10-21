// app/admin/_components/admin-sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  Users,
  Briefcase,
  Layers,
  BookOpen,
  CheckSquare,
  Settings,
} from "lucide-react";

// локальная cn — без алиасов
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type AdminNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export const adminNavItems: AdminNavItem[] = [
  { label: "Overview", href: "/admin", icon: Gauge },
  { label: "Learners", href: "/admin/learners", icon: Users, badge: "Soon" },
  { label: "Courses", href: "/admin/courses", icon: Briefcase },
  { label: "Modules", href: "/admin/modules", icon: Layers },
  { label: "Lessons", href: "/admin/lessons", icon: BookOpen },
  { label: "Tasks", href: "/admin/tasks", icon: CheckSquare },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar({ items }: { items: AdminNavItem[] }) {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 border-r border-slate-800 bg-slate-900/50">
      <div className="p-4 text-sm font-bold tracking-wide text-slate-300">
        Admin
      </div>
      <nav className="space-y-1 px-2 py-2">
        {items.map((it) => {
          const active =
            pathname === it.href || pathname?.startsWith(`${it.href}/`);
          const Icon = it.icon;

          return (
            <Link
              key={it.href}
              href={it.href}
              className={cn(
                "group flex items-center gap-2 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white",
                active && "bg-slate-800 text-white",
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon className="h-4 w-4" />
              <span className="flex-1">{it.label}</span>
              {it.badge ? (
                <span className="ml-auto rounded bg-slate-700 px-1.5 text-[10px] leading-5 text-slate-100">
                  {it.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
