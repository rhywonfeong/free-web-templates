export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
      <div className="max-w-2xl space-y-10 relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="font-sans text-[11px] font-medium text-subtle tracking-tight">
              System v2.4 Available
            </span>
          </div>
          <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-obsidian leading-[0.95]">
            Decision
            <br />
            <span className="text-subtle">Traceability.</span>
          </h1>
          <p className="max-w-md font-sans text-base text-subtle leading-relaxed">
            The reasoning layer for the modern enterprise. Capture
            assumptions, map logic, and ensure every strategic decision is
            defensible.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-2 flex items-center gap-2">
            <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
            <span className="relative z-10">Request Demo</span>
            <iconify-icon icon="solar:arrow-right-linear" class="relative z-10 transition-transform duration-300 group-hover:translate-x-1" width="16" height="16"></iconify-icon>
          </button>
          <button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 ease-out hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md active:scale-[0.97] active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-obsidian/10 focus:ring-offset-2">
            Documentation
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-50 blur-3xl"></div>
        <div className="premium-card w-full h-full p-6 relative overflow-hidden rounded-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-obsidian to-transparent"></div>
          
          <div className="h-full w-full flex flex-col">
            <div className="flex justify-between items-center mb-8 border-b border-border/50 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-subtle">
                  Decision Logic Graph
                </span>
              </div>
              <div className="flex gap-2">
                <span className="w-12 h-1.5 rounded-full bg-border/50"></span>
              </div>
            </div>
            <div className="flex-1 relative">
              
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <path d="M50,150 C100,150 100,80 150,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M50,150 C100,150 100,220 150,220" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M150,80 C200,80 200,120 250,120" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M150,220 C200,220 200,180 250,180" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M250,120 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M250,180 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>

                <path d="M50,150 C100,150 100,80 150,80 C200,80 200,120 250,120 L320,150" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" className="signal-path"></path>

                <circle cx="50" cy="150" r="6" fill="#111" className="node-context"></circle>
                <text x="50" y="175" textAnchor="middle" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="10" fontWeight="600" fill="#111">
                  Context
                </text>

                <rect x="150" y="70" width="80" height="20" rx="4" fill="white" stroke="#111" strokeWidth="1.5" className="node-assumptions"></rect>
                <text x="190" y="83" textAnchor="middle" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="9" fontWeight="600" fill="#111" dy="1">
                  Assumptions
                </text>

                <rect x="150" y="210" width="80" height="20" rx="4" fill="white" stroke="#E5E5E5"></rect>
                <rect x="250" y="170" width="60" height="20" rx="4" fill="#F5F5F7"></rect>

                <rect x="250" y="110" width="60" height="20" rx="4" fill="white" stroke="#111" strokeWidth="1.5" className="node-evidence"></rect>
                <text x="280" y="123" textAnchor="middle" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="9" fontWeight="600" fill="#111" dy="1">
                  Evidence
                </text>

                <circle cx="320" cy="150" r="12" fill="#111" className="node-outcome"></circle>
                <path d="M316 150l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="outcome-check"></path>
                <text x="320" y="178" textAnchor="middle" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="10" fontWeight="600" fill="#111">
                  Outcome
                </text>
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian text-white text-[10px] font-medium px-3 py-1.5 rounded shadow-xl">
                Confidence: 98.4%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}