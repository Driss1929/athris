export default function Footer() {
  return (
    <footer className="w-full bg-[var(--footer-bg)] rounded-t-[4rem] border-t border-[var(--footer-border)] pt-24 pb-8 px-6 md:px-16 mt-[-4rem] relative z-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-24">
          
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 22H22L12 2Z" stroke="var(--logo-mark)" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 10L7 20H17L12 10Z" fill="var(--logo-mark)"/>
                </svg>
                <span className="font-sans font-bold text-2xl tracking-tight text-[var(--logo-text)]">ATHRIS</span>
              </div>
              <span className="font-mono text-[0.65rem] tracking-[0.3em] text-[var(--text-muted)] ml-8 -mt-1">AGENCY</span>
            </div>
            <p className="font-sans text-[var(--text-dim)] text-sm max-w-sm leading-relaxed">
              Autonomous media operations command center. We deploy content systems that scale your brand's digital presence 24/7.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[var(--text-muted)] mb-2">Navigation</span>
            {["Services", "Protocol", "Pricing", "Case Studies"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-sans text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[var(--text-muted)] mb-2">Operations</span>
            <div className="flex items-start gap-2 font-sans text-sm text-[var(--text-dim)]">
              <span className="text-[var(--alert)] font-mono mt-0.5">↳</span>
              <span>Casablanca / Warsaw / Michigan</span>
            </div>
            <div className="flex items-start gap-2 font-sans text-sm text-[var(--text-dim)]">
              <span className="text-[var(--alert)] font-mono mt-0.5">↳</span>
              <span>Response time: &lt;2h</span>
            </div>
            <div className="flex items-start gap-2 font-sans text-sm text-[var(--text-dim)]">
              <span className="text-[var(--alert)] font-mono mt-0.5">↳</span>
              <span>Onboarding: 7 days</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[var(--text-muted)] mb-2">Legal</span>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="font-sans text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">
                {link}
              </a>
            ))}
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--footer-border)]">
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[var(--alert)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--alert)]"></span>
            </div>
            <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[var(--text-dim)]">
              All Systems Operational
            </span>
          </div>
          <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[var(--text-muted)]">
            © {new Date().getFullYear()} ATHRIS AGENCY
          </span>
        </div>
      </div>
    </footer>
  );
}
