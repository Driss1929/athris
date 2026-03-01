import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

const steps = [
  {
    id: "001",
    title: "Audit",
    desc: "We analyze your brand, audience, competitors, and gaps. Data extraction and performance baselining.",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping-slow" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-2 rounded-full border border-white/40 animate-ping-slow" style={{ animationDuration: '3s' }} />
        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
      </div>
    )
  },
  {
    id: "002",
    title: "Architect",
    desc: "We build the strategy, content system, and ad infrastructure. Engineering the conversion pipeline.",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className="w-1.5 bg-white/60 rounded-full animate-pulse"
            style={{ 
              height: `${20 + Math.random() * 40}px`, 
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.5s'
            }} 
          />
        ))}
      </div>
    )
  },
  {
    id: "003",
    title: "Deploy",
    desc: "We launch, optimize, and scale your campaigns. Real-time telemetry and algorithmic scaling.",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg viewBox="0 0 100 50" className="w-full h-full stroke-white stroke-2 fill-none">
          <path 
            d="M 0 25 L 20 25 L 30 10 L 50 40 L 70 25 L 100 25" 
            strokeDasharray="200"
            strokeDashoffset="200"
            className="animate-[dash_3s_linear_infinite]"
          />
        </svg>
        <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
      </div>
    )
  }
];

export default function Protocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.protocol-card');
      const viewportHeight = window.innerHeight;
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // If card is in the top half of the viewport
        if (rect.top < viewportHeight * 0.5 && rect.bottom > 0) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="protocol" className="w-full py-24 md:py-48 bg-[#0A0A0A] relative">
      <div className="max-w-3xl mx-auto px-6 md:px-16" ref={containerRef}>
        
        <div className="mb-24 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
            Mission Sequence
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6B6B6B]">
            Standard Operating Procedure
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-0">
          {steps.map((step, i) => (
            <div 
              key={step.id}
              className={cn(
                "protocol-card sticky top-[15vh] md:top-[20vh] w-full bg-[#141414] border border-white/10 rounded-[2rem] p-8 md:p-12 transition-all duration-700 ease-out flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12",
                i < activeStep ? "scale-[0.95] opacity-40 blur-[4px] -translate-y-8" : "scale-100 opacity-100 blur-0 translate-y-0"
              )}
              style={{ zIndex: i }}
            >
              <div className="flex flex-col gap-6 w-full md:w-1/3">
                <span className="font-mono text-sm text-[#6B6B6B]">
                  {step.id}
                </span>
                {step.icon}
              </div>

              <div className="flex flex-col gap-4 w-full md:w-2/3">
                <h3 className="font-sans font-bold text-2xl md:text-4xl text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-[#A0A0A0] text-base md:text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
