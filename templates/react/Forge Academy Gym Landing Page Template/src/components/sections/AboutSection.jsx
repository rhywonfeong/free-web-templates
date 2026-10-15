import React from 'react'
import SectionHeading from '../ui/SectionHeading'

const AboutSection = () => {
  return (
    <section id="espaco" className="py-32 px-6 md:px-12 relative bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Collage Side */}
          <div className="relative">
            <div className="relative z-10 w-4/5 pb-[100%] bg-[#1C1C1C] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" 
                alt="Heavy weights" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-20 w-3/5 pb-[75%] bg-[#2E2E2E] overflow-hidden border-4 border-[#0D0D0D] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80" 
                alt="Athlete focus" 
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Orange Badge */}
            <div className="absolute top-10 right-10 z-30 w-32 h-32 bg-[#FF4A1C] rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent"/>
                <text className="text-[10px] font-bold tracking-[0.2em] fill-[#0D0D0D] uppercase">
                  <textPath href="#curve" startOffset="0">
                    Beyond Limits Known • Forgee •
                  </textPath>
                </text>
              </svg>
              <iconify-icon icon="solar:flame-bold" className="absolute text-4xl text-[#0D0D0D]"></iconify-icon>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <SectionHeading 
              subtitle="02 — A Essência"
              title="FORJADOS PELA *DISCIPLINA*."
              className="mb-8"
            />
            
            <p className="text-[#BFBFBF] text-lg leading-relaxed mb-8">
              A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano. Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
            </p>
            
            <blockquote className="border-l-2 border-[#FF4A1C] pl-6 py-2 mb-12">
              <p className="font-display text-2xl text-white tracking-wide">
                "NO SILÊNCIO, A TRANSFORMAÇÃO COMEÇA."
              </p>
            </blockquote>

            <p className="text-[#808080] text-base leading-relaxed mb-12">
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#2E2E2E]">
              {[
                { title: "Intensidade", desc: "Ambiente calibrado. Iluminação, acústica, temperatura — tudo serve ao treino." },
                { title: "Precisão", desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica." },
                { title: "Controle", desc: "Você define o objetivo. Nós fornecemos o caminho e o suporte." }
              ].map((pillar, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-3 group-hover:text-[#FF4A1C] transition-colors">{pillar.title}</h4>
                  <p className="text-[#808080] text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection