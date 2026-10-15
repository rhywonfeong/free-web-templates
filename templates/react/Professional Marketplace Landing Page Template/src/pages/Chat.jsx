import React, { useState } from 'react';
import { CHAT_HISTORY } from '../data/mockData';
import { Input } from '../components/ui/Input';

export default function Chat() {
  const [messages, setMessages] = useState(CHAT_HISTORY);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, {
      id: Date.now(),
      sender: 'me',
      text: input,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }]);
    setInput('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[calc(100vh-80px)] flex">
      <div className="flex w-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-4 h-[700px]">
        
        {/* Sidebar */}
        <div className="w-80 border-r border-slate-200 flex flex-col hidden md:flex">
          <div className="p-4 border-b border-slate-100">
            <h2 className="font-semibold text-lg text-slate-900 mb-4 tracking-tight">Messages</h2>
            <Input placeholder="Search messages..." icon={<iconify-icon icon="solar:magnifer-linear"></iconify-icon>} />
          </div>
          <div className="overflow-y-auto flex-1 p-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-colors ${i === 1 ? 'bg-indigo-50' : 'hover:bg-slate-50'}`}>
                <div className="relative shrink-0">
                  <img src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80`} className="w-12 h-12 rounded-full object-cover" alt="User" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-medium text-slate-900 truncate">Sarah Jenkins</h4>
                    <span className="text-xs text-slate-400">11:05 AM</span>
                  </div>
                  <p className={`text-sm truncate ${i === 1 ? 'text-indigo-600 font-medium' : 'text-slate-500'}`}>
                    That sounds right up my alley...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-slate-50/50">
          {/* Chat Header */}
          <div className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-3">
              <div className="md:hidden">
                <button className="text-slate-500 p-2"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
              </div>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" className="w-10 h-10 rounded-full object-cover hidden sm:block" alt="Sarah" />
              <div>
                <h3 className="font-medium text-slate-900">Sarah Jenkins</h3>
                <span className="text-xs text-green-500 font-medium">Online</span>
              </div>
            </div>
            <div className="flex gap-2 text-slate-400">
              <button className="p-2 hover:text-indigo-600 transition-colors"><iconify-icon icon="solar:phone-linear" width="20"></iconify-icon></button>
              <button className="p-2 hover:text-indigo-600 transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => {
              const isMe = msg.sender === 'me';
              return (
                <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] ${isMe ? 'order-2' : 'order-1'}`}>
                    <div className={`px-5 py-3 rounded-2xl text-sm ${
                      isMe 
                        ? 'bg-indigo-600 text-white rounded-br-sm shadow-sm' 
                        : 'bg-white text-slate-700 border border-slate-200 rounded-bl-sm shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                    <div className={`text-xs text-slate-400 mt-1 ${isMe ? 'text-right' : 'text-left'}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-200 shrink-0">
            <form onSubmit={handleSend} className="flex items-end gap-2">
              <button type="button" className="p-3 text-slate-400 hover:text-indigo-600 transition-colors shrink-0">
                <iconify-icon icon="solar:paperclip-linear" width="24"></iconify-icon>
              </button>
              <div className="flex-1 bg-slate-50 rounded-xl border border-slate-200 p-2 flex items-end focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-transparent border-none focus:ring-0 resize-none max-h-32 text-sm text-slate-900 placeholder:text-slate-400 p-1 outline-none"
                  rows="1"
                  onKeyDown={(e) => {
                    if(e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(e);
                    }
                  }}
                />
                <button type="submit" className="p-2 bg-indigo-600 text-white rounded-lg shrink-0 ml-2 hover:bg-indigo-700 transition-colors shadow-sm">
                  <iconify-icon icon="solar:plain-bold" width="20"></iconify-icon>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}