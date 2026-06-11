import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import PageWrapper from "../components/layout/PageWrapper";
import { useTheme } from "../hooks/useTheme";
import type { ThemeType } from "../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, 
  Cpu, 
  Database, 
  Save, 
  Settings as SettingsIcon, 
  User, 
  Check, 
  Sparkles,
  Link2,
  Lock
} from "lucide-react";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  const [activeTab, setActiveTab] = useState<"profile" | "model" | "security" | "retention" | "notifications">("profile");
  const [saving, setSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("System Config Updated");

  // Profile Form States
  const [name, setName] = useState("Dhruv Rathod");
  const [email, setEmail] = useState("dhruv@chronis.ai");

  // Model States
  const [confidenceThreshold, setConfidenceThreshold] = useState(75);
  const [recalibrationFrequency, setRecalibrationFrequency] = useState("daily");
  const [enableExperimental, setEnableExperimental] = useState(false);

  // Security States
  const [password, setPassword] = useState("••••••••••••••••");
  const [apiKey, setApiKey] = useState("chr_live_72fa82bb193a0bcf512");
  const [twoFactor, setTwoFactor] = useState(true);

  // Retention States
  const [retentionPeriod, setRetentionPeriod] = useState("90");
  const [anonymizeLogs, setAnonymizeLogs] = useState(true);

  // Notification States
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [anomalyAlerts, setAnomalyAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    setTimeout(() => {
      setSaving(false);
      triggerToast("System Config Updated");
    }, 1200);
  };

  const tabs = [
    { id: "profile", label: "Profile & Theme", icon: User },
    { id: "model", label: "AI Models", icon: Cpu },
    { id: "security", label: "Security & Keys", icon: Lock },
    { id: "retention", label: "Data Retention", icon: Database },
    { id: "notifications", label: "Notifications", icon: Bell },
  ] as const;

  return (
    <AppLayout>
      <PageWrapper>
        <div className="space-y-6 pb-12 relative">
          
          {/* TOAST NOTIFICATION */}
          <AnimatePresence>
            {showToast && (
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
                  <p className="text-xs font-semibold text-white">System Config</p>
                  <p className="text-[10px] text-zinc-500">{toastMessage}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HEADER */}
          <div className="gold-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <SettingsIcon size={100} className="text-yellow-400" />
            </div>

            <p className="text-[10px] uppercase tracking-[0.4em] text-yellow-500 font-semibold">
              Preferences
            </p>

            <h1 className="luxury-title mt-3 text-3xl sm:text-4xl font-bold text-white">
              System Settings
            </h1>

            <p className="mt-2 text-sm text-zinc-400 font-light max-w-2xl">
              Configure AI behavioral intelligence threshold limits, API nodes, security settings, and data retention rules.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 items-start">
            
            {/* TABS SIDEBAR */}
            <div className="lg:col-span-3 space-y-1.5">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 rounded-xl px-4 py-3.5 text-xs font-semibold tracking-wide text-left transition-all duration-200 border ${
                      active
                        ? "bg-gradient-to-r from-yellow-500/10 to-transparent border-yellow-500/30 text-yellow-500"
                        : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB PANELS */}
            <div className="lg:col-span-9">
              <form onSubmit={handleSave} className="gold-card rounded-3xl p-6 sm:p-8 space-y-6">
                <AnimatePresence mode="wait">
                  
                  {/* PROFILE & THEME TAB */}
                  {activeTab === "profile" && (
                    <motion.div
                      key="profile-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-base font-semibold text-yellow-400 flex items-center gap-2 border-b border-white/5 pb-3">
                        <User size={16} />
                        Profile Settings
                      </h2>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-xs text-zinc-400 font-medium">Full Name</label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs text-zinc-400 font-medium">Email Address</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono"
                          />
                        </div>
                      </div>

                      {/* Theme Selector */}
                      <div className="space-y-3 pt-2">
                        <label className="text-xs text-zinc-400 font-medium block">Workspace Theme Selector</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[
                            { id: "dark-luxury", label: "Dark Luxury (Default)", color: "#D4AF37" },
                            { id: "gold-luxury", label: "Gold Luxury", color: "#E2C044" },
                            { id: "midnight-blue", label: "Midnight Blue", color: "#38BDF8" },
                            { id: "emerald-executive", label: "Emerald Executive", color: "#10B981" }
                          ].map((t) => (
                            <button
                              type="button"
                              key={t.id}
                              onClick={() => {
                                setTheme(t.id as ThemeType);
                                triggerToast("Theme updated to " + t.label);
                              }}
                              className={`flex flex-col items-start gap-1.5 p-3.5 rounded-2xl border text-left transition duration-300 ${
                                theme === t.id
                                  ? "bg-yellow-500/5 border-yellow-500/30 text-yellow-500"
                                  : "bg-[#080808]/65 border-white/5 text-zinc-400 hover:bg-white/[0.01]"
                              }`}
                            >
                              <div className="h-3.5 w-3.5 rounded-full border border-black/20" style={{ backgroundColor: t.color }} />
                              <span className="text-[10px] font-semibold mt-1 block leading-tight">{t.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* MODEL TAB */}
                  {activeTab === "model" && (
                    <motion.div
                      key="model-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <h2 className="text-base font-semibold text-yellow-400 flex items-center gap-2 border-b border-white/5 pb-3">
                        <Cpu size={16} />
                        Model Calibration Parameters
                      </h2>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-zinc-400">Confidence Ingestion Threshold</span>
                          <span className="text-yellow-500 font-mono">{confidenceThreshold}%</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="95"
                          value={confidenceThreshold}
                          onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                          className="w-full accent-yellow-500 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                        />
                        <p className="text-[10px] text-zinc-500">
                          Insights with confidence lower than this boundary will be discarded from narrative synthesis.
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-zinc-400 font-medium">Recalibration Period</label>
                        <select
                          value={recalibrationFrequency}
                          onChange={(e) => setRecalibrationFrequency(e.target.value)}
                          className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono"
                        >
                          <option value="hourly">Hourly (Dynamic Inference)</option>
                          <option value="daily">Daily Batch Recalibration</option>
                          <option value="weekly">Weekly Core Updates</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                        <div className="space-y-0.5 pr-4">
                          <p className="text-xs font-medium text-white">Experimental Forecasting Models</p>
                          <p className="text-[10px] text-zinc-500">Enable neural-forecasting engines to output weekly stability prediction graphs.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setEnableExperimental(!enableExperimental)}
                          className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 shrink-0 ${
                            enableExperimental ? "bg-yellow-500" : "bg-zinc-800"
                          }`}
                        >
                          <div className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                            enableExperimental ? "translate-x-6" : "translate-x-0"
                          }`} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* SECURITY TAB */}
                  {activeTab === "security" && (
                    <motion.div
                      key="security-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <h2 className="text-base font-semibold text-yellow-400 flex items-center gap-2 border-b border-white/5 pb-3">
                        <Lock size={16} />
                        Security & Access Nodes
                      </h2>

                      <div className="space-y-1.5">
                        <label className="text-xs text-zinc-400 font-medium">Security Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-zinc-400 font-medium">Chronis API Token Key</label>
                        <input
                          type="text"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono"
                        />
                      </div>

                      {/* 2FA switch */}
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                        <div className="space-y-0.5">
                          <p className="text-xs font-medium text-white">Two-Factor Authentication (2FA)</p>
                          <p className="text-[10px] text-zinc-500">Secure model preferences updates with hardware security keys.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setTwoFactor(!twoFactor)}
                          className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 shrink-0 ${
                            twoFactor ? "bg-yellow-500" : "bg-zinc-800"
                          }`}
                        >
                          <div className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                            twoFactor ? "translate-x-6" : "translate-x-0"
                          }`} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* DATA RETENTION TAB */}
                  {activeTab === "retention" && (
                    <motion.div
                      key="retention-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <h2 className="text-base font-semibold text-yellow-400 flex items-center gap-2 border-b border-white/5 pb-3">
                        <Database size={16} />
                        Data Retention Settings
                      </h2>

                      {/* Retention select */}
                      <div className="space-y-1.5">
                        <label className="text-xs text-zinc-400 font-medium">Sensor Logs Retention Period</label>
                        <select
                          value={retentionPeriod}
                          onChange={(e) => setRetentionPeriod(e.target.value)}
                          className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/30 transition font-mono"
                        >
                          <option value="30">30 Days</option>
                          <option value="90">90 Days (Recommended)</option>
                          <option value="365">1 Year</option>
                          <option value="forever">Forever (No Automatic Cleanup)</option>
                        </select>
                        <p className="text-[10px] text-zinc-500 leading-normal">
                          Configures how long raw sensor logs are stored locally before automatic database scrub.
                        </p>
                      </div>

                      {/* Anonymization switch */}
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                        <div className="space-y-0.5">
                          <p className="text-xs font-medium text-white">Anonymize Telemetry Logs</p>
                          <p className="text-[10px] text-zinc-500">Scrub identifying biometric metadata before local inference models digest.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setAnonymizeLogs(!anonymizeLogs)}
                          className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 shrink-0 ${
                            anonymizeLogs ? "bg-yellow-500" : "bg-zinc-800"
                          }`}
                        >
                          <div className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                            anonymizeLogs ? "translate-x-6" : "translate-x-0"
                          }`} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* NOTIFICATIONS TAB */}
                  {activeTab === "notifications" && (
                    <motion.div
                      key="notifications-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <h2 className="text-base font-semibold text-yellow-400 flex items-center gap-2 border-b border-white/5 pb-3">
                        <Bell size={16} />
                        Alert & Dispatch Toggles
                      </h2>

                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                        <div className="space-y-0.5">
                          <p className="text-xs font-medium text-white">Email Diagnostic Summaries</p>
                          <p className="text-[10px] text-zinc-500">Receive morning diagnostic updates to configured email address.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setEmailAlerts(!emailAlerts)}
                          className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 shrink-0 ${
                            emailAlerts ? "bg-yellow-500" : "bg-zinc-800"
                          }`}
                        >
                          <div className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                            emailAlerts ? "translate-x-6" : "translate-x-0"
                          }`} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                        <div className="space-y-0.5">
                          <p className="text-xs font-medium text-white">Critical Behavioral Anomaly Warnings</p>
                          <p className="text-[10px] text-zinc-500">Immediate push alerts when screen time or sleep cycles exceed 20% variance bounds.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setAnomalyAlerts(!anomalyAlerts)}
                          className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 shrink-0 ${
                            anomalyAlerts ? "bg-yellow-500" : "bg-zinc-800"
                          }`}
                        >
                          <div className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                            anomalyAlerts ? "translate-x-6" : "translate-x-0"
                          }`} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                        <div className="space-y-0.5">
                          <p className="text-xs font-medium text-white">Weekly Performance Digest</p>
                          <p className="text-[10px] text-zinc-500">Compiled PDF performance summaries dispatch every Sunday.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setWeeklyDigest(!weeklyDigest)}
                          className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 shrink-0 ${
                            weeklyDigest ? "bg-yellow-500" : "bg-zinc-800"
                          }`}
                        >
                          <div className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                            weeklyDigest ? "translate-x-6" : "translate-x-0"
                          }`} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* Footer Save Action */}
                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-yellow-500" />
                    Secure client encryption active
                  </span>

                  <button
                    type="submit"
                    disabled={saving}
                    className="btn-gold px-5 py-2.5 rounded-xl font-semibold flex items-center gap-1.5 transition disabled:opacity-50"
                  >
                    {saving ? (
                      <>
                        <span className="h-3.5 w-3.5 rounded-full border border-black/20 border-t-black animate-spin" />
                        Saving Config...
                      </>
                    ) : (
                      <>
                        <Save size={14} />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </PageWrapper>
    </AppLayout>
  );
}