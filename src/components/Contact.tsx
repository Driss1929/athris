export default function Contact() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-[var(--bg)] overflow-hidden px-6 transition-colors duration-500">
      <div className="absolute inset-0 bg-grid-overlay opacity-20 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'var(--hero-glow)' }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <span className="scroll-reveal font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[var(--text-muted)] mb-8">
          // initialize
        </span>
        
        <h2 className="scroll-reveal delay-100 font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-[var(--text)] tracking-tight leading-[1.1] mb-6">
          Ready to deploy <br />
          <span className="font-serif italic text-shadow-glow text-[var(--accent)]" style={{ opacity: 'var(--hero-italic-opacity)' }}>your campaigns?</span>
        </h2>
        
        <p className="scroll-reveal delay-200 font-sans text-[var(--text-dim)] text-base md:text-lg max-w-[32rem] leading-relaxed mb-12">
          Stop guessing. Start engineering. Book a strategy call to audit your current media operations.
        </p>

        <button className="scroll-reveal delay-300 relative overflow-hidden rounded-full bg-[var(--cta-bg)] text-[var(--cta-text)] px-10 py-5 font-sans font-medium text-lg transition-transform duration-300 hover:scale-[1.03] box-shadow-glow-hover group">
          <span className="relative z-10">Initialize Sequence</span>
          <div className="absolute inset-0 bg-[var(--alert)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="absolute inset-0 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
            Initialize Sequence
          </span>
        </button>
        
        <p className="scroll-reveal delay-400 mt-6 font-mono text-xs text-[var(--text-muted)]">
          30-day performance guarantee. If we don't beat your current results in 30 days, the first month is free.
        </p>
      </div>
    </section>
  );
}
