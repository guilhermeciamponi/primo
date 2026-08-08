// Shared content + imagery for the rustic homepage concepts.
import logo from "@/assets/logo.png";
import logoMark from "@/assets/logo-mark.png"; // white background made transparent
import menuOlive from "@/assets/menu-olive.png"; // real olive-branch illustration from the menu
import menuOil from "@/assets/menu-oil.png"; // real oil-carafe + pasta illustration from the menu
import menuSalami from "@/assets/menu-salami.png"; // real cured-meat illustration
import menuTomato from "@/assets/menu-tomato.png"; // real cherry-tomato-vine illustration
import menuCake from "@/assets/menu-cake.png"; // real torta caprese slice illustration
import menuPizza from "@/assets/menu-pizza.png"; // real pizza illustration
import pressStadskrant from "@/assets/press-stadskrant.jpg"; // De Stadskrant feature clipping (wk27, p.8)
import pressVolendam from "@/assets/press-volendam.jpg"; // De Stadskrant feature (wk25, p.4)
import heroImage from "@/assets/hero-restaurant.jpg";
// Real restaurant photography (used by v2)
import v2Hero from "@/assets/v2-hero.jpg";
import v2IntHarbor from "@/assets/v2-int-harbor.jpg";
import v2IntTerrace from "@/assets/v2-int-terrace.jpg";
import v2IntWheel from "@/assets/v2-int-wheel.jpg";
import v2IntCorner from "@/assets/v2-int-corner.jpg";
import v2FoodVongole from "@/assets/v2-food-vongole.jpg";
import v2FoodBolognese from "@/assets/v2-food-bolognese.jpg";
import v2FoodGamberi from "@/assets/v2-food-gamberi.jpg";
import v2FoodPizza from "@/assets/v2-food-pizza.jpg";
import v2FoodVegPizza from "@/assets/v2-food-vegpizza.jpg";
import traditionImg from "@/assets/tradition-of-excellence.jpeg";
import occasionImg from "@/assets/place-for-every-occasion.jpeg";
import inside2 from "@/assets/inside-2.jpeg";
import inside3 from "@/assets/inside-3.jpeg";
import inside4 from "@/assets/inside-4.jpeg";
import inside5 from "@/assets/inside-5.jpeg";
import moments1 from "@/assets/moments-1.jpeg";
import moments2 from "@/assets/moments-2.jpeg";
import moments3 from "@/assets/moments-3.jpeg";
import moments5 from "@/assets/moments-5.jpeg";

export const images = {
  logo,
  logoMark,
  hero: heroImage,
  tradition: traditionImg,
  occasion: occasionImg,
  inside: [inside2, inside3, inside4, inside5],
  moments: [moments1, moments2, moments3, moments5],
  // The real illustrations lifted straight from the printed menu (transparent).
  illustrations: {
    olive: menuOlive,
    oil: menuOil,
    salami: menuSalami,
    tomato: menuTomato,
    cake: menuCake,
    pizza: menuPizza,
  },
};

// Press coverage — each entry is a full scanned clipping + the archive link.
// `cap` selects the localized caption key in i18n.
const ARCHIVE_URL =
  "https://waterlandsarchief.nl/archieven?mizig=210&miadt=131&miaet=1&micode=0290&minr=1870213&miview=inv2";
export const press: { image: string; source: string; date: string; href: string; cap: "pressCaption" | "pressCaption2" }[] = [
  { image: pressStadskrant, source: "De Stadskrant", date: "Week 27 · 2026 · p.8", href: ARCHIVE_URL, cap: "pressCaption" },
  { image: pressVolendam, source: "De Stadskrant", date: "Week 25 · 2026 · p.4", href: ARCHIVE_URL, cap: "pressCaption2" },
];

// Real restaurant photography for v2.
export const v2photos = {
  hero: v2Hero,
  harbor: v2IntHarbor,
  terrace: v2IntTerrace,
  wheel: v2IntWheel,
  corner: v2IntCorner,
  vegpizza: v2FoodVegPizza,
  pizza: v2FoodPizza,
  gallery: [v2FoodVegPizza, v2FoodPizza, v2IntHarbor, v2IntWheel, v2IntTerrace, v2FoodBolognese],
};

