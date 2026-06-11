import { motion } from "framer-motion";
import { Brain, Clock, ShieldCheck, TrendingUp } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";

export default function StatsOverview() {
  const stats = [
    {
      label: "Sleep Efficiency",
      value: 91,
      suffix: "%",
      detail: "Avg 7.4h / night",
      change: "+4.2%",
      positive: true,
      icon: Clock,
      color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    },
    {
      label: "Focus Integrity",
      value: 88,
      suffix: "%",
      detail: "Avg block 38 mins",
      change: "+6.8%",
      positive: true,
      icon: Brain,
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      label: "Habit Stability",
      value: 94,
      suffix: "%",
      detail: "Std dev 0.12 variance",
      change: "+1.1%",
      positive: true,
      icon: ShieldCheck,
      color: "text-yellow-600 bg-yellow-600/10 border-yellow-600/20",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="gold-card rounded-2xl p-5 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                  {stat.label}
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </h3>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center justify-center ${stat.color}`}>
                <Icon size={16} />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-zinc-400">{stat.detail}</span>
              <span className="text-emerald-400 font-mono font-medium flex items-center gap-1">
                <TrendingUp size={12} />
                {stat.change}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}