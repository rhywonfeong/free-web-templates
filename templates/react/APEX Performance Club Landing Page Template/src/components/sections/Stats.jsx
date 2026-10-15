export default function Stats() {
  const stats = [
    {
      number: "2.400+",
      label: "Alunos Matriculados",
      desc: "Uma comunidade crescente de pessoas comprometidas com a transformação real."
    },
    {
      number: "94%",
      label: "Taxa de Frequência",
      desc: "A maior taxa de regularidade entre academias premium da cidade."
    },
    {
      number: "12+",
      label: "Anos de Operação",
      desc: "Mais de uma década moldando corpos, mentes e resultados concretos."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#111111] text-white overflow-hidden relative">
      {/* Decorative large star */}
      <div className="absolute -top-32 -right-32 text-[#2A2A2A] opacity-50 pointer-events-none">
        <iconify-icon icon="solar:star-fall-bold" style={{ fontSize: '400px' }}></iconify-icon>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="inline-block uppercase font-medium text-xs tracking-[0.12em] mb-6 text-acid">Em números</span>
          <h2 className="font-display font-black uppercase text-5xl md:text-7xl tracking-tight leading-[0.9]">
            Resultados que falam por si.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 border-t border-neutral-800 pt-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display font-black text-7xl md:text-8xl text-acid tracking-tighter mb-4 leading-none">
                {stat.number}
              </span>
              <h3 className="font-display uppercase tracking-widest text-lg font-bold mb-4">
                {stat.label}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed text-sm">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}