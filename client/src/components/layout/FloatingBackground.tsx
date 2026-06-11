import { motion } from "framer-motion";

const particles = Array.from({ length: 25 });

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large Glows */}
      <div className="absolute top-[10%] left-[5%] h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-[180px]" />
      <div className="absolute bottom-[10%] right-[5%] h-[500px] w-[500px] rounded-full bg-yellow-600/3 blur-[160px]" />

      {/* Floating Particles */}
      {particles.map((_, index) => {
        const size = Math.random() * 2 + 1; // 1px to 3px
        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-yellow-500/30"
            style={{
              width: size,
              height: size,
            }}
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: ["0px", "-80px", "0px"],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Subtle Luxury Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}