import { useEffect, useState } from "react";

export default function Constellation() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const nodes = [
    { id: "IG", x: 20, y: 30, label: "Instagram" },
    { id: "TT", x: 80, y: 20, label: "TikTok" },
    { id: "YT", x: 85, y: 70, label: "YouTube" },
    { id: "X", x: 15, y: 80, label: "X/Twitter" },
    { id: "META", x: 50, y: 15, label: "Meta Ads" },
    { id: "LI", x: 50, y: 85, label: "LinkedIn" },
  ];

  return (
    <section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid-overlay opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center">
        
        {/* Network Visualization */}
        <div className="relative w-full max-w-[800px] aspect-video mb-16">
          {mounted && (
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                </linearGradient>
              </defs>
              
              {/* Connections */}
              {nodes.map((node, i) => (
                <path
                  key={`path-${i}`}
                  d={`M 50 50 Q ${node.x} 50 ${node.x} ${node.y}`}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="0.2"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.5}s`, animationDuration: "3s" }}
                />
              ))}

              {/* Data Packets */}
              {nodes.map((node, i) => (
                <circle
                  key={`packet-${i}`}
                  r="0.5"
                  fill="#E53E3E"
                  className="opacity-0"
                >
                  <animateMotion
                    dur={`${3 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                    path={`M 50 50 Q ${node.x} 50 ${node.x} ${node.y}`}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${3 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>
          )}

          {/* Nodes HTML Overlay */}
          <div className="absolute inset-0">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.15)] animate-pulse">
                <span className="font-sans font-bold text-[#0A0A0A] text-xl">A</span>
              </div>
              <span className="font-mono text-[0.5rem] tracking-widest uppercase text-white bg-[#141414] px-2 py-1 rounded border border-white/10">
                ATHRIS CORE
              </span>
            </div>

            {/* Satellite Nodes */}
            {nodes.map((node, i) => (
              <div
                key={node.id}
                className="absolute flex flex-col items-center gap-2"
                style={{ 
                  left: `${node.x}%`, 
                  top: `${node.y}%`,
                  transform: `translate(-50%, -50%)`,
                  animation: `float ${3 + i % 3}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                <div className="w-8 h-8 rounded-full bg-[#141414] border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  <span className="font-mono text-[0.45rem] text-white">{node.id}</span>
                </div>
                <span className="font-mono text-[0.45rem] tracking-widest uppercase text-[#6B6B6B]">
                  {node.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0px); }
          100% { transform: translate(-50%, -50%) translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
