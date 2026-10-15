import React from 'react';
import Reveal from './Reveal';

export default function About() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 
    'Framer Motion', 'GSAP', 'WebGL', 'Figma', 'UI/UX Design'
  ];

  return (
    <section id="philosophy" className="py-32 px-6 max-w-[1600px] mx-auto border-b border-[#222]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        <div className="md:col-span-7 md:pr-12 border-b md:border-b-0 md:border-r border-[#222] pb-16 md:pb-0">
          <Reveal>
            <h2 className="text-xs font-medium tracking-widest uppercase text-[#888] mb-8">Philosophy</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-3xl md:text-5xl lg:text-[64px] leading-[1.1] font-semibold tracking-tighter text-[#A0A0A0]">
              I approach the web as a craft — <span className="text-[#F0F0F0]">where strict structure meets fluid motion</span>, and every single detail earns its place on the screen.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:pl-12 flex flex-col justify-between">
          <div>
            <Reveal>
              <h2 className="text-xs font-medium tracking-widest uppercase text-[#888] mb-8">Core Arsenal</h2>
            </Reveal>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <Reveal key={skill} delay={150 + (i * 50)} width="auto">
                  <div className="border border-[#333] px-4 py-2 text-sm font-medium uppercase tracking-widest hover:bg-[#F0F0F0] hover:text-[#0A0A0A] transition-colors cursor-default">
                    {skill}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={400}>
            <div className="mt-16 pt-8 border-t border-[#222]">
              <p className="text-sm text-[#888] max-w-sm">
                With a background in traditional graphic design, I bridge the gap between static aesthetics and interactive logic. No fluff, just functional brutalism.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}