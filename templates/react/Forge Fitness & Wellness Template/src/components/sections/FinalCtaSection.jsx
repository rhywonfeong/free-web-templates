import React from 'react'
import Button from '../ui/Button'

export default function FinalCtaSection() {
  return (
    <section className="bg-gradient-brand py-32 relative overflow-hidden flex items-center justify-center text-center">
      {/* Dynamic atmospheric background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#E63422]/50 to-transparent mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-[clamp(40px,6vw,72px)] font-black text-white tracking-tighter leading-none mb-6 drop-shadow-lg">
          Sua Transformação Começa Agora.
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium drop-shadow-md">
          Não amanhã. Não na segunda-feira. Hoje. Agende sua visita gratuita e descubra o que é treinar de verdade.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="!bg-white !text-[#E63422] hover:!bg-[#f5f5f5] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]"
            onClick={() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agendar Visita Gratuita
          </Button>
          <Button 
            className="!bg-transparent !text-white !border-white hover:!bg-white/10"
            onClick={() => window.open('https://wa.me/5511999990000')}
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  )
}