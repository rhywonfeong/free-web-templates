import React from 'react';
import { TiltCard } from './TiltCard';
import { Reveal } from './Reveal';

export function About() {
  // Generate random heights and animation delays for realistic waveform
  const waveformBars = Array.from({ length: 24 }).map((_, i) => ({
    height: Math.max(15, Math.random() * 100),
    delay: Math.random() * 1.5,
    duration: 0.5 + Math.random() * 1
  }));

  return (
    <section className="min-h-screen flex bg-zinc-950 border-white/5 border-t pt-24 pb-24 relative items-center justify-center" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl mr-auto ml-auto pr-8 pl-8 gap-x-16 gap-y-16 items-center">
        
        {/* 3D Profile Card */}
        <div className="relative perspective-[1500px]">
          <TiltCard className="w-full max-w-sm mx-auto aspect-[3/4] bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-transform duration-200 ease-out transform-style-3d group cursor-none">
            <div className="-inset-1 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-red-600/30 to-transparent opacity-0 rounded-2xl absolute blur-xl"></div>
            
            {/* Card Content (Audio Waveform Visualizer) */}
            <div className="relative z-10 w-full h-48 bg-black/80 rounded-xl mb-6 overflow-hidden border border-white/5 flex flex-col justify-center transform translate-z-[30px] shadow-2xl p-4">
              
              <div className="w-full flex justify-between text-[8px] font-mono text-zinc-500 mb-2 absolute top-2 left-0 px-4">
                <span>AUDIO_TRACK_01.WAV</span>
                <span className="text-red-500">PEAK: -3dB</span>
              </div>
              
              {/* Center Line */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-900/30 -translate-y-1/2 z-0"></div>

              {/* Realistic Waveform simulation */}
              <div className="flex gap-[2px] w-full h-24 items-center justify-center relative z-10">
                {waveformBars.map((bar, i) => (
                  <div 
                    key={i}
                    className="w-1.5 bg-red-600 rounded-sm shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-all"
                    style={{ 
                      height: `${bar.height}%`,
                      animation: `pulse ${bar.duration}s ease-in-out infinite alternate`,
                      animationDelay: `${bar.delay}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            <h3 className="transform translate-z-[40px] text-2xl text-white tracking-tight mb-2 font-playfair font-medium">VIDEO EDITOR</h3>
            <p className="transform translate-z-[20px] text-lg text-zinc-400 font-pt-serif mb-6">I am Professional video editor with years of experience, delivering high-quality edits with creativity, precision, and clear communication.</p>
          </TiltCard>
        </div>

        {/* Skills */}
        <Reveal className="flex flex-col gap-8">
          <div>
            <h2 className="sm:text-5xl text-4xl text-white tracking-tight mb-4 font-playfair font-medium">MY CAPABILITIES </h2>
            <p className="text-lg text-zinc-400 font-pt-serif mb-8">I have mastered CapCut and have working experience with Adobe Premiere Pro, After Effects, and DaVinci Resolve. I use these tools to create smooth, high-quality, and engaging video edits.</p>
          </div>
          
          <div className="space-y-6">
            <div className="group">
              <div className="flex text-sm font-semibold text-zinc-300 tracking-tight mb-2 justify-between">
                <span className="font-playfair">VIDEO EDITING</span>
                <span className="text-red-500 font-geist">95%</span>
              </div>
              <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden relative">
                {/* Ruler ticks inside progress bar container */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_11px)]"></div>
                <div className="h-full bg-red-600 w-[95%] shadow-[0_0_10px_red] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out relative z-10"></div>
              </div>
            </div>
            <div className="group">
              <div className="flex justify-between mb-2 text-sm font-semibold tracking-tight text-zinc-300">
                <span className="font-playfair">SHORT-VIDEO EDITING</span>
                <span className="text-red-500 font-geist">99%</span>
              </div>
              <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden relative">
                {/* Ruler ticks inside progress bar container */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_11px)]"></div>
                <div className="transform origin-left group-hover:scale-x-100 transition-transform duration-1000 ease-out delay-200 bg-red-600 w-[99%] h-full shadow-[0_0_10px_red] scale-x-0 relative z-10"></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}