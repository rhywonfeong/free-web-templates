import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const About = () => {
  return (
    <section id="espaco" className="py-32 px-6 lg:px-12 bg-[#111111] relative border-b border-[#2E2E2E]">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading 
          label="QUEM SOMOS"
          title={"FORJADOS\nPELA\nDISCIPLINA."}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
          
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <p className="text-lg text-neutral-300 leading-relaxed">
              A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
            </p>
            <blockquote className="border-l-2 border-[#E02020] pl-6 py-2 my-4">
              <p className="text-2xl font-light italic text-white">"In silence, the transformation begins."</p>
            </blockquote>
            <p className="text-base text-neutral-400 leading-relaxed">
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[#1A1A1A] p-8 border border-[#2E2E2E] hover:border-[#E02020] transition-colors group">
              <div className="text-[#E02020] mb-6">
                <iconify-icon icon="solar:fire-bold" width="32"></iconify-icon>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4">Intensidade</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.</p>
            </div>
            <div className="bg-[#1A1A1A] p-8 border border-[#2E2E2E] hover:border-[#E02020] transition-colors group">
              <div className="text-[#E02020] mb-6">
                <iconify-icon icon="solar:target-bold" width="32"></iconify-icon>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4">Precisão</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.</p>
            </div>
            <div className="bg-[#1A1A1A] p-8 border border-[#2E2E2E] hover:border-[#E02020] transition-colors group sm:col-span-2">
              <div className="text-[#E02020] mb-6">
                <iconify-icon icon="solar:slider-vertical-bold" width="32"></iconify-icon>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4">Controle</h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { quote: "Treinei em academias em SP por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.", author: "Rafael M.", role: "Engenheiro · 3 anos" },
            { quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.", author: "Juliana T.", role: "Professora · 2 anos" },
            { quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.", author: "Lucas O.", role: "Empresário · 4 anos" }
          ].map((t, i) => (
            <div key={i} className="p-8 border-t border-[#2E2E2E] bg-gradient-to-b from-[#1A1A1A] to-transparent">
              <div className="text-[#E02020] mb-4 opacity-50">
                <iconify-icon icon="solar:quote-left-bold" width="24"></iconify-icon>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#222] rounded-full flex items-center justify-center text-xs font-bold text-neutral-400">
                  {t.author.substring(0,2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold tracking-widest uppercase">{t.author}</h4>
                  <p className="text-neutral-500 text-[10px] tracking-widest uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;