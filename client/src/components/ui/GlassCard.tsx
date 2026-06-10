import { motion } from "framer-motion";

export default function GlassCard({
children,
className = "",
}: any) {
return (
<motion.div
whileHover={{
scale: 1.02,
}}
className={`
rounded-3xl
border
border-yellow-500/10
bg-black/70
shadow-[0_0_30px_rgba(234,179,8,0.08)]
transition-all
${className}
`}
>
{children}
</motion.div>
);
}