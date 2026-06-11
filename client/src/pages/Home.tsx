import { motion } from "framer-motion";
import { ArrowRight, Brain, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBackground from "../components/layout/FloatingBackground";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden">
      {/* Dynamic Gold Radial Glows & Grid */}
      <FloatingBackground />

      {/* TOP HEADER BRANDING */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="luxury-title text-2xl font-bold tracking-widest text-gold-gradient font-serif">CHRONIS</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <button className="btn-outline-gold px-5 py-2 rounded-xl text-xs font-semibold">
              Enter Dashboard
            </button>
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto py-12 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Subtle Live Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-1.5 text-xs text-yellow-500 tracking-[0.2em] uppercase font-semibold">
            <Sparkles size={12} className="animate-spin-slow text-yellow-400" />
            Behavioral Intelligence Platform
          </motion.div>

          {/* Premium Headline */}
          <motion.h1 variants={itemVariants} className="luxury-title text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] text-white">
            Understand your behavior <br />
            <span className="text-gold-gradient">through the lens of AI</span>
          </motion.h1>

          {/* Short Description */}
          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Chronis processes complex, long-term behavioral signals to unlock clear,
            evidence-backed explanations, narrative timelines, and predictive forecasts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link to="/dashboard">
              <button className="btn-gold flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all">
                Access Workspace <ArrowRight size={16} />
              </button>
            </Link>

            <Link to="/timeline">
              <button className="btn-outline-gold px-8 py-4 rounded-xl text-sm font-semibold transition-all">
                Explore Narrative
              </button>
            </Link>
          </motion.div>

          {/* Mini Features Showcase Grid */}
          <motion.div variants={itemVariants} className="mt-16 grid gap-6 sm:grid-cols-3 pt-8">
            <div className="gold-card rounded-2xl p-6 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <TrendingUp size={48} className="text-yellow-400" />
              </div>
              <div className="h-10 w-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center mb-4">
                <TrendingUp size={18} className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Behavior Score</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Evaluate long-term behavioral consistency and stability metrics computed via multi-signal confidence gauges.
              </p>
            </div>

            <div className="gold-card rounded-2xl p-6 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Brain size={48} className="text-yellow-400" />
              </div>
              <div className="h-10 w-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center mb-4">
                <Brain size={18} className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Explainable AI</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Unlock evidence-backed findings and recommendations. Every deduction shows clear confidence indicators and uncertainty factors.
              </p>
            </div>

            <div className="gold-card rounded-2xl p-6 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <ShieldAlert size={48} className="text-yellow-400" />
              </div>
              <div className="h-10 w-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center mb-4">
                <ShieldAlert size={18} className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Chronological Timelines</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Observe behavioral shifts and milestones over time to visualize habit loops and cognitive patterns.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
        <p>© 2026 Chronis Behavioral Intelligence. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-yellow-500 transition">Security Policy</a>
          <a href="#" className="hover:text-yellow-500 transition">API Documentation</a>
          <span className="text-zinc-700">|</span>
          <span>Architected by Dhruv Rathod</span>
        </div>
      </footer>
    </div>
  );
}