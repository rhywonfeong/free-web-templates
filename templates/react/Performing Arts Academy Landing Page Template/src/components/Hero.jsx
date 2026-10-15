import React from 'react';

export default function Hero() {
  return (
    <header className="relative w-full pt-32 pb-20 px-6 md:px-12 flex flex-col md:items-center justify-center min-h-[90vh]">
      
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#e8e6df] rounded-full blur-[120px] opacity-40 -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <span className="fade-in-up inline-block mb-6 px-4 py-1.5 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm text-xs font-medium uppercase tracking-widest text-stone-500">
          New York, NY • Est. 2012
        </span>
        
        <h1 className="fade-in-up delay-100 font-serif-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-[#1a1a1a] mb-8">
          The Art <span className="italic text-stone-400">of</span> <br />
          <span className="italic">Pure</span> Observation
        </h1>

        <p className="fade-in-up delay-200 text-stone-600 text-sm md:text-lg max-w-lg mx-auto leading-relaxed font-light mb-12">
          Where technical excellence meets artistic vision. Join the premier academy for classical drawing, sketching, and illustration.
        </p>

        <div className="fade-in-up delay-300 flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3.5 rounded-full bg-[#1a1a1a] text-[#Fdfcf8] text-sm font-medium hover:bg-stone-800 transition-all flex items-center gap-2">
            View Programs
            <iconify-icon icon="solar:arrow-down-linear" width="16" height="16"></iconify-icon>
          </button>
          <button className="px-8 py-3.5 rounded-full border border-stone-300 text-[#1a1a1a] text-sm font-medium hover:bg-stone-100 transition-all">
            Explore Gallery
          </button>
        </div>
      </div>

      {/* Hero Images: Overlapping Collage */}
      <div className="mt-20 relative w-full h-[400px] md:h-[600px] max-w-6xl mx-auto hidden md:block">
        {/* Center Main */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[500px] rounded-[10rem] overflow-hidden border-4 border-white shadow-2xl z-20 hover:scale-105 transition-transform duration-700 ease-out bg-stone-100">
          <img src="https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800&q=80" alt="Artist Sketching" className="w-full h-full object-cover" />
        </div>
        
        {/* Left Offset */}
        <div className="absolute left-[15%] top-20 w-[300px] h-[400px] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden opacity-90 grayscale hover:grayscale-0 transition-all duration-700 z-10 rotate-[-6deg] bg-stone-200">
          <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&q=80" alt="Sketchbook and Tools" className="w-full h-full object-cover" />
        </div>

        {/* Right Offset */}
        <div className="absolute right-[15%] top-32 w-[320px] h-[320px] rounded-full overflow-hidden opacity-90 grayscale hover:grayscale-0 transition-all duration-700 z-10 rotate-[6deg] bg-stone-200">
          <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80" alt="Close up drawing" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}