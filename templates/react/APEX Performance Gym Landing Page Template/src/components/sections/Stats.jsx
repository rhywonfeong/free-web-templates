import React from 'react';
import { Badge } from '../ui/Badge';

const Stats = () => {
  const stats = [
    { number: "2.400", suffix: "+", label: "Alunos Ativos" },
    { number: "94", suffix: "%", label: "Taxa de Frequência Mensal" },
    { number: "12", suffix: "anos", label: "De Excelência Contínua" }
  ];

  return (
    <section className="py-24 bg-[#2B2B2B] text-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <Badge className="mb-4">EM NÚMEROS</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Resultados que<br />falam por si.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 border-y border-white/10 py-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-6xl md:text-7xl font-black tracking-tighter">{stat.number}</span>
                <span className="text-3xl md:text-4xl font-bold text-[#FF8000]">{stat.suffix}</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#9E9488]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:text-left">
          <p className="text-sm text-[#9E9488]">
            Dados atualizados mensalmente · Frequência medida por controle de acesso biométrico
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;