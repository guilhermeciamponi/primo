import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Fade-and-rise a block into view as it scrolls up — used across every page so
// the sub-pages feel as alive as the home page.
export const Reveal = ({ children, delay = 0, y = 26, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// Shared palette + primitives for the v2 ("Il Menu") site, so every page matches.
export const C = {
  navy: "#1e2c4d",
  gold: "#b6924e",
  lightGold: "#d8b877",
  cream: "#f7f0e0",
  cream2: "#efe6d2",
  brown: "#4e3a2a",
};

export const DiamondRule = ({ w = "5rem", color = C.gold }: { w?: string; color?: string }) => (
  <span className="mx-auto flex items-center" style={{ width: w }} aria-hidden>
    <span className="h-1.5 w-1.5 rotate-45" style={{ background: color }} />
    <span className="h-px flex-1" style={{ background: color }} />
    <span className="h-1.5 w-1.5 rotate-45" style={{ background: color }} />
  </span>
);

export const SectionTitle = ({
  label,
  title,
  sub,
  align = "center",
  light = false,
}: {
  label?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  light?: boolean;
}) => (
  <div className={align === "center" ? "text-center" : ""}>
    {label && <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b6924e]">{label}</p>}
    <h2 className={`mt-2 font-['Fraunces'] text-4xl font-semibold leading-tight md:text-5xl ${light ? "text-[#f7f0e0]" : "text-[#1e2c4d]"}`}>{title}</h2>
    {align === "center" && <div className="mt-5 flex justify-center"><DiamondRule color={light ? C.lightGold : C.gold} /></div>}
    {sub && <p className={`mt-4 text-[15px] leading-relaxed ${align === "center" ? "mx-auto max-w-xl" : "max-w-md"} ${light ? "text-[#f7f0e0]/75" : "text-[#4e3a2a]/75"}`}>{sub}</p>}
  </div>
);

export const StarRow = ({ n = 5 }: { n?: number }) => (
  <div className="flex gap-0.5" aria-hidden>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={15} strokeWidth={0} className={i < n ? "fill-[#d8b877]" : "fill-current opacity-20"} />
    ))}
  </div>
);

export const goldLink =
  "text-[12px] font-semibold uppercase tracking-[0.15em] text-[#b6924e] underline decoration-[#b6924e]/40 underline-offset-4 transition-colors hover:text-[#1e2c4d]";
