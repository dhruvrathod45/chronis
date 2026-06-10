import { TrendingUp, TrendingDown } from "lucide-react";

export default function RecentChanges() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      p-6
      shadow-[0_0_30px_rgba(139,92,246,0.15)]
      "
    >
      <h2 className="mb-6 text-2xl font-bold">
        Recent Changes
      </h2>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <TrendingUp className="text-green-400" />
          <span>Productivity +8%</span>
        </div>

        <div className="flex items-center gap-3">
          <TrendingDown className="text-red-400" />
          <span>Screen Time -12%</span>
        </div>

        <div className="flex items-center gap-3">
          <TrendingUp className="text-green-400" />
          <span>Exercise +15%</span>
        </div>
      </div>
    </div>
  );
}