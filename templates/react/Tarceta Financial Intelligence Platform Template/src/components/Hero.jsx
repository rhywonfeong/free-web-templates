import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="overflow-hidden pt-40 pr-6 pb-20 pl-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-indigo-500/10"></div>

      <div className="text-center max-w-4xl z-10 mr-auto ml-auto relative">
        <div className="inline-flex text-xs font-medium text-gray-300 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 items-center">
          Uus! Tehisintellektil põhinevad raportid
        </div>
        <h1 className="md:text-7xl leading-[1.1] text-5xl font-medium tracking-tight mb-6">
          Avasta oma ettevõtte<br />
          <span className="text-gray-400">andmete täielik potentsiaal</span>
        </h1>
        <p className="leading-relaxed text-lg font-light text-gray-400 max-w-2xl mr-auto mb-10 ml-auto">
          Tarceta on veebipõhine ärianalüütika lahendus, mis koondab kõik ettevõtte jaoks olulised andmed, muudab need tähendusrikkaks ning aitab neid mõista ja tulemuslikult kasutada!
        </p>
        <button className="transition-all duration-300 transform hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] text-base font-medium text-white bg-indigo-600 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
          Soovin demo
        </button>
      </div>

      <div className="max-w-5xl mx-auto mt-20 relative">
        <div className="glass-card rounded-3xl p-1 border shadow-2xl border-white/10">
          <div className="md:p-10 flex flex-col md:flex-row gap-8 overflow-hidden bg-[#0A0A0A] rounded-[20px] pt-6 pr-6 pb-6 pl-6 relative gap-x-8 gap-y-8">
            <div className="w-full md:w-1/3 bg-[#111111] rounded-2xl p-6 flex flex-col items-center justify-between border relative border-white/5">
              <div className="w-full flex justify-between text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                <span>Ettevõtte tervis</span>
                <iconify-icon icon="solar:menu-dots-bold" width="16" height="16"></iconify-icon>
              </div>
              <div className="relative w-48 h-24 mb-4">
                <svg viewBox="0 0 200 110" className="w-full h-full">
                  <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#333" strokeWidth="12" strokeLinecap="round"></path>
                  <path 
                    d="M 20 100 A 80 80 0 0 1 180 100" 
                    fill="none" 
                    stroke="#818cf8" 
                    strokeWidth="12" 
                    strokeLinecap="round" 
                    strokeDasharray="251.2" 
                    strokeDashoffset={isLoaded ? "37.7" : "251.2"} 
                    style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  ></path>
                </svg>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                  <div className="text-4xl font-medium text-white flex items-start justify-center gap-1">
                    85<span className="text-xl text-gray-400 mt-1">%</span>
                  </div>
                </div>
              </div>
              <div className={`text-center transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-sm font-medium text-gray-300">Näitajad on suurepärased</div>
              </div>
            </div>

            <div className="md:w-2/3 bg-[#111111] w-full border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative translate-x-1">
              <div className="flex mb-8 items-start justify-between">
                <div className="">
                  <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">Finantsülevaade</div>
                  <div className="text-xl font-medium">Käive vs Kulud</div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-white/5 border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <iconify-icon icon="solar:chart-square-linear" width="16" height="16" className="text-gray-400"></iconify-icon>
                  </div>
                </div>
              </div>
              <div className="h-32 flex items-end justify-between gap-2 md:gap-4 px-2">
                {[40, 70, 50, 30, 60, 45, 85, 55, 40].map((h, i) => (
                  <div 
                    key={i} 
                    className={`group ${[1, 4, 7].includes(i) ? 'bg-indigo-500' : 'bg-gray-800/30'} w-full rounded-t-md relative`} 
                    style={{ 
                      height: isLoaded ? `${h}%` : '0%', 
                      transition: `height 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s` 
                    }}
                  ></div>
                ))}
              </div>
              <div className={`flex justify-between mt-4 text-xs font-medium px-1 text-gray-600 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <span className="">Praegune marginaal</span>
                <span className="text-white">34.5%</span>
              </div>
            </div>

            <div className={`absolute bottom-6 right-6 bg-[#1A1A1A] border p-3 rounded-xl flex items-center gap-3 shadow-2xl z-20 border-white/10 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-right">
                <div className="text-sm font-medium text-white">€12 420,00</div>
                <div className="text-[10px] text-gray-500">Puhaskasum (Käesolev kuu)</div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-500/20 text-green-400">+14.2%</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;