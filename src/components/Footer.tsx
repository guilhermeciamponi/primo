import { Link } from "react-router-dom";
import BookingButton from "./BookingButton";
import OrnamentalDivider from "./OrnamentalDivider";
import logo from "@/assets/logo.png";

const Footer = () =>
<footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img alt="Al Primo Piano" className="h-10 w-auto brightness-200 opacity-80" src="/lovable-uploads/3a302f4a-7daf-4d02-9b4f-28ef72a616c5.png" />
            <div>
              <h3 className="font-heading text-2xl font-semibold">AL PRIMO PIANO</h3>
              <p className="font-body text-xs tracking-wide-elegant uppercase text-primary-foreground/60">
                Italian Restaurant
              </p>
            </div>
          </div>
          <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
            Where Italian tradition meets modern elegance. Every dish tells a story of passion,
            fresh ingredients, and culinary artistry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-body text-xs tracking-wide-elegant uppercase text-gold mb-4">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2">
            {["Menu", "Promotions", "About", "Gallery", "Contact", "Reservations"].map((item) =>
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">

                {item}
              </Link>
          )}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-body text-xs tracking-wide-elegant uppercase text-gold mb-4">
            Visit Us
          </h4>
          <div className="font-body text-sm text-primary-foreground/70 space-y-2">
            <p>123 Via della Cucina</p>
            <p>Amsterdam, Netherlands</p>
            <p className="mt-4">+31 20 123 4567</p>
            <p>info@alprimopiano.com</p>
            <div className="mt-4">
              <p>Tue – Sun: 12:00 – 22:30</p>
              <p>Monday: Closed</p>
            </div>
          </div>
          <div className="mt-6">
            <BookingButton variant="secondary" className="border-gold/50 text-gold hover:bg-gold/10 hover:text-gold">
              Reserve a Table
            </BookingButton>
          </div>
        </div>
      </div>

      <OrnamentalDivider className="my-10 [&_div]:bg-gold/30 [&_svg]:text-gold/30" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40 font-body">
        <p>&copy; {new Date().getFullYear()} Al Primo Piano. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-foreground/60 transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary-foreground/60 transition-colors">Facebook</a>
          <a href="#" className="hover:text-primary-foreground/60 transition-colors">TripAdvisor</a>
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-primary-foreground/30 font-body">
        <p>Website by{" "}
          <a href="https://subflowofficial.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors underline underline-offset-2">
            subflowofficial.com
          </a>
        </p>
      </div>
    </div>
  </footer>;


export default Footer;