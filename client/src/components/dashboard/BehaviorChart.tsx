import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { getBehaviorData } from "../../services/api";
import type { DataPoint } from "../../data/mockBehaviorData";
import { Calendar, TrendingUp } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function BehaviorChart() {
  const { colors } = useTheme();

  const [timeframe, setTimeframe] = useState<'7D' | '30D' | '6M'>('6M');
  const [activeMetric, setActiveMetric] = useState<keyof Omit<DataPoint, 'date'>>('productivity');
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBehaviorData(timeframe).then((data) => {
      setChartData(data);
      setLoading(false);
    });
  }, [timeframe]);

  const metrics: { key: keyof Omit<DataPoint, 'date'>; label: string; color: string; unit: string }[] = [
    { key: "productivity", label: "Productivity", color: colors.primary, unit: "%" },
    { key: "sleep", label: "Sleep Quality", color: colors.light, unit: "h" },
    { key: "focus", label: "Focus Intensity", color: colors.dark, unit: "%" },
    { key: "screenTime", label: "Screen Time", color: "#ef4444", unit: "h" },
  ];

  const currentMetric = metrics.find((m) => m.key === activeMetric) || metrics[0];

  const calculateChange = () => {
    if (chartData.length < 2) return "+0.0%";
    const first = chartData[0][activeMetric];
    const last = chartData[chartData.length - 1][activeMetric];
    if (first === 0) return "+0.0%";
    const pct = ((last - first) / first) * 100;
    return `${pct >= 0 ? "+" : ""}${pct.toFixed(1)}%`;
  };

  return (
    <div className="h-[400px] flex flex-col justify-between">
      {/* Chart Headers & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-1 flex items-center gap-1">
            <TrendingUp size={10} />
            Signal Telemetry
          </p>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-white">
              {currentMetric.label}
            </h3>
            <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${
              calculateChange().startsWith('+') ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20" : "text-rose-400 bg-rose-500/10 border border-rose-500/20"
            }`}>
              {calculateChange()}
            </span>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex items-center bg-white/[0.03] border border-white/5 p-1 rounded-xl self-start sm:self-auto font-mono text-xs">
          {(['7D', '30D', '6M'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                timeframe === t
                  ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/25 font-bold"
                  : "text-zinc-500 hover:text-zinc-300 border border-transparent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Selectors */}
      <div className="flex flex-wrap gap-2 mb-4">
        {metrics.map((m) => (
          <button
            key={m.key}
            onClick={() => setActiveMetric(m.key)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              activeMetric === m.key
                ? "bg-gradient-to-r from-yellow-500/10 to-transparent border-yellow-500/30 text-yellow-500 shadow-sm"
                : "bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Recharts Area Chart Container */}
      <div className="flex-1 w-full min-h-0 relative">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <span className="text-xs text-zinc-500 animate-pulse flex items-center gap-2">
              <Calendar className="animate-spin-slow" size={14} />
              Re-indexing metrics...
            </span>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="95%">
            <AreaChart data={chartData} margin={{ left: -10, right: 10, top: 10, bottom: 5 }}>
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={currentMetric.color} stopOpacity={0.18} />
                  <stop offset="95%" stopColor={currentMetric.color} stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.03)"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                stroke="#52525b"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10, fontWeight: 500 }}
              />
              <YAxis
                stroke="#52525b"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10, fontWeight: 500 }}
                unit={currentMetric.unit}
              />
              <Tooltip
                contentStyle={{
                  background: "#080808",
                  border: "1px solid rgba(212,175,55,.2)",
                  borderRadius: "16px",
                  color: "#fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
                  fontSize: 12,
                }}
                labelStyle={{ fontWeight: "bold", color: "#a1a1aa", marginBottom: 4 }}
              />
              <Area
                type="monotone"
                dataKey={activeMetric}
                stroke={currentMetric.color}
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#chartGradient)"
                dot={timeframe === '7D' ? { r: 3, fill: currentMetric.color, strokeWidth: 1 } : false}
                activeDot={{ r: 6, fill: currentMetric.color, strokeWidth: 1 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}