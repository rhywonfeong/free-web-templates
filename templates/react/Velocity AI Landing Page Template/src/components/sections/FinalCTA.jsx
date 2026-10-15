import React from 'react'

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="contact">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#EF295A]/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 bg-white/40 dark:bg-[#131920]/40 backdrop-blur-xl border border-gray-100 dark:border-white/10 rounded-3xl p-10 md:p-20 shadow-2xl dark:shadow-none">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
          Ready to scale your digital presence?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto font-light">
          Book a free 30-minute discovery call to discuss your architecture, design needs, and growth strategy.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#EF295A] text-white text-base font-medium rounded-full hover:bg-[#d4204d] hover:shadow-lg hover:shadow-[#EF295A]/20 transition-all duration-300 flex items-center justify-center gap-2 group">
            Book Discovery Call
            <iconify-icon icon="solar:calendar-date-linear" className="group-hover:scale-110 transition-transform"></iconify-icon>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-gray-900 dark:text-white text-base font-medium rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300">
            Send an Email
          </button>
        </div>
      </div>
    </section>
  )
}