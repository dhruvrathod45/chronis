import { motion } from "framer-motion";

export default function BehaviorSummary() {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <h2 className="mb-4 text-2xl font-bold">
        Behavioral Summary
      </h2>

      <p className="leading-8 text-zinc-300">
        Over the last 90 days,
        productivity has improved steadily
        alongside increased sleep consistency
        and reduced screen time.
      </p>

      <div className="mt-6 inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-violet-400">
        Confidence: High
      </div>
    </motion.div>
  );
}