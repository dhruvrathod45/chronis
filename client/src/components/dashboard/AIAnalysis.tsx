import { useState, useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";
import { Cpu, Database, Eye, Sparkles, Clock, ShieldCheck, Wifi } from "lucide-react";
import { motion } from "framer-motion";

export default function AIAnalysis() {
  const [time, setTime] = useState(new Date());
  const [coreLoad, setCoreLoad] = useState(74.5);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const coreTimer = setInterval(() => {
      setCoreLoad((prev) => {
        const delta = (Math.random() - 0.5) * 6; // fluctuate by up to 3%
        const next = prev + delta;
        return Math.max(62, Math.min(88, next));
      });
    }, 1500);
    return () => {
      clearInterval(timer);
      clearInterval(coreTimer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="gold-card rounded-3xl p-6 h-full flex flex-col justify-between">
      <div>
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-yellow-400 flex items-center gap-2">
            <Cpu size={16} className="text-yellow-500 animate-pulse" />
            AI Core Telemetry
          </h2>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ONLINE
          </span>
        </div>

        {/* Real-time Clock & Last Updated */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-5 flex justify-between items-center">
          <div>
            <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-semibold">AI System Clock</span>
            <span className="text-lg font-bold font-mono text-white tracking-wider mt-0.5 block">
              {formatTime(time)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-semibold">Last Updated</span>
            <span className="text-xs font-mono text-yellow-500 mt-1 block">
              {formatDate(time)}
            </span>
          </div>
        </div>

        {/* Telemetry Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
            <p className="text-zinc-500 text-[10px] flex items-center gap-1.5 mb-1.5 uppercase tracking-wider font-semibold">
              <Database size={11} className="text-zinc-400" />
              Signals Ingested
            </p>
            <h3 className="text-xl font-bold tracking-tight text-white font-mono">
              <AnimatedNumber value={12483} />
            </h3>
            <span className="text-[9px] text-zinc-500 block mt-0.5">238.4 signals/sec</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
            <p className="text-zinc-500 text-[10px] flex items-center gap-1.5 mb-1.5 uppercase tracking-wider font-semibold">
              <Sparkles size={11} className="text-zinc-400" />
              Accuracy Rating
            </p>
            <h3 className="text-xl font-bold tracking-tight text-white font-mono">
              <AnimatedNumber value={94} suffix=".2%" />
            </h3>
            <span className="text-[9px] text-zinc-500 block mt-0.5">Confidence Delta &lt; 2.1%</span>
          </div>
        </div>

        {/* Meters */}
        <div className="mt-6 space-y-4">
          <div>
            <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
              <span className="flex items-center gap-1">
                <Wifi size={12} className="text-yellow-500" />
                Signal Quality Meter
              </span>
              <span className="font-mono text-yellow-500">98.4%</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "98.4%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-500" />
                AI Health Status
              </span>
              <span className="font-mono text-emerald-400">99.8%</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "99.8%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-emerald-500 rounded-full"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
              <span className="flex items-center gap-1">
                <Cpu size={12} className="text-amber-500" />
                Neural Core Load
              </span>
              <span className="font-mono text-amber-500">{coreLoad.toFixed(1)}%</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${coreLoad}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500">
        <span className="flex items-center gap-1">
          <Eye size={12} />
          Telemetry Context Window: 120D
        </span>
        <span className="font-mono">v2.4.1-alpha</span>
      </div>
    </div>
  );
}