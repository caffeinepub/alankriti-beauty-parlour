import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Find Us in Lucknow
          </h2>
          <div className="gold-divider w-20 mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left: Map */}
          <div className="reveal rounded-3xl overflow-hidden shadow-card border border-border/60 h-80 lg:h-auto">
            <iframe
              title="Alankriti Beauty Parlour Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57295.14694897899!2d80.9461819!3d26.8522667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999579c6c9a2c4d%3A0x7cabb70f90400c82!2sIndiranagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: Contact info */}
          <div className="reveal reveal-delay-2 space-y-6">
            {/* Address */}
            <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-card border border-border/60">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-charcoal mb-1">
                  Address
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  Indiranagar, Lucknow,
                  <br />
                  Uttar Pradesh 226016
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-card border border-border/60">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-charcoal mb-1">
                  Phone
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-card border border-border/60">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-charcoal mb-1">
                  Business Hours
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  Mon–Sat: 9:00 AM – 8:00 PM
                  <br />
                  Sunday: 10:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                data-ocid="contact.primary_button"
              >
                <Button className="w-full rounded-full font-semibold bg-[#25D366] hover:bg-[#1ebe5c] text-white border-0">
                  💬 WhatsApp
                </Button>
              </a>
              <a
                href="tel:+919876543210"
                className="flex-1"
                data-ocid="contact.secondary_button"
              >
                <Button className="w-full btn-gold rounded-full font-semibold border-0">
                  📞 Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
