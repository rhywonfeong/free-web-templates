import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCards = () => {
  const features = [
    {
      icon: "solar:magic-stick-3-bold-duotone",
      title: "Inteligência Artificial",
      desc: "IA que trabalha por você: Otimiza títulos, descrições e anúncios. Ajusta preços automaticamente, responde clientes 24h e identifica oportunidades e riscos.",
      link: "Conhecer Copilot"
    },
    {
      icon: "solar:laptop-minimalistic-bold-duotone",
      title: "Plataforma Completa",
      desc: "Gestão de anúncios em diversos marketplaces, controle de estoque e pedidos centralizados, além de um dashboard de performance em tempo real.",
      link: "Ver plataforma"
    },
    {
      icon: "solar:users-group-two-rounded-bold-duotone",
      title: "Time Humano",
      desc: "Time especialista dedicado à criação e otimização de anúncios, planejamento estratégico, gestão de campanhas e suporte direto via WhatsApp.",
      link: "Falar com time"
    }
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">O problema não é você.<br/>É que você opera sozinho.</h2>
          <p className="text-lg text-slate-500 font-light">
            Com a Decola Seller, você ganha uma operação profissional integrando Tecnologia, IA e Time Humano em um único produto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <iconify-icon icon={item.icon} width="28" height="28"></iconify-icon>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 font-light mb-6 leading-relaxed">
                {item.desc}
              </p>
              <Link to="#" className="inline-flex items-center text-orange-600 font-semibold group/link">
                {item.link}
                <iconify-icon icon="solar:alt-arrow-right-linear" width="18" height="18" className="ml-1 transition-transform group-hover/link:translate-x-1"></iconify-icon>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;