import React from 'react'

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#1A212A]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10 text-[#EF295A]">
          <iconify-icon icon="solar:quote-right-bold" width="48" className="opacity-20"></iconify-icon>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-gray-900 dark:text-white leading-relaxed mb-10">
          "Velocity AI didn't just build our platform; they completely re-engineered our digital strategy. The integration of modern AI tools cut our development time in half while delivering a premium user experience."
        </h2>
        
        <div className="flex flex-col items-center">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80" 
            alt="Sarah Jenkins" 
            className="w-14 h-14 rounded-full object-cover mb-4 border-2 border-white dark:border-[#1A212A] shadow-md"
          />
          <div className="text-base font-semibold text-gray-900 dark:text-white">Sarah Jenkins</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">CTO, Nexus Technologies</div>
        </div>
      </div>
    </section>
  )
}