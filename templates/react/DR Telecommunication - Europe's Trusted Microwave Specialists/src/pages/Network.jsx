import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import RevealText from '../components/RevealText';

const activityLogs = [
  { id: 1, time: '00:00:12', event: 'TCP Handshake Completed', region: 'us-east-1', status: 'success' },
  { id: 2, time: '00:00:08', event: 'Quantum Path Reroute', region: 'eu-central-1', status: 'info' },
  { id: 3, time: '00:00:04', event: 'Edge Node Synced', region: 'ap-northeast-1', status: 'success' },
  { id: 4, time: '00:00:02', event: 'Subnet Latency Spike', region: 'sa-east-1', status: 'warning' },
  { id: 5, time: '00:00:01', event: 'Packet Loss Recovered', region: 'ap-south-1', status: 'success' },
];

const NetworkMap = () => {
  return (
    <div className="relative w-full aspect-[2/1] min-h-[300px] md:min-h-[500px] rounded-[2rem] bg-gradient-to-b from-zinc-900/80 to-black border border-white/5 overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGgtdi0waC16IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
      
      {/* Dynamic Data Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Core Links */}
        <path d="M 20% 30% Q 35% 50% 50% 40%" fill="none" stroke="url(#lineGrad)" strokeWidth="2" className="animate-[dash_3s_linear_infinite]" strokeDasharray="10 10" />
        <path d="M 50% 40% Q 65% 60% 80% 50%" fill="none" stroke="url(#lineGrad)" strokeWidth="2" className="animate-[dash_4s_linear_infinite_reverse]" strokeDasharray="15 15" />
        <path d="M 20% 70% Q 40% 60% 50% 40%" fill="none" stroke="url(#lineGrad2)" strokeWidth="1.5" className="animate-[dash_2.5s_linear_infinite]" strokeDasharray="8 8" />
        <path d="M 80% 20% Q 65% 30% 50% 40%" fill="none" stroke="url(#lineGrad2)" strokeWidth="1.5" className="animate-[dash_3.5s_linear_infinite_reverse]" strokeDasharray="12 12" />
        
        {/* Static Faded Links */}
        <line x1="20%" y1="30%" x2="20%" y2="70%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="80%" y1="20%" x2="80%" y2="50%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      </svg>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -40; }
        }
      `}</style>

      {/* Map Nodes */}
      <div className="absolute top-[30%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-crosshair">
        <div className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] border-2 border-white/20 z-10 relative">
          <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-75"></div>
        </div>
        <span className="mt-2 text-[10px] uppercase tracking-widest text-indigo-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">US-East</span>
      </div>

      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-crosshair">
        <div className="w-5 h-5 rounded-full bg-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.8)] border-2 border-white/20 z-10 relative">
          <div className="absolute inset-0 rounded-full bg-emerald-300 animate-ping opacity-50 animation-delay-1000"></div>
        </div>
        <span className="mt-2 text-[10px] uppercase tracking-widest text-emerald-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">EU-Central</span>
      </div>

      <div className="absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-crosshair">
        <div className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] border-2 border-white/20 z-10 relative">
          <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-75 animation-delay-500"></div>
        </div>
        <span className="mt-2 text-[10px] uppercase tracking-widest text-indigo-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">AP-Northeast</span>
      </div>

      <div className="absolute top-[70%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-crosshair">
        <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)] border-2 border-white/20 z-10 relative"></div>
        <span className="mt-2 text-[10px] uppercase tracking-widest text-amber-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">SA-East</span>
      </div>

      <div className="absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-crosshair">
        <div className="w-3 h-3 rounded-full bg-zinc-400 shadow-[0_0_15px_rgba(161,161,170,0.8)] border-2 border-white/20 z-10 relative"></div>
        <span className="mt-2 text-[10px] uppercase tracking-widest text-zinc-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">AP-South</span>
      </div>

      {/* Network Status Overlay */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
        <div className="flex gap-4">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 md:p-4 flex flex-col gap-1 pointer-events-auto shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Total Bandwidth</span>
            <span className="text-white font-mono font-light text-lg md:text-xl tracking-tight">142.8 TB/s</span>
          </div>
          <div className="hidden md:flex bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 flex-col gap-1 pointer-events-auto shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Avg Latency</span>
            <span className="text-emerald-400 font-mono font-light text-xl tracking-tight">18.4 ms</span>
          </div>
        </div>
        <div className="bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium uppercase tracking-widest backdrop-blur-md pointer-events-auto shadow-[0_0_15px_rgba(52,211,153,0.1)]">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
          System Optimal
        </div>
      </div>
    </div>
  );
};

export default function Network() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const baseAnim = "transition-all duration-1000 ease-out";
  const hiddenAnim = "opacity-0 translate-y-8 blur-md";
  const visibleAnim = "opacity-100 translate-y-0 blur-0";

  return (
    <div 
      ref={containerRef}
      className="min-h-screen pt-32 px-6 pb-24 max-w-[1200px] mx-auto flex flex-col w-full"
    >
      {/* Header */}
      <div className="flex flex-col mb-12">
        <div className={clsx(baseAnim, isVisible ? visibleAnim : hiddenAnim, "delay-100 mb-4")}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 backdrop-blur-md border border-indigo-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] w-max">
            <iconify-icon icon="solar:routing-3-line-duotone" class="text-indigo-400 text-sm"></iconify-icon>
            <span className="text-xs font-medium text-indigo-300 uppercase tracking-widest">Routing Layer</span>
          </div>
        </div>

        <div className={clsx(baseAnim, isVisible ? visibleAnim : hiddenAnim, "delay-200")}>
          <RevealText 
            text="Network Topography." 
            className="text-4xl md:text-[5rem] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)] mb-4" 
            as="h1" 
          />
        </div>

        <p className={clsx(
          "text-zinc-400 max-w-2xl text-base md:text-lg font-light leading-relaxed",
          baseAnim,
          isVisible ? visibleAnim : hiddenAnim,
          "delay-300"
        )}>
          Real-time visualization of DRT's distributed quantum routing. Monitor spatial data propagation and edge network integrity across global infrastructure clusters.
        </p>
      </div>

      {/* Main Map Visualization */}
      <div className={clsx(baseAnim, isVisible ? visibleAnim : hiddenAnim, "delay-[400ms] mb-8")}>
        <NetworkMap />
      </div>

      {/* Lower Section: Activity and Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Live Activity Feed */}
        <div className={clsx(
          "lg:col-span-2 relative rounded-[2rem] p-[1px] bg-gradient-to-b from-zinc-700/30 to-black/80 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.4)]",
          baseAnim,
          isVisible ? visibleAnim : hiddenAnim
        )} style={{ transitionDelay: '500ms' }}>
          <div className="absolute inset-[1px] bg-zinc-900/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0"></div>
          <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <h3 className="text-lg font-geist tracking-tight text-white flex items-center gap-2">
                <iconify-icon icon="solar:history-line-duotone" class="text-zinc-400"></iconify-icon>
                Live Event Stream
              </h3>
              <span className="text-xs font-mono text-zinc-500 bg-black/50 px-2 py-1 rounded border border-white/5">
                Auto-updating
              </span>
            </div>
            
            <div className="flex flex-col gap-1 flex-grow">
              {activityLogs.map((log) => (
                <div key={log.id} className="group flex items-center gap-4 py-3 border-b border-white/[0.02] hover:bg-white/[0.02] rounded-lg px-2 transition-colors">
                  <span className="text-xs font-mono text-zinc-500 min-w-[70px]">{log.time}</span>
                  
                  <div className={clsx(
                    "w-1.5 h-1.5 rounded-full flex-shrink-0",
                    log.status === 'success' ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" :
                    log.status === 'warning' ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" :
                    "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.6)]"
                  )}></div>
                  
                  <span className="text-sm text-zinc-300 font-light flex-grow">{log.event}</span>
                  
                  <span className="hidden md:block text-xs font-mono text-zinc-500 uppercase px-2 py-0.5 bg-black/30 rounded border border-white/5">
                    {log.region}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Network Metrics Cards */}
        <div className="flex flex-col gap-6">
          <div className={clsx(
            "relative rounded-[2rem] p-[1px] bg-gradient-to-b from-zinc-700/30 to-black/80 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.4)] flex-grow",
            baseAnim,
            isVisible ? visibleAnim : hiddenAnim
          )} style={{ transitionDelay: '600ms' }}>
            <div className="absolute inset-[1px] bg-zinc-900/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0"></div>
            <div className="relative z-10 p-6 flex flex-col justify-center h-full gap-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-2">
                <iconify-icon icon="solar:shield-network-line-duotone" width="20"></iconify-icon>
              </div>
              <h4 className="text-sm text-zinc-400 font-medium">Protocol Security</h4>
              <div className="text-3xl font-geist font-light tracking-tight text-white">Quantum Encrypted</div>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">End-to-end 256-bit encryption active across all inter-node communication channels.</p>
            </div>
          </div>

          <div className={clsx(
            "relative rounded-[2rem] p-[1px] bg-gradient-to-b from-zinc-700/30 to-black/80 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.4)] flex-grow",
            baseAnim,
            isVisible ? visibleAnim : hiddenAnim
          )} style={{ transitionDelay: '700ms' }}>
            <div className="absolute inset-[1px] bg-zinc-900/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0"></div>
            <div className="relative z-10 p-6 flex flex-col justify-center h-full gap-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                <iconify-icon icon="solar:graph-up-line-duotone" width="20"></iconify-icon>
              </div>
              <h4 className="text-sm text-zinc-400 font-medium">Render Capacity</h4>
              <div className="text-3xl font-geist font-light tracking-tight text-white">98.5% Available</div>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">Massive headroom for deploying heavy spatial environments instantly.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}