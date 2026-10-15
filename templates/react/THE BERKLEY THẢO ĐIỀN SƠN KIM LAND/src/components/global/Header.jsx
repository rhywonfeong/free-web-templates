import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import { Button } from '../ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0B2D72]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-serif font-semibold text-xl md:text-2xl tracking-tight text-white">The Berkley</h1>
          <span className="text-[10px] md:text-xs text-[#C0C0C0] tracking-wider uppercase">Sơn Kim Land • Thảo Điền</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:0933155800" className="hidden md:flex items-center gap-2 text-white hover:text-[#58A0C8] transition-colors">
            <iconify-icon icon="solar:phone-bold"></iconify-icon>
            <span className="text-sm font-medium tracking-wide">0933 155 800</span>
          </a>
          <Button variant="primary" onClick={() => openModal('Header')} className="py-2.5 px-4 text-xs md:text-sm">
            Nhận Tư Vấn
          </Button>
        </div>
      </div>
    </header>
  );
}