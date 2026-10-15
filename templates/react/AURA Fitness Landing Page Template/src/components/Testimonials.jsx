export default function Testimonials() {
  return (
    <section className="py-32 relative z-10 overflow-hidden bg-zinc-900/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">The AURA Effect.</h2>
      </div>

      <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory hide-scrollbar">
        
        {/* Testimonial 1 */}
        <div className="min-w-[85vw] md:min-w-[450px] snap-center shrink-0">
          <div className="h-full bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-900/80 hover:border-white/10 hover:shadow-2xl" style={{ transform: 'perspective(1000px) rotateY(2deg)' }}>
            <div className="flex gap-1 mb-6 text-brand">
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
            </div>
            <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-zinc-300">
              "The data-driven approach changed everything. I stopped guessing and started seeing actual physiological changes within 4 weeks. The premium environment makes you want to work harder."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Brad G." className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                <div className="text-sm font-medium tracking-tight">Brad G.</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Elite Member</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="min-w-[85vw] md:min-w-[450px] snap-center shrink-0">
          <div className="h-full bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-900/80 hover:border-white/10 hover:shadow-2xl">
            <div className="flex gap-1 mb-6 text-brand">
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
            </div>
            <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-zinc-300">
              "It feels less like a gym and more like a high-end optimization clinic. The coaches are insanely knowledgeable, and the aesthetic alone motivates me to show up at 5 AM."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Nicole P." className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                <div className="text-sm font-medium tracking-tight">Nicole P.</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Founding Member</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="min-w-[85vw] md:min-w-[450px] snap-center shrink-0">
          <div className="h-full bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-900/80 hover:border-white/10 hover:shadow-2xl" style={{ transform: 'perspective(1000px) rotateY(-2deg)' }}>
            <div className="flex gap-1 mb-6 text-brand">
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
              <iconify-icon icon="solar:star-bold" style={{ strokeWidth: "1.5" }}></iconify-icon>
            </div>
            <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-zinc-300">
              "The integration of the app tracking with the in-studio workouts is flawless. I know exactly how much strain I'm under and when I need to push. Worth every penny."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Max D." className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                <div className="text-sm font-medium tracking-tight">Max D.</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Unlimited Member</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}