import React from 'react';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'LIVRE',
    price: '149',
    popular: false,
    features: [
      'Acesso ilimitado (05H-23H)',
      'Avaliação de entrada',
      'Planilha inicial customizada',
      'Suporte de salão'
    ]
  },
  {
    name: 'PLUS',
    price: '229',
    popular: true,
    features: [
      'Tudo do plano Livre',
      '2 sessões de Personal / mês',
      '1 aula Conditioning / semana',
      'Acompanhamento via App'
    ]
  },
  {
    name: 'ELITE',
    price: '389',
    popular: false,
    features: [
      'Tudo do plano Plus',
      '4 sessões de Personal / mês',
      'Acesso ilimitado às classes',
      'Bioimpedância mensal'
    ]
  }
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="planos" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 uppercase">
            Sem matrícula. Sem fidelidade.<br/>
            <span className="text-[#00F9E4]">Sem enrolação.</span>
          </h2>
          <p className="text-[#9A9A9A] text-lg">Mude de plano quando quiser. Cancele com 30 dias de aviso.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                plan.popular 
                ? 'bg-[#121212] border-2 border-[#00F9E4] shadow-[0_0_40px_rgba(0,249,228,0.1)] z-10 scale-100 md:scale-105' 
                : 'bg-[#0A0A0A] border border-[#1C1C1C] hover:border-[#3A3A3A]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00F9E4] text-[#0A0A0A] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Recomendado
                </div>
              )}
              
              <h3 className="text-white text-xl font-semibold tracking-wide mb-2">{plan.name}</h3>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-2xl font-medium text-[#6B6B6B]">R$</span>
                <span className={`text-5xl font-bold tracking-tighter ${plan.popular ? 'text-white' : 'text-white'}`}>
                  {plan.price}
                </span>
                <span className="text-[#6B6B6B]">/mês</span>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-bold" class={`text-xl shrink-0 ${plan.popular ? 'text-[#00F9E4]' : 'text-[#3A3A3A]'}`}></iconify-icon>
                    <span className="text-[#CFCFCF] text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'secondary'} 
                className="w-full"
                onClick={() => navigate('/agendar')}
              >
                COMEÇAR AGORA
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-[#6B6B6B]">
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:card-linear" class="text-xl text-[#9A9A9A]"></iconify-icon>
            <span>PIX ou Cartão (3x sem juros).</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-[#2A2A2A] hidden md:block"></div>
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:tag-price-linear" class="text-xl text-[#00F9E4]"></iconify-icon>
            <span className="text-white font-medium">Plano anual: 15% OFF.</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-[#2A2A2A] hidden md:block"></div>
          <span>Diária: R$39</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;