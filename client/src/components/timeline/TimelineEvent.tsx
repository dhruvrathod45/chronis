import { motion } from "framer-motion";

interface Props {
  month: string;
  title: string;
  description: string;
}

export default function TimelineEvent({
  month,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="relative pl-16"
    >
      {/* DOT */}

      <div className="absolute left-0 top-4 z-10 h-5 w-5 rounded-full border-2 border-yellow-500 bg-[#050505]" />

      {/* LINE */}

      <div className="absolute left-[9px] top-9 h-full w-[2px] bg-yellow-500/20" />

      {/* CONTENT */}

      <div className="gold-card rounded-2xl p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
          {month}
        </p>

        <h3 className="luxury-title mt-3 text-2xl">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}