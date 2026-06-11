import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  BarChart3, 
  Brain, 
  FileText, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  LogOut,
  User as UserIcon,
  Shield,
  HelpCircle,
  Bell,
  Palette
} from "lucide-react";

interface Props {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}

export default function Sidebar({ collapsed, setCollapsed }: Props) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const items = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      label: "Insights",
      icon: BarChart3,
      path: "/insight/sleep-consistency",
    },
    {
      label: "Timeline",
      icon: Brain,
      path: "/timeline",
    },
    {
      label: "Reporting",
      icon: FileText,
      path: "/reporting",
    },
    {
      label: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  const handleDropdownItem = (path: string) => {
    setDropdownOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <aside className={`hidden lg:flex flex-col fixed left-0 top-0 h-screen border-r border-white/5 bg-black/60 backdrop-blur-xl z-30 transition-all duration-300 ${
      collapsed ? "w-20" : "w-64"
    }`}>
      {/* BRAND HEADER LOGO */}
      <div className="relative border-b border-white/5 flex items-center h-20 px-6 justify-between overflow-hidden">
        <Link to="/dashboard" className="flex flex-col justify-center select-none group">
          <h1 className="luxury-title text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="text-gold-gradient font-bold font-serif transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
              {collapsed ? "C" : "CHRONIS"}
            </span>
          </h1>
          {!collapsed && (
            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-semibold mt-0.5">
              Intelligence
            </p>
          )}
        </Link>

        {/* COLLAPSE TRIGGER */}
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg border border-white/5 bg-white/[0.02] text-zinc-500 hover:text-white transition"
        >
          {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </div>

      {/* NAVIGATION ITEMS */}
      <div className="flex-1 mt-6 px-3 space-y-1.5 overflow-y-auto">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink key={item.label} to={item.path} className="block relative group">
              {({ isActive }) => (
                <div className="flex items-center">
                  <motion.div
                    whileHover={{
                      x: collapsed ? 0 : 4,
                    }}
                    className={`w-full flex items-center rounded-xl transition-all duration-200 ${
                      collapsed ? "justify-center p-3" : "gap-3 px-4 py-3.5"
                    } ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-500/10 to-transparent border-l-2 border-yellow-500 text-yellow-500 shadow-[inset_1px_0_0_rgba(212,175,55,0.1)]"
                        : "text-zinc-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-yellow-500" : "text-zinc-400"} />
                    {!collapsed && <span className="text-xs font-semibold">{item.label}</span>}
                  </motion.div>

                  {/* collapsed tooltip */}
                  {collapsed && (
                    <div className="absolute left-16 bg-black/95 text-[9px] uppercase font-bold tracking-widest px-3 py-2 border border-yellow-500/25 rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 font-mono z-50 white-space-nowrap">
                      {item.label}
                    </div>
                  )}
                </div>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* USER PROFILE SECTION */}
      <div className="relative p-4 border-t border-white/5 bg-black/40">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex items-center justify-between gap-3 px-2 py-1.5 rounded-xl hover:bg-white/5 transition text-left"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-8 w-8 rounded-full border border-yellow-500/30 bg-gradient-to-tr from-yellow-500/20 to-zinc-900 flex items-center justify-center text-xs font-bold text-yellow-500 shrink-0">
              DR
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate leading-tight">Dhruv Rathod</p>
                <p className="text-[9px] text-zinc-500 truncate mt-0.5">Analyst (AI Core)</p>
              </div>
            )}
          </div>
        </button>

        {/* Dropdown Menu Overlay */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`absolute bottom-20 z-50 bg-[#080808]/95 border border-white/5 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl w-56 font-mono text-[10px] ${
                collapsed ? "left-4" : "left-4 right-4 w-auto"
              }`}
            >
              <div className="px-3.5 py-2 border-b border-white/5 mb-1.5">
                <span className="text-[8px] uppercase tracking-widest text-zinc-500 block font-semibold">Logged in as</span>
                <span className="text-white font-medium text-xs block truncate mt-0.5">dhruv@chronis.ai</span>
              </div>

              <div className="space-y-0.5">
                <button
                  type="button"
                  onClick={() => handleDropdownItem("/settings")}
                  className="w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 text-left transition"
                >
                  <UserIcon size={12} />
                  <span>Profile Section</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDropdownItem("/settings")}
                  className="w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 text-left transition"
                >
                  <Shield size={12} />
                  <span>Account Security</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDropdownItem("/settings")}
                  className="w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 text-left transition"
                >
                  <Bell size={12} />
                  <span>Notification Settings</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDropdownItem("/settings")}
                  className="w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 text-left transition"
                >
                  <Palette size={12} />
                  <span>Theme Switcher</span>
                </button>
                <a
                  href="#"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 text-left transition"
                >
                  <HelpCircle size={12} />
                  <span>Help Center</span>
                </a>
              </div>

              <div className="border-t border-white/5 mt-1.5 pt-1.5">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/5 text-left transition"
                >
                  <LogOut size={12} />
                  <span>Logout Node</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}