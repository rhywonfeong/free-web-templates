import Reveal from './Reveal';

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      
      {/* Liquid Ambient Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-zinc-700/20 mix-blend-screen blur-[80px] animate-liquid animate-float pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-zinc-800/30 mix-blend-screen blur-[100px] animate-liquid-slow animate-float-delayed pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <Reveal delay={100} direction="none">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass glass-shine-effect text-zinc-300 text-xs font-medium tracking-wide mb-8 hover:scale-105 transition-transform duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
            </span>
            Available for new projects
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 animate-pulse">Studio</span>
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-lg md:text-2xl text-zinc-400 tracking-wide font-light mb-12 max-w-2xl mx-auto drop-shadow-md">
            Editor <span className="mx-2 text-zinc-600">•</span> Designer <span className="mx-2 text-zinc-600">•</span> Creator
          </p>
        </Reveal>

        <Reveal delay={600}>
          <button 
            onClick={scrollToAbout}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-500 ease-out rounded-full liquid-glass glass-shine-effect hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-600/20 to-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-3">
              Explore 
              <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-2 transition-transform duration-500"></iconify-icon>
            </span>
          </button>
        </Reveal>
      </div>
      
      {/* Subtle bottom fade to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
    </section>
  );
}