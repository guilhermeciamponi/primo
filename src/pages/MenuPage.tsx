import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import MenuItem from "@/components/MenuItem";
import BookingButton from "@/components/BookingButton";
import OrnamentalDivider from "@/components/OrnamentalDivider";

const menuData = {
  Antipasti: [
    { name: "Bruschetta al Pomodoro", description: "Grilled sourdough with San Marzano tomatoes, basil, and aged balsamic", price: "€9" },
    { name: "Carpaccio di Manzo", description: "Thinly sliced beef tenderloin, arugula, shaved Parmigiano, truffle oil", price: "€16" },
    { name: "Burrata Pugliese", description: "Creamy burrata from Puglia with roasted cherry tomatoes and pesto", price: "€14" },
    { name: "Vitello Tonnato", description: "Chilled veal with tuna cream, capers, and lemon", price: "€15" },
  ],
  Primi: [
    { name: "Tagliatelle al Tartufo", description: "Handmade egg pasta with fresh black truffle and aged Parmigiano", price: "€24" },
    { name: "Risotto ai Frutti di Mare", description: "Carnaroli rice with seasonal seafood, saffron and cherry tomatoes", price: "€22" },
    { name: "Pappardelle al Ragù", description: "Wide ribbon pasta with slow-braised beef ragù and rosemary", price: "€18" },
    { name: "Ravioli di Ricotta e Spinaci", description: "Housemade ravioli filled with ricotta and spinach, sage butter", price: "€17" },
  ],
  Secondi: [
    { name: "Branzino alla Griglia", description: "Grilled Mediterranean sea bass with lemon, capers, and olive oil", price: "€28" },
    { name: "Ossobuco alla Milanese", description: "Braised veal shank with gremolata and saffron risotto", price: "€32" },
    { name: "Tagliata di Manzo", description: "Sliced grilled rib-eye steak, arugula, cherry tomatoes, and balsamic", price: "€30" },
    { name: "Pollo alla Cacciatora", description: "Free-range chicken braised with tomatoes, olives, and white wine", price: "€22" },
  ],
  Contorni: [
    { name: "Verdure Grigliate", description: "Seasonal grilled vegetables with herb vinaigrette", price: "€8" },
    { name: "Insalata Mista", description: "Mixed garden salad with house dressing", price: "€7" },
    { name: "Patate al Forno", description: "Roasted potatoes with rosemary and garlic", price: "€7" },
  ],
  Dolci: [
    { name: "Tiramisù della Casa", description: "Our signature — mascarpone, espresso, and a hint of Marsala", price: "€12" },
    { name: "Panna Cotta", description: "Vanilla bean panna cotta with seasonal berry coulis", price: "€10" },
    { name: "Cannoli Siciliani", description: "Crisp shells filled with sweet ricotta, pistachios, and candied orange", price: "€11" },
    { name: "Affogato al Caffè", description: "Vanilla gelato drowned in a shot of hot espresso", price: "€8" },
  ],
};

const categories = Object.keys(menuData);

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <>
      {/* Hero */}
      <section className="section-padding-sm bg-cream-light">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle label="Al Primo Piano" title="Menu" subtitle="Seasonal dishes crafted with passion, fresh ingredients, and respect for Italian tradition." />
          <OrnamentalDivider className="mt-4" />
          <div className="mt-8">
            <BookingButton variant="secondary">Reserve for Tonight</BookingButton>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs tracking-elegant uppercase px-4 py-2 rounded-lg whitespace-nowrap transition-colors border ${
                  activeCategory === cat
                    ? "bg-gold text-cream border-gold"
                    : "text-muted-foreground hover:text-foreground border-transparent hover:border-gold/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items with dish photo placeholders */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {categories.map((cat) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCategory === cat ? 1 : 0, height: activeCategory === cat ? "auto" : 0 }}
              className={activeCategory !== cat ? "overflow-hidden h-0" : ""}
            >
              <h3 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-2">{cat}</h3>
              <OrnamentalDivider className="mb-6" />
              <div className="space-y-0">
                {menuData[cat as keyof typeof menuData].map((item) => (
                  <MenuItem key={item.name} {...item} showPhoto />
                ))}
              </div>
            </motion.div>
          ))}

          <div className="text-center mt-14 space-y-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-body text-sm tracking-elegant uppercase text-foreground border border-gold/30 px-6 py-3 rounded-lg hover:bg-gold/10 transition-colors"
            >
              Download Menu (PDF)
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
