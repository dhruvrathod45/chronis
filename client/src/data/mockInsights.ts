export interface BehaviorData {
  date: string;
  sleep: number;
  focus: number;
  productivity: number;
  screenTime: number;
  exercise: number;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  confidence: number;
  evidence: string;
  category: 'sleep' | 'focus' | 'productivity' | 'screentime' | 'exercise';
  reliability: 'High Reliability' | 'Medium Reliability' | 'Low Reliability';
  timeRange: string;
  missingData: string;
  recommendation: string;
  aiNarrative: string;
  causes: string[];
  shifts: string[];
}

export const mockInsights: Insight[] = [
  {
    id: "sleep-consistency",
    title: "Sleep Consistency Improved",
    description: "Your bedtime schedule has stabilized, leading to a higher ratio of deep to light sleep.",
    confidence: 87,
    evidence: "Average sleep duration increased from 6.2 hours to 7.4 hours over the last 14 days.",
    category: "sleep",
    reliability: "High Reliability",
    timeRange: "Last 14 days",
    missingData: "Weekend sleep records were unavailable during analysis.",
    recommendation: "Continue maintaining a consistent sleep schedule and avoid device usage after 11 PM.",
    aiNarrative: "Chronis detected a positive behavioral trend. Improved sleep consistency appears strongly linked with increased focus, productivity, and overall behavioral stability. If current habits continue, the model predicts further confidence growth over the next 30 days.",
    causes: [
      "Reduced late-night screen activity strongly correlates with improved sleep patterns.",
      "Engaging in light evening stretching or reading instead of cognitive-heavy tasks."
    ],
    shifts: [
      "Earlier bedtimes became increasingly consistent throughout the week.",
      "Reduced sleep latency (time to fall asleep) by approximately 15 minutes."
    ]
  },
  {
    id: "focus-recovery",
    title: "Focus Recovery",
    description: "Deep work sessions increased significantly while context switching decreased by 18%.",
    confidence: 76,
    evidence: "Average focus block length grew from 22 minutes to 38 minutes over 30 days.",
    category: "focus",
    reliability: "Medium Reliability",
    timeRange: "Last 30 days",
    missingData: "Application usage logging was partially interrupted on Tuesdays.",
    recommendation: "Block distracting communication apps between 9 AM and 12 PM.",
    aiNarrative: "Chronis observed a clear correlation between morning exercise and prolonged high-focus periods in the early afternoon. Reducing multi-tasking behaviors has allowed for sustained cognitive states.",
    causes: [
      "Scheduled 'Do Not Disturb' blocks on work devices.",
      "Consistent morning exercise establishing a higher early-day baseline."
    ],
    shifts: [
      "Daily email checks consolidated from 15 times/day to 3 times/day.",
      "Fewer tabs open concurrently during primary work hours."
    ]
  },
  {
    id: "screen-time-spike",
    title: "Late-Night Screen Time Anomaly",
    description: "Screen time increased in the late hours of the evening, causing immediate sleep quality drop.",
    confidence: 93,
    evidence: "Average late-night screen activity (11 PM - 2 AM) increased by 45 minutes this week.",
    category: "screentime",
    reliability: "High Reliability",
    timeRange: "Last 7 days",
    missingData: "Mobile app usage tracking was disabled for social media categorization.",
    recommendation: "Set a screen-time lock on your phone starting at 10:30 PM.",
    aiNarrative: "A sharp uptick in late-night device interaction has directly degraded subsequent sleep efficiency by 12%. The model flags this as a critical negative behavior trigger.",
    causes: [
      "Irregular working hours leading to screen exposure before bedtime.",
      "Engagement in high-dopamine social applications late at night."
    ],
    shifts: [
      "Average sleep latency went up from 12 minutes to 35 minutes.",
      "Reported next-day cognitive fatigue increased by 20%."
    ]
  },
  {
    id: "habit-recalibration",
    title: "Post-Exercise Focus Peak",
    description: "Focus and productivity scores peak consistently in the 2-hour window following physical exercise.",
    confidence: 81,
    evidence: "Post-workout focus scores are 24% higher compared to sedentary control periods.",
    category: "exercise",
    reliability: "High Reliability",
    timeRange: "Last 60 days",
    missingData: "Heart rate monitor data sync failed on three workouts.",
    recommendation: "Align demanding task blocks (e.g. coding or writing) with post-exercise periods.",
    aiNarrative: "Behavioral analysis confirms that 30+ minutes of aerobic activity significantly primes cognitive function. Productivity spikes are sustained and reliable.",
    causes: [
      "Increased cerebral blood flow and endorphine release post-exercise.",
      "Reduction in overall physiological stress levels."
    ],
    shifts: [
      "Increased task completion rate within the 2-hour post-workout window.",
      "Self-reported focus quality rated 4.5/5 after activity."
    ]
  }
];