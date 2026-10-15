import React, { useEffect } from 'react';
import RevealText from '../components/RevealText';

export default function Labs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bespokeCreations = [
    {
      id: "R-01",
      title: "Extrait No. 01: Ambergris Synthesis",
      description: "Working with ethically sourced, naturally aged oceanic ambergris. Formulated exclusively for a private client in Geneva.",
      status: "Archived",
      image: "https://images.unsplash.com/photo-1595425970377-c9703c48657a?w=1600&q=80",
      notes: ["White Ambergris", "Sea Salt", "Driftwood"]
    },
    {
      id: "R-02",
      title: "Extrait No. 02: Blue Lotus Enflleurage",
      description: "Reviving the ancient Egyptian technique of cold enflleurage to extract the delicate, narcotic scent of rare Blue Lotus blossoms.",
      status: "In Maturation",
      image: "https://images.unsplash.com/photo-1548094891-c4ba474efd16?w=1600&q=80",
      notes: ["Blue Lotus", "Jasmine Grandiflorum", "Myrrh"]
    },
    {
      id: "R-03",
      title: "Extrait No. 03: Petrified Wood",
      description: "A highly experimental tincture utilizing fossilized tree resins and ancient amber to create a scent profile frozen in time.",
      status: "Active Formulation",
      image: "https://images.unsplash.com/photo-1572015099309-8472f79fb60d?w=1600&q=80",
      notes: ["Fossilized Amber", "Cade Oil", "Olibanum"]
    },
    {
      id: "R-04",
      title: "Extrait No. 04: White Truffle & Iris",
      description: "A decadent juxtaposition of earthly Italian white truffles and powdery Florentine Iris Pallida root, aged for 36 months.",
      status: "Limited Allocation",
      image: "https://images.unsplash.com/photo-1600055006497-28fb7b2931a7?w=1600&q=80",
      notes: ["Alba Truffle", "Orris Butter", "Ambrette Seed"]
    }
  ];

  return (
    <main className="flex-1 w-full flex flex-col relative z-10 bg-[#050505]">
      
      {/* 
        HERO SECTION 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-24 md:pb-32 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-6 md:mb-0">La Reserve Privée</p>
            <p className="text-[10px] text-white/50 max-w-[200px] leading-relaxed uppercase tracking-[0.2em]">
              Bespoke commissions and experimental olfactive studies.
            </p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-serif tracking-tight leading-[0.9] text-white mb-8 font-normal">
              <RevealText text="Beyond the Limits of Scent." />
            </h1>
          </div>
        </div>
      </section>

      {/* 
        BESPOKE GRID
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {bespokeCreations.map((exp) => (
            <div key={exp.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Container */}
              <div className="w-full aspect-[4/3] relative overflow-hidden mb-8 border border-white/10 bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-[#C5A059]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover opacity-60 transition-all duration-[3000ms] ease-out group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                  <span className="px-3 py-1 bg-black/60 border border-white/20 backdrop-blur-md text-[9px] uppercase tracking-widest font-bold text-white">
                    {exp.status}
                  </span>
                </div>
                <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-[#C5A059] text-black rounded-full flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 shadow-xl">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24"></iconify-icon>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col relative">
                <div className="flex items-end justify-between border-b border-white/10 pb-6 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block mb-3">
                      {exp.id}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif tracking-tight text-white group-hover:text-[#C5A059] transition-colors duration-500 font-normal">
                      {exp.title}
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                  <div className="col-span-1 sm:col-span-8">
                    <p className="text-sm text-white/60 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                  <div className="col-span-1 sm:col-span-4 flex flex-col gap-3">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                      Key Ingredients
                    </span>
                    <ul className="flex flex-col gap-2">
                      {exp.notes.map((t, i) => (
                        <li key={i} className="text-xs text-white/80 font-light flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/30"></div>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* 
        CALL TO ACTION / LABS FOOTER
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div className="w-full bg-[#0a0a0a] border border-white/10 p-12 md:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden group">
          
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-animate" />
          
          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <div className="w-16 h-16 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059] mb-8 transition-transform duration-1000 group-hover:rotate-180">
              <iconify-icon icon="solar:crown-star-linear" width="32" height="32"></iconify-icon>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-white mb-6 font-normal">
              Commission a Signature Scent
            </h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-light mb-10">
              La Reserve Privée accepts a limited number of private commissions per year. Collaborate directly with our master perfumer to engineer a fragrance completely unique to your essence.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5A059] text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
              Contact the Concierge
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}