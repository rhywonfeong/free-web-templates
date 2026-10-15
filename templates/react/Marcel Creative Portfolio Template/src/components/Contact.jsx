import React from 'react';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col items-center justify-center text-center mb-32">
        <Reveal>
          <div className="text-xs font-medium tracking-widest uppercase text-[#888] mb-8">
            Initiate Project
          </div>
        </Reveal>
        <Reveal delay={100}>
          <a 
            href="mailto:hello@example.com" 
            className="text-[60px] sm:text-[90px] md:text-[130px] lg:text-[160px] leading-[0.8] font-semibold tracking-tighter uppercase hover:text-[#A0A0A0] transition-colors block"
          >
            Let's Work<br/>Together.
          </a>
        </Reveal>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#222] pt-8">
        <Reveal>
          <div className="text-xs font-medium tracking-widest uppercase text-[#888]">
            © {new Date().getFullYear()} Marcel. All rights reserved.
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex gap-6 items-center">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#888] hover:text-[#F0F0F0] transition-colors text-2xl flex items-center justify-center p-2 border border-transparent hover:border-[#333]">
              <iconify-icon icon="simple-icons:github"></iconify-icon>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#888] hover:text-[#F0F0F0] transition-colors text-2xl flex items-center justify-center p-2 border border-transparent hover:border-[#333]">
              <iconify-icon icon="simple-icons:linkedin"></iconify-icon>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#888] hover:text-[#F0F0F0] transition-colors text-2xl flex items-center justify-center p-2 border border-transparent hover:border-[#333]">
              <iconify-icon icon="simple-icons:x"></iconify-icon>
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="text-xs font-medium tracking-widest uppercase text-[#888] flex flex-col items-end">
            <span>Local Time</span>
            <span className="text-[#F0F0F0]">GDA — {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Warsaw' })}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}