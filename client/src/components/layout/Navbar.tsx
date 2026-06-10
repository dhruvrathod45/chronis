import { Link, useLocation } from "react-router-dom";
import { BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Insights", path: "/insight/1" },
    { name: "Timeline", path: "/timeline" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <BrainCircuit className="h-6 w-6 text-violet-500" />
          <span>Chronis</span>
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition duration-200 hover:text-violet-400 ${
                location.pathname === link.path
                  ? "text-violet-400"
                  : "text-zinc-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}