import { Card } from "@repo/ui";
import { CheckCircle2, Clock, Users, Zap } from "lucide-react";

export function ProfileStats() {
    const stats = [
        {
            label: "Projects Completed",
            value: "48",
            icon: CheckCircle2,
            color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10",
        },
        {
            label: "Total Hours",
            value: "1,240",
            icon: Clock,
            color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10",
        },
        {
            label: "Team Members",
            value: "12",
            icon: Users,
            color: "text-purple-600 bg-purple-50 dark:bg-purple-500/10",
        },
        {
            label: "Performance",
            value: "98%",
            icon: Zap,
            iconColor: "text-amber-500",
            color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <Card key={index} className="flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className={`p-3 rounded-xl ${stat.color}`}>
                        <stat.icon size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-[var(--color-muted)]">{stat.label}</p>
                        <h3 className="text-xl font-bold text-[var(--color-text)]">{stat.value}</h3>
                    </div>
                </Card>
            ))}
        </div>
    );
}
