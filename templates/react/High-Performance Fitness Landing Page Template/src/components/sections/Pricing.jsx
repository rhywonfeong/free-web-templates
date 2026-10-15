import React from 'react';
import Eyebrow from '../ui/Eyebrow';
import Headline from '../ui/Headline';
import Button from '../ui/Button';

const Pricing = () => {
  const plans = [
    {
      name: "Plano Livre",
      price: "189",
      desc: "Acesso completo ao espaço. Ideal para quem já tem autonomia no treino.",
      features: [
        "Acesso ilimitado em todos os horários",
        "Uso de todas as zonas e equipamentos",
        "App Forge de registro de treinos",
        "Avaliação inicial gratuita",
        "Vestiário e estacionamento"
      ],
      isPopular: false
    },
    {
      name: "Plano Plus",
      price: "329",
      desc: "Protocolo personalizado com acompanhamento mensal. O equilíbrio perfeito.",
      features: [
        "Tudo do plano Livre",
        "Protocolo de treino personalizado",
        "2 sessões mensais com coach",
        "Check-in mensal de progresso",
        "Relatório de composição corporal",
        "Acesso a aulas coletivas premium"
      ],
      isPopular: true
    },
    {
      name: "Plano Elite",
      price: "589",
      desc: "Acompanhamento completo e dedicado. Para quem leva o resultado a sério.",
      features: [
        "Tudo do plano Plus",
        "8 sessões mensais com coach dedicado",
        "Nutrição e suplementação orientada",
        "Check-in semanal de progresso",
        "Análise de movimento e biomecânica",
        "Acesso VIP a eventos e workshops",
        "Suporte direto via app 7 dias por semana"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="planos" className="py-24 md:py-32 bg-[#111111] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Eyebrow className="justify-center">Matrículas</Eyebrow>
          <Headline className="mb-4">Escolha seu plano.</Headline>
          <p className="text-[#888888]">
            Sem taxa de matrícula no primeiro mês. Cancele quando quiser nos planos mensais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-[#181818] border-[#FF3A00] shadow-[0_0_40px_rgba(255,58,0,0.1)] -translate-y-2' 
                  : 'bg-[#111111] border-[#2A2A2A] hover:border-[#3D3D3D]'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF3A00] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full flex items-center gap-1">
                  <iconify-icon icon="solar:star-bold"></iconify-icon> Mais escolhido
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-display text-2xl uppercase tracking-widest text-[#F5F5F5] mb-2">{plan.name}</h3>
                <p className="text-[#888888] text-sm min-h-[40px]">{plan.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-2xl text-[#888888] font-medium">R$</span>
                <span className="font-display font-black text-6xl text-[#F5F5F5] tracking-tighter">{plan.price}</span>
                <span className="text-[#888888]">/mês</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-[#CCCCCC]">
                    <iconify-icon icon="solar:check-circle-linear" class="text-[#FF3A00] text-xl shrink-0"></iconify-icon>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isPopular ? 'primary' : 'outline'} 
                className="w-full justify-center"
              >
                Matricular agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;