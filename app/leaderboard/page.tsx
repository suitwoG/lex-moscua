
const players = [
  {
    name: "Ekaterina S.",
    xp: 980,
    position: 1,
    league: "Lex Gold",
  },
  {
    name: "Ivan P.",
    xp: 860,
    position: 2,
    league: "Lex Gold",
  },
  {
    name: "Mikhail T.",
    xp: 755,
    position: 3,
    league: "Lex Silver",
  },
  {
    name: "Svetlana K.",
    xp: 640,
    position: 4,
    league: "Lex Silver",
  },
  {
    name: "Dmitry L.",
    xp: 520,
    position: 5,
    league: "Lex Bronze",
  },
];
export default function LeaderboardPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight">Weekly leaderboard</h1>
        <p className="text-sm text-muted-foreground">Compete across streak-protected leagues. Promotions lock on Sunday at 21:00 (Moscow time).</p>
      </header>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {players.map((player) => (
            <article
              key={player.position}
              className="flex items-center justify-between rounded-3xl border border-border/60 bg-card/90 px-5 py-4 shadow-sm transition hover:-translate-y-[1px] hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  #{player.position}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{player.name}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{player.league}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">{player.xp} XP</p>
                <p className="text-[11px] font-semibold uppercase text-muted-foreground">+45 today</p>
              </div>
            </article>
          ))}
        </div>
        <aside className="space-y-4 rounded-3xl border border-border/60 bg-card/90 p-5 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Weekly insights</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-2xl bg-muted/40 px-3 py-2">
              <dt className="font-semibold text-foreground">Your rank</dt>
              <dd className="text-primary">12 / 50</dd>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-muted/40 px-3 py-2">
              <dt className="font-semibold text-foreground">Promotion cutoff</dt>
              <dd className="text-primary">780 XP</dd>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-muted/40 px-3 py-2">
              <dt className="font-semibold text-foreground">Current streak</dt>
              <dd className="text-primary">7 days</dd>
            </div>
          </dl>
          <p className="rounded-2xl bg-primary/10 p-4 text-xs text-primary">Finish two more lessons to secure promotion. Mascot Lexy has a celebratory animation ready!</p>
        </aside>
      </div>
    </section>
  );
}

