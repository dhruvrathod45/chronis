import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}