import SectionTitle from '../ui/SectionTitle';

const Programs = () => {
  const programs = [
    {
      id: "01",
      title: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
      target: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana.",
      highlight: false
    },
    {
      id: "02",
      title: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura.",
      freq: "Turmas: 06H · 07H · 12H · 18H · 19H30",
      highlight: true
    },
    {
      id: "03",
      title: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      target: "Prevenção de lesões, recuperação.",
      freq: "Sessões agendadas.",
      highlight: false
    },
    {
      id: "04",
      title: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      target: "Atenção máxima, resultados específicos.",
      freq: "Flexível.",
      highlight: false
    }
  ];

  return (
    <section id="programas" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <SectionTitle 
          eyebrow="O que oferecemos"
          title="ESCOLHA SUA"
          titleAccent="BATALHA."
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {programs.map((prog) => (
            <div 
              key={prog.id} 
              className={`p-8 md:p-12 border ${prog.highlight ? 'border-[#E8400A] bg-[#111111]/80' : 'border-subtle bg-surface'} relative overflow-hidden group`}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-0 bg-[#E8400A] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                  Destaque
                </div>
              )}
              
              <span className="text-[#2A2A2A] font-display text-4xl font-bold mb-4 block group-hover:text-[#E8400A]/30 transition-colors">
                {prog.id}
              </span>
              
              <h3 className="font-display uppercase tracking-tight text-3xl text-white mb-4">
                {prog.title}
              </h3>
              
              <p className="text-[#B0B0B0] text-sm leading-relaxed mb-8">
                {prog.desc}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-[#2A2A2A]">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[#6B6B6B] text-[11px] uppercase tracking-wider shrink-0 w-24">Para quem é</span>
                  <span className="text-[#D9D9D9] text-sm text-right">{prog.target}</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[#6B6B6B] text-[11px] uppercase tracking-wider shrink-0 w-24">Info</span>
                  <span className="text-[#D9D9D9] text-sm text-right">{prog.freq}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;