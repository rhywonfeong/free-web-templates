import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const ProgramsSection = () => {
  const programs = [
    {
      id: "01",
      title: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
      target: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana."
    },
    {
      id: "02",
      title: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura.",
      extraLabel: "TURMAS",
      extraVal: "06H · 07H · 12H · 18H · 19H30",
      highlight: true
    },
    {
      id: "03",
      title: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      target: "Quem treina pesado e quer longevidade.",
      freq: "2× por semana recomendado."
    },
    {
      id: "04",
      title: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      target: "Quem quer máxima individualização.",
      extraLabel: "FORMATO",
      extraVal: "Individual ou dupla."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-void">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <SectionHeader 
            eyebrow="O que oferecemos"
            title="UM PROTOCOLO\nPARA CADA\nOBJETIVO."
            subtitle="Não acreditamos em treino genérico. Cada programa nasce de uma avaliação real — e evolui com você."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {programs.map((prog) => (
            <div 
              key={prog.id} 
              className={`p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:bg-surface ${
                prog.highlight ? 'border-[#BFFF00]/50 bg-surface/50' : 'border-subtle bg-base'
              } flex flex-col justify-between min-h-[340px]`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[#888780] font-semibold text-sm">{prog.id}</span>
                  {prog.highlight && <Badge variant="acid">MAIS POPULAR</Badge>}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-4 tracking-tight">{prog.title}</h3>
                <p className="text-[#888780] text-sm leading-relaxed mb-8">{prog.desc}</p>
              </div>

              <div className="space-y-4 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                <div>
                  <span className="block text-[10px] font-semibold text-[#888780] uppercase tracking-widest mb-1">PARA QUEM É</span>
                  <span className="text-white text-sm">{prog.target}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-semibold text-[#888780] uppercase tracking-widest mb-1">
                    {prog.extraLabel || 'FREQUÊNCIA'}
                  </span>
                  <span className="text-white text-sm">{prog.freq || prog.extraVal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button>QUERO CONHECER OS PROGRAMAS</Button>
          <Button variant="secondary">FALAR COM UM COACH</Button>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;