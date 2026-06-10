import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
}

export default function TrendCard({ title, value }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5"
    >
      <p className="text-zinc-400">{title}</p>

      <h3 className="mt-3 text-3xl font-bold">
        {value}
      </h3>
    </motion.div>
  );
}