export default function Stats() {
  return (
    <section className="py-24 border-y border-white/5 bg-zinc-900/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/5">
          
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-5xl md:text-6xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-2">8.6%</div>
            <div className="text-sm text-zinc-400 font-medium tracking-wide uppercase">Avg. Body Fat Loss</div>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent mt-6 opacity-50"></div>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-12 md:pt-0">
            <div className="text-5xl md:text-6xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-2">2.6%</div>
            <div className="text-sm text-zinc-400 font-medium tracking-wide uppercase">Lean Muscle Gain</div>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent mt-6 opacity-50"></div>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-12 md:pt-0">
            <div className="text-5xl md:text-6xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-2">1.5K</div>
            <div className="text-sm text-zinc-400 font-medium tracking-wide uppercase">Studios Worldwide</div>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent mt-6 opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  )
}