export default function ProtocolSection() {
  const steps = [
    {
      num: "01",
      title: "Avaliação completa",
      desc: "Bioimpedância, anamnese e entrevista com coach para mapear seu histórico, objetivos e limitações antes de qualquer treino."
    },
    {
      num: "02",
      title: "Prescrição individualizada",
      desc: "Montagem de periodização exclusiva com base nos seus dados. Nenhum aluno inicia com treino genérico."
    },
    {
      num: "03",
      title: "Acompanhamento e ajuste",
      desc: "Check-ins periódicos com seu coach para reavaliação de cargas, volume e progresso — o plano evolui junto com você."
    },
    {
      num: "04",
      title: "Análise de resultado",
      desc: "Reavaliações mensais com comparativo de métricas. Você vê exatamente o que mudou e o que vem a seguir."
    }
  ];

  return (
    <section id="protocolo" className="py-24 md:py-32 bg-[#111111] relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute -right-64 top-0 h-full w-[800px] opacity-5 pointer-events-none">
        <h2 className="font-display text-[300px] writing-vertical-rl text-white transform rotate-180 leading-none">MÉTODO</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-[#FF5500] font-semibold tracking-widest uppercase text-sm mb-4 block">Como funciona</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">Método antes de motivação.</h2>
          <p className="text-[#AAAAAA] text-lg leading-relaxed">
            O Protocolo Aura é o sistema de treinamento proprietário que orienta cada aluno do ponto zero até a alta performance — com progressão estruturada e acompanhamento contínuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Line (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[1px] bg-gradient-to-r from-[#FF5500]/50 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl h-full hover:-translate-y-2 transition-all duration-300 hover:border-[#FF5500]/30 hover:shadow-[0_8px_30px_rgba(255,85,0,0.1)]">
                <span className="font-display text-5xl text-[#333333] group-hover:text-[#FF5500] transition-colors block mb-6">{step.num}</span>
                <h3 className="text-white font-semibold text-xl mb-4">{step.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contato" className="inline-flex items-center gap-2 text-[#AAAAAA] hover:text-white font-semibold transition-colors">
            Falar com especialista para entender o método
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
}