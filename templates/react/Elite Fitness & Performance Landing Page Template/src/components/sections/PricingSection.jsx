import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const PricingSection = () => {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      features: [
        "Acesso ilimitado 05H–23H",
        "Avaliação física de entrada",
        "Planilha de treino inicial",
        "App FORGEE"
      ],
      popular: false
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
      ],
      popular: true
    },
    {
      name: "PLUS",
      price: "229",
      features: [
        "Tudo do Livre +",
        "2 sessões de Personal/mês",
        "1 aula Conditioning/semana",
        "Revisão planilha 4 semanas",
        "Acesso ao Mobility"
      ],
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-24 lg:py-32 bg-[#0D0D0D] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        <div className="text-center flex flex-col items-center mb-20">
          <SectionHeading 
            label="Investimento"
            title="SEM MATRÍCULA. SEM FIDELIDADE. SEM ENROLAÇÃO."
            subtitle="Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Reordering visually on desktop to put Elite in middle, but data order keeps logical progression if preferred. I'll map directly for code simplicity but Elite should ideally be middle. Let's arrange data to have Elite in middle. */}
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col bg-[#1A1A1A] p-8 lg:p-12 relative transition-transform duration-300
                ${plan.popular 
                  ? 'border-2 border-[#E8201A] shadow-[0_0_40px_rgba(232,32,26,0.15)] md:-translate-y-4 z-10' 
                  : 'border border-white/10 mt-8 md:mt-0'
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8201A] text-white px-6 py-1.5 text-[10px] font-bold uppercase tracking-wide-label rounded-full whitespace-nowrap">
                  Mais Escolhido
                </div>
              )}
              
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-xl font-bold text-[#757575]">R$</span>
                <span className="text-5xl font-black tracking-tightest text-white">{plan.price}</span>
                <span className="text-sm font-medium text-[#757575]">/mês</span>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#BDBDBD]">
                    <iconify-icon icon="solar:check-square-bold" className="text-[#E8201A] mt-0.5 text-lg shrink-0"></iconify-icon>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
                Quero este plano
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs text-[#757575] uppercase tracking-wide-label">
            <iconify-icon icon="solar:info-circle-line-duotone" className="text-xl"></iconify-icon>
            <p>Pagamento via PIX ou cartão (3× s/ juros) · Aviso de 30 dias para cancelamento · Plano anual 15% OFF</p>
          </div>
          <div className="flex items-center gap-4 bg-[#1A1A1A] border border-white/10 px-6 py-3 rounded">
            <span className="text-xs font-bold text-white uppercase tracking-wide-label">Diária Avulsa</span>
            <span className="text-xs text-[#757575] uppercase">R$ 39 / dia</span>
            <a href="#" className="text-xs font-bold text-[#E8201A] uppercase hover:text-white transition-colors ml-4">Agendar</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;