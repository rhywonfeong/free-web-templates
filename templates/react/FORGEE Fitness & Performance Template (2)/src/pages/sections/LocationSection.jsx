import React from 'react';
import { Label, H2, SectionMarker } from '../../components/Typography';

export default function LocationSection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1600px] mx-auto border-t border-[#D6CFC5]">
      <SectionMarker current="08" total="09" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <Label className="mb-6">Onde estamos</Label>
          <H2 className="mb-12">NO CORAÇÃO<br/>DE INDAIATUBA.</H2>
          
          <div className="mb-12">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#1A1812] mb-4">Endereço</h4>
            <p className="text-[#6B6259] text-sm leading-relaxed mb-4">
              Rua das Esmeraldas, 742<br/>
              Jardim Morada do Sol — Indaiatuba, SP<br/>
              CEP 13.334-210
            </p>
            <p className="text-[10px] text-[#A09688] uppercase tracking-widest flex items-center gap-2">
              <iconify-icon icon="solar:map-point-linear"></iconify-icon> 200m do Carrefour · Próximo à saída SP-075
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
             <button className="bg-[#1A1812] text-[#F5F3EF] px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#2D3A2E] transition-colors text-center flex items-center justify-center gap-3">
                <iconify-icon icon="simple-icons:whatsapp" width="16"></iconify-icon> Falar no WhatsApp
              </button>
              <button className="border border-[#1A1812] text-[#1A1812] px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#1A1812] hover:text-[#F5F3EF] transition-colors text-center">
                Como Chegar
              </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#EDE9E3] p-8 md:p-12">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#1A1812] mb-6">Horários</h4>
            <ul className="space-y-4">
              <li className="flex flex-col border-b border-[#D6CFC5] pb-2">
                <span className="text-[10px] text-[#A09688] uppercase tracking-widest mb-1">Segunda a Sexta</span>
                <span className="text-sm font-medium">05H00 – 23H00</span>
              </li>
              <li className="flex flex-col border-b border-[#D6CFC5] pb-2">
                <span className="text-[10px] text-[#A09688] uppercase tracking-widest mb-1">Sábado</span>
                <span className="text-sm font-medium">07H00 – 20H00</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-[#A09688] uppercase tracking-widest mb-1">Dom e Feriados</span>
                <span className="text-sm font-medium">08H00 – 14H00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#1A1812] mb-6">Contato</h4>
             <ul className="space-y-6">
              <li>
                <span className="block text-[10px] text-[#A09688] uppercase tracking-widest mb-1">WhatsApp</span>
                <a href="#" className="text-sm font-medium hover:text-[#6B6259] transition-colors">(19) 98234-5678</a>
              </li>
              <li>
                <span className="block text-[10px] text-[#A09688] uppercase tracking-widest mb-1">E-mail</span>
                <a href="#" className="text-sm font-medium hover:text-[#6B6259] transition-colors">contato@forgee.academy</a>
              </li>
              <li>
                <span className="block text-[10px] text-[#A09688] uppercase tracking-widest mb-1">Instagram</span>
                <a href="#" className="text-sm font-medium hover:text-[#6B6259] transition-colors">@forgee.academy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}