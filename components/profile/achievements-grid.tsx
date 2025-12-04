import { Trophy, Star, Zap, Shield } from "lucide-react";

const achievements = [
    { icon: Zap, label: "7 Day Streak", color: "text-orange-500", bg: "bg-orange-100" },
    { icon: Shield, label: "Module Master", color: "text-blue-500", bg: "bg-blue-100" },
    { icon: Star, label: "Perfect Quiz", color: "text-yellow-500", bg: "bg-yellow-100" },
    { icon: Trophy, label: "Top 3 Finish", color: "text-purple-500", bg: "bg-purple-100" },
];

export function AchievementsGrid() {
    return (
        <article className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold uppercase tracking-wide text-gray-400">Achievements</h2>
                <span className="text-xs font-bold text-gray-400">View All</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {achievements.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.label} className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-100 bg-gray-50 p-3 text-center transition hover:bg-white hover:shadow-sm">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.bg} ${item.color}`}>
                                <Icon className="h-5 w-5" />
                            </div>
                            <span className="text-xs font-bold text-gray-600">{item.label}</span>
                        </div>
                    );
                })}
            </div>
        </article>
    );
}
