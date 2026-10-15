import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export default function AboutSection() {
  const pillars = [
    {
      num: "01",
      title: "Intensidade",
      desc: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino."
    },
    {
      num: "02",
      title: "Precisão",
      desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui."
    },
    {
      num: "03",
      title: "Controle",
      desc: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte."
    }
  ];

  const testimonials = [
    {
      quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
      author: "Rafael M.",
      role: "Engenheiro · Aluno há 3 anos"
    },
    {
      quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
      author: "Juliana T.",
      role: "Professora · Aluna há 2 anos"
    },
    {
      quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
      author: "Lucas O.",
      role: "Empresário · Aluno há 4 anos"
    }
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-32">
          {/* Header Area */}
          <div className="lg:col-span-5 sticky top-32">
            <SectionHeader 
              eyebrow="Quem somos" 
              title={<>FORJADOS<br/>PELA<br/><span className="text-[#E8400A]">DISCIPLINA.</span></>}
            />
          </div>

          {/* Content Area */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
            <p className="text-white text-lg leading-relaxed">
              A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
            </p>
            <p className="text-[#B0B0B0] text-[15px] leading-relaxed">
              Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
            </p>
            
            <blockquote className="border-l-2 border-[#E8400A] pl-6 py-2 my-6">
              <p className="font-display text-2xl tracking-wide text-white italic">
                "In silence, the transformation begins."
              </p>
            </blockquote>

            <p className="text-[#B0B0B0] text-[15px] leading-relaxed">
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>

            <div className="h-px w-full bg-[#1E1E1E] my-8"></div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="flex flex-col gap-3">
                  <span className="text-[#E8400A] font-display text-2xl">{pillar.num}</span>
                  <h4 className="text-white font-semibold uppercase tracking-wider text-sm">{pillar.title}</h4>
                  <p className="text-[#6B6B6B] text-[13px] leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-[#111111] border border-[#1E1E1E] p-8 flex flex-col justify-between hover:border-[#2A2A2A] transition-colors">
              <p className="text-[#B0B0B0] text-[14px] leading-relaxed italic mb-8">
                "{test.quote}"
              </p>
              <div>
                <p className="text-white font-medium text-sm">{test.author}</p>
                <p className="text-[#6B6B6B] text-[12px] mt-1">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}