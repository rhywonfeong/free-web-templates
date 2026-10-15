import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <div className="w-full">
      {/* SCREEN 1 - HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=2000&q=80" 
            alt="Luxury cruise ship at sunset" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A10] via-[#050A10]/60 to-[#050A10]/30"></div>
          {/* Subtle wave pattern overlay approximation using CSS radial gradients could go here, but keeping it clean with simple overlay is often more elegant */}
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
          <Reveal delay={100}>
            <span className="font-accent text-gold text-sm md:text-base tracking-[0.2em] uppercase mb-6 block">
              Designed for Extraordinary Journeys
            </span>
          </Reveal>
          <Reveal delay={300}>
            <h1 className="font-heading text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight max-w-4xl">
              Sail Beyond the Horizon
            </h1>
          </Reveal>
          <Reveal delay={500}>
            <p className="font-body text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              Experience ultra-luxury voyages crafted for those who seek elegance, comfort, and unforgettable ocean journeys.
            </p>
          </Reveal>
          <Reveal delay={700}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/book" className="px-8 py-4 bg-gold text-[#050A10] font-body font-medium text-sm hover:bg-white hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Explore Destinations
              </Link>
              <a href="#ships" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-body font-medium text-sm hover:border-gold hover:text-gold transition-all duration-300 w-full sm:w-auto">
                View Ships
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCREEN 2 - DESTINATIONS */}
      <section id="destinations" className="py-32 bg-[#050A10] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                Explore Dream Destinations
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-body text-gray-400 max-w-2xl mx-auto">
                From tropical islands to iconic coastlines, discover journeys tailored to perfection.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Maldives', desc: 'Crystal-clear waters and private island escapes', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80' },
              { title: 'Santorini', desc: 'Cliffside beauty and golden sunsets', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5f1?w=800&q=80' },
              { title: 'Dubai Marina', desc: 'Luxury skyline meets the sea', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
              { title: 'Caribbean', desc: 'Vibrant culture and endless beaches', img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80' }
            ].map((dest, i) => (
              <Reveal key={dest.title} delay={i * 150} direction="up" className="group cursor-pointer">
                <div className="relative h-96 overflow-hidden bg-[#0A111A]">
                  <img src={dest.img} alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A10] via-[#050A10]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="font-accent text-gold text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Discover</span>
                    <h3 className="font-heading text-2xl text-white mb-1">{dest.title}</h3>
                    <p className="font-body text-sm text-gray-300 line-clamp-2">{dest.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 3 - SHIP SHOWCASE */}
      <section id="ships" className="py-24 bg-[#080D16] relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <Reveal>
              <span className="font-accent text-gold text-sm tracking-[0.2em] uppercase mb-4 block">Our Fleet</span>
              <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                A Fleet Designed for Excellence
              </h2>
              <p className="font-body text-gray-400 mb-8 font-light">
                Our ships redefine luxury with world-class architecture, innovative design, and unparalleled comfort. Every detail is meticulously crafted to ensure your voyage is nothing short of extraordinary.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Aerodynamic hull design for smooth sailing',
                  '100% Ocean-view or Balcony staterooms',
                  'Eco-friendly hybrid propulsion systems'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-gray-300">
                    <iconify-icon icon="solar:check-circle-bold" className="text-gold text-lg"></iconify-icon>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          
          <div className="lg:w-1/2 relative">
            <Reveal direction="left">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img 
                  src="https://images.unsplash.com/photo-1548574505-12caf0050b5b?w=1200&q=80" 
                  alt="Top view of luxury cruise ship" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Hotspot 1: Deck */}
                <div className="absolute top-[30%] left-[50%] group cursor-help">
                  <div className="w-3 h-3 bg-gold rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-gold rounded-full relative z-10 border-2 border-[#080D16]"></div>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-[#050A10]/90 backdrop-blur border border-white/10 p-3 w-40 text-xs font-body text-white -translate-y-full -translate-x-1/2 -mt-4 rounded-sm pointer-events-none">
                    <span className="text-gold font-medium block mb-1">Sky Deck</span>
                    Panoramic views & relaxation
                  </div>
                </div>

                {/* Hotspot 2: Pool */}
                <div className="absolute top-[60%] left-[45%] group cursor-help">
                  <div className="w-3 h-3 bg-gold rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-gold rounded-full relative z-10 border-2 border-[#080D16]"></div>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-[#050A10]/90 backdrop-blur border border-white/10 p-3 w-40 text-xs font-body text-white -translate-y-full -translate-x-1/2 -mt-4 rounded-sm pointer-events-none">
                    <span className="text-gold font-medium block mb-1">Infinity Pool</span>
                    Glass-bottom edge
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SCREEN 4 - CABINS */}
      <section className="py-32 bg-[#050A10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <Reveal>
              <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                Sanctuaries at Sea
              </h2>
            </Reveal>
          </div>

          <div className="space-y-24">
            {/* Ocean Suite */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <Reveal>
                  <h3 className="font-heading text-3xl text-white mb-4">Ocean Suite</h3>
                  <p className="font-body text-gray-400 mb-6 font-light">
                    Wake up to panoramic ocean views with private balconies and premium interiors. Designed with a meticulous attention to detail, featuring organic materials and a calming color palette.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-white transition-colors">
                    View Floorplan <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </a>
                </Reveal>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 w-full">
                <Reveal direction="left">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=1000&q=80" alt="Ocean Suite" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Royal Penthouse */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 w-full">
                <Reveal direction="right">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1000&q=80" alt="Royal Penthouse" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute top-4 right-4 bg-[#050A10]/80 backdrop-blur px-4 py-1 border border-gold/30">
                      <span className="font-accent text-xs text-gold uppercase tracking-widest">Exclusive</span>
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className="md:w-1/2">
                <Reveal>
                  <h3 className="font-heading text-3xl text-white mb-4">Royal Penthouse</h3>
                  <p className="font-body text-gray-400 mb-6 font-light">
                    An exclusive experience with spacious living, personal butler service, and luxury beyond imagination. Features a wrap-around terrace and private jacuzzi overlooking the horizon.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-white transition-colors">
                    Explore Amenities <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 5 - EXPERIENCE */}
      <section id="experiences" className="py-24 bg-[#080D16] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                Unforgettable Experiences Onboard
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              { title: 'Fine Dining', desc: 'Michelin-level cuisine', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80' },
              { title: 'Infinity Pool', desc: 'Swim above the ocean', img: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80' },
              { title: 'Spa & Wellness', desc: 'Relax & rejuvenate', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80' },
              { title: 'Nightlife', desc: 'Elegant evenings', img: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80' }
            ].map((exp, i) => (
              <Reveal key={exp.title} delay={i * 100} className="relative h-80 group overflow-hidden bg-black">
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-heading text-3xl text-white mb-2 group-hover:-translate-y-2 transition-transform duration-300">{exp.title}</h3>
                  <p className="font-body text-gold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 delay-100">{exp.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 6 - VIDEO */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=1600&q=80" 
            alt="Cinematic ocean" 
            className="w-full h-full object-cover scale-105" // slight scale for parallax feel
          />
          <div className="absolute inset-0 bg-[#050A10]/60"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <Reveal>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
              Experience the Journey
            </h2>
            <button className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gold flex items-center justify-center mx-auto hover:bg-gold group transition-all duration-500">
              <iconify-icon icon="solar:play-bold" className="text-gold text-3xl group-hover:text-[#050A10] translate-x-1 transition-colors"></iconify-icon>
            </button>
          </Reveal>
        </div>
      </section>

      {/* SCREEN 7 - TESTIMONIALS */}
      <section className="py-32 bg-[#050A10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <span className="font-accent text-gold text-sm tracking-[0.2em] uppercase mb-4 block">Guest Stories</span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-white mb-20">
              What Our Guests Say
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { quote: "A truly unforgettable experience. Every moment felt like pure luxury. The attention to detail is unmatched.", name: "Sophia Williams", role: "Voyager" },
              { quote: "The best cruise I've ever taken. Exceptional service and stunning views from our penthouse suite.", name: "James Anderson", role: "Global Traveler" },
              { quote: "From dining to rooms, everything was flawless. A culinary journey that matched the beauty of the destinations.", name: "Emily Carter", role: "Food Critic" }
            ].map((test, i) => (
              <Reveal key={test.name} delay={i * 200} direction="up" className="flex flex-col items-center">
                <iconify-icon icon="solar:quote-right-bold" className="text-white/10 text-6xl mb-6"></iconify-icon>
                <p className="font-accent text-xl text-gray-300 italic mb-8 flex-grow">
                  "{test.quote}"
                </p>
                <div className="w-12 h-12 rounded-full bg-white/10 mb-4 overflow-hidden">
                   <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=faces&sat=-100&bri=20`} alt={test.name} className="w-full h-full object-cover" style={{ filter: i===0?'hue-rotate(90deg)':i===2?'hue-rotate(180deg)':'none' }}/>
                </div>
                <h4 className="font-heading text-white">{test.name}</h4>
                <span className="font-body text-xs text-gold mt-1 uppercase tracking-wider">{test.role}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 8 - PRICING */}
      <section id="pricing" className="py-24 bg-[#080D16] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                Choose Your Journey
              </h2>
              <p className="font-body text-gray-400">Select the level of luxury that suits your desires.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Silver */}
            <Reveal delay={100} direction="right">
              <div className="p-8 border border-white/10 bg-[#050A10] hover:border-white/30 transition-colors">
                <h3 className="font-heading text-2xl text-white mb-2">Silver</h3>
                <div className="font-body mb-6">
                  <span className="text-3xl text-white font-medium">$999</span>
                  <span className="text-gray-500 text-sm"> / trip</span>
                </div>
                <ul className="space-y-4 mb-8 font-body text-sm text-gray-300">
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-gold"></iconify-icon> Ocean View Cabin</li>
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-gold"></iconify-icon> Basic Dining</li>
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-gold"></iconify-icon> Access to Amenities</li>
                  <li className="flex items-center gap-3 opacity-30"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> Spa Access</li>
                </ul>
                <Link to="/book" className="block w-full py-3 text-center border border-white/20 text-white font-body text-sm hover:bg-white/5 transition-colors">Select Plan</Link>
              </div>
            </Reveal>

            {/* Gold */}
            <Reveal delay={200} direction="up" className="relative z-10">
              <div className="p-10 border border-gold bg-[#0A111A] shadow-[0_0_40px_rgba(230,201,138,0.1)] transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-[#050A10] px-4 py-1 text-xs font-medium tracking-wider uppercase font-body">Most Popular</div>
                <h3 className="font-heading text-3xl text-gold mb-2">Gold</h3>
                <div className="font-body mb-6">
                  <span className="text-4xl text-white font-medium">$1,999</span>
                  <span className="text-gray-500 text-sm"> / trip</span>
                </div>
                <ul className="space-y-4 mb-8 font-body text-sm text-gray-200">
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-gold"></iconify-icon> Balcony Suite</li>
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-gold"></iconify-icon> Premium Dining</li>
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-gold"></iconify-icon> Access to Amenities</li>
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-gold"></iconify-icon> Spa Access</li>
                </ul>
                <Link to="/book" className="block w-full py-4 text-center bg-gold text-[#050A10] font-body font-medium text-sm hover:bg-white transition-colors">Select Plan</Link>
              </div>
            </Reveal>

            {/* Platinum */}
            <Reveal delay={300} direction="left">
              <div className="p-8 border border-white/10 bg-[#050A10] hover:border-white/30 transition-colors">
                <h3 className="font-heading text-2xl text-white mb-2">Platinum</h3>
                <div className="font-body mb-6">
                  <span className="text-3xl text-white font-medium">$3,999</span>
                  <span className="text-gray-500 text-sm"> / trip</span>
                </div>
                <ul className="space-y-4 mb-8 font-body text-sm text-gray-300">
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-gold"></iconify-icon> Royal Suite</li>
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-gold"></iconify-icon> VIP Dining Access</li>
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-gold"></iconify-icon> Spa Access</li>
                  <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-gold"></iconify-icon> Private Butler</li>
                </ul>
                <Link to="/book" className="block w-full py-3 text-center border border-white/20 text-white font-body text-sm hover:bg-white/5 transition-colors">Select Plan</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SCREEN 10 - GALLERY (Placed before booking for flow) */}
      <section className="py-24 bg-[#050A10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <Reveal>
            <h2 className="font-heading text-4xl font-medium tracking-tight text-white mb-2">Moments at Sea</h2>
            <p className="font-body text-gray-400 text-sm">A glimpse into the extraordinary.</p>
          </Reveal>
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 md:px-12 pb-8 snap-x hide-scrollbar">
          {[
             "https://images.unsplash.com/photo-1548574505-12caf0050b5b?w=600&q=80",
             "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
             "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=600&q=80",
             "https://images.unsplash.com/photo-1582610116397-edb318620f90?w=600&q=80",
             "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&q=80"
          ].map((img, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] aspect-[4/5] snap-center shrink-0 border border-white/5 bg-[#0A111A]">
              <img src={img} alt={`Gallery image ${i+1}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}