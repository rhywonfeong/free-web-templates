import React from 'react';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-end pb-24 px-6 pt-32 max-w-[1600px] mx-auto relative border-b border-[#222]">
      <div className="absolute top-32 right-6 flex items-center gap-3 border border-[#333] px-4 py-2">
        <div className="w-2 h-2 bg-[#F0F0F0] rounded-none animate-[pulse_2s_ease-in-out_infinite]"></div>
        <span className="text-xs font-medium tracking-widest uppercase text-[#A0A0A0]">Available for freelance</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-12">
          <Reveal>
            <h1 className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] leading-[0.9] font-semibold tracking-tighter uppercase w-full">
              I design & build
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] leading-[0.9] font-semibold tracking-tighter uppercase w-full text-[#A0A0A0]">
              digital experiences
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] leading-[0.9] font-semibold tracking-tighter uppercase w-full">
              that feel right.
            </h1>
          </Reveal>
        </div>

        <div className="md:col-span-12 flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-[#222] pt-6 mt-12 gap-8">
          <Reveal delay={300}>
            <div className="text-sm font-medium tracking-widest uppercase text-[#888]">
              Creative Developer<br/>
              <span className="text-[#F0F0F0]">React, Next.js, Motion</span>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="text-sm font-medium tracking-widest uppercase text-[#888] sm:text-right">
              Location<br/>
              <span className="text-[#F0F0F0]">Gdańsk, PL (CET)</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}