import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full transition-all duration-500 ease-out",
        scrolled
          ? "bg-[#141414]/70 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6"
          : "bg-transparent border-transparent py-4 px-6"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22H22L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 10L7 20H17L12 10Z" fill="white"/>
            </svg>
            <span className="font-sans font-bold text-xl tracking-tight text-white">ATHRIS</span>
          </div>
          <span className="font-mono text-[0.55rem] tracking-[0.3em] text-[#6B6B6B] ml-8 -mt-1">AGENCY</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Protocol", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0] hover:text-white hover:-translate-y-[1px] transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="relative overflow-hidden rounded-full bg-white text-[#0A0A0A] px-6 py-2.5 font-sans font-medium text-sm transition-transform duration-300 hover:scale-105 box-shadow-glow-hover group">
            <span className="relative z-10">Initialize</span>
            <div className="absolute inset-0 bg-[#E53E3E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="absolute inset-0 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
              Initialize
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-[#141414]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 md:hidden">
          {["Services", "Protocol", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-sm uppercase tracking-widest text-[#A0A0A0] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full rounded-full bg-white text-[#0A0A0A] px-6 py-3 font-sans font-medium text-sm">
            Initialize
          </button>
        </div>
      )}
    </header>
  );
}
