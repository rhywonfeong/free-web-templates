import React from 'react'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background with Luminous effects */}
      <div className="absolute inset-0 z-0 bg-dot-pattern opacity-30"></div>
      
      {/* Central glow imitating energy from a figure */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-to-t from-[#E8001C]/20 to-[#FF4500]/10 rounded-full blur-[120px] mix-blend-screen transform translate-x-1/4"></div>
      </div>

      {/* Background Image - Fit woman mediating/training */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 w-full py-20 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Content - Typography focuses on force */}
        <div className="w-full lg:w-3/5">
          <div className="mb-6 font-display text-sm tracking-[0.3em] text-[#7A7A7A] uppercase flex items-center">
            <span className="w-2 h-2 bg-[#E8001C] mr-3"></span>
            Beyond Limits Known
          </div>
          
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tighter text-white uppercase mb-8">
            <span className="block mb-2">Sem Mágica</span>
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#C8C8C8]">Sem Atalhos</span>
            <span className="block text-[#E8001C]">Sem Desculpas</span>
          </h1>
          
          <p className="font-display italic text-xl md:text-2xl text-[#00C2E0] uppercase tracking-wide mb-6">
            Treinos progressivos e acompanhamento real!
          </p>
          
          <p className="text-[#C8C8C8] text-base md:text-lg max-w-md mb-10 leading-relaxed font-light">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Começar Agora</Button>
            <Button variant="secondary" size="lg">Conhecer o Espaço</Button>
          </div>
        </div>

        {/* Right Content - Coordinate system/Tech labels */}
        <div className="hidden lg:flex flex-col items-end justify-end h-full mt-32">
          <div className="border border-[#3D3D3D] bg-[#141414]/80 backdrop-blur-sm p-4 w-64">
            <div className="flex items-center justify-between border-b border-[#3D3D3D] pb-2 mb-2">
              <span className="font-display text-[10px] text-[#00C2E0] tracking-widest uppercase">Status</span>
              <span className="w-2 h-2 bg-[#1DB954] rounded-full animate-pulse"></span>
            </div>
            <div className="font-display font-black text-2xl uppercase tracking-tight">Active Protocol</div>
            <div className="text-[11px] text-[#7A7A7A] mt-2 font-mono">SYS.REQ // INTENSITY: MAX</div>
          </div>
        </div>

      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 w-full bg-[#141414] border-t border-[#3D3D3D] mt-auto">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#3D3D3D] border-x border-[#3D3D3D]">
            {[
              { label: 'Horário', value: '05H–23H' },
              { label: 'Dias', value: '7 DIAS' },
              { label: 'Área', value: '1.800M²' },
              { label: 'Comunidade', value: '+1.200 ALUNOS' },
            ].map((stat, idx) => (
              <div key={idx} className="py-6 px-4 md:px-8 flex flex-col items-center justify-center text-center">
                <span className="font-display text-[10px] text-[#7A7A7A] uppercase tracking-[0.2em] mb-2">{stat.label}</span>
                <span className="font-display font-bold text-xl md:text-2xl text-white uppercase tracking-tight">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}