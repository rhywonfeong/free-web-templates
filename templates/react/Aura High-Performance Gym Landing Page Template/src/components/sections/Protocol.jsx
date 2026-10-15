import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const Protocol = () => {
  const phases = [
    {
      num: "01",
      title: "Avaliação Inicial",
      focus: "Composição, mobilidade, força",
      desc: "Antes de qualquer treino, avaliação completa de composição corporal, mobilidade articular e histórico. Sem atalhos.",
      result: "Relatório + protocolo inicial"
    },
    {
      num: "02",
      title: "Adaptação (Sem 1-4)",
      focus: "Técnica e consciência",
      desc: "Introdução progressiva ao volume. O objetivo é calibrar o sistema nervoso e estabelecer uma base sólida antes da carga.",
    },
    {
      num: "03",
      title: "Desenvolvimento (Sem 5-12)",
      focus: "Hipertrofia / Força",
      desc: "Avanço em complexidade. Cargas aumentam progressivamente, novos estímulos são introduzidos e os resultados ficam visíveis.",
    },
    {
      num: "04",
      title: "Intensificação (Sem 13-20)",
      focus: "Peak de resultado",
      desc: "A fase de maior demanda. Técnicas avançadas aplicadas sob supervisão direta. Revisão quinzenal obrigatória.",
    },
    {
      num: "05",
      title: "Deload e Revisão (Sem 21)",
      focus: "Recuperação ativa",
      desc: "Uma semana estruturada de recuperação. Não é descanso — é parte do protocolo. Avaliação final do ciclo e preparação para o próximo.",
      result: "Novo relatório + protocolo"
    }
  ];

  const benefits = [
    "Avaliação física completa",
    "Protocolo revisado a cada 4 semanas",
    "Acompanhamento de um coach",
    "Acesso ao app de controle",
    "Relatório de progresso",
    "Canal direto com coach"
  ];

  return (
    <section id="protocolo" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-[#252525] hidden md:block"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeader 
          tag="Nossa metodologia" 
          title="Protocolo não é ficha. É um sistema." 
          subtitle="A maioria das academias oferece fichas. Nós oferecemos um sistema vivo, construído sobre: Avaliação → Prescrição → Execução → Revisão."
          alignment="center"
        />

        <div className="mt-20 relative">
          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Visual Marker (Center on desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#111111] border-2 border-[#AAFF00] z-10 items-center justify-center font-display font-bold text-[#AAFF00]">
                  {phase.num}
                </div>

                {/* Mobile Marker */}
                <div className="md:hidden w-12 h-12 bg-[#1A1A1A] border border-[#333333] flex items-center justify-center font-display font-bold text-[#AAFF00] mb-[-16px]">
                  {phase.num}
                </div>

                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} bg-[#1A1A1A] md:bg-transparent p-6 md:p-0 border border-[#252525] md:border-none`}>
                  <h3 className="font-display font-bold text-2xl md:text-3xl uppercase text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-[#FF6B00] font-medium text-sm tracking-wide uppercase mb-4">
                    Foco: {phase.focus}
                  </p>
                  <p className="text-[#CCCCCC] leading-relaxed mb-4">
                    {phase.desc}
                  </p>
                  {phase.result && (
                    <div className={`inline-block px-4 py-2 bg-[#111111] border border-[#333333] text-[#AAFF00] text-sm ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      Resultado: {phase.result}
                    </div>
                  )}
                </div>
                
                <div className="flex-1 hidden md:block"></div> {/* Spacer for grid */}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-[#111111] border border-[#252525] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="font-display font-black text-3xl uppercase text-white mb-6">O que você recebe</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#CCCCCC]">
                    <iconify-icon icon="solar:check-circle-linear" class="text-[#AAFF00] text-xl shrink-0"></iconify-icon>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:text-right">
              <Button variant="primary" href="#contato">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Protocol;