import SectionLabel from '../ui/SectionLabel'

export default function Programs() {
  const programs = [
    {
      title: 'FORGEE STRENGTH',
      desc: 'Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.',
      target: 'Iniciantes a avançados em hipertrofia e força.',
      freq: '3–5× por semana.',
      highlight: false
    },
    {
      title: 'FORGEE CONDITIONING',
      desc: 'Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.',
      target: 'Condicionamento, perda de gordura.',
      turmas: '06H · 07H · 12H · 18H · 19H30',
      highlight: true
    },
    {
      title: 'FORGEE MOBILITY',
      desc: 'Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.',
      highlight: false
    },
    {
      title: 'PERSONAL TRAINING',
      desc: 'Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.',
      highlight: false
    }
  ]

  return (
    <section id="programas" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionLabel>O QUE OFERECEMOS</SectionLabel>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-[1] tracking-tighter text-[#F5F5F5]">
            UM PROTOCOLO<br/>PARA CADA<br/><span className="text-[#E8651A]">OBJETIVO.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((prog, i) => (
            <div key={i} className={`p-8 rounded-2xl border flex flex-col h-full transition-all hover:-translate-y-1 ${prog.highlight ? 'bg-[#181818] border-[#E8651A] shadow-[0_8px_32px_rgba(232,101,26,0.1)]' : 'bg-[#111111] border-[#2D2D2D] hover:border-[#5A5A5A]'}`}>
              
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F5F5F5]">
                  <span className="text-[#5A5A5A] mr-2">0{i+1}</span>
                  {prog.title}
                </h3>
                {prog.highlight && (
                  <span className="bg-[#F5C200] text-[#0A0A0A] text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase">
                    DESTAQUE
                  </span>
                )}
              </div>

              <p className="text-[#E5E5E5] text-sm leading-relaxed mb-8 flex-grow">
                {prog.desc}
              </p>

              <div className="space-y-3 pt-6 border-t border-[#2D2D2D]">
                {prog.target && (
                  <div className="flex flex-col">
                    <span className="text-[#7A7A7A] text-[10px] uppercase tracking-wider font-semibold">Para quem é:</span>
                    <span className="text-sm text-[#F5F5F5]">{prog.target}</span>
                  </div>
                )}
                {prog.freq && (
                  <div className="flex flex-col">
                    <span className="text-[#7A7A7A] text-[10px] uppercase tracking-wider font-semibold">Frequência:</span>
                    <span className="text-sm text-[#F5F5F5]">{prog.freq}</span>
                  </div>
                )}
                {prog.turmas && (
                  <div className="flex flex-col">
                    <span className="text-[#7A7A7A] text-[10px] uppercase tracking-wider font-semibold">Turmas:</span>
                    <span className="text-sm text-[#E8651A] font-medium">{prog.turmas}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}