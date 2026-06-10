import AppLayout from "../components/layout/AppLayout";

export default function InsightDetail() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* HEADER */}

        <div className="gold-card rounded-2xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
            Insight Explorer
          </p>

          <h1 className="mt-4 text-4xl font-semibold luxury-title">
            Sleep Consistency Improved
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <div className="rounded-full bg-green-500/10 px-4 py-2 text-green-400">
              Confidence 87%
            </div>

            <div className="rounded-full bg-yellow-500/10 px-4 py-2 text-yellow-400">
              High Reliability
            </div>
          </div>
        </div>

        {/* MAIN GRID */}

        <div className="grid gap-5 lg:grid-cols-3">
          {/* LEFT */}

          <div className="lg:col-span-2 space-y-5">
            <div className="gold-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold">
                Supporting Evidence
              </h2>

              <p className="mt-4 leading-8 text-zinc-400">
                Sleep duration increased from
                6.2 hours to 7.4 hours over
                the last 14 days.
              </p>
            </div>

            <div className="gold-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold">
                Behavioral Change
              </h2>

              <p className="mt-4 leading-8 text-zinc-400">
                Earlier bedtimes became
                increasingly consistent
                throughout the week.
              </p>
            </div>

            <div className="gold-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold">
                Potential Cause
              </h2>

              <p className="mt-4 leading-8 text-zinc-400">
                Reduced late-night screen
                activity strongly correlates
                with improved sleep patterns.
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-5">
            <div className="gold-card rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-yellow-400">
                Confidence
              </h2>

              <div className="mt-4">
                <div className="text-5xl font-bold">
                  87%
                </div>

                <div className="mt-4 h-2 rounded-full bg-zinc-800">
                  <div className="h-2 w-[87%] rounded-full bg-yellow-500" />
                </div>
              </div>
            </div>

            <div className="gold-card rounded-2xl p-6">
              <h2 className="text-lg font-semibold">
                Missing Data
              </h2>

              <p className="mt-4 text-zinc-400">
                Weekend sleep records were
                unavailable during analysis.
              </p>
            </div>

            <div className="gold-card rounded-2xl p-6">
              <h2 className="text-lg font-semibold">
                Recommendation
              </h2>

              <p className="mt-4 text-zinc-400">
                Continue maintaining a
                consistent sleep schedule and
                avoid device usage after 11 PM.
              </p>
            </div>
          </div>
        </div>

        {/* AI NARRATIVE */}

        <div className="gold-card rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-yellow-400">
            AI Narrative
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Chronis detected a positive
            behavioral trend. Improved sleep
            consistency appears strongly linked
            with increased focus, productivity,
            and overall behavioral stability.
            If current habits continue, the
            model predicts further confidence
            growth over the next 30 days.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}