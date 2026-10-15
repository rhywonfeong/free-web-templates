import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';

const Programs = () => {
  const programs = [
    {
      id: "01",
      title: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
      target: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana",
      highlight: false
    },
    {
      id: "02",
      title: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura.",
      freq: "06H · 07H · 12H · 18H · 19H30",
      highlight: true
    },
    {
      id: "03",
      title: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      target: "Recuperação ativa, prevenção de lesões.",
      freq: "Sessões guiadas 2x por semana",
      highlight: false
    },
    {
      id: "04",
      title: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      target: "Foco absoluto, reabilitação, objetivos específicos.",
      freq: "Agendamento flexível",
      highlight: false
    }
  ];

  return (
    <section id="programas" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <SectionHeading 
          eyebrow="O que oferecemos"
          title="UM PROTOCOLO PARA CADA OBJETIVO."
          highlightWords={['PROTOCOLO']}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className={`p-8 md:p-10 border transition-all duration-300 relative overflow-hidden group ${
                prog.highlight 
                  ? 'bg-[#1E1E1E] border-[#E8400A]/30 hover:border-[#E8400A]' 
                  : 'bg-[#111111] border-[#2A2A2A] hover:bg-[#1E1E1E]'
              }`}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8400A]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-[#E8400A]/20 transition-all"></div>
              )}
              
              <div className="flex items-baseline justify-between mb-6 relative z-10">
                <h3 className="font-display font-bold text-3xl md:text-4xl uppercase text-white tracking-wide">
                  {prog.title}
                </h3>
                <span className="font-display text-[#3A3A3A] font-black text-5xl">
                  {prog.id}
                </span>
              </div>
              
              <p className="text-[#B0B0B0] text-base leading-relaxed mb-8 min-h-[80px] relative z-10">
                {prog.desc}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-[#2A2A2A] relative z-10">
                <div className="flex items-start">
                  <iconify-icon icon="solar:target-linear" width="20" class="text-[#E8400A] mt-0.5 mr-3 flex-shrink-0"></iconify-icon>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#6B6B6B] mb-1">Para quem é</span>
                    <span className="text-sm text-white">{prog.target}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <iconify-icon icon="solar:clock-circle-linear" width="20" class="text-[#E8400A] mt-0.5 mr-3 flex-shrink-0"></iconify-icon>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#6B6B6B] mb-1">Frequência / Turmas</span>
                    <span className="text-sm text-white">{prog.freq}</span>
                  </div>
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