import { useEffect, useRef } from "react";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const words = containerRef.current?.querySelectorAll(".word-reveal");
          words?.forEach((word, i) => {
            setTimeout(() => {
              word.classList.add("opacity-100", "translate-y-0");
              word.classList.remove("opacity-0", "translate-y-4");
            }, i * 80);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const line1 = "Most agencies post content. They call it strategy.".split(" ");
  const line2 = "We deploy".split(" ");

  return (
    <section className="w-full py-32 md:py-48 bg-[#050505] border-y border-white/5 flex items-center justify-center px-6">
      <div ref={containerRef} className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
          {line1.map((word, i) => (
            <span
              key={i}
              className="word-reveal opacity-0 translate-y-4 transition-all duration-500 font-sans text-xl md:text-2xl text-[#6B6B6B]"
            >
              {word}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-baseline gap-x-4 gap-y-2">
          {line2.map((word, i) => (
            <span
              key={i}
              className="word-reveal opacity-0 translate-y-4 transition-all duration-500 font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight"
            >
              {word}
            </span>
          ))}
          <span className="word-reveal opacity-0 translate-y-4 transition-all duration-500 font-serif italic text-5xl md:text-7xl lg:text-8xl text-white text-shadow-glow pr-2">
            systems.
          </span>
        </div>

      </div>
    </section>
  );
}
