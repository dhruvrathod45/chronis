import { motion } from "framer-motion";

export default function ConfidenceCard() {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
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
      <h2 className="text-2xl font-bold">
        Data Confidence
      </h2>

      <div className="mt-6">
        <div className="flex justify-between">
          <span>Confidence</span>
          <span>91%</span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
        </div>
      </div>

      <p className="mt-4 text-zinc-400">
        Based on consistency and completeness
        of behavioral records.
      </p>
    </motion.div>
  );
}