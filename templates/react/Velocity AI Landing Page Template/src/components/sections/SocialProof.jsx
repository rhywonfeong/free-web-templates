import React from 'react'

export default function SocialProof() {
  const logos = [
    "simple-icons:vercel",
    "simple-icons:stripe",
    "simple-icons:linear",
    "simple-icons:raycast",
    "simple-icons:github",
    "simple-icons:figma"
  ]

  return (
    <section className="py-12 border-y border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-[#0F172A]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <img 
                  key={i} 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&q=80`} 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover bg-slate-200"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-teal-500">
                {[1,2,3,4,5].map(i => <iconify-icon key={i} icon="solar:star-bold"></iconify-icon>)}
              </div>
              <span className="text-[12px] font-medium text-slate-600 dark:text-slate-400">Trusted by 200+ clients</span>
            </div>
          </div>

          <div className="flex-1 w-full overflow-hidden mask-image-linear-x">
            <div className="flex items-center justify-around gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              {logos.map((logo, idx) => (
                <div key={idx} className="flex items-center justify-center text-slate-800 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">
                  <iconify-icon icon={logo} width="28"></iconify-icon>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}