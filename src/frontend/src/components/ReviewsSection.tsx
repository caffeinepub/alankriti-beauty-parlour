const testimonials = [
  {
    name: "Priya Sharma",
    initials: "PS",
    review:
      "I got my bridal makeup done here and it was absolutely stunning! The artists are so talented and truly understand what brides want.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    initials: "NG",
    review:
      "Best hair treatment I've ever had. My hair is so smooth and shiny now. Highly recommend Alankriti to everyone!",
    rating: 5,
  },
  {
    name: "Anjali Singh",
    initials: "AS",
    review:
      "Wonderful facial experience. My skin felt so fresh and glowing after. Very professional and friendly staff.",
    rating: 5,
  },
  {
    name: "Sana Khan",
    initials: "SK",
    review:
      "The staff is so warm and welcoming, and the parlour is incredibly clean. My go-to beauty destination in Lucknow!",
    rating: 5,
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_KEYS.slice(0, count).map((key) => (
        <span key={key} className="text-gold text-sm">
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3">
            Happy Clients
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            What Our Clients Say
          </h2>
          {/* Rating badge */}
          <div className="inline-flex flex-col items-center bg-white rounded-2xl px-8 py-4 shadow-card border border-border mt-4">
            <p className="font-serif text-5xl font-bold text-gold">4.7</p>
            <div className="flex gap-1 my-1">
              {["r1", "r2", "r3", "r4", "r5"].map((key, i) => (
                <span
                  key={key}
                  className={`text-lg ${i < 4 ? "text-gold" : "text-gold/60"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="font-sans text-xs text-muted-foreground">
              Based on 1000+ Reviews
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-3xl p-6 shadow-card border border-border/60 hover:shadow-lifted hover:-translate-y-1 transition-all duration-300`}
              data-ocid={`reviews.item.${i + 1}`}
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gold/15 border-2 border-gold/30 flex items-center justify-center mb-4">
                <span className="font-serif font-bold text-gold text-sm">
                  {t.initials}
                </span>
              </div>
              <StarRating count={t.rating} />
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-3 mb-4 italic">
                &ldquo;{t.review}&rdquo;
              </p>
              <p className="font-sans text-sm font-semibold text-charcoal">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
