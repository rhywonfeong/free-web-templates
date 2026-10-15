export default function Stats() {
  const stats = [
    { num: '+1.200', label: 'ALUNOS ATIVOS' },
    { num: '94%', label: 'RETENÇÃO 6 MESES' },
    { num: '8 anos', label: 'EM OPERAÇÃO' },
    { num: '1.8K', label: 'M² DEDICADOS' }
  ]

  return (
    <section className="bg-[#181818] border-y border-[#2D2D2D]">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#2D2D2D]">
        {stats.map((stat, i) => (
          <div key={i} className="py-16 px-4 flex flex-col items-center justify-center text-center group hover:bg-[#1E1E1E] transition-colors">
            <span className="font-display text-5xl md:text-6xl font-black text-[#E82020] tracking-tighter mb-2 group-hover:scale-105 transition-transform">
              {stat.num}
            </span>
            <span className="text-[#7A7A7A] text-xs font-semibold tracking-[0.1em] uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}