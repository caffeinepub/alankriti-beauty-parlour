const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Happy Clients" },
  { value: "4.7★", label: "Average Rating" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28"
      style={{ background: "oklch(95% 0.025 30)" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="reveal">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              About Alankriti
              <br />
              <span className="font-serif italic text-gold">
                Beauty Parlour
              </span>
            </h2>
            <div className="gold-divider w-20 mb-6" style={{ marginLeft: 0 }} />
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
              Nestled in the heart of{" "}
              <strong className="text-foreground">Indiranagar, Lucknow</strong>,
              Alankriti Beauty Parlour has been a trusted destination for women
              seeking premium beauty services for over a decade.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
              We specialize in{" "}
              <strong className="text-foreground">
                bridal makeup, hair styling, skin treatments
              </strong>
              , and personalized beauty care. Our certified professionals use
              only the finest products to ensure you leave feeling radiant,
              confident, and beautiful every time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white rounded-2xl py-4 px-2 shadow-card border border-border/60"
                >
                  <p className="font-serif text-2xl font-bold text-gold">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="reveal reveal-delay-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gold border frame */}
              <div
                className="absolute -inset-3 rounded-3xl border-2 border-gold/30"
                style={{ transform: "rotate(-2deg)" }}
              />
              <img
                src="/assets/generated/about-salon.dim_700x500.jpg"
                alt="Inside Alankriti Beauty Parlour"
                className="relative w-full max-w-md rounded-3xl object-cover shadow-lifted"
                style={{ height: "380px" }}
                loading="lazy"
              />
              {/* Location badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-card border border-border">
                <p className="font-sans text-xs text-muted-foreground">
                  Located at
                </p>
                <p className="font-sans text-sm font-semibold text-charcoal">
                  Indiranagar, Lucknow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
