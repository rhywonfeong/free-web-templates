import React from 'react';
import Eyebrow from '../ui/Eyebrow';

const Stats = () => {
  const stats = [
    { number: "1.200", label: "Alunos ativos" },
    { number: "94%", label: "Taxa de frequência mensal" },
    { number: "9+", label: "Anos de operação" },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          
          <div className="w-full lg:w-1/3">
            <Eyebrow>Forge em números</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-[#F5F5F5]">
              Resultados que <span className="text-[#FF3A00]">falam por si.</span>
            </h2>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 border-l-0 lg:border-l border-[#2A2A2A] lg:pl-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-display font-black text-6xl md:text-7xl text-[#F5F5F5] tracking-tighter">
                  {stat.number}
                </span>
                <span className="text-[#888888] font-medium uppercase tracking-wider text-sm mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;