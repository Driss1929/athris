import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

function SwarmVisualizer() {
  return (
    <div className="relative w-full h-48 bg-[var(--bg)] rounded-xl overflow-hidden flex items-center justify-center border border-[var(--border)]">
      <div className="absolute inset-0 bg-grid-overlay opacity-20" />
      
      {/* Central Hub */}
      <div className="relative z-10 w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-[0_0_30px_var(--accent-glow)]">
        <span className="font-sans font-bold text-[var(--bg)] text-xs">A</span>
      </div>

      {/* Orbiting Nodes */}
      {[
        { r: 40, s: 8, l: "IG" },
        { r: 60, s: 12, l: "TT" },
        { r: 80, s: 15, l: "YT" },
        { r: 100, s: 20, l: "X" },
      ].map((node, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)]"
          style={{ width: node.r * 2, height: node.r * 2 }}
        >
          <div
            className="absolute inset-0"
            style={{ animation: `spin ${node.s}s linear infinite` }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--surface)] border border-[var(--border-hover)] flex items-center justify-center"
            >
              <span className="font-mono text-[0.45rem] text-[var(--text)]" style={{ animation: `spin-reverse ${node.s}s linear infinite` }}>
                {node.l}
              </span>
            </div>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
      `}</style>
    </div>
  );
}

function PerformanceFeed() {
  const logs = [
    "[DEPLOY] Campaign v3.2 pushed live",
    "[PERF] Engagement ↑ 18%",
    "[ROAS] 4.2x on META — exceeding target",
    "[CONTENT] 24 assets queued for distribution",
    "[ALERT] Viral threshold reached on TT",
  ];
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleLogs(prev => [...prev.slice(-4), logs[i % logs.length]]);
      i++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden p-4 border flex flex-col justify-end" style={{ backgroundColor: 'var(--status-pill-bg)', borderColor: 'var(--status-pill-border)' }}>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className="font-mono text-[0.5rem] uppercase tracking-widest" style={{ color: 'var(--status-pill-text)' }}>Live Feed</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--alert)] animate-ping-slow" />
      </div>
      
      <div className="flex flex-col gap-2 font-mono text-[0.65rem]" style={{ color: 'var(--status-pill-text)' }}>
        {visibleLogs.map((log, i) => (
          <div 
            key={i} 
            className="animate-in slide-in-from-bottom-2 fade-in duration-300"
            style={{ opacity: (i + 1) / visibleLogs.length }}
          >
            <span style={{ color: 'var(--status-pill-text)' }}>{`> `}</span>
            {log.includes("ALERT") || log.includes("ROAS") ? (
              <span className="text-[#F5F5F5]">{log}</span>
            ) : (
              log
            )}
          </div>
        ))}
        <div className="flex items-center gap-1">
          <span style={{ color: 'var(--status-pill-text)' }}>{`> `}</span>
          <span className="w-1.5 h-3 bg-[#F5F5F5] animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function ContentScheduler() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [activeCell, setActiveCell] = useState(2);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextCell = Math.floor(Math.random() * 7);
      
      // Move cursor
      setCursorPos({ x: 20 + nextCell * 10, y: 40 });
      
      setTimeout(() => {
        setClicked(true);
        setActiveCell(nextCell);
        setTimeout(() => setClicked(false), 200);
      }, 500);

      setTimeout(() => {
        setCursorPos({ x: 80, y: 80 }); // Move to publish button
        setTimeout(() => {
          setClicked(true);
          setTimeout(() => setClicked(false), 200);
        }, 500);
      }, 1500);

    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 bg-[var(--bg)] rounded-xl overflow-hidden p-6 border border-[var(--border)] flex flex-col items-center justify-center">
      <div className="grid grid-cols-7 gap-2 w-full max-w-[200px] mb-6">
        {days.map((d, i) => (
          <div 
            key={i} 
            className={cn(
              "aspect-square rounded flex items-center justify-center text-[0.5rem] font-mono transition-colors duration-300",
              i === activeCell ? "bg-[var(--accent)] text-[var(--bg)]" : "bg-[var(--surface)] text-[var(--text-muted)]"
            )}
          >
            {d}
          </div>
        ))}
      </div>
      
      <div className="w-24 h-6 rounded bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
        <span className="font-mono text-[0.5rem] text-[var(--text-dim)] uppercase tracking-widest">Publish</span>
      </div>

      {/* SVG Cursor */}
      <svg 
        className={cn(
          "absolute w-4 h-4 text-[var(--text)] transition-all duration-500 ease-out z-20",
          clicked && "scale-75 text-[var(--alert)]"
        )}
        style={{ left: `${cursorPos.x}%`, top: `${cursorPos.y}%` }}
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      </svg>
    </div>
  );
}

export default function CampaignModules() {
  const modules = [
    {
      id: "01",
      title: "Paid Media Operations",
      desc: "Algorithmic ad buying across Meta, TikTok, and Google. We don't guess; we engineer ROAS.",
      deliverables: [
        "Full META + TikTok ad management",
        "Creative testing (8-12 variants/month)",
        "Weekly ROAS & spend reports",
        "Retargeting funnel architecture"
      ],
      ui: <SwarmVisualizer />
    },
    {
      id: "02",
      title: "Content Production System",
      desc: "High-volume, platform-native creative systems designed to capture attention and convert.",
      deliverables: [
        "30-90 short-form videos/month",
        "Platform-native editing (TT, Reels, Shorts)",
        "Content calendar + approval workflow",
        "Trend monitoring & reactive content"
      ],
      ui: <PerformanceFeed />
    },
    {
      id: "03",
      title: "Strategic Growth Architecture",
      desc: "Scalable creator networks deployed to amplify your brand narrative authentically.",
      deliverables: [
        "Audience persona mapping",
        "Competitor analysis dashboard",
        "Influencer/UGC sourcing & management",
        "Monthly strategy sessions (recorded)"
      ],
      ui: <ContentScheduler />
    }
  ];

  return (
    <section id="services" className="w-full py-24 md:py-32 px-6 md:px-16 bg-[var(--bg)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <div 
              key={mod.id}
              className="scroll-reveal group flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-6 transition-all duration-500 hover:border-[var(--border-hover)] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 150}ms`, boxShadow: 'var(--card-shadow)' }}
            >
              <div className="font-mono text-[0.65rem] text-[var(--text-muted)] mb-6">
                {mod.id} — {mod.title.toUpperCase()}
              </div>
              
              {mod.ui}

              <div className="mt-8">
                <h3 className="font-sans font-bold text-xl text-[var(--text)] mb-2">{mod.title}</h3>
                <p className="font-sans text-sm text-[var(--text-dim)] leading-relaxed mb-4">{mod.desc}</p>
                <ul className="flex flex-col gap-2 font-mono text-[0.75rem] text-[var(--text-muted)]">
                  {mod.deliverables.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[var(--alert)]">↳</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
