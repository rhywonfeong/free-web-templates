export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Cinematic Background Simulate */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop" 
          alt="Training" 
          className="w-full h-full object-cover opacity-40 scale-105" 
          style={{ transformOrigin: 'center', animation: 'pulse 20s infinite alternate ease-in-out' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/60 to-zinc-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] max-w-5xl">
          <span className="block text-zinc-400">Burn Fat.</span>
          <span className="block text-zinc-200">Build Muscle.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand">Unlock Your Potential.</span>
        </h1>
        <p className="mt-8 text-base md:text-lg text-zinc-400 max-w-2xl font-light">
          Experience the next evolution of human performance. State-of-the-art facilities, science-backed protocols, and elite coaching designed to push your limits.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto bg-brand hover:bg-[#ff6a33] text-zinc-950 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(255,90,31,0.3)] hover:shadow-[0_0_30px_rgba(255,90,31,0.5)] flex items-center justify-center gap-2">
            Start Free Class
            <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: "1.5" }} className="text-lg"></iconify-icon>
          </button>
          <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300">
            Explore Workouts
          </button>
        </div>
      </div>

      {/* Floating UI Cards */}
      <div className="hidden lg:block absolute top-1/3 left-20 w-48 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl transition-transform duration-1000 hover:-translate-y-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-zinc-400 font-medium tracking-wide">CALORIES</span>
          <iconify-icon icon="solar:flame-linear" style={{ strokeWidth: "1.5" }} className="text-brand"></iconify-icon>
        </div>
        <div className="text-2xl font-semibold tracking-tight">850 <span className="text-xs text-zinc-500 font-normal">kcal</span></div>
        <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-brand w-[75%] rounded-full"></div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-1/4 right-20 w-56 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl transition-transform duration-1000 hover:-translate-y-2" style={{ transitionDelay: '100ms' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-zinc-400 font-medium tracking-wide">HEART RATE</span>
          <iconify-icon icon="solar:heart-pulse-linear" style={{ strokeWidth: "1.5" }} className="text-brand"></iconify-icon>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold tracking-tighter">164</span>
          <span className="text-xs text-zinc-500 font-normal">BPM</span>
        </div>
        <div className="mt-3 flex items-end gap-1 h-8">
          <div className="w-1/6 bg-white/10 h-1/3 rounded-t-sm"></div>
          <div className="w-1/6 bg-white/10 h-1/2 rounded-t-sm"></div>
          <div className="w-1/6 bg-brand/50 h-3/4 rounded-t-sm"></div>
          <div className="w-1/6 bg-brand h-full rounded-t-sm shadow-[0_0_10px_rgba(255,90,31,0.5)]"></div>
          <div className="w-1/6 bg-white/10 h-2/3 rounded-t-sm"></div>
          <div className="w-1/6 bg-white/10 h-1/2 rounded-t-sm"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <iconify-icon icon="solar:mouse-minimalistic-linear" style={{ strokeWidth: "1.5" }} className="text-xl"></iconify-icon>
      </div>
    </section>
  )
}