import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Phone, ExternalLink } from "lucide-react";
import { useLang } from "./i18n";
import { images, restaurant, openTime, closedDayIndex, RESERVE_URL, signatureDishes, v2photos, press } from "./content";
import { reviews, reviewAggregate, type Review } from "./reviews";
import { V2Header } from "./v2/V2Header";
import { V2Footer } from "./v2/V2Footer";
import { DiamondRule, SectionTitle, StarRow, goldLink } from "./v2/ui";

// ── Il Menu · Home ───────────────────────────────────────────────────────────
// The homepage in the printed-menu look (navy + gold on cream, warm browns) with
// the real menu illustrations sprinkled through. Header/footer are shared so the
// Menu / About / Gallery / Contact pages match exactly.

const olive = images.illustrations.olive;
const oil = images.illustrations.oil;
const salami = images.illustrations.salami;
const tomato = images.illustrations.tomato;
const cake = images.illustrations.cake;
const pizza = images.illustrations.pizza;

const ReviewCard = ({ r }: { r: Review }) => (
  <figure className="mx-2.5 flex w-[300px] shrink-0 flex-col rounded-[6px] border border-[#b6924e]/25 bg-[#f7f0e0] p-6 text-[#1e2c4d] shadow-md md:w-[340px]">
    <StarRow n={r.rating} />
    <blockquote className="mt-3 line-clamp-6 flex-1 text-[14px] leading-relaxed text-[#4e3a2a]/85">“{r.text}”</blockquote>
    <figcaption className="mt-4 flex items-center justify-between gap-2 border-t border-[#1e2c4d]/10 pt-3">
      <span className="truncate font-['Fraunces'] text-[15px] font-semibold text-[#1e2c4d]">{r.name}</span>
      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#b6924e]">{r.source} · {r.date}</span>
    </figcaption>
  </figure>
);

