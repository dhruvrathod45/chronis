import CountUp from "react-countup";

export default function AIAnalysis() {
  return (
    <div className="gold-card rounded-2xl p-6 h-full">
      <h2 className="text-lg font-semibold text-yellow-400">
        AI Engine Status
      </h2>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-zinc-500 text-sm">
            Status
          </p>

          <p className="text-green-400 font-semibold">
            ● Active
          </p>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">
            Signals Processed
          </p>

          <h3 className="text-3xl font-bold">
            <CountUp end={12483} separator="," />
          </h3>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">
            Predictions Generated
          </p>

          <h3 className="text-3xl font-bold">
            <CountUp end={842} />
          </h3>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">
            Model Confidence
          </p>

          <h3 className="text-3xl font-bold text-yellow-400">
            91%
          </h3>
        </div>
      </div>
    </div>
  );
}