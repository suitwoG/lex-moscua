import { CheckCircle2 } from "lucide-react";

export function DailyGoalCard() {
    return (
        <article className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-400">Daily Goal</h2>
            <div className="mt-4 flex items-center justify-between">
                <div>
                    <p className="text-4xl font-black text-gray-900">20 XP</p>
                    <p className="mt-1 text-xs font-medium text-gray-500">Complete 1 lesson</p>
                </div>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-emerald-100 text-emerald-500">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
            </div>
            <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-xs font-medium text-emerald-700">
                Keep your streak alive! Complete a lesson before midnight.
            </div>
        </article>
    );
}
