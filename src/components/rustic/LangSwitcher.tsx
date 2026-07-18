import { languages, type Lang } from "@/pages/versions/i18n";

// Segmented EN·IT·NL pill matching the original site's LanguageSwitcher.
// Inherits currentColor for the idle text; `accent` is the active segment bg.
export const LangSwitcher = ({
  lang,
  setLang,
  accent,
  activeText = "#fff",
  className = "",
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  accent: string;
  activeText?: string;
  className?: string;
}) => (
  <div
    className={`inline-flex w-fit items-center overflow-hidden rounded-lg border ${className}`}
    style={{ borderColor: accent + "55" }}
  >
    {languages.map((l) => {
      const active = l.code === lang;
      return (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code as Lang)}
          aria-pressed={active}
          className="px-2.5 py-1.5 text-xs uppercase tracking-[0.12em] transition-colors duration-200"
          style={active ? { background: accent, color: activeText } : { opacity: 0.7 }}
        >
          {l.label}
        </button>
      );
    })}
  </div>
);

export default LangSwitcher;
