import { cn } from "../utils/cn";

const plans = [
  {
    name: "Ignite",
    price: "€1,500",
    period: "/mo",
    desc: "For brands ready to stop guessing.",
    features: [
      "1 platform (META or TikTok)",
      "15 content pieces/month",
      "Ad management up to €5K spend",
      "Bi-weekly performance report",
      "Monthly strategy call"
    ],
    cta: "Start with Ignite",
    recommended: false
  },
  {
    name: "Accelerate",
    price: "€3,500",
    period: "/mo",
    desc: "For brands ready to dominate.",
    features: [
      "2-3 platforms",
      "45 content pieces/month",
      "Ad management up to €20K spend",
      "Weekly performance reports",
      "Bi-weekly strategy calls",
      "Influencer/UGC sourcing",
      "A/B creative testing"
    ],
    cta: "Accelerate Now",
    recommended: true
  },
  {
    name: "Command",
    price: "€7,000",
    period: "/mo",
    desc: "For brands that want total control.",
    features: [
      "All platforms",
      "90+ content pieces/month",
      "Unlimited ad spend management",
      "Daily optimization",
      "Dedicated strategist",
      "Full influencer campaign management",
      "Custom reporting dashboard"
    ],
    cta: "Take Command",
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-24 md:py-32 bg-[var(--bg)] border-y border-[var(--border)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-[var(--text)] tracking-tight mb-4">
            Access Levels
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
            Operational Tiers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {plans.map((plan, i) => (
            <div 
              key={plan.name}
              className={cn(
                "scroll-reveal flex flex-col p-8 md:p-10 rounded-[2rem] border transition-all duration-500",
                plan.recommended 
                  ? "bg-[var(--pricing-inverted-bg)] border-[var(--pricing-inverted-bg)] text-[var(--pricing-inverted-text)] scale-100 md:scale-105 shadow-[0_0_50px_var(--accent-glow)] relative z-10" 
                  : "bg-[var(--surface)] border-[var(--border)] text-[var(--text)] hover:border-[var(--border-hover)]"
              )}
              style={{ transitionDelay: `${i * 150}ms`, boxShadow: plan.recommended ? '0 0 50px var(--accent-glow)' : 'var(--card-shadow)' }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--alert)] text-white font-mono text-[0.55rem] uppercase tracking-widest px-3 py-1 rounded-full">
                  Standard Issue
                </div>
              )}

              <div className="mb-8">
                <span className={cn(
                  "font-mono text-xs uppercase tracking-widest",
                  plan.recommended ? "text-[var(--text-muted)]" : "text-[var(--text-dim)]"
                )}>
                  {plan.name}
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-sans font-bold text-4xl md:text-5xl tracking-tight">
                    {plan.price}
                  </span>
                  <span className={cn(
                    "font-mono text-sm",
                    plan.recommended ? "text-[var(--text-muted)]" : "text-[var(--text-muted)]"
                  )}>
                    {plan.period}
                  </span>
                </div>
                <p className={cn(
                  "mt-4 font-sans text-sm leading-relaxed",
                  plan.recommended ? "text-[var(--text-dim)]" : "text-[var(--text-dim)]"
                )}>
                  {plan.desc}
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="text-[var(--alert)] font-mono text-sm mt-0.5">↳</span>
                    <span className={cn(
                      "font-sans text-sm",
                      plan.recommended ? "text-[var(--pricing-inverted-text)]" : "text-[var(--text)]"
                    )}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full rounded-full py-4 font-sans font-medium text-sm transition-transform duration-300 hover:scale-[1.03]",
                plan.recommended 
                  ? "bg-[var(--pricing-inverted-text)] text-[var(--pricing-inverted-bg)]" 
                  : "bg-[var(--cta-bg)] text-[var(--cta-text)]"
              )}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center flex flex-col items-center gap-6">
          <p className="font-mono text-sm text-[var(--text-dim)]">
            Not sure which tier? Book a free 15-min audit call — we'll tell you exactly what you need.
          </p>
          <button className="rounded-full bg-transparent border border-[var(--border)] text-[var(--text)] px-8 py-3 font-sans font-medium text-sm transition-all duration-300 hover:bg-[var(--surface)] hover:border-[var(--border-hover)]">
            Book Audit Call
          </button>
        </div>

      </div>
    </section>
  );
}
