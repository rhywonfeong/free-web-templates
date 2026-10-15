import React from 'react';

export default function About() {
  return (
    <section id="espaco" className="py-24 bg-neutral-900 border-t border-neutral-800 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green via-brand-purple to-transparent opacity-30"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Col - Section Header */}
        <div className="md:w-1/3 shrink-0">
          <div className="text-brand-green text-[11px] font-semibold tracking-widest uppercase mb-4 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-brand-green"></span> 02
          </div>
          {/* Display MD - ExtraBold */}
          <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter uppercase text-neutral-50 mb-6 leading-[1.1]">
            Forjados pela<br />
            Disciplina.
          </h2>
        </div>

        {/* Right Col - Content */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-neutral-200 leading-relaxed font-regular">
              A ION nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>
          </div>
          
          <div className="flex items-center justify-center bg-neutral-950 p-8 clip-diagonal-right relative border-l-[3px] border-brand-green group hover:border-brand-neon hover:shadow-glow-primary transition-all duration-300">
            <div className="absolute top-4 left-4 text-6xl text-brand-green/20 font-display font-black">"</div>
            <blockquote className="text-2xl md:text-3xl font-display font-bold italic text-neutral-50 leading-tight relative z-10 uppercase text-center mt-4 group-hover:-translate-y-1 transition-transform">
              In silence,<br/>the transformation<br/>begins.
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}