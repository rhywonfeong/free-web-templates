import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 px-5 md:px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
        
        <div className="flex flex-col gap-4 max-w-sm">
          <span className="text-3xl font-display font-black tracking-tightest uppercase text-offwhite">
            ATLAS
          </span>
          <p className="text-neutral-500 text-sm">
            Uma academia construída para quem leva o treinamento a sério. Foco total, ego zero.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Legal</span>
            <a href="#" className="text-sm text-neutral-300 hover:text-acid transition-colors">Privacidade</a>
            <a href="#" className="text-sm text-neutral-300 hover:text-acid transition-colors">Termos</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Social</span>
            <a href="#" className="text-sm text-neutral-300 hover:text-acid transition-colors flex items-center gap-2">
              <iconify-icon icon="simple-icons:instagram"></iconify-icon> Instagram
            </a>
            <a href="#" className="text-sm text-neutral-300 hover:text-acid transition-colors flex items-center gap-2">
              <iconify-icon icon="simple-icons:whatsapp"></iconify-icon> WhatsApp
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        <p>© 2025 ATLAS Academia — Todos os direitos reservados</p>
        <div className="flex items-center gap-1">
          <span>Forge Your</span> <span className="text-acid font-medium">Strength.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;