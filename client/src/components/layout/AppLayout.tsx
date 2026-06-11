import { useState } from "react";
import Sidebar from "./Sidebar";
import FloatingBackground from "./FloatingBackground";
import { NavLink, Link } from "react-router-dom";
import { LayoutDashboard, BarChart3, Brain, FileText, Settings } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const mobileNavItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { label: "Insights", icon: BarChart3, path: "/insight/sleep-consistency" },
    { label: "Timeline", icon: Brain, path: "/timeline" },
    { label: "Reports", icon: FileText, path: "/reporting" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <FloatingBackground />

      {/* MOBILE TOP HEADER */}
      <header className="flex lg:hidden sticky top-0 h-16 w-full border-b border-white/5 bg-black/75 backdrop-blur-md z-40 items-center px-6 justify-between">
        <Link to="/dashboard" className="flex items-center select-none group">
          <span className="text-gold-gradient font-bold tracking-wider font-serif text-lg group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition">
            CHRONIS
          </span>
        </Link>
        <div className="h-2 w-2 rounded-full bg-green-500 glow-dot-green animate-pulse" />
      </header>

      <div className="relative z-10 flex">
        {/* DESKTOP SIDEBAR */}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* MAIN CONTENT CONTAINER */}
        <main className={`flex-1 transition-all duration-300 min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 pb-24 lg:pb-10 overflow-x-hidden ${
          collapsed ? "lg:ml-20" : "lg:ml-64"
        }`}>
          {children}
        </main>
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="flex lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-black/90 border-t border-white/5 z-40 justify-around items-center px-2 backdrop-blur-xl">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.label} to={item.path} className="flex flex-col items-center justify-center flex-1 py-1">
              {({ isActive }) => (
                <div className={`flex flex-col items-center gap-1 transition-all duration-200 ${
                  isActive ? "text-yellow-500 font-semibold animate-pulse" : "text-zinc-500"
                }`}>
                  <Icon size={20} className={isActive ? "text-yellow-500" : "text-zinc-500"} />
                  <span className="text-[9px] tracking-tight">{item.label}</span>
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}