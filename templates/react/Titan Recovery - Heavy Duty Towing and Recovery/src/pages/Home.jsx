import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: "Heavy Wrecker & Rotator",
      desc: "50-ton and 75-ton rotators built for absolute extraction. Overturned semis, loaded trailers, and severe logistics incidents handled with brute force and precision.",
      icon: "solar:bus-bold",
      image: "https://images.unsplash.com/photo-1581568736733-5c7423e1f0e4?w=800&q=80",
      tag: "CLASS 8 RECOVERY"
    },
    {
      title: "Fleet Collision Repair",
      desc: "Full-scale commercial body shop. Frame straightening, custom fabrication, and specialized paint booths for Freightliner, Volvo VNL, and International chassis.",
      icon: "solar:hammer-bold",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c162?w=800&q=80",
      tag: "DIESEL MECHANICS"
    },
    {
      title: "Mobile Intervention",
      desc: "Tactical roadside repair units deployed 24/7. Air lines, electrical faults, tire destruction, and jumpstarts to keep the supply chain moving.",
      icon: "solar:danger-triangle-bold",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      tag: "RAPID DEPLOYMENT"
    }
  ];

  return (
    <div className="relative w-full bg-[#050505]">
      {/* Brutalist Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-schematic overflow-hidden">
        {/* Deep Industrial Background */}
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80" 
            alt="Freightliner Semi truck on highway" 
            className="w-full h-full object-cover object-center opacity-30 grayscale brightness-50 contrast-125"
            fetchpriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-[#333] bg-[#121212]/80 backdrop-blur-sm mb-8 clip-corner">
              <span className="w-2 h-2 bg-[#FF3C00] animate-pulse"></span>
              <span className="font-mono text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">SYSTEM.ACTIVE // 6 STATES</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.9] uppercase drop-shadow-2xl">
              BRUTE FORCE <br/>
              <span className="text-[#FF3C00] glow-text">RECOVERY.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 leading-relaxed max-w-2xl border-l-2 border-[#FF3C00] pl-6">
              Commanding the interstate. Uncompromising heavy-duty towing, rotator extraction, and commercial collision repair for America's logistics fleets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:9547589694" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FF3C00] text-[#050505] font-heading text-2xl uppercase tracking-wider clip-corner overflow-hidden transition-all hover:scale-[1.02]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <iconify-icon icon="solar:phone-bold" class="text-3xl relative z-10"></iconify-icon>
                <span className="relative z-10 font-bold">INITIATE DISPATCH</span>
              </a>
              <Link to="/services" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#121212] text-white font-heading text-2xl uppercase tracking-wider border border-[#333] clip-corner hover:border-[#FF3C00] hover:text-[#FF3C00] transition-colors">
                VIEW CAPABILITIES
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Grid Metrics */}
        <div className="absolute right-8 bottom-32 hidden lg:flex flex-col gap-6 font-mono text-sm text-[#FF3C00] text-right">
          <div><span className="text-gray-600 mr-2">COORD:</span>30.3322° N, 81.6557° W</div>
          <div><span className="text-gray-600 mr-2">UNITS:</span>45 ACTIVE / DEPLOYED</div>
          <div><span className="text-gray-600 mr-2">STATUS:</span>AWAITING COMMAND</div>
        </div>
      </section>

      {/* Extreme Services Grid */}
      <section className="py-32 bg-[#050505] relative border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
            <div className="max-w-2xl">
              <div className="font-mono text-[#CCFF00] text-sm tracking-widest mb-4 border-l-2 border-[#CCFF00] pl-3">[ OP.CAPABILITIES ]</div>
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">ENGINEERED FOR <br/>THE EXTREME</h2>
            </div>
            <Link to="/services" className="font-heading text-xl text-[#FF3C00] hover:text-white uppercase tracking-wider flex items-center gap-2 transition-colors group border-b border-transparent hover:border-white pb-1">
              FULL SPECIFICATIONS
              <iconify-icon icon="solar:arrow-right-bold-duotone" class="text-2xl group-hover:translate-x-2 transition-transform"></iconify-icon>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="group relative bg-[#121212] border border-[#2A2A2A] hover:border-[#FF3C00] transition-colors duration-500 clip-corner overflow-hidden">
                <div className="absolute top-4 right-4 z-20 font-mono text-[10px] bg-[#050505] text-[#FF3C00] px-2 py-1 border border-[#FF3C00]">
                  {service.tag}
                </div>
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#FF3C00] mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale contrast-125 group-hover:grayscale-0"
                  />
                  {/* Brutalist diagonal cut overlay on image */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#121212] to-transparent z-10"></div>
                </div>
                <div className="p-8 relative z-20 -mt-8">
                  <div className="w-16 h-16 bg-[#050505] border border-[#333] flex items-center justify-center mb-6 transform -translate-y-4 group-hover:-translate-y-6 transition-transform shadow-2xl">
                    <iconify-icon icon={service.icon} class="text-4xl text-[#FF3C00]"></iconify-icon>
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-[#FF3C00] transition-colors">{service.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Stats Banner */}
      <section className="py-24 bg-[#FF3C00] safety-stripes relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]/95"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 divide-x-0 md:divide-x border-y border-[#333] py-12 divide-[#333] text-center">
            {[
              { label: "TERRITORIES", value: "06" },
              { label: "HEAVY UNITS", value: "45+" },
              { label: "YEARS EXP", value: "20" },
              { label: "DISPATCH TIME", value: "<45m" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center group">
                <div className="font-heading text-6xl md:text-8xl font-bold tracking-tighter text-white mb-2 group-hover:text-[#FF3C00] transition-colors drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="font-mono text-xs font-bold text-[#CCFF00] uppercase tracking-[0.3em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}