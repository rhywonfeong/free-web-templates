import React from 'react';

const testimonials = [
  {
    quote: "The supplier proof board alone saves me hours of back-and-forth. Clients no longer question the quote because the material evidence is laid out perfectly.",
    author: "James T.",
    role: "Independent Joiner",
    location: "Manchester"
  },
  {
    quote: "Being able to just speak my site notes and have TradeAI structure it into a professional summary makes me look like a 50-person national outfit.",
    author: "Sarah W.",
    role: "Bespoke Cabinetry",
    location: "London"
  },
  {
    quote: "It's not a generic AI toy. It genuinely understands the difference between Egger MFC and real oak veneer, and prices accordingly.",
    author: "Marcus D.",
    role: "Fitted Furniture Specifier",
    location: "Bristol"
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full mx-auto px-6 py-24 animate-on-scroll border-y border-white/5 bg-neutral-950 mt-16 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">Network Feedback</span>
            <h2 className="text-4xl md:text-5xl font-display text-white tracking-tighter mt-6">
              Trusted by independent makers.
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?w=100&q=80`} 
                    className="w-full h-full object-cover grayscale opacity-70"
                    alt="User avatar"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col ml-1 border-l border-white/10 pl-3">
              <div className="flex items-center text-emerald-400">
                {[...Array(5)].map((_, i) => (
                  <iconify-icon key={i} icon="lucide:star" class="w-3 h-3 fill-current"></iconify-icon>
                ))}
              </div>
              <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider mt-0.5">Pilot Cohort 1</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="group relative bg-neutral-900/50 border border-white/5 p-8 rounded-[2rem] hover:bg-neutral-800/50 transition-all duration-500 flex flex-col justify-between overflow-hidden backdrop-blur-sm"
            >
              {/* Floating aesthetic quote icon */}
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                <iconify-icon icon="lucide:quote" class="text-6xl text-emerald-400"></iconify-icon>
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-emerald-400">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="lucide:star" class="w-4 h-4 fill-current"></iconify-icon>
                  ))}
                </div>
                <p className="text-neutral-300 leading-relaxed text-sm lg:text-base font-light">"{testimonial.quote}"</p>
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500/20 to-white/5 flex items-center justify-center border border-white/10">
                    <span className="text-xs font-mono text-emerald-400">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.author}</p>
                    <p className="text-neutral-500 text-xs mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded border border-white/5 text-neutral-400 uppercase tracking-widest">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}