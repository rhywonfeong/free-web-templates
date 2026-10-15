import SectionHeading from '../ui/SectionHeading'

const AboutSection = () => {
  return (
    <section className="py-32 bg-white text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <SectionHeading 
              theme="light"
              label="Quem somos"
              title={<>FORJADOS<br/>PELA<br/>DISCIPLINA.</>}
            />
            
            <div className="mt-12 space-y-6 text-lg text-[#4A4A4A] leading-relaxed">
              <p>A FOURCE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
              <p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
              
              <blockquote className="border-l-4 border-[#CCFF00] pl-6 py-2 my-8 text-2xl font-bold italic text-[#0A2E00]">
                "In silence, the transformation begins."
              </blockquote>
              
              <p>Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-16">
            
            {/* Pillars */}
            <div className="space-y-8">
              {[
                { title: 'Intensidade', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
                { title: 'Precisão', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
                { title: 'Controle', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' }
              ].map((pillar, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#1A5C00] flex items-center justify-center shrink-0 group-hover:bg-[#CCFF00] group-hover:text-[#0A2E00] transition-colors text-white">
                    <span className="font-display text-xl">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-[#0A2E00]">{pillar.title}</h3>
                    <p className="text-[#4A4A4A]">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Numbers */}
            <div className="grid grid-cols-2 gap-8 p-8 bg-[#F5F5F5] rounded-3xl">
              {[
                { n: '+1.200', l: 'Alunos ativos' },
                { n: '94%', l: 'Retenção 6 meses' },
                { n: '8 anos', l: 'Em operação' },
                { n: '1.8K M²', l: 'Dedicados' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-display text-[#0A2E00]">{stat.n}</div>
                  <div className="text-sm font-medium text-[#4A4A4A] uppercase tracking-wider">{stat.l}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Treinei em academias em São Paulo por anos. A FOURCE é a única que me fez não sentir falta de nenhuma delas.", n: "Rafael M.", r: "Engenheiro · Aluno há 3 anos" },
            { t: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.", n: "Juliana T.", r: "Professora · Aluna há 2 anos" },
            { t: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.", n: "Lucas O.", r: "Empresário · Aluno há 4 anos" }
          ].map((test, i) => (
            <div key={i} className="bg-white border border-[#E8E8E8] p-8 rounded-3xl hover:shadow-elevated transition-shadow">
              <div className="flex text-[#CCFF00] mb-6">
                {[...Array(5)].map((_, j) => <iconify-icon key={j} icon="solar:star-bold" width="20"></iconify-icon>)}
              </div>
              <p className="text-[#4A4A4A] italic mb-6">"{test.t}"</p>
              <div>
                <strong className="block text-[#0A2E00] uppercase tracking-wide">{test.n}</strong>
                <span className="text-sm text-[#9E9E9E]">{test.r}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection