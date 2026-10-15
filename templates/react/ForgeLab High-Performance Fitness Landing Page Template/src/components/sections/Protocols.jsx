import SectionHeading from '../ui/SectionHeading';

const Protocols = () => {
  const protocols = [
    {
      id: "P1",
      title: "Strength Protocol",
      target: "Construção de força base",
      desc: "Baseado em periodização linear e ondulatória, desenhado para maximizar ganho de força funcional em ciclos de 12 semanas.",
      tags: ["Iniciantes/Intermediários", "3-4x Semana", "12 Semanas"]
    },
    {
      id: "P2",
      title: "Lean System",
      target: "Perda de gordura e preservação",
      desc: "Combina treinamento de resistência com estratégias metabólicas de alta eficiência para criar déficit calórico sem sacrificar musculatura.",
      tags: ["Redução de % de gordura", "4-5x Semana", "8-16 Semanas"]
    },
    {
      id: "P3",
      title: "Performance Elite",
      target: "Atletas e alta demanda",
      desc: "Treinamento periodizado com lógica de atleta. Integra análise de HRV, gestão de carga e recuperação ativa.",
      tags: ["Avançados/Atletas", "5-6x Semana", "16 Semanas"]
    },
    {
      id: "P4",
      title: "Mobility & Longevity",
      target: "Performance duradoura",
      desc: "Treinamento orientado à saúde articular, amplitude de movimento e longevidade. Ideal para complementar protocolos ou 45+.",
      tags: ["Saúde Articular/45+", "2-3x Semana", "Contínuo"]
    }
  ];

  return (
    <section id="protocolos" className="py-24 lg:py-32 bg-[#0D0D0D]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading 
          supertitle="Sistemas de Treinamento"
          title="Não é treino. É protocolo."
          subtitle="Na FORGELAB, cada sessão faz parte de um sistema maior. Periodização, progressão e avaliação contínua são os pilares."
          className="mb-16 max-w-3xl"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {protocols.map((proto) => (
            <div key={proto.id} className="bg-[#141414] border border-white/5 p-8 rounded-2xl hover:border-[#F5C518]/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors select-none pointer-events-none">
                {proto.id}
              </div>
              
              <div className="relative z-10">
                <p className="text-[#F5C518] text-sm font-bold uppercase tracking-wide mb-2">{proto.target}</p>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{proto.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                  {proto.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {proto.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#1E1E1E] text-neutral-300 text-xs font-semibold rounded uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protocols;