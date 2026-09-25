import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ShieldCheck } from "lucide-react";
import { hasThirdParty, onConsentChange, readConsent, setConsent, type Consent } from "@/lib/consent";
import { useLang } from "../i18n";

/**
 * The consent layer, in this restaurant's material rather than a grey bar — a generic banner
 * reads as somebody else's software bolted onto the site.
 *
 * House design, from DECISOES.md: two exits, "essentials only" and "accept all". No refuse
 * button and no X that closes without choosing, because a dismissal is not an answer.
 *
 * ⚠️ The wording is deliberately narrow. Our own counter (`sf_sid`, `nv_vid`) loads from
 * index.html and never passes through here, so the banner must not say "nothing loads until you
 * accept" — that is the promise nuvenhub.com had to rewrite once already. It says what is true:
 * our measurement is ours and stays with us; Google's map waits.
 */
export function useConsentChoice() {
  // null on the server and on the first client render, so hydration matches; the stored value
  // arrives in the effect. Same reason as useLang.
  const [choice, setChoice] = useState<Consent | null>(null);
  useEffect(() => {
    setChoice(readConsent());
    return onConsentChange(setChoice);
  }, []);
  return choice;
}

export function ConsentBanner() {
  const { tr } = useLang();
  const choice = useConsentChoice();
  const [shown, setShown] = useState(false);

  // A beat before it slides in, so it reads as part of the page arriving rather than an alert.
  useEffect(() => {
    const id = window.setTimeout(() => setShown(true), 800);
    return () => window.clearTimeout(id);
  }, []);

  if (!hasThirdParty || choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={tr.consentTitle}
      className={`fixed inset-x-0 bottom-0 z-[9998] px-4 pb-4 transition-all duration-700 md:px-6 md:pb-6 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-5 rounded-[6px] border-2 border-[#b6924e]/45 bg-[#4e3a2a] p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] md:flex-row md:items-center md:gap-8">
        <div className="flex-1">
          <p className="font-['Fraunces'] text-[17px] font-semibold text-[#f7f0e0]">{tr.consentTitle}</p>
          <p className="mt-2 max-w-[62ch] text-[14px] leading-relaxed text-[#f2e6cf]/75">
            {tr.consentBody}{" "}
            <Link to="/privacy" className="font-semibold text-[#d8b877] underline-offset-4 hover:underline">
              {tr.consentRead}
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className="inline-flex items-center gap-2 rounded-[3px] border border-[#f7f0e0]/35 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#f7f0e0]/85 transition-colors hover:border-[#f7f0e0]/70 hover:text-[#f7f0e0]"
          >
            <ShieldCheck size={15} /> {tr.consentEssential}
          </button>
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="inline-flex items-center gap-2 rounded-[3px] bg-[#d8b877] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1e2c4d] transition-transform hover:scale-[1.03]"
          >
            <Check size={15} strokeWidth={3} /> {tr.consentAll}
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * The same decision, changeable. Lives on the privacy page: a withdrawal nobody can find is not
 * a real withdrawal.
 */
export function ConsentControl() {
  const { tr } = useLang();
  const choice = useConsentChoice();
  if (!hasThirdParty) return null;

  return (
    <div className="mt-14 rounded-[6px] border-2 border-[#b6924e]/35 bg-[#f2e6cf]/60 p-6">
      <p className="font-['Fraunces'] text-[17px] font-semibold text-[#1e2c4d]">{tr.consentTitle}</p>
      <p className="mt-2 text-[15px] leading-relaxed text-[#4e3a2a]/80">{tr.consentBody}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setConsent("granted")}
          disabled={choice === "granted"}
          className="rounded-[3px] bg-[#d8b877] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1e2c4d] disabled:opacity-40"
        >
          {tr.consentAll}
        </button>
        <button
          type="button"
          onClick={() => setConsent("denied")}
          disabled={choice === "denied"}
          className="rounded-[3px] border border-[#4e3a2a]/30 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4e3a2a]/80 hover:border-[#4e3a2a]/60 disabled:opacity-40"
        >
          {tr.consentEssential}
        </button>
      </div>
    </div>
  );
}
