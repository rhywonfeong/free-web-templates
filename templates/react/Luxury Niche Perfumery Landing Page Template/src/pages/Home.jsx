import React from 'react';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';

export default function Home() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('heritage-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-1 w-full flex flex-col bg-[#050505]">
      
      {/* 
        HERO SECTION 
      */}
      <section className="flex flex-col lg:flex-row w-full border-b border-white/10 min-h-[90vh] relative z-10">
        
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 flex flex-col border-r border-white/10 shrink-0 lg:shrink">
          {/* Logo Banner Area */}
          <div className="h-[30vh] lg:h-[45%] w-full border-b border-white/10 flex flex-col justify-center relative bg-[#050505] overflow-hidden">
            <div 
              className="absolute inset-0 opacity-40 pointer-events-none bg-grid-static" 
              style={{ clipPath: 'inset(20% 0 20% 0)' }}
            />
            <div className="absolute top-8 left-0 right-0 flex justify-center text-[#C5A059]/50">
              <iconify-icon icon="solar:crown-star-linear" width="24" height="24"></iconify-icon>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-center text-white relative z-10 transition-transform duration-700 hover:scale-[1.02] cursor-default font-normal uppercase">
              Parfums<br/>La Nobleza
            </h1>
          </div>

          {/* Copy Area */}
          <div 
            className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-end relative bg-gradient-to-tr from-[#050505] to-[#0a0a0a]"
          >
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-white font-normal mb-6">
                The Art of <br/>Niche Perfumery.
              </h2>
              <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed font-light">
                Rare fragrances crafted for those who understand true luxury. A masterclass in haute couture olfaction, entirely composed of the world's most precious botanical extracts.
              </p>
            </div>
            
            <button 
              onClick={scrollToNextSection}
              className="mt-12 md:mt-20 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] hover:text-white transition-colors cursor-pointer group w-max outline-none font-semibold"
            >
              Discover the Collection
              <iconify-icon icon="solar:alt-arrow-down-linear" className="transition-transform group-hover:translate-y-1 duration-500" />
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 flex flex-col h-[60vh] lg:h-auto bg-[#0a0a0a]">
          {/* Hero Image */}
          <div className="flex-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&q=80" 
              alt="Luxury dark perfume bottle" 
              className="w-full h-full object-cover opacity-80 transition-transform duration-[3000ms] ease-out group-hover:scale-105" 
            />
          </div>

          {/* Action Blocks */}
          <div className="h-auto lg:h-[30%] flex flex-col sm:flex-row shrink-0 border-t border-white/10 z-20 relative">
            <Link to="/projects" className="w-full sm:w-1/2 p-8 lg:p-10 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col justify-between bg-[#050505] hover:bg-[#0a0a0a] transition-colors group relative min-h-[200px] lg:min-h-0 outline-none overflow-hidden">
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              <div className="flex justify-end text-[#C5A059]/50 group-hover:text-[#C5A059] transition-colors relative z-10">
                <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24" className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-serif tracking-tight text-white mb-2 font-normal">Our Parfums</h3>
                <p className="text-xs text-white/50 tracking-widest uppercase">Explore the Archive</p>
              </div>
            </Link>

            <Link to="/contact" className="w-full sm:w-1/2 p-8 lg:p-10 flex flex-col justify-between bg-[#0a0a0a] hover:bg-[#111] transition-colors group relative min-h-[200px] lg:min-h-0 text-white outline-none">
              <div className="flex justify-end text-[#C5A059]/50 group-hover:text-[#C5A059] transition-colors">
                <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24" className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-serif tracking-tight mb-2 font-normal">Private Concierge</h3>
                <p className="text-xs text-[#C5A059] tracking-widest uppercase">Request Consultation</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 
        HERITAGE SECTION 
      */}
      <div id="heritage-section" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col pt-24 md:pt-40 pb-24 relative z-10">
        
        {/* Typography Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-24 md:mb-40">
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-6 md:mb-0">01 / The Maison</p>
            <div className="flex flex-col gap-6">
              <p className="text-[10px] text-white/50 max-w-[200px] leading-relaxed uppercase tracking-[0.2em]">
                A legacy of uncompromising quality and master craftsmanship.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.2em] mt-4">
                Scroll 
                <iconify-icon icon="solar:arrow-down-linear" width="14" height="14" className="animate-bounce" />
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-10 order-1 md:order-2">
            <h2 className="text-4xl sm:text-6xl lg:text-[6rem] xl:text-[7rem] font-serif tracking-tight leading-[0.9] text-white font-normal">
              <RevealText text="Crafting Olfactory Masterpieces." />
            </h2>
          </div>
        </section>

        {/* Editorial Imagery Block */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24 md:mb-40">
          <div className="hidden md:block col-span-2 border-t border-white/10 pt-4 relative">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold absolute top-8 left-0 origin-top-left -rotate-90 translate-y-24">Atelier</p>
          </div>
          <div className="col-span-1 md:col-span-10 relative h-[50vh] md:h-[75vh] w-full overflow-hidden border border-white/10 bg-[#0a0a0a] group">
            <img 
              src="https://images.unsplash.com/photo-1615486171448-4fdcb3116fb8?w=1600&q=80" 
              alt="Golden amber liquid extraction" 
              className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-105 opacity-70" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        </section>

        {/* Service & Capabilities Rows */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
          <div className="hidden md:block col-span-3 border-t border-white/10 pt-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold">02 / Experiences</p>
          </div>
          
          <div className="col-span-1 md:col-span-9 flex flex-col">
            
            {/* Row: Selected Work */}
            <Link to="/projects" className="group block border-t border-white/10 py-10 md:py-14 hover:bg-white/5 transition-colors duration-700 relative px-4 md:px-8 -mx-4 md:mx-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-9 gap-6 items-center">
                <div className="col-span-1 md:col-span-4">
                  <h3 className="text-3xl md:text-5xl font-serif tracking-tight text-white group-hover:translate-x-2 transition-transform duration-700 font-normal">La Collection</h3>
                </div>
                <div className="col-span-1 md:col-span-4 text-sm text-white/50 leading-relaxed font-light">
                  Discover our permanent archive of haute parfumerie, featuring rare ouds, vintage florals, and complex animalic resins.
                </div>
                <div className="col-span-1 md:col-span-1 flex justify-start md:justify-end text-white/20 group-hover:text-[#C5A059] transition-colors">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="28" height="28" className="transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>
              </div>
            </Link>

            {/* Row: Contact */}
            <Link to="/contact" className="group block border-t border-b border-white/10 py-10 md:py-14 hover:bg-white/5 transition-colors duration-700 relative px-4 md:px-8 -mx-4 md:mx-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-9 gap-6 items-center">
                <div className="col-span-1 md:col-span-4">
                  <h3 className="text-3xl md:text-5xl font-serif tracking-tight text-white group-hover:translate-x-2 transition-transform duration-700 font-normal">Bespoke Creation</h3>
                </div>
                <div className="col-span-1 md:col-span-4 text-sm text-white/50 leading-relaxed font-light">
                  Commission a signature scent. A private journey alongside our master perfumers to translate your essence into liquid art.
                </div>
                <div className="col-span-1 md:col-span-1 flex justify-start md:justify-end text-white/20 group-hover:text-[#C5A059] transition-colors">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="28" height="28" className="transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>
              </div>
            </Link>

          </div>
        </section>
      </div>

      {/* 
        OLFACTORY EXPERIENCE 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-white/10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Raw Materials</p>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white font-normal mb-6">The Olfactory Palette</h2>
            <p className="text-white/50 font-light text-sm md:text-base leading-relaxed">
              We source only the most exquisite natural ingredients. From the dark depths of aged Assam Oud to the fragile petals of Grasse Rose, every drop is a testament to nature's luxury.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
          {[
            { name: 'Oud Wood', img: 'https://images.unsplash.com/photo-1608373118227-38d5e8db23c5?w=800&q=80' },
            { name: 'Pure Amber', img: 'https://images.unsplash.com/photo-1615486171448-4fdcb3116fb8?w=800&q=80' },
            { name: 'Damascena Rose', img: 'https://images.unsplash.com/photo-1548094891-c4ba474efd16?w=800&q=80' },
            { name: 'Madagascar Vanilla', img: 'https://images.unsplash.com/photo-1600055006497-28fb7b2931a7?w=800&q=80' },
            { name: 'Dark Tobacco', img: 'https://images.unsplash.com/photo-1582236306071-8b27dddc64ee?w=800&q=80' },
            { name: 'Russian Leather', img: 'https://images.unsplash.com/photo-1555529733-0e67056058ab?w=800&q=80' }
          ].map(note => (
            <div key={note.name} className="relative aspect-square group overflow-hidden bg-[#050505]">
              <img src={note.img} alt={note.name} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:opacity-70 group-hover:mix-blend-normal transition-all duration-[2000ms] group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/20 group-hover:bg-black/40 transition-colors duration-700">
                <span className="text-white font-serif tracking-tight text-2xl md:text-4xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 drop-shadow-2xl font-light text-center">{note.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        TESTIMONIALS
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48 relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <iconify-icon icon="solar:quote-left-linear" width="40" height="40" className="text-[#C5A059]/40 mb-10"></iconify-icon>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight mb-12 font-normal">
            "Parfums La Nobleza does not just create fragrances; they engineer olfactory heirlooms. A true masterclass in haute couture perfumery."
          </h3>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#C5A059]"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-semibold">Le Journal de L'Élégance</p>
            <div className="h-[1px] w-8 bg-[#C5A059]"></div>
          </div>
        </div>
      </section>

      {/* 
        VIP NEWSLETTER 
      */}
      <section className="w-full border-t border-white/10 bg-[#0a0a0a] relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 flex flex-col items-center text-center">
          <div className="w-16 h-16 border border-[#C5A059]/30 rounded-full flex items-center justify-center mb-8">
            <iconify-icon icon="solar:letter-opened-linear" width="24" height="24" className="text-[#C5A059]"></iconify-icon>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-white mb-6 font-normal">Join The Noble Circle</h2>
          <p className="text-white/50 max-w-md text-sm leading-relaxed mb-12 font-light">
            Subscribe to receive private allocations, bespoke invitations, and editorial pieces from our master perfumers directly to your inbox.
          </p>
          <form className="flex w-full max-w-md border-b border-white/20 pb-3 focus-within:border-[#C5A059] transition-colors duration-500">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full bg-transparent text-white placeholder-white/30 text-sm outline-none px-2 font-light" 
            />
            <button 
              type="button" 
              className="text-[#C5A059] text-[10px] uppercase tracking-[0.2em] font-semibold hover:text-white transition-colors pl-4 shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}