import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Compass, Sparkles } from "lucide-react";

interface Props {
  month: string;
  title: string;
  description: string;
  category: "sleep" | "focus" | "screentime" | "exercise" | "system" | "productivity";
  insightId?: string;
  confidence?: number;
}

export default function TimelineEvent({
  month,
  title,
  description,
  category,
  insightId,
  confidence,
}: Props) {
  const getCategoryEmoji = (cat: string) => {
    switch (cat) {
      case "sleep":
        return "💤";
      case "focus":
        return "🧠";
      case "screentime":
        return "📱";
      case "exercise":
        return "⚡";
      case "productivity":
        return "📈";
      case "system":
      default:
        return "⚙️";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12 sm:pl-16 group"
    >
      {/* DOT */}
      <div className="absolute left-[3px] top-4 z-10 h-3.5 w-3.5 rounded-full border-2 border-yellow-500 bg-black transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_#d4af37]" />

      {/* CONTENT */}
      <div className="gold-card rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-yellow-500 font-mono tracking-wider">
              {month}
            </span>
            <span className="text-zinc-700">•</span>
            <span className="text-[10px] uppercase font-bold tracking-widest bg-white/5 border border-white/5 text-zinc-400 px-2 py-0.5 rounded">
              {getCategoryEmoji(category)} {category}
            </span>
          </div>

          {confidence && (
            <span className="text-[10px] font-mono text-zinc-500">
              Confidence {confidence}%
            </span>
          )}
        </div>

        <h3 className="luxury-title mt-3 text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>

        <p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed">
          {description}
        </p>

        {insightId && (
          <div className="mt-4 pt-3 border-t border-white/5 flex">
            <Link
              to={`/insight/${insightId}`}
              className="text-xs text-yellow-500 hover:text-white transition flex items-center gap-1 group/link"
            >
              <span>Investigate Inferred Evidence</span>
              <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}