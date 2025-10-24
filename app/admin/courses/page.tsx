export default function AdminCoursesPage() {
  return (
    <section className="space-y-4 p-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-100">Courses</h1>
        <p className="text-sm text-slate-300">
          Manage course catalog, enrollment policies, and localization.
        </p>
      </header>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-400">
        Course creation and publishing tools will be wired in next iterations.
      </div>
    </section>
  );
}
