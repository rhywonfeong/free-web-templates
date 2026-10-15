import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center max-w-4xl w-full px-6 py-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
      
      <div className="relative mb-12 group cursor-pointer" onClick={() => navigate('/play')}>
        <div className="absolute inset-0 bg-cyan-500/20 rounded-[3rem] blur-3xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>
        <div className="relative glass-panel p-1 border border-white/10 rounded-[2.5rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1520101243542-6e2c3328ce37?w=800&q=80" 
            alt="Offroad Terrain" 
            className="w-[600px] h-[300px] object-cover rounded-[2.2rem] opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/80 to-transparent">
             <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-white/30">
               <iconify-icon icon="solar:play-bold" style={{ color: 'white', fontSize: '36px', marginLeft: '6px' }}></iconify-icon>
             </div>
          </div>
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
        Master the <span className="text-gradient">Infinite Terrain</span>
      </h1>
      
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 font-light">
        Experience physics-based offroad driving. Balance speed and momentum across procedurally generated hills without running out of fuel.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => navigate('/play')}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <iconify-icon icon="solar:steering-wheel-linear" style={{ fontSize: '24px' }}></iconify-icon>
          Start Engine
        </button>
        <div className="px-8 py-4 rounded-full glass-panel text-slate-300 font-medium text-lg flex items-center justify-center gap-3">
          <iconify-icon icon="solar:keyboard-linear" style={{ fontSize: '24px' }}></iconify-icon>
          Use Arrow Keys to Drive
        </div>
      </div>
    </div>
  );
}