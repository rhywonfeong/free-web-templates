import React from 'react';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:dumbbell-large-minimalistic-bold" class="text-[32px] text-[#FF3A00]"></iconify-icon>
              <span className="font-display font-bold text-3xl tracking-wide uppercase">Forge Academy</span>
            </a>
            <p className="text-[#888888] mb-8 max-w-sm">
              Você não precisa de motivação. Você precisa de um sistema. Dê o primeiro passo. A visita é gratuita, o compromisso é só com você mesmo.
            </p>
            <div className="flex gap-4">
              <Button variant="outline">Agendar visita gratuita</Button>
              <Button variant="ghost">Falar com especialista</Button>
            </div>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-sm text-[#CCCCCC] mb-6">Contato</h4>
            <ul className="space-y-4 text-[#888888]">
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:map-point-linear" class="text-xl shrink-0 mt-0.5"></iconify-icon>
                <span>Av. Brigadeiro Faria Lima, 2.369<br/>Pinheiros, São Paulo / SP</span>
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:phone-linear" class="text-xl"></iconify-icon>
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:letter-linear" class="text-xl"></iconify-icon>
                <span>contato@forgeacademia.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-sm text-[#CCCCCC] mb-6">Horário</h4>
            <ul className="space-y-4 text-[#888888]">
              <li className="flex justify-between">
                <span>Segunda – Sexta</span>
                <span className="text-[#F5F5F5]">5h30 – 23h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-[#F5F5F5]">7h – 20h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-[#F5F5F5]">8h – 14h</span>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="#" className="text-[#888888] hover:text-[#FF3A00] transition-colors">
                <iconify-icon icon="simple-icons:instagram" class="text-2xl"></iconify-icon>
              </a>
              <a href="#" className="text-[#888888] hover:text-[#FF3A00] transition-colors">
                <iconify-icon icon="simple-icons:youtube" class="text-2xl"></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#3D3D3D]">
          <p>© {new Date().getFullYear()} Forge Academy. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#888888] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#888888] transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;