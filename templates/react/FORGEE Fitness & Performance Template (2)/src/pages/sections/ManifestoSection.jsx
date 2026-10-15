import React from 'react';
import { Label, H2, BodyText, SectionMarker } from '../../components/Typography';

export default function ManifestoSection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1600px] mx-auto border-t border-[#D6CFC5]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-5 flex flex-col">
          <SectionMarker current="01" total="09" />
          <Label className="mb-6">Quem Somos</Label>
          <H2 className="mb-12">FORJADOS<br/>PELA<br/>DISCIPLINA</H2>
          
          <BodyText className="mb-12 text-lg">
            A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
            <br/><br/>
            Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
          </BodyText>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-end">
          <div className="aspect-[4/3] mb-12 bg-[#D6CFC5] relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80" 
              alt="Gym interior focus" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-[1500ms]"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-2xl font-serif italic text-[#1A1812] mb-8 leading-snug">
                "In silence, the transformation begins."
              </p>
              <BodyText className="text-sm">
                Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
              </BodyText>
            </div>
            
            <div className="flex flex-col gap-8">
              {[
                { title: 'Intensidade', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
                { title: 'Precisão', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
                { title: 'Controle', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' }
              ].map((pillar, i) => (
                <div key={i} className="border-t border-[#D6CFC5] pt-4">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-[#1A1812] mb-2">0{i+1} — {pillar.title}</h4>
                  <p className="text-[#6B6259] text-sm">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}