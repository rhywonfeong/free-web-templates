import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-void)] py-12 border-t border-[var(--color-ash)]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#" className="font-display text-4xl tracking-tighter text-white">BLK<span className="text-[var(--color-primary)]">™</span></a>
          <p className="text-[12px] text-[var(--color-smoke)]">
            © 2024 Beyond Limits Known · Todos os direitos reservados
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#" className="text-[12px] uppercase tracking-widest text-[var(--color-smoke)] hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="text-[12px] uppercase tracking-widest text-[var(--color-smoke)] hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="text-[12px] uppercase tracking-widest text-[var(--color-smoke)] hover:text-white transition-colors flex items-center gap-2">
            <iconify-icon icon="simple-icons:instagram"></iconify-icon> Instagram
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="text-[12px] uppercase tracking-widest text-[var(--color-smoke)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-2">
            <iconify-icon icon="simple-icons:whatsapp"></iconify-icon> WhatsApp
          </a>
        </nav>

      </div>
    </footer>
  );
}