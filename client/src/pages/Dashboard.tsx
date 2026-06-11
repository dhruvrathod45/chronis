import AppLayout from "../components/layout/AppLayout";
import PageWrapper from "../components/layout/PageWrapper";
import BehaviorChart from "../components/dashboard/BehaviorChart";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import ConfidenceGauge from "../components/dashboard/ConfidenceGauge";
import StatsOverview from "../components/dashboard/StatsOverview";
import AnimatedCard from "../components/layout/AnimatedCard";
import RadarMetrics from "../components/dashboard/RadarMetrics";
import RecentChanges from "../components/dashboard/RecentChanges";
import AIAnalysis from "../components/dashboard/AIAnalysis";
import AnimatedNumber from "../components/dashboard/AnimatedNumber";
import { mockInsights } from "../data/mockInsights";
import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, Calendar, RefreshCw, Signal, Sparkles } from "lucide-react";

export default function Dashboard() {
  return (
    <AppLayout>
      <PageWrapper>
        <div className="space-y-6">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 glow-dot-green"></span>
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-semibold">
                  Live Analysis Active
                </p>
              </div>

              <h1 className="luxury-title mt-2 text-3xl md:text-4xl font-bold tracking-tight text-white">
                Workspace Overview
              </h1>

              <p className="mt-1 text-sm text-zinc-500">
                Cognitive telemetry and behavioral intelligence model diagnostics.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <button className="btn-outline-gold flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold">
                <RefreshCw size={12} className="animate-spin-slow" />
                Sync Telemetry
              </button>
            </div>
          </div>

          {/* KPI SECTION */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedCard className="gold-card rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                  Behavioral Score
                </p>
                <div className="flex items-baseline gap-2 mt-3">
                  <h2 className="text-4xl font-bold text-yellow-400 font-mono">
                    <AnimatedNumber value={94} />
                  </h2>
                  <span className="text-xs text-emerald-400 font-mono font-medium">+12.4%</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-zinc-500">
                Calculated stability rating
              </div>
            </AnimatedCard>

            <AnimatedCard className="gold-card rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                  Inference Confidence
                </p>
                <div className="flex items-baseline gap-2 mt-3">
                  <h2 className="text-4xl font-bold text-white font-mono">
                    <AnimatedNumber value={88} suffix="%" />
                  </h2>
                  <span className="text-xs text-yellow-500 font-mono font-medium">Nominal</span>
                </div>
              </div>
              <div className="mt-4 w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full w-[88%] bg-yellow-500 rounded-full" />
              </div>
            </AnimatedCard>

            <AnimatedCard className="gold-card rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                  Signal Ingestion
                </p>
                <div className="flex items-baseline gap-2 mt-3">
                  <h2 className="text-3xl font-bold text-white font-mono flex items-center gap-1.5">
                    <Signal size={20} className="text-emerald-500 animate-pulse" />
                    Nominal
                  </h2>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-zinc-500">
                Local sensor node online
              </div>
            </AnimatedCard>

            <AnimatedCard className="gold-card rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                  Active Signals
                </p>
                <div className="flex items-baseline gap-2 mt-3">
                  <h2 className="text-4xl font-bold text-white font-mono">
                    <AnimatedNumber value={1024} />
                  </h2>
                  <span className="text-zinc-500 text-[10px] font-mono">/ 24h</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-zinc-500">
                100% telemetry coverage
              </div>
            </AnimatedCard>
          </div>

          {/* EXECUTIVE SUMMARY CARD */}
          <div className="gold-card rounded-3xl p-6 relative overflow-hidden bg-gradient-to-r from-yellow-500/[0.02] to-transparent flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-yellow-500 flex items-center gap-2">
                <Sparkles size={16} />
                Executive Summary Brief
              </h2>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Chronis AI has synthesized your behavioral and sleep signals over the last 14 days. 
                Your habit profile reveals a <strong>94% stability score</strong> with consistent early-day 
                focus recovery. However, late-night screen time anomalies remain a minor risk factor for sleep latency.
              </p>
            </div>
            
            {/* Risk Indicator & Recent Alerts */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 font-mono">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 min-w-[150px]">
                <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-semibold mb-1">Risk Indicator</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LOW RISK (8.4%)
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 min-w-[150px]">
                <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-semibold mb-1">Recent Alerts</span>
                <span className="text-xs text-yellow-500 font-bold block">
                  2 Active Warnings
                </span>
              </div>
            </div>
          </div>

          {/* STATS */}
          <StatsOverview />

          {/* CHART + SUMMARY */}
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="gold-card rounded-3xl p-6">
                <BehaviorChart />
              </div>
            </div>

            <div className="h-full">
              <div className="gold-card rounded-3xl p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-yellow-400 flex items-center gap-2 mb-4">
                    <Sparkles size={16} />
                    Intelligence Summary
                  </h2>

                  <div className="space-y-4 text-sm text-zinc-400 font-light leading-relaxed">
                    <p>
                      Productivity and sleep consistency have improved
                      steadily over the last quarter. Confidence in
                      long-term behavioral stability continues to rise.
                    </p>

                    <p>
                      Chronis detected a positive trend in focus,
                      habit consistency and behavioral stability.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link to="/insight/sleep-consistency" className="flex items-center justify-between text-xs text-yellow-500 hover:text-white transition group">
                    <span>Explore Evidence Base</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <ActivityFeed />
            </div>

            <div className="lg:col-span-1">
              <ConfidenceGauge />
            </div>

            <div className="lg:col-span-1">
              <AIAnalysis />
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <RadarMetrics />
            </div>

            <div className="lg:col-span-1">
              <RecentChanges />
            </div>

            {/* RECENT LOGS */}
            <div className="lg:col-span-1">
              <div className="gold-card rounded-3xl p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                      <BrainCircuit size={16} className="text-yellow-500" />
                      Recent Logs
                    </h2>

                    <Link to="/insight/sleep-consistency" className="text-[10px] text-yellow-500 hover:text-white transition flex items-center gap-1 font-semibold uppercase tracking-wider">
                      Explorer <ArrowRight size={10} />
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {mockInsights.map((insight) => (
                      <Link
                        key={insight.id}
                        to={`/insight/${insight.id}`}
                        className="group flex flex-col justify-between rounded-xl border border-white/5 bg-black/40 p-3.5 transition-all duration-300 hover:border-yellow-500/30 hover:bg-white/[0.02] hover:translate-y-[-2px]"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-[8px] uppercase tracking-widest text-zinc-500 font-semibold">
                              {insight.category}
                            </span>
                            <span className="text-[9px] text-emerald-400 font-mono">
                              {insight.confidence}% conf
                            </span>
                          </div>
                          <h3 className="text-xs font-semibold text-white mt-1 group-hover:text-yellow-400 transition-colors truncate">
                            {insight.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between mt-3 text-[9px] text-zinc-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={10} />
                            {insight.timeRange}
                          </span>
                          <span className="text-yellow-500 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                            View →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </AppLayout>
  );
}
