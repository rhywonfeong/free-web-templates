import React from 'react';

const Stats = () => {
  const stats = [
    { number: "+1.400", label: "Alunos ativos", context: "Membros que treinam com consistência há pelo menos 3 meses" },
    { number: "94%", label: "Taxa de frequência", context: "Média de presença semanal entre os alunos da casa" },
    { number: "12 anos", label: "De operação", context: "Uma década de refinamento contínuo do nosso método" },
    { number: "+40", label: "Especialistas", context: "Time multidisciplinar: personal trainers, nutricionistas e fisioterapeutas" }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-[#1A1A1A]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#FF6B00]"></span>
            <span className="font-display text-[#AAFF00] uppercase tracking-[0.15em] text-sm font-bold">Nossos resultados em dados</span>
            <span className="w-8 h-[2px] bg-[#FF6B00]"></span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight">
            Mais de uma década construindo evidências.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative p-8 overflow-hidden group">
              <div className="absolute inset-0 bg-[#111111] border border-[#252525] group-hover:border-[#3D5C1A] transition-colors -z-10"></div>
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-transparent border-t-2 border-r-2 border-[#252525] group-hover:border-[#AAFF00] transition-colors"></div>
              
              <h3 className="font-display font-black text-5xl md:text-6xl text-white mb-2">
                {stat.number}
              </h3>
              <p className="font-display text-[#AAFF00] uppercase tracking-widest text-lg font-bold mb-4">
                {stat.label}
              </p>
              <p className="text-[#666666] text-sm leading-relaxed">
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;