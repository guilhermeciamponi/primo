import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import BookingButton from "@/components/BookingButton";
import OrnamentalDivider from "@/components/OrnamentalDivider";

const values = [
  { title: "Fresh Ingredients", desc: "We source daily from local markets and trusted Italian suppliers, ensuring every dish reflects the season." },
  { title: "Italian Tradition", desc: "Our recipes are rooted in generations of culinary heritage, honouring the classics while embracing innovation." },
  { title: "Warm Hospitality", desc: "At Al Primo Piano, every guest is family. We take pride in creating an atmosphere of comfort and care." },
];

const AboutPage = () => (
  <>
    <section className="section-padding-sm bg-cream-light">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle label="Our Story" title="About Al Primo Piano" subtitle="Where Italian tradition meets modern elegance, in the heart of the city." />
      </div>
    </section>

    {/* Story — EMPTY placeholder */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg w-full aspect-[4/5] bg-muted border border-gold/20 flex items-center justify-center">
            <ImageIcon size={48} className="text-gold/30" />
          </div>
          <div>
            <h3 className="font-heading text-3xl text-foreground mb-6">A Place for Every Occasion</h3>
            <div className="h-px w-16 bg-gold/50 mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Al Primo Piano was born from a dream: to bring the authentic flavors of Italy to the heart 
              of Amsterdam. Since opening our doors, we've been devoted to crafting an experience that 
              goes beyond the plate — one that touches the soul.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our name, meaning "on the first floor," speaks to our belief that great dining is an 
              elevation — of ingredients, of moments, of connections shared around the table.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Chef — EMPTY placeholder */}
    <section className="section-padding bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="font-body text-xs tracking-wide-elegant uppercase text-gold">Meet the Chef</span>
            <h3 className="font-heading text-3xl text-foreground mt-2 mb-6">Chef Marco Rinaldi</h3>
            <div className="h-px w-16 bg-gold/50 mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              With over 20 years of experience in kitchens across Rome, Bologna, and Milan, Chef Marco 
              brings a deep reverence for Italian culinary tradition to every dish he creates.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              His philosophy is simple: let the ingredients speak. Seasonal produce, artisanal cheeses, 
              and hand-selected wines form the foundation of a menu that changes with the rhythms of nature.
            </p>
          </div>
          <div className="rounded-lg w-full aspect-[4/5] bg-muted border border-gold/20 flex items-center justify-center order-1 lg:order-2">
            <ImageIcon size={48} className="text-gold/30" />
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle label="What We Stand For" title="Our Values" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <h4 className="font-heading text-xl text-foreground mb-3">{v.title}</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
        <OrnamentalDivider className="my-12" />
        <div className="text-center">
          <BookingButton variant="secondary">Reserve a Table</BookingButton>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
