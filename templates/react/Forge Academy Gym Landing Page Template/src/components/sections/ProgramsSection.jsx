import React from 'react'
import SectionHeading from '../ui/SectionHeading'

const ProgramsSection = () => {
  const programs = [
    {
      title: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Treino livre ou acompanhado.",
      tags: ["Hipertrofia", "Força", "3-5x/sem"],
      featured: false
    },
    {
      title: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      tags: ["Perda de gordura", "Resistência", "Turmas"],
      featured: true
    },
    {
      title: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Trabalho de corpo para quem treina pesado e não quer se machucar.",
      tags: ["Recuperação", "Postura"],
      featured: false
    },
    {
      title: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      tags: ["Atenção 1:1", "Foco total"],
      featured: false
    }
  ]

  return (
    <section id="programas" className="py-32 px-6 md:px-12 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeading 
            subtitle="Programas"
            title="UM PROTOCOLO PARA CADA *OBJETIVO*."
            className="max-w-2xl"
          />
          <p className="text-[#808080] max-w-sm text-right pb-4">
            A intenção dita o resultado. Escolha o seu caminho e execute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, idx) => (
            <div 
              key={idx} 
              className={`p-8 flex flex-col h-full transition-all duration-300 relative group ${
                prog.featured 
                  ? 'bg-[#1C1C1C] border-2 border-[#FF4A1C] shadow-[0_0_30px_rgba(255,74,28,0.15)]' 
                  : 'bg-[#1C1C1C] border border-[#2E2E2E] hover:border-[#808080]'
              }`}
            >
              {prog.featured && (
                <div className="absolute top-0 right-0 bg-[#FF4A1C] text-[#0D0D0D] font-bold text-[10px] uppercase tracking-widest px-3 py-1">
                  Destaque
                </div>
              )}
              
              <div className="mb-6 flex gap-2 flex-wrap">
                {prog.tags.map((tag, i) => (
                  <span key={i} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${prog.featured ? 'bg-[#FF4A1C]/20 text-[#FF4A1C]' : 'bg-[#2E2E2E] text-[#BFBFBF]'}`}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="font-display text-2xl mb-4 text-white group-hover:text-[#E8190F] transition-colors">{prog.title}</h3>
              <p className="text-[#808080] text-sm flex-grow mb-8 leading-relaxed">
                {prog.desc}
              </p>
              
              <button className={`w-full py-3 font-semibold text-sm tracking-widest uppercase border transition-colors ${
                prog.featured 
                  ? 'bg-[#FF4A1C] text-[#0D0D0D] border-[#FF4A1C] hover:bg-white hover:border-white' 
                  : 'bg-transparent text-white border-[#2E2E2E] hover:border-white'
              }`}>
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection