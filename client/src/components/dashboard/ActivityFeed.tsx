import { motion } from "framer-motion";

const activities = [
  "Sleep consistency improved",
  "Focus score recalculated",
  "Behavior pattern detected",
  "Confidence score updated",
  "Screen time reduced",
];

export default function ActivityFeed() {
  return (
    <div className="rounded-3xl border border-yellow-500/10 bg-black/70 p-6">
      <h3 className="mb-6 text-xl font-semibold text-yellow-400">
        Live Activity Feed
      </h3>

      <div className="space-y-3">
        {activities.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            className="rounded-xl border border-white/5 p-4"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}