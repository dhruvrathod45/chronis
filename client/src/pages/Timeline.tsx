import AppLayout from "../components/layout/AppLayout";
import TimelineView from "../components/timeline/TimelineView";

export default function Timeline() {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* HEADER */}

        <div className="gold-card rounded-2xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
            Behavioral Narrative
          </p>

          <h1 className="mt-4 text-4xl font-semibold luxury-title">
            Intelligence Timeline
          </h1>

          <p className="mt-4 max-w-3xl text-zinc-400">
            A chronological view of major behavioral shifts,
            detected milestones, confidence changes and
            intelligence-generated narratives.
          </p>
        </div>

        {/* STATS */}

        <div className="grid gap-5 md:grid-cols-3">
          <div className="gold-card rounded-2xl p-6">
            <p className="text-zinc-500">Tracked Events</p>

            <h2 className="mt-3 text-4xl font-bold text-yellow-400">
              32
            </h2>
          </div>

          <div className="gold-card rounded-2xl p-6">
            <p className="text-zinc-500">Behavior Changes</p>

            <h2 className="mt-3 text-4xl font-bold">
              11
            </h2>
          </div>

          <div className="gold-card rounded-2xl p-6">
            <p className="text-zinc-500">Confidence</p>

            <h2 className="mt-3 text-4xl font-bold">
              91%
            </h2>
          </div>
        </div>

        {/* TIMELINE */}

        <div className="gold-card rounded-2xl p-8">
          <TimelineView />
        </div>
      </div>
    </AppLayout>
  );
}