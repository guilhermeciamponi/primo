import { useState } from "react";

export const languages = [
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
  { code: "nl", label: "NL" },
] as const;

export type Lang = (typeof languages)[number]["code"];

export type Strings = {
  navHome: string;
  navMenu: string;
  navPromotions: string;
  navAbout: string;
  navStory: string;
  navGallery: string;
  navContact: string;
  quickLinks: string;
  visitUs: string;
  reservations: string;
  footerBlurb: string;
  websiteBy: string;
  pressLabel: string;
  pressTitle: string;
  pressSub: string;
  pressCaption: string;
  pressRead: string;
  pressSoon: string;
  pressNext: string;
  pressCaption2: string;
  socialLabel: string;
  socialTitle: string;
  socialSub: string;
  reviewsOn: string;
  ratedOn: string; // "on Google"-style suffix for the rolling value line
  valueProps: string[]; // short value phrases for the rolling marquee line
  aboutValues: { t: string; d: string }[]; // three value pillars on the About page
  aboutValuesLabel: string;
  aboutPhilosophyLabel: string;
  aboutFamilyLabel: string;
  aboutFamilyTitle: string;
  aboutFamilyBody: string;
  btnReserve: string;
  btnMenu: string;
  btnBook: string;
  callUs: string;
  btnFull: string;
  eyebrow: string;
  storyKicker: string;
  storyTitle: string;
  storyP1: string;
  storyP2: string;
  storySign: string;
  menuTitle: string;
  menuSub: string;
  galleryTitle: string;
  gallerySub: string;
  reviewsTitle: string;
  rev1: string;
  rev2: string;
  rev3: string;
  hoursTitle: string;
  findUsTitle: string;
  getDirections: string;
  reserveTitle: string;
  reserveBody: string;
  footerExplore: string;
  footerContact: string;
  footerHours: string;
  footerFollow: string;
  newsletter: string;
  newsletterPh: string;
  newsletterBtn: string;
  closed: string;
  rights: string;
  /** Precedes "nuvenhub" in the footer credit, so it is a fragment and never a full sentence. */
  madeBy: string;
  // Original-homepage structure strings
  heroSubtitle: string;
  kitchenLabel: string;
  signatureTitle: string;
  signatureSub: string;
  viewFullMenu: string;
  promoLabel: string;
  promoTitle: string;
  seeAllPromos: string;
  aboutTitle: string;
  aboutRestaurant: string;
  viewGallery: string;
  ourSpaceLabel: string;
  insideTitle: string;
  insideSub: string;
  addressLabel: string;
  promos: { tag: string; title: string; desc: string }[];
  days: string[]; // Mon..Sun
};

