import React from 'react';
import Badge from '../components/Badge';

export default function Stats() {
  const stats = [
    { num: "1.200+", label: "Alunos ativos", desc: "Comunidade em constante crescimento", accent: "text-[#C8F135]" },
    { num: "94%", label: "Taxa de frequência", desc: "Acima da média nacional do setor", accent: "text-[#FF8040]" },
    { num: "10", label: "Anos de excelência", desc: "Desde 2014 formando performance", accent: "text-[#B8CFEE]" }
  ];

  return (
    <section className="py-24 bg-[#1A1A1A] relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <Badge className="mb-6" dotColor="#FF8040">Nossos números</Badge>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Resultados que <span className="text-[#C8F135]">falam</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-8 md:pt-0 md:px-8 first:pt-0 first:md:pl-0 last:md:pr-0">
              <div className={`text-6xl lg:text-7xl font-black tracking-tighter mb-4 ${stat.accent}`}>
                {stat.num}
              </div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-2">{stat.label}</h4>
              <p className="text-sm text-gray-400">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}