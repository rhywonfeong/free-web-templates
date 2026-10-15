import React from 'react';
import SectionLabel from './ui/SectionLabel';
import Button from './ui/Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Livre',
      price: '199',
      subtitle: 'Acesso mensal · Sem fidelidade',
      included: [
        'Acesso à área de musculação',
        'Acesso à área de cardio',
        'Vestiários e infraestrutura',
        'App BLK de acompanhamento'
      ],
      notIncluded: [
        'Sessão de avaliação física',
        'Protocolo personalizado',
        'Coach dedicado',
        'Área de recuperação'
      ],
      highlight: false
    },
    {
      name: 'Plus',
      price: '399',
      subtitle: 'Contrato trimestral · Melhor custo-benefício',
      badge: 'Mais Popular',
      included: [
        'Acesso completo a todos os espaços',
        'Avaliação física a cada 4 semanas',
        'Protocolo de treinamento personalizado',
        '2 sessões com coach por semana',
        'Acesso à área de recuperação',
        'App BLK completo + métricas',
        'Orientação nutricional básica'
      ],
      notIncluded: [
        'Coach exclusivo dedicado'
      ],
      highlight: true
    },
    {
      name: 'Elite',
      price: '799',
      subtitle: 'Contrato semestral · Transformação completa',
      included: [
        'Acesso VIP 24h / 7 dias',
        'Coach exclusivo e dedicado',
        'Protocolo de treinamento semanal',
        'Sessões ilimitadas com coach',
        'Nutricionista parceiro incluso',
        'Avaliação física quinzenal',
        'Área de recuperação com prioridade',
        'Atendimento WhatsApp com coach'
      ],
      notIncluded: [],
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,56,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <SectionLabel className="justify-center">Matrículas</SectionLabel>
          <h2 className="font-display text-[40px] md:text-[64px] leading-[0.9] tracking-tight mb-6">
            ESCOLHA SEU <span className="text-[var(--color-primary)]">NÍVEL</span>
          </h2>
          <p className="text-[16px] text-[var(--color-silver)] max-w-2xl mx-auto">
            Nenhum plano é inferior. Cada um foi desenhado para um estágio de comprometimento diferente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlight 
                  ? 'bg-[var(--color-iron)] border-2 border-[var(--color-primary)] shadow-[0_0_40px_rgba(255,56,0,0.1)] relative' 
                  : 'bg-[var(--color-carbon)] border border-[var(--color-ash)]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="font-display text-3xl mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[var(--color-silver)] text-sm">R$</span>
                <span className="font-display text-5xl text-white">{plan.price}</span>
                <span className="text-[var(--color-smoke)] text-sm">/mês</span>
              </div>
              <p className="text-[13px] text-[var(--color-silver)] mb-8 pb-8 border-b border-[var(--color-ash)]/50">{plan.subtitle}</p>

              <div className="flex-grow">
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-white">
                      <iconify-icon icon="solar:check-circle-linear" className="text-[var(--color-primary)] mt-0.5 text-lg shrink-0"></iconify-icon>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((item, i) => (
                    <li key={`not-${i}`} className="flex items-start gap-3 text-[14px] text-[var(--color-smoke)] line-through">
                      <iconify-icon icon="solar:close-circle-linear" className="mt-0.5 text-lg shrink-0"></iconify-icon>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className={!plan.highlight ? 'border border-[var(--color-ash)] hover:border-white w-full' : 'w-full'}
              >
                Matricular Agora
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-[12px] text-[var(--color-smoke)] mt-12">
          Todos os planos incluem acesso ao app BLK. Preços válidos para novas matrículas. Consulte condições de cancelamento.
        </p>
      </div>
    </section>
  );
}