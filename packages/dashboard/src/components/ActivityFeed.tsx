import { Card } from "@repo/ui";
import { User, ShoppingCart, Zap, Settings, ArrowRight } from "lucide-react";

export function ActivityFeed() {
    const activities = [
        {
            id: 1,
            user: "Sarah Chen",
            action: "purchased",
            target: "Pro Plan",
            time: "2 minutes ago",
            icon: ShoppingCart,
            iconColor: "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10",
        },
        {
            id: 2,
            user: "James Wilson",
            action: "updated",
            target: "Project Alpha",
            time: "15 minutes ago",
            icon: Zap,
            iconColor: "text-amber-600 bg-amber-50 dark:bg-amber-500/10",
        },
        {
            id: 3,
            user: "Elena Rodriguez",
            action: "joined",
            target: "Workspace",
            time: "1 hour ago",
            icon: User,
            iconColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10",
        },
        {
            id: 4,
            user: "System Admin",
            action: "changed",
            target: "API Settings",
            time: "3 hours ago",
            icon: Settings,
            iconColor: "text-rose-600 bg-rose-50 dark:bg-rose-500/10",
        },
    ];

    return (
        <Card className="h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg text-[var(--color-text)]">Recent Activity</h3>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1">
                    View all <ArrowRight size={14} />
                </button>
            </div>

            <div className="space-y-6">
                {activities.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                        <div className={`mt-0.5 p-2 rounded-lg shrink-0 transition-transform group-hover:scale-110 ${item.iconColor}`}>
                            <item.icon size={16} />
                        </div>
                        <div className="flex-1 border-b border-[var(--color-border)] pb-4 group-last:border-0 group-last:pb-0">
                            <div className="flex items-center justify-between mb-0.5">
                                <p className="text-sm font-medium text-[var(--color-text)]">
                                    <span className="font-semibold">{item.user}</span> {item.action} {item.target}
                                </p>
                                <span className="text-xs text-[var(--color-muted)]">{item.time}</span>
                            </div>
                            <p className="text-xs text-[var(--color-muted)]">Verified transaction hash: 0x4f...{item.id}a2</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
