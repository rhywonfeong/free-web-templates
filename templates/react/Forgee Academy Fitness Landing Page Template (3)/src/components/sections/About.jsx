import React from 'react';

const About = () => {
  const pillars = [
    { num: '01', title: 'Intensidade', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
    { num: '02', title: 'Precisão', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
    { num: '03', title: 'Controle', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' }
  ];

  const testimonials = [
    { text: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.", author: "Rafael M.", role: "Engenheiro · 3 anos" },
    { text: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.", author: "Juliana T.", role: "Professora · 2 anos" }
  ];

  return (
    <section id="espaco" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#E8280D]"></div>
            <span className="text-[#E8280D] uppercase tracking-widest text-xs font-bold">Quem somos</span>
          </div>
          
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-10">
            Forjados <br/>
            Pela <br/>
            Disciplina.
          </h2>

          <div className="space-y-6 text-neutral-300 text-lg leading-relaxed max-w-lg mb-12">
            <p>A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
            <p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
            <blockquote className="border-l-2 border-[#FF6B2B] pl-6 py-2 my-8 text-white font-display text-2xl tracking-wide uppercase italic">
              "In silence, the transformation begins."
            </blockquote>
            <p>Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex flex-col gap-16">
          
          {/* Pillars */}
          <div className="flex flex-col gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex gap-6 group">
                <span className="text-[#333333] font-display font-black text-5xl group-hover:text-[#E8280D] transition-colors">{pillar.num}</span>
                <div>
                  <h3 className="font-display text-xl uppercase tracking-widest mb-2 text-white">{pillar.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="bg-[#131313] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <iconify-icon icon="solar:quote-right-bold" class="text-8xl text-white"></iconify-icon>
            </div>
            <div className="flex flex-col gap-8 relative z-10">
              {testimonials.map((t, idx) => (
                <div key={idx} className={idx !== 0 ? "pt-8 border-t border-white/10" : ""}>
                  <p className="text-neutral-300 italic mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#E8280D] font-bold text-xs">
                      {t.author.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">{t.author} · {t.role}</span>
                  </div>
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