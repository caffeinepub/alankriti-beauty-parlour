import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { BookingModal } from "./components/BookingModal";
import { ContactSection } from "./components/ContactSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ReviewsSection } from "./components/ReviewsSection";
import { ServicesSection } from "./components/ServicesSection";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    for (const el of elements) {
      observerRef.current?.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar onBookNow={() => setBookingOpen(true)} />

      <main>
        <HeroSection onBookNow={() => setBookingOpen(true)} />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />

      <FloatingWhatsApp />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />

      <Toaster />
    </div>
  );
}
