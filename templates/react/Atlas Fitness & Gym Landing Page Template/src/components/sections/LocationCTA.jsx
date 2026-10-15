import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const LocationCTA = () => {
  return (
    <section id="localizacao" className="relative py-32 px-5 md:px-10 overflow-hidden">
       {/* Background Image with heavy overlay */}
       <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80" 
            alt="Gym background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-neutral-950/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
       </div>

      <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Location Info */}
        <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-8 md:p-12">
          <SectionHeader 
            label="Localização"
            title="Fácil de chegar. Difícil de sair."
            className="mb-10"
          />

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <span className="text-acid mt-1"><iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon></span>
              <div>
                <h5 className="text-sm font-bold uppercase text-offwhite mb-1">Endereço</h5>
                <p className="text-neutral-400 text-sm">Av. das Américas, 4200 — Sala 302<br/>Barra da Tijuca, Rio de Janeiro — RJ</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-acid mt-1"><iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon></span>
              <div>
                <h5 className="text-sm font-bold uppercase text-offwhite mb-1">Horários</h5>
                <ul className="text-neutral-400 text-sm flex flex-col gap-1">
                  <li>Seg–Sex: 5h30 às 23h</li>
                  <li>Sábado: 7h às 20h</li>
                  <li>Domingo: 8h às 18h</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-acid mt-1"><iconify-icon icon="solar:phone-bold" width="24"></iconify-icon></span>
              <div>
                <h5 className="text-sm font-bold uppercase text-offwhite mb-1">Contato</h5>
                <p className="text-neutral-400 text-sm">(21) 99999-0000<br/>contato@atlasacademia.com.br</p>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-800">
               <p className="text-xs uppercase tracking-widest text-acid font-bold flex gap-4">
                 <span>Estacionamento Gratuito</span>
                 <span>Ciclovia na Porta</span>
               </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="flex flex-col justify-center gap-8 lg:pl-12">
          <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-offwhite leading-[1.1]">
            O melhor treino <br/>
            da sua vida <br/>
            <span className="text-acid">começa amanhã.</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-md">
            Agende uma visita gratuita hoje. Sem compromisso, sem pressão. Só você, a estrutura e a possibilidade de descobrir o que você é capaz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="primary" size="lg">Agendar Visita Gratuita</Button>
            <Button variant="secondary" size="lg">Falar com Especialista</Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationCTA;