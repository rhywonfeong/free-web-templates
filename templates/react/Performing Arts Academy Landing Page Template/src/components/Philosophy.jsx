import React from 'react';

export default function Philosophy() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <span className="font-serif-display text-3xl italic text-stone-400 mb-4 block">01.</span>
          <h2 className="font-serif-display text-5xl md:text-6xl text-[#1a1a1a] mb-8 leading-none">
            Observation, <br />
            <span className="italic text-stone-500">Technique,</span> Expression.
          </h2>
          <div className="space-y-6 text-stone-600 font-light leading-relaxed">
            <p>
              At Lumina, we believe drawing is more than mark-making—it's a way of seeing. We've stripped back the distractions to focus on high-quality drafting skills and artistic development.
            </p>
            <p>
              Whether you're mastering classical proportions at your easel or exploring expressive charcoal techniques, every class is curated for the dedicated student.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-4">
              <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?w=100&q=80" alt="Artist" />
              <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80" alt="Student" />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#1a1a1a] text-white flex items-center justify-center text-xs font-medium">+200</div>
            </div>
            <span className="text-sm font-medium text-[#1a1a1a]">Active Students</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative bg-stone-100">
            <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80" alt="Art Studio" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif-display text-2xl text-[#1a1a1a]">Fall Registration</h3>
                <iconify-icon icon="solar:calendar-linear" width="20" height="20"></iconify-icon>
              </div>
              <p className="text-xs text-stone-500 uppercase tracking-wide mb-4">Ages 12 to Adult • All Levels</p>
              <div className="w-full bg-stone-200 h-px"></div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-medium">Reserve your easel</span>
                <span className="text-sm text-stone-400">Limited Space</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}