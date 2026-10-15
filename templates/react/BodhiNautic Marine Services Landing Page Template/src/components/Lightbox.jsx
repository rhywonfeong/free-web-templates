import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Close lightbox on route change
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleImageClick = (e) => {
      // Check if clicked element is an image
      if (e.target.tagName.toLowerCase() === "img") {
        
        // Skip logos in navigation or footer to prevent them from opening in full screen
        if (
          e.target.closest('header') || 
          e.target.closest('nav') ||
          e.target.closest('footer') ||
          e.target.closest('.site-navigation__brand') ||
          e.target.closest('.private-logo') ||
          e.target.closest('.hero-brand') ||
          e.target.closest('.site-footer__logo') ||
          e.target.closest('.language-logo') ||
          e.target.closest('button') ||
          e.target.closest('a')
        ) {
          return;
        }

        // It is an image we should zoom
        e.preventDefault(); // Prevent default action just in case
        setImgSrc(e.target.src);
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleImageClick);
    return () => document.removeEventListener("click", handleImageClick);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-900/95 cursor-zoom-out p-4 md:p-8 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
      style={{ animation: 'fadeIn 0.2s ease-out' }}
    >
      <img 
        src={imgSrc} 
        alt="Vista a pantalla completa" 
        className="max-w-full max-h-full object-contain cursor-default shadow-2xl rounded-sm"
        onClick={(e) => e.stopPropagation()} 
        style={{ animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
      />
      <button 
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center text-3xl transition-all"
        onClick={() => setIsOpen(false)}
        aria-label="Cerrar vista completa"
      >
        &times;
      </button>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
