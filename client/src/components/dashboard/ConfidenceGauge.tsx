import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function ConfidenceGauge() {
  const { colors } = useTheme();
  const percentage = 91;
  const radius = 65;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius; // ~408.4

  return (
    <div className="gold-card rounded-3xl p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-yellow-400">
            System Confidence
          </h2>
          <span className="text-xs text-zinc-500 flex items-center gap-1 font-mono">
            <CheckCircle2 size={12} className="text-yellow-500" />
            Calibrated
          </span>
        </div>

        <div className="relative flex items-center justify-center py-6">
          {/* Radial SVG Gauge */}
          <svg className="w-44 h-44 transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="88"
              cy="88"
              r={radius}
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth={strokeWidth}
            />
            {/* Animated progress circle */}
            <motion.circle
              cx="88"
              cy="88"
              r={radius}
              fill="transparent"
              stroke="url(#confidenceGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: circumference - (circumference * percentage) / 100 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
            {/* SVG Gradient definitions */}
            <defs>
              <linearGradient id="confidenceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.light} />
                <stop offset="50%" stopColor={colors.primary} />
                <stop offset="100%" stopColor={colors.dark} />
              </linearGradient>
            </defs>
          </svg>

          {/* Core Gauge Value inside */}
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-extrabold tracking-tight text-white font-mono">
              {percentage}%
            </span>
            <span className="text-[10px] text-yellow-500 uppercase tracking-widest font-semibold mt-1">
              High Trust
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-500">Signal Stability</span>
          <span className="text-yellow-500 font-medium font-mono">Strong (0.94)</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-500">Telemetry Density</span>
          <span className="text-zinc-300 font-medium font-mono">14,240 pkts</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-500">Noise Factor</span>
          <span className="text-emerald-400 font-medium font-mono flex items-center gap-1">
            Low (0.04)
          </span>
        </div>
      </div>
    </div>
  );
}