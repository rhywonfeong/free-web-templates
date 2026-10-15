import React, { useState, useEffect } from 'react';
import { Play, ChevronDown } from 'lucide-react';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) * -0.015,
        y: (e.clientY - window.innerHeight / 2) * -0.015
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex overflow-hidden scanlines pt-20 relative perspective-[2000px] items-center justify-center" id="hero">
      
      {/* Cinematic Realistic 3D Environment Objects */}
      <div id="env-objects" className="absolute inset-0 pointer-events-none z-0">
        
        {/* Floating Clapperboard */}
        <div 
          className="absolute top-[15%] left-[10%] w-40 h-32 animate-float-complex drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
          style={{ transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px) rotate(-15deg)` }}
        >
          {/* Clapper Hinge / Top stick */}
          <div className="w-full h-8 bg-zinc-900 rounded-t-md border-b-2 border-black flex overflow-hidden transform origin-bottom-left rotate-[-20deg] relative z-10">
            <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_15px,#000_15px,#000_30px)] opacity-90"></div>
          </div>
          {/* Main Board */}
          <div className="w-full h-24 bg-zinc-900 rounded-b-md border border-zinc-800 p-2 shadow-inner">
            <div className="w-full h-full border border-zinc-700/50 rounded flex flex-col p-1 opacity-60">
              <div className="flex gap-2 w-full h-1/2 border-b border-zinc-700/50 pb-1">
                <div className="flex-1 border border-zinc-700/50 flex items-center justify-center"><span className="text-[8px] font-mono text-zinc-500">PROD.</span></div>
                <div className="flex-1 border border-zinc-700/50 flex items-center justify-center"><span className="text-[8px] font-mono text-zinc-500">ROLL</span></div>
              </div>
              <div className="w-full flex-1 flex items-center justify-center text-red-500/80 font-mono text-xs mt-1">SCENE 01</div>
            </div>
          </div>
        </div>

        {/* Floating Film Strip */}
        <div 
          className="absolute bottom-[20%] right-[10%] w-24 h-48 animate-float-complex drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          style={{ animationDelay: '-2s', transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px) rotate(20deg)` }}
        >
          <div className="w-full h-full bg-black/90 backdrop-blur-sm border-y border-zinc-800 flex justify-between px-1 overflow-hidden">
            {/* Left sprockets */}
            <div className="w-3 h-[150%] film-strip-edge -mt-4"></div>
            {/* Film Frames */}
            <div className="flex-1 mx-1 h-[150%] flex flex-col gap-2 -mt-4 transform translate-y-[-20%] animate-[film-roll-vertical_4s_linear_infinite]">
              <div className="w-full aspect-[4/3] bg-zinc-900 rounded-sm overflow-hidden relative border border-white/5"><div className="absolute inset-0 bg-red-500/20 mix-blend-overlay"></div></div>
              <div className="w-full aspect-[4/3] bg-zinc-900 rounded-sm overflow-hidden relative border border-white/5"><div className="absolute inset-0 bg-red-500/20 mix-blend-overlay"></div></div>
              <div className="w-full aspect-[4/3] bg-zinc-900 rounded-sm overflow-hidden relative border border-white/5"><div className="absolute inset-0 bg-red-500/20 mix-blend-overlay"></div></div>
              <div className="w-full aspect-[4/3] bg-zinc-900 rounded-sm overflow-hidden relative border border-white/5"><div className="absolute inset-0 bg-red-500/20 mix-blend-overlay"></div></div>
            </div>
            {/* Right sprockets */}
            <div className="w-3 h-[150%] film-strip-edge -mt-4"></div>
          </div>
        </div>

        {/* Floating Color Grading Wheel */}
        <div 
          className="absolute top-[30%] right-[20%] w-32 h-32 animate-float-complex drop-shadow-[0_0_30px_rgba(239,68,68,0.15)]"
          style={{ animationDelay: '-4s', transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px) rotate(5deg)` }}
        >
          <div className="w-full h-full bg-zinc-950/80 backdrop-blur-md rounded-full border-4 border-zinc-900 p-2 relative shadow-[inset_0_0_20px_rgba(0,0,0,1)] flex items-center justify-center">
            {/* Gradient Wheel */}
            <div className="w-full h-full rounded-full bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] opacity-30 mix-blend-screen animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-2 rounded-full border border-white/10 flex items-center justify-center">
               <div className="w-1/2 h-1/2 rounded-full border border-zinc-700/50 relative">
                 <div className="w-2 h-2 bg-white rounded-full absolute -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_5px_white]"></div>
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-zinc-800 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[1px] h-full bg-zinc-800 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-8 gap-16">
        
        {/* Hero Text */}
        <div className="flex-1 text-center md:text-left z-20">
          <div className="inline-flex gap-2 text-sm font-semibold text-red-400 font-playfair bg-red-500/10 border-red-500/20 border rounded-full mb-6 pt-2 pr-4 pb-2 pl-4 shadow-[0_0_15px_rgba(239,68,68,0.2)] gap-x-2 gap-y-2 items-center">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            REC • @BADKA JI
          </div>
          
          <h1 className="text-4xl tracking-tight mb-6 leading-tight drop-shadow-2xl sm:text-6xl lg:text-7xl font-playfair font-medium">
            <span className="glitch-text block text-white" data-text="WELCOME TO MY">WELCOME TO MY</span>
            <span className="bg-gradient-to-t from-red-400 to-red-600 lg:bg-clip-text lg:text-transparent">PORTFOLIO</span>
          </h1>
          
          <p className="text-lg font-medium font-pt-serif text-zinc-400 max-w-xl mb-10">Video editing is a skill through which an editor can help you shape your world in the digital universe. I am a video editor, ready to transform your vision into reality.</p>
          <a href="#work" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-100 text-zinc-950 font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 cursor-none">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
            <span className="z-10 group-hover:text-white transition-colors duration-500 font-playfair relative">MY EDITED WORLD!</span>
            <Play className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-500 fill-current" />
          </a>
        </div>

        {/* DOM-Constructed Stylized 3D Character */}
        <div className="flex-1 relative flex justify-center items-center h-[500px] w-full perspective-[1000px] z-10">
          <div id="character-container" className="relative w-72 h-[450px] transition-transform duration-75 ease-out transform-style-3d">
            
            {/* Background Smoke/Flames */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-[40px] animate-pulse transform translate-z-[-100px]"></div>
            
            {/* Stylized Flame Shapes */}
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-48 h-56 transform translate-z-[-50px]">
              <div className="absolute top-0 left-4 w-16 h-32 bg-red-200/40 rounded-t-full blur-md mix-blend-screen animate-[pulse_3s_ease-in-out_infinite] rotate-[-15deg]"></div>
              <div className="absolute top-[-10px] right-8 w-20 h-40 bg-red-400/30 rounded-t-full blur-md mix-blend-screen animate-[pulse_4s_ease-in-out_infinite] rotate-[10deg]"></div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-48 bg-[#ffb6a3]/50 rounded-t-full blur-lg mix-blend-screen animate-[pulse_2s_ease-in-out_infinite]"></div>
            </div>

            {/* Body / Shoulders */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-56 bg-[#111] rounded-t-[5rem] shadow-[0_0_40px_rgba(0,0,0,0.8)] border-t border-white/5 transform translate-z-[0px]"></div>

            {/* Scarf (Ajrak representation) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-48 flex justify-between px-2 transform translate-z-[30px]">
              <div className="w-24 h-full bg-[#fdf3f0] border-x-[3px] border-b-[6px] border-red-700/80 rounded-b-sm shadow-2xl transform rotate-[-8deg] origin-top flex flex-col justify-end pb-2 overflow-hidden">
                <div className="w-full h-2 border-b-2 border-red-600/50 border-dashed mb-1"></div>
                <div className="w-full h-8 bg-red-700/80 flex items-center justify-center"><div className="w-4 h-4 bg-white/80 rotate-45"></div></div>
                <div className="w-full h-2 border-b-2 border-red-600/50 border-dashed mt-1"></div>
              </div>
              <div className="w-24 h-full bg-[#fdf3f0] border-x-[3px] border-b-[6px] border-red-700/80 rounded-b-sm shadow-2xl transform rotate-[8deg] origin-top flex flex-col justify-end pb-2 overflow-hidden">
                <div className="w-full h-2 border-b-2 border-red-600/50 border-dashed mb-1"></div>
                <div className="w-full h-8 bg-red-700/80 flex items-center justify-center"><div className="w-4 h-4 bg-white/80 rotate-45"></div></div>
                <div className="w-full h-2 border-b-2 border-red-600/50 border-dashed mt-1"></div>
              </div>
            </div>

            {/* Neck */}
            <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-12 h-16 bg-[#0a0a0a] transform translate-z-[10px]"></div>

            {/* Head */}
            <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-36 h-36 bg-[#0a0a0a] rounded-[2.5rem] shadow-[0_0_30px_rgba(255,0,0,0.15)] transform translate-z-[20px]"></div>

            {/* Glowing Eyes */}
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 flex gap-5 w-full justify-center transform translate-z-[40px]">
              <div className="w-10 h-10 bg-[#fff5f5] rounded-full shadow-[0_0_20px_rgba(255,255,255,0.9),0_0_40px_rgba(239,68,68,0.6)] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-red-500/10 animate-pulse mix-blend-multiply"></div>
              </div>
              <div className="w-10 h-10 bg-[#fff5f5] rounded-full shadow-[0_0_20px_rgba(255,255,255,0.9),0_0_40px_rgba(239,68,68,0.6)] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-red-500/10 animate-pulse mix-blend-multiply"></div>
              </div>
            </div>

            {/* Sindhi Topi (Cap) */}
            <div className="absolute top-[25px] left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-[#a81c1c] rounded-t-lg shadow-xl border-t border-red-400/50 flex flex-col justify-between py-[2px] transform translate-z-[50px] rotate-[-2deg]">
              <div className="w-full flex justify-around items-center px-1">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rotate-45"></div>
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rotate-45"></div>
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              </div>
              <div className="w-full h-[6px] bg-white/90 border-y border-black/40 flex gap-[2px] overflow-hidden">
                <div className="w-2 h-full bg-black/80 skew-x-12"></div>
                <div className="w-2 h-full bg-black/80 skew-x-12"></div>
                <div className="w-2 h-full bg-black/80 skew-x-12"></div>
                <div className="w-2 h-full bg-black/80 skew-x-12"></div>
                <div className="w-2 h-full bg-black/80 skew-x-12"></div>
              </div>
            </div>

            {/* Praying Hands Base */}
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-16 h-24 bg-[#ffcccb] rounded-t-full shadow-[inset_0_-10px_20px_rgba(0,0,0,0.5)] transform translate-z-[60px] flex justify-center">
              <div className="w-[2px] h-full bg-black/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs font-semibold tracking-tight uppercase font-geist">Scroll to Sequence</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}