import { useEffect } from "react";
import { Star, UtensilsCrossed, CalendarDays, Users } from "lucide-react";
import chefs from "@/assets/chefs.webp";
import { useLang } from "../i18n";
import { images, v2photos, foodCatalogUrl, restaurant, RESERVE_URL } from "../content";
import { reviewAggregate } from "../reviews";
import { V2Header } from "./V2Header";
import { V2Footer } from "./V2Footer";
import { PageHero } from "./PageHero";
import { DiamondRule, SectionTitle, Reveal } from "./ui";

const olive = images.illustrations.olive;
const oil = images.illustrations.oil;
const tomato = images.illustrations.tomato;

const AboutPage = () => {
  const { lang, setLang, tr } = useLang();
  useEffect(() => {
    document.title = "Al Primo Piano · About";
  }, []);

  const pillarImgs = [foodCatalogUrl("linguine-cozze-vongole.jpg"), v2photos.harbor, v2photos.corner];
  const spacePhotos = [v2photos.wheel, v2photos.terrace, images.inside[0], images.inside[1], images.inside[2], images.moments[0]];
  const g = reviewAggregate.google;
  const facts = [
    { icon: Star, big: g.rating.toFixed(1), label: "★ on Google" },
    { icon: Users, big: `${g.count}+`, label: "guest reviews" },
    { icon: UtensilsCrossed, big: "54", label: "dishes, made fresh" },
    { icon: CalendarDays, big: `${restaurant.openedYear}`, label: "on the harbour since" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f0e0] font-['Inter'] text-[#1e2c4d] antialiased">
      <V2Header lang={lang} setLang={setLang} tr={tr} active="about" />

      <PageHero images={["/heroes/about-1.jpg", "/heroes/about-2.jpg", "/heroes/about-3.jpg"]} eyebrow={tr.storyKicker} title={tr.navAbout} />

      {/* Story */}
      <section className="relative overflow-hidden bg-[#4e3a2a] text-[#f2e6cf]">
        <img src={oil} alt="" className="pointer-events-none absolute -bottom-8 right-0 w-56 opacity-40 md:w-72" />
        <img src={olive} alt="" className="pointer-events-none absolute -left-10 -top-8 w-52 opacity-30 md:w-64" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <div className="rounded-[3px] border-8 border-[#b6924e] p-1 shadow-2xl" style={{ background: "linear-gradient(135deg,#d8b877,#a9822f,#d8b877)" }}>
              <img src={v2photos.corner} alt="" className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8b877]">{tr.storyKicker}</p>
            <h2 className="mt-2 font-['Fraunces'] text-4xl font-semibold leading-tight md:text-5xl">{tr.storyTitle}</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#f2e6cf]/85">{tr.storyP1}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#f2e6cf]/85">{tr.storyP2}</p>
            <p className="mt-6 font-['Fraunces'] text-lg italic text-[#d8b877]">{tr.storySign}</p>
          </Reveal>
        </div>
      </section>

      {/* Motto / philosophy quote */}
      <section className="relative overflow-hidden bg-[#efe6d2] py-20 md:py-28">
        <img src={olive} alt="" className="pointer-events-none absolute -left-12 -top-6 hidden w-56 opacity-25 md:block" />
        <img src={oil} alt="" className="pointer-events-none absolute -right-12 -bottom-6 hidden w-52 opacity-25 md:block" />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b6924e]">{tr.aboutPhilosophyLabel}</p>
          <blockquote className="mt-6 font-['Fraunces'] text-3xl font-medium italic leading-snug text-[#4e3a2a] md:text-[2.6rem]">
            “{restaurant.motto}”
          </blockquote>
          <div className="mt-7 flex justify-center"><DiamondRule /></div>
          <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#b6924e]/80">From the chalkboard in our dining room</p>
        </Reveal>
      </section>

      {/* Three pillars — alternating image + text */}
      <section className="relative overflow-hidden bg-[#f7f0e0] py-20 md:py-28">
        <img src={tomato} alt="" className="pointer-events-none absolute -right-8 top-10 hidden w-40 opacity-25 md:block" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal><SectionTitle label={tr.aboutValuesLabel} title={tr.aboutTitle} /></Reveal>
          <div className="mt-16 space-y-16 md:space-y-24">
            {tr.aboutValues.map((v, i) => (
              <Reveal key={v.t}>
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                  <div className={`overflow-hidden rounded-[4px] border-2 border-[#b6924e]/40 shadow-md ${i % 2 ? "md:order-2" : ""}`}>
                    <img src={pillarImgs[i]} alt="" loading="lazy" className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                  <div>
                    <span className="font-['Fraunces'] text-5xl font-semibold text-[#b6924e]/25">0{i + 1}</span>
                    <h3 className="mt-1 font-['Fraunces'] text-3xl font-semibold text-[#1e2c4d] md:text-4xl">{v.t}</h3>
                    <div className="my-4 h-px w-12 bg-[#b6924e]/60" />
                    <p className="max-w-md text-[15px] leading-relaxed text-[#4e3a2a]/80">{v.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="relative overflow-hidden bg-[#4e3a2a] py-14 text-[#f2e6cf] md:py-16">
        <img src={olive} alt="" className="pointer-events-none absolute -left-10 -top-6 hidden w-48 opacity-20 md:block" />
        <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-y-10 px-6 md:grid-cols-4">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={i} delay={(i % 4) * 0.08}>
                <div className="text-center">
                  <Icon size={22} className="mx-auto text-[#d8b877]" strokeWidth={1.6} />
                  <div className="mt-3 font-['Fraunces'] text-3xl font-semibold text-[#f7f0e0]">{f.big}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f2e6cf]/70">{f.label}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* The family */}
      <section className="relative overflow-hidden bg-[#f7f0e0] py-20 md:py-24">
        <img src={oil} alt="" className="pointer-events-none absolute -left-10 bottom-8 hidden w-56 opacity-30 md:block" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[3px] border-8 border-[#b6924e] p-1 shadow-2xl" style={{ background: "linear-gradient(135deg,#d8b877,#a9822f,#d8b877)" }}>
              <img src={chefs} alt="The Al Primo Piano kitchen team" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              {[
                { name: "Domenico", role: "Pizzaiolo" },
                { name: "Alfredo", role: "Chef" },
                { name: "Giovanni", role: "Sous Chef" },
              ].map((c) => (
                <div key={c.name}>
                  <p className="font-['Fraunces'] text-[15px] font-semibold text-[#1e2c4d] md:text-[17px]">{c.name}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#b6924e]">{c.role}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b6924e]">{tr.aboutFamilyLabel}</p>
            <h2 className="mt-2 font-['Fraunces'] text-4xl font-semibold leading-tight text-[#1e2c4d] md:text-5xl">{tr.aboutFamilyTitle}</h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#4e3a2a]/80">{tr.aboutFamilyBody}</p>
          </Reveal>
        </div>
      </section>

      {/* The space */}
      <section className="relative overflow-hidden border-t border-[#1e2c4d]/10 bg-[#efe6d2] py-20 md:py-24">
        <img src={oil} alt="" className="pointer-events-none absolute -right-10 top-8 hidden w-56 opacity-30 md:block" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal><SectionTitle label={tr.ourSpaceLabel} title={tr.insideTitle} sub={tr.insideSub} /></Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {spacePhotos.map((src, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="overflow-hidden rounded-[3px] border-2 border-[#b6924e]/50">
                  <img src={src} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#f7f0e0] py-16 text-center">
        <img src={olive} alt="" className="pointer-events-none absolute -right-8 -top-8 hidden w-52 opacity-40 md:block" />
        <Reveal className="relative mx-auto max-w-2xl px-6">
          <h3 className="font-['Fraunces'] text-3xl font-semibold text-[#1e2c4d] md:text-4xl">{tr.reserveTitle}</h3>
          <p className="mx-auto mt-2 max-w-md text-[15px] text-[#4e3a2a]/80">{tr.reserveBody}</p>
          <a href={RESERVE_URL} data-nv-cta="Reservar mesa" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-[#b6924e] px-9 py-3.5 text-[12px] font-semibold uppercase tracking-widest text-[#f7f0e0] transition-transform hover:scale-[1.03]">{tr.btnReserve}</a>
        </Reveal>
      </section>

      <V2Footer tr={tr} />
    </div>
  );
};

export default AboutPage;
