import React from 'react';

const Programs = () => {
  const programs = [
    {
      num: "01",
      title: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
      target: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana.",
      highlight: false
    },
    {
      num: "02",
      title: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura.",
      freq: "Turmas: 06H · 07H · 12H · 18H · 19H30",
      highlight: true
    },
    {
      num: "03",
      title: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      target: null,
      freq: null,
      highlight: false
    },
    {
      num: "04",
      title: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      target: null,
      freq: null,
      highlight: false
    }
  ];

  return (
    <section id="programas" className="py-24 md:py-32 bg-[#000000]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tighter">
            UM PROTOCOLO<br />PARA CADA<br /><span className="text-[#FF1E00]">OBJETIVO.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className={`p-10 border ${prog.highlight ? 'border-[#FF1E00] bg-[#1a0502]' : 'border-[#353535] bg-[#0a0a0a]'} relative flex flex-col rounded-none`}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-0 bg-[#FF1E00] text-white text-[10px] font-bold tracking-[0.2em] px-4 py-1 uppercase">
                  Destaque
                </div>
              )}
              
              <div className="flex items-end gap-6 mb-8">
                <span className={`font-display text-7xl font-black leading-none ${prog.highlight ? 'text-[#FF1E00]' : 'text-[#353535]'}`}>
                  {prog.num}
                </span>
                <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-2 uppercase">
                  {prog.title}
                </h3>
              </div>
              
              <p className="text-[#D9D9D9] text-base leading-relaxed font-light mb-8 flex-grow">
                {prog.desc}
              </p>

              {(prog.target || prog.freq) && (
                <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                  {prog.target && (
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#636363] uppercase tracking-widest font-semibold mb-1">Para quem é</span>
                      <span className="text-sm text-white">{prog.target}</span>
                    </div>
                  )}
                  {prog.freq && (
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#636363] uppercase tracking-widest font-semibold mb-1">{prog.title.includes('CONDITIONING') ? 'Turmas' : 'Frequência'}</span>
                      <span className="text-sm text-white">{prog.freq}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;