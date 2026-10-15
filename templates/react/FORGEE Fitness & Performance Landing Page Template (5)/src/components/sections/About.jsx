import React from 'react';

export default function About() {
  const cards = [
    {
      title: 'INTENSIDADE',
      text: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.'
    },
    {
      title: 'PRECISÃO',
      text: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.'
    },
    {
      title: 'CONTROLE',
      text: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[#F46A17] text-xs font-bold tracking-widest uppercase mb-8">QUEM SOMOS</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Col */}
          <div className="flex flex-col gap-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter leading-tight">
              FORJADOS PELA <span className="text-[#F46A17]">DISCIPLINA.</span>
            </h2>
            <div className="pl-6 border-l-2 border-[#F46A17]">
              <p className="text-xl md:text-2xl font-medium italic text-[#CCCCCC]">
                "In silence, the transformation begins."
              </p>
            </div>
          </div>

          {/* Right Col */}
          <div className="flex flex-col gap-12">
            <p className="text-[#CCCCCC] text-lg leading-relaxed font-medium">
              A <strong className="text-white font-bold">FORGEE</strong> nasceu de uma certeza simples: ambiente mediano produz resultado mediano. Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
              <br/><br/>
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <div key={idx} className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-lg p-6 flex flex-col gap-3 hover:border-[#3A3A3A] transition-colors">
                  <h3 className="text-white font-bold tracking-widest text-sm uppercase">{card.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}