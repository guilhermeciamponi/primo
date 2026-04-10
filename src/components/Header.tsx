import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CalendarDays } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

const navItems = [
{ label: "Home", path: "/" },
{ label: "Menu", path: "/menu" },
{ label: "Promotions", path: "/promotions" },
{ label: "About", path: "/about" },
{ label: "Gallery", path: "/gallery" },
{ label: "Contact", path: "/contact" }];


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-divider">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <img alt="Al Primo Piano logo" className="h-8 md:h-12 w-auto" src="/lovable-uploads/a4f4435e-01a5-48c7-96d9-5fa05497d08b.png" />
          <div className="flex flex-col leading-none">
            <span className="font-heading text-base md:text-2xl font-semibold text-foreground tracking-wide whitespace-nowrap">
              AL PRIMO PIANO
            </span>
            <span className="font-body text-[8px] md:text-[10px] tracking-wide-elegant uppercase text-primary">
              Italian Restaurant
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 mx-4">
          {navItems.map((item) =>
          <Link
            key={item.path}
            to={item.path}
            className={`font-body text-xs tracking-elegant uppercase transition-colors duration-200 whitespace-nowrap ${
            location.pathname === item.path ?
            "text-foreground border-b border-gold" :
            "text-muted-foreground hover:text-foreground"}`
            }>

              {item.label}
            </Link>
          )}
        </nav>

        {/* Right side */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <LanguageSwitcher />
          <a
            href="https://booking-link-placeholder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-xs tracking-elegant uppercase px-5 py-2.5 rounded-xl border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-cream transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap">

            <CalendarDays size={14} />
            Reserve a Table
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 text-foreground"
          aria-label="Toggle menu">

          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="xl:hidden bg-background border-t border-divider animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) =>
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMobileOpen(false)}
            className={`font-body text-sm tracking-elegant uppercase py-2 border-b border-divider ${
            location.pathname === item.path ?
            "text-foreground" :
            "text-muted-foreground"}`
            }>

                {item.label}
              </Link>
          )}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
            <a
            href="https://booking-link-placeholder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 font-body text-sm tracking-elegant uppercase px-6 py-3.5 rounded-xl border-2 border-gold text-gold hover:bg-gold hover:text-cream transition-all duration-300">

              <CalendarDays size={16} />
              Reserve a Table
            </a>
          </nav>
        </div>
      }
    </header>);

};

export default Header;