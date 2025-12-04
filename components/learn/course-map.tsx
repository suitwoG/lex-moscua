import { SkillNode } from "./skill-node";
import { BookOpen, Gavel, Scale, ScrollText, Landmark } from "lucide-react";

const units = [
    {
        id: 1,
        title: "Unit 1",
        description: "Intro to Russian Law",
        color: "bg-emerald-500",
        skills: [
            { id: "1-1", title: "Basics", level: 1, status: "completed", icon: BookOpen, position: "center" },
            { id: "1-2", title: "Sources", level: 1, status: "completed", icon: ScrollText, position: "left" },
            { id: "1-3", title: "Constitution", level: 1, status: "active", icon: Landmark, position: "center" },
            { id: "1-4", title: "Federalism", level: 0, status: "locked", icon: Scale, position: "right" },
            { id: "1-5", title: "Judiciary", level: 0, status: "locked", icon: Gavel, position: "center" },
        ]
    }
];

export function CourseMap() {
    return (
        <div className="mx-auto max-w-md space-y-12 pb-20">
            {units.map((unit) => (
                <div key={unit.id} className="space-y-8">
                    <header className={`sticky top-20 z-30 -mx-4 mb-8 flex items-center justify-between rounded-xl ${unit.color} p-4 text-white shadow-lg sm:mx-0`}>
                        <div>
                            <h2 className="text-lg font-black uppercase tracking-wide opacity-90">{unit.title}</h2>
                            <p className="font-bold">{unit.description}</p>
                        </div>
                        <BookOpen className="h-6 w-6 opacity-80" />
                    </header>

                    <div className="flex flex-col gap-8 py-4">
                        {unit.skills.map((skill: any) => (
                            <SkillNode key={skill.id} {...skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
