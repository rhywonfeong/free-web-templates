export default function StatsSection() {
  const stats = [
    { number: "2.400+", label: "Alunos ativos", icon: "solar:users-group-two-rounded-bold" },
    { number: "93%", label: "Taxa de frequência mensal", icon: "solar:graph-up-bold" },
    { number: "12", label: "Anos de excelência em treinamento", icon: "solar:cup-star-bold" }
  ];

  return (
    <section className="py-20 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#FF5500] font-semibold tracking-widest uppercase text-sm mb-4 block">O que os números dizem</span>
          <h2 className="font-display text-4xl md:text-5xl text-white">Consistência que se mede.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-[#222222] flex items-center justify-center mb-6">
                <iconify-icon icon={stat.icon} class="text-[#FF5500] text-3xl"></iconify-icon>
              </div>
              <h3 className="font-display text-5xl md:text-6xl text-white mb-2">{stat.number}</h3>
              <p className="text-[#888888] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#planos" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300">
            Agendar visita gratuita
            <iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
}