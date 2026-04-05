const services = [
  {
    icon: "💄",
    name: "Bridal Makeup",
    desc: "Transform into the bride of your dreams with our expert bridal artists. Flawless looks for your most special day.",
    tag: "Most Popular",
  },
  {
    icon: "✂️",
    name: "Hair Styling",
    desc: "From elegant updos to silky blowouts, we style your hair beautifully for every occasion.",
    tag: null,
  },
  {
    icon: "✨",
    name: "Skin Treatments",
    desc: "Advanced skin care therapies for radiant, youthful-looking skin using premium products.",
    tag: null,
  },
  {
    icon: "🌸",
    name: "Facial & Cleanup",
    desc: "Deep cleansing facials and revitalizing cleanup for glowing, fresh skin you'll love.",
    tag: null,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Our Premium Services
          </h2>
          <div className="gold-divider w-20 mt-4" />
          <p className="font-sans text-base text-muted-foreground mt-4 max-w-lg mx-auto">
            Indulge in world-class beauty treatments by certified professionals
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`reveal reveal-delay-${i + 1} group relative bg-white rounded-3xl p-8 shadow-card border border-border/60 hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              {service.tag && (
                <span className="absolute top-4 right-4 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/20">
                  {service.tag}
                </span>
              )}
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-gold/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                {service.name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
