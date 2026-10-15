import React from 'react'
import Button from './ui/Button'

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 lg:pt-0 lg:pb-0 flex items-center bg-[#0A0A0A] bg-grain overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-2/3 h-full overflow-hidden opacity-50 md:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" 
            alt="Atleta treinando na Forgee" 
            className="w-full h-full object-cover object-right filter grayscale contrast-125"
          />
          {/* Combustion Orange cinematic light leak */}
          <div className="absolute -right-1/4 top-1/4 w-[800px] h-[800px] bg-[#E8400A]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-20" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 w-full relative z-10">
        <div className="max-w-2xl">
          <p className="text-eyebrow mb-6">Treinos progressivos e acompanhamento real!</p>
          
          <h1 className="font-display font-black text-[56px] md:text-[80px] lg:text-[104px] leading-[0.9] uppercase tracking-tighter mb-8 text-white">
            Sem mágica<br />
            Sem atalhos<br />
            <span className="text-[#E8400A]">Sem desculpas</span>
          </h1>
          
          <p className="text-[#B0B0B0] text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-24">
            <Button size="lg">Começar Agora</Button>
            <Button variant="secondary" size="lg">Conhecer o Espaço</Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#2A2A2A] bg-[#111111]/80 backdrop-blur-sm z-20 hidden md:block">
        <div className="max-w-[1440px] mx-auto px-10 lg:px-20">
          <div className="flex justify-between items-center py-6">
            {[
              { label: 'Horário', value: '05H–23H' },
              { label: 'Dias', value: '7 DIAS' },
              { label: 'Área', value: '1.800M²' },
              { label: 'Alunos', value: '+1.200' },
              { label: 'Fundação', value: 'EST. 2018' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[#6B6B6B] text-[10px] uppercase tracking-widest font-medium mb-1">{stat.label}</span>
                <span className="font-display font-bold text-xl text-white tracking-tight">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection