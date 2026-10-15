import Button from '../ui/Button'

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0A2E00]">
      {/* Background radial glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-3xl h-[800px] bg-[#CCFF00] opacity-20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start pt-12 lg:pt-0">
          <p className="text-[#CCFF00] font-medium tracking-[0.2em] text-sm uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#CCFF00]"></span>
            HIGH PERFORMANCE HEALTH · Indaiatuba, SP · Est. 2018
          </p>
          
          <h1 className="text-6xl sm:text-7xl lg:text-[100px] font-display uppercase tracking-wide leading-[0.85] text-white mb-8 drop-shadow-lg">
            SEM MÁGICA<br/>
            <span className="text-[#CCFF00]">SEM ATALHOS</span><br/>
            SEM DESCULPAS
          </h1>
          
          <p className="text-xl text-white font-medium mb-4 max-w-lg">
            Treinos progressivos e acompanhamento real!
          </p>
          
          <p className="text-[#9E9E9E] text-base mb-10 max-w-xl leading-relaxed">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Button size="lg" icon="solar:arrow-right-linear">COMEÇAR AGORA</Button>
            <Button variant="outline" size="lg" icon="solar:play-circle-linear" iconPosition="left">
              CONHECER O ESPAÇO
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-6 border-t border-white/10 pt-8">
            {[
              { label: 'Horário', value: '05H–23H' },
              { label: 'Dias', value: '7 DIAS' },
              { label: 'Estrutura', value: '1.800M²' },
              { label: 'Comunidade', value: '+1.200 ALUNOS' },
              { label: 'Fundação', value: 'DESDE 2018' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[#9E9E9E] text-xs uppercase tracking-widest">{stat.label}</span>
                <span className="text-white font-bold tracking-wider">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 relative h-[600px] lg:h-[800px] hidden md:block">
          {/* Using an Unsplash fitness image that fits the dark/intense vibe */}
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" 
            alt="Atleta Fource" 
            className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom drop-shadow-2xl grayscale contrast-125"
            style={{ 
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
        
      </div>
    </section>
  )
}

export default HeroSection