import React, { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-[#121212] border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-[slideDown_0.2s_ease-out]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0A0A0A]">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <iconify-icon icon="solar:close-circle-linear" width="24" height="24"></iconify-icon>
          </button>
        </div>
        <div className="p-6 bg-[#121212]">
          {children}
        </div>
      </div>
    </div>
  );
}