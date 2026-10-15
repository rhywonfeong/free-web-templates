import React from 'react';

const Stats = () => {
  const stats = [
    { number: '+1.200', label: 'Alunos ativos' },
    { number: '94%', label: 'Retenção 6 meses' },
    { number: '8 anos', label: 'Em operação' },
    { number: '1.8K M²', label: 'Dedicados' },
  ];

  return (
    <section className="py-12 border-y border-white/10 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center text-center ${index !== 0 ? 'pl-8 md:pl-12' : ''}`}>
              <span className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">
                {stat.number}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#636363] font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;