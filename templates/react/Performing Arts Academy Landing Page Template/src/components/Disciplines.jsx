import React from 'react';

export default function Disciplines() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#Fdfcf8]">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="font-serif-display text-3xl italic text-stone-400 mb-4 block">02.</span>
          <h2 className="font-serif-display text-5xl text-[#1a1a1a]">Our Disciplines</h2>
        </div>
        <a href="#" className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium border-b border-stone-300 pb-1 hover:border-black transition-colors">
          View Full Schedule
          <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Item 1 */}
        <div className="group relative cursor-pointer">
          <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative bg-stone-100">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800&q=80" alt="Graphite Sketch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute top-6 left-6 z-20">
              <div className="bg-white/90 backdrop-blur text-[#1a1a1a] px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">Foundation</div>
            </div>
          </div>
          <h3 className="font-serif-display text-3xl text-[#1a1a1a] mb-2 group-hover:italic transition-all">Graphite &amp; Charcoal</h3>
          <p className="text-stone-500 text-sm font-light leading-relaxed max-w-xs">Building value, contrast, and rendering skills through rigorous classical training.</p>
        </div>

        {/* Item 2 */}
        <div className="group relative cursor-pointer md:mt-24">
          <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative bg-stone-100">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=800&q=80" alt="Figure Drawing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute top-6 left-6 z-20">
              <div className="bg-white/90 backdrop-blur text-[#1a1a1a] px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">Observation</div>
            </div>
          </div>
          <h3 className="font-serif-display text-3xl text-[#1a1a1a] mb-2 group-hover:italic transition-all">Figure &amp; Anatomy</h3>
          <p className="text-stone-500 text-sm font-light leading-relaxed max-w-xs">Mastering human proportions and dynamic gesture from live studio models.</p>
        </div>

        {/* Item 3 */}
        <div className="group relative cursor-pointer">
          <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative bg-stone-100">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="https://images.unsplash.com/photo-1580568019696-6e4401889fc6?w=800&q=80" alt="Pen and Ink" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute top-6 left-6 z-20">
              <div className="bg-white/90 backdrop-blur text-[#1a1a1a] px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">Technique</div>
            </div>
          </div>
          <h3 className="font-serif-display text-3xl text-[#1a1a1a] mb-2 group-hover:italic transition-all">Pen &amp; Ink Wash</h3>
          <p className="text-stone-500 text-sm font-light leading-relaxed max-w-xs">Precision and permanence. From detailed hatching to expressive ink wash techniques.</p>
        </div>
      </div>
    </section>
  );
}