import React from 'react'
import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="py-32 bg-[#E8001C] relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Dynamic background effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80')] bg-cover bg-center mix-blend-multiply opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#B00015] to-transparent mix-blend-multiply"></div>
      
      <div className="relative z-10 max-w-[1000px] mx-auto px-4">
        <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter uppercase text-white mb-8 drop-shadow-lg">
          A Decisão<br/>
          Já Foi Tomada.<br/>
          Agora É A Ação.
        </h2>
        
        <p className="font-display text-sm md:text-base tracking-[0.4em] md:tracking-[0.6em] text-white/90 uppercase mb-12 font-semibold">
          Agende uma visita · Gratuita · Sem compromisso · Traga tênis .
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-[#E8001C] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] border-transparent shadow-2xl"
        >
          Agendar Visita Gratuita
        </Button>
      </div>
    </section>
  )
}