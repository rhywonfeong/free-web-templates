import React from 'react';

const programs = [
  {
    id: "01",
    title: "ION Strength",
    desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
    attributes: [
      { label: "Para quem é", val: "Iniciantes a avançados" },
      { label: "Frequência", val: "3–5× por semana" }
    ]
  },
  {
    id: "02",
    title: "ION Conditioning",
    desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
    highlight: true,
    attributes: [
      { label: "Foco", val: "Condicionamento, perda de gordura" },
      { label: "Turmas", val: "06H · 07H · 12H · 18H · 19H30" }
    ]
  },
  {
    id: "03",
    title: "ION Mobility",
    desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
    attributes: []
  },
  {
    id: "04",
    title: "Personal Training",
    desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
    attributes: []
  }
];

export default function Programs() {
  return (
    <section id="programas" className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter uppercase text-neutral-50 mb-4 leading-[1.1]">
            Um protocolo para<br/>
            cada objetivo.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((prog) => (
            // Cards follow exact border rules: invisible/subtle default, 2px primary on active
            <div 
              key={prog.id} 
              className={`p-8 rounded-[16px] bg-neutral-850 transition-all duration-300 flex flex-col justify-between ${
                prog.highlight 
                  ? 'border-2 border-brand-green shadow-glow-primary relative overflow-hidden' 
                  : 'border border-transparent hover:border-neutral-600'
              }`}
            >
              {prog.highlight && (
                <div className="absolute top-4 right-4 bg-brand-green text-neutral-950 text-[10px] font-semibold uppercase px-2.5 py-1 tracking-[0.08em] rounded-[4px]">
                  Destaque
                </div>
              )}
              
              <div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className={`text-sm font-display font-black ${prog.highlight ? 'text-brand-green' : 'text-neutral-500'}`}>
                    {prog.id}
                  </span>
                  {/* H3 -> SemiBold/Medium 20-24px */}
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tighter text-neutral-50">
                    {prog.title}
                  </h3>
                </div>
                
                <p className="text-neutral-200 text-sm leading-relaxed mb-8">
                  {prog.desc}
                </p>
              </div>
              
              {prog.attributes.length > 0 && (
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-800 mt-auto">
                  {prog.attributes.map((attr, i) => (
                    <div key={i}>
                      {/* Overline -> 10-11px SemiBold uppercase tracking-widest */}
                      <div className="text-[10px] uppercase text-neutral-400 font-semibold tracking-widest mb-1">{attr.label}</div>
                      <div className="text-xs text-neutral-50 font-medium">{attr.val}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}