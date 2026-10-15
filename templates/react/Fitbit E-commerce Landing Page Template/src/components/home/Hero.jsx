import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Left */}
          <div className="flex flex-col items-start max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-orange-500"></span>
              Introducing the new
            </span>
            
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
              Fitbit Versa <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Watch</span>
            </h1>
            
            <p className="text-neutral-400 text-lg mb-10 leading-relaxed max-w-md">
              Elevate your day with a premium health & fitness smartwatch—includes built-in GPS, Active Zone Minutes, and music experiences to keep you moving.
            </p>
            
            <Link 
              to="/store" 
              className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >
              Shop Now
              <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
            </Link>
          </div>
          
          {/* Image Right */}
          <div className="relative">
            <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 relative group">
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-10 pointer-events-none"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=800&q=80" 
                alt="Fitbit Versa Watch" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Floating feature tags */}
              <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full z-20 flex items-center gap-2">
                <iconify-icon icon="solar:heart-pulse-bold" class="text-orange-500"></iconify-icon>
                24/7 Heart Rate
              </div>
              <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full z-20 flex items-center gap-2">
                <iconify-icon icon="solar:map-point-bold" class="text-orange-500"></iconify-icon>
                Built-in GPS
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;