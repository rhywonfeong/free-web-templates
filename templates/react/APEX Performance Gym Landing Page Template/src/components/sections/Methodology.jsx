import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const Methodology = () => {
  const steps = [
    {
      num: "01",
      title: "AVALIAÇÃO COMPLETA",
      desc: "Antes de qualquer treino, você passa por avaliação física, postural e de composição corporal. Entendemos o seu ponto de partida para construir o caminho certo."
    },
    {
      num: "02",
      title: "PLANEJAMENTO INDIVIDUALIZADO",
      desc: "Seu protocolo é único. Baseado nos seus objetivos, histórico e disponibilidade, o coach monta uma periodização estruturada — não um treino genérico."
    },
    {
      num: "03",
      title: "EXECUÇÃO SUPERVISIONADA",
      desc: "Cada sessão conta com orientação técnica ativa. Correção de postura, ajuste de carga e estímulo no momento certo fazem a diferença entre progredir e estagnar."
    },
    {
      num: "04",
      title: "REVISÃO E EVOLUÇÃO",
      desc: "A cada ciclo de 4 semanas, seu protocolo é revisado. Dados, feedback e novas metas definem os próximos passos. Você nunca para de evoluir."
    }
  ];

  return (
    <section id="protocolo" className="py-24 lg:py-32 bg-[#FFF8F1] text-[#2B2B2B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Intro Col */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Badge className="mb-6">METODOLOGIA</Badge>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.95] mb-8">
              Protocolo<br />não é um treino.<br />
              <span className="text-[#FF8000]">É um sistema.</span>
            </h2>
            
            <div className="text-lg text-[#5C554E] leading-relaxed mb-10 space-y-4">
              <p>
                A maioria das pessoas treina. Poucos progridem de forma consistente. A diferença não está no esforço — está no método.
              </p>
              <p>
                O <strong>Protocolo APEX</strong> é o nosso sistema de treinamento proprietário, desenvolvido ao longo de 12 anos combinando princípios da ciência do esporte, biomecânica aplicada e psicologia da performance. Ele elimina o achismo e coloca você no controle da sua evolução.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <Button href="#planos" variant="black">Conhecer o protocolo</Button>
              <Button href="#contato" variant="outlineBlack">Falar com especialista</Button>
            </div>
          </div>

          {/* Steps Col */}
          <div className="lg:col-span-6 lg:col-start-7 relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-[#2B2B2B]/10 hidden md:block z-0"></div>

            <div className="flex flex-col gap-10 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 md:gap-8">
                  <div className="w-14 h-14 flex-shrink-0 rounded-full bg-[#2B2B2B] text-[#FFF8F1] font-display font-bold text-xl flex items-center justify-center border-4 border-[#FFF8F1] shadow-sm">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold uppercase tracking-wide mb-3">{step.title}</h4>
                    <p className="text-[#5C554E] leading-relaxed">{step.desc}</p>
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

export default Methodology;