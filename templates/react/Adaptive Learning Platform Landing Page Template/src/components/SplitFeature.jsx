import React from 'react';
import { ExternalLink } from 'lucide-react';

const SplitFeature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white">
      
      {/* Left Image/Render side */}
      <div className="relative aspect-square md:aspect-auto bg-slate-100 flex items-center justify-center p-12 overflow-hidden">
        {/* Simulating the translucent scene from the reference */}
        <div className="absolute inset-0">
           <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a233185-9035-403f-acf4-9bb4cc7b9c3d_1600w.png" 
            alt="Data and analytics charts" 
            className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
           />
           <div className="absolute inset-0 bg-emerald-50/40 backdrop-blur-[2px]"></div>
        </div>
        
        {/* Floating Element */}
        <div className="relative z-10 w-48 h-48 bg-lime-300 rounded-3xl shadow-[0_20px_50px_rgba(190,242,100,0.5)] flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-500 ease-out border border-white/40">
           <div className="text-6xl font-bold tracking-tighter text-emerald-950 -rotate-12 hover:rotate-0 transition-all duration-500">
             75<span className="text-3xl">%</span>
           </div>
        </div>
      </div>

      {/* Right Solid side */}
      <div className="bg-lime-300 p-12 md:p-20 flex flex-col justify-center relative">
        <div className="w-12 h-12 rounded-full border border-emerald-950/20 flex items-center justify-center mb-12">
          <div className="w-3 h-3 bg-emerald-950 rounded-sm"></div>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-emerald-950 mb-6 leading-[1.1]">
          Learning <br /> Analytics.
        </h3>
        
        <p className="text-emerald-900/80 font-medium leading-relaxed max-w-md mb-12">
          Harnessing behavioral data to surface actionable insights across virtual classrooms. Our platform evaluates thousands of student interactions per session to optimize delivery.
        </p>

        {/* Small footer labels within the box */}
        <div className="mt-auto pt-8 border-t border-emerald-950/10 flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-emerald-950/60">
          <span>01 / Pedagogy</span>
          <a href="#" className="flex items-center gap-1 hover:text-emerald-950 transition-colors">
            Explore Documentation <ExternalLink size={12} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default SplitFeature;