import React, { useEffect, useRef } from 'react';

const Destinations = () => {
  const containerRef = useRef(null);
  const thumbRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Reveal animation observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-12');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = sectionRef.current?.querySelectorAll('.fade-up-element');
    revealElements?.forEach(el => observer.observe(el));

    // Scrollbar logic
    const updateScrollbar = () => {
      if (containerRef.current && thumbRef.current) {
        const maxScrollLeft = containerRef.current.scrollWidth - containerRef.current.clientWidth;
        if (maxScrollLeft > 0) {
          const scrollPercentage = containerRef.current.scrollLeft / maxScrollLeft;
          thumbRef.current.style.left = `${scrollPercentage * 75}%`;
        }
      }
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', updateScrollbar, { passive: true });
    window.addEventListener('resize', updateScrollbar, { passive: true });
    setTimeout(updateScrollbar, 100);

    return () => {
      observer.disconnect();
      container?.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, []);

  const regions = [
    {
      title: 'Europe',
      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop',
      color: 'from-[#1F3E3D]',
      delay: '',
      links1: ['Japan', 'South Africa', 'Peru', 'Canada', 'Sri Lanka'],
      links2: ['Finland', 'Norway', 'The Arctic', 'Mexico', 'Great Britain & UK']
    },
    {
      title: 'Latin America',
      img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2000&auto=format&fit=crop',
      color: 'from-[#1F3E3D]',
      delay: 'delay-100',
      links1: ['Greece', 'South Korea', 'Eastern Europe', 'USA', 'Bhutan'],
      links2: ['Tuscany', 'Chile', 'Ireland', 'Vietnam', 'Portugal']
    },
    {
      title: 'North America',
      img: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=2000&auto=format&fit=crop',
      color: 'from-[#1F3E3D]',
      delay: 'delay-200',
      links1: ['Switzerland', 'Panama', 'Spain', 'Alaska', 'Amalfi Coast'],
      links2: ['Turkey', 'Poland', 'Kenya', 'Ecuador', 'Colombia']
    },
    {
      title: 'Africa',
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop',
      color: 'from-[#5A3A22]',
      delay: 'delay-[300ms]',
      links1: ['Southeast Asia', 'Holy Land', 'Great Barrier Reef', 'Nepal', 'Morocco'],
      links2: ['Italy', 'Bali', 'Argentina', 'Costa Rica', 'Netherlands']
    },
    {
      title: 'Asia',
      img: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?q=80&w=2000&auto=format&fit=crop',
      color: 'from-[#1F3E3D]',
      delay: 'delay-[400ms]',
      links1: ['Iceland', 'Indonesia', 'Jordan', 'Germany', 'New Zealand'],
      links2: ['France', 'Antarctica', 'Portugal & Spain', 'Austria', 'Egypt']
    },
    {
      title: 'Australia/Oceania',
      img: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=2000&auto=format&fit=crop',
      color: 'from-[#5A3A22]',
      delay: 'delay-[500ms]',
      links1: ['England', 'South America', 'Greek Islands', 'Tanzania', 'Malaysia'],
      links2: ['Croatia', 'Patagonia', 'Sicily', 'Israel', 'China']
    },
    {
      title: 'Polar',
      img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
      color: 'from-[#1F3E3D]',
      delay: 'delay-[600ms]',
      links1: ['Scandinavia', 'Brazil', 'Scotland', 'Machu Picchu', 'Grand Canyon'],
      links2: ['Cambodia', 'India', 'Georgia', 'Namibia', 'Thailand', 'Australia']
    }
  ];

  return (
    <section className="md:py-16 overflow-hidden z-20 bg-[#F4F4F5] w-full pt-12 pb-12 relative" id="popular-destinations" ref={sectionRef}>
      <div className="md:px-12 flex flex-col gap-12 md:gap-16 w-full pr-6 pl-6">
        
        <div className="flex items-center gap-6 w-full fade-up-element opacity-0 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald uppercase tracking-tight text-[#1F3E3D] shrink-0">
            Popular Destinations
          </h2>
          <div className="h-[1px] flex-1 bg-[#1F3E3D]/15 mt-2"></div>
        </div>

        <div className="relative w-full">
          <div ref={containerRef} id="destinations-scroll-container" className="flex overflow-x-auto hide-scrollbar gap-8 snap-x snap-mandatory pb-4 md:pb-8 gap-x-8 gap-y-8">
            
            {regions.map((region, idx) => (
              <div key={idx} className={`flex flex-col gap-8 shrink-0 w-[85vw] md:w-[380px] snap-start fade-up-element opacity-0 translate-y-12 transition-all duration-1000 ${region.delay} ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}>
                <div className="relative h-40 md:h-48 rounded-xl overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgba(31,62,61,0.08)]">
                  <img src={region.img} alt={`${region.title} Landscape`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${region.color}/90 via-[${region.color.split('-')[1].replace(']', '')}]/40 to-transparent mix-blend-multiply`}></div>
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent"></div>
                  
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                    <h3 className="text-3xl md:text-4xl font-oswald text-white tracking-tight drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500">{region.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">All Adventures</button>
                      <button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">Deals</button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 px-2">
                  <div className="flex flex-col gap-3">
                    {region.links1.map((link, i) => (
                      <a key={i} href="#" className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span>
                        <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    {region.links2.map((link, i) => (
                      <a key={i} href="#" className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span>
                        <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="mt-6 md:mt-8 flex flex-col items-center justify-center gap-3 w-full fade-up-element opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
            <div className="flex items-center gap-4 text-[#1F3E3D]/50">
              <iconify-icon icon="lucide:chevron-left" class="w-5 h-5"></iconify-icon>
              <div className="w-48 md:w-80 h-1.5 bg-[#1F3E3D]/10 rounded-full relative overflow-hidden">
                <div ref={thumbRef} id="destinations-scrollbar-thumb" className="absolute top-0 left-0 h-full w-1/4 bg-[#C8A96A] rounded-full transition-all duration-75 ease-linear shadow-[0_0_10px_rgba(200,169,106,0.5)]" style={{ left: '0%' }}></div>
              </div>
              <iconify-icon icon="lucide:chevron-right" class="w-5 h-5"></iconify-icon>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <iconify-icon icon="lucide:mouse" class="w-4 h-4 text-[#C8A96A] animate-bounce"></iconify-icon>
              <span className="text-[10px] md:text-xs uppercase text-[#1F3E3D]/70 tracking-widest font-oswald">Slide to Explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;