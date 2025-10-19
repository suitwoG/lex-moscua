
import { Button } from "@/components/ui/button";
const progress = [
  {
    label: "Theory of State & Law",
    value: 68,
    status: "Module 3 - 2 lessons left",
  },
  {
    label: "Constitutional Law",
    value: 42,
    status: "Module 2 - Unlocks in 1 lesson",
  },
  {
    label: "Civil Law",
    value: 0,
    status: "New course",
  },
];
export default function ProfilePage() {
  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card/90 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Learner profile</p>
          <h1 className="text-3xl font-black tracking-tight">Sofia Petrova</h1>
          <p className="text-sm text-muted-foreground">Joined Feb 2025 - Streak 7 days - Current league: Lex Gold</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" className="rounded-xl">Export progress</Button>
          <Button className="rounded-xl">Switch course</Button>
        </div>
      </header>
      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-3xl border border-border/60 bg-primary/10 p-6 text-primary">
          <h2 className="text-sm font-semibold uppercase tracking-wide">Weekly XP</h2>
          <p className="mt-4 text-4xl font-black">220</p>
          <p className="text-xs font-semibold uppercase text-primary/80">On track for promotion</p>
        </article>
        <article className="rounded-3xl border border-border/60 bg-card/90 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Achievements</h2>
          <ul className="mt-3 space-y-2 text-sm text-foreground">
            <li>Daily streak guardian badge</li>
            <li>Module badge: State structure</li>
            <li>Perfect quiz: Constitutional basics</li>
          </ul>
        </article>
        <article className="rounded-3xl border border-border/60 bg-card/90 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Daily goal</h2>
          <p className="mt-4 text-4xl font-black text-foreground">20 XP</p>
          <p className="text-xs text-muted-foreground">Complete one new lesson or two reviews to keep your streak shield.</p>
        </article>
      </section>
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Course progress</h2>
        <div className="space-y-3">
          {progress.map((course) => (
            <article
              key={course.label}
              className="rounded-3xl border border-border/60 bg-card/90 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{course.label}</p>
                  <p className="text-xs font-medium uppercase text-muted-foreground">{course.status}</p>
                </div>
                <span className="text-right text-lg font-bold text-primary">{course.value}%</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-muted/40">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${course.value}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

