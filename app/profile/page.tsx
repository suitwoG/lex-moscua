import { Button } from "@/components/ui/button";
import { LearnerProfileHeader } from "@/components/profile/learner-card";
import { WeeklyXPCard } from "@/components/profile/weekly-xp-card";
import { AchievementsGrid } from "@/components/profile/achievements-grid";
import { DailyGoalCard } from "@/components/profile/daily-goal-card";

const progress = [
  {
    label: "Theory of State & Law",
    value: 68,
    status: "Module 3 - 2 lessons left",
    color: "bg-emerald-500",
  },
  {
    label: "Constitutional Law",
    value: 42,
    status: "Module 2 - Unlocks in 1 lesson",
    color: "bg-blue-500",
  },
  {
    label: "Civil Law",
    value: 0,
    status: "New course",
    color: "bg-gray-300",
  },
];

export default function ProfilePage() {
  return (
    <section className="space-y-8">
      <section className="grid gap-6 md:grid-cols-[2fr,1.2fr]">
        {/* Left Column: Learner Summary */}
        <div className="space-y-6">
          <LearnerProfileHeader />

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold uppercase tracking-wide text-gray-400">Course Progress</h2>
              <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                View All Courses
              </Button>
            </div>
            <div className="grid gap-4">
              {progress.map((course) => (
                <article
                  key={course.label}
                  className="group rounded-3xl border-2 border-gray-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{course.label}</p>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-400">{course.status}</p>
                    </div>
                    <span className="text-right text-xl font-black text-gray-900">{course.value}%</span>
                  </div>
                  <div className="mt-4 h-4 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${course.color} transition-all duration-500 ease-out`}
                      style={{ width: `${course.value}%` }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Goals */}
        <div className="space-y-6">
          <WeeklyXPCard />
          <AchievementsGrid />
          <DailyGoalCard />
        </div>
      </section>
    </section>
  );
}
