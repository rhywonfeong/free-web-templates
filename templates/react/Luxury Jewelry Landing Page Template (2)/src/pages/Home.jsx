import React, { useState, useEffect, useRef } from 'react';
import { useAuraCMSCollection } from '../lib/auraCms';

export default function Home() {
  const { items, loading } = useAuraCMSCollection('serpenti');
  
  const [isRevealed, setIsRevealed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Initial delay & reveal logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Track mouse for parallax and custom light cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Calculate normalized offset (-1 to 1) for parallax
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Map CMS items to sections, with high-quality dark-themed fallbacks if CMS lacks enough items
  const heroItem = items[0] || {};
  const detailItems = [
    items[1] || { image: 'https://images.unsplash.com/photo-1599643478514-4a820c5e0a0a?q=80&w=1200&auto=format&fit=crop', title: 'Forged in Rome. Worn by myth.' },
    items[2] || { image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop', title: 'Each scale, hand-placed. Each stone, chosen.' },
    items[3] || { image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop', title: 'Perfection where no one looks.' }
  ];

  const heroImage = heroItem.image || 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2400&auto=format&fit=crop';

  const editorialTexts = [
    "Forged in Rome. Worn by myth.",
    "Each scale, hand-placed. Each stone, chosen.",
    "Perfection where no one looks."
  ];

  if (loading && !isRevealed) {
    return <div className="min-h-screen bg-[#0A0806] cursor-none" />;
  }

  return (
    <div className="bg-[#0A0806] min-h-screen text-[#EDE8DF] selection:bg-[#C9A84C] selection:text-[#0A0806] cursor-none overflow-x-hidden font-sans">
      
      {/* Custom Cursor Light Source */}
      <div 
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-50 transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, rgba(10,8,6,0) 60%)',
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          mixBlendMode: 'screen',
          opacity: isRevealed ? 1 : 0
        }}
      />

      {/* HERO SECTION */}
      <section className="relative h-[120vh] w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Brand - Top Left */}
        <div 
          className={`absolute top-12 left-12 z-40 transition-all duration-1000 delay-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <span className="font-serif text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase">
            Bvlgari
          </span>
        </div>

        {/* Text Layer (Base) - "Underneath" the jewelry */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pt-32">
          <h1 
            className={`font-serif text-[12vw] md:text-[140px] text-[#EDE8DF]/90 tracking-[0.1em] leading-none transition-all duration-[2000ms] ease-out ${isRevealed ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-95 blur-md'}`}
            style={{
              transform: `translate(${mouseOffset.x * -10}px, ${mouseOffset.y * -10}px)`
            }}
          >
            SERPENTI
          </h1>
          <p 
            className={`mt-4 text-[10px] md:text-[12px] font-light tracking-[0.4em] uppercase text-[#EDE8DF]/60 transition-all duration-1000 delay-[1500ms] ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
          >
            Roma · Est. MCMV
          </p>
        </div>

        {/* 3D Parallax Image Layer (Middle) - Mix blend screen hides black backgrounds, making text show through darker areas */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none mix-blend-screen">
          <div 
            className={`w-[110%] h-[110%] transition-opacity duration-[3000ms] ease-in-out ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // Subtle 3D transform based on mouse
              transform: `
                translate(${mouseOffset.x * 20}px, ${mouseOffset.y * 20}px) 
                scale(1.05)
              `,
              filter: 'contrast(1.2) brightness(0.9)'
            }}
          />
        </div>

        {/* Overlay gradient to ensure edges fade to pure #0A0806 */}
        <div className="absolute inset-0 z-30 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0A0806_80%)]" />

        {/* Scroll Hint - Bottom Center */}
        <div className="absolute bottom-24 z-40 w-full flex justify-center">
          <p 
            className={`text-[10px] uppercase tracking-[0.3em] text-[#EDE8DF]/40 transition-opacity duration-1000 delay-[3000ms] ${isRevealed ? 'opacity-100' : 'opacity-0'} hover:text-[#C9A84C] transition-colors`}
          >
            Scroll to enter the collection
          </p>
        </div>
      </section>

      {/* CONTINUATION SECTION - THE REVEAL */}
      <section className="relative w-full bg-[#0A0806] py-32 z-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-32 md:gap-64">
          
          {detailItems.map((item, index) => {
            const isEven = index % 2 === 0;
            const text = editorialTexts[index];
            
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 group`}
              >
                {/* Image Frame */}
                <div className="w-full md:w-[55%] h-[60vh] md:h-[80vh] relative overflow-hidden bg-[#110D0A]">
                  <img 
                    src={item.image || item.imageUrl || heroImage} 
                    alt={`Detail ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms] ease-out mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-transparent to-[#0A0806] opacity-80" />
                </div>

                {/* Editorial Text */}
                <div className="w-full md:w-[45%] flex flex-col justify-center">
                  <p className="font-serif text-2xl md:text-[32px] text-[#EDE8DF]/90 leading-[1.6] tracking-wide font-light max-w-md transition-all duration-700 opacity-50 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    {text}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* Final Recomposition Link */}
        <div className="w-full h-[60vh] flex items-center justify-center mt-32">
          <div className="relative group cursor-none inline-block">
            <span className="font-serif text-[#EDE8DF] text-xl md:text-3xl tracking-widest font-thin">
              Discover the Serpenti Universe
            </span>
            {/* Draw-itself underline effect */}
            <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-[#C9A84C] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out" />
          </div>
        </div>
      </section>

    </div>
  );
}