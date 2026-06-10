import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: any[];
}

export default function BehaviorChart({
  data,
}: Props) {
  return (
    <div className="h-[380px]">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
            Analytics
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            Productivity Trend
          </h3>
        </div>

        <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
          +18.2%
        </div>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.06)"
          />

          <XAxis
            dataKey="date"
            stroke="#888"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#0A0A0A",
              border: "1px solid rgba(212,175,55,.2)",
              borderRadius: "16px",
              color: "#fff",
            }}
          />

          <Line
            type="monotone"
            dataKey="productivity"
            stroke="#D4AF37"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#D4AF37",
            }}
            activeDot={{
              r: 8,
              fill: "#D4AF37",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}