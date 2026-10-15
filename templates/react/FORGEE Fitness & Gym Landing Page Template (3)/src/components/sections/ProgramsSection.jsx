import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export default function ProgramsSection() {
  const programs = [
    {
      title: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
      target: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana.",
      highlight: false
    },
    {
      title: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura.",
      freq: "06H · 07H · 12H · 18H · 19H30",
      highlight: true
    },
    {
      title: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      target: "Prevenção, recuperação.",
      freq: "1-2× por semana.",
      highlight: false
    },
    {
      title: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      target: "Foco absoluto, casos específicos.",
      freq: "Agendamento flexível.",
      highlight: false
    }
  ];

  return (
    <section id="programas" className="py-24 md:py-32 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader 
          eyebrow="O que oferecemos" 
          title={<>UM PROTOCOLO<br/>PARA CADA<br/><span className="text-[#E8400A]">OBJETIVO.</span></>}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className={`p-8 border flex flex-col h-full relative overflow-hidden group ${
                prog.highlight 
                  ? 'border-[#E8400A]/50 bg-[#111111]' 
                  : 'border-[#1E1E1E] bg-[#111111]'
              }`}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8400A]/10 blur-2xl rounded-full"></div>
              )}
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] text-[#6B6B6B] font-display">0{index + 1}</span>
                {prog.highlight && (
                  <span className="text-[10px] text-[#E8400A] uppercase tracking-widest font-medium border border-[#E8400A]/30 px-2 py-1">
                    Destaque
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl tracking-wide text-white mb-4">
                {prog.title}
              </h3>
              
              <p className="text-[#B0B0B0] text-[14px] leading-relaxed mb-8 flex-grow">
                {prog.desc}
              </p>

              <div className="flex flex-col gap-3 pt-6 border-t border-[#1E1E1E]">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-[#6B6B6B] uppercase tracking-wider">Para quem é</span>
                  <span className="text-white text-right w-1/2">{prog.target}</span>
                </div>
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-[#6B6B6B] uppercase tracking-wider">{prog.highlight ? 'Turmas' : 'Frequência'}</span>
                  <span className="text-white text-right">{prog.freq}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}