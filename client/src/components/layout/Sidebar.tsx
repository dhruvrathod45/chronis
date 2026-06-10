import {
  LayoutDashboard,
  BarChart3,
  Brain,
  FileText,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  const items = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      label: "Insights",
      icon: BarChart3,
      path: "/insight/1",
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

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 border-r border-yellow-500/10 bg-[#050505]">
      <div className="border-b border-yellow-500/10 p-6">
        <h1 className="luxury-title text-3xl text-yellow-400">
          Chronis
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Behavioral Intelligence
        </p>
      </div>

      <div className="mt-8 px-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink key={item.label} to={item.path}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className={`mb-3 flex items-center gap-3 rounded-2xl p-4 transition-all duration-300 ${
                    isActive
                      ? "border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}