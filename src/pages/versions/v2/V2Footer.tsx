import { Link } from "react-router-dom";
import type { Strings } from "../i18n";
import { images, restaurant, openTime, closedDayIndex, RESERVE_URL } from "../content";

const olive = images.illustrations.olive;
const oil = images.illustrations.oil;

// The brown Contact + Footer block, shared by every v2 page. The olive branch
// flows from the contact band down into the footer as one piece.
export const V2Footer = ({ tr }: { tr: Strings }) => {
  const quick: { label: string; to: string }[] = [
    { label: tr.navMenu, to: "/menu" },
    { label: tr.navAbout, to: "/about" },
    { label: tr.navGallery, to: "/gallery" },
    { label: tr.navContact, to: "/contact" },
  ];

  return (
    <div className="relative overflow-hidden bg-[#4e3a2a]">
      <img src={olive} alt="" className="pointer-events-none absolute -right-10 -top-12 z-0 w-72 opacity-40 md:w-[26rem]" />
      <img src={oil} alt="" className="pointer-events-none absolute -left-8 bottom-0 z-0 hidden w-52 opacity-40 md:block md:w-60" />

      {/* Address / Hours / Contact */}
      <section id="contact" className="relative z-10 py-16 text-[#f2e6cf]">
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 text-center md:grid-cols-3">
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8b877]">{tr.addressLabel}</h3>
            <p className="mt-2 font-['Fraunces'] text-lg">{restaurant.address}</p>
            <p className="text-[14px] text-[#f2e6cf]/70">{restaurant.city}</p>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8b877]">{tr.footerHours}</h3>
            <p className="mt-2 font-['Fraunces'] text-lg">{openTime}</p>
            <p className="text-[14px] text-[#f2e6cf]/70">{tr.closed} · {tr.days[closedDayIndex]}</p>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8b877]">{tr.footerContact}</h3>
            <p className="mt-2 font-['Fraunces'] text-lg">{restaurant.phone}</p>
            <p className="text-[14px] text-[#f2e6cf]/70">{restaurant.email}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-[#f7f0e0]">
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img src={images.logoMark} alt="Al Primo Piano" className="h-10 w-auto" style={{ filter: "brightness(0) invert(0.9)" }} />
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold">AL PRIMO PIANO</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#f7f0e0]/60">Italian Restaurant</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#f7f0e0]/70">{tr.footerBlurb}</p>
            </div>

            <div>
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-[#b6924e]">{tr.quickLinks}</h3>
              <nav className="flex flex-col gap-2">
                {quick.map((item) => (
                  <Link key={item.to} to={item.to} className="text-sm text-[#f7f0e0]/70 transition-colors hover:text-[#f7f0e0]">{item.label}</Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-[#b6924e]">{tr.visitUs}</h3>
              <div className="space-y-2 text-sm text-[#f7f0e0]/70">
                <p>{restaurant.address}</p>
                <p>{restaurant.city}</p>
                <p className="mt-4">{restaurant.phone}</p>
                <p>{restaurant.email}</p>
                <div className="mt-4">
                  <p>{openTime}</p>
                  <p>{tr.closed}: {tr.days[closedDayIndex]}</p>
                </div>
              </div>
              <div className="mt-6">
                <a href={RESERVE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border-2 border-[#b6924e]/50 px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-[#b6924e] transition-all duration-300 hover:bg-[#b6924e]/10">
                  {tr.btnReserve}
                </a>
              </div>
            </div>
          </div>

          <div className="my-10 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#b6924e]/30" />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#b6924e]/40">
              <path d="M10 2C10 2 12 6 18 10C12 14 10 18 10 18C10 18 8 14 2 10C8 6 10 2 10 2Z" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
            <div className="h-px w-12 bg-[#b6924e]/30" />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#f7f0e0]/40 md:flex-row">
            <p>© 2026 Al Primo Piano. {tr.rights}.</p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/alprimopianovolendam/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f7f0e0]/60">Instagram</a>
              <a href="https://www.facebook.com/al.primo.piano.volendam" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f7f0e0]/60">Facebook</a>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g188599-d33007026-Reviews-Al_Primo_Piano-Volendam_North_Holland_Province.html" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f7f0e0]/60">TripAdvisor</a>
            </div>
          </div>
          <div className="mt-8 text-center">
            {/*
              The agency credit.

              This used to be the wordmark re-typed in Comfortaa — "nuven" in cream, "hub" in
              pink. Comfortaa is not the brand typeface and the re-typed version carries no N
              ribbon, so it read as a different company. Replaced with the real asset,
              `nuven-mark.webp`, copied byte for byte from
              `NUVEN/Websites done/nuvenhub/public/img/`. Do not redraw it again; if the brand
              changes, replace the file.

              The ribbon is pink on transparency, so it holds on this dark footer and on the
              pale sibling sites equally — which is why it is used rather than the full lockup,
              whose wordmark is near-white.

              `alt=""` because "nuvenhub" sits beside it as text; a filled alt would make a
              screen reader announce the brand twice.
            */}
            <a
              href="https://nuvenhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
            >
              <img
                src="/nuven-mark.webp"
                alt=""
                aria-hidden="true"
                width={279}
                height={245}
                className="h-[14px] w-auto"
              />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f7f0e0]/50">
                {tr.madeBy} nuvenhub
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
