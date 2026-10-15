import React from 'react';
import { useModal } from '../../context/ModalContext';

export function FloatingActions() {
  const { openModal } = useModal();

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:flex flex-col gap-4">
        <a 
          href="https://zalo.me/0902345678" 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-white text-[#0068FF] shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-gentle-bounce"
        >
          <iconify-icon icon="simple-icons:zalo" class="text-3xl"></iconify-icon>
        </a>
        <a 
          href="tel:0902345678" 
          className="w-14 h-14 rounded-full bg-[#58A0C8] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-gentle-bounce"
          style={{ animationDelay: '4s' }}
        >
          <iconify-icon icon="solar:phone-bold" class="text-2xl"></iconify-icon>
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0B2D72] border-t border-[#58A0C8]/30 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] pb-safe">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex flex-col">
            <span className="text-white font-serif font-semibold text-sm">The Berkley</span>
            <span className="text-[#C0C0C0] text-[10px]">Còn 85 căn cuối cùng</span>
          </div>
          <button 
            onClick={() => openModal('Mobile Bar')}
            className="bg-[#58A0C8] text-white px-6 py-2.5 rounded text-sm font-medium animate-pulse-ring"
          >
            Nhận Báo Giá
          </button>
        </div>
      </div>
    </>
  );
}