import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  onBookNow: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ onBookNow }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-white" : "navbar-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Brand */}
          <button
            type="button"
            className="flex flex-col leading-none bg-transparent border-0 p-0 cursor-pointer"
            onClick={() => handleNavClick("#home")}
            data-ocid="nav.link"
          >
            <span className="font-script text-4xl text-gold leading-none">
              Alankriti
            </span>
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-0.5 font-medium">
              Beauty Parlour
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-sans text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative group"
                data-ocid="nav.link"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              onClick={onBookNow}
              className="hidden lg:inline-flex btn-gold rounded-full px-6 py-2 text-sm font-semibold border-0"
              data-ocid="nav.primary_button"
            >
              Book Now
            </Button>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-6 py-3 font-sans text-sm font-medium text-foreground hover:text-gold hover:bg-accent/40 transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2 pb-3">
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  onBookNow();
                }}
                className="w-full btn-gold rounded-full font-semibold border-0"
                data-ocid="nav.primary_button"
              >
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
