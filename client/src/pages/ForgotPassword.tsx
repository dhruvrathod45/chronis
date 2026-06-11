import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Sparkles } from "lucide-react";
import FloatingBackground from "../components/layout/FloatingBackground";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
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
          <div className="space-y-2 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1 text-[9px] text-yellow-500 uppercase tracking-widest font-semibold">
              <Sparkles size={10} className="animate-pulse" />
              Credentials Retrieval
            </div>
            <h2 className="luxury-title text-2xl font-bold tracking-tight text-white mt-3">
              Reset Key
            </h2>
            <p className="text-xs text-zinc-500">
              Recover access to your behavioral intelligence node.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl border border-rose-500/20 bg-rose-500/5 text-rose-400 text-xs font-mono text-center">
                {error}
              </div>
            )}

            {success && (
              <div className="p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs text-center space-y-2">
                <p className="font-semibold">Reset Link Dispatched</p>
                <p className="text-[10px] text-zinc-400 font-light">
                  Check email node {email} for key decryption links.
                </p>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={14} />
                <input
                  type="email"
                  value={email}
                  disabled={success}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono disabled:opacity-50"
                />
              </div>
            </div>

            {/* Submit CTA */}
            {!success ? (
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gold py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <span className="h-3.5 w-3.5 rounded-full border border-black/20 border-t-black animate-spin" />
                    Dispatching Link...
                  </>
                ) : (
                  "Dispatch Recovery Key"
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="w-full btn-gold py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 mt-2"
              >
                Return to Login
              </button>
            )}
          </form>

          <div className="text-center text-xs text-zinc-500 pt-2 flex justify-center">
            <Link to="/login" className="text-zinc-500 hover:text-white transition flex items-center gap-1">
              <ArrowLeft size={12} /> Back to Connection
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
