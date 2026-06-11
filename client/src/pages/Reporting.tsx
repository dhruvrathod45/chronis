import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import PageWrapper from "../components/layout/PageWrapper";
import AnimatedNumber from "../components/dashboard/AnimatedNumber";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Download, 
  FileText, 
  FileSpreadsheet,
  FileUp, 
  Loader2, 
  Printer, 
  Sparkles, 
  Check, 
  CheckSquare, 
  Square,
  Clock,
  ArrowRight
} from "lucide-react";

interface PastReport {
  id: string;
  name: string;
  date: string;
  confidence: number;
  summary: string;
  categories: string[];
}

const pastReports: PastReport[] = [
  {
    id: "rep-01",
    name: "Weekly Behavior Brief - Jun W1",
    date: "Jun 7, 2026",
    confidence: 91,
    summary: "High stability across sleep cycles with a focus score peak following morning workout adaptations.",
    categories: ["sleep", "focus", "exercise"],
  },
  {
    id: "rep-02",
    name: "Monthly Diagnostic Report - May 2026",
    date: "Jun 1, 2026",
    confidence: 88,
    summary: "Stabilizing sleep profiles, despite screen time anomaly spikes detected during the second week of May.",
    categories: ["sleep", "screentime", "productivity"],
  },
  {
    id: "rep-03",
    name: "Weekly Behavior Brief - May W4",
    date: "May 28, 2026",
    confidence: 85,
    summary: "Focus scores stabilized at 88%. Baseline establishes high predictability during early morning blocks.",
    categories: ["focus", "productivity"],
  },
  {
    id: "rep-04",
    name: "Weekly Behavior Brief - May W3",
    date: "May 21, 2026",
    confidence: 89,
    summary: "Consistent sleep duration (7.2h mean). Telemetry reveals positive shift in deep sleep latency ratio.",
    categories: ["sleep", "exercise"],
  },
];

interface DownloadHistoryItem {
  filename: string;
  type: "PDF" | "CSV";
  time: string;
  size: string;
}

const initialDownloadHistory: DownloadHistoryItem[] = [
  { filename: "Weekly_Behavior_Brief_Jun_W1.pdf", type: "PDF", time: "2 hours ago", size: "324 KB" },
  { filename: "Monthly_Diagnostic_May_2026.csv", type: "CSV", time: "3 days ago", size: "45 KB" },
  { filename: "Weekly_Behavior_Brief_May_W4.pdf", type: "PDF", time: "1 week ago", size: "318 KB" },
  { filename: "Weekly_Behavior_Brief_May_W3.csv", type: "CSV", time: "2 weeks ago", size: "38 KB" },
];

