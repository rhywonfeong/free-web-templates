import React from 'react';
import { TiltCard } from './TiltCard';
import { Reveal } from './Reveal';

export function Story() {
  return (
    <section className="min-h-screen flex overflow-hidden bg-zinc-950 border-white/5 border-t pt-24 pb-24 relative items-center justify-center" id="story">
      {/* Background Ambient */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20 z-0">
        <div className="w-96 h-96 bg-red-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-6xl z-10 mr-auto ml-auto pr-8 pl-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
          
          {/* Detailed Text */}
          <Reveal className="flex flex-col gap-6">
            <div className="inline-flex gap-2 text-sm font-semibold text-red-400 font-playfair bg-red-500/10 w-fit border-red-500/20 border rounded-full mb-2 pt-2 pr-4 pb-2 pl-4 shadow-[0_0_15px_rgba(239,68,68,0.2)] gap-x-2 gap-y-2">BADKA JI</div>
            <h2 className="sm:text-5xl leading-tight text-4xl font-medium text-white tracking-tight font-playfair mb-2">
              THE<br />
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-700 shimmer-text cinematic-text inline-block" 
                style={{ animationDelay: '0.2s' }}
              >
                BADKA JI
              </span>
            </h2>
            
            <div className="space-y-4 text-lg text-zinc-400 font-pt-serif mb-6">
              <p className="font-pt-serif">Hello! My name is Mr. Suryansh Sharma, and I am a passionate video editor dedicated to transforming your raw footage into cinematic, engaging, and attractive content. With expertise in transitions, effects, and emotional storytelling, I specialize in creating videos that capture attention, connect with audiences, and leave a lasting impact.</p>
              <p className="font-pt-serif">I deliver projects within 1–7 days, depending on the type of video. Short reels usually take 1–3 days, while longer videos may need 2–7 days. Please be patient—I work with full focus to ensure your video is truly attractive and high‑quality.</p>
              <p className="font-pt-serif">The charges fully depend on your project, and I’ll share the exact cost once you contact me. To begin, you’ll need to make half payment upfront, and the remaining half after the project is delivered.</p>
            </div>

            {/* Mini Timeline */}
            <div className="border-red-900/50 border-l-2 mt-4 pl-6 space-y-8 relative">
              <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-red-500 via-transparent to-transparent animate-[film-roll-vertical_3s_linear_infinite]"></div>
              
              <div className="relative">
                <div className="-left-[33px] bg-zinc-950 w-4 h-4 border-red-500 border-2 rounded-full absolute top-1 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <h4 className="text-xl font-medium text-white font-playfair">CONTACT </h4>
                <p className="text-sm text-zinc-500 font-geist mt-1"></p>
              </div>
              <div className="relative">
                <div className="-left-[33px] bg-zinc-950 w-4 h-4 border-red-500 border-2 rounded-full absolute top-1 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <h4 className="text-xl font-medium text-white font-playfair">PAYMENT</h4>
                <p className="text-sm text-zinc-500 font-geist mt-1"></p>
              </div>
              <div className="relative">
                <div className="-left-[33px] animate-pulse bg-red-500 w-4 h-4 border-red-500 border-2 rounded-full absolute top-1 shadow-[0_0_15px_rgba(239,68,68,1)]"></div>
                <h4 className="text-xl font-medium text-white font-playfair">PROJECT </h4>
                <p className="text-sm text-zinc-500 font-geist mt-1"></p>
              </div>
            </div>
          </Reveal>

          {/* 3D Stats/Visualizer Element */}
          <Reveal className="relative perspective-[1500px]" delay={200}>
            <TiltCard className="w-full aspect-[4/5] bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-out transform-style-3d group cursor-none relative overflow-hidden">
              
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Realistic Timeline Graphic */}
              <div className="relative z-10 w-full bg-black/80 rounded-xl mb-8 border border-white/10 flex flex-col p-4 transform translate-z-[40px] shadow-2xl overflow-hidden">
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                  <span className="text-xs font-semibold text-red-500 tracking-wider font-geist flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    TIMELINE_01
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">00:04:23:12</span>
                </div>
                
                {/* Timeline tracks with Labels */}
                <div className="space-y-1 relative group/timeline w-full">
                  
                  {/* Video Track V2 */}
                  <div className="flex items-center gap-2 w-full h-5">
                    <span className="text-[8px] text-zinc-500 font-mono w-4">V2</span>
                    <div className="flex-1 h-full bg-zinc-900 rounded-sm flex gap-0.5 overflow-hidden relative">
                      <div className="absolute top-0 bottom-0 left-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] w-1/2 animate-[dash-left_2s_infinite_linear]"></div>
                      <div className="h-full w-1/4 bg-blue-600/80 rounded-sm border border-blue-400/30 ml-[10%]"></div>
                      <div className="h-full w-1/5 bg-purple-600/50 rounded-sm border border-purple-400/30 ml-[5%]"></div>
                    </div>
                  </div>

                  {/* Video Track V1 */}
                  <div className="flex items-center gap-2 w-full h-5">
                    <span className="text-[8px] text-zinc-500 font-mono w-4">V1</span>
                    <div className="flex-1 h-full bg-zinc-900 rounded-sm flex gap-0.5 overflow-hidden">
                      <div className="h-full w-1/3 bg-blue-600/80 rounded-sm border border-blue-400/30"></div>
                      <div className="h-full w-1/2 bg-blue-600/80 rounded-sm border border-blue-400/30"></div>
                      <div className="h-full w-1/6 bg-blue-600/80 rounded-sm border border-blue-400/30"></div>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-white/5 my-2"></div>

                  {/* Audio Track A1 */}
                  <div className="flex items-center gap-2 w-full h-5">
                    <span className="text-[8px] text-zinc-500 font-mono w-4">A1</span>
                    <div className="flex-1 h-full bg-zinc-900 rounded-sm flex gap-0.5 overflow-hidden">
                      <div className="h-full w-1/3 bg-green-600/40 rounded-sm border border-green-400/30 relative overflow-hidden">
                        {/* Fake mini waveform */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgNWw1LTMgNSA2IDUtNCA1IDggNSAtekIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] bg-repeat-x bg-center"></div>
                      </div>
                      <div className="h-full w-1/2 bg-green-600/40 rounded-sm border border-green-400/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgNWw1LTMgNSA2IDUtNCA1IDggNSAtekIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] bg-repeat-x bg-center"></div>
                      </div>
                    </div>
                  </div>

                  {/* Audio Track A2 */}
                  <div className="flex items-center gap-2 w-full h-5">
                    <span className="text-[8px] text-zinc-500 font-mono w-4">A2</span>
                    <div className="flex-1 h-full bg-zinc-900 rounded-sm flex gap-0.5 overflow-hidden">
                      <div className="h-full w-1/4 bg-green-600/40 rounded-sm border border-green-400/30 ml-[10%] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgNWw1LTMgNSA2IDUtNCA1IDggNSAtekIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] bg-repeat-x bg-center"></div>
                      </div>
                    </div>
                  </div>

                  {/* Playhead Overlay */}
                  <div className="absolute top-[-15px] bottom-[-5px] left-0 w-full pointer-events-none">
                    <div className="h-full w-[2px] bg-red-500 shadow-[0_0_5px_red] absolute z-20 animate-[scan-playhead_4s_ease-in-out_infinite_alternate]">
                      {/* Playhead Triangle */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-500 drop-shadow-[0_0_8px_red]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="transform translate-z-[30px] grid grid-cols-2 gap-6 mt-auto">
                <div className="bg-black/40 border border-white/5 p-4 rounded-xl hover:border-red-500/30 transition-colors">
                  <div className="text-3xl font-medium text-white font-playfair mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">99+</div>
                  <div className="text-xs text-zinc-400 font-geist font-semibold tracking-wider">PROJECTS DONE</div>
                </div>
                <div className="bg-black/40 border border-white/5 p-4 rounded-xl hover:border-red-500/30 transition-colors">
                  <div className="text-3xl font-medium text-white font-playfair mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">1M+</div>
                  <div className="text-xs text-zinc-400 font-geist font-semibold tracking-wider">VIEWS GENERATED</div>
                </div>
                <div className="bg-black/40 border border-white/5 p-4 rounded-xl hover:border-red-500/30 transition-colors">
                  <div className="text-3xl font-medium text-white font-playfair mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">100%</div>
                  <div className="text-xs text-zinc-400 font-geist font-semibold tracking-wider">CLIENT SATISFACTION</div>
                </div>
                <div className="bg-black/40 border border-white/5 p-4 rounded-xl hover:border-red-500/30 transition-colors">
                  <div className="text-3xl text-white font-playfair font-medium mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">∞</div>
                  <div className="text-xs text-zinc-400 font-geist font-semibold tracking-wider">FRAMES RENDERED</div>
                </div>
              </div>

            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}