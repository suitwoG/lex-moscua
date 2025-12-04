export function WeeklyXPCard() {
    return (
        <article className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wide text-gray-400">Weekly XP</h2>
                <span className="text-xs font-bold text-emerald-500">On Track</span>
            </div>
            <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-black text-gray-900">220</span>
                <span className="mb-1 text-sm font-semibold text-gray-400">/ 500 XP</span>
            </div>
            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[44%] rounded-full bg-emerald-500" />
            </div>
        </article>
    );
}
