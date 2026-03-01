import { useEffect, useState, useRef } from "react";

const metrics = [
  { label: "BRANDS SCALED", value: 50, suffix: "+" },
  { label: "AD SPEND MANAGED", value: 12, suffix: "M+" },
  { label: "AVG. ROAS", value: 4.8, suffix: "x" },
  { label: "CONTENT PIECES/MO", value: 1200, suffix: "+" },
];

function Counter({ end, suffix, decimals = 0 }: { end: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(start + (end - start) * easeProgress);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-white">
      {count.toFixed(decimals)}
      <span className="text-[#E53E3E]">{suffix}</span>
    </span>
  );
}

export default function Telemetry() {
  return (
    <section className="w-full bg-[#141414] border-y border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, i) => (
            <div 
              key={metric.label} 
              className="scroll-reveal flex flex-col items-center md:items-start gap-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Counter 
                end={metric.value} 
                suffix={metric.suffix} 
                decimals={metric.value % 1 !== 0 ? 1 : 0} 
              />
              <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[#6B6B6B]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
