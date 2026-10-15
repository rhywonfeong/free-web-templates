import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import clsx from 'clsx'

const PricingSection = () => {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      features: [
        "Acesso ilimitado 05H–23H",
        "Avaliação física de entrada",
        "Planilha de treino inicial",
        "App FOURCE"
      ],
      highlight: false
    },
    {
      name: "PLUS",
      price: "229",
      features: [
        "Tudo do Livre +",
        "2 sessões de Personal/mês",
        "1 aula Conditioning/semana",
        "Revisão planilha a cada 4 semanas",
        "Acesso ao Mobility"
      ],
      highlight: true,
      tag: "MAIS ESCOLHIDO"
    },
    {
      name: "ELITE",
      price: "389",
      features: [
        "Tudo do Plus +",
        "4 sessões Personal/mês",
        "Acesso ilimitado às classes",
        "Bioimpedância mensal",
        "WhatsApp com coach dedicado"
      ],
      highlight: false
    }
  ]

  return (
    <section className="py-32 bg-[#0A2E00] relative border-t border-white/5">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          theme="dark"
          alignment="center"
          label="Investimento"
          title={<>SEM MATRÍCULA.<br/>SEM FIDELIDADE.<br/>SEM ENROLAÇÃO.</>}
          description="Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={clsx(
                "rounded-[32px] p-8 lg:p-10 relative transition-transform duration-300",
                plan.highlight 
                  ? "bg-[#1A5C00] border-2 border-[#CCFF00] shadow-[0_0_40px_rgba(204,255,0,0.1)] scale-100 md:scale-105 z-10" 
                  : "bg-[#1A5C00]/30 border border-white/10 hover:border-white/30"
              )}
            >
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge>{plan.tag}</Badge>
                </div>
              )}

              <h3 className="text-2xl font-display uppercase tracking-wider text-white mb-2 text-center">
                {plan.name}
              </h3>
              
              <div className="flex items-baseline justify-center gap-1 mb-8">
                <span className="text-[#CCFF00] font-bold">R$</span>
                <span className="text-6xl font-display text-white">{plan.price}</span>
                <span className="text-[#9E9E9E] font-medium">/mês</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#E8E8E8]">
                    <iconify-icon icon="solar:check-circle-bold" className="text-[#CCFF00] text-xl shrink-0 mt-0.5"></iconify-icon>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? 'primary' : 'outline'} 
                className="w-full"
              >
                QUERO ESSE PLANO
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-[#9E9E9E] text-sm flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <p>Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto</p>
          <div className="h-4 w-px bg-white/20 hidden md:block"></div>
          <div className="flex items-center gap-4 bg-[#1A5C00]/30 px-6 py-3 rounded-full border border-white/10 text-white">
            <span className="font-bold tracking-wider">DIÁRIA: R$ 39</span>
            <span className="text-[#9E9E9E]">Acesso por 1 dia</span>
            <a href="#" className="text-[#CCFF00] font-bold uppercase tracking-widest hover:underline text-xs ml-2">AGENDAR</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection