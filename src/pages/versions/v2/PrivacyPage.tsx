import { useEffect } from "react";
import { useLang } from "../i18n";
import { privacy, legal } from "../privacy-content";
import { V2Header } from "./V2Header";
import { V2Footer } from "./V2Footer";
import { Reveal, DiamondRule } from "./ui";

// A plain reading page, deliberately. No hero photograph, no motion beyond the shared Reveal:
// somebody opens this because they want to know what the site does with them, and the answer
// should be the first thing on the screen.
//
// The text lives in ../privacy-content.ts, in all three languages, and follows the site's own
// language switch — a visitor who reads the site in Italian should not be handed a policy in
// Dutch. See the note on NV_VID_REMOVED in that file before changing what it says about cookies.
export default function PrivacyPage() {
  const { lang, setLang, tr } = useLang();
  const doc = privacy[lang];

  useEffect(() => {
    document.title = `Al Primo Piano · ${doc.title}`;
  }, [doc.title]);

  return (
    <div className="min-h-screen bg-[#f7f0e0]">
      <V2Header lang={lang} setLang={setLang} tr={tr} />

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Reveal>
          <h1 className="font-['Fraunces'] text-4xl leading-tight text-[#1e2c4d] md:text-5xl">{doc.title}</h1>
          <div className="mt-5"><DiamondRule color="#b6924e" /></div>
        </Reveal>

        {doc.blocks.map((b, i) => (
          <Reveal key={i} delay={0.04 * i}>
            <section className="mt-10">
              {b.h && (
                <h2 className="font-['Fraunces'] text-[22px] font-semibold text-[#1e2c4d] md:text-2xl">{b.h}</h2>
              )}
              {b.p?.map((t, j) => (
                <p key={j} className="mt-3 text-[15px] leading-relaxed text-[#4e3a2a]/85">{t}</p>
              ))}
              {b.ul && (
                <ul className="mt-3 space-y-2.5">
                  {b.ul.map((t, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-[#4e3a2a]/85">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#b6924e]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </Reveal>
        ))}

        {/* Only rendered once there is a real date to show — see privacy-content.ts. */}
        {legal.entity && legal.kvk && (
          <p className="mt-12 text-[13px] italic text-[#4e3a2a]/60">
            {doc.updated}: {new Date().toISOString().slice(0, 10)}
          </p>
        )}

        {/* Not shown to anyone. Lets us confirm from outside what this page declares, without
            reading the bundle. It says "two-cookies" and not "interim-two-cookies" because two
            cookies is now the settled answer, not a stage — see privacy-content.ts. */}
        <span hidden data-privacy-state="two-cookies" />
      </main>

      <V2Footer lang={lang} tr={tr} />
    </div>
  );
}
