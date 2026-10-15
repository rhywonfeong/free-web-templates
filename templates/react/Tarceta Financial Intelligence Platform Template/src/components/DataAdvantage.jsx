import React, { useEffect, useRef, useState } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Jaan', value: 1200 },
  { name: 'Veebr', value: 2100 },
  { name: 'Märts', value: 1800 },
  { name: 'Apr', value: 3200 },
  { name: 'Mai', value: 4500 },
  { name: 'Juun', value: 5800 },
  { name: 'Juul', value: 7500 },
];

const solutions = [
  {
    title: "Ärianalüütika",
    desc: "Terviklik ülevaade ettevõtte tulemuslikkusest ja andmetel põhinev otsuste langetamine.",
    icon: "solar:pie-chart-2-bold-duotone"
  },
  {
    title: "Finantsanalüütika",
    desc: "Reaalajas ülevaade rahavoogudest, eelarvetest ja olulistest finantsnäitajatest.",
    icon: "solar:wad-of-money-bold-duotone"
  },
  {
    title: "Turunduse automatiseerimine",
    desc: "Muuda rutiinsed turundustegevused automaatseks ja kasvata kampaaniate tasuvust.",
    icon: "solar:routing-2-bold-duotone"
  },
  {
    title: "Kliendiväärtuse juhtimine",
    desc: "Maksimeeri klientide eluea väärtust läbi isikupärastatud ja õigeaegse suhtluse.",
    icon: "solar:user-heart-bold-duotone"
  },
  {
    title: "RFM Segmenteerimine",
    desc: "Segmenteeri oma kliendibaas käitumise järgi, et leida kõige kasumlikumad sihtrühmad.",
    icon: "solar:layers-minimalistic-bold-duotone"
  }
];

const DataAdvantage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      {/* Original Data Advantage Section */}
      <section ref={sectionRef} className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side: Chart UI */}
          <div className="order-2 lg:order-1 relative h-[500px]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[120px] pointer-events-none bg-indigo-500/20"></div>
            
            <div className="bg-[#0A0A0A] border rounded-[2rem] p-6 lg:p-8 relative z-10 border-white/5 shadow-2xl h-full flex flex-col group hover:border-white/10 transition-colors duration-500">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h4 className="text-white font-medium text-lg">Kasvutrendid ja Prognoos</h4>
                  <p className="text-sm text-gray-500 mt-1">Sünkroniseeritud reaalajas andmed</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div>
                  Live
                </div>
              </div>

              <div className="flex-1 w-full h-full relative">
                {isVisible && (
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data} margin={{ top: 20, right: 0, bottom: 0, left: -20 }}>
                      <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8}/>
                          <stop offset="100%" stopColor="#6366f1" stopOpacity={0.1}/>
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        stroke="#6b7280" 
                        tick={{fontSize: 11, fill: '#6b7280'}} 
                        axisLine={false} 
                        tickLine={false}
                        dy={10}
                      />
                      <YAxis 
                        stroke="#6b7280" 
                        tick={{fontSize: 11, fill: '#6b7280'}} 
                        axisLine={false} 
                        tickLine={false} 
                        tickFormatter={(value) => `${value}`}
                      />
                      <Tooltip 
                        cursor={{fill: '#ffffff03'}} 
                        contentStyle={{
                          backgroundColor: '#111', 
                          border: '1px solid rgba(255,255,255,0.1)', 
                          borderRadius: '12px', 
                          color: '#fff',
                          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
                        }}
                        itemStyle={{ color: '#818cf8', fontWeight: 500 }}
                      />
                      <Bar 
                        dataKey="value" 
                        fill="url(#barGradient)" 
                        radius={[6, 6, 0, 0]} 
                        barSize={40} 
                        className="transition-all duration-300 hover:opacity-80"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#818cf8" 
                        strokeWidth={3} 
                        dot={{ fill: '#0A0A0A', stroke: '#818cf8', strokeWidth: 2, r: 5 }} 
                        activeDot={{ fill: '#818cf8', stroke: '#fff', strokeWidth: 2, r: 7 }}
                        filter="url(#glow)"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </div>
              
              {/* Overlay stats */}
              <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#111] border border-white/10 rounded-2xl p-4 flex gap-4 items-center shadow-xl backdrop-blur-md z-20">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <iconify-icon icon="solar:rocket-linear" width="20" height="20"></iconify-icon>
                </div>
                <div>
                  <div className="text-sm font-medium text-white mb-0.5">+42% Kasv</div>
                  <div className="text-[10px] text-gray-400">Võrreldes eelmise kvartaliga</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Features */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full border text-xs mb-6 font-medium border-white/10 bg-white/5 text-gray-300">
              Analüütika
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
              Andmetest saab<br />konkurentsieelis
            </h2>
            <p className="text-lg mb-12 leading-relaxed font-light text-gray-400">
              Tänapäeva ettevõttes on andmeid rohkem kui kunagi varem, kuid edu ei määra andmete hulk – vaid oskus neid mõista ja kasutada. Ärianalüütika aitab näha, mis tegelikult toimub, miks see toimub ja mis juhtub järgmisena.
            </p>

            <div className="space-y-8">
              {/* Bullet 1 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 bg-[#111] border-white/10 transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                  <iconify-icon icon="solar:graph-up-linear" width="24" height="24" className="text-indigo-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white mb-1">Suurenda tulusid ja leia uued võimalused</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Tuvasta kasumlikud suunad, optimeeri investeeringuid ja kasuta iga euro maksimaalselt ära.</p>
                </div>
              </div>

              {/* Bullet 2 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 bg-[#111] border-white/10 transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                  <iconify-icon icon="solar:target-linear" width="24" height="24" className="text-indigo-400 transition-transform group-hover:scale-110"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white mb-1">Tee otsuseid faktide, mitte kõhutunde põhjal</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Reaalsetel andmetel põhinevad prognoosid ja strateegiad annavad kindluse kiiresti muutuvas turus.</p>
                </div>
              </div>

              {/* Bullet 3 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 bg-[#111] border-white/10 transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                  <iconify-icon icon="solar:users-group-rounded-linear" width="24" height="24" className="text-indigo-400 transition-transform group-hover:scale-110"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white mb-1">Mõista kliente ja paranda efektiivsust</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Näe kliendikäitumist, tuvasta kitsaskohad ja optimeeri protsesse üle kogu ettevõtte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Solutions Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border text-xs mb-6 font-medium border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
            Meie lahendused
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Terviklikud lahendused sinu ärile
          </h2>
          <p className="text-lg text-gray-400 font-light">
            Ühendame andmed ja strateegia, et pakkuda tööriistu, mis aitavad sul saavutada märkimisväärset kasvu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <a 
              href="#" 
              key={i} 
              className={`group relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(79,70,229,0.15)] hover:-translate-y-1 overflow-hidden block ${i >= 3 ? 'lg:col-span-1' : ''}`}
            >
              {/* Subtle background gradient that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-500 relative z-10">
                <iconify-icon icon={sol.icon} width="28" height="28" className="text-gray-400 group-hover:text-indigo-400 transition-colors"></iconify-icon>
              </div>

              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-300 transition-colors relative z-10">
                {sol.title}
              </h3>
              
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 relative z-10">
                {sol.desc}
              </p>

              {/* Animated link indicator at the bottom */}
              <div className="absolute bottom-8 left-8 flex items-center gap-2 text-xs font-medium text-indigo-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-10">
                Loe lähemalt <iconify-icon icon="solar:arrow-right-linear" width="14" height="14"></iconify-icon>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default DataAdvantage;