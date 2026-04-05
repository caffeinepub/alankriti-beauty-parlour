import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBookNow: () => void;
}

export function HeroSection({ onBookNow }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        background:
          "linear-gradient(160deg, oklch(96% 0.04 5) 0%, oklch(97% 0.03 15) 40%, oklch(98% 0.02 35) 100%)",
      }}
    >
      {/* Radial glow — center upper */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "70vh",
          background:
            "radial-gradient(ellipse at 50% 30%, oklch(93% 0.06 5 / 0.45) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* === Abstract SVG Background Decorations === */}

      {/* Large concentric circles — right of center */}
      <svg
        className="absolute pointer-events-none"
        style={{ top: "50%", left: "60%", transform: "translate(-50%, -50%)" }}
        width="900"
        height="900"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {[120, 200, 290, 390, 500, 620, 745].map((r, i) => (
          <circle
            key={r}
            cx="450"
            cy="450"
            r={r}
            stroke="oklch(60% 0.06 5)"
            strokeWidth="1"
            fill="none"
            opacity={0.11 - i * 0.01}
          />
        ))}
      </svg>

      {/* Diagonal gold hairlines */}
      <svg
        className="absolute inset-0 pointer-events-none w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line
          x1="-100"
          y1="800"
          x2="900"
          y2="-100"
          stroke="oklch(72% 0.12 80 / 0.13)"
          strokeWidth="1"
        />
        <line
          x1="100"
          y1="900"
          x2="1100"
          y2="-100"
          stroke="oklch(72% 0.12 80 / 0.10)"
          strokeWidth="0.8"
        />
        <line
          x1="600"
          y1="1000"
          x2="1600"
          y2="-200"
          stroke="oklch(72% 0.12 80 / 0.09)"
          strokeWidth="1"
        />
        <line
          x1="900"
          y1="900"
          x2="1800"
          y2="0"
          stroke="oklch(72% 0.12 80 / 0.07)"
          strokeWidth="0.8"
        />
        <line
          x1="-300"
          y1="600"
          x2="600"
          y2="-300"
          stroke="oklch(72% 0.12 80 / 0.08)"
          strokeWidth="0.8"
        />
      </svg>

      {/* Scattered gold diamonds */}
      <svg
        className="absolute inset-0 pointer-events-none w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="118"
          y="200"
          width="8"
          height="8"
          transform="rotate(45 122 204)"
          fill="oklch(72% 0.12 80 / 0.18)"
        />
        <rect
          x="1260"
          y="160"
          width="10"
          height="10"
          transform="rotate(45 1265 165)"
          fill="oklch(72% 0.12 80 / 0.15)"
        />
        <rect
          x="240"
          y="680"
          width="6"
          height="6"
          transform="rotate(45 243 683)"
          fill="oklch(72% 0.12 80 / 0.14)"
        />
        <rect
          x="1150"
          y="700"
          width="7"
          height="7"
          transform="rotate(45 1154 703)"
          fill="oklch(72% 0.12 80 / 0.16)"
        />
        <rect
          x="700"
          y="80"
          width="9"
          height="9"
          transform="rotate(45 705 85)"
          fill="oklch(72% 0.12 80 / 0.13)"
        />
        <rect
          x="1360"
          y="450"
          width="6"
          height="6"
          transform="rotate(45 1363 453)"
          fill="oklch(72% 0.12 80 / 0.12)"
        />
        <rect
          x="60"
          y="430"
          width="7"
          height="7"
          transform="rotate(45 63 433)"
          fill="oklch(72% 0.12 80 / 0.12)"
        />
      </svg>

      {/* === Content Block === */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-10 py-28 sm:py-32 max-w-3xl mx-auto">
        {/* Pre-title label with flanking lines */}
        <div
          className="flex items-center gap-4 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0s", animationFillMode: "both" }}
        >
          <span
            style={{
              display: "block",
              width: "48px",
              height: "1px",
              background: "oklch(72% 0.12 80 / 0.6)",
            }}
          />
          <span
            className="font-sans uppercase tracking-[0.22em] text-[10px] sm:text-[11px]"
            style={{ color: "oklch(55% 0.08 80)" }}
          >
            Luxury Beauty Parlour&nbsp;&middot;&nbsp;Lucknow
          </span>
          <span
            style={{
              display: "block",
              width: "48px",
              height: "1px",
              background: "oklch(72% 0.12 80 / 0.6)",
            }}
          />
        </div>

        {/* Brand name — hero centrepiece */}
        <h1
          className="font-script text-7xl sm:text-8xl lg:text-9xl leading-none tracking-wide animate-fade-in-up"
          style={{
            animationDelay: "0.1s",
            animationFillMode: "both",
            color: "oklch(28% 0.04 30)",
            textShadow: "0 2px 40px oklch(72% 0.12 80 / 0.25)",
          }}
        >
          Alankriti
        </h1>

        {/* Subtitle — Beauty Parlour */}
        <p
          className="font-serif italic font-normal text-base sm:text-lg lg:text-xl mt-3 animate-fade-in-up"
          style={{
            animationDelay: "0.2s",
            animationFillMode: "both",
            letterSpacing: "0.4em",
            color: "oklch(72% 0.12 80)",
          }}
        >
          Beauty Parlour
        </p>

        {/* Ornamental gold divider */}
        <div
          className="flex items-center justify-center gap-3 my-7 animate-fade-in-up"
          style={{ animationDelay: "0.25s", animationFillMode: "both" }}
          aria-hidden="true"
        >
          <svg
            width="50"
            height="6"
            viewBox="0 0 50 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="3"
              x2="50"
              y2="3"
              stroke="oklch(72% 0.12 80)"
              strokeWidth="0.75"
            />
          </svg>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="1"
              y="1"
              width="6"
              height="6"
              transform="rotate(45 4 4)"
              fill="oklch(72% 0.12 80)"
            />
          </svg>
          <svg
            width="50"
            height="6"
            viewBox="0 0 50 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="3"
              x2="50"
              y2="3"
              stroke="oklch(72% 0.12 80)"
              strokeWidth="0.75"
            />
          </svg>
        </div>

        {/* Tagline */}
        <p
          className="font-sans font-light text-sm sm:text-base lg:text-lg tracking-[0.15em] uppercase animate-fade-in-up"
          style={{
            animationDelay: "0.3s",
            animationFillMode: "both",
            color: "oklch(45% 0.04 30)",
          }}
        >
          Enhancing Your Natural Beauty
        </p>

        {/* Rating badge */}
        <div
          className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2 backdrop-blur-sm animate-fade-in-up"
          style={{
            animationDelay: "0.38s",
            animationFillMode: "both",
            background: "oklch(100% 0 0 / 0.72)",
            border: "1px solid oklch(72% 0.12 80 / 0.25)",
          }}
        >
          <span
            style={{
              color: "oklch(72% 0.12 80)",
              fontSize: "14px",
              lineHeight: "1",
            }}
          >
            &#9733;
          </span>
          <span
            className="font-sans text-xs tracking-wide"
            style={{ color: "oklch(40% 0.04 30)" }}
          >
            4.7 Rating&nbsp;&middot;&nbsp;1000+ Happy Clients
          </span>
        </div>

        {/* CTA Button */}
        <div
          className="mt-10 animate-fade-in-up"
          style={{ animationDelay: "0.46s", animationFillMode: "both" }}
        >
          <Button
            onClick={onBookNow}
            className="rounded-full px-10 py-3.5 font-sans font-medium text-sm tracking-widest uppercase text-white border-0 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, oklch(72% 0.12 80) 0%, oklch(58% 0.14 75) 100%)",
              boxShadow: "0 6px 24px oklch(72% 0.12 80 / 0.35)",
            }}
            data-ocid="hero.primary_button"
          >
            Book Appointment
          </Button>
        </div>

        {/* Subtle scroll cue */}
        <div
          className="mt-16 flex flex-col items-center gap-2 opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        >
          <span
            className="font-sans text-[10px] uppercase tracking-[0.2em]"
            style={{ color: "oklch(55% 0.06 30)" }}
          >
            Scroll
          </span>
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="1"
              y="1"
              width="10"
              height="18"
              rx="5"
              stroke="oklch(55% 0.06 30)"
              strokeWidth="1"
            />
            <circle cx="6" cy="5" r="2" fill="oklch(72% 0.12 80)" />
          </svg>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 56 L0 30 Q360 0 720 22 Q1080 44 1440 16 L1440 56 Z"
            fill="oklch(98% 0.01 30)"
          />
        </svg>
      </div>
    </section>
  );
}
