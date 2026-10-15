export default function Workouts() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Master Your Modality</h2>
          <p className="text-base text-zinc-400 max-w-xl font-light">Precision-engineered programs designed to target specific physiological adaptations. Choose your path and dominate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-zinc-900/40 border border-white/5 p-8 transition-all duration-500 hover:bg-zinc-900/80 hover:border-white/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand/50 transition-all duration-500">
                <iconify-icon icon="solar:dumbbell-large-linear" style={{ strokeWidth: "1.5" }} className="text-2xl text-zinc-300 group-hover:text-brand transition-colors"></iconify-icon>
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-3">Strength Training</h3>
              <p className="text-sm text-zinc-400 font-light mb-8 flex-grow">Hypertrophy and absolute strength protocols utilizing free weights and variable resistance.</p>
              <div className="flex items-center text-sm font-medium text-brand opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Explore Program <iconify-icon icon="solar:arrow-right-linear" className="ml-2"></iconify-icon>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-zinc-900/40 border border-white/5 p-8 transition-all duration-500 hover:bg-zinc-900/80 hover:border-white/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand/50 transition-all duration-500">
                <iconify-icon icon="solar:running-linear" style={{ strokeWidth: "1.5" }} className="text-2xl text-zinc-300 group-hover:text-brand transition-colors"></iconify-icon>
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-3">Cardio Conditioning</h3>
              <p className="text-sm text-zinc-400 font-light mb-8 flex-grow">High-intensity intervals and steady-state conditioning to maximize VO2 max and metabolic efficiency.</p>
              <div className="flex items-center text-sm font-medium text-brand opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Explore Program <iconify-icon icon="solar:arrow-right-linear" className="ml-2"></iconify-icon>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-zinc-900/40 border border-white/5 p-8 transition-all duration-500 hover:bg-zinc-900/80 hover:border-white/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand/50 transition-all duration-500">
                <iconify-icon icon="solar:chart-square-linear" style={{ strokeWidth: "1.5" }} className="text-2xl text-zinc-300 group-hover:text-brand transition-colors"></iconify-icon>
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-3">Performance Tracking</h3>
              <p className="text-sm text-zinc-400 font-light mb-8 flex-grow">Advanced biometrics and analytics to monitor recovery, strain, and holistic progress in real-time.</p>
              <div className="flex items-center text-sm font-medium text-brand opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Explore Program <iconify-icon icon="solar:arrow-right-linear" className="ml-2"></iconify-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}