import {
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function BehaviorHealth() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-bold">
        Behavior Health
      </h2>

      <div className="mt-4 text-5xl font-bold text-green-400">
        92%
      </div>

      <p className="mt-2 text-zinc-400">
        Excellent
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-400" />
          Sleep Quality
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-400" />
          Focus Stability
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-400" />
          Exercise Routine
        </div>

        <div className="flex items-center gap-3">
          <AlertTriangle className="text-yellow-400" />
          Screen Balance
        </div>
      </div>
    </div>
  );
}