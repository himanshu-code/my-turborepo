import { Card } from "@repo/ui";

export function ChartPlaceholder({ title }: { title: string }) {
    return (
        <Card className="h-[400px] flex flex-col">
            <h3 className="font-semibold text-lg text-[var(--color-text)] mb-6">{title}</h3>

            <div className="flex-1 flex items-end gap-3 pb-2 px-2">
                {[40, 60, 45, 90, 65, 80, 50, 70, 85, 40, 60, 55].map((height, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-indigo-500/10 rounded-t-md relative group transition-all duration-300 hover:bg-indigo-500/20"
                        style={{ height: `${height}%` }}
                    >
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-500/40 to-indigo-500/20 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ height: '100%' }} />

                        {/* Tooltip hint */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            {100 + height}$
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500" />
                        <span className="text-xs text-[var(--color-muted)]">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-indigo-200" />
                        <span className="text-xs text-[var(--color-muted)]">Forecast</span>
                    </div>
                </div>
                <select className="text-xs bg-[var(--color-surface)] border border-[var(--color-border)] rounded px-2 py-1 outline-none">
                    <option>Last 12 months</option>
                    <option>Last 30 days</option>
                </select>
            </div>
        </Card>
    );
}
