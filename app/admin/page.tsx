const sectionLinks = [
  { label: "View learners", href: "/admin/learners" },
  { label: "Manage courses", href: "/admin/courses" },
  { label: "Tune modules", href: "/admin/modules" },
  { label: "Edit lessons", href: "/admin/lessons" },
  { label: "Review tasks", href: "/admin/tasks" },
  { label: "Update settings", href: "/admin/settings" },
];

export default function AdminPage() {
  return (
    <main className="flex flex-col gap-6 p-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-100">
          Admin dashboard - 200 OK
        </h1>
        <p className="text-sm text-slate-300">
          Pick a section to continue managing the platform.
        </p>
      </div>

      <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {sectionLinks.map((section) => (
          <li key={section.href}>
            <a
              href={section.href}
              className="block rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:bg-slate-900 hover:text-white"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
