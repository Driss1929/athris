import { cn } from "../utils/cn";

const plans = [
  {
    name: "Recon",
    price: "$2,500",
    period: "/mo",
    desc: "Foundational content and audience growth.",
    features: [
      "12 High-Converting Assets",
      "Organic Distribution (IG, TT)",
      "Weekly Performance Brief",
      "Community Management"
    ],
    recommended: false
  },
  {
    name: "Deploy",
    price: "$5,000",
    period: "/mo",
    desc: "Full-scale media operations and paid scaling.",
    features: [
      "30 High-Converting Assets",
      "Omnichannel Distribution",
      "Paid Media Management (Meta/TT)",
      "A/B Creative Testing",
      "Real-time Telemetry Dashboard"
    ],
    recommended: true
  },
  {
    name: "Command",
    price: "Custom",
    period: "",
    desc: "Enterprise-grade autonomous systems.",
    features: [
      "Unlimited Creative Production",
      "Influencer Network Deployment",
      "Advanced Algorithmic Scaling",
      "Dedicated Operations Lead",
      "Custom Data Infrastructure"
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-24 md:py-32 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
            Access Levels
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6B6B6B]">
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
                  ? "bg-white border-white text-[#0A0A0A] scale-100 md:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.1)] relative z-10" 
                  : "bg-[#141414] border-white/10 text-white hover:border-white/20"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E53E3E] text-white font-mono text-[0.55rem] uppercase tracking-widest px-3 py-1 rounded-full">
                  Standard Issue
                </div>
              )}

              <div className="mb-8">
                <span className={cn(
                  "font-mono text-xs uppercase tracking-widest",
                  plan.recommended ? "text-[#6B6B6B]" : "text-[#A0A0A0]"
                )}>
                  {plan.name}
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-sans font-bold text-4xl md:text-5xl tracking-tight">
                    {plan.price}
                  </span>
                  <span className={cn(
                    "font-mono text-sm",
                    plan.recommended ? "text-[#6B6B6B]" : "text-[#6B6B6B]"
                  )}>
                    {plan.period}
                  </span>
                </div>
                <p className={cn(
                  "mt-4 font-sans text-sm leading-relaxed",
                  plan.recommended ? "text-[#3A3A3A]" : "text-[#A0A0A0]"
                )}>
                  {plan.desc}
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="text-[#E53E3E] font-mono text-sm mt-0.5">↳</span>
                    <span className={cn(
                      "font-sans text-sm",
                      plan.recommended ? "text-[#141414]" : "text-[#F5F5F5]"
                    )}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full rounded-full py-4 font-sans font-medium text-sm transition-transform duration-300 hover:scale-[1.03]",
                plan.recommended 
                  ? "bg-[#0A0A0A] text-white" 
                  : "bg-white text-[#0A0A0A]"
              )}>
                {plan.name === "Command" ? "Request Briefing" : "Initialize"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
