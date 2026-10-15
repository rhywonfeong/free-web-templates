import React from 'react';

export default function Stats() {
  const stats = [
    { number: '+1.200', desc: 'ALUNOS ATIVOS' },
    { number: '94%', desc: 'RETENÇÃO 6 MESES' },
    { number: '8 anos', desc: 'EM OPERAÇÃO' },
    { number: '1.8K', desc: 'M² DEDICADOS' }
  ];

  return (
    <section className="py-16 px-6 md:px-10 bg-[#111111] border-y border-[#1F1F1F]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-[#1F1F1F]">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-4">
            <span className="font-display font-black text-5xl md:text-6xl tracking-tighter text-[#F46A17] mb-2">{stat.number}</span>
            <span className="text-[#888888] text-xs font-bold tracking-widest uppercase">{stat.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}