// Three highlights for the "Signature Dishes" grid (real dishes + prices + photos).
export const signatureDishes = [
  { name: "Linguine con Cozze e Vongole", desc: "Pasta fresca con cozze e vongole.", price: "18€", img: v2FoodVongole },
  { name: "Spaghetti alla Bolognese", desc: "Pasta fresca al ragù premium.", price: "16€", img: v2FoodBolognese },
  { name: "Gamberoni al Brandy", desc: "Gamberoni alla griglia sfumati con brandy, serviti con insalata condita.", price: "27€", img: v2FoodGamberi },
];

export const restaurant = {
  name: "Al Primo Piano",
  kicker: "Italian Restaurant",
  // The chalkboard quote that hangs in the dining room.
  motto: "La cucina è l'arte di usare il cibo per creare felicità",
  // Address, city, phone & email are the real, verified details.
  address: "Zuideinde 5",
  city: "1131 AC Volendam, Netherlands",
  phone: "+31 6 14978723",
  email: "Alprimopiano25@gmail.com",
  established: "Est. Cucina Tradizionale",
  // The restaurant opened its doors in December 2025.
  openedYear: 2025,
};

export const socials = [
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Tripadvisor", href: "#", icon: "star" },
];

// Opening hours — d = index into the localized day-name array (0 = Monday),
// t = null means closed.
export const hours: { d: number; t: string | null }[] = [
  { d: 0, t: "12:00 to 22:00" }, // Monday
  { d: 1, t: null },            // Tuesday — closed
  { d: 2, t: "12:00 to 22:00" }, // Wednesday
  { d: 3, t: "12:00 to 22:00" }, // Thursday
  { d: 4, t: "12:00 to 22:00" }, // Friday
  { d: 5, t: "12:00 to 22:00" }, // Saturday
  { d: 6, t: "12:00 to 22:00" }, // Sunday
];

// The daily opening time + the closed day, derived from `hours` for the
// summary lines (home hero + footer). Full week is shown on the Contact page.
export const openTime = hours.find((h) => h.t)?.t ?? "12:00 to 22:00";
export const closedDayIndex = hours.find((h) => !h.t)?.d ?? 1;

// Reservations go to the restaurant's Google "Reserve a table" page.
export const RESERVE_URL = "https://www.google.com/maps/reserve/v/dine/c/RjzKUblyBXY?source=pa&opi=89978449&hl=en";

export type IconKey =
  | "olive"
  | "cruet"
  | "oilpasta"
  | "pasta"
  | "fish"
  | "wheat"
  | "wine"
  | "plate"
  | "salami"
  | "tomato"
  | "garlic"
  | "bread"
  | "cheese"
  | "forkknife";

export type Dish = { name: string; desc: string; price: string; icon: IconKey };

// Every dish, price and description taken directly from the printed menu.
export const antipasti: Dish[] = [
  { name: "Tagliere Misto", desc: "Focaccia con selezione di salumi e formaggi italiani.", price: "19€", icon: "salami" },
  { name: "Carpaccio di Manzo", desc: "Manzo, scaglie di Grana riserva, rucola, pomodorini e glassa di aceto balsamico.", price: "17€", icon: "salami" },
  { name: "Bruschette", desc: "Pomodoro & basilico, burrata & avocado, vitello tonnato e tapenade di olive.", price: "14€", icon: "bread" },
  { name: "Caprese", desc: "Pomodorini, mozzarella di bufala campana, sale, olio, origano e basilico.", price: "12€", icon: "tomato" },
  { name: "Vitello Tonnato", desc: "Fettine di vitello con salsa tonnata e capperi.", price: "19€", icon: "fish" },
  { name: "Parmigiana di Melanzane", desc: "Melanzane fritte al forno con salsa di pomodoro, mozzarella, Grana riserva e basilico.", price: "16€", icon: "cheese" },
  { name: "Souté di Cozze", desc: "Cozze con olio, aglio e prezzemolo, servite con crostini alle erbe.", price: "16€", icon: "fish" },
  { name: "Tartare di Gamberi e Avocado", desc: "Tartare di gamberi con sale, olio, pepe e agrumi; cremoso di avocado al limone.", price: "22€", icon: "fish" },
];

