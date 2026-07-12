import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Menu as MenuIcon, X } from "lucide-react";
import { LangSwitcher } from "@/components/rustic/LangSwitcher";
import type { Lang, Strings } from "../i18n";
import { images, RESERVE_URL } from "../content";

type Active = "home" | "menu" | "about" | "gallery" | "contact";

export const V2Header = ({
  lang,
  setLang,
  tr,
  active,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: Strings;
  active: Active;
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav: { key: Active; label: string; to: string }[] = [
    { key: "home", label: tr.navHome, to: "/" },
    { key: "menu", label: tr.navMenu, to: "/menu" },
    { key: "about", label: tr.navAbout, to: "/about" },
    { key: "gallery", label: tr.navGallery, to: "/gallery" },
    { key: "contact", label: tr.navContact, to: "/contact" },
  ];

  const ReserveBtn = ({ className = "" }: { className?: string }) => (
    <a
      href={RESERVE_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-xl border-2 border-[#c0a078] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#b08a4a] transition-all duration-300 hover:bg-[#c0a078] hover:text-[#2e2013] ${className}`}
    >
      <CalendarDays size={14} /> {tr.btnReserve}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[#1e2c4d]/12 bg-[#f7f0e0]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20">
        <Link to="/" className="flex shrink-0 items-center gap-2 md:gap-3">
          <img src={images.logoMark} alt="Al Primo Piano logo" className="h-8 w-auto md:h-12" />
          <div className="flex flex-col leading-none">
            <span className="font-['Cormorant_Garamond'] text-lg font-bold tracking-wide text-[#1e2c4d] md:text-2xl">AL PRIMO PIANO</span>
            <span className="text-[8px] uppercase tracking-[0.25em] text-[#b6924e] md:text-[10px]">Italian Restaurant</span>
          </div>
        </Link>

        <nav className="mx-4 hidden items-center gap-6 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className={`whitespace-nowrap text-xs uppercase tracking-[0.15em] transition-colors duration-200 ${
                item.key === active ? "border-b border-[#b6924e] text-[#1e2c4d]" : "text-[#1e2c4d]/60 hover:text-[#1e2c4d]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <LangSwitcher lang={lang} setLang={setLang} accent="#c0a078" activeText="#2e2013" />
          <ReserveBtn />
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-[#1e2c4d] xl:hidden" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#1e2c4d]/12 bg-[#f7f0e0] xl:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6">
            {nav.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`border-b border-[#1e2c4d]/10 py-2 text-sm uppercase tracking-[0.15em] ${item.key === active ? "text-[#1e2c4d]" : "text-[#1e2c4d]/70"}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-1 text-[#1e2c4d]"><LangSwitcher lang={lang} setLang={setLang} accent="#c0a078" activeText="#2e2013" /></div>
            <ReserveBtn className="mt-1 justify-center" />
          </nav>
        </div>
      )}
    </header>
  );
};
