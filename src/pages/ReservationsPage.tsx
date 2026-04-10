import SectionTitle from "@/components/SectionTitle";
import BookingButton from "@/components/BookingButton";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import { Phone, Clock, MapPin } from "lucide-react";

const ReservationsPage = () => (
  <>
    <section className="section-padding bg-cream-light">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <SectionTitle
          label="Reservations"
          title="Reserve Your Table"
          subtitle="Secure your spot for an unforgettable Italian dining experience."
        />
        <p className="font-body text-muted-foreground leading-relaxed mt-6 mb-10">
          We recommend booking in advance, especially for weekend evenings and special events.
          Click the button below to reserve through our booking platform, or call us directly.
        </p>

        <BookingButton variant="hero" className="bg-gold text-cream hover:bg-gold-light border-gold text-lg px-12 py-5">
          Reserve Now
        </BookingButton>

        <OrnamentalDivider className="my-12" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
              <Phone size={18} className="text-gold" />
            </div>
            <p className="font-body text-xs tracking-elegant uppercase text-muted-foreground">By Phone</p>
            <p className="font-heading text-lg text-foreground">+31 20 123 4567</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
              <Clock size={18} className="text-gold" />
            </div>
            <p className="font-body text-xs tracking-elegant uppercase text-muted-foreground">Hours</p>
            <p className="font-heading text-lg text-foreground">Tue – Sun</p>
            <p className="text-sm text-muted-foreground font-body">12:00 – 22:30</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
              <MapPin size={18} className="text-gold" />
            </div>
            <p className="font-body text-xs tracking-elegant uppercase text-muted-foreground">Location</p>
            <p className="font-heading text-lg text-foreground">Amsterdam</p>
            <p className="text-sm text-muted-foreground font-body">123 Via della Cucina</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ReservationsPage;
