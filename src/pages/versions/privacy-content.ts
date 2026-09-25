import type { Lang } from "./i18n";

/**
 * The privacy page, in the three languages the site speaks.
 *
 * It declares TWO cookies, and that is the final answer, not an interim one. Removing the
 * year-long `nv_vid` was considered and rejected by the owner on 2026-09-25: a cookie that is
 * doing a job does not get amputated to dodge a banner, on this site or any other (DECISOES.md).
 * Where the law is tighter, the answer is the consent banner, which is what this site now has.
 *
 * So there is no flag here any more and nothing to flip later. If the measurement itself ever
 * changes, change these words on the same day — the page must describe the system as it is.
 */

/** Facts nobody may invent. Empty string = "not supplied yet", and the page hides that line. */
export const legal = {
  /**
   * Registered name. The owner confirmed it is simply "Al Primo Piano" — the same as the trading
   * name, which is why `who()` prints it once instead of "X, trading as X". If an official
   * document ever shows a different legal name, that name goes here and the rendering changes.
   */
  entity: "Al Primo Piano",
  /** Dutch Chamber of Commerce number, from the owner 2026-09-25. Required on a Dutch
   *  commercial website, which is why the page waited for it rather than inventing one. */
  kvk: "96207590",
  /**
   * How long the platform keeps visit data. 14 months, confirmed 2026-09-25: the deletion job
   * exists and runs — daily and on boot, in batches — so this sentence describes code, not an
   * intention. If that job is ever removed, this line comes out the same day.
   */
  visitRetention: { en: "14 months", nl: "14 maanden", it: "14 mesi" } as Record<string, string>,
};

type Block = { h?: string; p?: string[]; ul?: string[] };
export type PrivacyDoc = { title: string; updated: string; blocks: Block[] };

const cookiesEN = [
  "The counter belongs to Nuvenhub, the agency that built and maintains this website — our own supplier, not an advertising network. It stores two cookies:",
  "sf_sid — about 30 minutes. It lets several page views be counted as one visit.",
  "nv_vid — one year. It lets us tell whether a browser has been here before, so we can see how many people are new and how many come back. It does not carry your name, email or phone number, it is not shared, and it is not sold.",
  "You can delete both, at any time, in your browser settings. The site keeps working.",
];

const cookiesNL = [
  "De teller is van Nuvenhub, het bureau dat deze website heeft gemaakt en onderhoudt — onze eigen leverancier, geen advertentienetwerk. Hij plaatst twee cookies:",
  "sf_sid — ongeveer 30 minuten. Hiermee tellen meerdere paginaweergaven als \u00e9\u00e9n bezoek.",
  "nv_vid — \u00e9\u00e9n jaar. Hiermee zien wij of een browser hier eerder is geweest, zodat wij weten hoeveel mensen nieuw zijn en hoeveel terugkomen. Hij bevat niet uw naam, e-mailadres of telefoonnummer, wordt niet gedeeld en wordt niet verkocht.",
  "U kunt beide op elk moment verwijderen in uw browserinstellingen. De website blijft werken.",
];

const cookiesIT = [
  "Il contatore \u00e8 di Nuvenhub, l'agenzia che ha realizzato e mantiene questo sito — un nostro fornitore, non una rete pubblicitaria. Salva due cookie:",
  "sf_sid — circa 30 minuti. Permette di contare pi\u00f9 pagine viste come una sola visita.",
  "nv_vid — un anno. Permette di capire se un browser \u00e8 gi\u00e0 stato qui, cos\u00ec sappiamo quante persone sono nuove e quante tornano. Non contiene il suo nome, la sua e-mail o il suo telefono, non viene condiviso e non viene venduto.",
  "Pu\u00f2 cancellare entrambi, in qualsiasi momento, dalle impostazioni del browser. Il sito continua a funzionare.",
];

const who = (l: "en" | "nl" | "it") => {
  const line = { en: "Chamber of Commerce (KvK)", nl: "KvK-nummer", it: "Registro delle imprese (KvK)" }[l];
  const name = { en: "trading as", nl: "handelend onder de naam", it: "operante con il nome" }[l];
  return [
    legal.entity && legal.entity !== "Al Primo Piano" ? `${legal.entity}, ${name} Al Primo Piano` : "Al Primo Piano",
    "Zuideinde 5, 1131 AC Volendam, Nederland",
    legal.kvk ? `${line}: ${legal.kvk}` : "",
    "Alprimopiano25@gmail.com · +31 6 14978723",
  ].filter(Boolean);
};

