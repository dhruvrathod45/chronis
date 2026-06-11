import TimelineEvent from "./TimelineEvent";

interface Event {
  month: string;
  year: string;
  title: string;
  description: string;
  category: "sleep" | "focus" | "screentime" | "exercise" | "system" | "productivity";
  insightId?: string;
  confidence?: number;
}

const events: Event[] = [
  {
    month: "Q1",
    year: "2025",
    title: "Behavior Baseline Established",
    description:
      "Chronis collected sufficient behavioral signals to establish an initial user baseline and confidence profile.",
    category: "system",
    confidence: 75,
  },
  {
    month: "Q2",
    year: "2025",
    title: "Sleep Optimization Detected",
    description:
      "Average sleep duration increased from 6.2h to 7.4h with improved consistency across weekdays.",
    category: "sleep",
    insightId: "sleep-consistency",
    confidence: 87,
  },
  {
    month: "Q3",
    year: "2025",
    title: "Focus Recovery Phase",
    description:
      "Deep work sessions increased significantly while context switching decreased by 18%.",
    category: "focus",
    insightId: "focus-recovery",
    confidence: 76,
  },
  {
    month: "Q3",
    year: "2025",
    title: "Late-Night Screen Time Anomaly",
    description:
      "Screen time spiked during late evenings (11 PM - 2 AM), correlating with an immediate dip in next-day focus metrics.",
    category: "screentime",
    insightId: "screen-time-spike",
    confidence: 93,
  },
  {
    month: "Q4",
    year: "2025",
    title: "Productivity Surge",
    description:
      "Behavioral analysis identified stronger work patterns and higher task completion rates.",
    category: "productivity",
    confidence: 85,
  },
  {
    month: "Q4",
    year: "2025",
    title: "Exercise Routine Adaptation",
    description:
      "Logged 30+ minutes of aerobic activity, establishing a clear focus amplification pattern in the subsequent 2 hours.",
    category: "exercise",
    insightId: "habit-recalibration",
    confidence: 81,
  },
  {
    month: "Q1",
    year: "2026",
    title: "Confidence Peak",
    description:
      "Prediction confidence reached 91% due to increased data quality and behavioral consistency.",
    category: "system",
    confidence: 91,
  },
];

interface Props {
  selectedCategory: string;
  searchQuery: string;
}

export default function TimelineView({ selectedCategory, searchQuery }: Props) {
  // 1. Filter events
  const filteredEvents = events.filter((e) => {
    const matchesCategory = selectedCategory === "all" || e.category === selectedCategory;
    const matchesSearch = 
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      e.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 2. Group events by Year
  const years = Array.from(new Set(filteredEvents.map((e) => e.year))).sort(
    (a, b) => b.localeCompare(a) // reverse chronological
  );

  return (
    <div className="space-y-12 relative">
      {filteredEvents.length > 0 ? (
        years.map((year) => {
          const yearEvents = filteredEvents.filter((e) => e.year === year);
          return (
            <div key={year} id={`timeline-year-${year}`} className="space-y-6 scroll-mt-24">
              {/* Year Heading Group */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-extrabold font-mono text-yellow-500 uppercase tracking-widest bg-yellow-500/10 px-3 py-1 rounded-lg border border-yellow-500/20">
                  Year {year}
                </span>
                <div className="h-[1px] flex-1 bg-white/5" />
              </div>

              {/* Stacked Timeline for Year */}
              <div className="relative space-y-8 pl-2 sm:pl-4">
                {/* Vertical Line for this block */}
                <div className="absolute left-[9px] top-4 h-[calc(100%-16px)] w-[2px] bg-gradient-to-b from-yellow-500/60 via-yellow-500/20 to-transparent" />

                {yearEvents.map((event, idx) => (
                  <TimelineEvent
                    key={`${event.title}-${idx}`}
                    month={event.month}
                    title={event.title}
                    description={event.description}
                    category={event.category}
                    insightId={event.insightId}
                    confidence={event.confidence}
                  />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center py-12 text-zinc-500 text-sm">
          No historical events match current search and filters.
        </div>
      )}
    </div>
  );
}