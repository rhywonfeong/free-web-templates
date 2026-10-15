import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const checkCookies = () => {
      const accepted = localStorage.getItem('bpa_cookies_accepted');
      if (!accepted) {
        setIsVisible(true);
      }
    };
    
    // Slight delay to ensure it doesn't flash immediately on load
    const timer = setTimeout(checkCookies, 500);
    return () => clearTimeout(timer);
  }, []);

  // Listen for custom event to reopen cookie banner from settings
  useEffect(() => {
    const handleOpenBanner = () => {
      setIsVisible(true);
      setIsClosing(false);
    };
    window.addEventListener('open-cookie-banner', handleOpenBanner);
    return () => window.removeEventListener('open-cookie-banner', handleOpenBanner);
  }, []);

  const handleCookies = (action) => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('bpa_cookies_accepted', action);
    }, 500);
  };

  if (!isVisible && !isClosing) return null;

  return (
    <div className={`fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 transition-transform duration-500 ${isClosing ? 'translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 p-6 flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xl rounded-2xl">
        <div className="text-sm text-neutral-300">
          Používáme cookies k vylepšení vašeho zážitku. Pokračováním souhlasíte
          s jejich použitím.{' '}
          <Link to="/cookies" className="nav-link text-white underline hover:text-[#ccff00]">
            Více informací
          </Link>
          .
        </div>
        <div className="flex flex-shrink-0 gap-3 w-full md:w-auto">
          <button onClick={() => handleCookies('reject')} className="flex-1 md:flex-none px-6 py-2.5 border border-neutral-700 text-white text-xs font-medium hover:bg-neutral-800 transition-colors rounded-full">
            Odmítnout
          </button>
          <button onClick={() => handleCookies('accept')} className="flex-1 md:flex-none px-6 py-2.5 bg-[#ccff00] text-black text-xs font-medium hover:bg-[#b3e600] transition-colors rounded-full">
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}