export interface DataPoint {
  date: string;
  productivity: number;
  sleep: number;
  focus: number;
  screenTime: number;
  exercise: number;
}

export const behaviorData7D: DataPoint[] = [
  { date: "Mon", productivity: 82, sleep: 7.2, focus: 80, screenTime: 4.5, exercise: 30 },
  { date: "Tue", productivity: 88, sleep: 7.5, focus: 85, screenTime: 3.8, exercise: 45 },
  { date: "Wed", productivity: 75, sleep: 6.1, focus: 70, screenTime: 5.2, exercise: 0 },
  { date: "Thu", productivity: 91, sleep: 7.8, focus: 92, screenTime: 3.2, exercise: 60 },
  { date: "Fri", productivity: 85, sleep: 7.0, focus: 82, screenTime: 4.1, exercise: 30 },
  { date: "Sat", productivity: 68, sleep: 8.5, focus: 65, screenTime: 6.0, exercise: 0 },
  { date: "Sun", productivity: 72, sleep: 8.2, focus: 74, screenTime: 5.5, exercise: 45 },
];

export const behaviorData30D: DataPoint[] = [
  { date: "W1", productivity: 78, sleep: 6.8, focus: 75, screenTime: 4.8, exercise: 120 },
  { date: "W2", productivity: 83, sleep: 7.1, focus: 80, screenTime: 4.2, exercise: 150 },
  { date: "W3", productivity: 80, sleep: 6.9, focus: 78, screenTime: 4.5, exercise: 90 },
  { date: "W4", productivity: 89, sleep: 7.6, focus: 88, screenTime: 3.6, exercise: 210 },
];

export const behaviorData6M: DataPoint[] = [
  { date: "Jan", productivity: 72, sleep: 6.4, focus: 71, screenTime: 5.1, exercise: 110 },
  { date: "Feb", productivity: 76, sleep: 6.7, focus: 74, screenTime: 4.9, exercise: 130 },
  { date: "Mar", productivity: 81, sleep: 7.0, focus: 80, screenTime: 4.4, exercise: 160 },
  { date: "Apr", productivity: 78, sleep: 6.8, focus: 77, screenTime: 4.7, exercise: 140 },
  { date: "May", productivity: 85, sleep: 7.3, focus: 84, screenTime: 4.0, exercise: 180 },
  { date: "Jun", productivity: 89, sleep: 7.5, focus: 88, screenTime: 3.8, exercise: 200 },
];

export const behaviorData = behaviorData6M;