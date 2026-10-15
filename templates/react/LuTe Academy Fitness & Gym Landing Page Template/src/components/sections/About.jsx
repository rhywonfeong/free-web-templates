import SectionHeading from '../ui/SectionHeading'

export default function About() {
  const pillars = [
    {
      num: '01',
      title: 'Intensidade',
      desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.'
    },
    {
      num: '02',
      title: 'Precisão',
      desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.'
    },
    {
      num: '03',
      title: 'Controle',
      desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.'
    }
  ]

  const stats = [
    { value: '+1.200', label: 'Alunos ativos' },
    { value: '94%', label: 'Retenção 6 meses' },
    { value: '8 anos', label: 'Em operação' },
    { value: '1.8K M²', label: 'Dedicados' },
  ]

  return (
    <section id="sobre" className="py-32 bg-[#0A0A0A] relative border-b border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div>
            <SectionHeading 
              badge="Quem Somos"
              title="Forjados pela disciplina."
            />
            
            <div className="space-y-8 text-[#9A9A9A] text-lg leading-relaxed">
              <p>
                A LuTe nasceu de uma certeza simples: ambiente mediano produz resultado mediano. Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
              </p>
              
              <blockquote className="border-l-2 border-[#00F9E4] pl-6 py-2 my-8 relative">
                <p className="text-2xl text-white font-medium italic tracking-tight">
                  "In silence, the transformation begins."
                </p>
              </blockquote>
              
              <p>
                Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-16 border-t border-[#1C1C1C]">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white tracking-tighter mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Pillars */}
          <div className="space-y-4">
            {pillars.map((pillar, i) => (
              <div 
                key={i} 
                className="group relative bg-[#121212] p-8 md:p-10 rounded-2xl border border-[#2A2A2A] hover:border-[#00F9E4]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,249,228,0.05)] overflow-hidden"
              >
                {/* Background Number Accent */}
                <span className="absolute -right-4 -bottom-8 text-8xl font-black text-[#1C1C1C] group-hover:text-[#0A0A0A] transition-colors duration-500 select-none">
                  {pillar.num}
                </span>
                
                <div className="relative z-10 flex items-start gap-6">
                  <span className="text-[#00F9E4] font-bold text-xl tracking-tight mt-1">{pillar.num}</span>
                  <div>
                    <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-[#00F9E4] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[#9A9A9A] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}