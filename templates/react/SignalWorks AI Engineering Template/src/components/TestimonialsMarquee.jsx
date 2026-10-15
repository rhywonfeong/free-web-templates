import React from 'react'

const TestimonialsMarquee = () => {
  return (
    <section className="relative w-full py-24 lg:py-40 overflow-hidden z-20 border-t border-white/5">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute left-[6%] right-[6%] top-0 bottom-0 border-l border-r border-white/5 hidden lg:block"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 px-6 lg:px-[6%] max-w-[1600px] mx-auto">
        <div className="relative z-20 text-center max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-10 animate-reveal">
             <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
             <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Who you work with</span>
          </div>
          
          <h2 className="leading-[1.05] animate-reveal delay-100 md:text-5xl lg:text-6xl text-4xl font-medium text-white tracking-tight mb-8">
             Two operators.
             <span className="text-white/30"> Built like an engineering team.</span>
          </h2>
          
          <p className="text-lg text-white/60 font-light leading-relaxed mb-10 animate-reveal delay-200 max-w-2xl mx-auto">
             Trent (Yale CS, ex-PayPal — built backend for push notifications to 140M users) and Jahleel (marketing operations background) deliver every engagement. No account managers, no junior staff, no offshore handoffs. The senior people on the sales call are the ones doing the work.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-white/40 animate-reveal delay-300">
            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
            <span>Currently accepting Q3 engagements · Sprint waitlist 4-6 weeks at capacity</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsMarquee