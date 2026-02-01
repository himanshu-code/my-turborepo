import { DashboardHeader } from "./components/DashboardHeader";
import { StatsOverview } from "./components/StatsOverview";
import { ActivityFeed } from "./components/ActivityFeed";
import { ChartPlaceholder } from "./components/ChartPlaceholder";

export function DashboardPage() {
  return (
    <div className="max-w-[1600px] mx-auto animate-fade-in-up">
      <DashboardHeader />

      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ChartPlaceholder title="Revenue Growth" />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Additional placeholder sections for complexity */}
        <div className="p-6 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-[var(--color-muted)] text-sm italic">
          Projected Sales Data
        </div>
        <div className="p-6 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-[var(--color-muted)] text-sm italic">
          User Geographic Distribution
        </div>
        <div className="p-6 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-[var(--color-muted)] text-sm italic">
          System Health Monitoring
        </div>
      </div>
    </div>
  );
}
