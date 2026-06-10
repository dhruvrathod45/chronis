import { motion } from "framer-motion";

const metrics = [
  { label: "Sleep", value: 82 },
  { label: "Focus", value: 76 },
  { label: "Exercise", value: 90 },
  { label: "Productivity", value: 88 },
  { label: "Screen Time", value: 65 },
];

export default function RadarMetrics() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Behavioral Metrics
      </h2>

      <div className="space-y-5">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-2 flex justify-between">
              <span>{metric.label}</span>
              <span>{metric.value}%</span>
            </div>

            <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metric.value}%` }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-violet-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}