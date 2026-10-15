import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 pt-20 pb-10 px-6 lg:px-12 w-full text-neutral-300 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:w-1/4">
            <div className="text-xl font-display tracking-tight text-white mb-2">
              RENDIQ
            </div>
            <p className="text-xs font-label text-neutral-500 uppercase tracking-widest">
              O QI do seu quilo
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-label text-white">Produto</span>
              <a href="#" className="text-sm font-body hover:text-white transition-colors">Funcionalidades</a>
              <a href="#" className="text-sm font-body hover:text-white transition-colors">Planos</a>
              <a href="#" className="text-sm font-body hover:text-white transition-colors">Roadmap</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-label text-white">Empresa</span>
              <a href="#" className="text-sm font-body hover:text-white transition-colors">Sobre</a>
              <a href="#" className="text-sm font-body hover:text-white transition-colors">Contato</a>
              <a href="#" className="text-sm font-body hover:text-white transition-colors">Blog</a>
            </div>
             <div className="flex flex-col gap-4">
              <span className="text-sm font-label text-white">Legal</span>
              <a href="#" className="text-sm font-body hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="text-sm font-body hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="text-sm font-body hover:text-white transition-colors">LGPD</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-700">
          <div className="text-xs font-body text-neutral-500">
            contato@rendiq.com.br · @rendiq · WhatsApp: (19) 99999-0000
          </div>
          <div className="text-xs font-body text-neutral-500 text-right">
            RENDIQ TECNOLOGIA LTDA. · CNPJ 00.000.000/0001-00 · © 2024–2026
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;