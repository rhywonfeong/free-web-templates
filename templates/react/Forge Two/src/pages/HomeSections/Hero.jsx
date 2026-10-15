import React from 'react';
import Button from '../../components/ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-0">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop" 
          alt="Atleta treinando intensamente" 
          className="w-full h-full object-cover object-center grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/50 to-transparent z-10" />
        {/* Cinematic Light Leak */}
        <div className="absolute top-0 right-0 w-[80%] h-full bg-[radial-gradient(ellipse_at_right,_rgba(232,64,10,0.25),_transparent_60%)] z-10 mix-blend-screen" />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 w-full mb-16 md:mb-24">
        <div className="max-w-4xl">
          <h1 className="font-display font-black text-6xl md:text-[100px] lg:text-[120px] uppercase leading-[0.85] tracking-[-0.02em] text-white mb-6">
            SEM <span className="text-[#E8400A]">MÁGICA</span><br/>
            SEM <span className="text-[#E8400A]">ATALHOS</span><br/>
            SEM DESCULPAS
          </h1>
          
          <p className="font-display text-xl md:text-3xl font-medium text-white uppercase tracking-tight mb-4">
            Treinos progressivos e acompanhamento real!
          </p>
          
          <p className="text-[#B0B0B0] text-base md:text-lg max-w-2xl mb-10 leading-relaxed border-l-2 border-[#E8400A] pl-6">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="#planos">Começar Agora</Button>
            <Button variant="secondary" href="#espaco">Conhecer o Espaço</Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 w-full bg-[#0A0A0A] border-y border-[#2A2A2A]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-x-0 md:divide-x divide-[#2A2A2A]">
            {[
              { label: 'Horário', value: '05H–23H' },
              { label: 'Dias por semana', value: '7 DIAS' },
              { label: 'Área do espaço', value: '1.800M²' },
              { label: 'Total de alunos', value: '+1.200 ALUNOS' },
              { label: 'Ano de fundação', value: 'DESDE 2018' },
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col justify-center ${i !== 0 ? 'md:pl-8' : ''}`}>
                <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight uppercase">
                  {stat.value}
                </span>
                <span className="text-[#6B6B6B] text-[11px] uppercase tracking-[0.14em] font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;