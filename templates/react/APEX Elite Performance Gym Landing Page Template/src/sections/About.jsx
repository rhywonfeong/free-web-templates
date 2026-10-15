import React from 'react';
import Badge from '../components/Badge';

export default function About() {
  const pillars = [
    {
      icon: "solar:dna-bold-duotone",
      title: "Baseado em ciência",
      description: "Protocolos atualizados com a literatura científica mais recente em fisiologia e performance."
    },
    {
      icon: "solar:target-bold-duotone",
      title: "Personalizado por padrão",
      description: "Cada aluno é avaliado, monitorado e acompanhado individualmente — sem treinos genéricos."
    },
    {
      icon: "solar:cup-star-bold-duotone",
      title: "Comunidade de alto padrão",
      description: "Um ambiente onde o comprometimento é a regra, não a exceção."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-[#100F0F] relative">
      <div className="container mx-auto px-6 md:px-12">
        <Badge className="mb-8" dotColor="#B8CFEE">Quem somos</Badge>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
              Uma academia <br/> <span className="text-gray-500">construída diferente</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                A APEX nasceu da convicção de que treinar bem exige mais do que equipamentos — exige método, ambiente e pessoas certas. Desde 2014, somos referência em performance para atletas amadores, executivos e entusiastas do fitness em São Paulo.
              </p>
              <p>
                Cada detalhe foi projetado para criar um espaço onde a disciplina encontra a ciência. Nossos coaches são selecionados entre os melhores do país e nossos protocolos são baseados em evidências atualizadas da fisiologia do exercício.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 justify-center">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#1A1A1A] p-6 rounded-[20px] border border-white/5 flex gap-6 items-start group hover:border-white/20 transition-colors duration-300">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#100F0F] border border-white/10 flex items-center justify-center text-[#C8F135] group-hover:scale-110 group-hover:bg-[#C8F135]/10 transition-all duration-300">
                  <iconify-icon icon={pillar.icon} width="28"></iconify-icon>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}