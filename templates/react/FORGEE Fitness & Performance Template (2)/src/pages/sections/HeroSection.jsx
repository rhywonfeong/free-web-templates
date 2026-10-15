import React from 'react';
import { Label, Display } from '../../components/Typography';

export default function HeroSection() {
  return (
    <section className="px-6 md:px-12 pt-12 pb-24 md:pt-24 md:pb-32 max-w-[1600px] mx-auto min-h-[90vh] flex flex-col justify-between">
      <div className="mb-12">
        <Label className="mb-8">Beyond Limits Known™ · Indaiatuba, SP · Est. 2018</Label>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <Display className="max-w-4xl">
            SEM MÁGICA<br/>
            SEM ATALHOS SEM DESCULPAS
          </Display>
          <div className="md:max-w-xs flex flex-col items-start md:items-end text-left md:text-right">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Treinos progressivos e acompanhamento real!</h3>
            <p className="text-[#6B6259] text-sm leading-relaxed mb-8">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
            <div className="flex flex-col w-full gap-4">
              <button className="bg-[#1A1812] text-[#F5F3EF] px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#2D3A2E] transition-colors w-full text-center">
                Começar Agora
              </button>
              <button className="border border-[#1A1812] text-[#1A1812] px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#1A1812] hover:text-[#F5F3EF] transition-colors w-full text-center">
                Conhecer o Espaço
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Hero Image Block */}
      <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden mb-12 border border-[#1A1812] group cursor-default">
        <div className="absolute inset-0 bg-[#1A1812]/20 z-10 transition-colors duration-700 group-hover:bg-transparent pointer-events-none mix-blend-multiply"></div>
        <img 
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1600&q=80" 
          alt="Equipamentos de alta performance" 
          className="w-full h-full object-cover grayscale opacity-90 animate-pan-zoom"
        />
        <div className="absolute bottom-4 right-4 z-20">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F5F3EF] bg-[#1A1812]/50 backdrop-blur-sm px-3 py-1">
            Focus & Discipline
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#D6CFC5] border border-[#D6CFC5]">
        {[
          { label: 'Horário', value: '05H–23H' },
          { label: 'Funcionamento', value: '7 DIAS' },
          { label: 'Área', value: '1.800M²' },
          { label: 'Alunos', value: '+1.200 ALUNOS' },
          { label: 'Fundação', value: 'DESDE 2018' },
        ].map((item, i) => (
          <div key={i} className="bg-[#F5F3EF] p-6 flex flex-col gap-2">
            <span className="text-[10px] text-[#A09688] uppercase tracking-widest">{item.label}</span>
            <span className="text-sm font-semibold text-[#1A1812] tracking-wide">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}