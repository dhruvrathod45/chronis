import { motion } from "framer-motion";
import { Activity, Brain, Clock, ShieldAlert, Sparkles, Zap } from "lucide-react";

interface ActivityItem {
  id: number;
  title: string;
  category: "sleep" | "focus" | "screentime" | "exercise" | "system";
  type: "positive" | "warning" | "milestone" | "info";
  time: string;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    title: "Bedtime latency reduced by 15 mins",
    category: "sleep",
    type: "positive",
    time: "12m ago",
  },
  {
    id: 2,
    title: "Late-night screen activity anomaly detected",
    category: "screentime",
    type: "warning",
    time: "45m ago",
  },
  {
    id: 3,
    title: "Focus session duration exceeded 35 mins baseline",
    category: "focus",
    type: "milestone",
    time: "2h ago",
  },
  {
    id: 4,
    title: "Aerobic recovery cycle logged successfully",
    category: "exercise",
    type: "positive",
    time: "5h ago",
  },
  {
    id: 5,
    title: "Model confidence baseline recalibrated",
    category: "system",
    type: "info",
    time: "8h ago",
  },
];

export default function ActivityFeed() {
  const getIcon = (category: string) => {
    switch (category) {
      case "sleep":
        return <Clock size={14} className="text-yellow-400" />;
      case "screentime":
        return <ShieldAlert size={14} className="text-rose-400" />;
      case "focus":
        return <Brain size={14} className="text-amber-500" />;
      case "exercise":
        return <Zap size={14} className="text-emerald-400" />;
      case "system":
      default:
        return <Sparkles size={14} className="text-zinc-400" />;
    }
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "positive":
        return "border-emerald-500/20 bg-emerald-500/5 text-emerald-400";
      case "warning":
        return "border-rose-500/20 bg-rose-500/5 text-rose-400";
      case "milestone":
        return "border-yellow-500/20 bg-yellow-500/5 text-yellow-500";
      case "info":
      default:
        return "border-white/5 bg-white/[0.02] text-zinc-400";
    }
  };

  return (
    <div className="gold-card rounded-3xl p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
            <Activity size={18} className="text-yellow-500" />
            Live Ingestion Feed
          </h3>
          <span className="text-xs text-zinc-500 font-mono">Real-time signals</span>
        </div>

        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
          {activities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ x: 3 }}
              className={`flex items-center justify-between gap-4 rounded-xl border p-3.5 transition-all duration-200 bg-white/[0.01] hover:bg-white/[0.03] ${getTypeStyle(item.type)}`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-8 w-8 rounded-lg bg-black/45 border border-white/5 flex items-center justify-center shrink-0">
                  {getIcon(item.category)}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-white truncate leading-relaxed">
                    {item.title}
                  </p>
                  <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold mt-0.5 block">
                    {item.category}
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-zinc-500 font-mono shrink-0 font-light">
                {item.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="text-[10px] text-zinc-600 text-center mt-4 border-t border-white/5 pt-3">
        Showing last 5 active behavioral logs ingested from local sensor array.
      </div>
    </div>
  );
}