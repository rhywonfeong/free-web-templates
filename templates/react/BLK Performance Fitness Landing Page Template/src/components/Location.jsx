import React from 'react';
import SectionLabel from './ui/SectionLabel';
import Button from './ui/Button';

export default function Location() {
  return (
    <section id="localizacao" className="py-24 md:py-32 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div>
            <SectionLabel>Onde Estamos</SectionLabel>
            <h2 className="font-display text-[40px] md:text-[64px] leading-[0.9] tracking-tight text-white mb-8">
              TERRITÓRIO <span className="text-[var(--color-primary)]">BLK</span>
            </h2>
            <p className="text-[16px] text-[var(--color-silver)] leading-relaxed mb-12">
              Nossa unidade foi projetada para ser um destino. Da arquitetura à iluminação, cada detalhe foi pensado para criar o ambiente certo para transformação.
            </p>

            <div className="flex flex-col gap-8 mb-12">
              <div className="flex gap-4">
                <iconify-icon icon="solar:map-point-linear" className="text-2xl text-[var(--color-primary)] shrink-0"></iconify-icon>
                <div>
                  <h4 className="text-[12px] uppercase tracking-wider font-semibold text-white mb-2">Endereço</h4>
                  <p className="text-[14px] text-[var(--color-silver)]">Av. Brigadeiro Faria Lima, 3732 — 8º andar<br/>Itaim Bibi, São Paulo — SP · 04538-132</p>
                </div>
              </div>

              <div className="flex gap-4">
                <iconify-icon icon="solar:clock-circle-linear" className="text-2xl text-[var(--color-primary)] shrink-0"></iconify-icon>
                <div>
                  <h4 className="text-[12px] uppercase tracking-wider font-semibold text-white mb-2">Horários</h4>
                  <p className="text-[14px] text-[var(--color-silver)]">Seg–Sex: 5h às 23h<br/>Sáb: 7h às 20h · Dom: 8h às 14h</p>
                </div>
              </div>

              <div className="flex gap-4">
                <iconify-icon icon="solar:phone-calling-linear" className="text-2xl text-[var(--color-primary)] shrink-0"></iconify-icon>
                <div>
                  <h4 className="text-[12px] uppercase tracking-wider font-semibold text-white mb-2">Contato</h4>
                  <p className="text-[14px] text-[var(--color-silver)]">+55 (11) 3456-7890<br/>contato@blkgym.com.br</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[var(--color-iron)]/40 border border-[var(--color-ash)]/50 mb-12">
              <h4 className="text-[12px] uppercase tracking-wider font-semibold text-[var(--color-primary)] mb-3">Acesso</h4>
              <ul className="text-[13px] text-[var(--color-silver)] flex flex-col gap-2">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-silver)] rounded-full"></span> 300m do metrô Faria Lima (linha 4-Amarela)</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-silver)] rounded-full"></span> 60 vagas de estacionamento próprio · Gratuito para alunos</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="primary">Agendar Visita Gratuita</Button>
              <Button variant="link">Falar com Especialista</Button>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/5] bg-[var(--color-carbon)] border border-[var(--color-ash)] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop" 
              alt="Gym Architecture" 
              className="w-full h-full object-cover filter grayscale opacity-60 hover:opacity-80 transition-opacity duration-700"
            />
            {/* Tech overlay graphics */}
            <div className="absolute top-6 right-6 text-[10px] font-mono text-[var(--color-primary)] bg-[var(--color-carbon)]/80 px-2 py-1 border border-[var(--color-primary)]/30 backdrop-blur-sm">
              LAT -23.5866° LON -46.6835°
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-carbon)] to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}