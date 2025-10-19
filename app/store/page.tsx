
const items = [
  {
    name: "Streak Freeze",
    cost: 120,
    description: "Protect your daily streak if you miss a check-in.",
    status: "Coming soon",
  },
  {
    name: "Case Booster",
    cost: 300,
    description: "Unlock extra procedural case drills for the week.",
    status: "In design",
  },
  {
    name: "Festive Outfit",
    cost: 200,
    description: "Dress the Lexy mascot in a themed gown for special events.",
    status: "Concept art",
  },
];
export default function StorePage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight">Reward shop</h1>
        <p className="text-sm text-muted-foreground">Spend in-app coins that you earn from flawless lessons, streak milestones, and community challenges.</p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.name}
            className="flex flex-col justify-between rounded-3xl border border-border/60 bg-card/90 p-6 shadow-sm transition hover:-translate-y-[1px] hover:shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">{item.name}</h2>
                <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase text-amber-600">{item.cost} coins</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
            <div className="mt-6 rounded-2xl bg-muted/30 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {item.status}
            </div>
          </article>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">Inventory is a placeholder. Admins will curate actual boosters and cosmetics once the economy model is finalized.</p>
    </section>
  );
}

