import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import BookingButton from "@/components/BookingButton";

const galleryItems = [
  { alt: "Restaurant ambiance" },
  { alt: "Italian cuisine" },
  { alt: "Dining experience" },
  { alt: "Fresh ingredients" },
  { alt: "Interior detail" },
  { alt: "Plated dish" },
  { alt: "Evening atmosphere" },
  { alt: "Chef at work" },
];

const GalleryPage = () => {
  return (
    <>
      <section className="section-padding-sm bg-cream-light">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle label="Gallery" title="A Visual Journey" subtitle="Explore the ambiance, cuisine, and artistry at Al Primo Piano." />
        </div>
      </section>

      {/* EMPTY placeholder gallery grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid"
              >
                <div
                  className={`w-full rounded-lg overflow-hidden bg-muted border border-gold/20 flex items-center justify-center ${
                    i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <ImageIcon size={28} className="text-gold/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-cream-light text-center">
        <div className="container mx-auto px-4">
          <h3 className="font-heading text-2xl text-foreground mb-4">Experience It Yourself</h3>
          <BookingButton variant="secondary">Book Your Table</BookingButton>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
