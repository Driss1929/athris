import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Telemetry from "./components/Telemetry";
import CampaignModules from "./components/CampaignModules";
import Constellation from "./components/Constellation";
import Philosophy from "./components/Philosophy";
import Protocol from "./components/Protocol";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Global Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[var(--bg)] text-[var(--text)] font-sans overflow-x-hidden transition-colors duration-500">
      {/* Global Noise Overlay */}
      <svg className="noise-overlay">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <Navbar />
      
      <main>
        <Hero />
        <Telemetry />
        <CampaignModules />
        <Constellation />
        <Philosophy />
        <Protocol />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
