import { useState, useEffect } from "react";

const PHRASES = [
  "deploying content pipeline...",
  "optimizing ad spend...",
  "scaling influencer network...",
  "analyzing engagement metrics...",
  "A/B testing creatives..."
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    const typeSpeed = isDeleting ? 30 : 80;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      } else {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  // Data stream particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${8 + Math.random() * 7}s`,
    animationDelay: `${Math.random() * 5}s`,
  }));

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-grid-overlay opacity-40 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white rounded-full blur-[120px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />

      {/* Data Stream Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute bottom-0 w-[2px] h-[2px] bg-white rounded-full opacity-0"
            style={{
              left: p.left,
              animation: `dataStream ${p.animationDuration} linear ${p.animationDelay} infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes dataStream {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Status Pill */}
        <div className="scroll-reveal animate-in inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-8">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#E53E3E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E53E3E]"></span>
          </div>
          <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[#A0A0A0]">
            SYSTEMS ONLINE — 50+ CAMPAIGNS ACTIVE
          </span>
        </div>

        {/* Headline */}
        <h1 className="flex flex-col gap-2 mb-6">
          <span className="scroll-reveal delay-100 animate-in font-sans font-bold text-[clamp(1.8rem,5vw,4.5rem)] leading-[1.1] text-[#F5F5F5] tracking-tight">
            Content is the
          </span>
          <span className="scroll-reveal delay-200 animate-in font-serif italic text-[clamp(2.5rem,8vw,9rem)] leading-[0.85] text-white text-shadow-glow pr-4">
            Ammunition.
          </span>
        </h1>

        {/* Subline */}
        <p className="scroll-reveal delay-300 animate-in font-sans text-[#A0A0A0] text-base md:text-lg max-w-[36rem] leading-relaxed mb-10">
          We deploy autonomous content systems that scale your brand's digital presence 24/7. Stop posting. Start dominating.
        </p>

        {/* CTA Row */}
        <div className="scroll-reveal delay-400 animate-in flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
          <button className="relative overflow-hidden rounded-full bg-white text-[#0A0A0A] px-8 py-4 font-sans font-medium text-base transition-transform duration-300 hover:scale-[1.03] box-shadow-glow-hover group">
            <span className="relative z-10">Book a Strategy Call</span>
            <div className="absolute inset-0 bg-[#E53E3E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="absolute inset-0 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
              Book a Strategy Call
            </span>
          </button>

          <div className="flex items-center gap-2 font-mono text-xs text-[#6B6B6B]">
            <span className="text-[#A0A0A0]">root@athris:~$</span>
            <span className="text-[#F5F5F5]">{text}</span>
            <span className="w-2 h-4 bg-[#E53E3E] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
