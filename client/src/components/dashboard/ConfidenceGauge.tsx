export default function ConfidenceGauge() {
  return (
    <div className="gold-card rounded-2xl p-6">
      <h2 className="text-xl font-semibold">
        Confidence Gauge
      </h2>

      <div className="mt-6 flex justify-center">
        <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-yellow-500">
          <span className="text-4xl font-bold">
            91%
          </span>
        </div>
      </div>
    </div>
  );
}