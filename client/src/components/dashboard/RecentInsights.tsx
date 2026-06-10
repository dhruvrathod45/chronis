import { Link } from "react-router-dom";

export default function RecentInsights() {
  const insights = [
    "Sleep Consistency Improved",
    "Focus Increased",
    "Screen Time Spike",
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-4 text-2xl font-bold">
        Recent Insights
      </h2>

      <div className="space-y-4">
        {insights.map((item) => (
          <Link
            key={item}
            to="/insight/1"
            className="block rounded-xl border border-white/10 p-4 transition hover:border-violet-500"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}