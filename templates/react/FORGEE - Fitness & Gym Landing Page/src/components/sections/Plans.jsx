import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Plans() {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      features: [
        "Acesso ilimitado 05H–23H",
        "Avaliação física de entrada",
        "Planilha de treino inicial",
        "App FORGEE"
      ]
    },
    {
      name: "PLUS",
      price: "229",
      highlight: true,
      badge: "MAIS ESCOLHIDO",
      features: [
        "Tudo do Livre +",
        "2 sessões de Personal/mês",
        "1 aula Conditioning/semana",
        "Revisão planilha 4 semanas",
        "Acesso ao Mobility"
      ]
    },
    {
      name: "ELITE",
      price: "389",
      features: [
        "Tudo do Plus +",
        "4 sessões Personal/mês",
        "Acesso ilimitado classes",
        "Bioimpedância mensal",
        "WhatsApp coach dedicado"
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <SectionHeading 
            title={["SEM MATRÍCULA.", "SEM FIDELIDADE.", "SEM ENROLAÇÃO."]}
            subtitle="Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa."
            className="flex flex-col items-center text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 md:p-10 border ${
                plan.highlight 
                  ? 'border-red-600 bg-black -translate-y-2 md:-translate-y-4 shadow-2xl shadow-red-900/20' 
                  : 'border-zinc-800 bg-black/50'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-lg font-bold text-zinc-400 uppercase tracking-widest mb-4">{plan.name}</h3>
              <div className="mb-8 flex items-end gap-1">
                <span className="text-2xl font-medium text-white mb-2">R$</span>
                <span className="text-6xl font-black text-white tracking-tighter leading-none">{plan.price}</span>
                <span className="text-sm text-zinc-500 mb-2">/mês</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <iconify-icon icon="solar:check-circle-linear" className={`mt-0.5 ${plan.highlight ? 'text-red-500' : 'text-zinc-600'}`}></iconify-icon>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full"
              >
                QUERO ESSE PLANO
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-6 max-w-2xl mx-auto leading-relaxed">
            Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
          </p>
          
          <div className="inline-flex items-center gap-6 bg-zinc-900 border border-zinc-800 p-4 md:px-8 md:py-4 flex-col md:flex-row">
            <div>
              <span className="text-white font-bold mr-2">DIÁRIA: R$39</span>
              <span className="text-zinc-400 text-sm">· Acesso por 1 dia</span>
            </div>
            <Button variant="secondary" className="px-6 py-2 text-[10px]">AGENDAR</Button>
          </div>
        </div>
      </div>
    </section>
  );
}