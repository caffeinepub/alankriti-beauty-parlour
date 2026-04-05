const galleryItems = [
  {
    src: "/assets/generated/gallery-bridal.dim_600x700.jpg",
    label: "Bridal Makeup",
    tall: true,
  },
  {
    src: "/assets/generated/gallery-hair.dim_600x700.jpg",
    label: "Hair Styling",
    tall: true,
  },
  {
    src: "/assets/generated/gallery-facial.dim_600x700.jpg",
    label: "Skin Facial",
    tall: true,
  },
  {
    src: "/assets/generated/gallery-makeup.dim_600x500.jpg",
    label: "Party Makeup",
    tall: false,
  },
  {
    src: "/assets/generated/gallery-curls.dim_600x500.jpg",
    label: "Curls & Waves",
    tall: false,
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 lg:py-28"
      style={{ background: "oklch(95% 0.025 30)" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Our Work
          </h2>
          <div className="gold-divider w-20 mt-4" />
          <p className="font-sans text-base text-muted-foreground mt-4">
            Transformations that speak for themselves
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.src}
              className={`reveal reveal-delay-${(i % 4) + 1} break-inside-avoid group relative rounded-2xl overflow-hidden shadow-card cursor-pointer`}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ height: item.tall ? "340px" : "260px" }}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <span className="font-sans text-white text-sm font-semibold tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/40 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
