import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "\"Oravia transforms how we justify capital allocation. It’s no longer about who has the loudest voice, but who has the strongest lineage.\"",
    name: "Marcus Alvarez",
    role: "Lead Analyst, Stripe",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    stats: [
      { val: "5x", lbl: "Faster Consensus" },
      { val: "100%", lbl: "Audit Coverage" },
      { val: "Zero", lbl: "Ambiguity" }
    ]
  },
  {
    quote: "\"The ability to audit our decision logic three quarters later is invaluable. It brings a level of rigor to product strategy that didn't exist before.\"",
    name: "Sarah Chen",
    role: "VP of Product, Vercel",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
    stats: [
      { val: "3mo", lbl: "Context Retention" },
      { val: "40%", lbl: "Less Re-work" },
      { val: "Full", lbl: "Compliance" }
    ]
  },
  {
    quote: "\"We moved from opinion-based planning to evidence-backed execution. Oravia has become the absolute backbone of our strategic integrity.\"",
    name: "David Ross",
    role: "COO, Linear",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    stats: [
      { val: "2x", lbl: "Execution Velocity" },
      { val: "50+", lbl: "Decisions/Wk" },
      { val: "100%", lbl: "Alignment" }
    ]
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayStats, setDisplayStats] = useState(testimonials[0].stats);

  const handleNav = (dir) => {
    if (animating) return;
    const nextIdx = currentIndex + dir;
    if (nextIdx >= 0 && nextIdx < testimonials.length) {
      setAnimating(true);
      setCurrentIndex(nextIdx);
      setTimeout(() => {
        setDisplayStats(testimonials[nextIdx].stats);
        setAnimating(false);
      }, 300);
    }
  };

  return (
    <section className="py-32 bg-obsidian text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative w-full">
              <div className="relative w-full" style={{ display: 'grid', gridTemplateAreas: "'stack'" }}>
                {testimonials.map((t, idx) => (
                  <div key={idx} className={`transition-all duration-700 ease-in-out flex flex-col justify-center ${currentIndex === idx ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`} style={{ gridArea: 'stack' }}>
                    <h2 className="text-4xl font-semibold tracking-tighter mb-8 leading-tight">
                      {t.quote}
                    </h2>
                    <div className="flex items-center gap-4">
                      <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-sm" />
                      <div>
                        <div className="font-medium text-white">{t.name}</div>
                        <div className="text-sm text-white/50">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-10">
                <button 
                  onClick={() => handleNav(-1)} 
                  disabled={currentIndex === 0}
                  className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
                </button>
                <button 
                  onClick={() => handleNav(1)}
                  disabled={currentIndex === testimonials.length - 1}
                  className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-row md:flex-col justify-between gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
            {displayStats.map((stat, idx) => (
              <div key={idx}>
                <div className={`text-3xl font-bold mb-1 transition-all duration-300 ease-out transform ${animating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  {stat.val}
                </div>
                <div className={`text-sm text-white/50 transition-opacity duration-300 ease-out ${animating ? 'opacity-0' : 'opacity-100'}`}>
                  {stat.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}