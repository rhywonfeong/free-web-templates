import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

// Adapting the Pricing page to the FOURCE theme
const Pricing = () => {
  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <Link to="/" className="inline-flex text-[#666666] uppercase tracking-widest text-sm font-bold hover:text-[#E74C3C] items-center mb-8">
            <iconify-icon icon="solar:arrow-left-linear" className="mr-2"></iconify-icon>
            VOLTAR AO INÍCIO
          </Link>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-[-0.02em] leading-none mb-6">
            SEM <span className="text-[#E74C3C]">ENROLAÇÃO.</span>
          </h1>
          <p className="text-[#CCCCCC] text-xl font-medium uppercase tracking-widest">
            Acesso brutal. Escolha o plano que acompanha sua dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* LITE */}
            <div className="border border-[#2C2C2C] bg-[#0A0A0A] p-10">
              <h3 className="font-display text-3xl text-[#CCCCCC] uppercase mb-2">LITE</h3>
              <div className="font-display text-6xl text-white mb-8">R$ 149<span className="text-xl text-[#666666]">/MÊS</span></div>
              <ul className="space-y-4 mb-10">
                {['Acesso à Musculação', 'Horário Restrito (10h as 16h)', 'Suporte Básico', 'Vestiários'].map((item, i) => (
                  <li key={i} className="flex items-center text-[#CCCCCC] text-sm uppercase tracking-wider font-medium">
                    <span className="w-1.5 h-1.5 bg-[#2C2C2C] mr-4"></span> {item}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full text-sm">QUERO ESTE PLANO</Button>
            </div>

            {/* FOURCE (Middle/Highlighted) */}
            <div className="border-2 border-[#E74C3C] bg-[#1E1E1E] p-12 md:-translate-y-4 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E74C3C] text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
                MAIS ESCOLHIDO
              </div>
              <h3 className="font-display text-4xl text-[#E74C3C] uppercase mb-2">FOURCE</h3>
              <div className="font-display text-7xl text-white mb-8">R$ 229<span className="text-2xl text-[#666666]">/MÊS</span></div>
              <ul className="space-y-5 mb-10">
                {['Acesso Livre à Musculação', 'Todas as Aulas Coletivas', 'App FOURCE + Avaliação', 'Acesso Livre todos os dias'].map((item, i) => (
                  <li key={i} className="flex items-center text-white text-sm uppercase tracking-wider font-semibold">
                    <span className="w-2 h-2 bg-[#E74C3C] mr-4"></span> {item}
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full">ESCOLHA ESTE PLANO</Button>
            </div>

            {/* ELITE */}
            <div className="border border-[#2C2C2C] bg-[#0A0A0A] p-10">
              <h3 className="font-display text-3xl text-[#CCCCCC] uppercase mb-2">ELITE</h3>
              <div className="font-display text-6xl text-white mb-8">R$ 369<span className="text-xl text-[#666666]">/MÊS</span></div>
              <ul className="space-y-4 mb-10">
                {['Tudo do Plano FOURCE', '2 Sessões Personal/mês', 'Convite P/ 1 Amigo/mês', 'Toalha Inclusa'].map((item, i) => (
                  <li key={i} className="flex items-center text-[#CCCCCC] text-sm uppercase tracking-wider font-medium">
                    <span className="w-1.5 h-1.5 bg-[#2C2C2C] mr-4"></span> {item}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full text-sm">QUERO ESTE PLANO</Button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Pricing;