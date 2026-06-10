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
  category: string;
}