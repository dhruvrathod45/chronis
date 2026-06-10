export default function StatsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="gold-card rounded-2xl p-5">
        <p className="text-zinc-500">
          Sleep Quality
        </p>

        <h3 className="mt-2 text-3xl font-bold text-yellow-400">
          91%
        </h3>
      </div>

      <div className="gold-card rounded-2xl p-5">
        <p className="text-zinc-500">
          Focus Score
        </p>

        <h3 className="mt-2 text-3xl font-bold text-yellow-400">
          88%
        </h3>
      </div>

      <div className="gold-card rounded-2xl p-5">
        <p className="text-zinc-500">
          Stability
        </p>

        <h3 className="mt-2 text-3xl font-bold text-yellow-400">
          94%
        </h3>
      </div>
    </div>
  );
}