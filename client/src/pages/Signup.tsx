import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Sparkles, User } from "lucide-react";
import FloatingBackground from "../components/layout/FloatingBackground";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeTerms) {
      setError("Please accept the telemetry terms of use.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      <FloatingBackground />

      <header className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between max-w-7xl mx-auto px-6 z-10">
        <Link to="/" className="luxury-title text-2xl font-bold tracking-widest text-gold-gradient font-serif">
          CHRONIS
        </Link>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <div className="gold-card rounded-3xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1 text-[9px] text-yellow-500 uppercase tracking-widest font-semibold">
              <Sparkles size={10} className="animate-pulse" />
              Secure Terminal Inscription
            </div>
            <h2 className="luxury-title text-2xl font-bold tracking-tight text-white mt-3">
              Initialize Profile
            </h2>
            <p className="text-xs text-zinc-500">
              Create your secure behavioral telemetry node.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl border border-rose-500/20 bg-rose-500/5 text-rose-400 text-xs font-mono">
                {error}
              </div>
            )}

            {/* Name Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={14} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dhruv Rathod"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={14} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={14} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={14} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono"
                />
              </div>
            </div>

            {/* Terms of Use */}
            <div className="flex items-start gap-2.5 text-xs pt-1 select-none text-zinc-400">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 rounded border-white/10 bg-black/40 text-yellow-500 focus:ring-0 shrink-0"
              />
              <span className="leading-tight">
                I authorize Chronis to ingest and process local sensor activity models for cognitive research purposes.
              </span>
            </div>

            {/* CTA button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-gold py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 mt-4"
            >
              {loading ? (
                <>
                  <span className="h-3.5 w-3.5 rounded-full border border-black/20 border-t-black animate-spin" />
                  Registering Node...
                </>
              ) : (
                "Enroll In Platform"
              )}
            </button>
          </form>

          {/* Social Logins */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest font-semibold justify-center">
              <div className="h-[1px] w-12 bg-white/5" />
              <span>Or enroll using</span>
              <div className="h-[1px] w-12 bg-white/5" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] py-2.5 text-xs text-zinc-300 font-medium transition"
              >
                <svg className="h-3.5 w-3.5 shrink-0 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.513 0-6.386-2.873-6.386-6.386 0-3.513 2.873-6.386 6.386-6.386 1.628 0 3.103.614 4.238 1.628l3.12-3.12C19.29 2.383 15.93 1 12.24 1 6.033 1 12.24 1 12.24s5.033 11.24 11.24 11.24c6.48 0 10.785-4.545 10.785-10.977 0-.742-.069-1.458-.2-2.218H12.24z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] py-2.5 text-xs text-zinc-300 font-medium transition"
              >
                <svg className="h-3.5 w-3.5 shrink-0 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.417 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                Github
              </button>
            </div>
          </div>

          <div className="text-center text-xs text-zinc-500 pt-2">
            Already registered?{" "}
            <Link to="/login" className="text-yellow-500 hover:text-white transition font-medium">
              Establish Connection
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
