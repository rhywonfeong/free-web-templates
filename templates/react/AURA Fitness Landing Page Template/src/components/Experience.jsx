export default function Experience() {
  return (
    <section className="py-24 relative z-10 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Sticky Image Side */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-[50vh] lg:h-[70vh] rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 relative">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2940&auto=format&fit=crop" 
              alt="Workout Experience" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
            
            {/* Inner overlay element */}
            <div className="absolute bottom-8 left-8 right-8 bg-zinc-950/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-brand font-medium tracking-wider mb-1">CURRENT SESSION</div>
                  <div className="text-lg font-medium tracking-tight">H.I.I.T Protocol Alpha</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold tracking-tighter">45<span className="text-xs font-normal text-zinc-400 ml-1">MIN</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Content Side */}
          <div className="lg:w-1/2 flex flex-col py-10 lg:py-32">
            
            <div className="mb-32 opacity-100 transition-opacity duration-700">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <span className="text-sm font-medium">01</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Science-Backed Workouts</h3>
              <p className="text-base text-zinc-400 font-light leading-relaxed">
                Every movement, sequence, and rest period is mathematically calculated. We utilize peer-reviewed kinesiology to ensure maximum efficiency in minimal time, preventing plateaus and accelerating results.
              </p>
            </div>

            <div className="mb-32 opacity-100 transition-opacity duration-700">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <span className="text-sm font-medium">02</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">High Intensity Intervals</h3>
              <p className="text-base text-zinc-400 font-light leading-relaxed">
                Ignite your excess post-exercise oxygen consumption (EPOC). Our proprietary HIIT structures keep your body burning calories for up to 36 hours after you step off the floor.
              </p>
            </div>

            <div className="opacity-100 transition-opacity duration-700">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <span className="text-sm font-medium text-brand">03</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Elite Personal Coaching</h3>
              <p className="text-base text-zinc-400 font-light leading-relaxed">
                Technology meets human intuition. Our floor coaches are certified experts who adjust form, manage load, and push your mental boundaries exactly when you need it most.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}