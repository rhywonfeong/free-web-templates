import Button from '../ui/Button';
import Tag from '../ui/Tag';

export default function Pricing() {
  const plans = [
    {
      name: "Livre",
      price: "189",
      desc: "sem fidelidade",
      includes: [
        "Acesso ilimitado à área de treino",
        "Uso de todos os equipamentos",
        "Vestiários premium",
        "App de acompanhamento"
      ],
      excludes: ["Avaliação inicial", "Coach dedicado"],
      cta: "Começar agora",
      highlight: false
    },
    {
      name: "Plus",
      price: "329",
      desc: "sem fidelidade",
      badge: "Mais Escolhido",
      includes: [
        "Tudo do plano Livre",
        "Avaliação física completa",
        "Protocolo personalizado",
        "1 sessão/mês com coach",
        "Acesso ao spa e sauna",
        "Dashboard de performance"
      ],
      excludes: [],
      cta: "Matricular agora",
      highlight: true
    },
    {
      name: "Elite",
      price: "589",
      desc: "sem fidelidade",
      includes: [
        "Tudo do plano Plus",
        "Coach dedicado exclusivo",
        "Check-ins semanais",
        "Acesso prioritário premium",
        "Protocolo nutricional",
        "Acesso ao lounge Elite"
      ],
      excludes: [],
      cta: "Quero o Elite",
      highlight: false
    }
  ];

  return (
    <section id="plans" className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Tag className="mb-6">Matrículas</Tag>
        <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-6">
          Escolha seu <span className="text-[#FF4500]">plano</span>
        </h2>
        <p className="text-[#B0B0B0] text-lg">
          Sem contratos longos. Sem surpresas. Você escolhe o que faz sentido para o seu objetivo — e pode mudar quando quiser.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`rounded-3xl p-8 flex flex-col relative ${
              plan.highlight 
                ? 'bg-[#1A1A1A] border-2 border-[#AAFF00] lg:scale-105 shadow-glow-volt z-10' 
                : 'bg-[#111111] border border-[#2E2E2E]'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#AAFF00] text-[#080808] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {plan.badge}
              </div>
            )}

            <h3 className="font-display font-bold text-3xl uppercase tracking-wide text-white mb-2">{plan.name}</h3>
            
            <div className="mb-2 flex items-baseline gap-1">
              <span className="text-xl text-[#B0B0B0] font-medium">R$</span>
              <span className="font-display font-black text-6xl text-white tracking-tighter">{plan.price}</span>
              <span className="text-[#B0B0B0]">/mês</span>
            </div>
            
            <p className="text-[#666666] text-sm uppercase tracking-widest mb-8">{plan.desc}</p>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.includes.map((item, i) => (
                <li key={`inc-${i}`} className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" class="mt-0.5 text-xl text-[#AAFF00] shrink-0"></iconify-icon>
                  <span className="text-sm text-[#F5F5F5]">{item}</span>
                </li>
              ))}
              {plan.excludes.map((item, i) => (
                <li key={`exc-${i}`} className="flex items-start gap-3 opacity-40">
                  <iconify-icon icon="solar:close-circle-linear" class="mt-0.5 text-xl text-[#666666] shrink-0"></iconify-icon>
                  <span className="text-sm text-[#B0B0B0] line-through">{item}</span>
                </li>
              ))}
            </ul>

            <Button 
              href="https://wa.me/5541999999999" 
              variant={plan.highlight ? 'volt' : 'outline'}
              className="w-full"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-[#666666] mb-4">Dúvidas sobre qual plano é ideal para você?</p>
        <a href="https://wa.me/5541999999999" className="text-[#FF4500] uppercase font-medium text-sm tracking-widest hover:text-white transition-colors border-b border-[#FF4500] pb-1">
          Falar com um especialista
        </a>
      </div>
    </section>
  );
}