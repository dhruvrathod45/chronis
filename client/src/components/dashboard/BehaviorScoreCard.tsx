import { motion } from "framer-motion";

interface Props {
  score: number;
}

export default function BehaviorScoreCard({ score }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <p className="text-sm text-zinc-400">Behavior Score</p>

      <h2 className="mt-4 text-6xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        {score}
      </h2>

      <p className="mt-3 text-zinc-400">
        Based on sleep, focus, productivity and activity.
      </p>
    </motion.div>
  );
}