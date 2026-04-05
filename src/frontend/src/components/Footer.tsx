import { Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      role="img"
      aria-label="WhatsApp"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-14">
          {/* Brand */}
          <div>
            <span className="font-script text-4xl text-gold block mb-1">
              Alankriti
            </span>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/50 mb-4">
              Beauty Parlour
            </p>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xs">
              Where Beauty Meets Elegance. Premium beauty services in the heart
              of Indiranagar, Lucknow.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center"
                aria-label="Instagram"
                data-ocid="footer.link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center"
                aria-label="Facebook"
                data-ocid="footer.link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
                data-ocid="footer.link"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="font-sans text-sm text-white/60">
                📍 Indiranagar, Lucknow,
                <br />
                <span className="pl-5">Uttar Pradesh 226016</span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  📞 +91 98765 43210
                </a>
              </li>
              <li className="font-sans text-sm text-white/60">
                🕐 Mon–Sat: 9AM – 8PM
                <br />
                <span className="pl-5">Sunday: 10AM – 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-divider opacity-30" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-5 text-center">
          <p className="font-sans text-xs text-white/40">
            © {year} Alankriti Beauty Parlour. All Rights Reserved.
          </p>
          <p className="font-sans text-xs text-white/40">
            Designed by{" "}
            <span className="text-gold/70 font-medium">
              Nexora Digital Services
            </span>
            {" · "}Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
