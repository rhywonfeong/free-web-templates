import React from 'react';

export default function Stats() {
  const stats = [
    { number: "29", label: "Anos de tradição no ensino" },
    { number: "+500", label: "Alunos ativos atualmente" },
    { number: "92%", label: "Taxa de frequência mensal" },
    { number: "3", label: "Unidades (São José e Palhoça)" }
  ];

  return (
    <section id="numeros" className="py-20 bg-[#12151F] border-y border-[#2B3045]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#E8193C] uppercase tracking-[0.15em] font-bold text-xs">Nossa Trajetória</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-4">Resultados que falam por si.</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-[#2B3045]">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <span className="text-5xl md:text-6xl font-black text-[#FFFFFF] mb-4 tracking-tighter">
                {stat.number}
              </span>
              <span className="text-[#94A3B8] font-semibold text-sm max-w-[160px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}