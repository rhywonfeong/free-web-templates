import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';

const Protocol = () => {
  const phases = [
    { num: "01", name: "AVALIAÇÃO TOTAL", time: "Semana 1", desc: "Avaliação física completa, anamnese detalhada, teste de força e capacidade cardiovascular. Definição de baseline individual. Identificação de limitações e potenciais." },
    { num: "02", name: "PRESCRIÇÃO INDIVIDUALIZADA", time: "Semanas 2–3", desc: "Montagem do protocolo de treinamento exclusivo, definição de volume, intensidade e frequência ideal para o perfil identificado. Alinhamento com coach." },
    { num: "03", name: "EXECUÇÃO E ADAPTAÇÃO", time: "Semanas 4–8", desc: "Implementação do protocolo com acompanhamento técnico em cada sessão. Ajustes semanais baseados em resposta adaptativa. Sem achismo — só dados." },
    { num: "04", name: "PROGRESSÃO DE CARGA", time: "Semanas 9–16", desc: "Aumento progressivo de estímulos. Periodização ondulatória ou linear de acordo com objetivo. Monitoramento de recuperação integrado ao app." },
    { num: "05", name: "REAVALIAÇÃO E NOVO CICLO", time: "A cada 16 semanas", desc: "Reavaliação completa com comparativo de baseline. Relatório de progresso individual. Definição do próximo ciclo com novos objetivos." }
  ];

  return (
    <section id="protocolo" className="py-24 md:py-32 bg-[#0F0D0B] relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E84E0F] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Sticky Left Column */}
          <div className="lg:w-[40%] lg:sticky lg:top-32 h-fit">
            <SectionHeader 
              theme="dark"
              eyebrow="METODOLOGIA"
              title="ISSO NÃO É TREINO. É PROTOCOLO."
              className="mb-10"
            />
            
            <div className="space-y-6 text-[#B0AAA4] text-[17px] leading-[1.65] mb-12">
              <h4 className="font-accent text-[#E6E3E0] text-[14px] font-semibold tracking-[1px] uppercase mb-4 border-b border-[#1E1B18] pb-2">
                O QUE É O PROTOCOLO Forgee?
              </h4>
              <p>
                Na Forgee, não existe treino genérico. Existe um sistema de desenvolvimento contínuo, estruturado em fases, guiado por dados e executado por coaches que entendem que cada corpo tem uma lógica própria.
              </p>
              <p>
                O Protocolo é a soma de três elementos inegociáveis: avaliação precisa, prescrição individualizada e acompanhamento constante. Não começamos sem saber quem você é. Não avançamos sem medir onde você está.
              </p>
              <p className="text-white font-medium">
                O resultado não é um produto que vendemos. É uma consequência do sistema que aplicamos.
              </p>
            </div>

            <div className="p-6 border-l-2 border-[#E84E0F] bg-[#1E1B18]/50">
              <p className="font-display font-bold text-[24px] uppercase text-white mb-2 tracking-tight">
                "Stillness is the hardest movement."
              </p>
              <p className="font-accent text-[#8A837C] text-[11px] tracking-[2px] uppercase">
                — Forgee Identity Core
              </p>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-[60%]">
            <h4 className="font-accent text-[#E84E0F] text-[13px] font-semibold tracking-[2px] uppercase mb-8 hidden lg:block">
              AS 5 FASES DO SISTEMA Forgee
            </h4>
            
            <div className="space-y-6">
              {phases.map((phase, idx) => (
                <div key={idx} className="bg-[#1E1B18] p-8 rounded-[20px] border border-white/5 hover:border-[#E84E0F]/30 transition-colors relative overflow-hidden group">
                  {/* Decorative number background */}
                  <span className="absolute -right-4 -bottom-8 font-display font-black text-[120px] leading-none text-white/[0.02] group-hover:text-[#E84E0F]/5 transition-colors pointer-events-none">
                    {phase.num}
                  </span>
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <Tag variant="dark" className="border border-white/10 font-accent">FASE {phase.num}</Tag>
                    <span className="font-accent text-[#8A837C] text-[12px] tracking-widest uppercase flex items-center gap-2">
                      <iconify-icon icon="solar:clock-circle-linear" width="16" />
                      {phase.time}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-[28px] uppercase tracking-tight text-white mb-3 relative z-10">
                    {phase.name}
                  </h3>
                  
                  <p className="text-[#B0AAA4] text-[15px] leading-[1.6] relative z-10">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Differential Footer */}
            <div className="mt-16 pt-10 border-t border-[#1E1B18] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <iconify-icon icon="solar:shield-warning-bold" width="24" class="text-[#E84E0F]" />
                <span className="font-accent text-[#E6E3E0] text-[11px] tracking-[1px] uppercase font-semibold">Sem treino genérico. Nunca.</span>
              </div>
              <div className="flex items-center gap-3">
                <iconify-icon icon="solar:database-bold" width="24" class="text-[#E84E0F]" />
                <span className="font-accent text-[#E6E3E0] text-[11px] tracking-[1px] uppercase font-semibold">Dados antes de decisões.</span>
              </div>
              <div className="flex items-center gap-3">
                <iconify-icon icon="solar:users-group-rounded-bold" width="24" class="text-[#E84E0F]" />
                <span className="font-accent text-[#E6E3E0] text-[11px] tracking-[1px] uppercase font-semibold">Coach designado desde o dia 1.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;