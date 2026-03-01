export default function Contact() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden px-6">
      <div className="absolute inset-0 bg-grid-overlay opacity-20 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-white rounded-full blur-[100px] opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <span className="scroll-reveal font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#6B6B6B] mb-8">
          // initialize
        </span>
        
        <h2 className="scroll-reveal delay-100 font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6">
          Ready to deploy <br />
          <span className="font-serif italic text-shadow-glow">your campaigns?</span>
        </h2>
        
        <p className="scroll-reveal delay-200 font-sans text-[#A0A0A0] text-base md:text-lg max-w-[32rem] leading-relaxed mb-12">
          Stop guessing. Start engineering. Book a strategy call to audit your current media operations.
        </p>

        <button className="scroll-reveal delay-300 relative overflow-hidden rounded-full bg-white text-[#0A0A0A] px-10 py-5 font-sans font-medium text-lg transition-transform duration-300 hover:scale-[1.03] box-shadow-glow-hover group">
          <span className="relative z-10">Initialize Sequence</span>
          <div className="absolute inset-0 bg-[#E53E3E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="absolute inset-0 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
            Initialize Sequence
          </span>
        </button>
      </div>
    </section>
  );
}
