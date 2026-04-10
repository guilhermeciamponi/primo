import SectionTitle from "@/components/SectionTitle";
import BookingButton from "@/components/BookingButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Via della Cucina, Amsterdam, Netherlands" },
  { icon: Phone, label: "Phone", value: "+31 20 123 4567" },
  { icon: Mail, label: "Email", value: "info@alprimopiano.com" },
  { icon: Clock, label: "Hours", value: "Tue – Sun: 12:00 – 22:30 · Mon: Closed" },
];

const ContactPage = () => (
  <>
    <section className="section-padding-sm bg-cream-light">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle label="Get in Touch" title="Contact" subtitle="We'd love to hear from you. Reach out for reservations, events, or any enquiries." />
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl text-foreground mb-8">Find Us</h3>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-elegant uppercase text-muted-foreground">{label}</p>
                    <p className="font-body text-sm text-foreground mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded Map */}
            <div className="mt-8 rounded-lg border border-gold/20 aspect-video overflow-hidden">
              <iframe
                title="Al Primo Piano Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5079567908984!2d4.8924!3d52.3676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c70000001%3A0x0!2zQW1zdGVyZGFt!5e0!3m2!1sen!2snl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8">
              <h4 className="font-heading text-lg text-foreground mb-2">Getting Here</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                <strong>By tram:</strong> Lines 2, 5, and 12 — stop at Centraal Station, 5 min walk.<br />
                <strong>By car:</strong> Paid parking available at Q-Park Centrum, 2 min walk.<br />
                <strong>By bike:</strong> Bike racks available directly outside the restaurant.
              </p>
            </div>

            <div className="mt-8">
              <BookingButton variant="secondary">Reserve a Table</BookingButton>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-heading text-2xl text-foreground mb-8">Send a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-xs tracking-elegant uppercase text-muted-foreground mb-1.5 block">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gold/20 rounded-lg bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" placeholder="Your name" />
                </div>
                <div>
                  <label className="font-body text-xs tracking-elegant uppercase text-muted-foreground mb-1.5 block">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gold/20 rounded-lg bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="font-body text-xs tracking-elegant uppercase text-muted-foreground mb-1.5 block">Subject</label>
                <input type="text" className="w-full px-4 py-3 border border-gold/20 rounded-lg bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" placeholder="Reservation, event, or general" />
              </div>
              <div>
                <label className="font-body text-xs tracking-elegant uppercase text-muted-foreground mb-1.5 block">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-gold/20 rounded-lg bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-gold text-cream font-body text-sm tracking-elegant uppercase rounded-lg hover:bg-gold-light transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
