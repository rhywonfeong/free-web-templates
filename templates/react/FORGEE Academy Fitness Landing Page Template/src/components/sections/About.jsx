import SectionLabel from '../ui/SectionLabel'

export default function About() {
  return (
    <section id="espaco" className="py-24 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Title & Quote */}
          <div className="lg:col-span-5 relative">
            <SectionLabel>QUEM SOMOS</SectionLabel>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-[1] tracking-tighter mb-12 text-[#F5F5F5]">
              FORJADOS<br/>PELA<br/><span className="text-[#E82020]">DISCIPLINA.</span>
            </h2>
            
            <div className="pl-6 border-l-2 border-[#E8651A] py-2 relative">
              <iconify-icon icon="solar:quote-left-bold" class="text-4xl text-[#1E1E1E] absolute -top-4 -left-2 z-0"></iconify-icon>
              <p className="font-display text-2xl text-[#E5E5E5] italic tracking-tight relative z-10 leading-snug">
                "In silence,<br/>the transformation<br/>begins."
              </p>
            </div>
          </div>

          {/* Right Column - Text & Pillars */}
          <div className="lg:col-span-7 pt-4 lg:pt-16">
            <div className="text-[#E5E5E5] text-lg leading-relaxed space-y-6 mb-16">
              <p>
                A FORGEE nasceu de uma certeza simples: <span className="text-white font-medium">ambiente mediano produz resultado mediano.</span>
              </p>
              <p>
                Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
              </p>
              <p className="text-[#7A7A7A]">
                Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: 'INTENSIDADE', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
                { title: 'PRECISÃO', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
                { title: 'CONTROLE', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' }
              ].map((pillar, i) => (
                <div key={i} className="bg-[#181818] p-6 rounded-xl border border-[#2D2D2D] hover:border-[#E8651A]/50 transition-colors">
                  <h3 className="font-display font-semibold text-[#E8651A] text-xl tracking-tight mb-3 uppercase">{pillar.title}</h3>
                  <p className="text-sm text-[#7A7A7A] leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}