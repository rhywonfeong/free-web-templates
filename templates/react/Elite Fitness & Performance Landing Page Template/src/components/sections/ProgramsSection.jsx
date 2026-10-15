import SectionHeading from '../ui/SectionHeading';

const ProgramsSection = () => {
  const programs = [
    {
      id: "01",
      title: "FORGEE STRENGTH",
      subtitle: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo.",
      desc: "Disponível como treino livre com planilha ou acompanhado com coach.",
      target: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana.",
      featured: false
    },
    {
      id: "02",
      title: "FORGEE CONDITIONING",
      subtitle: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência.",
      desc: "Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura.",
      schedule: "06H · 07H · 12H · 18H · 19H30",
      featured: true
    },
    {
      id: "03",
      title: "FORGEE MOBILITY",
      subtitle: "Protocolo de mobilidade, postura e cadeia posterior.",
      desc: "Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      featured: false
    },
    {
      id: "04",
      title: "PERSONAL TRAINING",
      subtitle: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas.",
      desc: "Individual ou em dupla.",
      featured: false
    }
  ];

  return (
    <section id="programas" className="py-24 lg:py-32 bg-[#080808] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        <SectionHeading 
          label="O que oferecemos"
          title="UM PROTOCOLO PARA CADA OBJETIVO."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((prog) => (
            <div 
              key={prog.id} 
              className={`p-8 lg:p-10 border transition-all duration-300 relative overflow-hidden group
                ${prog.featured 
                  ? 'bg-[#1A1A1A] border-[#E8201A] shadow-[0_0_40px_rgba(232,32,26,0.1)]' 
                  : 'bg-[#0D0D0D] border-white/5 hover:border-white/20'
                }`}
            >
              {prog.featured && (
                <div className="absolute top-0 right-0 bg-[#E8201A] text-white text-[10px] font-bold uppercase tracking-wide-label px-4 py-1">
                  Destaque
                </div>
              )}
              
              <span className="text-[#424242] font-black text-2xl block mb-6">{prog.id}</span>
              <h3 className={`text-2xl font-black uppercase tracking-tightest mb-4 ${prog.featured ? 'text-white' : 'text-white'}`}>
                {prog.title}
              </h3>
              <p className="text-white font-medium text-sm leading-relaxed mb-6">
                {prog.subtitle}
              </p>
              <p className="text-[#757575] text-sm leading-relaxed mb-8">
                {prog.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
                {prog.target && (
                  <div className="flex items-start gap-2 text-[11px] uppercase tracking-wide-label text-[#BDBDBD]">
                    <span className="text-[#E8201A] font-bold">Para quem:</span> {prog.target}
                  </div>
                )}
                {prog.freq && (
                  <div className="flex items-start gap-2 text-[11px] uppercase tracking-wide-label text-[#BDBDBD]">
                    <span className="text-[#E8201A] font-bold">Frequência:</span> {prog.freq}
                  </div>
                )}
                {prog.schedule && (
                  <div className="flex items-start gap-2 text-[11px] uppercase tracking-wide-label text-[#BDBDBD]">
                    <span className="text-[#E8201A] font-bold">Turmas:</span> {prog.schedule}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;