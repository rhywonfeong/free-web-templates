import React, { useState } from 'react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-dark border border-dark rounded-xl shadow-2xl w-[360px] h-[480px] mb-4 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-[#4A4A4A]/30 p-4 border-b border-dark flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-inverted font-semibold text-sm">Assistente Conatex</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-muted-dark hover:text-inverted">
              <iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-slate flex items-center justify-center shrink-0">
                <iconify-icon icon="solar:magic-stick-3-linear" width="16" className="text-inverted"></iconify-icon>
              </div>
              <div className="bg-slate text-inverted p-3 rounded-lg rounded-tl-none">
                Olá Eduardo. Vi que a NF-e 4592 da Braskem está próxima do vencimento. Deseja que eu envie um lembrete para a equipe?
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-dark">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Pergunte ao assistente..." 
                className="w-full bg-[#2A2A2A] border border-dark rounded-full py-2.5 pl-4 pr-10 text-sm text-inverted placeholder-muted-dark focus:border-accent outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-accent rounded-full flex items-center justify-center text-dark">
                <iconify-icon icon="solar:plain-2-bold" width="14"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 ${isOpen ? 'bg-red-500 text-white' : 'bg-accent text-dark'}`}
      >
        <iconify-icon icon={isOpen ? 'solar:close-linear' : 'solar:chat-round-dots-bold'} width="28"></iconify-icon>
      </button>
    </div>
  );
}