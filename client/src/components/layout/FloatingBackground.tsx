import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large Glow */}
      <div className="absolute top-20 left-20 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute bottom-20 right-20 h-[400px] w-[400px] rounded-full bg-yellow-400/5 blur-[160px]" />

      {/* Floating Particles */}
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-2 w-2 rounded-full bg-yellow-400/50"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.2,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight - 100,
            ],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,215,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,215,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}