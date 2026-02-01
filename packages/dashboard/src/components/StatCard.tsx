import { Card } from "@repo/ui";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface StatCardProps {
    label: string;
    value: string;
    trend: string;
    isPositive: boolean;
    icon: LucideIcon;
    color: "indigo" | "emerald" | "amber" | "rose";
}

const colorMap = {
    indigo: "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10",
    emerald: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10",
    amber: "text-amber-600 bg-amber-50 dark:bg-amber-500/10",
    rose: "text-rose-600 bg-rose-50 dark:bg-rose-500/10",
};

export function StatCard({ label, value, trend, isPositive, icon: Icon, color }: StatCardProps) {
    return (
        <Card className="relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-xl ${colorMap[color]}`}>
                    <Icon size={20} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    <span>{trend}</span>
                </div>
            </div>

            <div>
                <p className="text-sm font-medium text-[var(--color-muted)] mb-1">{label}</p>
                <h3 className="text-2xl font-bold text-[var(--color-text)]">{value}</h3>
            </div>

            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
        </Card>
    );
}
