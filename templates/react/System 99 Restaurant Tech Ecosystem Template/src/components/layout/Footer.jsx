import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-zinc-950/50 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:shield-check-linear" width="20" height="20"></iconify-icon>
          <span>Poufna propozycja inwestycyjna. Kopiowanie zabronione.</span>
        </div>
        <p>© {new Date().getFullYear()} Kobiela.dev. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;