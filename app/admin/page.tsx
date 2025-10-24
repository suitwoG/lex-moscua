import Link from "next/link";

const sectionLinks = [
  { label: "View learners", href: "/admin/learners" },
  { label: "Manage courses", href: "/admin/courses" },
  { label: "Tune modules", href: "/admin/modules" },
  { label: "Edit lessons", href: "/admin/lessons" },
  { label: "Review tasks", href: "/admin/tasks" },
  { label: "Update settings", href: "/admin/settings" },
];

export const metadata = {
  title: "Admin • Lex Moscua",
  description: "Control center for managing learners, content, and settings.",
};

export default function AdminPage() {
  return (
    <main className="space-y-6 p-8">
      <h1 className="text-2xl font-bold text-slate-100">Админпанель</h1>
      <p className="text-sm text-slate-300">Быстрые ссылки по разделам:</p>

      <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {sectionLinks.map((section) => (
          <li key={section.href}>
            <Link
              href={section.href}
              className="block rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:bg-slate-900 hover:text-white"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
