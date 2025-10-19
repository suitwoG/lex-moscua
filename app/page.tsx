
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
const highlights = [
  {
    title: "Structured legal quests",
    description: "Unlock modules step by step, from theory of state to practice-heavy case drills.",
    icon: Sparkles,
  },
  {
    title: "Daily momentum",
    description: "Stay on track with streaks, XP boosts, and mascot cheers for every milestone.",
    icon: Trophy,
  },
  {
    title: "Confident compliance",
    description: "Built for universities and firms that need a reliable, auditable learning path.",
    icon: ShieldCheck,
  },
];
export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center justify-start gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Legal learning, Duolingo energy
          </span>
          <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Master Russian legal fundamentals through playful daily missions.
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Lex Moscua helps learners breeze through theory, drills, and case practice. Switch disciplines in one tap, track XP, and celebrate wins with a Moscow-inspired mascot.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-2xl px-6 py-5 text-base">
              <Link href="/leaderboard" className="flex items-center gap-2">
                Jump into today&apos;s track <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6 py-5 text-base">
              <Link href="/store">Preview rewards</Link>
            </Button>
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-8 shadow-xl">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -left-6 bottom-8 h-32 w-32 rounded-full bg-amber-500/30 blur-2xl" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-wide text-primary">Today&apos;s focus</h2>
              <span className="rounded-full bg-background/60 px-3 py-1 text-xs font-semibold text-muted-foreground">XP boost active</span>
            </div>
            <div className="grid gap-4">
              <CardStat label="Current streak" value="7 days" trend="+2 vs last week" />
              <CardStat label="Discipline" value="Theory of State & Law" trend="Module 2 of 6" />
              <CardStat label="Daily goal" value="20 XP" trend="Complete 1 new lesson" />
            </div>
            <div className="rounded-2xl bg-background/80 p-4 text-sm text-muted-foreground">
              Complete the module to unlock a gold badge and new procedural law quests.
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
}
function CardStat({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="rounded-2xl border border-border/50 bg-background/80 p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-2 text-2xl font-black text-foreground">{value}</p>
      <p className="text-xs font-medium text-primary/80">{trend}</p>
    </div>
  );
}

