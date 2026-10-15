import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const collections = [
    {
      id: "01",
      name: "Oud Majestueux",
      family: "Woody Oriental",
      release: "Permanent Archive",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&q=80",
      description: "A dark, mesmerizing composition centered around a rare 50-year-old Assam Oud. Enveloped in layers of black pepper, saffron, and rich Moroccan leather, it is a fragrance of uncompromising power and sophistication.",
      notes: ["Assam Oud", "Black Pepper", "Saffron", "Leather"]
    },
    {
      id: "02",
      name: "Nuit de Rose",
      family: "Floral Chypre",
      release: "Limited Allocation",
      image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=1600&q=80",
      description: "An intoxicating interpretation of the midnight garden. Over 400 hand-picked Taif roses are distilled for every flacon, resting on a bed of dark patchouli, glowing amber, and a whisper of civet.",
      notes: ["Taif Rose", "Patchouli", "Dark Amber", "Civet"]
    },
    {
      id: "03",
      name: "Cuir Impérial",
      family: "Leather Fougère",
      release: "Permanent Archive",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1600&q=80",
      description: "A tribute to the grand Parisian ateliers. Smooth, birch-tar infused leather meets the bright elegance of Calabrian bergamot and crushed cardamom, settling into a deep, smoky vanilla absolute.",
      notes: ["Russian Leather", "Cardamom", "Bergamot", "Smoked Vanilla"]
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
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-6 md:mb-0">The Collection</p>
            <p className="text-[10px] text-white/50 max-w-[200px] leading-relaxed uppercase tracking-[0.2em]">
              The permanent archive of our finest creations.
            </p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-serif tracking-tight leading-[0.9] text-white mb-8 font-normal">
              <RevealText text="Olfactory Masterpieces." />
            </h1>
          </div>
        </div>
      </section>

      {/* 
        FRAGRANCE LIST
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col gap-32 md:gap-48">
        {collections.map((fragrance, index) => (
          <div key={fragrance.id} className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 group cursor-pointer">
            
            {/* Meta Data (Left Column) */}
            <div className="col-span-1 md:col-span-3 flex flex-col relative z-20">
              <div className="sticky top-32">
                <span className="text-6xl md:text-7xl font-serif tracking-tight text-white/10 group-hover:text-[#C5A059] transition-colors duration-1000 block mb-8 font-light italic">
                  No. {fragrance.id}
                </span>
                
                <h2 className="text-3xl lg:text-4xl font-serif tracking-tight text-white mb-4 font-normal">
                  {fragrance.name}
                </h2>
                
                <ul className="flex flex-col gap-6 mb-8 border-t border-white/10 pt-6">
                  <li>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold block mb-2">Family</span>
                    <span className="text-sm text-white/80 font-light">{fragrance.family}</span>
                  </li>
                  <li>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold block mb-2">Status</span>
                    <span className="text-sm text-[#C5A059] font-light">{fragrance.release}</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {fragrance.notes.map((note, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-[9px] uppercase tracking-widest font-semibold">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual & Description (Right Column) */}
            <div className="col-span-1 md:col-span-9 flex flex-col z-10">
              <div className="w-full aspect-[4/5] md:aspect-[16/9] bg-[#0a0a0a] border border-white/10 relative overflow-hidden mb-12">
                <div className="absolute inset-0 bg-[#C5A059]/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-overlay" />
                <img 
                  src={fragrance.image} 
                  alt={fragrance.name} 
                  className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                {/* Hover Action Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-24 h-24 bg-black/60 border border-[#C5A059]/30 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-[#C5A059] scale-75 group-hover:scale-100 transition-transform duration-700 shadow-2xl">
                    <span className="text-[9px] uppercase tracking-widest font-bold mb-1">Discover</span>
                    <iconify-icon icon="solar:eye-linear" width="20" height="20"></iconify-icon>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 lg:col-start-3">
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                    {fragrance.description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* 
        CTA SECTION 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <Link to="/contact" className="block w-full bg-[#0a0a0a] border border-white/10 text-white p-12 md:p-24 flex flex-col md:flex-row items-center justify-between group transition-all duration-700 hover:bg-[#111] hover:border-[#C5A059]/30 outline-none">
          <div className="max-w-2xl mb-12 md:mb-0">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-6">Private Concierge</p>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white mb-6 group-hover:translate-x-4 transition-transform duration-700 font-normal">
              Acquire a masterpiece for your personal collection.
            </h2>
          </div>
          <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 border border-white/20 rounded-full flex items-center justify-center text-white/50 group-hover:bg-[#C5A059] group-hover:text-black group-hover:border-[#C5A059] transition-all duration-700">
            <iconify-icon icon="solar:arrow-right-up-linear" width="40" height="40" className="group-hover:rotate-45 transition-transform duration-700"></iconify-icon>
          </div>
        </Link>
      </section>

    </main>
  );
}