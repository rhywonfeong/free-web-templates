import React from 'react';
import { TiltCard } from './TiltCard';
import { Reveal } from './Reveal';

export function Services() {
  return (
    <section className="min-h-screen flex overflow-hidden bg-zinc-950 border-white/5 border-t pt-24 pb-24 relative items-center justify-center" id="services">
      
      {/* Background Glitch/Timeline Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-col justify-around z-0">
        <div className="w-[200%] h-px bg-red-500 transform -rotate-12 translate-y-20"></div>
        <div className="w-[200%] h-px bg-white transform rotate-6 -translate-y-40"></div>
      </div>

      <div className="w-full max-w-7xl z-10 mr-auto ml-auto pr-8 pl-8 relative">
        <Reveal className="text-center mb-20">
          <h2 className="sm:text-6xl text-4xl text-white tracking-tight mb-4 font-playfair font-medium">MY SKILL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 font-playfair font-medium">OUTPUTS</span></h2>
          <p className="text-lg text-zinc-400 font-playfair max-w-2xl mr-auto ml-auto">I create high-quality, engaging video edits designed to capture attention and deliver results.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[2000px]">
          
          {/* Service 1: Short Reels (Walking) */}
          <TiltCard className="relative w-full aspect-square bg-zinc-900/50 backdrop-blur-md border border-white/5 hover:border-[#ff1a1a]/60 hover:shadow-[0_0_30px_rgba(255,26,26,0.15)] rounded-2xl p-8 flex flex-col justify-end overflow-hidden group transition-all duration-300 ease-out cursor-none transform-style-3d">
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,26,26,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/80 to-[#2a0000] bg-[length:200%_200%] animate-[card-bg-shift_8s_ease_infinite] opacity-30 z-0"></div>
            
            {/* Film Strip Background Motif */}
            <div className="absolute left-4 top-0 bottom-0 w-8 flex flex-col gap-2 py-2 opacity-5 pointer-events-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-full h-12 border-2 border-white rounded-sm"></div>
              ))}
            </div>
            
            <div className="absolute top-8 right-8 w-24 h-24 stickman-container stickman-walk transform translate-z-[40px] z-20" style={{ '--sp': '1.5s', '--angle': '25deg', '--calf-bend': '35deg', '--bounce': '-2px', '--forearm-min': '-10deg', '--forearm-max': '-30deg' }}>
              <svg className="w-full h-full stickman-svg overflow-visible" viewBox="0 0 100 100">
                <g className="stickman-group">
                  <g className="arm-l" style={{ transformOrigin: '50px 30px' }}><line x1="50" y1="30" x2="50" y2="48"></line><line className="forearm-l" x1="50" y1="48" x2="50" y2="65" style={{ transformOrigin: '50px 48px' }}></line></g>
                  <g className="leg-l" style={{ transformOrigin: '50px 55px' }}><line x1="50" y1="55" x2="50" y2="75"></line><line className="calf-l" x1="50" y1="75" x2="50" y2="95" style={{ transformOrigin: '50px 75px' }}></line></g>
                  <line className="torso" x1="50" y1="26" x2="50" y2="55"></line>
                  <circle className="head" cx="50" cy="18" r="8" fill="none"></circle>
                  <g className="leg-r" style={{ transformOrigin: '50px 55px' }}><line x1="50" y1="55" x2="50" y2="75"></line><line className="calf-r" x1="50" y1="75" x2="50" y2="95" style={{ transformOrigin: '50px 75px' }}></line></g>
                  <g className="arm-r" style={{ transformOrigin: '50px 30px' }}><line x1="50" y1="30" x2="50" y2="48"></line><line className="forearm-r" x1="50" y1="48" x2="50" y2="65" style={{ transformOrigin: '50px 48px' }}></line></g>
                </g>
              </svg>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-[#ff1a1a]/30 rounded-full blur-[2px]"></div>
            </div>

            <div className="relative z-20 transform translate-z-[20px]">
              <h3 className="text-2xl text-white tracking-tight mb-2 font-playfair font-medium">SHORT REELS</h3>
              <p className="group-hover:text-zinc-200 transition-colors text-lg text-zinc-400 font-pt-serif">High-retention short-form edits designed for Instagram Reels, YouTube Shorts, and TikTok to boost engagement and audience growth.</p>
            </div>
          </TiltCard>

          {/* Service 2: Long Videos (Jogging) */}
          <TiltCard className="relative w-full aspect-square bg-zinc-900/50 backdrop-blur-md border border-white/5 hover:border-[#ff1a1a]/60 hover:shadow-[0_0_30px_rgba(255,26,26,0.15)] rounded-2xl p-8 flex flex-col justify-end overflow-hidden group transition-all duration-300 ease-out cursor-none transform-style-3d">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,26,26,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/80 to-[#2a0000] bg-[length:200%_200%] animate-[card-bg-shift_6s_ease_infinite] opacity-30 z-0"></div>
            
            {/* Playhead Motif */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-red-500/20 transform -translate-x-1/2 pointer-events-none group-hover:bg-red-500/50 transition-colors"></div>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-red-500 transform -translate-x-1/2 rotate-45 -translate-y-1/2 group-hover:shadow-[0_0_10px_red]"></div>

            <div className="absolute top-8 right-8 w-24 h-24 stickman-container stickman-jog transform translate-z-[40px] z-20" style={{ '--sp': '0.8s', '--angle': '45deg', '--calf-bend': '70deg', '--bounce': '-6px', '--forearm-min': '-20deg', '--forearm-max': '-60deg' }}>
              <div className="absolute top-1/2 -right-8 w-20 h-16 -translate-y-1/2 flex flex-col justify-around opacity-40 pointer-events-none z-0">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent to-[#ff1a1a] animate-[dash-left_0.8s_infinite]"></div>
                <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent to-[#ff1a1a] animate-[dash-left_0.8s_infinite_0.4s]"></div>
              </div>
              <svg className="w-full h-full stickman-svg overflow-visible relative z-10" viewBox="0 0 100 100">
                <g className="stickman-group">
                  <g className="arm-l" style={{ transformOrigin: '50px 30px' }}><line x1="50" y1="30" x2="50" y2="48"></line><line className="forearm-l" x1="50" y1="48" x2="50" y2="65" style={{ transformOrigin: '50px 48px' }}></line></g>
                  <g className="leg-l" style={{ transformOrigin: '50px 55px' }}><line x1="50" y1="55" x2="50" y2="75"></line><line className="calf-l" x1="50" y1="75" x2="50" y2="95" style={{ transformOrigin: '50px 75px' }}></line></g>
                  <line className="torso" x1="50" y1="26" x2="50" y2="55"></line>
                  <circle className="head" cx="50" cy="18" r="8" fill="none"></circle>
                  <g className="leg-r" style={{ transformOrigin: '50px 55px' }}><line x1="50" y1="55" x2="50" y2="75"></line><line className="calf-r" x1="50" y1="75" x2="50" y2="95" style={{ transformOrigin: '50px 75px' }}></line></g>
                  <g className="arm-r" style={{ transformOrigin: '50px 30px' }}><line x1="50" y1="30" x2="50" y2="48"></line><line className="forearm-r" x1="50" y1="48" x2="50" y2="65" style={{ transformOrigin: '50px 48px' }}></line></g>
                </g>
              </svg>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#ff1a1a]/40 rounded-full blur-[3px]"></div>
            </div>

            <div className="relative z-20 transform translate-z-[20px]">
              <h3 className="text-2xl text-white tracking-tight mb-2 font-playfair font-medium">LONG VIDEOS</h3>
              <p className="group-hover:text-zinc-200 transition-colors text-lg text-zinc-400 font-pt-serif">Professional long-form video editing with smooth transitions, storytelling, and clean pacing for YouTube and cinematic content.</p>
            </div>
          </TiltCard>

          {/* Service 3: Animated Reels (Running) */}
          <TiltCard className="relative w-full aspect-square bg-zinc-900/50 backdrop-blur-md border border-white/5 hover:border-[#ff1a1a]/60 hover:shadow-[0_0_30px_rgba(255,26,26,0.15)] rounded-2xl p-8 flex flex-col justify-end overflow-hidden group transition-all duration-300 ease-out cursor-none transform-style-3d">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,26,26,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/80 to-[#2a0000] bg-[length:200%_200%] animate-[card-bg-shift_4s_ease_infinite] opacity-30 z-0"></div>
            
            {/* Keyframe / Transform Motif */}
            <div className="absolute top-4 left-4 w-12 h-12 border border-white/10 flex items-center justify-center opacity-30">
              <div className="w-2 h-2 bg-white rotate-45 group-hover:bg-red-500 transition-colors"></div>
            </div>

            <div className="absolute top-8 right-8 w-24 h-24 stickman-container stickman-run transform translate-z-[40px] z-20" style={{ '--sp': '0.5s', '--angle': '65deg', '--calf-bend': '100deg', '--bounce': '-10px', '--forearm-min': '-40deg', '--forearm-max': '-90deg', '--body-lean': '15deg' }}>
              <div className="absolute top-1/2 -right-12 w-28 h-20 -translate-y-1/2 flex flex-col justify-around opacity-60 pointer-events-none z-0">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1a1a] to-transparent animate-[dash-left_0.4s_infinite_linear]"></div>
                <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#ff1a1a] to-transparent animate-[dash-left_0.3s_infinite_0.1s_linear]"></div>
                <div className="w-5/6 h-[2px] bg-gradient-to-r from-transparent via-[#ff1a1a] to-transparent animate-[dash-left_0.5s_infinite_0.2s_linear]"></div>
              </div>

              {/* Glitch Blur SVG */}
              <svg className="w-full h-full stickman-svg overflow-visible absolute top-0 left-0 blur-[2px] opacity-50 z-0" viewBox="0 0 100 100">
                <g className="stickman-group">
                  <g className="arm-l" style={{ transformOrigin: '50px 30px' }}><line x1="50" y1="30" x2="50" y2="48"></line><line className="forearm-l" x1="50" y1="48" x2="50" y2="65" style={{ transformOrigin: '50px 48px' }}></line></g>
                  <g className="leg-l" style={{ transformOrigin: '50px 55px' }}><line x1="50" y1="55" x2="50" y2="75"></line><line className="calf-l" x1="50" y1="75" x2="50" y2="95" style={{ transformOrigin: '50px 75px' }}></line></g>
                  <line className="torso" x1="50" y1="26" x2="50" y2="55"></line>
                  <circle className="head" cx="50" cy="18" r="8" fill="none"></circle>
                  <g className="leg-r" style={{ transformOrigin: '50px 55px' }}><line x1="50" y1="55" x2="50" y2="75"></line><line className="calf-r" x1="50" y1="75" x2="50" y2="95" style={{ transformOrigin: '50px 75px' }}></line></g>
                  <g className="arm-r" style={{ transformOrigin: '50px 30px' }}><line x1="50" y1="30" x2="50" y2="48"></line><line className="forearm-r" x1="50" y1="48" x2="50" y2="65" style={{ transformOrigin: '50px 48px' }}></line></g>
                </g>
              </svg>

              <svg className="w-full h-full stickman-svg overflow-visible relative z-10" viewBox="0 0 100 100">
                <g className="stickman-group">
                  <g className="arm-l" style={{ transformOrigin: '50px 30px' }}><line x1="50" y1="30" x2="50" y2="48"></line><line className="forearm-l" x1="50" y1="48" x2="50" y2="65" style={{ transformOrigin: '50px 48px' }}></line></g>
                  <g className="leg-l" style={{ transformOrigin: '50px 55px' }}><line x1="50" y1="55" x2="50" y2="75"></line><line className="calf-l" x1="50" y1="75" x2="50" y2="95" style={{ transformOrigin: '50px 75px' }}></line></g>
                  <line className="torso" x1="50" y1="26" x2="50" y2="55"></line>
                  <circle className="head" cx="50" cy="18" r="8" fill="none"></circle>
                  <g className="leg-r" style={{ transformOrigin: '50px 55px' }}><line x1="50" y1="55" x2="50" y2="75"></line><line className="calf-r" x1="50" y1="75" x2="50" y2="95" style={{ transformOrigin: '50px 75px' }}></line></g>
                  <g className="arm-r" style={{ transformOrigin: '50px 30px' }}><line x1="50" y1="30" x2="50" y2="48"></line><line className="forearm-r" x1="50" y1="48" x2="50" y2="65" style={{ transformOrigin: '50px 48px' }}></line></g>
                </g>
              </svg>

              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#ff1a1a]/50 rounded-full blur-[4px]"></div>
            </div>

            <div className="relative z-20 transform translate-z-[20px]">
              <h3 className="text-2xl text-white tracking-tight mb-2 font-playfair font-medium">ANIMATED REELS-VIDEOS</h3>
              <p className="group-hover:text-zinc-200 transition-colors text-lg text-zinc-400 font-pt-serif">Dynamic motion graphics and animated edits that enhance visuals with creative effects, text animations, and engaging transitions.</p>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}