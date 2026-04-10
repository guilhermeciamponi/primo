import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import BookingButton from "@/components/BookingButton";
import moments1 from "@/assets/moments-1.jpeg";
import moments2 from "@/assets/moments-2.jpeg";
import moments3 from "@/assets/moments-3.jpeg";
import moments4 from "@/assets/moments-4.jpeg";
import moments5 from "@/assets/moments-5.jpeg";
import inside2 from "@/assets/inside-2.jpeg";
import inside3 from "@/assets/inside-3.jpeg";
import inside5 from "@/assets/inside-5.jpeg";

const galleryItems = [
  { src: moments1, alt: "Restaurant ambiance" },
  { src: inside2, alt: "Italian cuisine" },
  { src: moments2, alt: "Dining experience" },
  { src: inside3, alt: "Fresh ingredients" },
  { src: moments3, alt: "Interior detail" },
  { src: inside5, alt: "Plated dish" },
  { src: moments4, alt: "Evening atmosphere" },
  { src: moments5, alt: "Chef at work" },
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
                  className={`w-full rounded-lg overflow-hidden border border-gold/20 ${
                    i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
