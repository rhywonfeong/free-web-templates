import { Eyebrow, Headline } from '../ui/Typography';
import { Button } from '../ui/Button';

export default function Pricing() {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      badge: null,
      features: [
        "Acesso ilimitado 05H–23H",
        "Avaliação física de entrada",
        "Planilha de treino inicial",
        "App FORGEE"
      ],
      notIncluded: [
        "Sessões de Personal",
        "Aulas de Conditioning",
        "Acesso ao Mobility",
        "WhatsApp dedicado"
      ]
    },
    {
      name: "PLUS",
      price: "229",
      badge: "MAIS ESCOLHIDO",
      features: [
        "Acesso ilimitado 05H–23H",
        "Avaliação física de entrada",
        "Planilha de treino inicial",
        "App FORGEE",
        "2 sessões de Personal/mês",
        "1 aula Conditioning/semana",
        "Revisão de planilha 4 sem.",
        "Acesso ao Mobility"
      ],
      notIncluded: [
        "Bioimpedância mensal",
        "WhatsApp dedicado"
      ]
    },
    {
      name: "ELITE",
      price: "389",
      badge: null,
      features: [
        "Acesso ilimitado 05H–23H",
        "Avaliação física de entrada",
        "Planilha de treino inicial",
        "App FORGEE",
        "4 sessões de Personal/mês",
        "Acesso ilimitado a classes",
        "Revisão de planilha 4 sem.",
        "Acesso ao Mobility",
        "Bioimpedância mensal",
        "WhatsApp com coach dedicado"
      ],
      notIncluded: []
    }
  ];

  return (
    <section className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <Eyebrow className="mx-auto text-center">Investimento</Eyebrow>
        <div className="flex flex-col items-center">
          <Headline text="SEM MATRÍCULA." size="md" />
          <Headline text="SEM FIDELIDADE." size="md" />
          <Headline text="SEM ENROLAÇÃO." highlight="ENROLAÇÃO." size="md" />
        </div>
        <p className="text-[#B0B0B0] mt-6 text-base">
          Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`flex flex-col bg-[#1E1E1E] rounded-md p-8 relative ${
              plan.badge ? 'border-t-2 border-[#E8400A]' : 'border border-[#2A2A2A]'
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E8400A] text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-sm">
                {plan.badge}
              </span>
            )}
            
            <h3 className="font-display font-bold text-2xl text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-white font-display font-extrabold text-5xl">R${plan.price}</span>
              <span className="text-[#6B6B6B] ml-1">/mês</span>
            </div>
            
            <ul className="flex-1 space-y-4 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start text-sm text-[#D9D9D9]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E8400A] text-lg mr-3 mt-0.5 shrink-0"></iconify-icon>
                  {f}
                </li>
              ))}
              {plan.notIncluded.map((f, j) => (
                <li key={`not-${j}`} className="flex items-start text-sm text-[#6B6B6B]">
                  <iconify-icon icon="solar:close-circle-linear" class="text-[#3A3A3A] text-lg mr-3 mt-0.5 shrink-0"></iconify-icon>
                  <span className="line-through opacity-70">{f}</span>
                </li>
              ))}
            </ul>
            
            <Button variant={plan.badge ? 'primary' : 'secondary'} className="w-full">
              Quero esse plano
            </Button>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#181818] border border-[#2A2A2A] rounded-md p-6">
        <p className="text-xs text-[#6B6B6B] text-center md:text-left">
          Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
        </p>
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-sm font-bold text-white uppercase tracking-wide">Diária: R$ 39</span>
          <Button variant="ghost" size="sm" className="border border-[#3A3A3A]">Agendar</Button>
        </div>
      </div>
    </section>
  );
}