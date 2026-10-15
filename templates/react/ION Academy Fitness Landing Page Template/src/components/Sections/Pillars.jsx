import React from 'react';

const pillars = [
  {
    num: "01",
    title: "Intensidade",
    desc: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.",
    icon: "solar:flame-bold"
  },
  {
    num: "02",
    title: "Precisão",
    desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.",
    icon: "solar:target-bold"
  },
  {
    num: "03",
    title: "Controle",
    desc: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.",
    icon: "solar:tuning-square-2-bold"
  }
];

export default function Pillars() {
  return (
    <section className="py-24 bg-neutral-900 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            // Glassmorphism Sutil applied with backdrop-blur-md (12px)
            <div key={idx} className="bg-neutral-850/80 backdrop-blur-md p-8 rounded-2xl border border-neutral-700 hover:border-brand-green hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 text-8xl font-display font-black text-neutral-800 opacity-20 -mr-4 -mt-4 select-none group-hover:text-brand-green/10 transition-colors">
                {pillar.num}
              </div>
              
              <div className="w-14 h-14 bg-neutral-900 border border-neutral-600 text-brand-green rounded-lg flex items-center justify-center mb-8 group-hover:bg-brand-green group-hover:text-neutral-950 group-hover:border-brand-green transition-colors">
                <iconify-icon icon={pillar.icon} width="32"></iconify-icon>
              </div>
              
              {/* Header typography: SemiBold/Bold */}
              <h3 className="text-2xl font-display font-bold uppercase tracking-tighter text-neutral-50 mb-4 flex items-center gap-3">
                <span className="text-brand-green text-sm font-semibold tracking-widest">{pillar.num} ·</span> {pillar.title}
              </h3>
              
              <p className="text-neutral-200 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}