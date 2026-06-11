import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Compass } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const data = [
  { subject: "Sleep", value: 82, fullMark: 100 },
  { subject: "Focus", value: 76, fullMark: 100 },
  { subject: "Exercise", value: 90, fullMark: 100 },
  { subject: "Productivity", value: 88, fullMark: 100 },
  { subject: "Screen Time", value: 65, fullMark: 100 },
];

export default function RadarMetrics() {
  const { colors } = useTheme();

  return (
    <div className="gold-card rounded-3xl p-6 h-[400px] flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
          <Compass size={18} className="text-yellow-500" />
          Behavioral Balance
        </h2>
        <span className="text-xs text-zinc-500 font-mono">5 Telemetries</span>
      </div>

      <div className="flex-1 w-full h-full flex items-center justify-center min-h-0">
        <ResponsiveContainer width="100%" height="95%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3 3" />
            <PolarAngleAxis 
              dataKey="subject" 
              stroke="#a1a1aa" 
              tick={{ fill: "#a1a1aa", fontSize: 11, fontWeight: 500 }} 
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              stroke="rgba(255, 255, 255, 0.03)" 
              tick={{ fill: "#52525b", fontSize: 9 }}
            />
            <Radar
              name="Behavior Score"
              dataKey="value"
              stroke={colors.primary}
              fill={colors.primary}
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-[11px] text-zinc-500 text-center mt-2 border-t border-white/5 pt-3">
        Radar metrics show relative stability scores compared to baseline model constraints.
      </div>
    </div>
  );
}