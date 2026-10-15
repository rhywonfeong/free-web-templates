export default function Pricing() {
  return (
    <section className="py-32 relative z-10 bg-zinc-900/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Invest in Your Potential</h2>
          <p className="text-base text-zinc-400 font-light">Transparent pricing. No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          
          {/* Basic */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:border-white/20">
            <div className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Core</div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-semibold tracking-tighter">$149</span>
              <span className="text-sm text-zinc-500">/mo</span>
            </div>
            <ul className="flex flex-col gap-4 mb-10 text-sm text-zinc-300 font-light">
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-zinc-500"></iconify-icon> 8 Classes per month</li>
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-zinc-500"></iconify-icon> App access (Basic metrics)</li>
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-zinc-500"></iconify-icon> 1 Studio location</li>
            </ul>
            <button className="w-full py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">Select Core</button>
          </div>

          {/* Elite (Highlighted) */}
          <div className="relative bg-zinc-900/80 border border-brand/50 rounded-[2rem] p-8 md:p-12 shadow-[0_0_30px_rgba(255,90,31,0.1)] md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-zinc-950 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">MOST POPULAR</div>
            <div className="text-sm font-medium text-brand uppercase tracking-wider mb-2">Elite</div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-semibold tracking-tighter">$249</span>
              <span className="text-sm text-zinc-500">/mo</span>
            </div>
            <ul className="flex flex-col gap-4 mb-10 text-sm text-white font-light">
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-brand text-lg"></iconify-icon> Unlimited Classes</li>
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-brand text-lg"></iconify-icon> Advanced Biometric App</li>
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-brand text-lg"></iconify-icon> All Studio locations</li>
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-brand text-lg"></iconify-icon> 1 PT Session / month</li>
            </ul>
            <button className="w-full py-4 rounded-full bg-brand hover:bg-[#ff6a33] text-zinc-950 transition-colors text-sm font-semibold shadow-[0_0_15px_rgba(255,90,31,0.3)]">Join Elite</button>
          </div>

          {/* Unlimited */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:border-white/20">
            <div className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Apex</div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-semibold tracking-tighter">$499</span>
              <span className="text-sm text-zinc-500">/mo</span>
            </div>
            <ul className="flex flex-col gap-4 mb-10 text-sm text-zinc-300 font-light">
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-zinc-500"></iconify-icon> Everything in Elite</li>
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-zinc-500"></iconify-icon> Weekly PT Sessions</li>
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" className="text-zinc-500"></iconify-icon> Recovery Suite Access</li>
            </ul>
            <button className="w-full py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">Select Apex</button>
          </div>

        </div>
      </div>
    </section>
  )
}