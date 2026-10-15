import { useState } from 'react';
import clsx from 'clsx';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Olá! Sou o assistente Forgee. Posso ajudar com status de projetos, prazos e alocação de equipe. O que você precisa saber hoje?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: 'Analisando os dados do projeto... O TCO-2026.04 está atualmente na fase de campo, sem atrasos previstos.' 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50",
          isOpen ? "bg-[#252729] text-white scale-90" : "bg-[#8FFF00] text-[#1E2124] hover:scale-105 hover:shadow-xl"
        )}
      >
        <iconify-icon icon={isOpen ? "solar:close-circle-linear" : "solar:magic-stick-3-linear"} style={{ fontSize: '28px' }}></iconify-icon>
      </button>

      {/* Chat Window */}
      <div
        className={clsx(
          "fixed bottom-28 right-8 w-[380px] bg-white rounded-2xl shadow-2xl border border-black/5 flex flex-col transition-all duration-300 origin-bottom-right z-40 overflow-hidden",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10 pointer-events-none"
        )}
        style={{ height: '500px', maxHeight: 'calc(100vh - 120px)' }}
      >
        {/* Header */}
        <div className="bg-[#252729] p-4 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8FFF00]/20 flex items-center justify-center text-[#8FFF00]">
              <iconify-icon icon="solar:magic-stick-3-bold" style={{ fontSize: '18px' }}></iconify-icon>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Forgee AI</h3>
              <p className="text-xs text-white/60">Claude Haiku Engine</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
             <iconify-icon icon="solar:minimize-square-2-linear" style={{ fontSize: '20px' }}></iconify-icon>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F4F6F8]">
          {messages.map((msg, idx) => (
            <div key={idx} className={clsx("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
              <div 
                className={clsx(
                  "max-w-[85%] rounded-2xl px-4 py-3 text-sm",
                  msg.role === 'user' 
                    ? "bg-[#252729] text-white rounded-tr-sm" 
                    : "bg-white border border-black/5 text-[#303030] shadow-sm rounded-tl-sm"
                )}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-black/5 flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte sobre um projeto..."
            className="flex-1 bg-[#F4F6F8] border border-transparent focus:border-[#C8D3DC] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#303030] placeholder-[#8C9BAA] transition-colors"
          />
          <button 
            type="submit"
            disabled={!input.trim()}
            className="w-11 h-11 rounded-xl bg-[#8FFF00] text-[#1E2124] flex items-center justify-center disabled:opacity-50 disabled:bg-[#E8EDF2] disabled:text-[#8C9BAA] transition-colors"
          >
            <iconify-icon icon="solar:plain-2-bold" style={{ fontSize: '20px' }}></iconify-icon>
          </button>
        </form>
      </div>
    </>
  );
}