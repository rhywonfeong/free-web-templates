import React, { useState, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { Reveal } from './Reveal';

export function Contact() {
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
    <section className="min-h-screen flex overflow-hidden bg-zinc-950 border-white/5 border-t pt-24 pb-24 relative items-center justify-center" id="contact">
      
      {/* Background Calling Animation & Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] border border-red-500/40 rounded-full contact-wave"></div>
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] border border-red-500/40 rounded-full contact-wave" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] border border-red-500/40 rounded-full contact-wave" style={{ animationDelay: '3s' }}></div>

        <div className="absolute top-[80%] left-[20%] w-2 h-2 bg-red-500 rounded-full blur-[1px] contact-particle"></div>
        <div className="absolute top-[70%] left-[80%] w-1.5 h-1.5 bg-white/50 rounded-full blur-[1px] contact-particle" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute top-[90%] left-[50%] w-3 h-3 bg-red-600/50 rounded-full blur-[2px] contact-particle" style={{ animationDelay: '4s', animationDuration: '9s' }}></div>
        <div className="absolute top-[60%] left-[30%] w-1 h-1 bg-white/80 rounded-full contact-particle" style={{ animationDelay: '1s', animationDuration: '6s' }}></div>
      </div>

      {/* Floating Icons Backdrop */}
      <div 
        className="absolute top-1/4 left-10 float-obj text-white/5 pointer-events-none z-0"
        style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
      >
        <MessageSquare className="w-32 h-32" />
      </div>
      <div 
        className="absolute bottom-1/4 right-10 float-obj text-red-500/5 pointer-events-none z-0" 
        style={{ animationDelay: '-2s', transform: `translate(${mousePos.x * 1.6}px, ${mousePos.y * 1.6}px)` }}
      >
        <Send className="w-48 h-48" />
      </div>

      {/* Main Content Glassmorphism Card */}
      <Reveal className="max-w-3xl w-full mx-auto px-8 relative z-10">
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.7)] relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="sm:text-4xl text-3xl text-white tracking-tight mb-3 font-playfair font-medium">CONTACT <span className="text-red-500 font-playfair font-medium drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">ME</span></h2>
            <p className="text-lg text-zinc-400 font-pt-serif max-w-xl mx-auto">Let’s connect and bring your ideas to life. Feel free to reach out for collaborations, projects, or any queries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10 w-full">
            
            <div className="flex items-center gap-5 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900/60 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] group/card cursor-none">
              <div className="w-14 h-14 shrink-0 bg-black/50 rounded-full flex items-center justify-center border border-white/5 group-hover/card:border-red-500/40 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                <iconify-icon icon="solar:user-linear" class="text-2xl text-red-500 group-hover/card:drop-shadow-[0_0_10px_rgba(239,68,68,1)] transition-all duration-300 group-hover/card:scale-110"></iconify-icon>
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] text-zinc-500 font-geist mb-0.5 uppercase tracking-widest font-semibold">Name</p>
                <p className="text-lg text-white font-playfair truncate">Suryansh Sharma</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900/60 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] group/card cursor-none">
              <div className="w-14 h-14 shrink-0 bg-black/50 rounded-full flex items-center justify-center border border-white/5 group-hover/card:border-red-500/40 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                <iconify-icon icon="solar:letter-linear" class="text-2xl text-red-500 group-hover/card:drop-shadow-[0_0_10px_rgba(239,68,68,1)] transition-all duration-300 group-hover/card:scale-110"></iconify-icon>
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] text-zinc-500 font-geist mb-0.5 uppercase tracking-widest font-semibold">Email</p>
                <p className="truncate text-lg text-white font-playfair">badkaji.001@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900/60 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] group/card cursor-none">
              <div className="w-14 h-14 shrink-0 bg-black/50 rounded-full flex items-center justify-center border border-white/5 group-hover/card:border-red-500/40 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                <iconify-icon icon="solar:phone-calling-linear" class="text-2xl text-red-500 group-hover/card:drop-shadow-[0_0_10px_rgba(239,68,68,1)] transition-all duration-300 group-hover/card:scale-110"></iconify-icon>
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] text-zinc-500 font-geist mb-0.5 uppercase tracking-widest font-semibold">WhatsApp / Phone</p>
                <p className="truncate text-lg text-white font-playfair">+91 6283734847</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900/60 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] group/card cursor-none">
              <div className="w-14 h-14 shrink-0 bg-black/50 rounded-full flex items-center justify-center border border-white/5 group-hover/card:border-red-500/40 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                <iconify-icon icon="solar:camera-linear" class="text-2xl text-red-500 group-hover/card:drop-shadow-[0_0_10px_rgba(239,68,68,1)] transition-all duration-300 group-hover/card:scale-110"></iconify-icon>
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] text-zinc-500 font-geist mb-0.5 uppercase tracking-widest font-semibold">Instagram</p>
                <p className="truncate text-lg text-white font-playfair">@badkaji001</p>
              </div>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}