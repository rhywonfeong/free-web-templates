import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';

export default function Pricing() {
  const plans = [
    {
      name: "Mensal",
      price: "150",
      desc: "Sem fidelidade",
      features: ["Acesso às turmas da unidade", "Avaliação técnica", "Sem fidelidade", "Dobok não incluso"],
      popular: false,
      btn: "outline"
    },
    {
      name: "Semestral",
      price: "130",
      desc: "Cobrado R$ 780 ao semestre",
      features: ["Acesso às turmas da unidade", "Avaliação técnica", "1 dobok incluso", "Prioridade em eventos", "Compromisso de 6 meses"],
      popular: true,
      tag: "⭐ Mais Escolhido",
      btn: "primary"
    },
    {
      name: "Anual",
      price: "110",
      desc: "Cobrado R$ 1.320 ao ano",
      features: ["Acesso em TODAS unidades", "Avaliação técnica", "1 dobok + kit de proteção", "Sem taxa de campeonato"],
      popular: false,
      btn: "outline"
    },
    {
      name: "Família",
      price: "200",
      desc: "A partir de. Para 2+ membros",
      features: ["Desconto progressivo", "Todas vantagens Semestral", "Contrato único", "Atendimento dedicado"],
      popular: false,
      btn: "outline"
    }
  ];

  return (
    <section id="planos" className="py-24 bg-[#0B0D14]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <SectionLabel>Planos e Matrículas</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-4 mb-4">Invista na sua evolução.</h2>
          <p className="text-[#94A3B8]">Sem taxas ocultas. Sem letras miúdas. Só você, o tatame e a sua evolução.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, idx) => (
            <div key={idx} className={`relative p-8 flex flex-col bg-[#12151F] border ${p.popular ? 'border-[#E8193C] shadow-[0_0_30px_rgba(232,25,60,0.15)] transform md:-translate-y-4' : 'border-[#2B3045]'}`}>
              {p.tag && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8193C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 whitespace-nowrap">{p.tag}</div>}
              
              <h3 className="text-xl font-black uppercase tracking-tight mb-2">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[#94A3B8] font-bold text-sm">R$</span>
                <span className="text-4xl font-black">{p.price}</span>
                <span className="text-[#94A3B8] text-sm">/mês</span>
              </div>
              <p className="text-xs text-[#6B7280] mb-8 h-8">{p.desc}</p>

              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#D1D5DB]">
                    <iconify-icon icon="solar:check-circle-bold" className="text-[#E8193C] mt-0.5 shrink-0"></iconify-icon>
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={p.btn} className="w-full">
                {p.name === 'Família' ? 'Solicitar proposta' : 'Matricular agora'}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-[#6B7280] text-xs mt-12">
          * Valores sujeitos a alteração sem aviso prévio. Taxa de matrícula: R$ 90,00. Consulte condições especiais para bolsistas.
        </p>

      </div>
    </section>
  );
}