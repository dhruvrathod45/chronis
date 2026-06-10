import {
  CheckCircle,
  Activity,
  Brain,
  Database,
} from "lucide-react";

export default function SystemStatus() {
  const systems = [
    {
      name: "Behavior Engine",
      icon: Brain,
    },
    {
      name: "Data Processing",
      icon: Database,
    },
    {
      name: "Trend Analysis",
      icon: Activity,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        System Status
      </h2>

      <div className="space-y-5">
        {systems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-violet-400" />
                <span>{item.name}</span>
              </div>

              <CheckCircle className="text-green-400" />
            </div>
          );
        })}
      </div>
    </div>
  );
}