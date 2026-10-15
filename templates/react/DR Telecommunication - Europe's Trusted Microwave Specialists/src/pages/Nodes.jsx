import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import RevealText from '../components/RevealText';

const stats = [
  { 
    label: 'Active Nodes', 
    value: '1,204', 
    icon: 'solar:server-square-line-duotone', 
    trend: '+12% this week', 
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20'
  },
  { 
    label: 'Global Latency', 
    value: '18ms', 
    icon: 'solar:routing-2-line-duotone', 
    trend: '-2ms optimal', 
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    border: 'border-indigo-400/20'
  },
  { 
    label: 'Edge Bandwidth', 
    value: '8.4 TB/s', 
    icon: 'solar:transfer-horizontal-line-duotone', 
    trend: 'Peak load', 
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20'
  },
];

const nodesList = [
  { region: 'US East (N. Virginia)', id: 'ae-us-east-1', status: 'Online', load: 45, uptime: '99.99%', type: 'Core' },
  { region: 'EU Central (Frankfurt)', id: 'ae-eu-central-1', status: 'Online', load: 62, uptime: '99.98%', type: 'Core' },
  { region: 'AP South (Mumbai)', id: 'ae-ap-south-1', status: 'Syncing', load: 88, uptime: '99.95%', type: 'Edge' },
  { region: 'SA East (São Paulo)', id: 'ae-sa-east-1', status: 'Online', load: 21, uptime: '99.99%', type: 'Edge' },
  { region: 'US West (Oregon)', id: 'ae-us-west-2', status: 'Maintenance', load: 0, uptime: '99.90%', type: 'Core' },
  { region: 'AP Northeast (Tokyo)', id: 'ae-ap-northeast-1', status: 'Online', load: 74, uptime: '99.99%', type: 'Edge' },
];

export default function Nodes() {
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
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div className="flex flex-col">
          <div className={clsx(baseAnim, isVisible ? visibleAnim : hiddenAnim, "delay-100 mb-4")}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] w-max">
              <iconify-icon icon="solar:global-line-duotone" class="text-indigo-300 text-sm"></iconify-icon>
              <span className="text-xs font-medium text-zinc-300 uppercase tracking-widest">Global Infrastructure</span>
            </div>
          </div>

          <div className={clsx(baseAnim, isVisible ? visibleAnim : hiddenAnim, "delay-200")}>
            <RevealText 
              text="Node Management." 
              className="text-4xl md:text-[5rem] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)] mb-4" 
              as="h1" 
            />
          </div>

          <p className={clsx(
            "text-zinc-400 max-w-xl text-base md:text-lg font-light leading-relaxed",
            baseAnim,
            isVisible ? visibleAnim : hiddenAnim,
            "delay-300"
          )}>
            Monitor, deploy, and scale your spatial web instances across our decentralized edge network. High-performance topology with sub-20ms global routing.
          </p>
        </div>

        <div className={clsx(
          "flex items-center gap-4",
          baseAnim,
          isVisible ? visibleAnim : hiddenAnim,
          "delay-[400ms]"
        )}>
          <button className="bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border border-white/10 flex items-center gap-2 backdrop-blur-md">
            <iconify-icon icon="solar:map-point-line-duotone"></iconify-icon>
            Topology Map
          </button>
          <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 tracking-tight shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2">
            <iconify-icon icon="solar:add-circle-line-duotone"></iconify-icon>
            Deploy Node
          </button>
        </div>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
        {stats.map((stat, i) => (
          <div 
            key={i}
            className={clsx(
              "relative rounded-[2rem] p-[1px] bg-gradient-to-b from-zinc-700/30 to-black/80 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.4)] group hover:-translate-y-1 transition-transform duration-500",
              baseAnim,
              isVisible ? visibleAnim : hiddenAnim
            )}
            style={{ transitionDelay: `${500 + (i * 100)}ms` }}
          >
            <div className="absolute inset-[1px] bg-zinc-900/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0"></div>
            <div className="relative z-10 p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className={clsx("w-10 h-10 rounded-2xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-500", stat.bg, stat.border, stat.color)}>
                  <iconify-icon icon={stat.icon} width="20"></iconify-icon>
                </div>
                <span className="text-xs font-medium text-zinc-500 bg-black/50 px-2.5 py-1 rounded-full border border-white/5">
                  {stat.trend}
                </span>
              </div>
              <div>
                <h4 className="text-zinc-400 text-sm font-medium mb-1">{stat.label}</h4>
                <div className="text-3xl font-geist font-light tracking-tight text-white">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nodes Grid */}
      <div className={clsx(
        "flex items-center justify-between border-b border-white/5 pb-4 mb-6",
        baseAnim,
        isVisible ? visibleAnim : hiddenAnim
      )} style={{ transitionDelay: '800ms' }}>
        <h3 className="text-xl font-geist font-light tracking-tight text-white">Active Deployments</h3>
        <div className="flex items-center gap-2 text-sm text-emerald-400">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          Network Synced
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {nodesList.map((node, i) => (
          <div 
            key={i}
            className={clsx(
              "group relative rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-sm transition-all duration-300",
              baseAnim,
              isVisible ? visibleAnim : hiddenAnim
            )}
            style={{ transitionDelay: `${900 + (i * 50)}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className={clsx(
                "w-2 h-2 rounded-full mt-2 ring-4 ring-opacity-20",
                node.status === 'Online' ? "bg-emerald-400 ring-emerald-400" :
                node.status === 'Syncing' ? "bg-amber-400 ring-amber-400 animate-pulse" :
                "bg-zinc-500 ring-zinc-500"
              )}></div>
              <div>
                <h4 className="text-white font-medium mb-1 tracking-tight flex items-center gap-2">
                  {node.region}
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-white/10 text-zinc-300 font-semibold">
                    {node.type}
                  </span>
                </h4>
                <div className="text-zinc-500 text-sm font-mono">{node.id}</div>
              </div>
            </div>

            <div className="flex items-center gap-8 md:gap-12 w-full md:w-auto">
              <div className="flex flex-col gap-2 w-full md:w-32">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400">Load</span>
                  <span className="text-white font-mono">{node.load}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className={clsx(
                      "h-full rounded-full transition-all duration-1000",
                      node.load > 80 ? "bg-rose-400" :
                      node.load > 50 ? "bg-amber-400" :
                      "bg-emerald-400"
                    )}
                    style={{ width: `${node.load}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col gap-1 w-20 text-right">
                <span className="text-xs text-zinc-400">Uptime</span>
                <span className="text-sm text-white font-mono">{node.uptime}</span>
              </div>

              <button className="hidden md:flex w-8 h-8 rounded-full bg-white/5 border border-white/10 items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                <iconify-icon icon="solar:menu-dots-bold"></iconify-icon>
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}