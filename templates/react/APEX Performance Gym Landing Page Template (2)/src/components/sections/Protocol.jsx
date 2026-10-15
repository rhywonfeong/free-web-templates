import Tag from '../ui/Tag';

export default function Protocol() {
  const phases = [
    {
      num: "01",
      title: "Avaliação & Diagnóstico",
      desc: "Entendemos quem você é antes de traçar para onde você vai. Avaliação física completa.",
      items: ["Bioimpedância e composição", "Teste cardiovascular", "Análise de postura", "Entrevista com coach"],
      highlight: false
    },
    {
      num: "02",
      title: "Periodização Adaptativa",
      desc: "Seu plano é construído com base nos seus dados. E ele muda conforme você evolui.",
      items: ["Ciclos de 4 semanas", "Ajuste de carga por feedback", "Protocolo nutricional", "Check-ins quinzenais"],
      highlight: true
    },
    {
      num: "03",
      title: "Monitoramento Contínuo",
      desc: "Acompanhamos cada indicador para garantir que sua evolução seja segura e real.",
      items: ["Dashboard de performance", "Reavaliações mensais", "Alertas de sobrecarga", "Relatório de evolução"],
      highlight: false
    }
  ];

  return (
    <section id="protocol" className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto relative">
      <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(255,69,0,0.08)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <Tag className="mb-6">Protocolo APEX</Tag>
        <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-6">
          Treine com <span className="text-[#FF4500]">método.</span><br/>
          Não com sorte.
        </h2>
        <p className="text-[#B0B0B0] text-lg">
          Nosso sistema de treinamento é baseado em periodização científica, dados de performance e acompanhamento humano constante.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 relative z-10">
        {phases.map((phase, idx) => (
          <div 
            key={idx} 
            className={`rounded-3xl p-8 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
              phase.highlight 
                ? 'bg-[#FF4500] text-white shadow-glow-fire' 
                : 'bg-[#111111] border border-[#2E2E2E] text-white'
            }`}
          >
            {/* Background Accent Number */}
            <span className={`absolute -right-4 -bottom-8 font-display font-black text-[150px] leading-none opacity-5 pointer-events-none ${phase.highlight ? 'text-black' : 'text-white'}`}>
              {phase.num}
            </span>

            <div className="relative z-10 flex flex-col h-full">
              <span className={`text-sm font-medium tracking-widest uppercase mb-6 ${phase.highlight ? 'text-[#FFD84D]' : 'text-[#FF4500]'}`}>
                Fase {phase.num}
              </span>
              
              <h3 className="font-display font-bold text-3xl uppercase tracking-wide mb-4">
                {phase.title}
              </h3>
              
              <p className={`mb-8 flex-grow ${phase.highlight ? 'text-white/90' : 'text-[#B0B0B0]'}`}>
                {phase.desc}
              </p>

              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <iconify-icon 
                      icon="solar:check-circle-bold" 
                      class={`mt-1 text-lg ${phase.highlight ? 'text-[#FFD84D]' : 'text-[#AAFF00]'}`}
                    ></iconify-icon>
                    <span className={`text-sm ${phase.highlight ? 'text-white' : 'text-[#F5F5F5]'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}