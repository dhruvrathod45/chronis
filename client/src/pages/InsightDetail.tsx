import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import PageWrapper from "../components/layout/PageWrapper";
import { mockInsights } from "../data/mockInsights";
import type { Insight } from "../data/mockInsights";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { 
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { 
  ArrowLeft, 
  Brain, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  Info, 
  Search, 
  ShieldAlert, 
  Sparkles, 
  TrendingUp,
  Activity,
  Layers,
  Database
} from "lucide-react";

export default function InsightDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { colors } = useTheme();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeInsight, setActiveInsight] = useState<Insight | null>(null);
  const [expandDiagnostics, setExpandDiagnostics] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyDiagnostics = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeInsight) return;
    navigator.clipboard.writeText(JSON.stringify(activeInsight, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightJSON = (jsonString: string) => {
    return jsonString.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
      (match) => {
        let cls = "text-yellow-500 font-medium";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "text-zinc-500 font-semibold";
          } else {
            cls = "text-emerald-400 font-mono";
          }
        } else if (/true|false/.test(match)) {
          cls = "text-amber-500 font-mono font-bold";
        } else if (/null/.test(match)) {
          cls = "text-rose-400 font-mono";
        } else {
          cls = "text-cyan-400 font-mono";
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
  };

  // Load active insight based on route param
  useEffect(() => {
    const currentId = id || "sleep-consistency";
    const found = mockInsights.find((item) => item.id === currentId);
    if (found) {
      setActiveInsight(found);
    } else {
      navigate("/insight/sleep-consistency", { replace: true });
    }
  }, [id, navigate]);

  // Filter insights list
  const filteredInsights = mockInsights.filter((insight) => {
    const matchesSearch = 
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = 
      selectedCategory === "all" || insight.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "sleep":
        return <span className="text-yellow-400">💤</span>;
      case "focus":
        return <span className="text-amber-500">🧠</span>;
      case "screentime":
        return <span className="text-rose-400">📱</span>;
      case "exercise":
        return <span className="text-emerald-400">⚡</span>;
      default:
        return <span className="text-zinc-400">💡</span>;
    }
  };

  const getReliabilityStyle = (reliability: string) => {
    switch (reliability) {
      case "High Reliability":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Medium Reliability":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Low Reliability":
      default:
        return "bg-rose-500/10 text-rose-400 border-rose-500/20";
    }
  };

  // Mock confidence trend history for specific insight
  const getConfidenceTrend = (insightId: string) => {
    switch (insightId) {
      case "sleep-consistency":
        return [
          { day: "D1", value: 70 },
          { day: "D3", value: 74 },
          { day: "D7", value: 81 },
          { day: "D10", value: 85 },
          { day: "D14", value: 87 },
        ];
      case "focus-recovery":
        return [
          { day: "D1", value: 62 },
          { day: "D5", value: 68 },
          { day: "D15", value: 72 },
          { day: "D30", value: 76 },
        ];
      case "screen-time-spike":
        return [
          { day: "D1", value: 80 },
          { day: "D3", value: 86 },
          { day: "D5", value: 90 },
          { day: "D7", value: 93 },
        ];
      case "habit-recalibration":
        return [
          { day: "D1", value: 70 },
          { day: "D15", value: 75 },
          { day: "D30", value: 78 },
          { day: "D60", value: 81 },
        ];
      default:
        return [
          { day: "D1", value: 50 },
          { day: "D10", value: 70 },
          { day: "D20", value: 85 },
        ];
    }
  };

  // Supporting signals mock
  const getSupportingSignals = (cat: string) => {
    switch (cat) {
      case "sleep":
        return [
          { name: "Apple Watch Accelerometer", status: "Active" },
          { name: "Sleep Latency Log", status: "Synced" },
          { name: "Heart Rate Variability", status: "Nominal" },
        ];
      case "focus":
        return [
          { name: "Window Activity Monitor", status: "Active" },
          { name: "Keyboard/Mouse Ingestion", status: "Synced" },
          { name: "Do Not Disturb Toggle", status: "Active" },
        ];
      case "screentime":
        return [
          { name: "Mobile Screen Lock Log", status: "Active" },
          { name: "Browser App Analytics", status: "Synced" },
          { name: "Late-night Usage Event Handler", status: "Active" },
        ];
      case "exercise":
        return [
          { name: "Heart Rate Zone Telemetry", status: "Active" },
          { name: "Fitbit Step Accumulator", status: "Synced" },
          { name: "Oxygen Saturation Sensor", status: "Active" },
        ];
      default:
        return [
          { name: "Generic Sensor Ingestion", status: "Active" },
        ];
    }
  };

  return (
    <AppLayout>
      <PageWrapper>
        <div className="space-y-6 pb-12">
          {/* Back Link */}
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Link to="/dashboard" className="hover:text-yellow-500 transition flex items-center gap-1">
              <ArrowLeft size={12} /> Dashboard
            </Link>
            <ChevronRight size={10} />
            <span className="text-zinc-300 font-medium">Insight Explorer</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 items-start">
            {/* LEFT SIDEBAR: List of Insights */}
            <div className="lg:col-span-4 space-y-4">
              <div className="gold-card rounded-3xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                    Insights Explorer
                  </h2>
                  <span className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-zinc-400">
                    {filteredInsights.length} loaded
                  </span>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search intelligence logs..."
                    className="w-full pl-9 pr-4 py-2.5 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/40 transition font-mono"
                  />
                </div>

                {/* Category Quick Filters */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["all", "sleep", "focus", "screentime", "exercise"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded-lg text-[9px] uppercase font-bold tracking-wider transition border ${
                        selectedCategory === cat
                          ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-500"
                          : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Insights List */}
              <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                <AnimatePresence mode="popLayout">
                  {filteredInsights.map((insight) => (
                    <motion.div
                      key={insight.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to={`/insight/${insight.id}`}
                        className={`block p-4 rounded-2xl border transition-all duration-300 ${
                          activeInsight?.id === insight.id
                            ? "bg-gradient-to-r from-yellow-500/10 to-transparent border-yellow-500/40 text-yellow-500 shadow-lg"
                            : "bg-[#080808]/65 border-white/5 text-zinc-400 hover:bg-white/[0.02] hover:border-yellow-500/15"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[9px] uppercase tracking-wider font-semibold text-zinc-500">
                            {getCategoryIcon(insight.category)} {insight.category}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500">{insight.confidence}% conf</span>
                        </div>
                        <h3 className={`text-xs font-bold mt-2 transition-colors ${
                          activeInsight?.id === insight.id ? "text-yellow-400" : "text-white"
                        }`}>
                          {insight.title}
                        </h3>
                        <p className="text-[11px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                          {insight.description}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {filteredInsights.length === 0 && (
                  <div className="text-center py-8 text-xs text-zinc-500 border border-white/5 rounded-2xl bg-white/[0.01]">
                    No intelligence logs match filters.
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT PANEL: Details */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {activeInsight ? (
                  <motion.div
                    key={activeInsight.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    {/* Header Panel */}
                    <div className="gold-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Sparkles size={120} className="text-yellow-400" />
                      </div>
                      
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-yellow-500 font-semibold">
                          Behavioral Telemetry
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-[10px] uppercase font-mono text-zinc-400 flex items-center gap-1">
                          <Calendar size={10} />
                          {activeInsight.timeRange}
                        </span>
                      </div>

                      <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold luxury-title text-white">
                        {activeInsight.title}
                      </h1>

                      <p className="mt-3 text-zinc-400 text-sm font-light leading-relaxed max-w-2xl">
                        {activeInsight.description}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <span className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold ${getReliabilityStyle(activeInsight.reliability)}`}>
                          {activeInsight.reliability}
                        </span>
                        <span className="bg-white/5 text-zinc-300 border border-white/5 px-3.5 py-1.5 rounded-full text-xs font-mono">
                          Confidence Index: {activeInsight.confidence}%
                        </span>
                      </div>
                    </div>

                    {/* Evidence & Confidence Metrics */}
                    <div className="grid gap-6 md:grid-cols-5">
                      
                      {/* Left: Score & Supporting Signals & Evidence */}
                      <div className="md:col-span-3 space-y-6">
                        
                        {/* Evidence Score Visualization */}
                        <div className="gold-card rounded-2xl p-6">
                          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-1.5">
                            <Layers size={14} className="text-yellow-500" />
                            Evidence Score Assessment
                          </h2>
                          <div className="flex justify-between items-baseline mb-2">
                            <span className="text-xs text-zinc-400">Model Verification Coefficient</span>
                            <span className="text-lg font-extrabold text-white font-mono">{(activeInsight.confidence / 10).toFixed(1)} <span className="text-zinc-600 text-xs font-normal">/ 10</span></span>
                          </div>
                          <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400"
                              initial={{ width: 0 }}
                              animate={{ width: `${activeInsight.confidence}%` }}
                              transition={{ duration: 1.2 }}
                            />
                          </div>
                        </div>

                        {/* Evidence description */}
                        <div className="gold-card rounded-2xl p-6">
                          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-1.5">
                            <Info size={14} className="text-yellow-500" />
                            Supporting Evidence Base
                          </h2>
                          <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
                            {activeInsight.evidence}
                          </p>
                        </div>

                        {/* Supporting Signals */}
                        <div className="gold-card rounded-2xl p-6">
                          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-1.5">
                            <Activity size={14} className="text-yellow-500" />
                            Active Ingested Signals
                          </h2>
                          <div className="space-y-2.5">
                            {getSupportingSignals(activeInsight.category).map((signal, idx) => (
                              <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-white/[0.01] border border-white/5 text-xs">
                                <span className="text-zinc-300 font-light">{signal.name}</span>
                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                                  <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                                  {signal.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Confidence Trend Graph & Reliability Breakdown */}
                      <div className="md:col-span-2 space-y-6">
                                 {/* Confidence Trend Graph */}
                        <div className="gold-card rounded-2xl p-6 flex flex-col justify-between h-[210px]">
                          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                            <TrendingUp size={14} className="text-yellow-500" />
                            Confidence Trend
                          </h2>
                          <div className="flex-1 w-full min-h-0 mt-4">
                            <ResponsiveContainer width="100%" height="95%">
                              <AreaChart data={getConfidenceTrend(activeInsight.id)} margin={{ left: -10, right: 10, top: 5, bottom: 5 }}>
                                <defs>
                                  <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={colors.primary} stopOpacity={0.2} />
                                    <stop offset="95%" stopColor={colors.primary} stopOpacity={0.0} />
                                  </linearGradient>
                                </defs>
                                <XAxis dataKey="day" stroke="#52525b" tickLine={false} axisLine={false} tick={{ fontSize: 9 }} />
                                <YAxis domain={[50, 100]} stroke="#52525b" tickLine={false} axisLine={false} tick={{ fontSize: 9 }} />
                                <Tooltip
                                  contentStyle={{
                                    background: "#080808",
                                    border: `1px solid ${colors.border}`,
                                    borderRadius: "12px",
                                    color: "#fff",
                                    fontSize: 10,
                                  }}
                                />
                                <Area type="monotone" dataKey="value" stroke={colors.primary} strokeWidth={2} fill="url(#trendGradient)" />
                              </AreaChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* Data Reliability Section */}
                        <div className="gold-card rounded-2xl p-6 space-y-3">
                          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                            <Database size={14} className="text-yellow-500" />
                            Data Reliability Index
                          </h2>
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Record Completeness</span>
                              <span className="font-mono text-zinc-300">92.4%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Telemetry Density</span>
                              <span className="font-mono text-zinc-300">Excellent</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Signal Variance Coeff</span>
                              <span className="font-mono text-yellow-500">0.08 variance</span>
                            </div>
                          </div>
                        </div>

                        {/* Uncertainty warning */}
                        <div className="gold-card rounded-2xl p-6 border-yellow-500/25 bg-yellow-500/[0.01] space-y-2 relative overflow-hidden">
                          <div className="absolute -right-4 -bottom-4 h-16 w-16 bg-yellow-500/5 rounded-full blur-xl animate-pulse" />
                          <h2 className="text-xs font-bold uppercase tracking-widest text-yellow-500 flex items-center gap-1.5">
                            <ShieldAlert size={14} className="text-yellow-500 shrink-0 animate-bounce" />
                            Uncertainty Variables
                          </h2>
                          <p className="text-xs text-zinc-350 leading-relaxed font-light font-mono">
                            {activeInsight.missingData}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* AI Narrative Section */}
                    <div className="gold-card rounded-3xl p-6 sm:p-8 bg-gradient-to-tr from-yellow-500/[0.03] to-transparent relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Sparkles size={48} className="text-yellow-500" />
                      </div>
                      <h2 className="text-sm font-bold text-yellow-400 flex items-center gap-2 mb-4">
                        <Sparkles size={16} />
                        Synthesized AI Narrative
                      </h2>
                      <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                        {activeInsight.aiNarrative}
                      </p>
                    </div>

                    {/* Expandable diagnostics card */}
                    <div className="gold-card rounded-3xl overflow-hidden">
                      <div 
                        onClick={() => setExpandDiagnostics(!expandDiagnostics)}
                        className="w-full px-6 py-4 flex justify-between items-center hover:bg-white/[0.02] transition cursor-pointer select-none"
                      >
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-450">RAW Inference Telemetry Model</span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={handleCopyDiagnostics}
                            className="btn-outline-gold px-2.5 py-1 rounded-lg text-[9px] font-mono font-bold hover:bg-white/5 transition flex items-center gap-1 cursor-pointer"
                          >
                            {copied ? (
                              <>
                                <CheckCircle size={10} className="text-emerald-400" />
                                <span>COPIED</span>
                              </>
                            ) : (
                              <>
                                <Database size={10} />
                                <span>COPY JSON</span>
                              </>
                            )}
                          </button>
                          {expandDiagnostics ? <ChevronUp size={16} className="text-zinc-500" /> : <ChevronDown size={16} className="text-zinc-500" />}
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {expandDiagnostics && (
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-white/5 overflow-hidden"
                          >
                            <pre 
                              className="p-5 bg-black/95 text-[10px] font-mono leading-relaxed overflow-x-auto"
                              dangerouslySetInnerHTML={{ __html: highlightJSON(JSON.stringify(activeInsight, null, 2)) }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center py-24 text-zinc-500 border border-white/5 rounded-3xl bg-white/[0.01]">
                    Loading telemetry analysis...
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </PageWrapper>
    </AppLayout>
  );
}