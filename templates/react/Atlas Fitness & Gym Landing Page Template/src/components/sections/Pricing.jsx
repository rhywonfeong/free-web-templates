import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { clsx } from 'clsx';

const Pricing = () => {
  const plans = [
    {
      name: "Plano Livre",
      price: "249",
      subtitle: "sem fidelidade",
      features: [
        "Acesso livre à academia",
        "Horário das 6h às 23h",
        "Assessment inicial gratuito",
        "1 prescrição de treino",
        "Vestiário e armário",
        "App de acompanhamento"
      ],
      popular: false
    },
    {
      name: "Plano Plus",
      price: "399",
      subtitle: "3 meses de fidelidade",
      features: [
        "Tudo do Plano Livre",
        "Check-in mensal com coach",
        "Atualização de treino mensal",
        "Acesso à área funcional",
        "1 personal training/mês",
        "Câmara fria e recuperação",
        "Prioridade em horários"
      ],
      popular: true
    },
    {
      name: "Plano Elite",
      price: "649",
      subtitle: "6 meses de fidelidade",
      features: [
        "Tudo do Plano Plus",
        "Coach dedicado exclusivo",
        "Personal training ilimitado",
        "Periodização anual completa",
        "Avaliação mensal completa",
        "Nutricionista parceiro",
        "Acesso VIP a eventos",
        "Convidado gratuito/mês"
      ],
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-24 md:py-32 px-5 md:px-10 bg-neutral-900 border-y border-neutral-800 relative">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader 
          label="Matrículas Abertas"
          title="Escolha o seu nível."
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "relative bg-neutral-950 p-8 flex flex-col h-full border transition-all duration-300",
                plan.popular 
                  ? "border-acid md:-translate-y-4 shadow-[0_0_30px_rgba(200,244,0,0.1)]" 
                  : "border-neutral-800 hover:border-neutral-600"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-acid text-neutral-950 text-xs font-bold uppercase tracking-widest px-4 py-1">
                  Mais Popular
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-offwhite mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-neutral-500">R$</span>
                <span className="text-5xl font-display font-black text-offwhite">{plan.price}</span>
                <span className="text-sm text-neutral-500">/ mês</span>
              </div>
              <p className="text-xs text-neutral-500 uppercase tracking-widest mb-8 border-b border-neutral-800 pb-8">
                — {plan.subtitle}
              </p>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <iconify-icon icon="solar:check-circle-bold" className="text-acid mt-0.5" width="18"></iconify-icon>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full"
              >
                Matricular-se
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center flex flex-col items-center gap-6">
          <p className="text-neutral-400 font-medium">Não sabe qual plano é ideal para você?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary">Falar com Especialista</Button>
            <Button variant="outline">Agendar Visita Gratuita</Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;