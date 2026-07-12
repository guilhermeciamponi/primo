import { useEffect } from "react";
import { MapPin, Clock, Phone, Mail, Instagram, Navigation, CalendarDays } from "lucide-react";
import { useLang } from "../i18n";
import { images, restaurant, hours, RESERVE_URL } from "../content";
import { V2Header } from "./V2Header";
import { V2Footer } from "./V2Footer";
import { PageHero } from "./PageHero";
import { Reveal } from "./ui";

const olive = images.illustrations.olive;
const oil = images.illustrations.oil;
const MAPS_EMBED = "https://www.google.com/maps?q=Al%20Primo%20Piano%2C%20Zuideinde%205%2C%20Volendam&output=embed";
const MAPS_DIR = "https://www.google.com/maps/dir/?api=1&destination=Al%20Primo%20Piano%2C%20Zuideinde%205%2C%20Volendam";

const Detail = ({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4e3a2a] text-[#d8b877]"><Icon size={18} /></span>
    <div className="flex-1">
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b6924e]">{title}</h3>
      {children}
    </div>
  </div>
);

const ContactPage = () => {
  const { lang, setLang, tr } = useLang();
  useEffect(() => {
    document.title = "Al Primo Piano · Contact";
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f0e0] font-['Inter'] text-[#1e2c4d] antialiased">
      <V2Header lang={lang} setLang={setLang} tr={tr} active="contact" />

      <PageHero images={["/heroes/contact-1.jpg", "/heroes/contact-2.jpg", "/heroes/contact-3.jpg"]} eyebrow={tr.visitUs} title={tr.navContact} sub={tr.reserveBody} />

      <div className="relative overflow-hidden">
        <img src={olive} alt="" className="pointer-events-none absolute -right-10 -top-8 hidden w-56 opacity-[0.12] md:block" />
        <img src={oil} alt="" className="pointer-events-none absolute -left-12 bottom-8 hidden w-52 opacity-[0.13] md:block" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          {/* Details */}
          <Reveal className="space-y-8">
            <Detail icon={MapPin} title={tr.addressLabel}>
              <p className="mt-1 font-['Fraunces'] text-lg text-[#1e2c4d]">{restaurant.address}</p>
              <p className="text-[14px] text-[#4e3a2a]/75">{restaurant.city}</p>
              <a href={MAPS_DIR} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#b6924e] hover:text-[#1e2c4d]">
                <Navigation size={13} /> {tr.getDirections}
              </a>
            </Detail>

            <Detail icon={Clock} title={tr.hoursTitle}>
              <ul className="mt-2 space-y-1">
                {hours.map((h) => (
                  <li key={h.d} className="flex justify-between gap-6 text-[14px]">
                    <span className="text-[#1e2c4d]">{tr.days[h.d]}</span>
                    <span className={h.t ? "text-[#4e3a2a]/75" : "text-[#b6924e]"}>{h.t ?? tr.closed}</span>
                  </li>
                ))}
              </ul>
            </Detail>

            <Detail icon={Phone} title={tr.footerContact}>
              <a href="tel:+31614978723" className="mt-1 block font-['Fraunces'] text-lg text-[#1e2c4d] hover:text-[#b6924e]">{restaurant.phone}</a>
              <a href={`mailto:${restaurant.email}`} className="inline-flex items-center gap-1.5 text-[14px] text-[#4e3a2a]/75 hover:text-[#b6924e]"><Mail size={13} /> {restaurant.email}</a>
            </Detail>

            <Detail icon={Instagram} title={tr.footerFollow}>
              <div className="mt-1 flex gap-4 text-[14px]">
                <a href="https://www.instagram.com/alprimopianovolendam/" target="_blank" rel="noreferrer" className="text-[#1e2c4d] hover:text-[#b6924e]">Instagram</a>
                <a href="https://www.facebook.com/al.primo.piano.volendam" target="_blank" rel="noreferrer" className="text-[#1e2c4d] hover:text-[#b6924e]">Facebook</a>
                <a href="https://www.tripadvisor.com/Restaurant_Review-g188599-d33007026-Reviews-Al_Primo_Piano-Volendam_North_Holland_Province.html" target="_blank" rel="noreferrer" className="text-[#1e2c4d] hover:text-[#b6924e]">TripAdvisor</a>
              </div>
            </Detail>

            <div className="rounded-[8px] border border-[#b6924e]/30 bg-[#efe6d2] p-6">
              <h3 className="font-['Fraunces'] text-xl font-semibold text-[#1e2c4d]">{tr.reserveTitle}</h3>
              <p className="mt-2 text-[14px] text-[#4e3a2a]/80">{tr.reserveBody}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={RESERVE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#4e3a2a] px-6 py-3 text-[12px] font-semibold uppercase tracking-widest text-[#f7f0e0] transition-colors hover:bg-[#5c4632]">
                  <CalendarDays size={15} /> {tr.btnReserve}
                </a>
                <a href="tel:+31614978723" className="inline-flex items-center gap-2 rounded-full border-2 border-[#b6924e] px-6 py-3 text-[12px] font-semibold uppercase tracking-widest text-[#b6924e] transition-colors hover:bg-[#b6924e] hover:text-[#f7f0e0]">
                  <Phone size={15} /> {tr.callUs}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-[8px] border-2 border-[#b6924e]/40 shadow-md">
              <iframe
                title="Al Primo Piano — map"
                src={MAPS_EMBED}
                className="h-full min-h-[420px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>

      <V2Footer tr={tr} />
    </div>
  );
};

export default ContactPage;
