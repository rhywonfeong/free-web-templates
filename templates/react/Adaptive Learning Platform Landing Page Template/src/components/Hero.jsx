import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center bg-slate-900">
      {/* Abstract Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/342229cd-6926-4bd2-9a2b-1eb13848aa86_3840w.png" 
          alt="Students collaborating in a modern educational environment" 
          className="w-full h-full object-cover"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-emerald-950/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 flex flex-col justify-between h-full py-12">
        {/* Top Bar */}
        <div className="flex justify-between items-start w-full mt-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rotate-45 flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 bg-slate-900"></div>
            </div>
            <span className="text-white font-semibold text-sm tracking-widest uppercase drop-shadow-md">LMA.</span>
          </div>
          <div className="hidden md:flex gap-8 text-white/90 text-xs font-medium tracking-widest uppercase drop-shadow-sm">
            <span className="hover:text-white cursor-pointer transition-colors">Curriculum</span>
            <span className="hover:text-white cursor-pointer transition-colors">Pedagogy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Students</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mt-20 md:mt-0">
          <h1 className="text-[4rem] md:text-[7rem] leading-[0.9] font-bold tracking-tighter text-white drop-shadow-lg">
            Learning Platform <br /> <span className="text-white/80 font-light">/ iOS App</span>
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="mt-auto pt-12 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div className="flex items-center gap-4 text-white">
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-md bg-black/20">
              <ChevronRight size={18} />
            </div>
            <div className="text-xs uppercase tracking-widest max-w-[200px] leading-relaxed opacity-90 drop-shadow-sm">
              Transforming educational pathways for modern minds.
            </div>
          </div>
          <div className="hidden md:block"></div>
          <div className="text-right text-white/80 text-xs uppercase tracking-widest drop-shadow-sm font-medium">
            2024 / Fall Semester Release
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;