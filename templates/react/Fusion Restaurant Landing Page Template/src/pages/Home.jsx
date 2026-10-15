import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const float1Ref = useRef(null);
  const float2Ref = useRef(null);
  const orbRef = useRef(null);

  // Store mouse coordinates and target for smooth lerping
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      // Linear interpolation (lerp) for buttery smooth tracking
      // Reduced factor for slightly weightier, more premium feel
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.04;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.04;

      const { x, y } = mouse.current;

      // Apply 3D transforms directly to DOM nodes for max performance
      // Recalibrated Z-depths so TEXT is paramount and always in front
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
      }
      if (bgRef.current) {
        bgRef.current.style.transform = `translateZ(-150px) translateX(${x * -20}px) translateY(${y * -20}px) scale(1.1)`;
      }
      if (contentRef.current) {
        // Text is pushed furthest OUT to ensure nothing covers it
        contentRef.current.style.transform = `translateZ(120px) translateX(${x * 15}px) translateY(${y * 15}px)`;
      }
      if (float1Ref.current) {
        // Sushi - pushed behind text, smaller parallax
        float1Ref.current.style.transform = `translateZ(40px) translateX(${x * 40}px) translateY(${y * 40}px) rotate(${x * 8}deg)`;
      }
      if (float2Ref.current) {
        // Cocktail - pushed behind text, smaller parallax
        float2Ref.current.style.transform = `translateZ(60px) translateX(${x * 50}px) translateY(${y * 50}px) rotate(${x * -6}deg)`;
      }
      if (orbRef.current) {
        // Ambient glowing orb
        orbRef.current.style.transform = `translateZ(-20px) translateX(${x * 25}px) translateY(${y * 25}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    // Normalize mouse coordinates from -0.5 to 0.5
    mouse.current.targetX = (e.clientX / window.innerWidth) - 0.5;
    mouse.current.targetY = (e.clientY / window.innerHeight) - 0.5;
  };

  const handleMouseLeave = () => {
    // Return to center when mouse leaves
    mouse.current.targetX = 0;
    mouse.current.targetY = 0;
  };

  return (
    <div className="w-full">
      {/* 4D Hero Section */}
      <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505] [perspective:1000px]"
      >
        <div 
          ref={wrapperRef}
          className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
        >
          {/* Deep Background Layer */}
          <div 
            ref={bgRef}
            className="absolute inset-[-5%] w-[110%] h-[110%] z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80" 
              alt="El Sur Atmosphere" 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            {/* Darker middle layer for maximum text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/90"></div>
          </div>

          {/* Ambient 4D Glow Orb */}
          <div 
            ref={orbRef}
            className="absolute top-[30%] right-[25%] w-[400px] h-[400px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none z-0"
          ></div>

          {/* Additional text-readability backing glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-black/40 blur-[80px] pointer-events-none z-10 rounded-full"></div>

          {/* Floating Glassmorphic Sushi Layer */}
          <div 
            ref={float1Ref}
            className="hidden lg:block absolute top-[12%] right-[8%] xl:right-[12%] w-52 h-64 rounded-2xl overflow-hidden border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-10 opacity-70 transition-opacity duration-500 hover:opacity-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80" 
              alt="Sushi"
              className="w-full h-full object-cover scale-110"
            />
          </div>

          {/* Floating Glassmorphic Cocktail Layer */}
          <div 
            ref={float2Ref}
            className="hidden lg:block absolute bottom-[12%] left-[8%] xl:left-[10%] w-48 h-60 rounded-2xl overflow-hidden border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-10 opacity-70 transition-opacity duration-500 hover:opacity-100"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-transparent mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80" 
              alt="Cocktail"
              className="w-full h-full object-cover scale-110"
            />
          </div>

          {/* Pop-out Content Layer */}
          <div 
            ref={contentRef}
            className="relative z-30 text-center px-6 max-w-4xl mx-auto mt-16 pointer-events-auto"
          >
            <span className="inline-block py-1.5 px-5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold tracking-widest uppercase mb-8 border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.1)] backdrop-blur-md">
              Ranked #1 Multi-Cult Destination
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl">
              Where Tokyo meets <br className="hidden md:block"/> Oaxaca in Heraklion.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-light drop-shadow-lg leading-relaxed">
              Experience an unprecedented collision of culinary worlds. Premium sushi, authentic Mexican street food, and visionary cocktails in a vibrant, high-energy atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/reservations" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                Reserve a Table
              </Link>
              <Link 
                to="/menu" 
                className="w-full sm:w-auto px-8 py-4 bg-black/40 backdrop-blur-md text-white font-medium rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Explore the Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reputation & Vibe Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-amber-500/30 transition-colors group">
              <iconify-icon icon="solar:star-fall-linear" width="32" className="text-amber-500 mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
              <h3 className="text-xl font-medium text-white mb-3">Exceptional Reviews</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Boasting over 1,000+ reviews across Google and TripAdvisor. Recognized for our amazing hostess, vibrant evening atmosphere, and unique fusion concept.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-amber-500/30 transition-colors group">
              <iconify-icon icon="solar:chef-hat-linear" width="32" className="text-amber-500 mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
              <h3 className="text-xl font-medium text-white mb-3">The Menu Divider</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We successfully bridge the gap between Mexican heat and Japanese precision. A niche that could feel disjointed, executed with high praise for quality.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-amber-500/30 transition-colors group">
              <iconify-icon icon="solar:glass-water-linear" width="32" className="text-amber-500 mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
              <h3 className="text-xl font-medium text-white mb-3">Night Out Aesthetics</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A "must-visit" trendy spot in Crete. Enjoy signature cocktails and premium shisha in a visually stunning environment perfect for your feed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-24 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Three Pillars. <br/>One Experience.</h2>
              <p className="text-zinc-400 max-w-md">Curated menus designed to complement each other or stand entirely on their own.</p>
            </div>
            <Link to="/menu" className="group flex items-center gap-2 text-amber-500 font-medium hover:text-amber-400 transition-colors">
              View full menu
              <iconify-icon icon="solar:arrow-right-linear" width="20" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sushi House",
                desc: "Precision cuts, fresh local catch, and inventive rolls.",
                img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80"
              },
              {
                title: "Mexican Kitchen",
                desc: "Vibrant tacos, rich moles, and authentic street flavors.",
                img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80"
              },
              {
                title: "Cocktail Bar",
                desc: "Agave spirits mixed with Japanese finesse.",
                img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80"
              }
            ].map((cat, i) => (
              <div key={i} className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-semibold text-white mb-2">{cat.title}</h3>
                  <p className="text-zinc-300 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}