import { StatCard } from "./StatCard";
import { DollarSign, Users, UserPlus, Clock } from "lucide-react";

export function StatsOverview() {
    const stats = [
        {
            label: "Total Revenue",
            value: "$124,592",
            trend: "+12.5%",
            isPositive: true,
            icon: DollarSign,
            color: "indigo" as const,
        },
        {
            label: "Active Users",
            value: "12,482",
            trend: "+5.4%",
            isPositive: true,
            icon: Users,
            color: "emerald" as const,
        },
        {
            label: "New Signups",
            value: "842",
            trend: "+18.2%",
            isPositive: true,
            icon: UserPlus,
            color: "amber" as const,
        },
        {
            label: "Avg. Session",
            value: "4m 32s",
            trend: "-2.1%",
            isPositive: false,
            icon: Clock,
            color: "rose" as const,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
}
