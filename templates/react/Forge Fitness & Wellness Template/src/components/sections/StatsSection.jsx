import React from 'react'

export default function StatsSection() {
  const stats = [
    { number: "1.2k+", label: "Alunos Ativos" },
    { number: "94%", label: "Taxa de Frequência Mensal" },
    { number: "12+", label: "Anos de Operação" },
  ]

  return (
    <section className="bg-gradient-brand py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center pt-8 md:pt-0 first:pt-0">
              <div className="text-[clamp(48px,6vw,72px)] font-black text-white tracking-tighter leading-none mb-2 drop-shadow-md">
                {stat.number}
              </div>
              <div className="text-white/90 font-medium uppercase tracking-[0.1em] text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}