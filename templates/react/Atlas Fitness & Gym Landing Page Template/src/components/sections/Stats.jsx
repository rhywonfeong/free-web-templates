import React from 'react';

const Stats = () => {
  const stats = [
    { value: "2.4K", label: "Alunos Ativos", sub: "Na nossa maior marca histórica" },
    { value: "94%", label: "Taxa de Frequência", sub: "Média mensal dos alunos ativos" },
    { value: "12+", label: "Anos de Operação", sub: "Desde 2012 formando atletas" },
    { value: "98%", label: "Satisfação Geral", sub: "Avaliação média em NPS anual" }
  ];

  return (
    <section className="py-16 bg-neutral-900 border-y border-neutral-800">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left pt-8 sm:pt-0 sm:px-8 first:px-0 first:pt-0">
              <span className="text-5xl md:text-6xl font-display font-black text-acid leading-none tracking-tighter mb-2">
                {stat.value}
              </span>
              <span className="text-base font-bold uppercase tracking-wide text-offwhite mb-1">
                {stat.label}
              </span>
              <span className="text-sm text-neutral-500">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;