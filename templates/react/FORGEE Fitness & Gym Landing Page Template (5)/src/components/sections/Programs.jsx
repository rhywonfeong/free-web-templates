import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { clsx } from 'clsx';

const Programs = () => {
  const programs = [
    {
      num: "01",
      name: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
      target: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana",
      highlight: false
    },
    {
      num: "02",
      name: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura.",
      freq: "Turmas: 06H · 07H · 12H · 18H · 19H30",
      highlight: true
    },
    {
      num: "03",
      name: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      target: "Todos os níveis.",
      freq: "2× por semana recomendado",
      highlight: false
    },
    {
      num: "04",
      name: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      target: "Foco extremo e correção técnica.",
      freq: "Agendamento flexível",
      highlight: false
    }
  ];

  return (
    <section id="programas" className="py-32 px-6 lg:px-12 bg-[#111111] relative">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading 
          label="O QUE OFERECEMOS"
          title={"UM PROTOCOLO\nPARA CADA\nOBJETIVO."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {programs.map((prog, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "p-8 lg:p-12 border transition-all duration-300 relative overflow-hidden group",
                prog.highlight 
                  ? "bg-[#1A1A1A] border-[#E02020] shadow-[0_0_30px_rgba(224,32,32,0.1)]" 
                  : "bg-transparent border-[#2E2E2E] hover:border-neutral-500"
              )}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-0 bg-[#E02020] text-white text-[10px] font-bold tracking-widest px-4 py-1">
                  DESTAQUE
                </div>
              )}
              
              <div className="text-5xl font-black text-transparent [-webkit-text-stroke:1px_#444] mb-8 group-hover:[-webkit-text-stroke:1px_#E02020] transition-all">
                {prog.num}
              </div>
              
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4 uppercase">
                {prog.name}
              </h3>
              
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 min-h-[80px]">
                {prog.desc}
              </p>
              
              <div className="flex flex-col gap-2 pt-6 border-t border-[#2E2E2E]">
                <div className="flex items-start gap-2">
                  <iconify-icon icon="solar:users-group-two-rounded-linear" className="text-neutral-500 mt-0.5" width="16"></iconify-icon>
                  <span className="text-xs text-neutral-300 font-medium tracking-wide">{prog.target}</span>
                </div>
                <div className="flex items-start gap-2">
                  <iconify-icon icon="solar:calendar-linear" className="text-neutral-500 mt-0.5" width="16"></iconify-icon>
                  <span className="text-xs text-neutral-300 font-medium tracking-wide">{prog.freq}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;