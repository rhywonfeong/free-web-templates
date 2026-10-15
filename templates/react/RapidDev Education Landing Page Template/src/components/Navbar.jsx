import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-sm bg-white/90 glass-panel' : 'bg-transparent glass-panel'
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center group-hover:bg-[#E76F9B] group-hover:text-white transition-colors duration-300">
              <iconify-icon icon="solar:code-square-linear" width="18" strokeWidth="1.5"></iconify-icon>
            </div>
            <span className="font-semibold text-xl tracking-tight text-[#333333]">RapidDev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-medium text-gray-500 hover:text-[#E76F9B] transition-colors">Why No-Code?</a>
            <a href="#solution" className="text-sm font-medium text-gray-500 hover:text-[#E76F9B] transition-colors">Bootcamps</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-500 hover:text-[#E76F9B] transition-colors">Student Success</a>
            <a href="#faq" className="text-sm font-medium text-gray-500 hover:text-[#E76F9B] transition-colors">FAQ</a>
            <a href="#booking" className="text-sm font-medium text-gray-500 hover:text-[#E76F9B] transition-colors">Apply</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#cta" className="hidden md:flex items-center gap-2 bg-[#E76F9B] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#d45c88] hover:shadow-lg hover:shadow-[#FDE2E4] transition-all duration-300 hover:-translate-y-0.5 text-white">
              Start Learning
              <iconify-icon icon="solar:arrow-right-linear" width="16" strokeWidth="1.5"></iconify-icon>
            </a>
            <button onClick={toggleMenu} className="md:hidden text-[#333333] flex items-center justify-center p-1">
              <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24" strokeWidth="1.5"></iconify-icon>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden bg-white/95 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <a href="#problem" onClick={toggleMenu} className="text-2xl font-semibold tracking-tight text-[#333333] hover:text-[#E76F9B]">Why No-Code?</a>
        <a href="#solution" onClick={toggleMenu} className="text-2xl font-semibold tracking-tight text-[#333333] hover:text-[#E76F9B]">Bootcamps</a>
        <a href="#testimonials" onClick={toggleMenu} className="text-2xl font-semibold tracking-tight text-[#333333] hover:text-[#E76F9B]">Student Success</a>
        <a href="#faq" onClick={toggleMenu} className="text-2xl font-semibold tracking-tight text-[#333333] hover:text-[#E76F9B]">FAQ</a>
        <a href="#booking" onClick={toggleMenu} className="text-2xl font-semibold tracking-tight text-[#333333] hover:text-[#E76F9B]">Apply</a>
        <a href="#cta" onClick={toggleMenu} className="mt-4 bg-[#E76F9B] px-8 py-3 rounded-full text-base font-medium shadow-lg shadow-[#FDE2E4] text-white">Start your free trial</a>
      </div>
    </>
  );
}