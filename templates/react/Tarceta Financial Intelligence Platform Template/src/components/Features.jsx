import React, { useState, useEffect } from 'react';

const Features = () => {
  // Real-time animation states for the first section
  const [trendVal, setTrendVal] = useState(14.2);
  const [savingsVal, setSavingsVal] = useState(12.5);
  const [barHeights, setBarHeights] = useState([40, 35, 45, 30, 25, 20]);
  const [yCoords, setYCoords] = useState([25, 20, 22, 10, 15, 2]);

  useEffect(() => {
    // Subtly shift values every 4 seconds to simulate live data
    const interval = setInterval(() => {
      setTrendVal(prev => +(prev + (Math.random() * 0.4 - 0.15)).toFixed(1));
      setSavingsVal(prev => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      
      setBarHeights(prev => prev.map(h => 
        Math.max(15, Math.min(85, h + (Math.random() * 16 - 8)))
      ));
      
      setYCoords(prev => prev.map((y, i) => {
        // Keep the start and end of the line chart slightly more stable
        const change = i === 0 || i === prev.length - 1 
          ? (Math.random() * 4 - 2) 
          : (Math.random() * 8 - 4);
        return Math.max(2, Math.min(28, y + change));
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const xCoords = [0, 20, 40, 60, 80, 100];
  const pathD = `M ${xCoords.map((x, i) => `${x},${yCoords[i]}`).join(' L ')}`;

  return (
    <>
      {/* Feature 1 */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border text-xs mb-6 font-medium border-white/10 bg-white/5 text-gray-300">
              Tarceta eelised
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
              Muuda andmed selgeteks<br />otsusteks Tarcetaga
            </h2>
            <p className="text-lg mb-10 leading-relaxed font-light text-gray-400">
              Tarceta aitab sul teha kindlaid ja äriliselt olulisi otsuseid, muutes keeruka ärianalüütika lihtsaks, kättesaadavaks ja praktiliselt kasutatavaks.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-white/5 border-white/10">
                  <iconify-icon icon="solar:pie-chart-2-linear" width="20" height="20" className="text-indigo-400"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white">Kõik olulised andmed ühes vaates</h4>
                  <p className="text-sm text-gray-400 mt-1 font-light">Koonda ettevõtte andmed ühele visuaalsele töölauale ja saa terviklik ülevaade.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-white/5 border-white/10">
                  <iconify-icon icon="solar:chart-square-linear" width="20" height="20" className="text-indigo-400"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white">Prognoosi ja tuvasta trende</h4>
                  <p className="text-sm text-gray-400 mt-1 font-light">Analüüsi tehinguid, ennusta tulevikku ning märka mustreid enne konkurente.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-white/5 border-white/10">
                  <iconify-icon icon="solar:shield-check-linear" width="20" height="20" className="text-indigo-400"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white">Reageeri kiiremini ja vähenda riske</h4>
                  <p className="text-sm text-gray-400 mt-1 font-light">Valmis näitajad ja visuaalid aitavad teha kiiremaid ja täpsemaid otsuseid.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-white/5 border-white/10">
                  <iconify-icon icon="solar:wallet-money-linear" width="20" height="20" className="text-indigo-400"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white">Säästa aega ja vähenda kulusid</h4>
                  <p className="text-sm text-gray-400 mt-1 font-light">Väldi käsitööd, andmete killustatust ja vigu ning hoia kontrolli all IT- ja tööjõukulud.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Feature 1 */}
          <div className="relative">
            <div className="bg-[#0A0A0A] border rounded-3xl p-8 relative z-10 border-white/5 flex flex-col gap-6">
               <div className="flex justify-between items-center pb-4 border-b border-white/5">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                     <iconify-icon icon="solar:pie-chart-2-bold-duotone" width="20" height="20" className="text-indigo-400"></iconify-icon>
                   </div>
                   <div>
                     <div className="text-white text-sm font-medium">Terviklik ülevaade</div>
                     <div className="text-gray-500 text-[10px]">Sünkroniseeritud reaalajas</div>
                   </div>
                 </div>
                 <div className="px-2.5 py-1.5 rounded flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                   Aktiivne
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-[#111] p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-gray-500 text-[10px] uppercase font-medium">Trendid</div>
                      <iconify-icon icon="solar:graph-up-linear" width="14" height="14" className="text-indigo-400"></iconify-icon>
                    </div>
                    <div className="text-white text-xl font-medium mb-3">+{trendVal.toFixed(1)}%</div>
                    <svg viewBox="0 0 100 30" className="w-full h-8 overflow-visible">
                      <path 
                        d={pathD} 
                        fill="none" 
                        stroke="#818cf8" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{ transition: 'all 3s ease-in-out' }}
                      />
                    </svg>
                 </div>
                 <div className="bg-[#111] p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-gray-500 text-[10px] uppercase font-medium">Kulude sääst</div>
                      <iconify-icon icon="solar:wallet-money-linear" width="14" height="14" className="text-emerald-400"></iconify-icon>
                    </div>
                    <div className="text-white text-xl font-medium mb-2">-{savingsVal.toFixed(1)}%</div>
                    <div className="flex gap-1 h-8 items-end">
                      {barHeights.map((h, i) => (
                        <div 
                          key={i} 
                          className="w-full bg-emerald-400/20 rounded-t-sm" 
                          style={{ 
                            height: `${h}%`,
                            transition: 'height 3s ease-in-out'
                          }}
                        ></div>
                      ))}
                    </div>
                 </div>
               </div>
               
               <div className="bg-[#111] p-4 rounded-xl border border-white/5 flex items-center justify-between hover:border-white/10 transition-colors">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                     <iconify-icon icon="solar:shield-warning-bold-duotone" width="20" height="20"></iconify-icon>
                   </div>
                   <div>
                     <div className="text-sm text-white font-medium">Riskianalüüs</div>
                     <div className="text-[10px] text-gray-500 mt-0.5">Kõik näitajad normi piires</div>
                   </div>
                 </div>
                 <div className="text-xs text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-md font-medium">
                   Optimaalne
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;