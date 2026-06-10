import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <motion.div
        animate={{
          x: [0, 200, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -200, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[120px]"
      />
    </div>
  );
}