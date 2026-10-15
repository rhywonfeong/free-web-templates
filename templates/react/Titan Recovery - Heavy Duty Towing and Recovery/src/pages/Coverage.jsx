export default function Coverage() {
  const states = [
    { name: "Florida", hq: "Jacksonville", hubs: 4, status: "HQ BASE" },
    { name: "Georgia", hq: "Atlanta", hubs: 3, status: "ACTIVE" },
    { name: "North Carolina", hq: "Charlotte", hubs: 2, status: "ACTIVE" },
    { name: "South Carolina", hq: "Columbia", hubs: 2, status: "ACTIVE" },
    { name: "Alabama", hq: "Birmingham", hubs: 1, status: "ACTIVE" },
    { name: "Louisiana", hq: "New Orleans", hubs: 1, status: "RAPID REQ" }
  ];

  return (
    <div className="pb-32 relative w-full min-h-screen bg-[#050505] bg-schematic">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 pt-12">
        <div className="mb-20 max-w-3xl">
          <div className="font-mono text-[#CCFF00] text-sm tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#CCFF00] rounded-full animate-pulse"></span>
            [ GPS_LINK_ESTABLISHED ]
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 uppercase">OPERATING <span className="text-[#FF3C00]">TERRITORY</span></h1>
          <p className="text-gray-400 font-light text-xl border-l-2 border-[#333] pl-6">
            Strategic dispatch hubs located across the Southeast ensure rapid response times on major USA interstate commercial corridors.
          </p>
        </div>

        <div className="industrial-panel bg-[#121212] clip-corner">
          {/* Top Info Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2A2A2A] border-b border-[#2A2A2A] bg-[#0A0A0A]">
             <div className="p-10 group hover:bg-[#121212] transition-colors">
                <iconify-icon icon="solar:map-point-bold" class="text-5xl text-[#FF3C00] mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
                <h3 className="font-heading text-2xl text-white font-bold uppercase tracking-wider mb-2">Interstate Focus</h3>
                <p className="text-gray-500 font-light">I-95, I-75, I-10, and I-85 commercial freight corridors heavily monitored.</p>
             </div>
             <div className="p-10 group hover:bg-[#121212] transition-colors">
                <iconify-icon icon="solar:radar-bold" class="text-5xl text-[#FF3C00] mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
                <h3 className="font-heading text-2xl text-white font-bold uppercase tracking-wider mb-2">24/7 Command</h3>
                <p className="text-gray-500 font-light">Dispatch centers operate continuously, 365 days a year without exception.</p>
             </div>
             <div className="p-10 group hover:bg-[#121212] transition-colors">
                <iconify-icon icon="solar:shield-check-bold" class="text-5xl text-[#FF3C00] mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
                <h3 className="font-heading text-2xl text-white font-bold uppercase tracking-wider mb-2">Federal Auth</h3>
                <p className="text-gray-500 font-light">Fully permitted for heavy wrecker recovery across all listed state lines.</p>
             </div>
          </div>

          {/* Radar / Grid Display */}
          <div className="p-10 md:p-16 relative overflow-hidden">
            {/* Background Radar Effect */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-[#2A2A2A] rounded-full translate-x-1/3 -translate-y-1/3 opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-[#FF3C00] rounded-full translate-x-1/3 -translate-y-1/3 opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-[#2A2A2A] rounded-full translate-x-1/3 -translate-y-1/3 opacity-20 pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-10 relative z-10 border-b border-[#333] pb-4">
              <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest">Regional Dispatch Terminals</h3>
              <span className="font-mono text-xs text-[#FF3C00] animate-pulse">LIVE FEED</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
              {states.map((state, idx) => (
                <div key={idx} className="p-8 bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#FF3C00] transition-colors clip-corner group">
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-heading text-white font-bold text-3xl uppercase tracking-wider">{state.name}</span>
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 border ${state.status === 'HQ BASE' ? 'bg-[#FF3C00]/10 text-[#FF3C00] border-[#FF3C00]' : 'bg-[#1A1A1A] text-gray-400 border-[#333]'}`}>
                      {state.status}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 text-gray-400 font-mono text-sm">
                    <div className="flex justify-between items-center border-b border-[#1A1A1A] pb-2">
                      <span className="text-gray-600">CMD_CNTR</span>
                      <span className="text-white">{state.hq}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#1A1A1A] pb-2">
                      <span className="text-gray-600">UNITS_RDY</span>
                      <span className="text-[#CCFF00] font-bold">{state.hubs} HEAVY</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}