export default function Reporting() {
  const [period, setPeriod] = useState<"weekly" | "monthly" | "custom">("weekly");
  const [selectedCats, setSelectedCats] = useState<string[]>(["sleep", "focus", "productivity"]);
  const [generating, setGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [currentReport, setCurrentReport] = useState<PastReport | null>(pastReports[0]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [downloadHistory, setDownloadHistory] = useState<DownloadHistoryItem[]>(initialDownloadHistory);

  const toggleCategory = (cat: string) => {
    if (selectedCats.includes(cat)) {
      setSelectedCats(selectedCats.filter((c) => c !== cat));
    } else {
      setSelectedCats([...selectedCats, cat]);
    }
  };

  const steps = [
    "Ingesting local behavior sensors...",
    "Computing temporal stability indexes...",
    "Synthesizing AI explainability narratives...",
    "Compiling report document payload...",
  ];

  const handleGenerate = () => {
    setGenerating(true);
    setGenerationStep(0);
    
    const interval = setInterval(() => {
      setGenerationStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            const newReport: PastReport = {
              id: `rep-${Date.now()}`,
              name: period === "weekly" ? "Weekly Behavior Brief - Custom" : "Monthly Diagnostic Report - Custom",
              date: "Today (Generated)",
              confidence: 93,
              summary: `Custom behavior brief generated for ${selectedCats.join(", ")} telemetries. System telemetry shows nominal stability indices and strong correlation structures.`,
              categories: [...selectedCats],
            };
            setCurrentReport(newReport);
            setGenerating(false);
            showToast("Report generated successfully!");
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const triggerExport = (format: "PDF" | "CSV") => {
    if (!currentReport) return;
    
    const extension = format === "PDF" ? "pdf" : "csv";
    const filename = `${currentReport.name.replace(/\s+/g, "_")}.${extension}`;
    const newDownload: DownloadHistoryItem = {
      filename,
      type: format,
      time: "Just now",
      size: format === "PDF" ? "342 KB" : "42 KB",
    };

    setDownloadHistory([newDownload, ...downloadHistory]);
    showToast(`${format} exported successfully!`);
    
    if (format === "PDF") {
      window.print();
    }
  };

  return (
    <AppLayout>
      <PageWrapper>
        <div className="space-y-6 pb-12 relative">
          
          {/* TOAST NOTIFICATION */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: -50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                className="fixed top-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl border border-yellow-500/30 bg-black/90 p-4 shadow-xl backdrop-blur-md"
              >
                <div className="h-6 w-6 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 text-yellow-500">
                  <Check size={14} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Export Node Active</p>
                  <p className="text-[10px] text-zinc-500">{toastMessage}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HEADER */}
          <div className="gold-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <FileText size={100} className="text-yellow-400" />
            </div>

            <p className="text-[10px] uppercase tracking-[0.4em] text-yellow-500 font-semibold">
              Telemetry Analytics
            </p>

            <h1 className="luxury-title mt-3 text-3xl sm:text-4xl font-bold text-white">
              Reporting Center
            </h1>
            
            <p className="mt-2 text-sm text-zinc-400 font-light max-w-2xl">
              Compile comprehensive reports, export behavioral logs as PDF/CSV structures, and browse generated
              download history.
            </p>
          </div>

          {/* STATS */}
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="gold-card rounded-2xl p-5">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Generated Reports
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-yellow-400 font-mono">
                <AnimatedNumber value={26} />
              </h2>
            </div>

            <div className="gold-card rounded-2xl p-5">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Avg Report Confidence
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white font-mono">
                <AnimatedNumber value={89} suffix="%" />
              </h2>
            </div>

            <div className="gold-card rounded-2xl p-5">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Downloads Logged
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white font-mono">
                <AnimatedNumber value={downloadHistory.length} />
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 items-start">
            {/* LEFT: Generator Controls & History */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Custom Report Builder */}
              <div className="gold-card rounded-3xl p-6 space-y-5">
                <h2 className="text-base font-semibold text-yellow-400 flex items-center gap-2">
                  <Sparkles size={16} />
                  Compile Custom Report
                </h2>

                {/* Period Selector */}
                <div className="space-y-2">
                  <span className="text-xs text-zinc-400">Select Timeframe</span>
                  <div className="grid grid-cols-3 gap-2 bg-white/[0.02] border border-white/5 p-1 rounded-xl font-mono text-[10px] sm:text-xs">
                    {(["weekly", "monthly", "custom"] as const).map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setPeriod(p)}
                        className={`py-1.5 rounded-lg capitalize transition ${
                          period === p
                            ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/25 font-bold"
                            : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Categories Toggles */}
                <div className="space-y-2">
                  <span className="text-xs text-zinc-400 block mb-2">Metrics to Include</span>
                  <div className="grid grid-cols-2 gap-2">
                    {["sleep", "focus", "productivity", "screentime", "exercise"].map((cat) => {
                      const selected = selectedCats.includes(cat);
                      return (
                        <button
                          key={cat}
                          onClick={() => toggleCategory(cat)}
                          className={`flex items-center gap-2 rounded-xl p-3 text-xs border text-left capitalize transition-all duration-200 ${
                            selected
                              ? "bg-yellow-500/5 border-yellow-500/30 text-yellow-500 font-medium"
                              : "bg-white/[0.01] border-white/5 text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          {selected ? <CheckSquare size={14} /> : <Square size={14} />}
                          <span>{cat}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  onClick={handleGenerate}
                  disabled={generating || selectedCats.length === 0}
                  className="w-full btn-gold py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {generating ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Generating Brief...
                    </>
                  ) : (
                    <>
                      <FileUp size={14} />
                      Generate Custom Brief
                    </>
                  )}
                </button>
              </div>

              {/* Download History Log */}
              <div className="gold-card rounded-3xl p-6 space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <Clock size={16} className="text-yellow-500" />
                  Download Registry History
                </h2>

                <div className="space-y-2.5 max-h-[240px] overflow-y-auto pr-1">
                  {downloadHistory.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-black/40 text-xs"
                    >
                      <div className="min-w-0">
                        <p className="text-white font-medium truncate leading-tight font-mono text-[11px]">
                          {item.filename}
                        </p>
                        <span className="text-[9px] text-zinc-500 block mt-0.5 font-mono">
                          {item.time} • {item.size}
                        </span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded border shrink-0 font-mono ${
                        item.type === "PDF" 
                          ? "bg-rose-500/10 text-rose-400 border-rose-500/20" 
                          : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Document Presentation Frame */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {generating ? (
                  <motion.div
                    key="generating-loader"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="gold-card rounded-3xl p-8 h-[500px] flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="relative h-20 w-20 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-4 border-yellow-500/10 border-t-yellow-500 animate-spin" />
                      <FileText size={28} className="text-yellow-500 animate-pulse" />
                    </div>
                    
                    <div className="space-y-2 max-w-sm">
                      <h3 className="text-lg font-semibold text-white">Compiling Brief</h3>
                      <p className="text-xs text-zinc-500 leading-relaxed min-h-[40px]">
                        {steps[generationStep]}
                      </p>
                    </div>

                    <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-yellow-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((generationStep + 1) / steps.length) * 100}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </motion.div>
                ) : currentReport ? (
                  <motion.div
                    key={currentReport.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="gold-card rounded-3xl p-6 sm:p-8 space-y-6 relative border-white/10"
                    id="printable-report"
                  >
                    {/* Header Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/5">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-yellow-500 font-bold">
                          Chronis Intelligence Brief
                        </span>
                        <h2 className="luxury-title text-2xl font-bold text-white mt-1">
                          {currentReport.name}
                        </h2>
                        <div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
                          <span className="font-mono">ID: {currentReport.id}</span>
                          <span>•</span>
                          <span>Compiled {currentReport.date}</span>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex flex-wrap items-center gap-2 shrink-0 self-start sm:self-auto print:hidden">
                        <button 
                          onClick={() => triggerExport("PDF")}
                          className="btn-outline-gold p-2.5 rounded-xl text-xs flex items-center justify-center"
                          title="Export PDF / Print"
                        >
                          <Printer size={14} />
                        </button>
                        <button
                          onClick={() => triggerExport("CSV")}
                          className="btn-outline-gold flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold"
                        >
                          <FileSpreadsheet size={13} /> Export CSV
                        </button>
                        <button
                          onClick={() => triggerExport("PDF")}
                          className="btn-gold flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold"
                        >
                          <Download size={12} /> Download PDF
                        </button>
                      </div>
                    </div>

                    {/* Report Metadata */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                      <div>
                        <span className="text-[10px] text-zinc-500 block">System Scope</span>
                        <span className="text-xs font-medium text-white capitalize mt-0.5 block">{period}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 block">Telemetry Nodes</span>
                        <span className="text-xs font-medium text-white mt-0.5 block">{currentReport.categories.length} included</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 block">Confidence</span>
                        <span className="text-xs font-medium text-emerald-400 mt-0.5 block">{currentReport.confidence}% nominal</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 block">Authentication</span>
                        <span className="text-xs font-medium text-yellow-500 font-mono mt-0.5 block">SECURE SHA-2</span>
                      </div>
                    </div>

                    {/* Report Content Sections */}
                    <div className="space-y-5 text-zinc-300 font-light leading-relaxed">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-500 mb-2">
                          1. Intelligence Summary
                        </h4>
                        <p className="text-xs sm:text-sm">
                          {currentReport.summary}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-500 mb-2">
                          2. Analytical Breakdown
                        </h4>
                        <p className="text-xs sm:text-sm">
                          Behavioral diagnostic model confirms structured stability values. Model inference detects no severe cognitive or temporal anomalies. Stability indices remain aligned with baseline parameters.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-[10px] text-zinc-500 gap-2">
                        <span>Chronis Core AI Engine v2.4.1-alpha</span>
                        <span className="font-mono">Signature: AdaniUni-DhruvRathod-Chronis-2026</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center py-24 text-zinc-500 border border-white/5 rounded-3xl bg-white/[0.01]">
                    Select or generate a brief report to inspect.
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