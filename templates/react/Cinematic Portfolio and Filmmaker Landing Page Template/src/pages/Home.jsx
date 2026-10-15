import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Cinematic abstract dark liquid" 
            className="w-full h-full object-cover object-center opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 z-10 text-zinc-800/50 animate-float hidden md:block">
           <iconify-icon icon="solar:music-note-slider-2-bold-duotone" width="120" height="120"></iconify-icon>
        </div>
        <div className="absolute bottom-1/3 right-1/4 z-10 text-zinc-800/50 animate-float-delayed hidden md:block">
           <iconify-icon icon="solar:videocamera-record-bold-duotone" width="140" height="140"></iconify-icon>
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
          <Reveal delay={100}>
            <p className="text-amber-500 tracking-[0.3em] text-sm md:text-base font-medium mb-6 uppercase">
              Visionary • Creator • Record Breaker
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter font-medium uppercase leading-[0.9] mb-8">
              Ziyad <br/><span className="text-zinc-400">Mazzawi</span>
            </h1>
          </Reveal>

          <Reveal delay={500}>
            <p className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-12">
              Music Producer · Filmmaker · Multiple Guinness World Record Holder based in Jordan, operating globally.
            </p>
          </Reveal>

          <Reveal delay={700}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#work" className="px-8 py-4 bg-amber-500 text-zinc-950 font-medium tracking-wide uppercase hover:bg-amber-400 transition-colors flex items-center gap-2">
                Explore My Work
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
              </a>
              <Link to="/contact" className="px-8 py-4 border border-zinc-700 text-zinc-300 font-medium tracking-wide uppercase hover:border-zinc-400 hover:text-white transition-colors">
                Get In Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal type="scale">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-zinc-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516280440502-6c58fb0bf88b?q=80&w=2000&auto=format&fit=crop" 
                  alt="Ziyad Mazzawi in Studio" 
                  className="relative rounded-lg object-cover h-[600px] w-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="text-4xl md:text-6xl tracking-tighter font-medium mb-8 uppercase">
                  The Creative <br/><span className="text-amber-500">Force.</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="space-y-6 text-zinc-400 text-lg font-light">
                  <p>
                    A Jordanian entrepreneur and the visionary mind behind Next Level Productions and ZMCorp. 
                    I blend the art of sound, the magic of cinema, and the thrill of live experiences into singular, unforgettable moments.
                  </p>
                  <p>
                    As a music producer and filmmaker, my work spans continents. As an event architect, 
                    I've pushed the boundaries of what's physically possible, etching my name into history 
                    as a multiple Guinness World Record holder.
                  </p>
                  <p className="pl-6 border-l-2 border-amber-500 text-zinc-200 italic">
                    "We don't just host events; we engineer phenomena that challenge limits."
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANIES SECTION */}
      <section id="work" className="py-24 bg-zinc-900/50 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl tracking-tighter font-medium uppercase mb-4">Ventures</h2>
              <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="group relative p-10 bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 transition-colors duration-500 overflow-hidden min-h-[400px] flex flex-col justify-end">
                <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop" alt="Event crowd" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
                </div>
                <div className="relative z-10">
                  <iconify-icon icon="solar:global-bold-duotone" width="48" height="48" class="text-amber-500 mb-6"></iconify-icon>
                  <h3 className="text-3xl tracking-tighter font-medium mb-4 uppercase">ZMCorp</h3>
                  <p className="text-zinc-400 font-light mb-6">Pioneering massive brand experiences, monumental events, and executing record-breaking productions that capture global attention.</p>
                  <span className="text-sm tracking-widest uppercase text-amber-500 font-medium group-hover:translate-x-2 transition-transform inline-block">Discover More →</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="group relative p-10 bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 transition-colors duration-500 overflow-hidden min-h-[400px] flex flex-col justify-end">
                <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop" alt="Recording Studio" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
                </div>
                <div className="relative z-10">
                  <iconify-icon icon="solar:clapperboard-play-bold-duotone" width="48" height="48" class="text-amber-500 mb-6"></iconify-icon>
                  <h3 className="text-3xl tracking-tighter font-medium mb-4 uppercase">Next Level Productions</h3>
                  <p className="text-zinc-400 font-light mb-6">Elite music production, audio engineering, and cinematic filmmaking. Crafting auditory and visual narratives that resonate.</p>
                  <span className="text-sm tracking-widest uppercase text-amber-500 font-medium group-hover:translate-x-2 transition-transform inline-block">Discover More →</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GUINNESS RECORDS SECTION */}
      <section className="py-32 relative overflow-hidden bg-zinc-950">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-zinc-950 to-zinc-950 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-6 mb-20">
              <div className="p-4 bg-zinc-900 border border-amber-500/30 rounded-full flex-shrink-0">
                <iconify-icon icon="solar:cup-star-bold" width="48" height="48" class="text-amber-500"></iconify-icon>
              </div>
              <div>
                <h2 className="text-4xl md:text-6xl tracking-tighter font-medium uppercase text-gradient">Officially Amazing</h2>
                <p className="text-zinc-400 uppercase tracking-widest text-sm mt-2">Multiple Guinness World Record Holder</p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-12">
            <Reveal delay={200}>
              <div className="flex flex-col md:flex-row gap-8 items-center bg-zinc-900/40 border border-zinc-800 p-8 hover:bg-zinc-900 transition-colors">
                <div className="md:w-1/3">
                  <span className="text-6xl md:text-8xl font-medium tracking-tighter text-zinc-800">01</span>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl tracking-tight font-medium mb-2">World's Longest Slip & Slide</h3>
                  <p className="text-amber-500 tracking-wider text-sm mb-4">611.7 METERS • DEAD SEA, JORDAN (2015)</p>
                  <p className="text-zinc-400 font-light">An engineering marvel constructed at the lowest point on earth. This massive undertaking brought thousands together for a record-breaking experience of a lifetime.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-col md:flex-row gap-8 items-center bg-zinc-900/40 border border-zinc-800 p-8 hover:bg-zinc-900 transition-colors">
                <div className="md:w-1/3">
                  <span className="text-6xl md:text-8xl font-medium tracking-tighter text-zinc-800">02</span>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl tracking-tight font-medium mb-2">Largest Human Floating Image</h3>
                  <p className="text-amber-500 tracking-wider text-sm mb-4">DEAD SEA, JORDAN (2014)</p>
                  <p className="text-zinc-400 font-light">Coordinating hundreds of participants to float simultaneously in the hyper-saline waters of the Dead Sea, creating a stunning visual spectacle visible from above.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MUSIC & FILM PREVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-6">
              <h2 className="text-3xl md:text-4xl tracking-tighter font-medium uppercase">Latest Releases</h2>
              <a href="#" className="text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition-colors hidden md:block">View All Projects</a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, i) => (
              <Reveal key={item} delay={i * 150} type="scale">
                <div className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden bg-zinc-900 mb-4">
                    <img 
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1614613535308-eb5fbd3d2c17' : i === 1 ? '1485030056468-3820af9e5e29' : '1511671782779-c97d3d27a1d4'}?q=80&w=800&auto=format&fit=crop`}
                      alt="Project thumbnail" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <iconify-icon icon="solar:play-circle-bold" width="64" height="64" class="text-white"></iconify-icon>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium tracking-tight mb-1 group-hover:text-amber-500 transition-colors">
                    {i === 0 ? 'Desert Echoes EP' : i === 1 ? 'Neon Nights Soundtrack' : 'Live at The Citadel'}
                  </h4>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider">{i === 0 ? 'Music Production' : i === 1 ? 'Film Score' : 'Live Event Video'}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS MARQUEE */}
      <section className="py-20 border-t border-zinc-800/50 bg-zinc-950 overflow-hidden">
        <Reveal>
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-zinc-600 font-medium">Featured In</p>
          </div>
        </Reveal>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex items-center gap-16 md:gap-32 whitespace-nowrap px-8 text-zinc-600">
            {/* Repeating for seamless loop */}
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <span className="text-2xl font-medium tracking-tighter uppercase flex items-center gap-2">
                  <iconify-icon icon="solar:book-bookmark-bold" width="32"></iconify-icon> Jordan Times
                </span>
                <span className="text-2xl font-medium tracking-tighter uppercase flex items-center gap-2">
                  <iconify-icon icon="solar:global-bold" width="32"></iconify-icon> Arab America
                </span>
                <span className="text-2xl font-medium tracking-tighter uppercase flex items-center gap-2">
                  <iconify-icon icon="solar:cup-star-bold" width="32"></iconify-icon> Guinness World Records
                </span>
                <span className="text-2xl font-medium tracking-tighter uppercase flex items-center gap-2">
                  <iconify-icon icon="solar:microphone-3-bold" width="32"></iconify-icon> The Business Podcast
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}