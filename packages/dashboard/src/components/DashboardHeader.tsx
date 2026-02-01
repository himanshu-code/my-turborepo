import { LayoutDashboard } from "lucide-react";

export function DashboardHeader() {
    return (
        <div className="mb-8 flex items-center justify-between">
            <div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-muted)] mb-1">
                    <LayoutDashboard size={14} />
                    <span>Overview</span>
                    <span className="text-gray-400">/</span>
                    <span className="font-medium text-[var(--color-text)]">Analytics</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)]">
                    Dashboard
                </h1>
                <p className="text-[var(--color-muted)]">
                    Welcome back! Here's what's happening with your projects today.
                </p>
            </div>

            <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm font-medium text-[var(--color-text)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                    Export Data
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-500/20">
                    Create Report
                </button>
            </div>
        </div>
    );
}
