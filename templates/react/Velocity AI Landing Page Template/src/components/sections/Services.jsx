import React from 'react'

export default function Services() {
  const services = [
    {
      icon: "solar:pen-new-square-linear",
      title: "Product Design",
      items: ["UI/UX Architecture", "Design Systems", "Prototyping", "User Research"]
    },
    {
      icon: "solar:code-square-linear",
      title: "Technology",
      items: ["Frontend (React/Next)", "Backend & APIs", "AI Integration", "Cloud Architecture"]
    },
    {
      icon: "solar:chart-square-linear",
      title: "Growth",
      items: ["Conversion Optimization", "Technical SEO", "Analytics Setup", "Performance Tuning"]
    }
  ]

  return (
    <section className="py-24 px-6 border-y border-gray-100 dark:border-white/5" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
            End-to-end digital capabilities.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((svc, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[#EF295A]/10 text-[#EF295A] flex items-center justify-center mb-6">
                <iconify-icon icon={svc.icon} width="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-white/10 pb-4">
                {svc.title}
              </h3>
              <ul className="space-y-4">
                {svc.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                     <iconify-icon icon="solar:alt-arrow-right-linear" className="text-gray-400 dark:text-gray-600"></iconify-icon>
                     {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}