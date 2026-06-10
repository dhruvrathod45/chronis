import AppLayout from "../components/layout/AppLayout";
import PageWrapper from "../components/layout/PageWrapper";

export default function Reporting() {
  return (
    <AppLayout>
      <PageWrapper>
        <div className="space-y-6">
          <div className="gold-card rounded-2xl p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-500">
              Intelligence Reports
            </p>

            <h1 className="luxury-title mt-3 text-5xl">
              Reporting Center
            </h1>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="gold-card rounded-2xl p-5">
              <p className="text-zinc-500">
                Generated Reports
              </p>

              <h2 className="mt-3 text-4xl font-bold text-yellow-400">
                26
              </h2>
            </div>

            <div className="gold-card rounded-2xl p-5">
              <p className="text-zinc-500">
                Avg Confidence
              </p>

              <h2 className="mt-3 text-4xl font-bold text-yellow-400">
                89%
              </h2>
            </div>

            <div className="gold-card rounded-2xl p-5">
              <p className="text-zinc-500">
                Events Tracked
              </p>

              <h2 className="mt-3 text-4xl font-bold text-yellow-400">
                32
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="gold-card rounded-2xl p-6">
              <h2 className="text-2xl font-semibold">
                Weekly Report
              </h2>

              <p className="mt-4 text-zinc-400">
                Productivity increased 8%.
                Sleep consistency improved 12%.
              </p>
            </div>

            <div className="gold-card rounded-2xl p-6">
              <h2 className="text-2xl font-semibold">
                Monthly Report
              </h2>

              <p className="mt-4 text-zinc-400">
                Behavioral stability remained
                consistently high.
              </p>
            </div>
          </div>

          <div className="gold-card rounded-2xl p-6">
            <button className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105">
              Export PDF Report
            </button>
          </div>

          <div className="gold-card rounded-2xl p-6">
            <h2 className="mb-5 text-xl font-semibold">
              Report History
            </h2>

            <div className="space-y-3">
              <div className="rounded-xl border border-white/5 p-4">
                May 2025 Report
              </div>

              <div className="rounded-xl border border-white/5 p-4">
                April 2025 Report
              </div>

              <div className="rounded-xl border border-white/5 p-4">
                March 2025 Report
              </div>

              <div className="rounded-xl border border-white/5 p-4">
                February 2025 Report
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </AppLayout>
  );
}