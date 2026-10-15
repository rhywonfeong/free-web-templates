const Stats = () => {
  const stats = [
    { number: "1.247", label: "Alunos ativos hoje" },
    { number: "94%", label: "Frequência média mensal" },
    { number: "12", label: "Anos no mercado" },
    { number: "4.9 ★", label: "Avaliação no Google" },
    { number: "+8k", label: "Transformações" },
    { number: "37", label: "Coaches no time" },
  ];

  return (
    <section className="py-24 bg-[#E84E1B] relative overflow-hidden">
      {/* Texture background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-white/80 font-bold text-sm tracking-[0.15em] mb-4 flex items-center gap-3 uppercase">
              <span className="w-8 h-[2px] bg-white"></span>
              Resultados que falam
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white uppercase leading-tight">
              Doze anos de<br/>evidências.
            </h2>
          </div>
          <p className="text-white/90 text-lg max-w-lg font-medium leading-relaxed">
            Cada número aqui é auditável. Não trabalhamos com estimativas — trabalhamos com dados. A FORGELAB mede frequência, evolução de carga e composição corporal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 pt-12 border-t border-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-4xl lg:text-5xl font-extrabold text-[#141414] tracking-tighter mb-2">{stat.number}</span>
              <span className="text-sm font-bold text-white uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;