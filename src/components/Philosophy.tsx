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

  const line1 = "Most agencies sell you posts. They call it a strategy. They bill monthly. They deliver excuses.".split(" ");
  const line2 = "We deploy systems that print revenue while you".split(" ");

  return (
    <section className="w-full py-32 md:py-48 bg-[var(--surface)] border-y border-[var(--border)] flex items-center justify-center px-6 transition-colors duration-500">
      <div ref={containerRef} className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
          {line1.map((word, i) => (
            <span
              key={i}
              className="word-reveal opacity-0 translate-y-4 transition-all duration-500 font-sans text-xl md:text-2xl text-[var(--text-muted)]"
            >
              {word}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-baseline gap-x-4 gap-y-2">
          {line2.map((word, i) => (
            <span
              key={i}
              className="word-reveal opacity-0 translate-y-4 transition-all duration-500 font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-[var(--text)] tracking-tight"
            >
              {word}
            </span>
          ))}
          <span className="word-reveal opacity-0 translate-y-4 transition-all duration-500 font-serif italic text-5xl md:text-7xl lg:text-8xl text-[var(--accent)] text-shadow-glow pr-2" style={{ opacity: 'var(--hero-italic-opacity)' }}>
            sleep.
          </span>
        </div>

      </div>
    </section>
  );
}
