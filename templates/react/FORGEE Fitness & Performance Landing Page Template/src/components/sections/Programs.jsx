import { Eyebrow, Headline } from '../ui/Typography';

export default function Programs() {
  const programs = [
    {
      id: "01",
      name: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
      target: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana.",
      highlight: false
    },
    {
      id: "02",
      name: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura.",
      freq: "Turmas: 06H · 07H · 12H · 18H · 19H30",
      highlight: true
    },
    {
      id: "03",
      name: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      target: "Prevenção de lesões, recuperação ativa.",
      freq: "2–3× por semana.",
      highlight: false
    },
    {
      id: "04",
      name: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      target: "Atenção exclusiva, objetivos específicos.",
      freq: "A definir com o coach.",
      highlight: false
    }
  ];

  return (
    <section className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto bg-[#0A0A0A]">
      <div className="mb-20">
        <Eyebrow>O que oferecemos</Eyebrow>
        <Headline text="UM PROTOCOLO PARA CADA OBJETIVO." highlight="PROTOCOLO" size="lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((prog) => (
          <div 
            key={prog.id} 
            className={`p-8 md:p-10 rounded-md border ${
              prog.highlight 
                ? 'bg-[#181818] border-[#E8400A]/30 relative overflow-hidden' 
                : 'bg-[#111111] border-[#2A2A2A]'
            }`}
          >
            {prog.highlight && (
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E8400A]"></div>
            )}
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-display font-bold text-[#E8400A]">{prog.id}</span>
              <h3 className="font-display font-bold text-2xl tracking-tight uppercase text-white">
                {prog.name}
              </h3>
            </div>
            
            <p className="text-[#D9D9D9] mb-8 min-h-[80px]">
              {prog.desc}
            </p>
            
            <div className="space-y-4 pt-6 border-t border-[#2A2A2A]">
              <div>
                <span className="block text-[10px] font-medium tracking-wide uppercase text-[#6B6B6B] mb-1">Para quem é</span>
                <p className="text-sm text-[#B0B0B0]">{prog.target}</p>
              </div>
              <div>
                <span className="block text-[10px] font-medium tracking-wide uppercase text-[#6B6B6B] mb-1">Frequência / Turmas</span>
                <p className="text-sm text-white font-medium">{prog.freq}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}