export const primi: Dish[] = [
  { name: "Lasagna Bolognese", desc: "Pomodoro, manzo, erbe aromatiche, mozzarella, parmigiano, besciamella e basilico.", price: "16€", icon: "pasta" },
  { name: "Strozzapreti al Pistacchio", desc: "Pasta fresca con crema di pistacchio, Grana riserva, cannella e pomodori secchi.", price: "18€", icon: "wheat" },
  { name: "Spaghetti alla Bolognese", desc: "Pasta fresca al ragù premium.", price: "16€", icon: "pasta" },
  { name: "Pasta al Pomodoro", desc: "Pasta fresca con salsa di pomodoro e basilico.", price: "14€", icon: "tomato" },
  { name: "Linguine con Cozze e Vongole", desc: "Pasta fresca con cozze e vongole.", price: "18€", icon: "fish" },
  { name: "Pasta all'Arrabbiata", desc: "Pomodoro, aglio, peperoncino, olio, sale e prezzemolo.", price: "14€", icon: "garlic" },
  { name: "Strozzapreti con Pesce Spada", desc: "Pasta fresca con pesce spada, pomodorini, olive e capperi.", price: "19€", icon: "fish" },
  { name: "Zuppa di Verdure", desc: "Zuppa con verdure di stagione.", price: "13€", icon: "olive" },
  { name: "Linguine Aglio e Olio", desc: "Aglio, pepe, olio d'oliva e pane grattugiato.", price: "14€", icon: "oilpasta" },
];

// ── Full menu (every section, IT + EN) — from the printed menu (6 pages) ────────
// Dish names stay in Italian across languages; descriptions switch by language
// (NL falls back to EN). Used by the Menu page.
export type MenuDish = { name: string; price: string; it: string; en: string; nl: string };
export type MenuSection = { id: string; title: string; titleEn: string; note?: string; drinks?: boolean; items: MenuDish[] };