export const privacy: Record<Lang, PrivacyDoc> = {
  en: {
    title: "Privacy & cookies",
    updated: "Last updated",
    blocks: [
      { h: "Who is responsible for your data", p: who("en") },
      {
        h: "What this website measures, and why",
        p: [
          "We count visits so we know how many people look at the site and which pages they read. That is all. We build no advertising profiles and we sell nothing to anyone.",
          ...cookiesEN,
          "The data sits on a server in Frankfurt, Germany, inside the European Union.",
        ],
      },
      {
        h: "Other services involved",
        ul: [
          "Hosting — Cloudflare. Serving a page requires your IP address; Cloudflare keeps short server logs for security.",
          "Typefaces are served from this website itself. No request goes to any font provider.",
          "Two small settings are kept in your browser's own storage, not as cookies: which language you chose, and the fact that you have seen the notice. They are there so the site stops asking, and they never leave your device.",
          "The map on the Contact page comes from Google and loads with the page, because showing where the restaurant is is what that page is for. That means Google receives your IP address when you open it, and may set its own cookies inside the map, under Google's terms and not ours. It is the only third party on this website.",
        ],
      },
      {
        h: "How long we keep things",
        p: [
          `Visit measurement is kept for ${legal.visitRetention.en}, then deleted automatically.`,
          "Cookies expire on their own, on the timetable above.",
        ].filter(Boolean),
      },
      {
        h: "Your rights",
        p: [
          "You may ask for a copy of what we hold about you, and for correction, deletion, restriction, or to object. Write to Alprimopiano25@gmail.com and we will reply within one month.",
          "You can delete or refuse cookies in your browser at any time — the website keeps working.",
          "If you believe we are handling your data wrongly, you can complain to the Dutch data protection authority, the Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).",
        ],
      },
    ],
  },

  nl: {
    title: "Privacy & cookies",
    updated: "Laatst bijgewerkt",
    blocks: [
      { h: "Wie verantwoordelijk is voor uw gegevens", p: who("nl") },
      {
        h: "Wat deze website meet, en waarom",
        p: [
          "Wij tellen bezoeken om te weten hoeveel mensen de site bekijken en welke pagina's zij lezen. Meer niet. Wij maken geen advertentieprofielen en wij verkopen niets aan derden.",
          ...cookiesNL,
          "De gegevens staan op een server in Frankfurt, Duitsland, binnen de Europese Unie.",
        ],
      },
      {
        h: "Andere diensten die meedoen",
        ul: [
          "Hosting — Cloudflare. Om een pagina te tonen is uw IP-adres nodig; Cloudflare bewaart korte serverlogs voor beveiliging.",
          "Lettertypen worden vanaf deze website zelf geleverd. Er gaat geen verzoek naar een externe aanbieder.",
          "Twee kleine instellingen staan in de opslag van uw eigen browser, niet als cookie: welke taal u koos en het feit dat u de melding hebt gezien. Ze zijn er zodat de site niet blijft vragen, en ze verlaten uw apparaat nooit.",
          "De kaart op de contactpagina komt van Google en laadt samen met de pagina, omdat die pagina er nu juist voor is om te laten zien waar het restaurant ligt. Google ontvangt daarbij uw IP-adres en kan binnen de kaart eigen cookies plaatsen, onder de voorwaarden van Google en niet die van ons. Het is de enige derde partij op deze website.",
        ],
      },
      {
        h: "Bewaartermijn",
        p: [
          `Bezoekmeting wordt ${legal.visitRetention.nl} bewaard en daarna automatisch verwijderd.`,
          "Cookies vervallen vanzelf, volgens de termijnen hierboven.",
        ].filter(Boolean),
      },
      {
        h: "Uw rechten",
        p: [
          "U mag inzage vragen in wat wij over u hebben, en rectificatie, verwijdering, beperking of bezwaar. Schrijf naar Alprimopiano25@gmail.com; wij reageren binnen één maand.",
          "U kunt cookies altijd zelf verwijderen of weigeren in uw browser — de website blijft werken.",
          "Vindt u dat wij verkeerd met uw gegevens omgaan, dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).",
        ],
      },
    ],
  },

  it: {
    title: "Privacy e cookie",
    updated: "Ultimo aggiornamento",
    blocks: [
      { h: "Chi è responsabile dei suoi dati", p: who("it") },
      {
        h: "Che cosa misura questo sito, e perché",
        p: [
          "Contiamo le visite per sapere quante persone guardano il sito e quali pagine leggono. Nulla di più. Non creiamo profili pubblicitari e non vendiamo niente a nessuno.",
          ...cookiesIT,
          "I dati si trovano su un server a Francoforte, in Germania, all'interno dell'Unione Europea.",
        ],
      },
      {
        h: "Altri servizi coinvolti",
        ul: [
          "Hosting — Cloudflare. Per mostrare una pagina serve il suo indirizzo IP; Cloudflare conserva brevi registri del server per sicurezza.",
          "I caratteri tipografici sono serviti da questo stesso sito. Nessuna richiesta raggiunge un fornitore esterno.",
          "Due piccole impostazioni restano nella memoria del suo browser, non come cookie: la lingua che ha scelto e il fatto che ha visto l'avviso. Servono perch\u00e9 il sito smetta di chiedere e non lasciano mai il suo dispositivo.",
          "La mappa nella pagina Contatti è di Google e si carica insieme alla pagina, perché mostrare dove si trova il ristorante è proprio lo scopo di quella pagina. Google riceve quindi il suo indirizzo IP e può impostare cookie propri all'interno della mappa, secondo le condizioni di Google e non le nostre. È l'unico terzo presente in questo sito.",
        ],
      },
      {
        h: "Per quanto tempo conserviamo",
        p: [
          `La misurazione delle visite \u00e8 conservata per ${legal.visitRetention.it}, poi viene eliminata automaticamente.`,
          "I cookie scadono da soli, secondo i tempi indicati sopra.",
        ].filter(Boolean),
      },
      {
        h: "I suoi diritti",
        p: [
          "Può chiederci una copia di ciò che abbiamo su di lei, la rettifica, la cancellazione, la limitazione o opporsi al trattamento. Scriva a Alprimopiano25@gmail.com: risponderemo entro un mese.",
          "Può cancellare o rifiutare i cookie dal suo browser in qualsiasi momento — il sito continua a funzionare.",
          "Per un reclamo, l'autorità olandese per la protezione dei dati è la Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).",
        ],
      },
    ],
  },
};
