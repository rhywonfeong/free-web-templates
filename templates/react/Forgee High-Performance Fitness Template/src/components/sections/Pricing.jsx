import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import Tag from '../ui/Tag';

const Pricing = () => {
  return (
    <section id="planos" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <SectionHeader 
          align="center"
          eyebrow="MATRÍCULAS ABERTAS"
          title="ESCOLHA SEU NÍVEL DE ACESSO."
          subtitle="Cada plano inclui avaliação física inicial, onboarding com coach e acesso ao app Forgee. Sem taxa de matrícula. Sem fidelidade obrigatória."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Plan 1 */}
          <PricingCard 
            badge="ACESSO ESSENCIAL"
            name="LIVRE"
            price="290"
            includes={[
              "Acesso livre à academia (horários restritos)",
              "Avaliação física inicial",
              "Onboarding de 1 sessão com coach",
              "Acesso ao app Forgee (check-in)",
              "Área de vestiários e estacionamento"
            ]}
            excludes={[
              "Protocolo individualizado não incluso",
              "Acompanhamento de coach não incluso"
            ]}
          />

          {/* Plan 2 - Highlight */}
          <div className="relative md:-mt-6">
            <div className="absolute -top-4 inset-x-0 flex justify-center z-10">
              <span className="bg-[#0F0D0B] text-white text-[10px] font-accent font-bold tracking-[2px] uppercase py-1.5 px-4 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                <iconify-icon icon="solar:star-fall-bold" class="text-[#E84E0F]" />
                Mais Escolhido
              </span>
            </div>
            <PricingCard 
              highlight
              badge="PERFORMANCE GUIADA"
              name="PLUS"
              price="490"
              includes={[
                "Acesso livre à academia (todos os dias)",
                "Avaliação física completa (trimestral)",
                "Protocolo de treinamento individualizado",
                "4 sessões/mês de acompanhamento com coach",
                "Acesso ao app Forgee (protocolo + progressão)",
                "Relatório de evolução mensal"
              ]}
              excludes={[
                "Personal training dedicado não incluso"
              ]}
            />
          </div>

          {/* Plan 3 */}
          <PricingCard 
            variant="dark"
            badge="EXPERIÊNCIA TOTAL"
            name="ELITE"
            price="890"
            includes={[
              "Acesso ilimitado à academia (24/7 biometria)",
              "Avaliação física completa (bimestral)",
              "Protocolo com revisão mensal",
              "8 sessões/mês com personal trainer",
              "Nutrição: alinhamento com protocolo",
              "Área VIP de vestiários com armário fixo",
              "Acesso prioritário a equipamentos"
            ]}
            excludes={[]}
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#4A4540] text-[14px] mb-8 bg-[#F8F7F6] inline-block px-6 py-2 rounded-full border border-[#E6E3E0]">
            Todos os planos incluem 7 dias de experiência gratuita. Sem necessidade de cartão de crédito para a visita.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary">Agendar Visita Gratuita</Button>
            <Button variant="secondary">Falar com um Especialista</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ name, price, badge, includes, excludes, highlight, variant = 'light' }) => {
  const isDark = variant === 'dark';
  
  const baseClasses = "rounded-[24px] p-8 md:p-10 transition-all duration-300 h-full flex flex-col";
  const lightClasses = "bg-white border border-[#E6E3E0] shadow-sm hover:shadow-md hover:border-[#E84E0F]/30";
  const highlightClasses = "bg-[#FFF0E8] border-[1.5px] border-[#E84E0F]/20 shadow-md";
  const darkClasses = "bg-[linear-gradient(135deg,#0F0D0B,#1E1B18)] text-white border border-white/10 shadow-[0_8px_32px_rgba(15,13,11,0.3)]";

  const wrapperClass = highlight ? highlightClasses : (isDark ? darkClasses : lightClasses);

  return (
    <div className={`${baseClasses} ${wrapperClass}`}>
      <div className="mb-8">
        <Tag variant={isDark ? 'dark' : (highlight ? 'orange' : 'neutral')} className={isDark ? 'border-white/20' : ''}>
          {badge}
        </Tag>
        <h3 className={`font-display font-black text-[40px] uppercase tracking-tight mt-4 ${isDark ? 'text-white' : 'text-[#0F0D0B]'}`}>
          {name}
        </h3>
        <div className="flex items-baseline gap-1 mt-2">
          <span className={`text-[20px] font-bold ${isDark ? 'text-white/80' : 'text-[#4A4540]'}`}>R$</span>
          <span className={`font-display font-black text-[56px] leading-[0.9] tracking-tight ${isDark ? 'text-white' : 'text-[#0F0D0B]'}`}>{price}</span>
          <span className={`text-[14px] ${isDark ? 'text-[#B0AAA4]' : 'text-[#8A837C]'}`}>/mês</span>
        </div>
        <p className={`text-[12px] mt-3 ${isDark ? 'text-[#8A837C]' : 'text-[#8A837C]'}`}>
          Sem fidelidade. Cancele quando quiser.
        </p>
      </div>

      <div className="flex-grow space-y-6">
        <ul className="space-y-4">
          {includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <iconify-icon icon="solar:check-circle-bold" width="20" class={`mt-0.5 shrink-0 ${isDark ? 'text-[#E84E0F]' : 'text-[#E84E0F]'}`} />
              <span className={`text-[14px] leading-[1.4] ${isDark ? 'text-[#E6E3E0]' : 'text-[#1E1B18]'}`}>{item}</span>
            </li>
          ))}
        </ul>

        {excludes.length > 0 && (
          <ul className="space-y-4 pt-4 border-t border-[#E6E3E0] (isDark && 'border-white/10')">
            {excludes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 opacity-60">
                <iconify-icon icon="solar:close-circle-line-duotone" width="20" class={`mt-0.5 shrink-0 ${isDark ? 'text-white/40' : 'text-[#8A837C]'}`} />
                <span className={`text-[14px] leading-[1.4] ${isDark ? 'text-[#B0AAA4]' : 'text-[#4A4540]'}`}>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-10">
        <Button 
          variant={highlight ? 'primary' : (isDark ? 'brand' : 'ghost')} 
          fullWidth
        >
          Matricular Agora
        </Button>
      </div>
    </div>
  );
};

export default Pricing;