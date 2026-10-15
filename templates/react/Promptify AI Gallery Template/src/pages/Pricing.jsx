export default function Pricing() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative">
       {/* Background ambient light */}
       <div className="absolute top-[20%] left-[50%] translate-x-[-50%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Simple, transparent pricing</h1>
        <p className="text-zinc-400 text-lg mb-16 max-w-xl mx-auto">
          Choose the perfect plan to unlock unlimited inspiration and elevate your AI creations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
          
          {/* Free Tier */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10 flex flex-col">
            <h3 className="text-xl font-medium mb-2">Creator Basic</h3>
            <div className="mb-6">
              <span className="text-4xl font-semibold">$0</span>
              <span className="text-zinc-500">/forever</span>
            </div>
            <p className="text-sm text-zinc-400 mb-8">Perfect for getting started and finding occasional inspiration.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm">
                <iconify-icon icon="solar:check-circle-bold" class="text-zinc-400"></iconify-icon>
                Browse 100+ free prompts
              </li>
              <li className="flex items-center gap-3 text-sm">
                <iconify-icon icon="solar:check-circle-bold" class="text-zinc-400"></iconify-icon>
                Standard search & filters
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-500">
                <iconify-icon icon="solar:close-circle-outline" class="text-zinc-600"></iconify-icon>
                No premium collections
              </li>
            </ul>

            <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 font-medium text-sm hover:bg-white/10 transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Pro Tier */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/20 relative flex flex-col shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-xl transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-zinc-950 text-xs font-bold rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            
            <h3 className="text-xl font-medium mb-2 text-white">Promptify Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-semibold text-white">$12</span>
              <span className="text-zinc-400">/month</span>
            </div>
            <p className="text-sm text-zinc-300 mb-8">For serious creators who need constant inspiration and access.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-white">
                <iconify-icon icon="solar:check-circle-bold" class="text-white"></iconify-icon>
                Unlimited prompt reveals
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <iconify-icon icon="solar:check-circle-bold" class="text-white"></iconify-icon>
                Access to premium collections
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <iconify-icon icon="solar:check-circle-bold" class="text-white"></iconify-icon>
                Advanced search & save
              </li>
               <li className="flex items-center gap-3 text-sm text-white">
                <iconify-icon icon="solar:check-circle-bold" class="text-white"></iconify-icon>
                Priority support
              </li>
            </ul>

            <button className="w-full py-3 rounded-xl bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              Upgrade to Pro
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}