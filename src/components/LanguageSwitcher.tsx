import { useState } from "react";

const languages = [
  { code: "EN", label: "English" },
  { code: "IT", label: "Italiano" },
  { code: "NL", label: "Nederlands" },
];

const LanguageSwitcher = () => {
  const [active, setActive] = useState("EN");

  return (
    <div className="flex items-center border border-gold/40 rounded-lg overflow-hidden">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setActive(lang.code)}
          className={`px-2.5 py-1.5 text-xs font-body tracking-elegant uppercase transition-colors duration-200 ${
            active === lang.code
              ? "bg-gold text-cream"
              : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-gold/10"
          }`}
          title={lang.label}
        >
          {lang.code}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
