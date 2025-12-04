import { Star, Lock, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillNodeProps {
    title: string;
    level: number;
    status: "locked" | "active" | "completed";
    icon?: React.ElementType;
    position: "left" | "center" | "right";
}

export function SkillNode({ title, level, status, icon: Icon = Star, position }: SkillNodeProps) {
    const positionClasses = {
        left: "-translate-x-12",
        center: "",
        right: "translate-x-12",
    };

    return (
        <div className={cn("flex flex-col items-center gap-2", positionClasses[position])}>
            <div className="group relative">
                {/* Background circle for 3D effect */}
                <div
                    className={cn(
                        "absolute inset-0 translate-y-2 rounded-full",
                        status === "locked" ? "bg-gray-200" :

                            {/* Floating tooltip on hover */ }
                            < div className = "absolute -top-16 left-1/2 -translate-x-1/2 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" >
                            <div className={cn(
                                "whitespace-nowrap rounded-xl px-4 py-2 text-sm font-bold shadow-lg",
                                status === "locked" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                            )}>
                                {title}
                                <div className={cn(
                                    "absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-current",
                                    status === "locked" ? "text-gray-800" : "text-white"
                                )} />
                            </div>
                </div>
        </div>
        </div >
    );
}
