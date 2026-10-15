import React, { useEffect, useRef } from 'react';

const HiddenGems = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let isTicking = false;

    const updateScroll = () => {
      if (sectionRef.current && containerRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalScroll = rect.height - windowHeight;
        let progress = -rect.top / totalScroll;
        progress = Math.max(0, Math.min(1, progress));

        const padding = window.innerWidth >= 768 ? 96 : 48;
        const maxTranslate = Math.max(0, containerRef.current.scrollWidth - window.innerWidth + padding);
        containerRef.current.style.transform = `translate3d(${-progress * maxTranslate}px, 0, 0)`;
      }
      isTicking = false;
    };

    const handleScrollOrResize = () => {
      if (!isTicking) {
        window.requestAnimationFrame(updateScroll);
        isTicking = true;
      }
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    setTimeout(updateScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  const gems = [
    { title: 'Crystal Clear Waters', location: 'Indian Ocean', tag: 'Maldives', price: '€2,500', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Aegean Sunset', location: 'Santorini, Greece', tag: 'Greece', price: '€1,800', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Tropical Paradise', location: 'Bali, Indonesia', tag: 'Indonesia', price: '€1,200', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Alpine Retreat', location: 'Zermatt, Switzerland', tag: 'Switzerland', price: '€3,000', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Cultural Heritage', location: 'Kyoto, Japan', tag: 'Japan', price: '€2,100', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Luxury Oasis', location: 'Dubai, UAE', tag: 'UAE', price: '€2,800', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Ancient Wonders', location: 'Andes, Peru', tag: 'Peru', price: '€1,600', img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Mediterranean Charm', location: 'Campania, Italy', tag: 'Italy', price: '€2,400', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Safari Adventure', location: 'Serengeti, Tanzania', tag: 'Tanzania', price: '€3,500', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Overwater Luxury', location: 'Bora Bora', tag: 'French Polynesia', price: '€4,200', img: 'https://images.unsplash.com/photo-1589394815804-964ce0fa5894?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <div className="relative z-20 text-black bg-[#F4F4F5] w-full" style={{ height: '500vh' }} id="hidden-gems-section" ref={sectionRef}>
      <div className="sticky flex flex-col overflow-hidden w-full h-screen top-0 justify-center" style={{ paddingTop: 'clamp(3rem, 8vh, 6rem)', paddingBottom: 'clamp(2rem, 5vh, 4rem)' }}>
        <main className="flex flex-col w-full" style={{ gap: 'clamp(1.5rem, 3vh, 2.5rem)' }}>
          
          <div className="flex flex-col md:flex-row md:items-end md:pr-12 md:pl-12 shrink-0 pr-6 pl-6 items-start justify-between gap-4 md:gap-0">
            <div className="md:w-72 lg:w-80 leading-relaxed order-2 md:order-1 hidden sm:block text-xs font-light text-[#1F3E3D]/70 w-full">
              Discover exclusive Portalra Escape packages and curated itineraries designed for the elite explorer. From luxurious private resorts to hidden cultural treasures, our travel artisans have handpicked the world's most breathtaking destinations.
            </div>
            <h2 className="leading-[0.95] order-1 uppercase md:order-2 md:w-3/5 text-[#1F3E3D] tracking-tight font-oswald" style={{ fontSize: 'clamp(2rem, 6vw, 7rem)' }}>
              Curated Portalra<br className="hidden md:block" /> Escapes Just<br className="hidden md:block" /> For You
            </h2>
            <div className="hidden md:block text-xs uppercase tracking-widest text-[#1F3E3D]/40 order-3 mb-1 whitespace-nowrap">
              Scroll to explore
            </div>
          </div>

          <div className="flex will-change-transform pl-6 md:pl-12" style={{ gap: 'clamp(0.75rem, 1.5vw, 1.25rem)', paddingRight: '1.5rem', paddingBottom: '1rem', width: 'max-content' }} id="horizontal-scroll-container" ref={containerRef}>
            {gems.map((gem, index) => (
              <div key={index} style={{ width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: 0 }} className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{ backgroundImage: `url('${gem.img}')` }}></div>
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
                
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">{gem.tag}</div>
                </div>
                
                <div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                  <button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
                    <iconify-icon icon="lucide:heart" class="w-3.5 h-3.5"></iconify-icon>
                  </button>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
                    <div className="flex flex-col gap-1">
                      <div className="text-white text-base font-normal tracking-tight drop-shadow-sm">{gem.title}</div>
                      <div className="flex items-center gap-1 text-white/70 text-xs font-light">
                        <iconify-icon icon="lucide:map-pin" class="w-3 h-3"></iconify-icon>
                        {gem.location}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
                      <div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">{gem.price}</div>
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                      View Escape Details
                      <iconify-icon icon="lucide:arrow-right" class="w-3 h-3"></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HiddenGems;