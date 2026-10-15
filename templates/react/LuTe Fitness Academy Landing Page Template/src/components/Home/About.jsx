import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 uppercase">
              Forjados pela <span className="text-[#00F9E4]">disciplina.</span>
            </h2>
            <p className="text-[#9A9A9A] text-lg mb-8 leading-relaxed">
              A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano. Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
            </p>
            
            <blockquote className="border-l-2 border-[#00F9E4] pl-6 mb-8 py-2">
              <p className="text-xl md:text-2xl font-medium italic text-white">
                "In silence, the transformation begins."
              </p>
            </blockquote>

            <p className="text-[#6B6B6B] leading-relaxed mb-12">
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Intensidade', desc: 'Ambiente calibrado para elevar o treino.' },
                { num: '02', title: 'Precisão', desc: 'Protocolo individualizado desde o dia um.' },
                { num: '03', title: 'Controle', desc: 'Você define o alvo, nós o caminho.' },
              ].map((pilar, idx) => (
                <div key={idx} className="flex flex-col border-t border-[#1C1C1C] pt-4 group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#00F9E4] text-sm font-semibold">{pilar.num}</span>
                  </div>
                  <h3 className="text-white font-medium mb-1 group-hover:text-[#00F9E4] transition-colors">{pilar.title}</h3>
                  <p className="text-[#6B6B6B] text-xs">{pilar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Image Container with strict styling */}
            <div className="aspect-[4/5] bg-[#121212] rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" 
                alt="Treino Intenso" 
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
            </div>

            {/* Floating Stats Panel */}
            <div className="absolute -bottom-6 -left-6 bg-[#121212] border border-[#2A2A2A] p-6 rounded-lg shadow-2xl flex gap-8">
              <div>
                <div className="text-3xl font-semibold text-[#00F9E4]">94%</div>
                <div className="text-[#6B6B6B] text-xs font-semibold tracking-wider uppercase mt-1">Retenção 6m</div>
              </div>
              <div className="w-px bg-[#2A2A2A]"></div>
              <div>
                <div className="text-3xl font-semibold text-white">8 Anos</div>
                <div className="text-[#6B6B6B] text-xs font-semibold tracking-wider uppercase mt-1">Em Operação</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;