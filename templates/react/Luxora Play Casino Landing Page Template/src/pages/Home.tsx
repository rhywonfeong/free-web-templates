const gameCards = [
  { bg: "linear-gradient(160deg,#6b7280,#374151)", title: "Zeus Lightning", provider: "Luxora Studios" },
  { bg: "linear-gradient(160deg,#8b5fd6,#2a1650)", title: "Neon Vault", provider: "CyberGames" },
  { bg: "linear-gradient(160deg,#ffd12e,#e0940d)", title: "Golden Peaks", provider: "Luxora Studios" },
  { bg: "linear-gradient(160deg,#f97316,#c2410c)", title: "Wild Safari", provider: "Jungle Spin" },
  { bg: "linear-gradient(160deg,#334155,#0f172a)", title: "Space Odyssey", provider: "Galaxy Tech" },
  { bg: "linear-gradient(160deg,#14b8a6,#0f766e)", title: "Emerald Isle", provider: "Lucky Charm" },
  { bg: "linear-gradient(160deg,#ec4899,#be185d)", title: "Candy Burst", provider: "Sweet Spin" },
  { bg: "linear-gradient(160deg,#8b5cf6,#6d28d9)", title: "Mystic Elements", provider: "Magic Logic" },
  { bg: "linear-gradient(160deg,#facc15,#ca8a04)", title: "Pharaoh's Gold", provider: "Ancient Ways" },
  { bg: "linear-gradient(160deg,#3b82f6,#1d4ed8)", title: "Deep Blue", provider: "Ocean Games" },
  { bg: "linear-gradient(160deg,#f43f5e,#e11d48)", title: "Dragon's Lair", provider: "Fire Spin" },
  { bg: "linear-gradient(160deg,#10b981,#059669)", title: "Forest Fortune", provider: "Nature Win" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8 w-full pb-10">
      
      {/* Top Header / Search */}
      <div className="flex items-center gap-3 flex-wrap relative z-20">
        <div className="flex items-center gap-1 p-1 rounded-full glass shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style={{ background: "linear-gradient(135deg,#8b5fd6,#6d3fa8)", boxShadow: "0 4px 16px rgba(139,95,214,0.4)" }}>
            <iconify-icon icon="solar:spade-linear" width="18"></iconify-icon> Casino
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/60 hover:text-white transition-colors">
            <iconify-icon icon="solar:videocamera-record-linear" width="18"></iconify-icon> Live Casino
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/60 hover:text-white transition-colors">
            <iconify-icon icon="solar:football-linear" width="18"></iconify-icon> Sports
          </button>
        </div>
        <div className="flex items-center gap-3 flex-1 min-w-[200px] px-5 py-3 rounded-full glass-strong shadow-inner">
          <iconify-icon icon="solar:magnifer-linear" width="18" className="text-white/50"></iconify-icon>
          <input type="text" placeholder="Search games, providers…" className="bg-transparent outline-none text-sm w-full placeholder:text-white/40 text-white" />
        </div>
        <button className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center glass shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
          <iconify-icon icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
        </button>
      </div>

      {/* Cinematic Hero */}
      <div className="relative rounded-[2rem] overflow-hidden card-shine min-h-[480px] flex flex-col justify-center shadow-2xl" style={{ background: "linear-gradient(to bottom right, rgba(28,15,61,0.9), rgba(42,22,80,0.95))", border: "1px solid rgba(139,95,214,0.2)" }}>
        
        {/* Video placeholder / abstract background */}
        <div className="absolute inset-0 z-0 overflow-hidden mix-blend-screen opacity-60">
           <div className="absolute top-0 right-0 w-full h-full" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(139,95,214,0.4), transparent 60%)" }}></div>
           <div className="absolute bottom-0 left-0 w-[120%] h-full" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(255,209,46,0.15), transparent 60%)" }}></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 opacity-30 blur-2xl animate-spin-slow"></div>
        </div>

        <div className="relative z-10 p-10 md:p-14 flex flex-col items-start gap-6 max-w-2xl mt-4">
          <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full glass-strong backdrop-blur-xl border-white/20">
            <iconify-icon icon="solar:star-fall-minimalistic-bold" width="16" style={{ color: "#ffd12e" }}></iconify-icon> The Future of Gaming
          </span>
          <h1 className="serif text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Play with<br />
            <span className="gold-text drop-shadow-[0_4px_12px_rgba(255,209,46,0.3)]">Luxora</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-md leading-relaxed font-light">Experience the ultimate premium casino ecosystem. Liquid glass UI, high stakes, and unparalleled rewards await.</p>
          <div className="flex items-center gap-4 mt-2">
            <button className="px-8 py-3.5 rounded-xl text-base font-bold transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#ffe08a,#ffd12e)", color: "#3a2405", boxShadow: "0 12px 32px rgba(255,209,46,0.35)" }}>Claim €3000 Bonus</button>
            <button className="px-8 py-3.5 rounded-xl text-base font-semibold glass-strong hover:bg-white/10 transition-colors border border-white/10">VIP Access</button>
          </div>
        </div>

        {/* Brand Logos Marquee */}
        <div className="absolute bottom-0 left-0 w-full bg-black/20 backdrop-blur-sm border-t border-white/10 overflow-hidden py-3">
          <div className="marquee-track flex items-center gap-12 text-white/40 mask-fade">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 shrink-0 px-6">
                <span className="font-bold tracking-widest uppercase text-sm">Pragmatic</span>
                <span className="font-bold tracking-widest uppercase text-sm flex items-center gap-1"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> NetEnt</span>
                <span className="font-bold tracking-widest uppercase text-sm">Evolution</span>
                <span className="font-bold tracking-widest uppercase text-sm flex items-center gap-1"><iconify-icon icon="solar:ghost-linear"></iconify-icon> Play'n GO</span>
                <span className="font-bold tracking-widest uppercase text-sm">Nolimit City</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Payouts Ticker */}
      <div className="flex flex-col gap-3">
        <div className="rounded-2xl overflow-hidden py-3.5 glass-strong flex items-center shadow-lg border border-white/10 relative z-20">
          <div className="shrink-0 flex items-center gap-2.5 px-6 border-r border-white/10 relative z-10 bg-[#241145]/80 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "#4ade80", boxShadow: "0 0 12px #4ade80" }}></span>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">Live Payouts</span>
          </div>
          <div className="whitespace-nowrap overflow-hidden flex-1 relative z-0 mask-fade">
            <div className="marquee-track text-sm">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex">
                  <span className="px-6 text-white/60">Aria M. won <b className="gold-text text-base">€1,240</b> on Starlight Riches</span>
                  <span className="text-white/20">•</span>
                  <span className="px-6 text-white/60">Deniz K. won <b className="gold-text text-base">€860</b> on Golden Peaks</span>
                  <span className="text-white/20">•</span>
                  <span className="px-6 text-white/60">Priya S. won <b className="gold-text text-base">€3,015</b> on Neon Vault</span>
                  <span className="text-white/20">•</span>
                  <span className="px-6 text-white/60">Marco R. won <b className="gold-text text-base">€520</b> on Wild Safari</span>
                  <span className="text-white/20">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-2 relative z-20 mask-fade">
        <a href="#" className="text-sm font-bold whitespace-nowrap relative pb-2"><span className="relative text-white">All Games</span><span className="absolute bottom-0 left-0 h-[2.5px] w-full rounded-full" style={{ background: "linear-gradient(90deg,#ffd12e,#8b5fd6)" }}></span></a>
        <a href="#" className="text-sm font-semibold text-white/50 hover:text-white whitespace-nowrap transition-colors">Hot Games</a>
        <a href="#" className="text-sm font-semibold text-white/50 hover:text-white whitespace-nowrap transition-colors">Popular</a>
        <a href="#" className="text-sm font-semibold text-white/50 hover:text-white whitespace-nowrap transition-colors">Luxora's Choice</a>
        <a href="#" className="text-sm font-semibold text-white/40 hover:text-white whitespace-nowrap transition-colors">Megaways</a>
        <button className="ml-auto shrink-0 w-10 h-10 rounded-full flex items-center justify-center glass-strong hover:bg-white/10 transition-colors shadow-md">
          <iconify-icon icon="solar:tuning-2-linear" width="20"></iconify-icon>
        </button>
      </div>

      {/* Global Jackpot */}
      <div className="rounded-[1.75rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 card-shine shadow-2xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(28,15,61,0.95) 0%, rgba(42,22,80,0.95) 100%)", border: "1px solid rgba(255,209,46,0.2)" }}>
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,209,46,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <iconify-icon icon="solar:cup-star-bold" width="22" style={{ color: "#ffd12e" }}></iconify-icon>
            <span className="text-[0.75rem] font-bold tracking-[0.25em] uppercase text-white/60">Global Network Jackpot</span>
          </div>
          <div className="serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gold-text" style={{ filter: "drop-shadow(0 8px 24px rgba(255,209,46,0.25))" }}>€12,450,678.50</div>
          <p className="text-sm mt-4 text-white/60 font-medium">Must drop before midnight — join the pool now to secure your chance.</p>
        </div>
        <div className="flex items-center gap-5 relative z-10">
          <div className="rounded-2xl p-4 flex items-center gap-4 glass-strong backdrop-blur-xl border border-white/10">
            <div className="w-14 h-14 rounded-xl shadow-inner relative overflow-hidden" style={{ background: "linear-gradient(135deg,#8b5fd6,#4a2585)" }}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
            </div>
            <div>
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/50 mb-1">Qualifying Game</p>
              <p className="text-base font-bold text-white">Mega Fortuna</p>
            </div>
          </div>
          <button className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 hover:scale-110 transition-transform shadow-[0_12px_24px_rgba(255,209,46,0.3)]" style={{ background: "linear-gradient(135deg,#ffe08a,#ffd12e)", color: "#3a2405" }}>
            <iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
          </button>
        </div>
      </div>

      {/* Game Grid */}
      <div className="mt-4 relative z-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <iconify-icon icon="solar:fire-bold" width="26" style={{ color: "#ff7849" }}></iconify-icon>
            <h2 className="serif text-2xl md:text-3xl font-bold tracking-tight">Hot Games</h2>
          </div>
          <button className="text-sm font-semibold text-white/70 hover:text-white transition-colors flex items-center gap-2 glass px-4 py-2 rounded-lg">
            See all <iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
          {gameCards.map((game, i) => (
            <div key={i} className="group relative aspect-[3/4] rounded-[1.25rem] overflow-hidden card-shine hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer" style={{ background: game.bg, border: "1px solid rgba(255,255,255,0.08)" }}>
              {/* Game visual representation using simple CSS gradients to simulate premium covers without external images, keeping it fast */}
              <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 pt-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[0.65rem] font-bold tracking-wider text-white/70 uppercase">{game.provider}</span>
                <span className="text-sm font-bold text-white mt-1">{game.title}</span>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_8px_32px_rgba(255,209,46,0.4)]" style={{ background: "linear-gradient(135deg,#ffe08a,#ffd12e)", color: "#3a2405" }}>
                  <iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
