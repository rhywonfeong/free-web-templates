export default function Locator() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Find Your Sanctuary</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Search and List */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="relative group">
              <iconify-icon icon="solar:magnifer-linear" style={{ strokeWidth: "1.5" }} className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-brand transition-colors"></iconify-icon>
              <input type="text" placeholder="Search by city or zip..." className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand/50 focus:bg-zinc-900 transition-all" />
            </div>

            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
              
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium tracking-tight group-hover:text-brand transition-colors">AURA Soho</h4>
                  <span className="text-xs font-medium bg-brand/10 text-brand px-2 py-1 rounded-md">1.2 mi</span>
                </div>
                <p className="text-sm text-zinc-400 font-light mb-4">124 Prince St, New York, NY</p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><iconify-icon icon="solar:dumbbell-small-linear"></iconify-icon> Full Equip</span>
                  <span className="flex items-center gap-1"><iconify-icon icon="solar:cup-hot-linear"></iconify-icon> Cafe</span>
                </div>
              </div>

              <div className="bg-zinc-900/30 border border-transparent rounded-2xl p-6 cursor-pointer hover:bg-white/5 hover:border-white/10 transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium tracking-tight group-hover:text-brand transition-colors">AURA Williamsburg</h4>
                  <span className="text-xs font-medium bg-white/5 text-zinc-400 px-2 py-1 rounded-md">3.8 mi</span>
                </div>
                <p className="text-sm text-zinc-400 font-light mb-4">85 N 3rd St, Brooklyn, NY</p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><iconify-icon icon="solar:dumbbell-small-linear"></iconify-icon> Full Equip</span>
                </div>
              </div>

              <div className="bg-zinc-900/30 border border-transparent rounded-2xl p-6 cursor-pointer hover:bg-white/5 hover:border-white/10 transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium tracking-tight group-hover:text-brand transition-colors">AURA Tribeca</h4>
                  <span className="text-xs font-medium bg-white/5 text-zinc-400 px-2 py-1 rounded-md">4.5 mi</span>
                </div>
                <p className="text-sm text-zinc-400 font-light mb-4">110 Hudson St, New York, NY</p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><iconify-icon icon="solar:dumbbell-small-linear"></iconify-icon> Full Equip</span>
                  <span className="flex items-center gap-1"><iconify-icon icon="solar:waterdrops-linear"></iconify-icon> Cold Plunge</span>
                </div>
              </div>

            </div>
          </div>

          {/* Map Placeholder */}
          <div className="lg:w-2/3 h-[400px] lg:h-auto rounded-[2rem] bg-zinc-900 border border-white/10 relative overflow-hidden flex items-center justify-center">
            {/* Abstract Map Representation */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
            
            {/* Map Pin */}
            <div className="relative z-10 flex flex-col items-center animate-pulse">
              <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-brand rounded-full shadow-[0_0_15px_rgba(255,90,31,0.8)]"></div>
              </div>
              <div className="mt-2 text-xs font-medium tracking-widest text-brand">SOHO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}