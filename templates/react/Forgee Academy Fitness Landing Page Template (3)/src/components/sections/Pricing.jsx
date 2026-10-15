import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Livre",
      price: "149",
      features: ["Acesso ilimitado 05H–23H", "Avaliação física de entrada", "Planilha de treino inicial", "App FORGEE"],
      popular: false
    },
    {
      name: "Elite",
      price: "389",
      features: ["Tudo do Plus +", "4 sessões Personal/mês", "Acesso ilimitado às classes", "Bioimpedância mensal", "WhatsApp coach dedicado"],
      popular: true,
      highlight: true
    },
    {
      name: "Plus",
      price: "229",
      features: ["Tudo do Livre +", "2 sessões de Personal/mês", "1 aula Conditioning/semana", "Revisão planilha 4 semanas", "Acesso ao Mobility"],
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#E8280D]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-4">
            Sem Matrícula.<br/>
            Sem Fidelidade.<br/>
            <span className="text-[#E8280D]">Sem Enrolação.</span>
          </h2>
          <p className="text-neutral-400 font-medium">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {/* Reordering visually for Desktop: Livre, Elite (Middle), Plus */}
          {[plans[0], plans[1], plans[2]].map((plan, idx) => (
            <div 
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-[#171C2E] border-2 border-[#E8280D] md:-translate-y-4 shadow-[0_10px_40px_rgba(232,40,13,0.15)] z-10' 
                  : 'bg-[#131313] border border-white/10 hover:border-white/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8280D] text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                  Mais Escolhido
                </div>
              )}
              
              <h3 className="font-display text-2xl uppercase tracking-widest text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-white/10">
                <span className="text-xl text-neutral-400 font-bold">R$</span>
                <span className="font-display font-black text-5xl text-white tracking-tighter">{plan.price}</span>
                <span className="text-sm text-neutral-500 uppercase tracking-widest">/mês</span>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <iconify-icon icon="solar:check-circle-bold" class={`text-lg shrink-0 mt-0.5 ${plan.highlight ? 'text-[#8ADB00]' : 'text-neutral-500'}`}></iconify-icon>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link 
                to="/agendar"
                className={`w-full py-4 rounded-full font-bold uppercase tracking-wider text-sm text-center transition-all ${
                  plan.highlight
                    ? 'bg-[#E8280D] text-white hover:bg-[#CC1F00] hover:shadow-[0_0_20px_rgba(232,40,13,0.4)]'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Quero Esse Plano
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-xs text-neutral-500 uppercase tracking-wider flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
          <span>Pagamento via PIX ou Cartão (3×)</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
          <span>Plano Anual: 15% OFF</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
          <span>Diária Avulsa: R$39</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;