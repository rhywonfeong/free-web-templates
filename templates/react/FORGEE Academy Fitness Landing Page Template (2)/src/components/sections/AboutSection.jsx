import React from 'react'
import SectionLabel from '../ui/SectionLabel'

export default function AboutSection() {
  const pillars = [
    {
      num: '01',
      title: 'Intensidade',
      desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.',
      icon: 'solar:fire-bold'
    },
    {
      num: '02',
      title: 'Precisão',
      desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.',
      icon: 'solar:target-bold'
    },
    {
      num: '03',
      title: 'Controle',
      desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.',
      icon: 'solar:stopwatch-bold'
    }
  ]

  const stats = [
    { num: '+1.200', desc: 'Alunos ativos' },
    { num: '94%', desc: 'Retenção 6 meses' },
    { num: '8 anos', desc: 'Em operação' },
    { num: '1.8K M²', desc: 'Dedicados' },
  ]

  const testimonials = [
    {
      quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
      author: "Rafael M.",
      role: "Engenheiro · Aluno há 3 anos"
    },
    {
      quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
      author: "Juliana T.",
      role: "Professora · Aluna há 2 anos"
    },
    {
      quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
      author: "Lucas O.",
      role: "Empresário · Aluno há 4 anos"
    }
  ]

  return (
    <section id="espaco" className="py-24 md:py-32 bg-[#0A0A0A] relative border-b border-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <div>
            <SectionLabel>Quem somos</SectionLabel>
            <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-white mb-8">
              Forjados<br/>
              Pela<br/>
              <span className="text-[#E8001C]">Disciplina.</span>
            </h2>
            
            <div className="space-y-6 text-[#C8C8C8] text-base leading-relaxed">
              <p>
                A FORGEE nasceu de uma certeza simples: <span className="text-white font-medium">ambiente mediano produz resultado mediano.</span>
              </p>
              <p>
                Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
              </p>
              
              <blockquote className="border-l-2 border-[#E8001C] pl-6 py-2 my-8">
                <p className="font-display italic text-2xl text-[#00C2E0] uppercase tracking-wide">
                  "In silence, the transformation begins."
                </p>
              </blockquote>
              
              <p>
                Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Luminous outline effect image container */}
            <div className="relative aspect-[3/4] bg-[#141414] shadow-glow-orange border border-[#3D3D3D] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" 
                alt="Treino focado"
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
              
              {/* Tech overlay */}
              <div className="absolute top-4 right-4 bg-[#0A0A0A]/80 border border-[#3D3D3D] px-3 py-1 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#E8001C] rounded-full"></span>
                <span className="font-mono text-[10px] text-[#C8C8C8] uppercase">Zone 01 // Focus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-[#141414] border border-[#1A1A1A] p-8 hover:border-[#3D3D3D] transition-colors group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8001C] to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="flex justify-between items-start mb-6">
                <iconify-icon icon={pillar.icon} width="32" className="text-[#3D3D3D] group-hover:text-[#E8001C] transition-colors"></iconify-icon>
                <span className="font-display font-black text-4xl text-[#1A1A1A] group-hover:text-[#3D3D3D] transition-colors">
                  {pillar.num}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-4">
                {pillar.title}
              </h3>
              <p className="text-[#7A7A7A] text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="border-y border-[#1A1A1A] py-12 mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#1A1A1A] [&>*:not(:first-child)]:pl-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display font-black text-4xl md:text-5xl text-[#E8001C] tracking-tighter mb-2">
                  {stat.num}
                </span>
                <span className="text-[#7A7A7A] text-xs uppercase tracking-widest font-semibold">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <SectionLabel>Comunidade</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 relative">
                <iconify-icon icon="solar:quote-right-bold" width="24" className="text-[#1A1A1A] absolute top-6 right-6"></iconify-icon>
                <p className="text-[#C8C8C8] text-sm leading-relaxed mb-8 relative z-10 italic">
                  "{test.quote}"
                </p>
                <div className="border-t border-[#1A1A1A] pt-4 mt-auto">
                  <p className="font-bold text-white text-sm uppercase tracking-wide mb-1">{test.author}</p>
                  <p className="text-[#7A7A7A] text-xs">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}