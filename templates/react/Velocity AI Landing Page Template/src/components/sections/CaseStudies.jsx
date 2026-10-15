import React from 'react'

export default function CaseStudies() {
  const cases = [
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tag: "FinTech",
      title: "NovaPay Dashboard Redesign",
      metric: "+145%",
      metricDesc: "User Retention"
    },
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tag: "SaaS",
      title: "Analytics Platform Scaling",
      metric: "3x",
      metricDesc: "Processing Speed"
    },
    {
      img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
      tag: "E-Commerce",
      title: "Headless Storefront Migration",
      metric: "-40%",
      metricDesc: "Bounce Rate"
    }
  ]

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#131920]/30" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
              Proven impact.
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 font-light max-w-lg">
              We don't just build beautiful interfaces; we build engines that drive measurable business metrics.
            </p>
          </div>
          <button className="px-5 py-2.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition-colors flex items-center gap-2 w-fit">
            View All Work
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-[#1A212A] text-xs font-semibold rounded-full">
                  {c.tag}
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-[#EF295A] transition-colors">
                {c.title}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#EF295A]">{c.metric}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{c.metricDesc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}