export const fullMenu: MenuSection[] = [
  {
    id: "antipasti", title: "Antipasti", titleEn: "Starters",
    items: [
      { name: "Tagliere Misto", price: "19€", it: "Focaccia con selezione di salumi e formaggi italiani.", en: "Focaccia with a selection of cured meats and Italian cheeses.", nl: "Focaccia met een selectie Italiaanse vleeswaren en kazen." },
      { name: "Carpaccio di Manzo", price: "17€", it: "Carpaccio di manzo, scaglie di Grana riserva, rucola, pomodorini e glassa di aceto balsamico.", en: "Beef carpaccio, Grana Riserva shavings, arugula, cherry tomatoes and balsamic glaze.", nl: "Rundercarpaccio, schilfers Grana Riserva, rucola, kerstomaatjes en balsamicoglazuur." },
      { name: "Bruschette", price: "14€", it: "Pomodoro & basilico, burrata & avocado, vitello tonnato e tapenade di olive.", en: "Tomato & basil, burrata & avocado, vitello tonnato and olive tapenade.", nl: "Tomaat & basilicum, burrata & avocado, vitello tonnato en olijventapenade." },
      { name: "Caprese", price: "12€", it: "Pomodorini, mozzarella di bufala campana, sale, olio, origano e basilico.", en: "Cherry tomatoes, buffalo mozzarella, salt, olive oil, oregano and basil.", nl: "Kerstomaatjes, buffelmozzarella, zout, olijfolie, oregano en basilicum." },
      { name: "Vitello Tonnato", price: "19€", it: "Fettine di vitello con salsa tonnata e capperi.", en: "Thin slices of veal with tuna sauce and capers.", nl: "Dunne plakjes kalfsvlees met tonijnsaus en kappertjes." },
      { name: "Parmigiana di Melanzane", price: "16€", it: "Melanzane fritte, cotte al forno con salsa di pomodoro, mozzarella, Grana riserva e basilico.", en: "Fried eggplant baked with tomato sauce, mozzarella, Grana Riserva and basil.", nl: "Gefrituurde aubergine uit de oven met tomatensaus, mozzarella, Grana Riserva en basilicum." },
      { name: "Souté di Cozze", price: "16€", it: "Cozze con olio, aglio e prezzemolo servite con crostini aromatizzati alle erbe.", en: "Mussels with olive oil, garlic and parsley served with herb-seasoned crostini.", nl: "Mosselen met olijfolie, knoflook en peterselie, geserveerd met kruidige crostini." },
      { name: "Tartare di Gamberi e Cremoso di Avocado", price: "22€", it: "Tartare di gamberi con sale, olio, pepe e agrumi; cremoso di avocado con limone.", en: "Shrimp tartare with salt, olive oil, pepper and citrus; creamy avocado with lemon.", nl: "Garnalentartaar met zout, olijfolie, peper en citrus; romige avocado met citroen." },
    ],
  },
  {
    id: "primi", title: "Primi", titleEn: "Pasta Courses",
    items: [
      { name: "Lasagna Bolognese", price: "16€", it: "Pomodoro, manzo, erbe aromatiche, mozzarella, parmigiano, besciamella, basilico, sale, pepe e olio.", en: "Tomato, beef, aromatic herbs, mozzarella, parmesan, béchamel, basil, salt, pepper and olive oil.", nl: "Tomaat, rundvlees, aromatische kruiden, mozzarella, parmezaan, bechamelsaus, basilicum, zout, peper en olijfolie." },
      { name: "Strozzapreti al Pistacchio", price: "18€", it: "Pasta fresca con crema di pistacchio, Grana riserva, cannella e pomodori secchi.", en: "Fresh pasta with pistachio cream, Grana Riserva, cinnamon and sun-dried tomatoes.", nl: "Verse pasta met pistachecrème, Grana Riserva, kaneel en zongedroogde tomaten." },
      { name: "Spaghetti alla Bolognese", price: "16€", it: "Pasta fresca al ragù premium.", en: "Fresh pasta with premium ragù.", nl: "Verse pasta met premium ragù." },
      { name: "Pasta al Pomodoro", price: "14€", it: "Pasta fresca con salsa di pomodoro e basilico.", en: "Fresh pasta with tomato sauce and basil.", nl: "Verse pasta met tomatensaus en basilicum." },
      { name: "Linguine con Cozze e Vongole", price: "18€", it: "Pasta fresca con cozze e vongole.", en: "Fresh pasta with mussels and clams.", nl: "Verse pasta met mosselen en venusschelpen." },
      { name: "Pasta all'Arrabbiata", price: "14€", it: "Pasta fresca con pomodoro, aglio, peperoncino, olio, sale e prezzemolo.", en: "Fresh pasta with tomato, garlic, chili pepper, olive oil, salt and parsley.", nl: "Verse pasta met tomaat, knoflook, pepertje, olijfolie, zout en peterselie." },
      { name: "Strozzapreti con Pesce Spada alla Ghiotta", price: "19€", it: "Pasta fresca con pesce spada preparato con pomodorini, olive e capperi.", en: "Fresh pasta with swordfish prepared with cherry tomatoes, olives and capers.", nl: "Verse pasta met zwaardvis, bereid met kerstomaatjes, olijven en kappertjes." },
      { name: "Zuppa di Verdure", price: "13€", it: "Zuppa con verdure di stagione.", en: "Soup with seasonal vegetables.", nl: "Soep met seizoensgroenten." },
      { name: "Linguine Aglio e Olio", price: "14€", it: "Aglio, pepe, olio d'oliva e pane grattugiato.", en: "Fresh pasta with garlic, pepper, olive oil and grated bread.", nl: "Verse pasta met knoflook, peper, olijfolie en geraspt brood." },
    ],
  },
  {
    id: "secondi", title: "Secondi", titleEn: "Meat & Fish",
    items: [
      { name: "Branzino all'Acqua Pazza", price: "28€", it: "Cotto con olio, aglio, pomodorini, olive e origano servito con patate al forno.", en: "Cooked with olive oil, garlic, cherry tomatoes, olives and oregano, served with roasted potatoes.", nl: "Bereid met olijfolie, knoflook, kerstomaatjes, olijven en oregano, geserveerd met geroosterde aardappelen." },
      { name: "Ossobuco", price: "29€", it: "Ossobuco, cipolla, brodo di carne servito con purè di patate.", en: "Ossobuco, onion and beef broth served with mashed potatoes.", nl: "Ossobuco, ui en runderbouillon, geserveerd met aardappelpuree." },
      { name: "Scaloppina al Madera", price: "24€", it: "Fettine sottili di vitello cotte nel burro e vino Madera servito con patate al forno.", en: "Thin slices of veal cooked in butter and Madeira wine served with roasted potatoes.", nl: "Dunne plakjes kalfsvlees bereid in boter en Madeirawijn, geserveerd met geroosterde aardappelen." },
      { name: "Filetto alla Griglia", price: "30€", it: "Filetto di manzo alla griglia servito con patate al forno.", en: "Grilled beef fillet served with roasted potatoes.", nl: "Gegrilde runderfilet, geserveerd met geroosterde aardappelen." },
      { name: "Costolette alla Griglia", price: "26€", it: "Costolette d'agnello alla griglia servito con patate al forno.", en: "Grilled lamb chops served with roasted potatoes.", nl: "Gegrilde lamskoteletten, geserveerd met geroosterde aardappelen." },
      { name: "Controfiletto alla Griglia", price: "27€", it: "Controfiletto servito con patate al forno.", en: "Sirloin steak served with roasted potatoes.", nl: "Lendenbiefstuk, geserveerd met geroosterde aardappelen." },
      { name: "Pesce Spada alla Ghiotta", price: "26€", it: "Cotto con pomodori, olive, capperi e origano servito con patate al forno.", en: "Cooked with tomatoes, olives, capers and oregano served with roasted potatoes.", nl: "Bereid met tomaten, olijven, kappertjes en oregano, geserveerd met geroosterde aardappelen." },
      { name: "Gamberoni al Brandy", price: "27€", it: "Gamberoni alla griglia sfumati con brandy servito con insalata condita.", en: "Grilled king prawns flamed with brandy served with dressed salad.", nl: "Gegrilde gamba's geflambeerd met brandy, geserveerd met aangemaakte salade." },
    ],
  },
  {
    id: "contorni", title: "Contorni", titleEn: "Side Dishes",
    items: [
      { name: "Insalata Mista", price: "6€", it: "Insalata mista.", en: "Mixed salad.", nl: "Gemengde salade." },
      { name: "Pomodori in Insalata", price: "6€", it: "Insalata di pomodori con cipolla rossa e ricotta salata.", en: "Tomato salad with red onion and cheese.", nl: "Tomatensalade met rode ui en gezouten ricotta." },
      { name: "Purè di Patate", price: "6€", it: "Purè di patate aromatizzato con rosmarino, maggiorana, alloro e salvia.", en: "Mashed potatoes flavoured with rosemary, marjoram, bay leaf and sage.", nl: "Aardappelpuree op smaak gebracht met rozemarijn, marjolein, laurier en salie." },
      { name: "Patate al Forno", price: "6€", it: "Patate arrosto con olio d'oliva, sale e rosmarino.", en: "Roasted potatoes with olive oil, salt and rosemary.", nl: "Geroosterde aardappelen met olijfolie, zout en rozemarijn." },
      { name: "Patate Fritte", price: "6€", it: "Patate fritte.", en: "French fries.", nl: "Friet." },
      { name: "Verdure di Stagione", price: "6€", it: "Saltate in padella.", en: "Sautéed seasonal vegetables.", nl: "In de pan gebakken seizoensgroenten." },
    ],
  },
  {
    id: "dolci", title: "Dolci", titleEn: "Desserts",
    items: [
      { name: "Cannolo Siciliano", price: "6€", it: "Cannolo siciliano con ricotta dolce e gocce di cioccolato.", en: "Sicilian cannolo with sweet ricotta and chocolate chips.", nl: "Siciliaanse cannolo met zoete ricotta en chocoladeschilfers." },
      { name: "Tiramisù", price: "6€", it: "Savoiardi, mascarpone e caffè.", en: "Savoiardi biscuits, mascarpone and coffee.", nl: "Lange vingers, mascarpone en koffie." },
      { name: "Torta alle Mele", price: "6€", it: "Torta alle mele.", en: "Apple cake.", nl: "Appeltaart." },
      { name: "Affogato al Caffè", price: "7€", it: "Gelato alla vaniglia.", en: "Coffee with vanilla ice cream.", nl: "Vanille-ijs overgoten met espresso." },
      { name: "Torta Caprese", price: "6€", it: "Torta al cioccolato con farina di mandorle.", en: "Chocolate cake with almond flour.", nl: "Chocoladetaart met amandelmeel." },
    ],
  },
  {
    id: "pizze-rosse", title: "Pizze Rosse", titleEn: "Red Pizzas",
    items: [
      { name: "Margherita", price: "14€", it: "Pomodoro, mozzarella, olio e basilico.", en: "Tomato, mozzarella, oil and basil.", nl: "Tomaat, mozzarella, olie en basilicum." },
      { name: "Marinara", price: "12€", it: "Pomodoro, acciughe, aglio, olio, origano e basilico.", en: "Tomato, anchovies, garlic, oil, oregano and basil.", nl: "Tomaat, ansjovis, knoflook, olie, oregano en basilicum." },
      { name: "Capricciosa", price: "17€", it: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofini e olive.", en: "Tomato, mozzarella, cooked ham, mushrooms, artichoke and olives.", nl: "Tomaat, mozzarella, gekookte ham, champignons, artisjok en olijven." },
      { name: "Diavola", price: "16€", it: "Pomodoro, mozzarella e salame piccante.", en: "Tomato, mozzarella and spicy salami.", nl: "Tomaat, mozzarella en pikante salami." },
      { name: "Bufala", price: "17€", it: "Pomodoro, mozzarella di bufala, Grana, olio e basilico.", en: "Tomato, buffalo mozzarella, Grana, oil and basil.", nl: "Tomaat, buffelmozzarella, Grana, olie en basilicum." },
      { name: "Parmigiana", price: "17€", it: "Pomodoro, mozzarella, Grana e melanzane fritte.", en: "Tomato, mozzarella, Grana and fried eggplant.", nl: "Tomaat, mozzarella, Grana en gefrituurde aubergine." },
      { name: "Calabrese", price: "18€", it: "Pomodoro, mozzarella di bufala, 'nduja e burrata.", en: "Tomato, buffalo mozzarella, 'nduja and burrata.", nl: "Tomaat, buffelmozzarella, 'nduja en burrata." },
    ],
  },
  {
    id: "pizze-bianche", title: "Pizze Bianche", titleEn: "White Pizzas",
    items: [
      { name: "Focaccia", price: "9€", it: "Sale, origano e olio.", en: "Salt, oregano and oil.", nl: "Zout, oregano en olie." },
      { name: "4 Formaggi", price: "17€", it: "Provola, Grana, gorgonzola e emmenthal.", en: "Provola, Grana, gorgonzola and Emmental.", nl: "Provola, Grana, gorgonzola en emmentaler." },
      { name: "Tonno & Cipolla", price: "14€", it: "Mozzarella, tonno, cipolla e origano.", en: "Mozzarella, tuna, onion and oregano.", nl: "Mozzarella, tonijn, ui en oregano." },
      { name: "Americana", price: "14€", it: "Mozzarella, würstel e patate.", en: "Mozzarella, frankfurters and potatoes.", nl: "Mozzarella, knakworst en aardappel." },
      { name: "Primavera", price: "17€", it: "Pomodorini, mozzarella, rucola, Grana e prosciutto cotto.", en: "Cherry tomatoes, mozzarella, rocket, Grana and cooked ham.", nl: "Kerstomaatjes, mozzarella, rucola, Grana en gekookte ham." },
      { name: "Vegetariana", price: "14€", it: "Mozzarella, zucchine, peperoni, origano e olive nere.", en: "Mozzarella, zucchini, bell peppers, oregano and black olives.", nl: "Mozzarella, courgette, paprika, oregano en zwarte olijven." },
      { name: "Trentina", price: "17€", it: "Mozzarella, speck, gorgonzola e noci.", en: "Mozzarella, speck, gorgonzola and walnuts.", nl: "Mozzarella, speck, gorgonzola en walnoten." },
      { name: "Mimosa", price: "15€", it: "Mozzarella, panna, prosciutto cotto e mais.", en: "Mozzarella, cream, cooked ham and sweetcorn.", nl: "Mozzarella, room, gekookte ham en maïs." },
      { name: "Mortazza", price: "18€", it: "Burrata, mortadella e pistacchio.", en: "Burrata, mortadella and pistachio.", nl: "Burrata, mortadella en pistache." },
    ],
  },
  {
    id: "calzone", title: "Calzone & Pizza del Mese", titleEn: "Calzone & Pizza of the Month",
    items: [
      { name: "Calzone", price: "18€", it: "Pomodoro, mozzarella, ricotta, salame, prosciutto cotto e pepe.", en: "Tomato, mozzarella, ricotta, salami, cooked ham and pepper.", nl: "Tomaat, mozzarella, ricotta, salami, gekookte ham en peper." },
      { name: "Pizza del Mese", price: "18€", it: "Chiedete al nostro personale!", en: "Ask our staff!", nl: "Vraag ons personeel!" },
    ],
  },
  {
    id: "bibite", title: "Bibite", titleEn: "Cold Drinks & Sodas", drinks: true,
    items: [
      { name: "Water 0,75", price: "4€", it: "", en: "", nl: "" },
      { name: "Tonic Water", price: "4€", it: "", en: "", nl: "" },
      { name: "Coca-Cola", price: "4€", it: "", en: "", nl: "" },
      { name: "Coca-Cola Zero", price: "4€", it: "", en: "", nl: "" },
      { name: "Sprite Zero", price: "4€", it: "", en: "", nl: "" },
      { name: "Fanta", price: "4€", it: "", en: "", nl: "" },
      { name: "Fuze Tea Sparkling Lemon", price: "4€", it: "", en: "", nl: "" },
      { name: "Fuze Tea Peach", price: "4€", it: "", en: "", nl: "" },
      { name: "Ginger Ale", price: "4€", it: "", en: "", nl: "" },
      { name: "Apple Juice", price: "4€", it: "", en: "", nl: "" },
    ],
  },
  {
    id: "caffetteria", title: "Caffetteria", titleEn: "Hot Drinks", drinks: true,
    items: [
      { name: "Caffè Espresso", price: "3€", it: "", en: "", nl: "" },
      { name: "Caffè Double Espresso", price: "5€", it: "", en: "", nl: "" },
      { name: "Caffè Macchiato", price: "3€", it: "", en: "", nl: "" },
      { name: "Caffè Americano", price: "3€", it: "", en: "", nl: "" },
      { name: "Cappuccino", price: "4€", it: "", en: "", nl: "" },
      { name: "Latte Macchiato", price: "4€", it: "", en: "", nl: "" },
      { name: "Tea", price: "3€", it: "", en: "", nl: "" },
      { name: "Hot Chocolate", price: "4€", it: "", en: "", nl: "" },
      { name: "Hot Chocolate with Whipped Cream", price: "5€", it: "", en: "", nl: "" },
    ],
  },
  {
    id: "liquori", title: "Liquori", titleEn: "Liquors", drinks: true,
    items: [
      { name: "Limoncello", price: "4€", it: "", en: "", nl: "" },
      { name: "Grappa", price: "4€", it: "", en: "", nl: "" },
      { name: "Amaro Del Capo", price: "4€", it: "", en: "", nl: "" },
      { name: "Sambuca", price: "4€", it: "", en: "", nl: "" },
      { name: "Amaretto Di Saronno", price: "4€", it: "", en: "", nl: "" },
    ],
  },
  {
    id: "birra-spina", title: "Birra alla Spina", titleEn: "Draft Beer", drinks: true,
    items: [
      { name: "Peroni Blond 0,25 cl", price: "4€", it: "", en: "", nl: "" },
      { name: "Peroni Blond 0,5 cl", price: "7€", it: "", en: "", nl: "" },
      { name: "Grolsch Weizen 0,3", price: "5€", it: "", en: "", nl: "" },
      { name: "Grolsch Weizen 0,5", price: "8€", it: "", en: "", nl: "" },
      { name: "Grimbergen Blond 0,3", price: "5€", it: "", en: "", nl: "" },
      { name: "Grimbergen Blond 0,5", price: "8€", it: "", en: "", nl: "" },
    ],
  },
  {
    id: "birra-bottiglia", title: "Birra in Bottiglia", titleEn: "Bottled Beer", drinks: true,
    items: [
      { name: "Peroni Chill Radler", price: "4€", it: "", en: "", nl: "" },
      { name: "Peroni 0,0%", price: "4€", it: "", en: "", nl: "" },
      { name: "Grimbergen Triple", price: "5€", it: "", en: "", nl: "" },
    ],
  },
  {
    id: "vino-bianco", title: "Vino Bianco", titleEn: "White Wine", drinks: true, note: "Glass / Bottle",
    items: [
      { name: "Pinot Grigio Terre di Marca", price: "6€ / 25€", it: "Tenute Corvezzo (Veneto)", en: "Tenute Corvezzo (Veneto)", nl: "Tenute Corvezzo (Veneto)" },
      { name: "Chardonnay San Leonardo", price: "6€ / 26€", it: "Tenute Carminucci (Marche)", en: "Tenute Carminucci (Marche)", nl: "Tenute Carminucci (Marche)" },
      { name: "Sauvignon Blanc", price: "38€", it: "Wairau River (Nuova Zelanda)", en: "Wairau River (New Zealand)", nl: "Wairau River (Nieuw-Zeeland)" },
      { name: "Soave Danieli", price: "28€", it: "Antonio Fattori Vignaiolo (Veneto)", en: "Antonio Fattori Vignaiolo (Veneto)", nl: "Antonio Fattori Vignaiolo (Veneto)" },
      { name: "Petit Chablis", price: "56€", it: "Domaine et Hamelin (Borgogna)", en: "Domaine et Hamelin (Burgundy)", nl: "Domaine et Hamelin (Bourgogne)" },
      { name: "Roero Arneis", price: "39€", it: "Careglio Az. Agricola", en: "Careglio Az. Agricola", nl: "Careglio Az. Agricola" },
    ],
  },
  {
    id: "vino-rosso", title: "Vino Rosso", titleEn: "Red Wine", drinks: true, note: "Glass / Bottle",
    items: [
      { name: "Primitivo Posidone", price: "6€ / 24€", it: "Tenute Corvezzo (Puglia)", en: "Tenute Corvezzo (Puglia)", nl: "Tenute Corvezzo (Puglia)" },
      { name: "Montepulciano d'Abruzzo Iava", price: "6€ / 26€", it: "Vignamadre (Abruzzo)", en: "Vignamadre (Abruzzo)", nl: "Vignamadre (Abruzzo)" },
      { name: "Dolcetto", price: "38€", it: "Massolino (Piemonte)", en: "Massolino (Piedmont)", nl: "Massolino (Piëmont)" },
      { name: "Nebbiolo", price: "49€", it: "Massolino (Piemonte)", en: "Massolino (Piedmont)", nl: "Massolino (Piëmont)" },
      { name: "Barbaresco", price: "65€", it: "Giacosa Fratelli (Piemonte)", en: "Giacosa Fratelli (Piedmont)", nl: "Giacosa Fratelli (Piëmont)" },
    ],
  },
  {
    id: "rosato", title: "Rosé", titleEn: "Rosé", drinks: true, note: "Glass / Bottle",
    items: [
      { name: "Lyrics Grenache Gris Rosé", price: "29€", it: "Fonjoya Vignerons (Languedoc)", en: "Fonjoya Vignerons (Languedoc)", nl: "Fonjoya Vignerons (Languedoc)" },
      { name: "Pinot Grigio Rosé", price: "7€ / 26€", it: "De Canal", en: "De Canal", nl: "De Canal" },
    ],
  },
  {
    id: "bollicine", title: "Prosecco & Champagne", titleEn: "Prosecco & Champagne", drinks: true, note: "Glass / Bottle",
    items: [
      { name: "Prosecco Babulle", price: "6€ / 18€", it: "Losito e Guarini (Pavia)", en: "Losito e Guarini (Pavia)", nl: "Losito e Guarini (Pavia)" },
      { name: "Champagne", price: "59€", it: "Gruet (Champagne)", en: "Gruet (Champagne)", nl: "Gruet (Champagne)" },
    ],
  },
];

// Photos we currently have for a dish (keyed by exact menu name). Files live in
// /public/food-catalog. Used for the Menu-page image slots.
export const dishPhotos: Record<string, string[]> = {
  "Carpaccio di Manzo": ["carpaccio-manzo.jpg"],
  "Souté di Cozze": ["soute-cozze-studio.jpg", "soute-cozze-foto.jpg"],
  "Spaghetti alla Bolognese": ["carpaccio-e-bolognese.jpg"],
  "Linguine con Cozze e Vongole": ["linguine-cozze-vongole.jpg"],
  "Gamberoni al Brandy": ["gamberi-griglia.jpg"],
  "Insalata Mista": ["insalata-mista.jpg"],
  "Margherita": ["pizza-margherita.jpg"],
  "Primavera": ["pizza-prosciutto-rucola.jpg"],
  "Vegetariana": ["pizza-vegetariana.jpg"],
};
export const foodCatalogUrl = (f: string) => `/food-catalog/${f}`;
