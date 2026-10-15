import React from 'react'
import Button from './ui/Button'

const FinalCTASection = () => {
  return (
    <section className="bg-[#E8400A] text-white overflow-hidden relative py-24 md:py-32 flex flex-col items-center justify-center text-center">
      
      <div className="absolute inset-0 bg-grain mix-blend-multiply opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 mb-12">
        <h2 className="font-display font-black text-[56px] md:text-[80px] leading-[0.9] uppercase tracking-tighter mb-10">
          A decisão<br />já foi tomada.<br />Agora é a ação.
        </h2>
        <Button size="lg" className="bg-[#111111] hover:bg-white hover:text-[#111111] border border-transparent shadow-2xl">
          Agendar Visita Gratuita
        </Button>
      </div>

      {/* Ticker Tape */}
      <div className="w-full bg-[#111111] text-[#E8400A] py-3 border-y border-[#111111]/20 mt-12 overflow-hidden flex whitespace-nowrap">
        <div className="animate-ticker font-display font-bold text-xl md:text-2xl uppercase tracking-widest flex items-center">
          <span className="mx-8">AGENDE UMA VISITA</span> · 
          <span className="mx-8">GRATUITA</span> · 
          <span className="mx-8">SEM COMPROMISSO</span> · 
          <span className="mx-8">TRAGA TÊNIS</span> · 
          <span className="mx-8">AGENDE UMA VISITA</span> · 
          <span className="mx-8">GRATUITA</span> · 
          <span className="mx-8">SEM COMPROMISSO</span> · 
          <span className="mx-8">TRAGA TÊNIS</span> · 
          <span className="mx-8">AGENDE UMA VISITA</span> · 
          <span className="mx-8">GRATUITA</span> · 
          <span className="mx-8">SEM COMPROMISSO</span> · 
          <span className="mx-8">TRAGA TÊNIS</span>
        </div>
      </div>

    </section>
  )
}

export default FinalCTASection