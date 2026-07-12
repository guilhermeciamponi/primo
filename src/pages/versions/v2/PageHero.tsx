import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { images as assets } from "../content";
import { DiamondRule } from "./ui";

const olive = assets.illustrations.olive;
const oil = assets.illustrations.oil;

// A short photo hero for the inner pages. Cross-fades through a set of photos:
// a stable base layer always shows the current photo at full opacity while the
// next one fades in on top — so there is never a brightness dip or flicker.
export const PageHero = ({
  images,
  eyebrow,
  title,
  sub,
}: {
  images: string[];
  eyebrow?: string;
  title: string;
  sub?: string;
}) => {
  const [[base, curr], setPair] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setPair(([, c]) => [c, (c + 1) % images.length]), 6000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section className="relative flex min-h-[48vh] items-center justify-center overflow-hidden md:min-h-[58vh]">
      <div className="absolute inset-0 bg-[#241a10]">
        {/* base: the outgoing photo, held fully opaque underneath */}
        <img src={images[base]} alt="" className="absolute inset-0 h-full w-full object-cover" />
        {/* incoming photo fades in on top of the base */}
        <motion.img
          key={curr}
          src={images[curr]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(38,28,16,0.55), rgba(28,21,12,0.68))" }} />
      </div>
      <img src={olive} alt="" className="pointer-events-none absolute -right-6 -top-6 z-10 w-44 opacity-60 md:w-64" />
      <img src={oil} alt="" className="pointer-events-none absolute -bottom-8 -left-8 z-10 hidden w-36 opacity-45 md:block" />
      <div className="absolute left-5 top-5 z-10 h-12 w-12 border-l-2 border-t-2 border-[#d8b877]/50" />
      <div className="absolute right-5 top-5 z-10 h-12 w-12 border-r-2 border-t-2 border-[#d8b877]/50" />
      <div className="absolute bottom-5 left-5 z-10 h-12 w-12 border-b-2 border-l-2 border-[#d8b877]/50" />
      <div className="absolute bottom-5 right-5 z-10 h-12 w-12 border-b-2 border-r-2 border-[#d8b877]/50" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-16 text-center text-[#f7f0e0]">
        {eyebrow && <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8b877]">{eyebrow}</p>}
        <h1 className="mt-2 font-['Fraunces'] text-5xl font-semibold leading-none md:text-6xl">{title}</h1>
        <div className="mt-5 flex justify-center"><DiamondRule color="#d8b877" /></div>
        {sub && <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#f7f0e0]/85">{sub}</p>}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setPair(([, c]) => [c, i])}
              aria-label={`Photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === curr ? "w-6 bg-[#d8b877]" : "w-1.5 bg-[#f7f0e0]/50 hover:bg-[#f7f0e0]/80"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
