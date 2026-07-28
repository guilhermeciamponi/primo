import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../i18n";
import { images, v2photos, foodCatalogUrl } from "../content";
import { V2Header } from "./V2Header";
import { V2Footer } from "./V2Footer";
import { PageHero } from "./PageHero";
import { DiamondRule, Reveal } from "./ui";

const olive = images.illustrations.olive;
const oil = images.illustrations.oil;

const foodPhotos = [
  "carpaccio-manzo.jpg", "linguine-cozze-vongole.jpg", "soute-cozze-studio.jpg", "pizza-margherita.jpg",
  "gamberi-griglia.jpg", "carpaccio-e-bolognese.jpg", "pizza-vegetariana.jpg",
  "burrata-pugliese.jpg", "pizza-prosciutto-rucola.jpg", "insalata-mista.jpg",
].map(foodCatalogUrl);

const GalleryPage = () => {
  const { lang, setLang, tr } = useLang();
  const [lightbox, setLightbox] = useState<string | null>(null);
  useEffect(() => {
    document.title = "Al Primo Piano · Gallery";
  }, []);

  const placePhotos = [
    v2photos.harbor, v2photos.wheel, v2photos.terrace, v2photos.corner,
    images.inside[0], images.inside[1], images.inside[2], images.inside[3],
    images.moments[0], images.moments[2], images.moments[3],
  ];

  const Block = ({ label, title, items }: { label: string; title: string; items: string[] }) => (
    <>
      <Reveal>
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b6924e]">{label}</p>
          <h2 className="mt-2 font-['Fraunces'] text-4xl font-semibold text-[#1e2c4d]">{title}</h2>
          <div className="mt-4 flex justify-center"><DiamondRule /></div>
        </div>
      </Reveal>
      <div className="mt-10 gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
        {items.map((src, i) => (
          <Reveal key={i} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid">
            <button onClick={() => setLightbox(src)} className="block w-full overflow-hidden rounded-[3px] border-2 border-[#b6924e]/40">
              <img src={src} alt="" loading="lazy" className="w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
            </button>
          </Reveal>
        ))}
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f7f0e0] font-['Inter'] text-[#1e2c4d] antialiased">
      <V2Header lang={lang} setLang={setLang} tr={tr} active="gallery" />

      <PageHero images={["/heroes/gallery-1.jpg", "/heroes/gallery-2.jpg", "/heroes/gallery-3.jpg"]} eyebrow={tr.navGallery} title={tr.galleryTitle} />

      <div className="relative overflow-hidden">
        <img src={olive} alt="" className="pointer-events-none absolute -right-12 -top-8 hidden w-64 opacity-[0.14] md:block" />
        <img src={oil} alt="" className="pointer-events-none absolute -left-12 bottom-8 hidden w-52 opacity-[0.13] md:block" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Block label={tr.kitchenLabel} title={tr.galleryTitle} items={foodPhotos} />
          <div className="mt-20" />
          <Block label={tr.ourSpaceLabel} title={tr.insideTitle} items={placePhotos} />
        </div>
      </div>

      <V2Footer tr={tr} />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a130c]/90 p-4"
          >
            <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b877]/50 text-[#f7f0e0] hover:bg-white/10" aria-label="Close"><X size={22} /></button>
            <motion.img
              initial={{ scale: 0.94 }} animate={{ scale: 1 }} exit={{ scale: 0.94 }}
              src={lightbox} alt="" className="max-h-[88vh] max-w-full rounded-[4px] object-contain shadow-2xl ring-1 ring-[#d8b877]/30"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
