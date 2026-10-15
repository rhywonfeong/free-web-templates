export default function CTA() {
  return (
    <section className="py-32 md:py-48 relative z-10 overflow-hidden">
      {/* Abstract glowing bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-tight mb-8">
          Your Evolution <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-white to-brand">Starts Now.</span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 font-light mb-12 max-w-2xl">
          Join the elite. Transform your physiology, elevate your mindset, and discover what your body is truly capable of.
        </p>
        <button className="group relative inline-flex items-center justify-center px-10 py-5 font-semibold text-zinc-950 bg-brand rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,90,31,0.6)]">
          <span className="relative z-10 flex items-center gap-2 text-lg">
            Start Your Fitness Journey
            <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: "2" }} className="group-hover:translate-x-1 transition-transform"></iconify-icon>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
        </button>
      </div>
    </section>
  )
}