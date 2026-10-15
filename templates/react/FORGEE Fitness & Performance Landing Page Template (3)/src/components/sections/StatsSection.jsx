import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: "+1.200", label: "Alunos ativos" },
    { value: "94%", label: "Retenção 6 meses" },
    { value: "8 anos", label: "Em operação" },
    { value: "1.8K M²", label: "Dedicados" }
  ];

  return (
    <section className="py-24 bg-void border-y border-subtle">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-[rgba(255,255,255,0.1)]">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-semibold tabular-nums text-white mb-3 tracking-tight">
                {stat.value}
              </span>
              <span className="text-[#888780] text-xs uppercase tracking-widest font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;