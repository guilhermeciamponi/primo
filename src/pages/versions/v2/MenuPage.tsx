import { useEffect, useState } from "react";
import { Phone, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { images, restaurant, fullMenu, dishPhotos, foodCatalogUrl, RESERVE_URL, type MenuDish } from "../content";
import { V2Header } from "./V2Header";
import { V2Footer } from "./V2Footer";
import { PageHero } from "./PageHero";
import { DiamondRule, Reveal } from "./ui";

const olive = images.illustrations.olive;
const salami = images.illustrations.salami;
const tomato = images.illustrations.tomato;
const cake = images.illustrations.cake;
const pizza = images.illustrations.pizza;

// Seven grouped tabs so the (17-section) menu stays a clean single row: the
// pizzas and the drinks each collapse into one tab that shows their sub-sections.
const TABS = [
  { id: "antipasti", label: "Antipasti", sections: ["antipasti"] },
  { id: "primi", label: "Primi", sections: ["primi"] },
  { id: "secondi", label: "Secondi", sections: ["secondi"] },
  { id: "contorni", label: "Contorni", sections: ["contorni"] },
  { id: "dolci", label: "Dolci", sections: ["dolci"] },
  { id: "pizze", label: "Pizze", sections: ["pizze-rosse", "pizze-bianche", "calzone"] },
  { id: "bevande", label: "Bevande", sections: ["bibite", "caffetteria", "liquori", "birra-spina", "birra-bottiglia", "vino-bianco", "vino-rosso", "rosato", "bollicine"] },
];
const byId = (id: string) => fullMenu.find((s) => s.id === id);

// A photo card for a dish (used only in the /menu-photos version, for food & pizza).
const DishCard = ({ d, desc, i }: { d: MenuDish; desc: string; i: number }) => {
  const photo = dishPhotos[d.name]?.[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.4), ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-[5px] border-2 border-[#b6924e]/30 bg-white/55 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#efe6d2]">
        {photo ? (
          <img src={foodCatalogUrl(photo)} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-center text-[#b6924e]/60">
            <img src={olive} alt="" className="pointer-events-none absolute -right-6 -top-4 w-24 opacity-20" loading="lazy" />
            <UtensilsCrossed size={26} strokeWidth={1.5} />
            <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em]">Foto in arrivo</span>
          </div>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-[#4e3a2a] px-3 py-1 font-['Fraunces'] text-[14px] font-semibold text-[#d8b877] shadow">{d.price}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-['Fraunces'] text-[19px] font-semibold leading-snug text-[#1e2c4d]">{d.name}</h3>
        <div className="my-2.5 h-px w-10 bg-[#b6924e]/50" />
        {desc && <p className="text-[13.5px] leading-relaxed text-[#4e3a2a]/75">{desc}</p>}
      </div>
    </motion.div>
  );
};

// An elegant printed-menu row (used for drinks always, and for everything in the text version).
const MenuRow = ({ d, desc }: { d: MenuDish; desc: string }) => (
  <div className="flex flex-col">
    <div className="flex items-baseline gap-3">
      <h4 className="font-['Fraunces'] text-[17px] font-semibold leading-snug text-[#1e2c4d]">{d.name}</h4>
      <span className="h-px flex-1 translate-y-[-2px] border-b border-dotted border-[#b6924e]/40" />
      <span className="whitespace-nowrap font-['Fraunces'] text-[16px] font-semibold text-[#b6924e]">{d.price}</span>
    </div>
    {desc && <p className="mt-1 text-[13px] italic leading-snug text-[#4e3a2a]/70">{desc}</p>}
  </div>
);

const MenuPage = ({ withPhotos = true }: { withPhotos?: boolean }) => {
  const { lang, setLang, tr } = useLang();
  const [active, setActive] = useState(TABS[0].id);
  useEffect(() => {
    document.title = "Al Primo Piano · Menu";
  }, []);

  const tab = TABS.find((t) => t.id === active) ?? TABS[0];
  const sections = tab.sections.map(byId).filter(Boolean) as NonNullable<ReturnType<typeof byId>>[];
  const dtext = (d: MenuDish) => (lang === "it" ? d.it : lang === "nl" ? d.nl : d.en);

  return (
    <div className="min-h-screen bg-[#f7f0e0] font-['Inter'] text-[#1e2c4d] antialiased">
      <V2Header lang={lang} setLang={setLang} tr={tr} active="menu" />

      <PageHero images={["/heroes/menu-1.webp", "/heroes/menu-2.webp", "/heroes/menu-3.webp"]} eyebrow="Al Primo Piano" title={tr.menuTitle} sub={tr.menuSub} />

      {/* Section index — serif labels with a sliding gold underline */}
      <div className="sticky top-16 z-30 border-b border-[#b6924e]/25 bg-[#f7f0e0]/95 shadow-[0_1px_12px_-6px_rgba(30,44,77,0.25)] backdrop-blur-sm md:top-20">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-4 py-4">
          {TABS.map((t) => {
            const on = t.id === active;
            return (
              <button key={t.id} onClick={() => setActive(t.id)} className="relative pb-2.5 outline-none">
                <span className={`font-['Fraunces'] text-[16px] tracking-wide transition-colors duration-200 md:text-[17px] ${on ? "font-semibold text-[#b6924e]" : "font-medium text-[#1e2c4d]/45 hover:text-[#1e2c4d]"}`}>
                  {t.label}
                </span>
                {on && (
                  <motion.span
                    layoutId="menuTabUnderline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-x-0 -bottom-px mx-auto h-[2px] w-6 rounded-full bg-[#b6924e]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active tab content */}
      <div className="relative overflow-hidden">
        {/* Food-illustration flourishes lifted from the printed menu — one per corner. */}
        <img src={tomato} alt="" className="pointer-events-none absolute -left-16 top-14 hidden w-52 opacity-[0.16] md:block" loading="lazy" />
        <img src={salami} alt="" className="pointer-events-none absolute -right-16 top-40 hidden w-48 -scale-x-100 opacity-[0.16] md:block" loading="lazy" />
        <img src={pizza} alt="" className="pointer-events-none absolute -left-14 bottom-28 hidden w-52 opacity-[0.14] md:block" loading="lazy" />
        <img src={cake} alt="" className="pointer-events-none absolute -right-14 bottom-14 hidden w-48 opacity-[0.18] md:block" loading="lazy" />
        <div className="relative mx-auto max-w-5xl px-6 py-14 md:py-20">
          <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }}>
            {sections.map((section) => {
              const asText = section.drinks || !withPhotos;
              return (
                <div key={section.id} className="mb-16 last:mb-0">
                  <div className="text-center">
                    <h2 className="font-['Fraunces'] text-3xl font-semibold text-[#1e2c4d] md:text-4xl">{section.title}</h2>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b6924e]">
                      {section.titleEn}{section.note ? ` · ${section.note}` : ""}
                    </p>
                    <div className="mt-4 flex justify-center"><DiamondRule /></div>
                  </div>

                  {asText ? (
                    <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-x-14 gap-y-6 md:grid-cols-2">
                      {section.items.map((d) => <MenuRow key={d.name} d={d} desc={dtext(d)} />)}
                    </div>
                  ) : (
                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {section.items.map((d, i) => <DishCard key={d.name} d={d} desc={dtext(d)} i={i} />)}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Reserve CTA */}
      <section className="relative overflow-hidden bg-[#efe6d2] py-16">
        <img src={olive} alt="" className="pointer-events-none absolute -right-8 -top-8 hidden w-52 opacity-40 md:block" loading="lazy" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h3 className="font-['Fraunces'] text-3xl font-semibold text-[#1e2c4d] md:text-4xl">{tr.reserveTitle}</h3>
            <p className="mx-auto mt-2 max-w-md text-[15px] text-[#4e3a2a]/80">{tr.reserveBody}</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="tel:+31614978723" className="group inline-flex items-center gap-3 rounded-full bg-[#4e3a2a] py-2 pl-2 pr-7 text-[#f7f0e0] shadow-md transition-all hover:bg-[#5c4632]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b6924e] text-[#f7f0e0] transition-transform group-hover:scale-105"><Phone size={18} strokeWidth={2.2} /></span>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8b877]">{tr.callUs}</span>
                  <span className="font-['Fraunces'] text-lg font-semibold">{restaurant.phone}</span>
                </span>
              </a>
              <a href={RESERVE_URL} data-nv-cta="Reservar mesa" target="_blank" rel="noreferrer" className="rounded-full border-2 border-[#b6924e] px-8 py-3.5 text-[12px] font-semibold uppercase tracking-widest text-[#b6924e] transition-colors hover:bg-[#b6924e] hover:text-[#f7f0e0]">{tr.btnReserve}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <V2Footer tr={tr} />
    </div>
  );
};

export default MenuPage;
