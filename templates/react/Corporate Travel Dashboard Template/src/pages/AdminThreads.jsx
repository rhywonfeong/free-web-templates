import React, { useState } from 'react';

export default function AdminThreads() {
  const [activeThread, setActiveThread] = useState(0);

  const threads = [
    { 
      sender: 'Marriott Concierge', 
      trip: 'Berlin Sales Kickoff',
      subject: 'Group booking confirmation & details', 
      preview: 'We have secured the 5 rooms under the corporate block. Attached is the final folio...',
      time: '10:42 AM',
      unread: true,
      tag: 'Vendor'
    },
    { 
      sender: 'Emma W.', 
      trip: 'NYC Client Tour',
      subject: 'Can we change my flight to a day earlier?', 
      preview: 'Hey team, the client wants to meet on Monday morning instead. Can we adjust...',
      time: 'Yesterday',
      unread: false,
      tag: 'Internal'
    },
    { 
      sender: 'Delta Air Lines', 
      trip: 'Q4 Executive Offsite',
      subject: 'Flight Schedule Change DL492', 
      preview: 'Your upcoming flight has been changed by 45 minutes. Please review the new itinerary.',
      time: 'Oct 10',
      unread: false,
      tag: 'Automated'
    }
  ];

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-2xl border border-stone-200/60 shadow-sm overflow-hidden flex flex-col md:flex-row">
      
      {/* Threads List Sidebar */}
      <div className="w-full md:w-80 border-r border-stone-200/60 flex flex-col bg-[#FDFBF7]/50">
        <div className="p-4 border-b border-stone-200/60">
          <h2 className="text-sm font-semibold text-stone-900 tracking-tight flex justify-between items-center">
            Active Threads
            <span className="px-2 py-0.5 bg-stone-900 text-stone-50 rounded-full text-xs">1 New</span>
          </h2>
          <div className="mt-3 relative">
            <iconify-icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"></iconify-icon>
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-stone-200 rounded-xl text-sm outline-none focus:border-stone-400 transition-colors"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {threads.map((thread, i) => (
            <div 
              key={i} 
              onClick={() => setActiveThread(i)}
              className={`p-4 border-b border-stone-100 cursor-pointer transition-colors ${
                activeThread === i ? 'bg-white border-l-2 border-l-stone-900' : 'hover:bg-white/60 border-l-2 border-l-transparent'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`text-sm font-medium ${thread.unread ? 'text-stone-900' : 'text-stone-700'}`}>
                  {thread.sender}
                </span>
                <span className="text-[10px] text-stone-400">{thread.time}</span>
              </div>
              <div className="text-xs font-medium text-stone-600 mb-1 truncate">{thread.subject}</div>
              <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-2">{thread.preview}</p>
              <div className="flex gap-2">
                <span className="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-600 rounded border border-stone-200/60">
                  {thread.trip}
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-stone-50 text-stone-500 rounded border border-stone-200/60">
                  {thread.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Conversation Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        <div className="p-4 sm:p-6 border-b border-stone-200/60 flex justify-between items-start">
          <div>
            <h2 className="text-lg font-medium text-stone-900">{threads[activeThread].subject}</h2>
            <div className="flex items-center gap-3 mt-2 text-sm text-stone-500">
              <span className="flex items-center gap-1.5">
                <iconify-icon icon="solar:routing-2-linear"></iconify-icon>
                {threads[activeThread].trip}
              </span>
              <div className="w-1 h-1 rounded-full bg-stone-300"></div>
              <span>{threads[activeThread].sender}</span>
            </div>
          </div>
          <div className="flex gap-2 hidden sm:flex">
            <button className="p-2 border border-stone-200 text-stone-600 rounded-xl hover:bg-stone-50 transition-colors">
              <iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
            </button>
            <button className="p-2 border border-stone-200 text-stone-600 rounded-xl hover:bg-stone-50 transition-colors">
              <iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-[#FDFBF7]/30">
          {/* Mock Conversation View */}
          <div className="flex gap-4 max-w-3xl">
            <div className="w-8 h-8 rounded-full bg-stone-200 flex-shrink-0 flex items-center justify-center text-xs font-medium text-stone-600 mt-1">
              {threads[activeThread].sender.charAt(0)}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-stone-900">{threads[activeThread].sender}</span>
                <span className="text-xs text-stone-400">{threads[activeThread].time}</span>
              </div>
              <div className="p-4 bg-white border border-stone-200/60 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                {threads[activeThread].preview}
                {"\n\n"}
                Please let me know if you need any adjustments to this itinerary. We are happy to accommodate changes up to 48 hours before arrival.
                {"\n\n"}
                Best regards,
                {"\n"}
                Support Team
              </div>
            </div>
          </div>
          
          {/* Agent Action Mock */}
          <div className="flex gap-4 max-w-3xl ml-12">
            <div className="w-6 h-6 rounded-lg bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700 mt-1">
              <iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-medium text-emerald-700 uppercase tracking-wider">Agent Sync</span>
                <span className="text-xs text-stone-400">Just now</span>
              </div>
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-sm text-stone-700">
                <p className="mb-2 font-medium">Suggested Actions:</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-medium text-stone-700 shadow-sm hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                    Draft confirmation reply
                  </button>
                  <button className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-medium text-stone-700 shadow-sm hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                    Update itinerary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 border-t border-stone-200/60 bg-white">
          <div className="relative">
            <textarea 
              rows="3" 
              placeholder="Reply to thread..."
              className="w-full p-4 pr-12 bg-stone-50 border border-stone-200 rounded-2xl text-sm outline-none focus:bg-white focus:border-stone-400 transition-colors resize-none"
            ></textarea>
            <button className="absolute bottom-4 right-4 p-2 bg-stone-900 text-stone-50 rounded-xl hover:bg-stone-800 transition-colors shadow-sm">
              <iconify-icon icon="solar:plain-bold" width="18"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}