const V2Menu = () => {
  const { lang, setLang, tr } = useLang();
  const [pressIdx, setPressIdx] = useState(0);
  useEffect(() => {
    document.title = "Al Primo Piano · Italian Restaurant · Volendam";
  }, []);

  const pressCount = press.length;
  const goPress = (dir: number) => setPressIdx((i) => (i + dir + pressCount) % pressCount);
  const nextPress = press[(pressIdx + 1) % pressCount];
  const nextLabel = nextPress.source;
  const hoursLine = `${openTime} · ${tr.closed} ${tr.days[closedDayIndex]}`;

  // Social-proof helpers: the rolling value line, the rating chips, and the two card rows.
  const g = reviewAggregate.google;
  const ta = reviewAggregate.tripadvisor;
  const valueItems = [
    `★ ${g.rating.toFixed(1)} ${tr.ratedOn}`,
    `${g.count}+ Google ${tr.reviewsOn}`,
    ...tr.valueProps,
  ];
  const aggregates = [
    { label: "Google", ...g },
    ...(ta ? [{ label: "Tripadvisor", ...ta }] : []),
  ];
  const reviewHalf = Math.ceil(reviews.length / 2);

  return (
    <div id="top" className="min-h-screen bg-[#f7f0e0] font-['Inter'] text-[#1e2c4d] antialiased">
      <V2Header lang={lang} setLang={setLang} tr={tr} active="home" />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative flex min-h-[86vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={v2photos.hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(38,28,16,0.42), rgba(28,21,12,0.60))" }} />
        </div>
        <img src={olive} alt="" className="pointer-events-none absolute -right-6 -top-6 w-56 opacity-70 md:w-80" />
        <img src={oil} alt="" className="pointer-events-none absolute -bottom-8 -left-8 hidden w-48 opacity-55 md:block" />
        <div className="absolute left-6 top-6 h-14 w-14 border-l-2 border-t-2 border-[#d8b877]/50" />
        <div className="absolute right-6 top-6 h-14 w-14 border-r-2 border-t-2 border-[#d8b877]/50" />
        <div className="absolute bottom-6 left-6 h-14 w-14 border-b-2 border-l-2 border-[#d8b877]/50" />
        <div className="absolute bottom-6 right-6 h-14 w-14 border-b-2 border-r-2 border-[#d8b877]/50" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center text-[#f7f0e0]">
          <img src={images.logoMark} alt="" className="mx-auto mb-5 h-16 w-16 object-contain" style={{ filter: "brightness(0) invert(0.92)" }} />
          <h1 className="font-['Fraunces'] text-5xl font-semibold leading-none md:text-7xl">AL PRIMO PIANO</h1>
          <p className="mt-2 font-['Fraunces'] text-lg uppercase tracking-[0.3em] text-[#f7f0e0]/85 md:text-2xl">Italian Restaurant</p>
          <div className="mt-5 flex justify-center"><DiamondRule color="#d8b877" /></div>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#f7f0e0]/85 md:text-base">{tr.heroSubtitle}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={RESERVE_URL} target="_blank" rel="noreferrer" className="rounded-[3px] bg-[#d8b877] px-8 py-3 text-[12px] font-semibold uppercase tracking-widest text-[#1e2c4d] transition-transform hover:scale-[1.03]">{tr.btnReserve}</a>
            <Link to="/menu" className="rounded-[3px] border border-[#f7f0e0]/50 px-8 py-3 text-[12px] font-semibold uppercase tracking-widest text-[#f7f0e0] transition-colors hover:bg-[#f7f0e0]/10">{tr.btnMenu}</Link>
          </div>
          <div className="mt-10 flex flex-col justify-center gap-4 text-[11px] uppercase tracking-[0.2em] text-[#f7f0e0]/70 sm:flex-row sm:gap-10">
            <span>{hoursLine}</span>
            <span>{restaurant.phone}</span>
            <span>{restaurant.city}</span>
          </div>
        </div>
      </section>

      {/* ── Social proof (real guest reviews) — brown, high on the page ── */}
      <section id="reviews" className="relative overflow-hidden bg-[#4e3a2a] text-[#f7f0e0]">
        {/* rolling value line — Google rating + what makes the place worth it */}
        <div className="relative flex overflow-hidden border-b border-[#d8b877]/25 bg-[#3f2e1e] py-3">
          <div className="apiano-marquee apiano-marquee-fast">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {valueItems.map((item, i) => (
                  <span key={i} className="flex items-center whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ecdcb8]">
                    {item}
                    <span className="mx-5 text-[#d8b877]">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <img src={olive} alt="" className="pointer-events-none absolute -right-10 top-20 hidden w-56 opacity-15 md:block" />
        <img src={oil} alt="" className="pointer-events-none absolute -left-12 bottom-2 hidden w-52 opacity-15 md:block" />

        <div className="relative py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8b877]">{tr.socialLabel}</p>
            <h2 className="mt-2 font-['Fraunces'] text-4xl font-semibold leading-tight md:text-5xl">{tr.socialTitle}</h2>
            <div className="mt-5 flex justify-center"><DiamondRule color="#d8b877" /></div>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#f7f0e0]/75">{tr.socialSub}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {aggregates.map((a) => (
                <a
                  key={a.label}
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-full border border-[#d8b877]/40 bg-[#f7f0e0]/5 px-5 py-2.5 transition-all hover:border-[#d8b877]/80 hover:bg-[#f7f0e0]/10"
                  title={`Read the ${a.label} reviews`}
                >
                  <span className="font-['Fraunces'] text-2xl font-semibold text-[#d8b877]">{a.rating.toFixed(1)}</span>
                  <StarRow n={Math.round(a.rating)} />
                  <span className="text-[12px] text-[#f7f0e0]/80"><span className="font-semibold">{a.label}</span> · {a.count} {tr.reviewsOn}</span>
                  <ExternalLink size={13} className="text-[#d8b877]/70 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* the fade overlays sit OUTSIDE the space-y wrapper so they cover the
              full height of the rows (space-y was pushing them down at the top) */}
          <div className="relative mt-14">
            <div className="space-y-5">
              {[{ items: reviews.slice(0, reviewHalf), dir: "l" }, { items: reviews.slice(reviewHalf), dir: "r" }].map((row, ri) =>
                row.items.length > 0 ? (
                  <div key={ri} className="apiano-marquee-row overflow-hidden">
                    <div className={`apiano-marquee ${row.dir === "l" ? "apiano-marquee-l" : "apiano-marquee-r"}`}>
                      {[...row.items, ...row.items].map((r, i) => <ReviewCard key={i} r={r} />)}
                    </div>
                  </div>
                ) : null
              )}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#4e3a2a] to-transparent md:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#4e3a2a] to-transparent md:w-28" />
          </div>
        </div>
      </section>

      {/* ── Signature Dishes ───────────────────────────────────── */}
      <section id="menu" className="relative overflow-hidden bg-[#f7f0e0] py-20 md:py-28">
        <img src={salami} alt="" className="pointer-events-none absolute right-6 top-10 hidden w-44 opacity-45 md:block" />
        <img src={olive} alt="" className="pointer-events-none absolute -left-10 top-24 hidden w-52 -scale-x-100 opacity-30 md:block" />
        <img src={tomato} alt="" className="pointer-events-none absolute -right-8 -bottom-4 hidden w-48 opacity-40 md:block" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionTitle label={tr.kitchenLabel} title={tr.signatureTitle} sub={tr.signatureSub} />
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {signatureDishes.map((d) => (
              <div key={d.name} className="group">
                <div className="mb-5 overflow-hidden rounded-[3px] border-2 border-[#b6924e]/40">
                  <img src={d.img} alt={d.name} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-['Fraunces'] text-2xl font-semibold text-[#1e2c4d]">{d.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#4e3a2a]/75">{d.desc}</p>
                <div className="my-3 h-px w-12 bg-[#b6924e]/50" />
                <span className="font-['Fraunces'] text-lg font-semibold text-[#b6924e]">{d.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center"><Link to="/menu" className={goldLink}>{tr.viewFullMenu}</Link></div>
        </div>
      </section>

      {/* ── About / Story (brown — restaurant warmth) ──────────── */}
      <section id="about" className="relative overflow-hidden bg-[#4e3a2a] text-[#f2e6cf]">
        <img src={oil} alt="" className="pointer-events-none absolute -bottom-8 right-0 w-56 opacity-50 md:w-72" />
        <img src={olive} alt="" className="pointer-events-none absolute -left-10 -top-8 w-52 opacity-40 md:w-64" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="rounded-[3px] border-8 border-[#b6924e] p-1 shadow-2xl" style={{ background: "linear-gradient(135deg,#d8b877,#a9822f,#d8b877)" }}>
            <img src={v2photos.corner} alt="" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8b877]">{tr.storyKicker}</p>
            <h2 className="mt-2 font-['Fraunces'] text-4xl font-semibold leading-tight md:text-5xl">{tr.aboutTitle}</h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#f2e6cf]/85">{tr.storyP1}</p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#f2e6cf]/85">{tr.storyP2}</p>
            <div className="mt-7"><Link to="/about" className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#d8b877] underline decoration-[#d8b877]/40 underline-offset-4 hover:text-[#f2e6cf]">{tr.aboutRestaurant}</Link></div>
          </div>
        </div>
      </section>

      {/* ── Gallery ────────────────────────────────────────────── */}
      <section id="gallery" className="relative overflow-hidden bg-[#f7f0e0] py-20 md:py-28">
        <img src={pizza} alt="" className="pointer-events-none absolute -left-12 top-8 hidden w-56 opacity-30 md:block" />
        <img src={cake} alt="" className="pointer-events-none absolute -right-8 -bottom-4 hidden w-48 opacity-40 md:block" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionTitle label={tr.navGallery} title={tr.galleryTitle} />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {v2photos.gallery.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-[2px] border-2 border-[#b6924e]/50">
                <img src={src} alt="" className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><Link to="/gallery" className={goldLink}>{tr.viewGallery}</Link></div>
        </div>
      </section>

      {/* ── Inside / Our Space ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-[#1e2c4d]/12 bg-[#efe6d2] py-20 md:py-28">
        <img src={oil} alt="" className="pointer-events-none absolute -left-10 bottom-8 hidden w-60 opacity-40 md:block" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionTitle label={tr.ourSpaceLabel} title={tr.insideTitle} sub={tr.insideSub} />
          <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[3px] border-2 border-[#b6924e]/50">
              <img src={v2photos.harbor} alt="" className="h-full min-h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="grid grid-cols-2 content-start gap-6">
              {[v2photos.wheel, v2photos.terrace, images.inside[0], v2photos.vegpizza].map((src, i) => (
                <div key={i} className="overflow-hidden rounded-[3px] border-2 border-[#b6924e]/50">
                  <img src={src} alt="" className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── In the press (one large clipping at a time) ─────────── */}
      <section id="press" className="relative overflow-hidden bg-[#f7f0e0] py-20 md:py-28">
        <img src={oil} alt="" className="pointer-events-none absolute -left-12 bottom-6 hidden w-56 opacity-35 md:block" />
        <div className="relative mx-auto max-w-5xl px-6">
          <SectionTitle label={tr.pressLabel} title={tr.pressTitle} sub={tr.pressSub} />

          <div className="relative mt-14">
            <div className="overflow-hidden rounded-[4px] border-2 border-[#b6924e]/45 bg-white shadow-[0_18px_50px_-20px_rgba(30,44,77,0.45)]">
              <div className="flex items-center justify-center bg-[#efe6d2] p-4 md:p-6">
                <img
                  src={press[pressIdx].image}
                  alt={`${press[pressIdx].source} — Al Primo Piano`}
                  className="max-h-[680px] w-auto max-w-full rounded-[2px] object-contain shadow-md ring-1 ring-[#1e2c4d]/10"
                />
              </div>

              <div className="flex flex-col gap-5 border-t-2 border-[#b6924e]/25 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                <div className="flex items-center gap-5">
                  <span className="whitespace-nowrap font-['Fraunces'] text-5xl font-semibold leading-none text-[#b6924e]/30 md:text-6xl">
                    {String(pressIdx + 1).padStart(2, "0")}
                    <span className="text-2xl text-[#b6924e]/20 md:text-3xl"> / {String(pressCount).padStart(2, "0")}</span>
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b6924e]">
                      <span>{press[pressIdx].source}</span>
                      <span className="opacity-50">·</span><span className="opacity-70">{press[pressIdx].date}</span>
                    </div>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[#4e3a2a]/80">
                      {tr[press[pressIdx].cap]}
                    </p>
                  </div>
                </div>
                <a href={press[pressIdx].href} target="_blank" rel="noreferrer" className={`shrink-0 ${goldLink}`}>{tr.pressRead} →</a>
              </div>
            </div>

            <button
              onClick={() => goPress(-1)}
              aria-label="Previous"
              className="absolute -left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#b6924e] bg-[#f7f0e0] text-[#b6924e] shadow-md transition-colors hover:bg-[#b6924e] hover:text-[#f7f0e0] md:flex lg:-left-6"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => goPress(1)}
              aria-label="Next"
              className="absolute -right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#b6924e] bg-[#f7f0e0] text-[#b6924e] shadow-md transition-colors hover:bg-[#b6924e] hover:text-[#f7f0e0] md:flex lg:-right-6"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              {press.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPressIdx(i)}
                  aria-label={`Go to item ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === pressIdx ? "w-7 bg-[#b6924e]" : "w-2.5 bg-[#b6924e]/30 hover:bg-[#b6924e]/60"}`}
                />
              ))}
            </div>
            <button onClick={() => goPress(1)} className="group flex items-center gap-3 text-left">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#4e3a2a]/55">{tr.pressNext}</span>
              <span className="max-w-[12rem] truncate text-[13px] font-semibold uppercase tracking-[0.12em] text-[#1e2c4d] group-hover:text-[#b6924e]">{nextLabel}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b6924e]/60 text-[#b6924e] transition-colors group-hover:bg-[#b6924e] group-hover:text-[#f7f0e0]">
                <ChevronRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Reserve ("Come and see us") — Inside's cream bg ────── */}
      <section id="reserve" className="relative overflow-hidden bg-[#efe6d2] py-16 md:py-20">
        <img src={salami} alt="" className="pointer-events-none absolute -right-8 -top-8 hidden w-52 opacity-45 md:block" />
        <img src={cake} alt="" className="pointer-events-none absolute -left-8 -bottom-6 hidden w-52 opacity-55 md:block" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <img src={images.logoMark} alt="" className="mx-auto h-24 w-24 object-contain md:h-28 md:w-28" />
          <h2 className="mt-4 font-['Fraunces'] text-4xl font-semibold text-[#1e2c4d] md:text-5xl">{tr.reserveTitle}</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-[#4e3a2a]/80">{tr.reserveBody}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="tel:+31614978723" className="group inline-flex items-center gap-3 rounded-full bg-[#4e3a2a] py-2 pl-2 pr-7 text-[#f7f0e0] shadow-md ring-1 ring-[#4e3a2a]/10 transition-all hover:bg-[#5c4632] hover:shadow-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b6924e] text-[#f7f0e0] transition-transform group-hover:scale-105">
                <Phone size={18} strokeWidth={2.2} />
              </span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8b877]">{tr.callUs}</span>
                <span className="font-['Fraunces'] text-lg font-semibold">{restaurant.phone}</span>
              </span>
            </a>
            <a href={RESERVE_URL} target="_blank" rel="noreferrer" className="rounded-full border-2 border-[#b6924e] px-8 py-3.5 text-[12px] font-semibold uppercase tracking-widest text-[#b6924e] transition-colors hover:bg-[#b6924e] hover:text-[#f7f0e0]">{tr.btnBook}</a>
          </div>
        </div>
      </section>

      <V2Footer tr={tr} />
    </div>
  );
};

export default V2Menu;
