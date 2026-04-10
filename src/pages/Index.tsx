import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ImageIcon } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import SectionTitle from "@/components/SectionTitle";
import PromoCard from "@/components/PromoCard";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import heroImage from "@/assets/hero-restaurant.jpg";
import logo from "@/assets/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }
  })
};

const dishes = [
{ name: "Tagliatelle al Tartufo", desc: "Handmade egg pasta with fresh black truffle and aged Parmigiano", price: "€24" },
{ name: "Risotto ai Frutti di Mare", desc: "Carnaroli rice with seasonal seafood, saffron and cherry tomatoes", price: "€22" },
{ name: "Tiramisù della Casa", desc: "Our signature dessert — mascarpone, espresso, and a hint of Marsala", price: "€12" }];


const Index = () =>
<>
    {/* Hero — ONLY section with real image */}
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Al Primo Piano dining room" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      {/* Decorative gold corner ornaments */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        







        







        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight">

          Italian flavors, served with elegance
        </motion.h1>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4">

          <OrnamentalDivider className="[&_div]:bg-gold/50 [&_svg]:text-gold/50" />
        </motion.div>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="font-body text-sm md:text-base text-primary-foreground/80 mt-6 max-w-lg mx-auto">

          A curated dining experience where Italian tradition meets modern artistry, 
          in the heart of the city.
        </motion.p>
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          <BookingButton variant="hero" className="bg-gold text-cream hover:bg-gold-light border-gold">
            Book Now
          </BookingButton>
          <Link
          to="/menu"
          className="inline-flex items-center justify-center font-body text-base tracking-elegant uppercase text-primary-foreground border border-primary-foreground/40 px-10 py-4 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300">

            View Menu
          </Link>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center mt-10 text-primary-foreground/60 text-xs font-body tracking-elegant">

          <span>Tue – Sun · 12:00 – 22:30</span>
          <span>+31 20 123 4567</span>
          <span>Amsterdam, NL</span>
        </motion.div>
      </div>
    </section>

    {/* Signature Dishes — EMPTY placeholders */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
        label="From Our Kitchen"
        title="Signature Dishes"
        subtitle="Each plate is a celebration of the finest ingredients, prepared with the care and passion of Italian culinary tradition." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {dishes.map((dish, i) =>
        <motion.div
          key={dish.name}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="group">

              <div className="aspect-square overflow-hidden rounded-lg mb-5 bg-muted border border-gold/20 flex items-center justify-center">
                <ImageIcon size={32} className="text-gold/30" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-foreground">{dish.name}</h3>
              <p className="text-muted-foreground text-sm font-body mt-2 leading-relaxed">{dish.desc}</p>
              <div className="h-px bg-gold/30 my-3 w-12" />
              <span className="font-heading text-lg text-gold block">{dish.price}</span>
            </motion.div>
        )}
        </div>
        <div className="text-center mt-12">
          <Link
          to="/menu"
          className="font-body text-sm tracking-elegant uppercase text-gold hover:text-foreground underline underline-offset-4 decoration-gold/50 transition-colors">

            View Full Menu
          </Link>
        </div>
      </div>
    </section>

    {/* Promotions Preview */}
    <section className="section-padding bg-cream-light">
      <div className="container mx-auto px-4">
        <SectionTitle label="Special Offers" title="Promotions" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          <PromoCard tag="Weekend Special" title="Saturday Tasting Menu" description="Five courses with wine pairing, featuring seasonal ingredients from local markets." dateRange="Every Saturday · 18:00 – 22:00" />
          <PromoCard tag="Lunch Deal" title="Pranzo Express" description="Two-course lunch with a glass of house wine. Perfect for a midday escape." dateRange="Tue – Fri · 12:00 – 14:30" />
          <PromoCard tag="Private Dining" title="Chef's Table Experience" description="An exclusive seven-course dinner in our private dining room, hosted by our head chef." />
        </div>
        <div className="text-center mt-10">
          <Link
          to="/promotions"
          className="font-body text-sm tracking-elegant uppercase text-gold hover:text-foreground underline underline-offset-4 decoration-gold/50 transition-colors">

            See All Promotions
          </Link>
        </div>
      </div>
    </section>

    {/* About Preview — EMPTY placeholder */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-lg aspect-[4/5] bg-muted border border-gold/20 flex items-center justify-center">

            <ImageIcon size={48} className="text-gold/30" />
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}>

            <SectionTitle label="Our Story" title="A Tradition of Excellence" align="left" />
            <p className="font-body text-muted-foreground leading-relaxed mt-6">
              Nestled in the heart of the city, Al Primo Piano brings the warmth of Italian 
              hospitality to every guest. Our kitchen is led by chefs who honour time-tested 
              recipes while embracing modern technique — creating dishes that are both familiar 
              and extraordinary.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mt-4">
              From hand-rolled pasta to locally sourced produce, every detail reflects our 
              commitment to quality. We believe dining is an art, and every evening at our 
              table is a masterpiece in the making.
            </p>
            <div className="mt-8">
              <Link
              to="/about"
              className="font-body text-sm tracking-elegant uppercase text-gold hover:text-foreground underline underline-offset-4 decoration-gold/50 transition-colors">

                About the Restaurant
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Gallery Preview — EMPTY placeholders */}
    <section className="section-padding bg-cream-light">
      <div className="container mx-auto px-4">
        <SectionTitle label="Gallery" title="Moments at Our Table" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
          {Array.from({ length: 6 }).map((_, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`overflow-hidden rounded-lg bg-muted border border-gold/20 flex items-center justify-center ${i === 0 ? "row-span-2 aspect-auto min-h-[300px]" : "aspect-square"}`}>

              <ImageIcon size={28} className="text-gold/30" />
            </motion.div>
        )}
        </div>
        <div className="text-center mt-10">
          <Link
          to="/gallery"
          className="font-body text-sm tracking-elegant uppercase text-gold hover:text-foreground underline underline-offset-4 decoration-gold/50 transition-colors">

            View Gallery
          </Link>
        </div>
      </div>
    </section>

    {/* Our Restaurant — EMPTY placeholders */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle label="Our Space" title="Inside Al Primo Piano" subtitle="A glimpse into the elegant interiors and warm atmosphere that await you." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-lg bg-muted border border-gold/20 flex items-center justify-center aspect-[16/10]"
          >
            <ImageIcon size={36} className="text-gold/30" />
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1, duration: 0.6 }}
                className="overflow-hidden rounded-lg bg-muted border border-gold/20 flex items-center justify-center aspect-square"
              >
                <ImageIcon size={28} className="text-gold/30" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Location Strip */}
    <section className="section-padding-sm bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="font-body text-xs tracking-wide-elegant uppercase text-gold/60 mb-2">Address</h4>
            <p className="font-heading text-lg">123 Via della Cucina</p>
            <p className="font-body text-sm text-primary-foreground/70">Amsterdam, Netherlands</p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-wide-elegant uppercase text-gold/60 mb-2">Hours</h4>
            <p className="font-heading text-lg">Tue – Sun</p>
            <p className="font-body text-sm text-primary-foreground/70">12:00 – 22:30</p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-wide-elegant uppercase text-gold/60 mb-2">Contact</h4>
            <p className="font-heading text-lg">+31 20 123 4567</p>
            <p className="font-body text-sm text-primary-foreground/70">info@alprimopiano.com</p>
          </div>
        </div>
      </div>
    </section>
  </>;


export default Index;