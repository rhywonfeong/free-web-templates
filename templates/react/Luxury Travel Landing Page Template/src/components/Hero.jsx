import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const trackRef = useRef(null);
  const sceneRef = useRef(null);
  const doorPanelRef = useRef(null);
  const uiLayerRef = useRef(null);
  const portalContentRef = useRef(null);
  const portalGlowRef = useRef(null);
  const whiteoutRef = useRef(null);

  useEffect(() => {
    let scrollPos = 0;
    let targetScrollPos = 0;
    let animationFrameId;

    const handleScroll = () => {
      targetScrollPos = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const renderAnimation = () => {
      scrollPos += (targetScrollPos - scrollPos) * 0.08;

      if (trackRef.current) {
        const trackHeight = trackRef.current.offsetHeight - window.innerHeight;
        let progress = 0;

        if (trackHeight > 0) {
          progress = Math.min(Math.max(scrollPos / trackHeight, 0), 1);
        }

        // 1. Camera Push
        const easeZoom = Math.pow(progress, 3);
        const scale = 1 + easeZoom * 25;
        const translateY = easeZoom * 15;
        if (sceneRef.current) sceneRef.current.style.transform = `scale(${scale}) translateY(${translateY}%)`;

        // 2. Door Swinging Open
        if (doorPanelRef.current) {
          let angle = 0;
          if (progress > 0.05) {
            let doorProgress = Math.min((progress - 0.05) / 0.6, 1);
            const easeDoor = Math.sin((doorProgress * Math.PI) / 2);
            angle = -(easeDoor * 115);
          }
          doorPanelRef.current.style.transform = `rotateY(${angle}deg) translateZ(2px)`;
        }

        // 3. Portal Content Reveal
        if (portalContentRef.current && portalGlowRef.current) {
          const revealProgress = Math.min(Math.max((progress - 0.1) / 0.4, 0), 1);
          portalContentRef.current.style.opacity = revealProgress;
          portalGlowRef.current.style.opacity = easeZoom * 1.5;
        }

        // 4. Parallax & Fade UI Elements
        if (uiLayerRef.current) {
          const uiOpacity = Math.max(1 - progress * 5, 0);
          uiLayerRef.current.style.opacity = uiOpacity;
          const uiParallax = progress * -100;
          uiLayerRef.current.style.transform = `translateY(${uiParallax}px)`;
        }

        // 5. Whiteout Transition matching the background of the next section
        if (whiteoutRef.current) {
          if (progress > 0.8) {
            whiteoutRef.current.style.opacity = (progress - 0.8) * 5;
          } else {
            whiteoutRef.current.style.opacity = 0;
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderAnimation);
    };

    animationFrameId = requestAnimationFrame(renderAnimation);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="z-10 bg-[#0B101A] w-full h-[300vh] relative" id="scroll-track" ref={trackRef}>
      <div className="sticky overflow-hidden [perspective:1200px] w-full h-screen top-0 right-0 bottom-0 left-0">
        
        {/* 3D Scene Wrapper */}
        <div 
          className="flex [transform-style:preserve-3d] will-change-transform origin-[50%_55%] bg-center bg-cyan-950 opacity-100 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" 
          id="scene-container"
          ref={sceneRef}
        >
          {/* Background Image Container */}
          <div className="pointer-events-none z-0 absolute top-0 right-0 bottom-0 left-0">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fb0d000-28e3-4a63-9571-a768c099c566_3840w.png" alt="Background Environment" className="opacity-60 mix-blend-overlay w-full h-full object-cover" />
          </div>

          {/* Nature's Greenery Surface */}
          <div className="origin-top [transform:rotateX(80deg)_translateZ(-100px)] bg-gradient-to-b from-[#52525B]/95 to-[#18181B] w-[200%] h-[100%] border-[#A1A1AA]/30 border-t absolute top-[60%] left-[-50%] drop-shadow-2xl backdrop-blur-md">
            <div className="bg-center opacity-100 mix-blend-soft-light bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05b11cf5-028b-41dd-9248-8b56e028f570_3840w.png)] bg-contain absolute top-0 right-0 bottom-0 left-0 shadow-2xl translate-y-4"></div>
          </div>

          {/* The Door Asset */}
          <div className="sm:w-[320px] sm:h-[560px] [transform-style:preserve-3d] group xs:w-[260px] xs:h-[460px] -translate-y-8 sm:-translate-y-12 w-[220px] h-[400px] relative">
            
            {/* Destination Portal */}
            <div 
              className="bg-center will-change-[opacity] opacity-25 bg-cover rounded-t-[144px] absolute top-[8px] right-[8px] bottom-[8px] left-[8px]" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1968&auto=format&fit=crop')" }} 
              id="portal-content"
              ref={portalContentRef}
            >
              <div className="bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-t-[144px] absolute top-0 right-0 bottom-0 left-0"></div>
              <div className="bg-[#86A873]/30 opacity-0 mix-blend-screen rounded-t-[144px] absolute top-0 right-0 bottom-0 left-0 blur-xl" id="portal-glow" ref={portalGlowRef}></div>
            </div>

            {/* Realistic Stone Door Frame */}
            <div className="border-[16px] [transform:translateZ(1px)] bg-transparent border-[#EAE6DF] rounded-t-[160px] absolute top-0 right-0 bottom-0 left-0">
              <div className="absolute inset-0 border border-[#C8C3B8] rounded-t-[144px] rounded-b-sm pointer-events-none"></div>
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] rounded-t-[144px] rounded-b-sm pointer-events-none"></div>
            </div>

            {/* Realistic Wood Door Panel */}
            <div 
              className="sm:inset-[12px] origin-left transition-transform duration-75 ease-out will-change-transform [transform:translateZ(2px)] flex flex-row z-20 overflow-hidden bg-[#4A3018] border-[#2D1B0E] border rounded-t-[148px] absolute top-[8px] right-[8px] bottom-[8px] left-[8px] shadow-[10px_0_20px_rgba(0,0,0,0.5)]" 
              id="door-panel"
              ref={doorPanelRef}
            >
              {/* Wood Planks */}
              <div className="flex-1 border-r border-[#2D1B0E] shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>
              <div className="flex-1 bg-gradient-to-b from-transparent via-black/5 to-black/20 border-[#2D1B0E] border-r shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)]"></div>
              <div className="flex-1 border-r border-[#2D1B0E] shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>
              <div className="flex-1 border-r border-[#2D1B0E] shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>
              <div className="flex-1 shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>

              {/* Iron Crossbars */}
              <div className="absolute top-[25%] left-0 w-full h-5 bg-[#1A1A1A] shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] flex justify-around items-center px-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]"></div>
              </div>
              <div className="absolute bottom-[25%] left-0 w-full h-5 bg-[#1A1A1A] shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] flex justify-around items-center px-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]"></div>
              </div>

              {/* Realistic Iron Ring Door Handle */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 border-[5px] border-[#1A1A1A] rounded-full shadow-[2px_2px_6px_rgba(0,0,0,0.6)] flex items-center justify-center [transform-style:preserve-3d]">
                <div className="absolute left-[-12px] w-5 h-6 bg-[#1A1A1A] rounded-sm [transform:translateZ(-1px)] shadow-md flex flex-col justify-around py-1">
                  <div className="w-2 h-1 bg-[#333] mx-auto rounded-full"></div>
                  <div className="w-2 h-1 bg-[#333] mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UI Overlay Layer */}
        <div className="z-50 pointer-events-none flex flex-col md:p-12 will-change-[opacity,transform] p-4 sm:p-6 absolute top-0 right-0 bottom-0 left-0 justify-between" id="ui-layer" ref={uiLayerRef}>
          
          <header className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] pointer-events-auto gap-2 sm:gap-4 text-white w-full relative items-center">
            {/* Left: Logo */}
            <a href="#" className="justify-self-start flex items-center gap-2 sm:gap-3 group transition-all duration-300 hover:opacity-100 focus:outline-none">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-[#C8A96A]/10 group-hover:scale-110 group-hover:border-[#C8A96A]/50 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(200,169,106,0.4)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A96A]/0 via-[#C8A96A]/20 to-[#C8A96A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                <iconify-icon icon="lucide:plane-takeoff" class="w-4 h-4 text-white group-hover:text-[#C8A96A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500"></iconify-icon>
              </div>
              <div className="flex flex-col text-[10px] sm:text-[11px] uppercase tracking-[0.2em] leading-tight font-light">
                <span className="text-white group-hover:text-[#C8A96A] transition-colors duration-300">Portalra</span>
                <span className="text-white/60 group-hover:text-white transition-colors duration-300">Escape</span>
              </div>
            </a>

            {/* Center: Search */}
            <div className="hidden md:flex justify-self-center items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md p-1 px-5 gap-5 shadow-lg hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] hover:bg-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer group/search">
              <button className="text-white/70 hover:text-[#C8A96A] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none flex items-center justify-center group" aria-label="Location">
                <iconify-icon icon="lucide:map-pin" class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300"></iconify-icon>
              </button>
              <div className="h-3 w-px bg-white/20 group-hover/search:bg-white/40 transition-colors duration-500"></div>
              <button className="text-white/70 hover:text-[#C8A96A] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none flex items-center justify-center group" aria-label="Dates">
                <iconify-icon icon="lucide:calendar" class="w-4 h-4 group-hover:rotate-3 transition-transform duration-300"></iconify-icon>
              </button>
              <div className="h-3 w-px bg-white/20 group-hover/search:bg-white/40 transition-colors duration-500"></div>
              <button className="text-white/70 hover:text-[#C8A96A] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none flex items-center justify-center group" aria-label="Guests">
                <iconify-icon icon="lucide:users" class="w-4 h-4 group-hover:scale-110 transition-transform duration-300"></iconify-icon>
              </button>
              <div className="h-3 w-px bg-white/20 group-hover/search:bg-white/40 transition-colors duration-500"></div>
              <button className="bg-[#C8A96A] text-[#1F3E3D] p-1.5 rounded-full hover:bg-white hover:scale-110 active:scale-95 hover:shadow-[0_0_15px_rgba(200,169,106,0.6)] transition-all duration-300 focus:outline-none group" aria-label="Search">
                <iconify-icon icon="lucide:search" class="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-500"></iconify-icon>
              </button>
            </div>

            {/* Right: Navigation */}
            <div className="justify-self-end flex items-center gap-2 sm:gap-4 lg:gap-8">
              <nav className="hidden lg:flex items-center gap-6">
                <div className="relative group">
                  <button className="flex items-center gap-1.5 text-[11px] font-light uppercase tracking-widest text-white/80 hover:text-white transition-colors py-2 focus:outline-none relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-px after:bg-[#C8A96A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right group-hover:after:origin-left">
                    Destinations
                    <iconify-icon icon="lucide:chevron-down" class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"></iconify-icon>
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[#0B101A]/95 backdrop-blur-md border border-white/10 rounded-sm py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-2xl z-50">
                    <a href="#" className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300">Europe</a>
                    <a href="#" className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300">Latin America</a>
                    <a href="#" className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300">Asia</a>
                    <a href="#" className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300">Africa</a>
                  </div>
                </div>

                <div className="relative group">
                  <button className="flex items-center gap-1.5 text-[11px] font-light uppercase tracking-widest text-white/80 hover:text-white transition-colors py-2 focus:outline-none relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-px after:bg-[#C8A96A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right group-hover:after:origin-left">
                    Hotels
                    <iconify-icon icon="lucide:chevron-down" class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"></iconify-icon>
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[#0B101A]/95 backdrop-blur-md border border-white/10 rounded-sm py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-2xl z-50">
                    <a href="#" className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300">Luxury Resorts</a>
                    <a href="#" className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300">Boutique Villas</a>
                    <a href="#" className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300">Private Islands</a>
                  </div>
                </div>
              </nav>

              <div className="flex items-center gap-2 sm:gap-4 lg:gap-5 lg:border-l lg:border-white/20 lg:pl-5">
                <div className="relative group hidden sm:block">
                  <button className="flex items-center gap-1.5 text-[11px] font-light uppercase tracking-widest text-white/80 hover:text-white transition-colors py-2 focus:outline-none group-hover:text-white">
                    EN
                    <iconify-icon icon="lucide:globe" class="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300"></iconify-icon>
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-32 bg-[#0B101A]/95 backdrop-blur-md border border-white/10 rounded-sm py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-2xl z-50">
                    <a href="#" className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-[#C8A96A] bg-white/5 border-l-2 border-[#C8A96A]">English</a>
                    <a href="#" className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-5 transition-all duration-300 border-l-2 border-transparent hover:border-[#C8A96A]/50">Español</a>
                  </div>
                </div>

                <a href="#" className="hidden sm:block text-[11px] font-light uppercase tracking-widest text-white/80 hover:text-white transition-all duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-[#C8A96A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right hover:after:origin-left hover:-translate-y-0.5">Login</a>

                <button className="lg:hidden text-white/80 hover:text-[#C8A96A] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none">
                  <iconify-icon icon="lucide:menu" class="w-5 h-5"></iconify-icon>
                </button>
              </div>
            </div>
          </header>

          {/* Hero Title */}
          <div className="pointer-events-auto max-w-2xl absolute left-4 sm:left-6 md:left-24" style={{ top: 'clamp(18%, 22%, 28%)' }}>
            <h1 className="leading-[1.1] sm:text-4xl md:text-6xl text-3xl font-normal text-white tracking-tight drop-shadow-md">
              Beyond this <span className="font-light italic">Door</span> lies<br />Portalra Escape
            </h1>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col xl:flex-row pointer-events-auto text-white w-full gap-x-12 gap-y-6 sm:gap-y-8 items-end justify-between" style={{ paddingBottom: 'clamp(1rem, 4vh, 4rem)' }}>
            <div className="flex flex-col sm:gap-6 shrink-0 sm:pb-4 max-w-md pb-2 translate-y-4 gap-x-4 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C8A96A]"></div>
                <span className="text-[#C8A96A] text-xs font-oswald uppercase tracking-widest">Portalra Highlights</span>
              </div>
              <p className="text-base md:text-xl text-white/90 leading-relaxed drop-shadow-sm font-light hidden sm:block">
                Unveil extraordinary dimensions of luxury travel. curates hidden gems and private sanctuaries tailored exclusively for the modern explorer.
              </p>
              <button className="bg-[#C8A96A] text-[#1F3E3D] px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-sm font-medium hover:bg-white hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)] transition-all duration-300 w-max shadow-lg flex items-center gap-3 group">
                Unlock Experiences
                <iconify-icon icon="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></iconify-icon>
              </button>
            </div>

            <div className="flex xl:w-[700px] overflow-x-auto hide-scrollbar gap-4 sm:gap-6 snap-x snap-mandatory -mx-2 w-full pt-2 sm:pt-4 pr-2 pb-2 sm:pb-4 pl-2">
              {[
                { title: 'Alpine Silence', desc: 'Exclusive mountain lodges surrounded by untouched peaks.', img: 'https://images.unsplash.com/photo-1759624238836-d229b3ba3bf6?w=800&q=80' },
                { title: 'Desert Mirage', desc: 'Luxury tented camps under a canopy of infinite stars.', img: 'https://images.unsplash.com/photo-1554089794-0d618f479258?w=800&q=80' },
                { title: 'Coastal Haven', desc: 'Private island villas where the ocean meets the sky.', img: 'https://images.unsplash.com/photo-1671547199419-60db7d9578bb?w=800&q=80' },
              ].map((card, i) => (
                <div key={i} className="snap-start shrink-0 w-[200px] sm:w-[260px] md:w-[300px] h-[160px] sm:h-[190px] md:h-[220px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl border border-white/10">
                  <img src={card.img} className="transition-transform duration-[1.5s] ease-out group-hover:scale-110 w-full h-full object-cover" alt={card.title} />
                  <div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#1F3E3D]/90 via-[#1F3E3D]/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <iconify-icon icon="lucide:arrow-right" class="w-4 h-4 text-white"></iconify-icon>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-xl sm:text-2xl font-oswald uppercase tracking-tight text-white mb-1 sm:mb-2">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-white/70 font-light mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">
                      {card.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[#C8A96A] text-xs font-oswald tracking-widest uppercase">
                      <span>Discover</span>
                      <div className="h-px w-4 bg-[#C8A96A] group-hover:w-8 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transition Layer */}
        <div className="pointer-events-none z-[100] will-change-[opacity] bg-[#F4F4F5] opacity-0 absolute top-0 right-0 bottom-0 left-0" id="whiteout" ref={whiteoutRef}></div>
      </div>
    </div>
  );
};

export default Hero;