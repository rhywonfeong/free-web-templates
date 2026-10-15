import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darker py-16 px-6 border-t border-subtle flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
        <div className="text-brand">
          <iconify-icon icon="solar:fire-bold-duotone" width="24" height="24"></iconify-icon>
        </div>
        <span className="font-display font-semibold text-2xl tracking-tight text-light">BRASEA</span>
      </div>
      
      <p className="text-muted text-sm mb-8 tracking-wide uppercase font-medium">
        Aprendizado culinário profissional com IA
      </p>
      
      <div className="flex gap-6 text-sm text-muted mb-12">
        <a href="#" className="hover:text-brand transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-brand transition-colors">Política de Privacidade</a>
      </div>
      
      <p className="text-[#6D6861] text-xs">
        © 2026 Brasea. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;