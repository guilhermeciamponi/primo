import SectionTitle from "@/components/SectionTitle";
import PromoCard from "@/components/PromoCard";
import OrnamentalDivider from "@/components/OrnamentalDivider";

const PromotionsPage = () => (
  <>
    <section className="section-padding-sm bg-cream-light">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle
          label="Special Offers"
          title="Promotions"
          subtitle="Discover our seasonal specials, exclusive events, and curated dining experiences."
        />
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PromoCard tag="Weekend Special" title="Saturday Tasting Menu" description="Five courses with wine pairing, featuring seasonal ingredients sourced from local markets." dateRange="Every Saturday · 18:00 – 22:00" />
          <PromoCard tag="Lunch Deal" title="Pranzo Express" description="Two-course lunch with a glass of house wine. Perfect for a midday escape from the ordinary." dateRange="Tue – Fri · 12:00 – 14:30" />
          <PromoCard tag="Private Dining" title="Chef's Table Experience" description="An exclusive seven-course dinner in our private dining room, hosted by our head chef." />
          <PromoCard tag="Happy Hour" title="Aperitivo Hour" description="Enjoy selected cocktails and cicchetti at a special price. The Italian way to start the evening." dateRange="Tue – Sat · 17:00 – 19:00" />
          <PromoCard tag="Seasonal" title="Spring Menu Launch" description="Celebrating the season with a fresh selection of dishes highlighting spring produce and flavors." dateRange="March – May 2026" />
          <PromoCard tag="Celebration" title="Birthday Dinner Package" description="A special birthday package including a personalized cake, prosecco toast, and dedicated service." />
        </div>
      </div>
    </section>

    {/* Email Capture */}
    <section className="section-padding-sm bg-cream-light">
      <div className="container mx-auto px-4 text-center max-w-lg">
        <h3 className="font-heading text-2xl text-foreground mb-2">Stay Updated</h3>
        <OrnamentalDivider className="mb-4" />
        <p className="text-muted-foreground text-sm font-body mb-6">
          Be the first to know about our seasonal specials and exclusive events.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 border border-gold/20 rounded-lg bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          />
          <button className="px-6 py-3 bg-gold text-cream font-body text-sm tracking-elegant uppercase rounded-lg hover:bg-gold-light transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </>
);

export default PromotionsPage;
