import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, UtensilsCrossed } from "lucide-react";
import { useLang } from "./versions/i18n";
import { images } from "./versions/content";
import { V2Header } from "./versions/v2/V2Header";
import { V2Footer } from "./versions/v2/V2Footer";
import { DiamondRule } from "./versions/v2/ui";

const olive = images.illustrations.olive;
const oil = images.illustrations.oil;

// Trilingual copy kept local to the 404 page (buttons reuse the shared nav strings).
const COPY = {
  en: { title: "Page not found", body: "The page you're looking for isn't on the menu. Let's get you back to the table.", home: "Back to home" },
  it: { title: "Pagina non trovata", body: "La pagina che cerchi non è nel menù. Torniamo al tavolo.", home: "Torna alla home" },
  nl: { title: "Pagina niet gevonden", body: "De pagina die je zoekt staat niet op het menu. Laten we je terugbrengen naar de tafel.", home: "Terug naar home" },
};

const NotFound = () => {
  const { lang, setLang, tr } = useLang();
  const c = COPY[lang] ?? COPY.en;
  useEffect(() => {
    document.title = "Al Primo Piano · 404";
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f0e0] font-['Inter'] text-[#1e2c4d] antialiased">
      <V2Header lang={lang} setLang={setLang} tr={tr} active="home" />

      <section className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#4e3a2a] text-[#f2e6cf]">
        {/* Branch flourishes + gold corner brackets, matching the page heroes */}
        <img src={olive} alt="" className="pointer-events-none absolute -right-8 -top-8 z-0 w-56 opacity-30 md:w-80" />
        <img src={oil} alt="" className="pointer-events-none absolute -left-8 -bottom-8 z-0 hidden w-52 opacity-25 md:block" />
        <div className="absolute left-6 top-6 z-10 h-14 w-14 border-l-2 border-t-2 border-[#d8b877]/40" />
        <div className="absolute right-6 top-6 z-10 h-14 w-14 border-r-2 border-t-2 border-[#d8b877]/40" />
        <div className="absolute bottom-6 left-6 z-10 h-14 w-14 border-b-2 border-l-2 border-[#d8b877]/40" />
        <div className="absolute bottom-6 right-6 z-10 h-14 w-14 border-b-2 border-r-2 border-[#d8b877]/40" />

        <div className="relative z-10 mx-auto max-w-xl px-6 py-24 text-center md:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8b877]">Al Primo Piano</p>
          <h1 className="mt-4 font-['Fraunces'] text-[6rem] font-semibold leading-none text-[#d8b877] md:text-[8.5rem]">404</h1>
          <div className="mt-2 flex justify-center"><DiamondRule color="#d8b877" /></div>
          <h2 className="mt-6 font-['Fraunces'] text-2xl font-semibold text-[#f7f0e0] md:text-3xl">{c.title}</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[#f2e6cf]/80">{c.body}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#b6924e] px-8 py-3.5 text-[12px] font-semibold uppercase tracking-widest text-[#f7f0e0] shadow-md transition-transform hover:scale-[1.03]"
            >
              <Home size={15} /> {c.home}
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#b6924e] px-8 py-3.5 text-[12px] font-semibold uppercase tracking-widest text-[#d8b877] transition-colors hover:bg-[#b6924e]/15"
            >
              <UtensilsCrossed size={15} /> {tr.navMenu}
            </Link>
          </div>
        </div>
      </section>

      <V2Footer tr={tr} />
    </div>
  );
};

export default NotFound;
