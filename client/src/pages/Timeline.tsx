import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import PageWrapper from "../components/layout/PageWrapper";
import TimelineView from "../components/timeline/TimelineView";
import AnimatedNumber from "../components/dashboard/AnimatedNumber";
import { BrainCircuit, Filter, Search } from "lucide-react";

export default function Timeline() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { key: "all", label: "All Events" },
    { key: "sleep", label: "Sleep" },
    { key: "focus", label: "Focus" },
    { key: "screentime", label: "Screen Time" },
    { key: "exercise", label: "Exercise" },
    { key: "system", label: "System" },
  ];

  return (
    <AppLayout>
      <PageWrapper>
        <div className="space-y-6 pb-12">
          {/* HEADER */}
          <div className="gold-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <BrainCircuit size={100} className="text-yellow-400" />
            </div>
            
            <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-semibold">
              Behavioral Narrative
            </p>

            <h1 className="mt-3 text-3xl sm:text-4xl font-bold luxury-title text-white">
              Intelligence Timeline
            </h1>

            <p className="mt-3 max-w-3xl text-sm text-zinc-400 font-light leading-relaxed">
              A chronological ledger of major behavioral shifts, sensor-level milestones,
              confidence updates, and AI-synthesized habit anomalies.
            </p>
          </div>

          {/* STATS */}
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="gold-card rounded-2xl p-5 flex flex-col justify-between">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Tracked Events</p>
              <h2 className="mt-3 text-3xl font-extrabold text-yellow-400 font-mono">
                <AnimatedNumber value={32} />
              </h2>
            </div>

            <div className="gold-card rounded-2xl p-5 flex flex-col justify-between">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Behavioral Changes</p>
              <h2 className="mt-3 text-3xl font-extrabold text-white font-mono">
                <AnimatedNumber value={11} />
              </h2>
            </div>

            <div className="gold-card rounded-2xl p-5 flex flex-col justify-between">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Mean Confidence</p>
              <h2 className="mt-3 text-3xl font-extrabold text-white font-mono">
                <AnimatedNumber value={91} suffix="%" />
              </h2>
            </div>
          </div>

          {/* JUMP TO PERIOD */}
          <div className="gold-card rounded-2xl p-4 flex flex-wrap items-center gap-3">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest font-mono">Jump to Period:</span>
            <div className="flex gap-2">
              {["2026", "2025"].map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => {
                    const el = document.getElementById(`timeline-year-${year}`);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="btn-outline-gold px-3.5 py-1.5 rounded-lg text-[10px] font-mono font-bold hover:bg-white/5 transition cursor-pointer"
                >
                  Year {year}
                </button>
              ))}
            </div>
          </div>

          {/* FILTER CONTROLS */}
          <div className="gold-card rounded-2xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search timeline narrative..."
                className="w-full pl-9 pr-4 py-2 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/40 transition font-mono"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] sm:text-xs">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    selectedCategory === cat.key
                      ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/25 font-bold"
                      : "text-zinc-500 hover:text-zinc-300 border border-transparent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* TIMELINE VIEW CONTAINER */}
          <div className="gold-card rounded-3xl p-6 sm:p-8">
            <TimelineView selectedCategory={selectedCategory} searchQuery={searchQuery} />
          </div>
        </div>
      </PageWrapper>
    </AppLayout>
  );
}