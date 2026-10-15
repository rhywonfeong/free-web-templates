import React from 'react';
import Eyebrow from '../ui/Eyebrow';
import Headline from '../ui/Headline';

const Protocol = () => {
  const steps = [
    { num: "01", title: "Avaliação inicial completa", desc: "Bioimpedância, teste de mobilidade, força máxima estimada e entrevista de objetivos com coach." },
    { num: "02", title: "Protocolo personalizado", desc: "Criação do seu ciclo de treinamento com base nos dados da avaliação e nos seus objetivos." },
    { num: "03", title: "Execução supervisionada", desc: "Acompanhamento presencial ou via app com registro de cargas, feedback e ajustes de sessão." },
    { num: "04", title: "Check-in de progresso", desc: "A cada 4 semanas, revisão do protocolo com reavaliação de dados e novo ciclo de evolução." },
    { num: "05", title: "Relatório de evolução", desc: "Relatório mensal completo com comparativos de composição corporal, performance e aderência." }
  ];

  return (
    <section id="protocolo" className="py-24 md:py-32 bg-[#0A0A0A] border-b border-[#1E1E1E] overflow-hidden relative">
      {/* Decorative background typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-[0.02]">
        <span className="font-display font-black text-[300px] leading-none whitespace-nowrap text-[#F5F5F5]">SYSTEM</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          <div>
            <Eyebrow>Protocolo Forge</Eyebrow>
            <Headline className="mb-8" highlightWords={['mensurável.']}>
              Um método. Evolução mensurável.
            </Headline>
            
            <div className="bg-[#111111] border-l-4 border-[#FF3A00] p-6 md:p-8 mb-8 rounded-r-lg">
              <h4 className="font-display text-xl uppercase tracking-widest text-[#F5F5F5] mb-2">O conceito</h4>
              <p className="font-bold text-[#FF5A1A] mb-4">Protocolo não é programa. É um sistema vivo.</p>
              <p className="text-[#888888] text-sm md:text-base mb-4">
                O Protocolo Forge é a nossa metodologia proprietária de desenvolvimento físico. Ele não é um plano fixo — é um sistema adaptativo que evolui com você. Cada variável do seu treino é monitorada, ajustada e validada por dados.
              </p>
              <p className="text-[#888888] text-sm md:text-base">
                Baseado em princípios de periodização, biomecânica aplicada e psicologia da performance, o Protocolo garante que você nunca esteja estagnado — apenas entre dois estados: progresso ativo e recuperação intencional.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-[28px] top-4 bottom-4 w-px bg-[#2A2A2A] hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              <h4 className="font-display text-2xl uppercase tracking-widest text-[#F5F5F5] mb-8 md:ml-16">Sistema — 5 etapas</h4>
              
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-8 group">
                  {/* Number Badge */}
                  <div className="w-14 h-14 rounded-full bg-[#181818] border-2 border-[#3D3D3D] text-[#CCCCCC] font-display font-bold text-xl flex items-center justify-center shrink-0 z-10 group-hover:border-[#FF3A00] group-hover:text-[#FF3A00] group-hover:bg-[#111111] transition-all shadow-[0_0_0_4px_#0A0A0A]">
                    {step.num}
                  </div>
                  
                  <div className="pt-2">
                    <h5 className="font-display text-xl uppercase tracking-wide text-[#F5F5F5] mb-2 group-hover:text-[#FF3A00] transition-colors">{step.title}</h5>
                    <p className="text-[#888888] text-sm">{step.desc}</p>
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

export default Protocol;