export const t: Record<Lang, Strings> = {
  en: {
    navHome: "Home",
    navMenu: "Menu",
    navPromotions: "Promotions",
    navAbout: "About",
    navStory: "Our Story",
    navGallery: "Gallery",
    navContact: "Contact",
    quickLinks: "Quick Links",
    visitUs: "Visit Us",
    reservations: "Reservations",
    footerBlurb: "Where Italian tradition meets modern elegance. Every dish tells a story of passion, fresh ingredients, and culinary artistry.",
    websiteBy: "Website by",
    pressLabel: "In the press",
    pressTitle: "Al Primo Piano in the News",
    pressSub: "What people are writing about us.",
    pressCaption: "Now serving authentic Italian pizza. Our pizzaiolo Domenico, trained in Naples, fires them fresh in our new pizza oven.",
    pressCaption2: "“If you want to taste authentic Italy, this restaurant is highly recommended.” Our new wood oven pizzas, featured in De Stadskrant.",
    socialLabel: "What our guests say",
    socialTitle: "Loved by our guests",
    socialSub: "A family kitchen the neighbourhood keeps coming back to. Here's what people are saying.",
    reviewsOn: "reviews",
    ratedOn: "on Google",
    valueProps: [
      "Authentic Italian kitchen",
      "Fresh, homemade pasta every day",
      "Family run by Italians",
      "On the Volendam harbour",
      "Illy coffee, Italian style",
      "Fine Italian wines",
      "A warm, rustic welcome",
    ],
    aboutValues: [
      { t: "Made by hand", d: "Fresh pasta, a slow ragù, good olive oil." },
      { t: "On the harbour", d: "A first floor table above the marina, with the boats and the water right outside the window." },
      { t: "Like family", d: "A warm welcome and a table you won't want to leave." },
    ],
    aboutValuesLabel: "What we believe",
    aboutPhilosophyLabel: "Our philosophy",
    aboutFamilyLabel: "The family",
    aboutFamilyTitle: "The people behind the plates",
    aboutFamilyBody: "Al Primo Piano is run by a small family of Italians who cook, serve and welcome you themselves. Every guest is treated like one of our own. That's the whole idea.",
    pressRead: "Read the article",
    pressSoon: "More coverage coming soon",
    pressNext: "Up next",
    btnReserve: "Reserve a table",
    btnMenu: "View the menu",
    btnBook: "Book online",
    callUs: "Call us",
    btnFull: "See the full menu",
    eyebrow: "Italian Restaurant · on the harbour",
    storyKicker: "Our story",
    storyTitle: "A harbour kitchen, cooked by hand",
    storyP1:
      "Al Primo Piano opened above the harbour in December 2025, under old wooden beams and the glow of a red lamp. We cook the way our family taught us. Fresh pasta, a slow ragù, good olive oil, and the Italian classics we grew up with.",
    storyP2: "Nothing fussy. Just honest Italian food, generous plates, and a table you won't want to leave.",
    storySign: "The family",
    menuTitle: "The Menu",
    menuSub: "Antipasti & Primi",
    galleryTitle: "At our table",
    gallerySub: "Moments from the dining room",
    reviewsTitle: "What our guests say",
    rev1: "The best fresh pasta outside Italy. We come back every week.",
    rev2: "Cosy, warm and welcoming. You feel like family the moment you sit down.",
    rev3: "A view of the boats, a glass of wine and food made with real love.",
    hoursTitle: "Opening hours",
    findUsTitle: "Find us",
    getDirections: "Get directions",
    reserveTitle: "Come and see us",
    reserveBody:
      "Lunch, dinner, or a slow glass of wine as the boats come in. We'd love to set a place for you.",
    footerExplore: "Explore",
    footerContact: "Contact",
    footerHours: "Hours",
    footerFollow: "Follow us",
    newsletter: "Join our table for news & specials",
    newsletterPh: "Your email",
    newsletterBtn: "Subscribe",
    closed: "Closed",
    rights: "All rights reserved",
    madeBy: "made by",
    heroSubtitle: "A family run Italian kitchen above the harbour, with fresh pasta and a warm welcome.",
    kitchenLabel: "From our kitchen",
    signatureTitle: "Signature Dishes",
    signatureSub: "A few favourites from the menu, made fresh every day.",
    viewFullMenu: "View full menu",
    promoLabel: "Special offers",
    promoTitle: "Promotions",
    seeAllPromos: "See all promotions",
    aboutTitle: "A Tradition of Excellence",
    aboutRestaurant: "About the restaurant",
    viewGallery: "View gallery",
    ourSpaceLabel: "Our space",
    insideTitle: "Inside Al Primo Piano",
    insideSub: "A glimpse of the warm, rustic room that awaits you.",
    addressLabel: "Address",
    promos: [
      { tag: "Weekend special", title: "Saturday Tasting Menu", desc: "Five courses with wine pairing, featuring the day's market." },
      { tag: "Lunch deal", title: "Pranzo Express", desc: "Two courses with a glass of house wine, a midday escape." },
      { tag: "By the water", title: "Aperitivo al Porto", desc: "Wine, cicchetti and the boats coming in, every evening." },
    ],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  it: {
    navHome: "Home",
    navMenu: "Menu",
    navPromotions: "Promozioni",
    navAbout: "Chi Siamo",
    navStory: "La Storia",
    navGallery: "Galleria",
    navContact: "Contatti",
    quickLinks: "Link Rapidi",
    visitUs: "Vieni a Trovarci",
    reservations: "Prenotazioni",
    footerBlurb: "Dove la tradizione italiana incontra l'eleganza moderna. Ogni piatto racconta una storia di passione, ingredienti freschi e arte culinaria.",
    websiteBy: "Sito web di",
    pressLabel: "Sulla stampa",
    pressTitle: "Al Primo Piano sui giornali",
    pressSub: "Cosa scrivono di noi.",
    pressCaption: "Ora anche pizza italiana autentica. Il nostro pizzaiolo Domenico, formatosi a Napoli, la sforna fresca dal nuovo forno.",
    pressCaption2: "“Se volete assaporare l'Italia autentica, questo ristorante è vivamente consigliato.” Le nostre nuove pizze, su De Stadskrant.",
    socialLabel: "La parola ai nostri ospiti",
    socialTitle: "Amati dai nostri ospiti",
    socialSub: "Una cucina di famiglia a cui il quartiere torna sempre. Ecco cosa dicono le persone.",
    reviewsOn: "recensioni",
    ratedOn: "su Google",
    valueProps: [
      "Autentica cucina italiana",
      "Pasta fresca fatta in casa ogni giorno",
      "Gestione familiare italiana",
      "Sul porto di Volendam",
      "Caffè Illy, stile italiano",
      "Ottimi vini italiani",
      "Un caloroso benvenuto",
    ],
    aboutValues: [
      { t: "Fatto a mano", d: "Pasta fresca, un ragù lento, buon olio d'oliva." },
      { t: "Sul porto", d: "Un tavolo al primo piano sopra il porticciolo, con le barche e l'acqua fuori dalla finestra." },
      { t: "Come in famiglia", d: "Un benvenuto caloroso e un tavolo da cui non vorrai alzarti." },
    ],
    aboutValuesLabel: "In cosa crediamo",
    aboutPhilosophyLabel: "La nostra filosofia",
    aboutFamilyLabel: "La famiglia",
    aboutFamilyTitle: "Le persone dietro i piatti",
    aboutFamilyBody: "Al Primo Piano è gestito da una piccola famiglia di italiani che cucinano, servono e vi accolgono in prima persona. Ogni ospite è trattato come uno di noi. È tutto qui.",
    pressRead: "Leggi l'articolo",
    pressSoon: "Presto altri articoli",
    pressNext: "Prossimo",
    btnReserve: "Prenota un tavolo",
    btnMenu: "Il nostro menu",
    btnBook: "Prenota online",
    callUs: "Chiamaci",
    btnFull: "Vedi tutto il menu",
    eyebrow: "Ristorante Italiano · sul porto",
    storyKicker: "La nostra storia",
    storyTitle: "Una cucina sul porto, fatta a mano",
    storyP1:
      "Al Primo Piano ha aperto sopra il porto nel dicembre 2025, sotto vecchie travi di legno e la luce di una lampada rossa. Cuciniamo come ci ha insegnato la famiglia. Pasta fresca, un ragù lento, buon olio d'oliva e i classici italiani con cui siamo cresciuti.",
    storyP2: "Niente di complicato. Solo cucina italiana genuina, piatti abbondanti e un tavolo da cui non vorrai alzarti.",
    storySign: "La famiglia",
    menuTitle: "Il Menu",
    menuSub: "Antipasti e Primi",
    galleryTitle: "A tavola con noi",
    gallerySub: "Momenti dalla sala",
    reviewsTitle: "Cosa dicono i nostri ospiti",
    rev1: "La migliore pasta fresca fuori dall'Italia. Torniamo ogni settimana.",
    rev2: "Accogliente e caldo. Ti senti in famiglia appena ti siedi.",
    rev3: "La vista delle barche, un bicchiere di vino e piatti fatti con vero amore.",
    hoursTitle: "Orari di apertura",
    findUsTitle: "Dove siamo",
    getDirections: "Indicazioni stradali",
    reserveTitle: "Vieni a trovarci",
    reserveBody:
      "Pranzo, cena o un bicchiere di vino mentre tornano le barche. Saremo felici di prepararti un tavolo.",
    footerExplore: "Esplora",
    footerContact: "Contatti",
    footerHours: "Orari",
    footerFollow: "Seguici",
    newsletter: "Unisciti alla nostra tavola per novità e offerte",
    newsletterPh: "La tua email",
    newsletterBtn: "Iscriviti",
    closed: "Chiuso",
    rights: "Tutti i diritti riservati",
    madeBy: "realizzato da",
    heroSubtitle: "Una cucina italiana a conduzione familiare sul porto, con pasta fresca e un caloroso benvenuto.",
    kitchenLabel: "Dalla nostra cucina",
    signatureTitle: "Piatti della Casa",
    signatureSub: "Alcuni dei nostri preferiti dal menu, preparati freschi ogni giorno.",
    viewFullMenu: "Vedi tutto il menu",
    promoLabel: "Offerte speciali",
    promoTitle: "Promozioni",
    seeAllPromos: "Vedi tutte le promozioni",
    aboutTitle: "Una Tradizione di Eccellenza",
    aboutRestaurant: "Il ristorante",
    viewGallery: "Vedi la galleria",
    ourSpaceLabel: "Il nostro spazio",
    insideTitle: "Dentro Al Primo Piano",
    insideSub: "Uno sguardo alla sala calda e rustica che ti aspetta.",
    addressLabel: "Indirizzo",
    promos: [
      { tag: "Speciale weekend", title: "Menu Degustazione del Sabato", desc: "Cinque portate con abbinamento vini, dal mercato del giorno." },
      { tag: "Offerta pranzo", title: "Pranzo Express", desc: "Due portate con un calice di vino della casa, una pausa a mezzogiorno." },
      { tag: "Sul porto", title: "Aperitivo al Porto", desc: "Vino, cicchetti e le barche che rientrano, ogni sera." },
    ],
    days: ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"],
  },
  nl: {
    navHome: "Home",
    navMenu: "Menu",
    navPromotions: "Acties",
    navAbout: "Over Ons",
    navStory: "Ons Verhaal",
    navGallery: "Galerij",
    navContact: "Contact",
    quickLinks: "Snelle Links",
    visitUs: "Bezoek Ons",
    reservations: "Reserveringen",
    footerBlurb: "Waar Italiaanse traditie en moderne elegantie samenkomen. Elk gerecht vertelt een verhaal van passie, verse ingrediënten en culinair vakmanschap.",
    websiteBy: "Website door",
    pressLabel: "In de pers",
    pressTitle: "Al Primo Piano in het nieuws",
    pressSub: "Wat men over ons schrijft.",
    pressCaption: "Nu ook authentieke Italiaanse pizza. Onze pizzaiolo Domenico, opgeleid in Napels, bakt ze vers in onze nieuwe pizzaoven.",
    pressCaption2: "“Als je de smaak van authentiek Italië wilt proeven, is dit restaurant van harte aanbevolen.” Onze nieuwe pizza's, in De Stadskrant.",
    socialLabel: "Wat onze gasten zeggen",
    socialTitle: "Geliefd bij onze gasten",
    socialSub: "Een familiekeuken waar de buurt steeds terugkomt. Dit is wat mensen zeggen.",
    reviewsOn: "reviews",
    ratedOn: "op Google",
    valueProps: [
      "Authentieke Italiaanse keuken",
      "Elke dag verse, huisgemaakte pasta",
      "Italiaans familiebedrijf",
      "Aan de haven van Volendam",
      "Illy koffie, Italiaanse stijl",
      "Fijne Italiaanse wijnen",
      "Een warm, rustiek welkom",
    ],
    aboutValues: [
      { t: "Met de hand", d: "Verse pasta, een langzame ragù, goede olijfolie." },
      { t: "Aan de haven", d: "Een tafel op de eerste verdieping boven de jachthaven, met de boten en het water voor het raam." },
      { t: "Als familie", d: "Een warm welkom en een tafel waar je niet vanaf wilt." },
    ],
    aboutValuesLabel: "Waar wij in geloven",
    aboutPhilosophyLabel: "Onze filosofie",
    aboutFamilyLabel: "De familie",
    aboutFamilyTitle: "De mensen achter de gerechten",
    aboutFamilyBody: "Al Primo Piano wordt gerund door een kleine familie Italianen die zelf koken, serveren en u verwelkomen. Elke gast wordt als familie behandeld. Dat is het hele idee.",
    pressRead: "Lees het artikel",
    pressSoon: "Binnenkort meer",
    pressNext: "Hierna",
    btnReserve: "Reserveer een tafel",
    btnMenu: "Bekijk het menu",
    btnBook: "Online reserveren",
    callUs: "Bel ons",
    btnFull: "Bekijk het hele menu",
    eyebrow: "Italiaans Restaurant · aan de haven",
    storyKicker: "Ons verhaal",
    storyTitle: "Een havenkeuken, met de hand bereid",
    storyP1:
      "Al Primo Piano opende in december 2025 boven de haven, onder oude houten balken en het licht van een rode lamp. We koken zoals onze familie het ons leerde. Verse pasta, een langzame ragù, goede olijfolie en de Italiaanse klassiekers waarmee we zijn opgegroeid.",
    storyP2: "Niets ingewikkelds. Gewoon eerlijke Italiaanse gerechten, royale borden en een tafel waar je niet vanaf wilt.",
    storySign: "De familie",
    menuTitle: "Het Menu",
    menuSub: "Antipasti & Primi",
    galleryTitle: "Aan onze tafel",
    gallerySub: "Momenten uit de eetzaal",
    reviewsTitle: "Wat onze gasten zeggen",
    rev1: "De beste verse pasta buiten Italië. We komen elke week terug.",
    rev2: "Gezellig en warm. Je voelt je meteen thuis.",
    rev3: "Uitzicht op de boten, een glas wijn en gerechten met echte liefde gemaakt.",
    hoursTitle: "Openingstijden",
    findUsTitle: "Vind ons",
    getDirections: "Routebeschrijving",
    reserveTitle: "Kom langs",
    reserveBody:
      "Lunch, diner of een rustig glas wijn terwijl de boten binnenkomen. We zetten graag een tafel voor u klaar.",
    footerExplore: "Ontdek",
    footerContact: "Contact",
    footerHours: "Openingstijden",
    footerFollow: "Volg ons",
    newsletter: "Schuif aan voor nieuws & specials",
    newsletterPh: "Uw e-mail",
    newsletterBtn: "Aanmelden",
    closed: "Gesloten",
    rights: "Alle rechten voorbehouden",
    madeBy: "gemaakt door",
    heroSubtitle: "Een Italiaanse familiekeuken boven de haven, met verse pasta en een warm welkom.",
    kitchenLabel: "Uit onze keuken",
    signatureTitle: "Specialiteiten",
    signatureSub: "Een paar favorieten van de kaart, elke dag vers bereid.",
    viewFullMenu: "Bekijk het hele menu",
    promoLabel: "Speciale aanbiedingen",
    promoTitle: "Acties",
    seeAllPromos: "Bekijk alle acties",
    aboutTitle: "Een Traditie van Kwaliteit",
    aboutRestaurant: "Over het restaurant",
    viewGallery: "Bekijk galerij",
    ourSpaceLabel: "Onze ruimte",
    insideTitle: "Binnen bij Al Primo Piano",
    insideSub: "Een blik op de warme, rustieke zaal die u wacht.",
    addressLabel: "Adres",
    promos: [
      { tag: "Weekend special", title: "Zaterdags Proefmenu", desc: "Vijf gangen met wijnarrangement, van de dagmarkt." },
      { tag: "Lunchdeal", title: "Pranzo Express", desc: "Twee gangen met een glas huiswijn, een middagpauze." },
      { tag: "Aan het water", title: "Aperitivo al Porto", desc: "Wijn, cicchetti en de binnenkomende boten, elke avond." },
    ],
    days: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
  },
};

const KEY = "apiano-lang";

// localStorage-backed so the choice persists across the /v1 /v2 /v3 pages.
export function useLang() {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(KEY) as Lang | null;
    return saved && languages.some((l) => l.code === saved) ? saved : "en";
  });
  const setLang = (l: Lang) => {
    try {
      window.localStorage.setItem(KEY, l);
    } catch {
      /* ignore */
    }
    setLangState(l);
  };
  return { lang, setLang, tr: t[lang] };
}
