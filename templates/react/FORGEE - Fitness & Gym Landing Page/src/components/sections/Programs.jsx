import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Programs() {
  const programs = [
    {
      name: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
      forWho: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana."
    },
    {
      name: "FORGEE CONDITIONING",
      highlight: true,
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      forWho: "Condicionamento, perda de gordura.",
      schedule: "06H · 07H · 12H · 18H · 19H30"
    },
    {
      name: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar."
    },
    {
      name: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title={["UM PROTOCOLO", "PARA CADA", "OBJETIVO."]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <div 
              key={idx} 
              className={`p-10 border transition-all duration-300 relative overflow-hidden group ${
                prog.highlight 
                  ? 'border-red-600 bg-zinc-950' 
                  : 'border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900'
              }`}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest">
                  Destaque
                </div>
              )}
              
              <h3 className={`text-2xl font-black uppercase tracking-tight mb-4 ${prog.highlight ? 'text-red-500' : 'text-white'}`}>
                {prog.name}
              </h3>
              
              <p className="text-zinc-400 font-light mb-8 leading-relaxed">
                {prog.desc}
              </p>

              <div className="space-y-4">
                {prog.forWho && (
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Para quem é</span>
                    <span className="text-sm text-zinc-300">{prog.forWho}</span>
                  </div>
                )}
                
                {prog.freq && (
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Frequência</span>
                    <span className="text-sm text-zinc-300">{prog.freq}</span>
                  </div>
                )}

                {prog.schedule && (
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Turmas</span>
                    <span className="text-sm text-zinc-300 font-mono">{prog.schedule}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}