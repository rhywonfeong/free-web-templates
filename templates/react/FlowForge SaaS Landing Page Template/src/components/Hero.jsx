import React, { useState } from 'react';
import ThreeCanvas from './ThreeCanvas';

const Hero = () => {
  const [distortion, setDistortion] = useState(0.6);
  const [detail, setDetail] = useState(0.9);
  const [speed, setSpeed] = useState(0.1);
  const [opacity, setOpacity] = useState(0.8);
  const [color, setColor] = useState('#d4d4d8'); // Default zinc color

  return (
    <section className="relative w-full h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 pointer-events-none grid-overlay z-0"></div>
      
      {/* WebGL Canvas Background */}
      <ThreeCanvas 
        distortion={distortion} 
        detail={detail} 
        speed={speed} 
        opacity={opacity} 
        color={color} 
      />
      
      {/* Subtle Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <header className="relative z-20 flex justify-between items-start animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 flex flex-col items-center justify-center rounded bg-zinc-100 text-zinc-950 font-mono text-xs font-medium shadow-sm">
              FF
            </div>
            <span className="text-lg tracking-tight text-zinc-100 font-medium">FlowForge</span>
          </div>
        </div>

        <nav className="pointer-events-auto hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Capabilities</a>
          <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Architecture</a>
          <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Pricing</a>
          <button className="text-sm px-4 py-1.5 bg-white text-black font-medium hover:bg-zinc-200 transition-colors rounded-full shadow-sm">
            Book Demo
          </button>
        </nav>
      </header>

      <div className="relative z-20 w-full max-w-4xl mt-auto md:mt-0 md:top-[-8%] animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Operational Intelligence</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tighter font-medium text-balance">
          Automate<br />
          <span className="text-zinc-600">Everything.</span>
        </h1>
        
        <p className="mt-8 max-w-md text-base md:text-lg text-zinc-400 font-light leading-relaxed">
          From backend workflows to full operational systems, we eliminate manual friction. Unlocking true operational velocity.
        </p>

        <div className="mt-10 flex items-center gap-6 pointer-events-auto">
          <button className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md hover:bg-zinc-200 transition-colors duration-200 font-medium text-sm shadow-sm">
            Initialize System
            <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: '1.5' }} className="text-base group-hover:translate-x-0.5 transition-transform"></iconify-icon>
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-mono text-xs text-zinc-300 tracking-wide">System Online</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-auto absolute bottom-8 right-6 md:right-12 hidden lg:flex items-center animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
        <div className="w-48 tech-glass rounded-xl p-4 relative z-10 flex flex-col gap-3 mr-[-8px]">
          <div className="flex items-center gap-2 mb-1">
            <iconify-icon icon="solar:server-square-linear" style={{ strokeWidth: '1.5' }} className="text-zinc-500 text-sm"></iconify-icon>
            <span className="text-xs font-mono text-zinc-300">WSS_Link.01</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-zinc-500">
              <span>Packets</span><span className="text-zinc-300">14.2k/s</span>
            </div>
            <div className="flex justify-between text-xs font-mono text-zinc-500">
              <span>Latency</span><span className="text-zinc-300">8ms</span>
            </div>
          </div>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-900 border border-zinc-600 rounded-full z-20"></div>
        </div>

        <svg className="w-10 h-2 overflow-visible relative z-0">
          <path d="M0,4 C20,4 20,4 40,4" stroke="#52525b" strokeWidth="1" fill="none" strokeDasharray="2 2" className="animate-flow"></path>
        </svg>

        <div className="w-[280px] tech-glass rounded-xl ml-[-8px] relative z-10 border-white/10">
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-900 border border-zinc-600 rounded-full z-20"></div>

          <div className="border-b border-white/5 px-5 py-3 flex justify-between items-center bg-white/[0.02] rounded-t-xl">
            <span className="font-mono text-xs text-zinc-200">System Calibration</span>
            <iconify-icon icon="solar:settings-linear" style={{ strokeWidth: '1.5' }} className="text-zinc-500"></iconify-icon>
          </div>

          <div className="p-5 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono text-zinc-500">
                <span>Flux Dynamics</span>
                <span className="text-zinc-300">{distortion}</span>
              </div>
              <input 
                type="range" 
                min="0" max="2.0" step="0.1" 
                value={distortion} 
                onChange={(e) => setDistortion(parseFloat(e.target.value))} 
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono text-zinc-500">
                <span>Processing Threads</span>
                <span className="text-zinc-300">{detail}</span>
              </div>
              <input 
                type="range" 
                min="0.1" max="2.0" step="0.1" 
                value={detail} 
                onChange={(e) => setDetail(parseFloat(e.target.value))} 
              />
            </div>

            <div className="grid grid-cols-2 gap-6 pt-3 border-t border-white/5">
              <div className="space-y-3">
                 <div className="flex justify-between text-xs font-mono text-zinc-500">
                  <span>Clock Rate</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="0.5" step="0.01" 
                  value={speed} 
                  onChange={(e) => setSpeed(parseFloat(e.target.value))} 
                />
              </div>
              <div className="space-y-3">
                 <div className="flex justify-between text-xs font-mono text-zinc-500">
                  <span>Density</span>
                </div>
                <input 
                  type="range" 
                  min="0.1" max="1.0" step="0.05" 
                  value={opacity} 
                  onChange={(e) => setOpacity(parseFloat(e.target.value))} 
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-500">Energy Profile</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setColor('#f97316')}
                  className="w-3.5 h-3.5 rounded-full bg-[#f97316] ring-1 ring-offset-2 ring-offset-[#09090b] ring-[#f97316]/50 hover:ring-white/50 transition-all"
                ></button>
                <button 
                  onClick={() => setColor('#3b82f6')}
                  className="w-3.5 h-3.5 rounded-full bg-[#3b82f6] border border-transparent hover:ring-1 hover:ring-offset-2 hover:ring-offset-[#09090b] hover:ring-white/50 transition-all"
                ></button>
                <button 
                  onClick={() => setColor('#10b981')}
                  className="w-3.5 h-3.5 rounded-full bg-[#10b981] border border-transparent hover:ring-1 hover:ring-offset-2 hover:ring-offset-[#09090b] hover:ring-white/50 transition-all"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 md:left-12 flex flex-col gap-1 opacity-50 pointer-events-none">
        <span className="font-mono text-xs text-zinc-500">Protocol v4.0.1</span>
        <span className="font-mono text-xs text-zinc-500">Encrypted Tunnel</span>
      </div>
    </section>
  );
};

export default Hero;