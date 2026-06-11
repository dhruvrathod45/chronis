import { mockInsights } from "../data/mockInsights";
import type { Insight } from "../data/mockInsights";
import { behaviorData7D, behaviorData30D, behaviorData6M } from "../data/mockBehaviorData";
import type { DataPoint } from "../data/mockBehaviorData";

export const getInsights = (): Promise<Insight[]> => {
  return Promise.resolve(mockInsights);
};

export const getInsightById = (id: string): Promise<Insight | undefined> => {
  const insight = mockInsights.find((item) => item.id === id);
  return Promise.resolve(insight);
};

export const getBehaviorData = (timeframe: '7D' | '30D' | '6M'): Promise<DataPoint[]> => {
  switch (timeframe) {
    case '7D':
      return Promise.resolve(behaviorData7D);
    case '30D':
      return Promise.resolve(behaviorData30D);
    case '6M':
    default:
      return Promise.resolve(behaviorData6M);
  }
};
