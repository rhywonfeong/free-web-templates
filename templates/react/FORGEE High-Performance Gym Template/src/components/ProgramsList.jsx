export default function ProgramsList() {
  const programs = [
    {
      id: '01',
      title: 'FORGEE STRENGTH',
      desc: 'Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.',
      tags: ['Iniciantes a avançados', 'Hipertrofia e força', '3–5× / semana']
    },
    {
      id: '02',
      title: 'FORGEE CONDITIONING',
      desc: 'Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.',
      tags: ['Condicionamento', 'Perda de gordura', 'Turmas diárias'],
      featured: true
    },
    {
      id: '03',
      title: 'FORGEE MOBILITY',
      desc: 'Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.',
      tags: ['Prevenção', 'Recuperação']
    },
    {
      id: '04',
      title: 'PERSONAL TRAINING',
      desc: 'Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.',
      tags: ['Acompanhamento 1:1', 'Avaliação contínua']
    }
  ];

  return (
    <section className="px-6 md:px-12 max-w-[1280px] mx-auto">
      <div className="mb-16">
        <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tight">Detalhes dos Protocolos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((prog) => (
          <div 
            key={prog.id} 
            className={`p-8 rounded-2xl flex flex-col h-full border ${prog.featured ? 'bg-[#1E1E1E] border-[#CCFF00]/30 relative overflow-hidden' : 'bg-transparent border-white/10 hover:bg-[#1E1E1E]/50'} transition-colors`}
          >
            {prog.featured && (
              <div className="absolute top-0 right-0 bg-[#CCFF00] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                Destaque
              </div>
            )}
            
            <div className="flex items-baseline gap-4 mb-4">
              <span className={`font-display text-3xl ${prog.featured ? 'text-[#CCFF00]' : 'text-[#E84A1A]'}`}>{prog.id}</span>
              <h3 className="text-2xl font-bold uppercase tracking-wide text-white">{prog.title}</h3>
            </div>
            
            <p className="text-[#CCCCCC] leading-relaxed mb-8 flex-grow">
              {prog.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {prog.tags.map((tag, i) => (
                <span key={i} className="text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 text-[#888888] bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}