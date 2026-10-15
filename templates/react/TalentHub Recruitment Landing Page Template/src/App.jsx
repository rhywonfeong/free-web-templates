import React, { useEffect, useRef } from 'react';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.dataset.animation || 'up';
          const delay = element.dataset.delay || 0;
          
          setTimeout(() => {
            switch(animationType) {
              case 'up': element.classList.add('animate-up'); break;
              case 'left': element.classList.add('animate-left'); break;
              case 'right': element.classList.add('animate-right'); break;
              case 'fade': element.classList.add('animate-fade'); break;
              default: element.classList.add('animate-up');
            }
          }, parseInt(delay));
          
          observer.unobserve(element);
        }
      });
    }, observerOptions);
    
    if (containerRef.current) {
      const animatedElements = containerRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(element => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={containerRef} className="border-gradient xl:rounded-[3.5rem] xl:p-12 overflow-hidden flex flex-col xl:max-w-[96rem] xl:shadow-2xl bg-neutral-900 w-full rounded-none pt-6 pr-6 pb-6 pl-6 relative shadow-none justify-between">
      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b243e82-f723-488d-8219-cb8900a58d96_1600w.webp" alt="Container background" className="w-1/2 h-[960px] object-cover rounded-[40px] absolute top-4 right-4 bottom-0" data-container-bg="true" />
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-800/20 via-transparent to-blue-950/10 pointer-events-none"></div>
      
      {/* Vertical Lines Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden xl:rounded-[3.5rem]">
        <div className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-neutral-700/30 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-[25%] w-px bg-gradient-to-b from-transparent via-neutral-700/20 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-neutral-700/30 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-[75%] w-px bg-gradient-to-b from-transparent via-neutral-700/20 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-[90%] w-px bg-gradient-to-b from-transparent via-neutral-700/30 to-transparent"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="z-20 flex flex-wrap gap-6 md:mb-0 mix-blend-plus-lighter mb-12 relative gap-x-6 gap-y-6 items-center justify-between">
        {/* Logo Area */}
        <div className="animate-on-scroll flex items-center group cursor-pointer" data-animation="left" data-delay="0">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/9109ecbb-cdc4-4815-981e-2ea83be13765/31521508-046d-4335-b622-a3574110c741-logo3.svg?v=1775137796071" 
            alt="TalentHub Logo" 
            className="w-10 h-10 group-hover:rotate-[22.5deg] transition-transform duration-500 ease-out"
          />
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-12 text-xs font-medium tracking-widest uppercase text-neutral-400">
          <a href="#" className="animate-on-scroll hover:text-white transition-colors flex items-center gap-2" data-animation="up" data-delay="100">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            Find a Job
          </a>
          <a href="#" className="animate-on-scroll hover:text-white transition-colors flex items-center gap-2" data-animation="up" data-delay="150">
            <div className="w-2 h-2 rounded-full border border-neutral-600"></div>
            Post a Job
          </a>
          <a href="#" className="animate-on-scroll hover:text-white transition-colors mix-blend-hard-light" data-animation="up" data-delay="200">Companies</a>
          <a href="#" className="animate-on-scroll hover:text-white transition-colors" data-animation="up" data-delay="250">Resources</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="animate-on-scroll hidden uppercase hover:bg-neutral-800 transition-colors md:flex text-xs font-semibold tracking-widest bg-gradient-to-br from-white/10 to-white/0 rounded-full px-6 py-3" data-animation="right" data-delay="100" style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px' }}>
            Log In
          </button>
          <button className="md:hidden p-3 rounded-full bg-white text-neutral-950">
            <iconify-icon icon="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" class="w-5 h-5"></iconify-icon>
          </button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="z-10 flex-grow flex flex-col md:py-0 pt-10 pb-10 relative justify-center">
        
        {/* Talents Found Badge */}
        <div className="animate-on-scroll flex md:mb-4 md:mt-12 mt-4 mb-6 gap-x-4 gap-y-4 items-center" data-animation="up" data-delay="300">
          <div className="flex -space-x-2">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-neutral-900" alt="user" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-neutral-900" alt="user" />
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-neutral-900" alt="user" />
          </div>
          <p className="text-xs md:text-sm uppercase tracking-widest text-neutral-500 max-w-md font-medium">
            75k+ talents found their dream job
          </p>
        </div>

        {/* Massive Typography */}
        <div className="group relative">
          {/* Floating Label 1 */}
          <div className="animate-on-scroll hidden -top-4 hover:scale-105 transition-transform cursor-default lg:flex bg-neutral-900 z-20 border-neutral-700 border rounded-full px-5 py-2 absolute top-[0%] left-[38%] shadow-sm gap-x-2 gap-y-2 items-center" data-animation="fade" data-delay="800">
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-neutral-300">Remote Friendly</span>
          </div>

          {/* Floating Label 2 */}
          <div className="animate-on-scroll hidden hover:scale-105 transition-transform cursor-default lg:flex bg-neutral-900 z-20 border-neutral-700 border rounded-full px-5 py-2 absolute top-[45%] right-[0%] shadow-sm gap-x-2 gap-y-2 items-center" data-animation="right" data-delay="900">
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-neutral-300">Top Companies</span>
          </div>

           {/* Floating Label 3 */}
           <div className="animate-on-scroll hidden lg:flex z-20 gap-2 hover:scale-105 transition-transform cursor-default text-neutral-950 bg-emerald-400 rounded-full px-5 py-2 absolute bottom-[-12%] left-[2%] shadow-lg gap-x-2 gap-y-2 items-center" data-animation="left" data-delay="1000">
            <span className="text-[0.65rem] font-bold uppercase tracking-widest">New Offers Daily</span>
          </div>

          <h1 className="text-[16vw] md:text-[14vw] lg:text-[12rem] leading-[0.8] uppercase select-none md:text-left font-medium text-white tracking-tighter font-oswald text-center mix-blend-normal max-w-4xl">
            <span className="animate-on-scroll inline-block" data-animation="up" data-delay="400">Your</span>
            <span className="animate-on-scroll inline-block pl-0 md:pl-16" data-animation="up" data-delay="500">Creative</span>
            <span className="animate-on-scroll block text-neutral-600" data-animation="up" data-delay="600">Journey</span>
          </h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="z-20 flex flex-col lg:flex-row gap-12 mt-8 relative gap-x-12 gap-y-12 items-end justify-between">
        
        {/* Left: Description Text */}
        <div className="flex flex-col gap-6 max-w-lg">
          <div className="animate-on-scroll flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-neutral-500" data-animation="up" data-delay="700">
            <span>Explore Opportunities</span>
            <span className="w-4 h-[1px] bg-neutral-600"></span>
            <span>Build Your Career</span>
          </div>
          
          <p className="animate-on-scroll text-sm md:text-base text-neutral-400 leading-relaxed font-normal text-pretty uppercase tracking-wide" data-animation="up" data-delay="800">
            The ultimate platform to discover and apply to the most exciting creative roles, with complete transparency.
          </p>

          {/* Animated Gradient Beam CTA Button (Blue) */}
          <div className="flex flex-wrap gap-3 items-center">
            <button className="animate-on-scroll group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-space rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center" data-animation="up" data-delay="900">
              {/* Full Border Beam (Single Beam) */}
              <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)]" style={{ animation: 'beam-spin 3s linear infinite' }}></div>
                <div className="absolute inset-[1px] rounded-full bg-neutral-950"></div>
              </div>

              {/* Inner Background & Effects */}
              <div className="-z-10 overflow-hidden bg-neutral-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/60 to-transparent"></div>
                <div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite' }}></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/30"></div>
              </div>

              <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">Start Searching</span>
              <iconify-icon icon="streamline:arrow-right-1" class="relative z-10 ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"></iconify-icon>
            </button>
            
            <button className="animate-on-scroll px-5 py-2 rounded-full border border-neutral-700 text-[0.7rem] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors" data-animation="up" data-delay="1000">
              Post a Job
            </button>
          </div>
        </div>

        {/* Right: Feature Cards with Marquee */}
        <div className="lg:w-auto flex flex-col md:flex-row gap-4 w-full gap-x-4 gap-y-4">
          
          {/* Feature 1 with Marquee */}
          <div className="animate-on-scroll group flex-1 lg:flex-none lg:w-48 hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 cursor-pointer overflow-hidden bg-neutral-800/50 rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg" data-animation="up" data-delay="1100" style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px' }}>
            <div className="relative h-28 mb-4 overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}>
              <div className="marquee-content">
                <div className="flex flex-col gap-3 pb-3">
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:case-round-bold-duotone" class="w-5 h-5 text-blue-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:code-square-bold-duotone" class="w-5 h-5 text-emerald-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:palette-bold-duotone" class="w-5 h-5 text-purple-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Creative</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:megaphone-bold-duotone" class="w-5 h-5 text-orange-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Marketing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:camera-bold-duotone" class="w-5 h-5 text-pink-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Photography</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:case-round-bold-duotone" class="w-5 h-5 text-blue-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:code-square-bold-duotone" class="w-5 h-5 text-emerald-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:palette-bold-duotone" class="w-5 h-5 text-purple-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Creative</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:megaphone-bold-duotone" class="w-5 h-5 text-orange-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Marketing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:camera-bold-duotone" class="w-5 h-5 text-pink-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Photography</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-1">10k+ Jobs</h3>
            <p className="text-[0.65rem] leading-normal opacity-70 uppercase">Creative roles worldwide.</p>
          </div>

          {/* Feature 2 with Marquee */}
          <div className="animate-on-scroll group flex-1 lg:flex-none lg:w-48 hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 cursor-pointer overflow-hidden bg-neutral-800/50 rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg" data-animation="up" data-delay="1200" style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px' }}>
            <div className="relative h-28 mb-4 overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}>
              <div className="marquee-content" style={{ animationDuration: '25s' }}>
                <div className="flex flex-col gap-3 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">G</div>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Google</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">M</div>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Meta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">A</div>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Apple</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">S</div>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Stripe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">N</div>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Netflix</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">G</div>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Google</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">M</div>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Meta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">A</div>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Apple</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">S</div>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Stripe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[0.5rem] font-bold">N</div>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Netflix</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-1">Top Brands</h3>
            <p className="text-[0.65rem] leading-normal opacity-70 uppercase">500+ Leading companies.</p>
          </div>

          {/* Feature 3 with Marquee */}
          <div className="animate-on-scroll group flex-1 lg:flex-none lg:w-48 hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 cursor-pointer overflow-hidden bg-neutral-800/50 rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg" data-animation="up" data-delay="1300" style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px' }}>
            <div className="relative h-28 mb-4 overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}>
              <div className="marquee-content" style={{ animationDuration: '18s' }}>
                <div className="flex flex-col gap-3 pb-3">
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:check-circle-bold-duotone" class="w-5 h-5 text-emerald-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">One Click</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:magic-stick-3-bold-duotone" class="w-5 h-5 text-blue-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Auto Fill</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:star-bold-duotone" class="w-5 h-5 text-yellow-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Save Jobs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:bell-bold-duotone" class="w-5 h-5 text-purple-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:clock-circle-bold-duotone" class="w-5 h-5 text-cyan-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Track</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:check-circle-bold-duotone" class="w-5 h-5 text-emerald-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">One Click</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:magic-stick-3-bold-duotone" class="w-5 h-5 text-blue-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Auto Fill</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:star-bold-duotone" class="w-5 h-5 text-yellow-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Save Jobs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:bell-bold-duotone" class="w-5 h-5 text-purple-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:clock-circle-bold-duotone" class="w-5 h-5 text-cyan-400"></iconify-icon>
                    <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Track</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-1">Fast Apply</h3>
            <p className="text-[0.65rem] leading-normal opacity-70 uppercase">One-click applications.</p>
          </div>

        </div>
      </div>

      {/* Matching Engine Section */}
      <div className="flex flex-col md:px-0 z-20 w-full max-w-[90rem] border-white/5 border-t mt-32 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative gap-x-16 gap-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <h2 className="animate-on-scroll md:text-5xl lg:text-6xl uppercase leading-[0.9] text-3xl font-medium text-white tracking-tight font-bricolage" data-animation="up" data-delay="0">
            Intelligent <span className="text-neutral-600">Context</span>  Matching Engine
          </h2>
          <p className="animate-on-scroll text-sm md:text-base text-neutral-400 font-normal uppercase tracking-wide max-w-xl" data-animation="up" data-delay="100">
            Our cutting-edge tech groups opportunities by relevance using semantic analysis to match you with top companies.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full gap-x-6 gap-y-6">
          
          {/* Card 1: Automated Tagging */}
          <div className="animate-on-scroll group relative bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col h-[600px] hover:border-neutral-700 transition-all duration-500" data-animation="left" data-delay="200">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-emerald-400 mb-2 border border-neutral-700 shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]">
                <iconify-icon icon="solar:magic-stick-3-bold-duotone" class="w-6 h-6"></iconify-icon>
              </div>
              <h3 className="uppercase text-2xl font-semibold text-white tracking-tight font-bricolage">Automated Tagging</h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs font-space">We parse job descriptions instantly, extracting skills and context to match your profile.</p>
              
              {/* Logic Flow Diagram */}
              <div className="flex items-center gap-3 text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 mt-2">
                <span className="bg-neutral-800 px-3 py-1 rounded-full border border-neutral-700">Raw Data</span>
                <span className="w-8 h-[1px] bg-neutral-700"></span>
                <span className="text-emerald-400">AI Context</span>
                <span className="w-8 h-[1px] bg-neutral-700"></span>
                <span className="bg-neutral-800 px-3 py-1 rounded-full border border-neutral-700">Smart Tags</span>
              </div>
            </div>

            {/* Isometric Floating Tags Visualization */}
            <div className="flex-1 w-full mt-4 relative perspective-[1000px]">
              <div className="transform flex absolute top-0 right-0 bottom-0 left-0 scale-100 rotate-x-12 items-center justify-center">

                {/* Connecting Noodles (SVG) */}
                <svg className="pointer-events-none z-0 w-full h-full absolute top-0 right-0 bottom-0 left-0" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ overflow: 'visible' }}>
                  <path d="M 200 150 L 200 80 Q 200 60 180 60 L 40 60" stroke="#262626" strokeWidth="1" fill="none"></path>
                  <path d="M 200 150 L 200 80 Q 200 60 180 60 L 40 60" stroke="#10b981" strokeWidth="1.5" fill="none" strokeDasharray="6 6" strokeLinecap="round" style={{ animation: 'flow-noodle 3s linear infinite' }}></path>
                  <path d="M 200 150 L 340 150 Q 360 150 360 130 L 360 80" stroke="#262626" strokeWidth="1" fill="none"></path>
                  <path d="M 200 150 L 340 150 Q 360 150 360 130 L 360 80" stroke="#10b981" strokeWidth="1.5" fill="none" strokeDasharray="6 6" strokeLinecap="round" style={{ animation: 'flow-noodle 4s linear infinite reverse' }}></path>
                  <path d="M 200 150 L 200 220 Q 200 240 180 240 L 60 240" stroke="#262626" strokeWidth="1" fill="none"></path>
                  <path d="M 200 150 L 200 220 Q 200 240 180 240 L 60 240" stroke="#10b981" strokeWidth="1.5" fill="none" strokeDasharray="6 6" strokeLinecap="round" style={{ animation: 'flow-noodle 3.5s linear infinite' }}></path>
                </svg>

                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-emerald-500/20 bg-emerald-500/5 blur-3xl z-0"></div>

                {/* Central Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-neutral-950 border border-emerald-500/30 p-3 rounded-2xl shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] relative group cursor-pointer hover:border-emerald-500/60 transition-colors">
                      <div className="group-hover:opacity-100 transition-opacity bg-emerald-500/20 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0 blur-xl"></div>
                      <iconify-icon icon="solar:cpu-bold-duotone" class="text-emerald-400 relative z-10 w-6 h-6"></iconify-icon>
                    </div>
                  </div>
                </div>

                {/* Tag 1 (React) */}
                <div className="transition-transform duration-700 hover:-translate-y-2 absolute top-[20%] left-[10%]" style={{ transform: 'translate(-50%, -250%)' }}>
                  <div className="flex items-center gap-2 bg-neutral-800/90 backdrop-blur-md border border-neutral-700 pr-4 pl-3 py-2 rounded-full shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all cursor-pointer group">
                    <iconify-icon icon="simple-icons:react" class="text-blue-400 group-hover:rotate-180 transition-transform duration-700"></iconify-icon>
                    <span className="text-xs font-medium text-white">React Native</span>
                  </div>
                </div>

                {/* Tag 2 (Figma) */}
                <div className="transition-transform duration-700 delay-100 hover:-translate-y-2 z-10 absolute top-[27%] right-[10%]" style={{ transform: 'translate(50%, -200%)' }}>
                  <div className="flex items-center gap-2 bg-neutral-800/90 backdrop-blur-md border border-neutral-700 pr-4 pl-3 py-2 rounded-full shadow-xl hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all cursor-pointer">
                    <iconify-icon icon="simple-icons:figma" class="text-purple-400"></iconify-icon>
                    <span className="text-xs font-medium text-white">Product Design</span>
                  </div>
                </div>

                {/* Tag 3 (Lead) */}
                <div className="absolute bottom-[20%] left-[15%] transition-transform duration-700 delay-200 hover:-translate-y-2 z-10" style={{ transform: 'translate(-50%, 250%)' }}>
                  <div className="flex items-center gap-2 bg-neutral-800/90 backdrop-blur-md border border-neutral-700 pr-4 pl-3 py-2 rounded-full shadow-xl hover:border-red-500/50 hover:shadow-red-500/20 transition-all cursor-pointer">
                    <iconify-icon icon="simple-icons:google" class="text-white"></iconify-icon>
                    <span className="text-xs font-medium text-white">Senior Lead</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Card 2: Filter Rules */}
          <div className="animate-on-scroll group relative bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col h-[600px] hover:border-neutral-700 transition-all duration-500" data-animation="right" data-delay="300">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4 mb-10">
              <div className="flex text-blue-400 bg-neutral-800 w-12 h-12 border-neutral-700 border rounded-full mb-2 items-center justify-center">
                <iconify-icon icon="solar:tuning-2-bold-duotone" class="w-6 h-6"></iconify-icon>
              </div>
              <h3 className="uppercase text-2xl font-semibold text-white tracking-tight font-bricolage">Your Rules, Your Feed</h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs font-space">Apply advanced boolean logic to refine your issue lists and create custom views.</p>
            </div>

            {/* UI Mockup Container */}
            <div className="relative z-10 flex-1 w-full bg-neutral-950 border border-neutral-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 font-space overflow-hidden group-hover:border-neutral-700/50 transition-colors">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-2">
                <div className="flex items-center gap-2">
                  <iconify-icon icon="solar:filter-bold-duotone" class="w-4 h-4 text-neutral-400"></iconify-icon>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">Set Filter Rules</span>
                </div>
                <span className="bg-blue-900/20 text-blue-300 border border-blue-800/50 text-[0.6rem] font-bold uppercase tracking-wider px-2 py-1 rounded">4 Active</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-500 w-10 text-right">Where</span>
                <div className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-between items-center group/input hover:border-neutral-600 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:dollar-minimalistic-bold-duotone" class="w-4 h-4"></iconify-icon>
                    <span>Salary Range</span>
                  </div>
                  <iconify-icon icon="solar:alt-arrow-down-bold-duotone" class="w-4 h-4"></iconify-icon>
                </div>
                <div className="w-14 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-center font-mono">&gt;</div>
                <div className="w-24 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-white font-medium flex items-center justify-between">
                  <span>$120k</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-500 w-10 text-right">And</span>
                <div className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-between items-center group/input hover:border-neutral-600 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:map-point-bold-duotone" class="w-4 h-4"></iconify-icon>
                    <span>Location</span>
                  </div>
                  <iconify-icon icon="solar:alt-arrow-down-bold-duotone" class="w-4 h-4"></iconify-icon>
                </div>
                <div className="w-14 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-center font-mono">=</div>
                <div className="w-24 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-white font-medium flex items-center justify-between">
                  <span>Remote</span>
                </div>
              </div>

              <div className="mt-2 bg-neutral-900/40 rounded-xl p-4 border border-dashed border-neutral-800 flex flex-col gap-3 relative">
                <div className="absolute -left-3 top-6 w-3 h-[1px] bg-neutral-800"></div>
                <div className="absolute -left-3 top-0 h-6 w-[1px] bg-neutral-800"></div>

                <div className="flex items-center gap-3">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-500 w-10 text-right">Or</span>
                  <div className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-between items-center group/input hover:border-neutral-600 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <iconify-icon icon="solar:suitcase-tag-bold-duotone" class="w-4 h-4"></iconify-icon>
                      <span>Role Type</span>
                    </div>
                    <iconify-icon icon="solar:alt-arrow-down-bold-duotone" class="w-4 h-4"></iconify-icon>
                  </div>
                  <div className="w-14 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-neutral-300 flex justify-center font-mono">=</div>
                  <div className="w-24 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-xs text-white font-medium flex items-center justify-between">
                    <span>Contract</span>
                  </div>
                </div>
              </div>
              
              <button className="mt-2 flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors w-max py-2">
                <iconify-icon icon="solar:add-circle-bold-duotone" class="w-4 h-4"></iconify-icon>
                <span>Add Condition</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Venture Backed Section */}
      <div className="flex flex-col md:px-0 z-20 w-full max-w-[90rem] border-white/5 border-t mt-32 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative gap-x-16 gap-y-16">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="animate-on-scroll flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-[0.65rem] uppercase tracking-widest text-neutral-400 font-semibold" data-animation="up" data-delay="0">
            <iconify-icon icon="solar:star-bold-duotone" class="w-3 h-3 text-emerald-400"></iconify-icon>
            <span>Venture Backed</span>
          </div>
          <h2 className="animate-on-scroll md:text-5xl lg:text-6xl uppercase leading-[0.9] text-3xl font-medium text-white tracking-tight font-bricolage" data-animation="up" data-delay="100">
            Clients Funded by <span className="text-neutral-600">Elite Firms</span>
          </h2>
          <p className="animate-on-scroll text-sm md:text-base text-neutral-400 font-normal uppercase tracking-wide max-w-xl" data-animation="up" data-delay="150">
            Join the next unicorn. Our platform features opportunities from startups backed by the industry's most prestigious investors.
          </p>
        </div>

        <div className="w-full relative perspective-[2000px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
            <div className="animate-on-scroll animate-levitate group relative flex flex-col justify-between h-[420px] bg-neutral-950/40 backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] overflow-hidden" data-animation="up" data-delay="200">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start z-10">
                <span className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 border border-white/5 px-2 py-1 rounded-md bg-neutral-900/50">Series A+</span>
                <span className="font-space font-medium text-emerald-400 text-sm">$8B Funded</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110">
                <div className="flex flex-col items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white mb-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.343C5.628 21.77 7.53 22 9.5 22C11.59 22 13.596 21.745 15.49 21.265C13.886 16.425 13.79 12.062 17 8Z" opacity="0.5"></path><path d="M16.5 2.5C11.5 3 9.5 7 9.5 12C9.5 14.5 9.8 17 10.5 19C11.3 16 12 14 15 12C18 10 17 8 16.5 2.5Z"></path></svg>
                  <span className="text-xl font-bold tracking-tight text-white">SEQUOIA</span>
                </div>
              </div>
              <div className="z-10 flex flex-col gap-1 border-t border-white/5 pt-4">
                <span className="text-3xl font-medium text-white font-bricolage group-hover:translate-x-1 transition-transform duration-300">142</span>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                  Portfolio Companies
                  <iconify-icon icon="solar:arrow-right-bold-duotone" class="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors"></iconify-icon>
                </p>
              </div>
            </div>

            <div className="animate-on-scroll animate-levitate-delayed group relative flex flex-col justify-between h-[420px] bg-neutral-950/40 backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] overflow-hidden lg:mt-12" data-animation="up" data-delay="300">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start z-10">
                <span className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 border border-white/5 px-2 py-1 rounded-md bg-neutral-900/50">Late Stage</span>
                <span className="font-space font-medium text-blue-400 text-sm">$12B Funded</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110">
                <span className="font-bricolage font-bold text-5xl tracking-tighter text-white">a16z</span>
              </div>
              <div className="z-10 flex flex-col gap-1 border-t border-white/5 pt-4">
                <span className="text-3xl font-medium text-white font-bricolage group-hover:translate-x-1 transition-transform duration-300">89</span>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                  Portfolio Companies
                  <iconify-icon icon="solar:arrow-right-bold-duotone" class="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors"></iconify-icon>
                </p>
              </div>
            </div>

            <div className="animate-on-scroll animate-levitate group relative flex flex-col justify-between h-[420px] bg-neutral-950/40 backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.1)] overflow-hidden" data-animation="up" data-delay="400">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start z-10">
                <span className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 border border-white/5 px-2 py-1 rounded-md bg-neutral-900/50">Seed & Growth</span>
                <span className="font-space font-medium text-purple-400 text-sm">$5B Funded</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    <div className="w-2 h-8 bg-white/80"></div>
                    <div className="w-2 h-8 bg-white/60"></div>
                    <div className="w-2 h-8 bg-white/40"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold tracking-tight text-xl leading-none text-white">FOUNDERS</span>
                    <span className="font-light tracking-widest text-[0.6rem] leading-none text-neutral-400">FUND</span>
                  </div>
                </div>
              </div>
              <div className="z-10 flex flex-col gap-1 border-t border-white/5 pt-4">
                <span className="text-3xl font-medium text-white font-bricolage group-hover:translate-x-1 transition-transform duration-300">56</span>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                  Portfolio Companies
                  <iconify-icon icon="solar:arrow-right-bold-duotone" class="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors"></iconify-icon>
                </p>
              </div>
            </div>

            <div className="animate-on-scroll animate-levitate-delayed group relative flex flex-col justify-between h-[420px] bg-neutral-950/40 backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] overflow-hidden lg:mt-12" data-animation="up" data-delay="500">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start z-10">
                <span className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 border border-white/5 px-2 py-1 rounded-md bg-neutral-900/50">Accelerator</span>
                <span className="font-space font-medium text-orange-400 text-sm">$4B Funded</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110">
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                  <span className="text-neutral-950 font-bold text-4xl">Y</span>
                </div>
              </div>
              <div className="z-10 flex flex-col gap-1 border-t border-white/5 pt-4">
                <span className="text-3xl font-medium text-white font-bricolage group-hover:translate-x-1 transition-transform duration-300">200+</span>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                  Portfolio Companies
                  <iconify-icon icon="solar:arrow-right-bold-duotone" class="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors"></iconify-icon>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-col md:px-0 z-20 w-full max-w-[90rem] border-white/5 border-t mt-32 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative gap-x-16 gap-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          <div className="lg:col-span-5 relative flex flex-col justify-center p-6 lg:p-12 overflow-hidden rounded-[2.5rem] bg-neutral-900/50 border border-white/5">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent"></div>
            
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-emerald-500/50"></span>
                <span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase font-space">Statistics</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight font-bricolage leading-[1.1]">
                Hiring At Scale, 
                <span className="text-neutral-500">Simplified.</span>
              </h2>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-space max-w-md">
                TalentHub empowers recruitment teams to move faster without compromising on candidate quality. Our data-driven approach ensures precision in every placement.
              </p>
              <button className="mt-4 group flex items-center gap-3 text-sm font-medium text-white w-max">
                <span className="border-b border-emerald-500 pb-0.5 group-hover:border-white transition-colors">View full report</span>
                <iconify-icon icon="solar:arrow-right-bold-duotone" class="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform"></iconify-icon>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white text-neutral-950 rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-between gap-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-100 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center relative z-10 group">
              <span className="text-6xl md:text-7xl font-medium tracking-tighter font-bricolage w-48 shrink-0 group-hover:scale-105 transition-transform duration-500 origin-left">15K+</span>
              <div className="flex flex-col gap-2 max-w-xs">
                <h3 className="text-lg font-semibold tracking-tight">Active Candidates Weekly</h3>
                <p className="text-xs text-neutral-500 font-medium leading-relaxed uppercase tracking-wide">Numbers that reflect our constantly growing pool of vetted talent.</p>
              </div>
            </div>
            <div className="h-px w-full bg-neutral-100"></div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center relative z-10 group">
              <span className="text-6xl md:text-7xl font-medium tracking-tighter font-bricolage w-48 shrink-0 group-hover:scale-105 transition-transform duration-500 origin-left">8.5K+</span>
              <div className="flex flex-col gap-2 max-w-xs">
                <h3 className="text-lg font-semibold tracking-tight">Matches Made Monthly</h3>
                <p className="text-xs text-neutral-500 font-medium leading-relaxed uppercase tracking-wide">TalentHub continues to empower creators across the globe.</p>
              </div>
            </div>
            <div className="h-px w-full bg-neutral-100"></div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center relative z-10 group">
              <span className="text-6xl md:text-7xl font-medium tracking-tighter font-bricolage w-48 shrink-0 group-hover:scale-105 transition-transform duration-500 origin-left">99%</span>
              <div className="flex flex-col gap-2 max-w-xs">
                <h3 className="text-lg font-semibold tracking-tight">Placement Satisfaction</h3>
                <p className="text-xs text-neutral-500 font-medium leading-relaxed uppercase tracking-wide">Our journey in numbers: consistent growth, satisfied clients.</p>
              </div>
            </div>
            <div className="h-px w-full bg-neutral-100"></div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center relative z-10 group">
              <span className="text-6xl md:text-7xl font-medium tracking-tighter font-bricolage w-48 shrink-0 group-hover:scale-105 transition-transform duration-500 origin-left">24h</span>
              <div className="flex flex-col gap-2 max-w-xs">
                <h3 className="text-lg font-semibold tracking-tight">Average Time to Hire</h3>
                <p className="text-xs text-neutral-500 font-medium leading-relaxed uppercase tracking-wide">Smooth, instant, and distraction-free hiring process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-950 w-full border-white/5 rounded-3xl border-t mt-0 pt-24 pb-12 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-t from-emerald-900/10 to-transparent blur-[100px] pointer-events-none"></div>

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <a href="#" className="flex items-center group w-max">
                <img 
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/9109ecbb-cdc4-4815-981e-2ea83be13765/31521508-046d-4335-b622-a3574110c741-logo3.svg?v=1775137796071" 
                  alt="TalentHub Logo" 
                  className="w-12 h-12 group-hover:rotate-90 transition-transform duration-700 ease-in-out"
                />
              </a>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs font-space">
                The next generation hiring platform for creative and technical talent. Built for speed, designed for quality.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-950/30 transition-all duration-300 group">
                  <iconify-icon icon="solar:camera-bold-duotone" class="w-5 h-5"></iconify-icon>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/30 transition-all duration-300 group">
                  <iconify-icon icon="solar:plain-bold-duotone" class="w-5 h-5"></iconify-icon>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/30 transition-all duration-300 group">
                  <iconify-icon icon="solar:basketball-bold-duotone" class="w-5 h-5"></iconify-icon>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Platform</h4>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">Browse Jobs</a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">For Companies</a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">Pricing</a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">Success Stories</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Resources</h4>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">Blog</a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">Salary Guide</a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">Help Center</a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">API Docs</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Company</h4>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">About Us</a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">Careers</a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">Press</a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 text-sm transition-colors w-max">Contact</a>
            </div>
          </div>

          <div className="w-full border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iconify-icon icon="simple-icons:stripe" class="w-24 h-8 text-white"></iconify-icon>
              <iconify-icon icon="simple-icons:vercel" class="w-24 h-8 text-white"></iconify-icon>
              <iconify-icon icon="simple-icons:notion" class="w-24 h-8 text-white"></iconify-icon>
              <iconify-icon icon="simple-icons:spotify" class="w-24 h-8 text-white"></iconify-icon>
            </div>
            
            <p className="text-neutral-600 text-xs font-medium uppercase tracking-wider">
              © 2024 Talent Hub Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="absolute top-[30%] right-[-10%] md:right-[5%] w-[30vw] h-[30vw] md:w-[20rem] md:h-[20rem] rounded-full bg-gradient-to-b from-blue-900/30 to-purple-900/20 opacity-40 blur-3xl pointer-events-none"></div>
      <div className="hidden lg:flex animate-[spin_10s_linear_infinite] w-32 h-32 border-neutral-700/30 border rounded-full absolute right-[25%] bottom-[20%] items-center justify-center">
        <div className="w-full h-[1px] bg-neutral-700/30"></div>
      </div>
    </main>
  );
}

export default App;