import React, { useState, useRef, useEffect } from 'react';

// --- MOCK DATA & LOGIC ---
const INITIAL_MESSAGE = {
  id: 'init-1',
  text: "Good evening. How may I assist you today?",
  sender: 'ai'
};

const getMockResponse = (input) => {
  const lowerInput = input.toLowerCase();
  if (lowerInput.includes('pricing') || lowerInput.includes('cost')) {
    return "Our services are tailored to individual client needs. I would be happy to connect you with an advisor to discuss a bespoke arrangement.";
  }
  if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
    return "Hello. It is a pleasure to have you here. What can I help you find?";
  }
  if (lowerInput.includes('contact')) {
    return "You can reach our dedicated concierge team directly at concierge@example.com or via phone at +1 (800) 555-0199.";
  }
  return "I understand. I have noted your request and our team will review it shortly. Is there anything else you require at this moment?";
};

// --- COMPONENTS ---

const TypingIndicator = () => (
  <div className="flex items-center space-x-1.5 p-4 bg-transparent w-fit rounded-2xl opacity-70">
    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
  </div>
);

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now().toString(), text: inputValue.trim(), sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay for realism
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        text: getMockResponse(userMsg.text),
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1500 + Math.random() * 1000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      
      {/* Chat Window Container */}
      <div 
        className={`
          absolute bottom-16 left-0 w-[340px] sm:w-[380px] h-[500px] max-h-[80vh]
          bg-[#0a0e17]/85 backdrop-blur-xl
          border border-white/[0.06] rounded-2xl
          shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]
          flex flex-col overflow-hidden
          origin-bottom-left
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.04] bg-[#0a0e17]/50">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.5)]"></div>
            <h3 className="text-sm font-medium tracking-tight text-slate-200">Concierge</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-500 hover:text-slate-300 transition-colors duration-200 focus:outline-none"
            aria-label="Close chat"
          >
            <iconify-icon icon="solar:close-linear" width="20" height="20"></iconify-icon>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`
                  max-w-[85%] px-4 py-3 text-sm leading-relaxed
                  ${msg.sender === 'user' 
                    ? 'bg-white/[0.03] border border-white/[0.05] text-slate-200 rounded-2xl rounded-tr-sm' 
                    : 'bg-transparent text-slate-400 pr-6'}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <TypingIndicator />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#0a0e17]/80 border-t border-white/[0.04]">
          <form 
            onSubmit={handleSubmit}
            className="relative flex items-center bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden focus-within:border-white/[0.15] focus-within:bg-white/[0.04] transition-all duration-300"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything..."
              className="w-full bg-transparent px-4 py-3.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="absolute right-2 p-2 text-slate-500 hover:text-slate-300 disabled:opacity-50 disabled:hover:text-slate-500 transition-colors duration-200 flex items-center justify-center"
            >
              <iconify-icon icon="solar:arrow-right-linear" width="20" height="20"></iconify-icon>
            </button>
          </form>
        </div>
      </div>

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative flex items-center justify-center w-14 h-14 rounded-full
          bg-[#0a0e17] border border-white/[0.08]
          text-slate-300 hover:text-white
          shadow-[0_8px_20px_-6px_rgba(0,0,0,0.8)]
          hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.9),0_0_20px_-5px_rgba(255,255,255,0.05)]
          transition-all duration-500 ease-out hover:scale-105 z-10
        `}
        aria-label="Toggle chat"
      >
        <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500`}></div>
        <div className={`transition-transform duration-500 absolute flex items-center justify-center ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
          <iconify-icon icon="solar:stars-linear" width="24" height="24"></iconify-icon>
        </div>
        <div className={`transition-transform duration-500 absolute flex items-center justify-center ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
           <iconify-icon icon="solar:close-linear" width="24" height="24"></iconify-icon>
        </div>
      </button>

    </div>
  );
};

// --- MAIN APP (Simulated Website Context) ---
export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030712] selection:bg-indigo-500/30">
      
      {/* Abstract Background Elements for aesthetic */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[100px]"></div>
      </div>

      {/* Hero Content representing the host website */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">Introducing Concierge</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">
          Elevated digital <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">experiences.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed">
          Discover a new standard of personalized interaction. Our silent, sophisticated 
          AI assistant is available in the corner, waiting to assist you with unparalleled discretion.
        </p>

        <div className="flex items-center space-x-4">
          <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors">
            Explore Services
          </button>
          <button className="px-6 py-3 rounded-full bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">
            Our Philosophy
          </button>
        </div>
      </main>

      {/* The Chat Widget */}
      <ChatWidget />
    </div>
  );
}