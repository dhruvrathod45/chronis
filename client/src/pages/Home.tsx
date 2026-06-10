import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/layout/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm">
            Behavioral Intelligence Platform
          </div>

          <h1 className="max-w-5xl text-6xl font-bold leading-tight">
            Understand Your Behavior
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Through Time
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Explore trends, insights and behavioral narratives generated
            from long-term data patterns.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link to="/dashboard">
              <button className="rounded-xl bg-violet-600 px-6 py-3 transition hover:scale-105">
                Open Dashboard
              </button>
            </Link>

            <Link to="/timeline">
              <button className="rounded-xl border border-white/10 px-6 py-3 transition hover:bg-white/5">
                Timeline
              </button>
            </Link>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-2 text-xl font-semibold">Behavior Score</h3>
              <p className="text-zinc-400">Track long-term behavioral health.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-2 text-xl font-semibold">Insights</h3>
              <p className="text-zinc-400">
                Evidence-backed explanations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-2 text-xl font-semibold">Narrative Timeline</h3>
              <p className="text-zinc-400">
                Understand how patterns evolve.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}