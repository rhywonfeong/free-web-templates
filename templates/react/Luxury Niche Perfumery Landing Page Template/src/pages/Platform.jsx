import React, { useEffect } from 'react';
import RevealText from '../components/RevealText';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default function Platform() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const craftsmanship = [
    {
      category: "Phase I",
      icon: "solar:leaf-linear",
      title: "Botanical Sourcing",
      desc: "Our master perfumers travel the globe to secure exclusive harvests of the rarest natural ingredients, from Indian Tuberose to Madagascan Vanilla.",
      materials: [
        { name: "Grasse Centifolia Rose" },
        { name: "Calabrian Bergamot" },
        { name: "Mysore Sandalwood" }
      ]
    },
    {
      category: "Phase II",
      icon: "solar:drop-linear",
      title: "Pure Extraction",
      desc: "Utilizing centuries-old enfleurage and cutting-edge CO2 extraction to capture the absolute, unadulterated soul of each raw material.",
      materials: [
        { name: "Cold-Press Expression" },
        { name: "Supercritical Fluid Extraction" },
        { name: "Traditional Steam Distillation" }
      ]
    },
    {
      category: "Phase III",
      icon: "solar:test-tube-linear",
      title: "The Maceration",
      desc: "Each formula is left to rest and mature in darkened glass vats for up to six months, allowing the complex notes to marry harmoniously.",
      materials: [
        { name: "Temperature Controlled Aging" },
        { name: "Olfactive Filtration" },
        { name: "Resin Settling" }
      ]
    },
    {
      category: "Phase IV",
      icon: "solar:bottle-linear",
      title: "Artisanal Bottling",
      desc: "Presented in hand-polished, heavy crystal flacons. Each bottle is individually sealed with gold thread and a wax stamp by our artisans.",
      materials: [
        { name: "Hand-Blown Crystal" },
        { name: "24k Gold Engraving" },
        { name: "Baudruchage Sealing" }
      ]
    }
  ];

  // Scent complexity data for the Radar Chart
  const scentProfileData = [
    { category: 'Woody', intensity: 95, fullMark: 100 },
    { category: 'Spicy', intensity: 80, fullMark: 100 },
    { category: 'Floral', intensity: 45, fullMark: 100 },
    { category: 'Oriental', intensity: 90, fullMark: 100 },
    { category: 'Fresh', intensity: 30, fullMark: 100 },
    { category: 'Musk', intensity: 85, fullMark: 100 },
  ];

  return (
    <main className="flex-1 w-full flex flex-col relative z-10 bg-[#050505]">
      
      {/* 
        HERO SECTION 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-24 md:pb-32 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-6 md:mb-0">Olfactory Architecture</p>
            <p className="text-[10px] text-white/50 max-w-[200px] leading-relaxed uppercase tracking-[0.2em]">
              The scientific and artistic foundation of our creations.
            </p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-serif tracking-tight leading-[0.9] text-white mb-8 font-normal">
              <RevealText text="The Art of Construction." />
            </h1>
          </div>
        </div>
      </section>

      {/* 
        CRAFTSMANSHIP GRID
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {craftsmanship.map((phase, index) => (
            <div 
              key={index} 
              className="flex flex-col border border-white/10 bg-[#0a0a0a] p-8 md:p-10 hover:border-[#C5A059]/30 transition-all duration-700 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Decorative Number */}
              <span className="absolute top-6 right-8 text-6xl font-serif text-white/5 group-hover:text-[#C5A059]/10 transition-colors duration-700 pointer-events-none select-none italic">
                0{index + 1}
              </span>

              <div className="text-[#C5A059] mb-8 relative z-10">
                <iconify-icon icon={phase.icon} width="32" height="32" className="transition-transform duration-700 group-hover:scale-110 origin-left"></iconify-icon>
              </div>

              <div className="relative z-10 flex-1">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mb-3">
                  {phase.category}
                </p>
                <h3 className="text-2xl font-serif tracking-tight text-white mb-4 font-normal">
                  {phase.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-light mb-12">
                  {phase.desc}
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 relative z-10">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold mb-4">
                  Signature Elements
                </p>
                <ul className="flex flex-col gap-3">
                  {phase.materials.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-light text-white/70">
                      <div className="w-1 h-1 rounded-full bg-[#C5A059]/50"></div>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        DATA VISUALIZATION: SCENT PROFILE 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div className="w-full border border-white/10 bg-[#0a0a0a] relative flex flex-col lg:flex-row items-center group overflow-hidden">
          
          <div className="w-full lg:w-1/2 p-12 md:p-24 relative z-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
            <div className="w-12 h-12 border border-[#C5A059]/30 mb-8 flex items-center justify-center text-[#C5A059] backdrop-blur-sm rounded-full">
              <iconify-icon icon="solar:magic-stick-3-linear" width="24" height="24"></iconify-icon>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-white mb-6 font-normal">
              Architecting <br/>Complexity
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md font-light mb-8">
              A master fragrance is not merely mixed; it is structurally engineered. We map the volatility, sillage, and longevity of every compound to ensure a perfect, evolving symphony on the skin.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold flex items-center gap-2">
              <iconify-icon icon="solar:chart-square-linear"></iconify-icon>
              Signature Profile: Oud Majestueux
            </p>
          </div>

          <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] relative flex items-center justify-center bg-[#050505]">
            <div className="absolute inset-0 opacity-20 bg-grid-static pointer-events-none" />
            <ResponsiveContainer width="100%" height="100%" className="relative z-10 p-8">
              <RadarChart cx="50%" cy="50%" outerRadius="65%" data={scentProfileData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="category" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(197, 160, 89, 0.3)', color: '#fff', borderRadius: '0' }}
                  itemStyle={{ color: '#C5A059' }}
                />
                <Radar name="Intensity" dataKey="intensity" stroke="#C5A059" strokeWidth={2} fill="#C5A059" fillOpacity={0.15} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </section>

    </main>
  );
}