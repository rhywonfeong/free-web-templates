import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function Pricing() {
  const plans = [
    {
      name: 'LIVRE',
      price: '149',
      features: [
        'Acesso ilimitado · 05H–23H',
        'Avaliação física de entrada',
        'Planilha de treino inicial',
        'App FORGEE'
      ],
      popular: false
    },
    {
      name: 'PLUS',
      price: '229',
      features: [
        'Acesso ilimitado · 05H–23H',
        'Avaliação física de entrada',
        'App FORGEE',
        '2 sessões de Personal/mês',
        '1 aula Conditioning/semana',
        'Revisão planilha 4 semanas',
        'Acesso ao Mobility'
      ],
      popular: true
    },
    {
      name: 'ELITE',
      price: '389',
      features: [
        'Tudo do plano Plus',
        '4 sessões Personal/mês',
        'Acesso ilimitado classes',
        'Bioimpedância mensal',
        'WhatsApp coach dedicado'
      ],
      popular: false
    }
  ]

  return (
    <section id="planos" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">INVESTIMENTO</SectionLabel>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-[1] tracking-tighter text-[#F5F5F5] mb-6">
            SEM MATRÍCULA.<br/>
            SEM FIDELIDADE.<br/>
            <span className="text-[#E82020]">SEM ENROLAÇÃO.</span>
          </h2>
          <p className="text-[#E5E5E5] text-lg max-w-2xl mx-auto">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-[#181818] rounded-2xl p-8 flex flex-col border ${plan.popular ? 'border-[#E8651A] shadow-[0_0_32px_rgba(232,101,26,0.15)] md:-mt-8 md:mb-8' : 'border-[#2D2D2D]'}`}>
              
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8651A] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  MAIS ESCOLHIDO
                </div>
              )}

              <div className="mb-8 border-b border-[#2D2D2D] pb-8">
                <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-[#7A7A7A] mb-2">{plan.name}</h3>
                <div className="flex items-baseline text-[#F5F5F5]">
                  <span className="text-2xl font-bold mr-1">R$</span>
                  <span className="font-display text-6xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-[#7A7A7A] ml-1">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[#E5E5E5]">
                    <iconify-icon icon="solar:check-circle-bold" class="text-[#3DAA6E] text-lg mt-0.5 shrink-0"></iconify-icon>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
                QUERO ESSE PLANO
              </Button>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-[#7A7A7A] text-xs uppercase tracking-wider space-y-2">
          <p>PAGAMENTO VIA PIX OU CARTÃO (3× SEM JUROS) · CANCELAMENTO COM 30 DIAS DE AVISO · PLANO ANUAL COM 15% DE DESCONTO</p>
          <p className="text-[#E5E5E5]">DIÁRIA: R$ 39 · ACESSO POR 1 DIA · <a href="#" className="text-[#E8651A] hover:underline">AGENDAR</a></p>
        </div>

      </div>
    </section>
  )
}