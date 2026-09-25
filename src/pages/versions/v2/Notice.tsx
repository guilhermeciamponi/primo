import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { markNoticeSeen, noticeSeen, onNoticeChange } from "@/lib/notice";
import { useLang } from "../i18n";

/**
 * One button, because there is nothing here to decide — see src/lib/notice.ts for why a pair of
 * buttons would be dishonest on this site.
 *
 * It states the two things a visitor would otherwise have no way of knowing: that we set two
 * cookies of our own, and that the Contact page's map loads from Google and hands Google their
 * IP. The detail lives on the privacy page, linked from here.
 *
 * Shown once. A notice that returns every visit stops being read, and then it protects nobody.
 */
export function SiteNotice() {
  const { tr } = useLang();
  // false on the server and on the first client render so hydration matches; the stored flag
  // arrives in the effect, same shape as useLang.
  const [seen, setSeen] = useState(true);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setSeen(noticeSeen());
    const stop = onNoticeChange(() => setSeen(noticeSeen()));
    const id = window.setTimeout(() => setShown(true), 800);
    return () => {
      stop();
      window.clearTimeout(id);
    };
  }, []);

  if (seen) return null;

  return (
    <div
      role="region"
      aria-live="polite"
      aria-label={tr.noticeTitle}
      className={`fixed inset-x-0 bottom-0 z-[9998] px-4 pb-4 transition-all duration-700 md:px-6 md:pb-6 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-5 rounded-[6px] border-2 border-[#b6924e]/45 bg-[#4e3a2a] p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] md:flex-row md:items-center md:gap-8">
        <div className="flex-1">
          <p className="font-['Fraunces'] text-[17px] font-semibold text-[#f7f0e0]">{tr.noticeTitle}</p>
          <p className="mt-2 max-w-[68ch] text-[14px] leading-relaxed text-[#f2e6cf]/75">
            {tr.noticeBody}{" "}
            <Link to="/privacy" className="font-semibold text-[#d8b877] underline-offset-4 hover:underline">
              {tr.noticeRead}
            </Link>
          </p>
        </div>
        <button
          type="button"
          onClick={markNoticeSeen}
          className="inline-flex shrink-0 items-center gap-2 rounded-[3px] bg-[#d8b877] px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1e2c4d] transition-transform hover:scale-[1.03]"
        >
          <Check size={15} strokeWidth={3} /> {tr.noticeAck}
        </button>
      </div>
    </div>
  );
}
