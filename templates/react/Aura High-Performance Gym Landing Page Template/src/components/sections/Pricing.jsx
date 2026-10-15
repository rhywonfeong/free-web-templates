import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const Pricing = () => {
  const plans = [
    {
      name: "Livre",
      target: "Para quem já sabe o que faz.",
      price: "290",
      features: [
        "Acesso estrutura (06h–20h)",
        "Avaliação física semestral",
        "Sem coach fixo incluído",
        "Acesso ao app de treinos",
        "Sem fidelidade"
      ],
      warning: "Disponível apenas para alunos com experiência prévia comprovada.",
      highlight: false
    },
    {
      name: "Plus",
      target: "Para quem quer resultado.",
      price: "490",
      features: [
        "Acesso estrutura (05h30–22h)",
        "Protocolo de treino inicial",
        "4 sessões mensais com coach",
        "Avaliação física trimestral",
        "Histórico de evolução no app",
        "15% off em suplementação"
      ],
      highlight: true
    },
    {
      name: "Elite",
      target: "Para quem não aceita menos.",
      price: "890",
      features: [
        "Acesso 24/7 à estrutura",
        "Protocolo revisado mensalmente",
        "Sessões ilimitadas com coach",
        "Avaliação física mensal",
        "Consultoria nutricional",
        "Acesso à sala de recuperação",
        "Reserva prioritária"
      ],
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-[#111111]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeader 
          tag="Investimento" 
          title="Escolha o nível. O compromisso é seu." 
          subtitle="Três planos desenhados para perfis diferentes — mas com a mesma qualidade de estrutura e ambiente."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-[#1A1A1A] p-8 border transition-all duration-300 ${
                plan.highlight 
                  ? 'border-[#AAFF00] shadow-[0_0_30px_rgba(170,255,0,0.1)] md:scale-105 z-10' 
                  : 'border-[#252525] hover:border-[#3D5C1A]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#AAFF00] text-[#0D0F0A] px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  Mais Escolhido
                </div>
              )}
              
              <h3 className="font-display font-black text-3xl uppercase text-white mb-2">{plan.name}</h3>
              <p className="text-[#666666] text-sm mb-6 h-10">{plan.target}</p>
              
              <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-[#252525]">
                <span className="text-[#CCCCCC] text-xl">R$</span>
                <span className="font-display font-black text-5xl text-white">{plan.price}</span>
                <span className="text-[#666666]">/mês</span>
              </div>

              <ul className="space-y-4 mb-10 min-h-[250px]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-bold" class={`mt-0.5 text-lg ${plan.highlight ? 'text-[#AAFF00]' : 'text-[#666666]'}`}></iconify-icon>
                    <span className="text-[#CCCCCC] text-sm">{feature}</span>
                  </li>
                ))}
                {plan.warning && (
                  <li className="flex items-start gap-3 mt-4 pt-4 border-t border-[#252525]">
                    <iconify-icon icon="solar:danger-triangle-bold" class="mt-0.5 text-lg text-[#FF6B00]"></iconify-icon>
                    <span className="text-[#666666] text-xs leading-tight">{plan.warning}</span>
                  </li>
                )}
              </ul>

              <Button 
                variant={plan.highlight ? "primary" : "secondary"} 
                className="w-full"
                href="#agendar"
              >
                {plan.name === 'Elite' ? 'Quero ser Elite' : 'Matricular Agora'}
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-[#666666] text-sm mt-12 max-w-2xl mx-auto">
          Matrícula única: R$ 150 (isenta no mês de inauguração). Pagamento via cartão em até 12x, PIX ou boleto. Cancele quando quiser — sem multa, sem burocracia.
        </p>
      </div>
    </section>
  );
};

export default Pricing;