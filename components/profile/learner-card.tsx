import { Button } from "@/components/ui/button";
import { User, Settings, LogOut } from "lucide-react";

export function LearnerProfileHeader() {
    return (
        <div className="flex flex-col gap-6 rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-4xl font-bold text-emerald-600 ring-4 ring-white shadow-lg">
                    SP
                </div>
                <div className="space-y-1">
                    <h1 className="text-3xl font-black tracking-tight text-gray-900">Sofia Petrova</h1>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <span>Joined Feb 2025</span>
                        <span>•</span>
                        <span className="text-emerald-600">Lex Gold League</span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                        <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-0.5 text-xs font-bold text-orange-600">
                            🔥 7 Day Streak
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="rounded-xl">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl text-rose-600 hover:text-rose-700 hover:border-rose-200 hover:bg-rose-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                </Button>
            </div>
        </div>
    );
}
