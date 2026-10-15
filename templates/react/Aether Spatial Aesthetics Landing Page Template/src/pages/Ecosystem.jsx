import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import RevealText from '../components/RevealText';
import Integrations from '../components/Integrations';

const ecosystemItems = [
  {
    title: "Spatial Runtime",
    description: "High-performance WebGL rendering engine optimized for distributed node networks and edge compute.",
    icon: "solar:cpu-line-duotone",
    tag: "Core Infrastructure",
    status: "Active"
  },
  {
    title: "Aether React",
    description: "Declarative spatial components for React. Seamlessly integrate 3D interfaces into your existing web apps.",
    icon: "solar:atom-line-duotone",
    tag: "Frontend SDK",
    status: "v2.0 Beta"
  },
  {
    title: "Quantum State",
    description: "Real-time state synchronization across global nodes with sub-20ms latency and conflict resolution.",
    icon: "solar:database-line-duotone",
    tag: "Data Layer",
    status: "Active"
  },
  {
    title: "Node Mesh",
    description: "Decentralized deployment network. Push your spatial environments to the edge with a single command.",
    icon: "solar:server-square-line-duotone",
    tag: "Deployment",
    status: "Active"
  },
  {
    title: "Asset Pipeline",
    description: "Automated optimization for 3D models, textures, and spatial audio tailored for web delivery.",
    icon: "solar:box-minimalistic-line-duotone",
    tag: "Tooling",
    status: "Active"
  },
  {
    title: "Community Hub",
    description: "Open-source spatial templates, environments, and architectural components built by the Aether community.",
    icon: "solar:users-group-two-rounded-line-duotone",
    tag: "Community",
    status: "Growing"
  }
];

export default function Ecosystem() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
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
      <div className={clsx(baseAnim, isVisible ? visibleAnim : hiddenAnim, "delay-100 mb-4")}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mb-6 w-max">
          <iconify-icon icon="solar:planet-3-linear" class="text-indigo-300 text-sm"></iconify-icon>
          <span className="text-xs font-medium text-zinc-300 uppercase tracking-widest">Platform & Tools</span>
        </div>
      </div>

      <div className={clsx(baseAnim, isVisible ? visibleAnim : hiddenAnim, "delay-200")}>
        <RevealText 
          text="The Aether Ecosystem." 
          className="text-4xl md:text-[5rem] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)] mb-6" 
          as="h1" 
        />
      </div>

      <p className={clsx(
        "text-zinc-400 max-w-2xl text-lg mb-16 font-light leading-relaxed",
        baseAnim,
        isVisible ? visibleAnim : hiddenAnim,
        "delay-300"
      )}>
        A comprehensive suite of tools, infrastructure, and community resources designed to power the next generation of spatial web experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecosystemItems.map((item, i) => (
          <div 
            key={i} 
            className={clsx(
              "relative group rounded-[2rem] p-[1px] bg-gradient-to-b from-zinc-600/30 via-zinc-800/10 to-black/80 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-transform duration-500",
              baseAnim,
              isVisible ? visibleAnim : hiddenAnim
            )}
            style={{ transitionDelay: `${400 + (i * 100)}ms` }}
          >
            <div className="absolute inset-[1px] bg-gradient-to-b from-zinc-800/90 to-zinc-950/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]"></div>
            
            <div className="relative z-10 p-8 flex flex-col h-full min-h-[280px]">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-zinc-700 to-zinc-800 flex items-center justify-center border border-zinc-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-indigo-300 group-hover:scale-110 transition-transform duration-500">
                  <iconify-icon icon={item.icon} width="24"></iconify-icon>
                </div>
                <span className={clsx(
                  "text-xs font-medium px-2.5 py-1 rounded-full border",
                  item.status === 'Active' 
                    ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
                    : item.status === 'Growing'
                    ? "text-amber-400 bg-amber-400/10 border-amber-400/20"
                    : "text-indigo-400 bg-indigo-400/10 border-indigo-400/20"
                )}>
                  {item.status}
                </span>
              </div>
              
              <div className="flex flex-col flex-grow">
                <span className="text-xs font-medium text-indigo-400/80 uppercase tracking-wider mb-2">{item.tag}</span>
                <h3 className="text-2xl font-geist font-light tracking-tight text-white mb-3">{item.title}</h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={clsx(
        "mt-32 border-t border-white/5 pt-20",
        baseAnim,
        isVisible ? visibleAnim : hiddenAnim
      )} style={{ transitionDelay: '800ms' }}>
        <Integrations />
      </div>
    </div>
  );
}