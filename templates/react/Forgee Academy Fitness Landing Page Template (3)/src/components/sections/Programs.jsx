import React from 'react';

const Programs = () => {
  const programs = [
    {
      id: "strength",
      title: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
      target: "Iniciantes a avançados",
      freq: "3–5× por semana",
      highlight: false
    },
    {
      id: "conditioning",
      title: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura",
      freq: "Turmas: 06H · 07H · 12H · 18H · 19H30",
      highlight: true
    },
    {
      id: "mobility",
      title: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      target: "Recuperação ativa, prevenção",
      freq: "Sessões agendadas",
      highlight: false
    },
    {
      id: "personal",
      title: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      target: "Objetivos específicos, atenção total",
      freq: "A combinar",
      highlight: false
    }
  ];

  return (
    <section id="programas" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#FF6B2B] uppercase tracking-widest text-xs font-bold mb-4 block">O que oferecemos</span>
        <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tighter leading-none">
          Um Protocolo <br/>Para Cada Objetivo.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((prog) => (
          <div 
            key={prog.id}
            className={`p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
              prog.highlight 
                ? 'bg-gradient-to-br from-[#1E0804] to-[#0A0A0A] border-[#E8280D]/50 hover:border-[#E8280D] shadow-[0_0_30px_rgba(232,40,13,0.1)] hover:shadow-[0_0_40px_rgba(232,40,13,0.2)]' 
                : 'bg-[#131313] border-white/10 hover:border-white/30'
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className={`font-display text-2xl uppercase tracking-widest ${prog.highlight ? 'text-[#E8280D]' : 'text-white'}`}>
                {prog.title}
              </h3>
              {prog.highlight && (
                <span className="px-3 py-1 bg-[#E8280D]/20 text-[#E8280D] text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Destaque
                </span>
              )}
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 min-h-[80px]">
              {prog.desc}
            </p>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/5">
              <div className="flex items-start gap-3">
                <iconify-icon icon="solar:target-bold" class={`text-lg mt-0.5 ${prog.highlight ? 'text-[#FF6B2B]' : 'text-neutral-500'}`}></iconify-icon>
                <span className="text-xs text-neutral-300 uppercase tracking-wider">{prog.target}</span>
              </div>
              <div className="flex items-start gap-3">
                <iconify-icon icon="solar:calendar-bold" class={`text-lg mt-0.5 ${prog.highlight ? 'text-[#FF6B2B]' : 'text-neutral-500'}`}></iconify-icon>
                <span className="text-xs text-neutral-300 uppercase tracking-wider">{prog.freq}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;