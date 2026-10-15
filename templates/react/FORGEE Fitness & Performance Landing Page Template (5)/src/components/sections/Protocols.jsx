import React from 'react';
import { clsx } from 'clsx';

export default function Protocols() {
  const protocols = [
    {
      num: '01',
      name: 'FORGEE STRENGTH',
      desc: 'Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.',
      target: 'Iniciantes a avançados em hipertrofia e força.',
      freq: '3–5× por semana.',
      highlight: false
    },
    {
      num: '02',
      badge: 'DESTAQUE',
      name: 'FORGEE CONDITIONING',
      desc: 'Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.',
      target: 'Condicionamento, perda de gordura.',
      turmas: '06H · 07H · 12H · 18H · 19H30',
      highlight: true
    },
    {
      num: '03',
      name: 'FORGEE MOBILITY',
      desc: 'Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.',
      highlight: false
    },
    {
      num: '04',
      name: 'PERSONAL TRAINING',
      desc: 'Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.',
      highlight: false
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-[#1A1A1A] border-y border-[#2C2C2C]" id="programas">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        <div className="lg:col-span-4 flex flex-col">
          <div className="text-[#F46A17] text-xs font-bold tracking-widest uppercase mb-4">O QUE OFERECEMOS</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter leading-tight sticky top-32">
            UM PROTOCOLO PARA <span className="text-[#F46A17]">CADA OBJETIVO.</span>
          </h2>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4">
          {protocols.map((p, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "p-8 rounded-lg flex flex-col md:flex-row gap-6 md:gap-12 transition-all relative overflow-hidden",
                p.highlight 
                  ? "bg-[#222222] border-l-4 border-[#F46A17] shadow-[0_4px_24px_rgba(0,0,0,0.4)]" 
                  : "bg-[#111111] border border-[#2C2C2C] hover:border-[#3A3A3A]"
              )}
            >
              {p.badge && (
                <span className="absolute top-4 right-4 bg-[#F46A17]/10 text-[#F46A17] text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">
                  {p.badge}
                </span>
              )}
              
              <div className="flex-shrink-0 font-display font-black text-5xl text-[#3A3A3A] leading-none">
                {p.num}
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className={clsx("font-display font-semibold text-2xl uppercase tracking-wider mb-3", p.highlight ? "text-[#F46A17]" : "text-white")}>
                  {p.name}
                </h3>
                <p className="text-[#CCCCCC] text-sm leading-relaxed mb-6 font-medium">
                  {p.desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto pt-4 border-t border-[#2C2C2C]/50 text-xs font-medium">
                  {p.target && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[#888888] font-bold uppercase tracking-widest">Para quem é:</span>
                      <span className="text-white">{p.target}</span>
                    </div>
                  )}
                  {p.freq && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[#888888] font-bold uppercase tracking-widest">Frequência:</span>
                      <span className="text-white">{p.freq}</span>
                    </div>
                  )}
                  {p.turmas && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[#888888] font-bold uppercase tracking-widest">Turmas:</span>
                      <span className="text-white font-mono">{p.turmas}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}