import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';

const About = () => {
  return (
    <section id="espaco" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Typography & Content */}
          <div className="lg:col-span-7">
            <SectionHeading 
              eyebrow="Quem somos"
              title="FORJADOS PELA DISCIPLINA."
              highlightWords={['DISCIPLINA.']}
            />

            <div className="space-y-6 text-[#B0B0B0] text-lg leading-relaxed max-w-2xl">
              <p>
                A FORGEE nasceu de uma certeza simples: <strong className="text-white font-medium">ambiente mediano produz resultado mediano.</strong>
              </p>
              <p>
                Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
              </p>
            </div>

            <blockquote className="my-12 border-l-4 border-[#E8400A] pl-8 py-2">
              <p className="font-display italic text-3xl md:text-4xl text-white tracking-tight">
                "In silence, the transformation begins."
              </p>
            </blockquote>

            <p className="text-[#B0B0B0] text-lg leading-relaxed max-w-2xl">
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#2A2A2A]">
              {[
                { title: 'Intensidade', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
                { title: 'Precisão', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
                { title: 'Controle', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' }
              ].map((pillar, i) => (
                <div key={i}>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-[#E8400A] font-display font-bold text-xl">0{i+1}</span>
                    <h4 className="font-display uppercase tracking-wider text-white text-lg">{pillar.title}</h4>
                  </div>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md group">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop" 
                alt="Ambiente interno da academia Forgee" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-white/10 rounded-md mix-blend-overlay"></div>
            </div>
            
            {/* Overlay Stats Box */}
            <div className="absolute -bottom-10 -left-10 bg-[#1E1E1E] p-8 border border-[#2A2A2A] hidden md:block w-72 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="font-display text-3xl font-bold text-[#E8400A]">94%</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#6B6B6B] mt-1">Retenção 6m</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white">1.8K</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#6B6B6B] mt-1">Área M²</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white">+1.2K</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#6B6B6B] mt-1">Alunos Ativos</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white">8</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#6B6B6B] mt-1">Anos Op.</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Testimonials */}
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((test, i) => (
              <div key={i} className="bg-[#1E1E1E] p-8 border border-[#2A2A2A] flex flex-col justify-between">
                <p className="text-[#B0B0B0] italic mb-8 relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-[#3A3A3A] font-display opacity-50">"</span>
                  <span className="relative z-10">{test.quote}</span>
                </p>
                <div>
                  <p className="font-display tracking-wider uppercase text-white text-sm mb-1">{test.author}</p>
                  <p className="text-[#6B6B6B] text-xs">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;