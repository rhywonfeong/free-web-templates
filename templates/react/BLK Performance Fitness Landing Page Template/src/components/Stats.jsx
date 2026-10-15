import React from 'react';

export default function Stats() {
  const stats = [
    { value: '2K+', label: 'Alunos Ativos', desc: 'Base ativa de alunos' },
    { value: '87%', label: 'Taxa de Frequência', desc: 'Média mensal de presença' },
    { value: '12+', label: 'Anos de Operação', desc: 'Desde 2012' },
    { value: '94%', label: 'Satisfação Geral', desc: 'NPS consolidado' }
  ];

  return (
    <section className="py-20 bg-[var(--color-graphite)] border-b border-[var(--color-ash)]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-[var(--color-ash)]/50">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col md:px-8 first:px-0 first:pl-0">
              <span className="font-display text-[48px] md:text-[64px] text-[var(--color-white)] leading-none tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-[14px] font-medium text-[var(--color-primary)] uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="text-[12px] text-[var(--color-smoke)]">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}