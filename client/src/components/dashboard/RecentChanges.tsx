import { TrendingUp, TrendingDown, Clock, Brain, Activity, Smartphone } from "lucide-react";

interface ChangeItem {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: typeof Clock;
  iconColor: string;
}

export default function RecentChanges() {
  const changes: ChangeItem[] = [
    {
      label: "Sleep Latency",
      value: "15m mean",
      change: "-18.2%",
      positive: true, // reduction in latency is positive
      icon: Clock,
      iconColor: "text-yellow-500 bg-yellow-500/10",
    },
    {
      label: "Focus Integrity",
      value: "38m blocks",
      change: "+6.8%",
      positive: true,
      icon: Brain,
      iconColor: "text-amber-500 bg-amber-500/10",
    },
    {
      label: "Screen Time",
      value: "3.8h daily",
      change: "-12.4%",
      positive: true, // reduction in screen time is positive
      icon: Smartphone,
      iconColor: "text-rose-500 bg-rose-500/10",
    },
    {
      label: "Exercise Zones",
      value: "45m sessions",
      change: "+15.4%",
      positive: true,
      icon: Activity,
      iconColor: "text-emerald-500 bg-emerald-500/10",
    },
  ];

  return (
    <div className="gold-card rounded-3xl p-6 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-5 flex items-center gap-2">
          <TrendingUp size={16} className="text-yellow-500" />
          Recent Behavioral shifts
        </h2>

        <div className="space-y-4">
          {changes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl border border-white/5 ${item.iconColor}`}>
                    <Icon size={14} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block font-semibold uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold text-white mt-0.5 block font-mono">
                      {item.value}
                    </span>
                  </div>
                </div>

                <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded border flex items-center gap-0.5 ${
                  item.positive
                    ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                    : "text-rose-400 bg-rose-500/10 border-rose-500/20"
                }`}>
                  {item.positive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                  {item.change}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}