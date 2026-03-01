import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

function SwarmVisualizer() {
  return (
    <div className="relative w-full h-48 bg-[#0A0A0A] rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
      <div className="absolute inset-0 bg-grid-overlay opacity-20" />
      
      {/* Central Hub */}
      <div className="relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
        <span className="font-sans font-bold text-[#0A0A0A] text-xs">A</span>
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          style={{ width: node.r * 2, height: node.r * 2 }}
        >
          <div
            className="absolute inset-0"
            style={{ animation: `spin ${node.s}s linear infinite` }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#141414] border border-white/20 flex items-center justify-center"
            >
              <span className="font-mono text-[0.45rem] text-white" style={{ animation: `spin-reverse ${node.s}s linear infinite` }}>
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
    <div className="relative w-full h-48 bg-[#0A0A0A] rounded-xl overflow-hidden p-4 border border-white/5 flex flex-col justify-end">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className="font-mono text-[0.5rem] text-[#6B6B6B] uppercase tracking-widest">Live Feed</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] animate-ping-slow" />
      </div>
      
      <div className="flex flex-col gap-2 font-mono text-[0.65rem] text-[#A0A0A0]">
        {visibleLogs.map((log, i) => (
          <div 
            key={i} 
            className="animate-in slide-in-from-bottom-2 fade-in duration-300"
            style={{ opacity: (i + 1) / visibleLogs.length }}
          >
            <span className="text-[#6B6B6B]">{`> `}</span>
            {log.includes("ALERT") || log.includes("ROAS") ? (
              <span className="text-white">{log}</span>
            ) : (
              log
            )}
          </div>
        ))}
        <div className="flex items-center gap-1">
          <span className="text-[#6B6B6B]">{`> `}</span>
          <span className="w-1.5 h-3 bg-white animate-pulse" />
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
    <div className="relative w-full h-48 bg-[#0A0A0A] rounded-xl overflow-hidden p-6 border border-white/5 flex flex-col items-center justify-center">
      <div className="grid grid-cols-7 gap-2 w-full max-w-[200px] mb-6">
        {days.map((d, i) => (
          <div 
            key={i} 
            className={cn(
              "aspect-square rounded flex items-center justify-center text-[0.5rem] font-mono transition-colors duration-300",
              i === activeCell ? "bg-white text-[#0A0A0A]" : "bg-[#141414] text-[#6B6B6B]"
            )}
          >
            {d}
          </div>
        ))}
      </div>
      
      <div className="w-24 h-6 rounded bg-[#141414] border border-white/10 flex items-center justify-center">
        <span className="font-mono text-[0.5rem] text-[#A0A0A0] uppercase tracking-widest">Publish</span>
      </div>

      {/* SVG Cursor */}
      <svg 
        className={cn(
          "absolute w-4 h-4 text-white transition-all duration-500 ease-out z-20",
          clicked && "scale-75 text-[#E53E3E]"
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
      title: "Paid Media Management",
      desc: "Algorithmic ad buying across Meta, TikTok, and Google. We don't guess; we engineer ROAS.",
      ui: <SwarmVisualizer />
    },
    {
      id: "02",
      title: "Content Production",
      desc: "High-volume, platform-native creative systems designed to capture attention and convert.",
      ui: <PerformanceFeed />
    },
    {
      id: "03",
      title: "Influencer Partnerships",
      desc: "Scalable creator networks deployed to amplify your brand narrative authentically.",
      ui: <ContentScheduler />
    }
  ];

  return (
    <section id="services" className="w-full py-24 md:py-32 px-6 md:px-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <div 
              key={mod.id}
              className="scroll-reveal group flex flex-col bg-[#141414] border border-white/5 rounded-[2rem] p-6 transition-all duration-500 hover:border-white/20 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="font-mono text-[0.65rem] text-[#6B6B6B] mb-6">
                {mod.id} — {mod.title.toUpperCase()}
              </div>
              
              {mod.ui}

              <div className="mt-8">
                <h3 className="font-sans font-bold text-xl text-white mb-2">{mod.title}</h3>
                <p className="font-sans text-sm text-[#A0A0A0] leading-relaxed">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
