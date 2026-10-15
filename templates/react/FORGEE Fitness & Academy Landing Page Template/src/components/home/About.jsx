import React from 'react';

const About = () => {
  return (
    <section id="quem-somos" className="py-24 md:py-32 bg-[#000000] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Col - Headline */}
          <div className="lg:col-span-5 relative">
            <span className="font-display text-9xl md:text-[180px] font-black text-white/5 absolute -top-20 -left-10 select-none">02</span>
            <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tighter relative z-10">
              FORJADOS<br />PELA<br /><span className="text-[#FF1E00]">DISCIPLINA.</span>
            </h2>
          </div>

          {/* Right Col - Content */}
          <div className="lg:col-span-7 flex flex-col gap-12 mt-4">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg md:text-xl text-[#D9D9D9] font-light leading-relaxed mb-6">
                A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
              </p>
              <p className="text-lg md:text-xl text-[#D9D9D9] font-light leading-relaxed">
                Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-2 border-[#FF1E00] pl-8 py-2 my-4">
              <p className="font-display text-3xl md:text-4xl font-semibold text-white uppercase tracking-tight">
                "In silence, the transformation begins."
              </p>
            </blockquote>

            <p className="text-base text-[#D9D9D9] leading-relaxed">
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 mt-8">
              {[
                { title: 'Intensidade', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
                { title: 'Precisão', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
                { title: 'Controle', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' },
              ].map((pillar, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#FF1E00]"></div>
                    <h3 className="font-display text-xl font-bold text-white tracking-wide">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-[#737069] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;