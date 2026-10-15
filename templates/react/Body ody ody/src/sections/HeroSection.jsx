import Button from '../components/ui/Button'
import Eyebrow from '../components/ui/Eyebrow'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920" 
          alt="Athlete lifting heavy weight" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start pt-20">
        <div className="max-w-4xl">
          <Eyebrow icon="solar:star-fall-bold" color="yellow">Alto padrão. Resultado real.</Eyebrow>
          
          <h1 className="text-h1 mb-8 text-white">
            Seu corpo é o projeto mais <span className="text-[#E5C000]">importante</span> que você vai tocar na vida.
          </h1>
          
          <p className="text-lg md:text-xl text-[#F5F5F5] max-w-2xl mb-12 leading-relaxed">
            Treinamento de alta performance para quem leva a sério o que faz — dentro e fora da academia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Button variant="primary" size="lg" className="w-full sm:w-auto group">
              Agendar visita gratuita
              <iconify-icon icon="solar:arrow-right-linear" class="ml-2 group-hover:translate-x-1 transition-transform"></iconify-icon>
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto">
              Falar com um especialista
            </Button>
          </div>
          
          <p className="text-[#888888] text-xs mt-6 uppercase tracking-widest">
            Sem compromisso. Sem pressão. Só uma conversa.
          </p>
        </div>
      </div>

      {/* Ticker strip at bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-[#E5C000] py-3 overflow-hidden z-20 flex">
        <div className="animate-[slide_20s_linear_infinite] whitespace-nowrap flex font-display text-xl text-[#1A1A1A] uppercase tracking-wider">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 flex items-center gap-8">
              AURA PERFORMANCE <span className="w-2 h-2 bg-[#1A1A1A] rounded-full"></span>
            </span>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}} />
      </div>
    </section>
  )
}