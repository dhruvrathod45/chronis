import TimelineEvent from "./TimelineEvent";

const events = [
  {
    month: "Q1 2025",
    title: "Behavior Baseline Established",
    description:
      "Chronis collected sufficient behavioral signals to establish an initial user baseline and confidence profile.",
  },

  {
    month: "Q2 2025",
    title: "Sleep Optimization Detected",
    description:
      "Average sleep duration increased from 6.2h to 7.4h with improved consistency across weekdays.",
  },

  {
    month: "Q3 2025",
    title: "Focus Recovery",
    description:
      "Deep work sessions increased significantly while context switching decreased by 18%.",
  },

  {
    month: "Q4 2025",
    title: "Productivity Surge",
    description:
      "Behavioral analysis identified stronger work patterns and higher task completion rates.",
  },

  {
    month: "Q1 2026",
    title: "Confidence Peak",
    description:
      "Prediction confidence reached 91% due to increased data quality and behavioral consistency.",
  },
];

export default function TimelineView() {
  return (
    <div className="relative space-y-10">
      <div className="absolute left-[9px] top-0 h-full w-[2px] bg-gradient-to-b from-yellow-500 via-yellow-500/30 to-transparent" />

      {events.map((event) => (
        <TimelineEvent
          key={event.month}
          {...event}
        />
      ))}
    </div>
  );
}