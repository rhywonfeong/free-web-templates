import React from 'react'
import clsx from 'clsx'

const AboutSection = () => {
  const pillars = [
    { title: 'Intensidade', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
    { title: 'Precisão', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
    { title: 'Controle', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' },
  ]

  const metrics = [
    { label: 'Alunos ativos', value: '+1.200' },
    { label: 'Retenção 6m', value: '94%' },
    { label: 'Anos em op.', value: '8 anos' },
    { label: 'Área dedicada', value: '1.8K M²' },
  ]

  const testimonials = [
    { quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.", author: "Rafael M.", role: "Engenheiro · Aluno há 3 anos" },
    { quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.", author: "Juliana T.", role: "Professora · Aluna há 2 anos" },
    { quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.", author: "Lucas O.", role: "Empresário · Aluno há 4 anos" },
  ]

  return (
    <section id="espaco" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
          <div className="lg:col-span-5">
            <span className="text-eyebrow block mb-6">Quem somos</span>
            <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1] uppercase tracking-tighter">
              Forjados<br />pela<br /><span className="text-[#E8400A]">disciplina.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-end space-y-8 text-[#B0B0B0] text-lg lg:pr-12">
            <p>A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
            <p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
            <blockquote className="border-l-2 border-[#E8400A] pl-6 py-2 my-4">
              <p className="text-white font-display text-2xl uppercase tracking-tight italic">"In silence, the transformation begins."</p>
            </blockquote>
            <p>Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.</p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-t border-[#2A2A2A] pt-12">
          {pillars.map((pillar, i) => (
            <div key={i} className="group">
              <span className="text-[#6B6B6B] font-display font-bold text-xl mb-4 block">0{i+1}</span>
              <h3 className="text-white font-display text-2xl font-semibold uppercase tracking-tight mb-3 group-hover:text-[#E8400A] transition-colors">{pillar.title}</h3>
              <p className="text-[#B0B0B0] text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Image Break */}
        <div className="w-full h-[400px] mb-24 relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1600&q=80" 
            alt="Interior da academia Forgee" 
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          
          {/* Floating Metrics */}
          <div className="absolute bottom-8 left-0 right-0 px-6 md:px-12 flex justify-between items-end flex-wrap gap-6">
             {metrics.map((m, i) => (
                <div key={i}>
                  <div className="text-[10px] text-[#B0B0B0] uppercase tracking-widest mb-1">{m.label}</div>
                  <div className="text-white font-display text-3xl md:text-5xl font-bold tracking-tighter">{m.value}</div>
                </div>
             ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-[#1E1E1E] p-8 border border-[#2A2A2A] hover:border-[#E8400A]/50 transition-colors flex flex-col justify-between min-h-[240px]">
              <iconify-icon icon="solar:quote-right-bold" className="text-[#2A2A2A] text-4xl mb-4"></iconify-icon>
              <p className="text-[#D9D9D9] text-sm italic mb-6 flex-grow">{test.quote}</p>
              <div>
                <p className="text-white font-medium text-sm">{test.author}</p>
                <p className="text-[#6B6B6B] text-xs uppercase tracking-wider mt-1">{test.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutSection