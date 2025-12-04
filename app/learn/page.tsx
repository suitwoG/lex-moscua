import { CourseMap } from "@/components/learn/course-map";
import { Button } from "@/components/ui/button";
import { Heart, Zap } from "lucide-react";

export default function LearnPage() {
    return (
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            {/* Main Course Path */}
            <CourseMap />

            {/* Sidebar Stats (Desktop only) */}
            <aside className="hidden space-y-6 lg:block">
                <div className="sticky top-24 space-y-6">
                    <div className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-lg font-bold text-gray-900">Daily Progress</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-rose-500">
                                    <Heart className="h-6 w-6 fill-current" />
                                    <span className="font-black">5</span>
                                </div>
                                <span className="text-sm font-bold text-gray-400">Hearts</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-amber-500">
                                    <Zap className="h-6 w-6 fill-current" />
                                    <span className="font-black">120</span>
                                </div>
                                <span className="text-sm font-bold text-gray-400">XP Today</span>
                            </div>
                        </div>
                        <Button className="mt-6 w-full rounded-xl" variant="outline">
                            View Leaderboard
                        </Button>
                    </div>

                    <div className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-2 text-lg font-bold text-gray-900">Try Super Lex</h2>
                        <p className="mb-4 text-sm text-gray-500">Unlimited hearts and custom practice reviews.</p>
                        <Button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 border-0">
                            Upgrade Today
                        </Button>
                    </div>
                </div>
            </aside>
        </div>
    );
}
