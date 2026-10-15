import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16">
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#E1B552]/20 text-xs font-medium text-[#E1B552] mb-6 shadow-[0_0_15px_rgba(225,181,82,0.1)]">
          <iconify-icon icon="solar:bolt-circle-bold" width="16" height="16"></iconify-icon>
          Kuyumculuk Standartlarında %99.9 Kesintisiz
        </div>
        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
          Gerçek Zamanlı <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E1B552] to-[#FFE082]">Hasfiyat API</span>
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Has Altın, Gram, Çeyrek ve Ons fiyatlarında milisaniye hassasiyetiyle güncellenen canlı veri akışı. REST API ve Socket.IO altyapısıyla uygulamanıza anında entegre edin.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-full sm:w-auto bg-[#E1B552] text-[#000000] font-semibold px-8 py-4 rounded-lg hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(225,181,82,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Hemen Başla
            <iconify-icon icon="solar:arrow-right-linear" width="20" height="20"></iconify-icon>
          </button>
          <button 
            onClick={() => navigate('/dashboard/api-docs')}
            className="w-full sm:w-auto bg-white/5 text-white font-medium px-8 py-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <iconify-icon icon="solar:document-text-linear" width="20" height="20"></iconify-icon>
            Dokümanları İncele
          </button>
        </div>
        
        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:check-circle-bold" className="text-[#E1B552]" width="18" height="18"></iconify-icon>
            Socket.IO & WebSocket
          </div>
          <div className="flex items-center gap-2">
             <iconify-icon icon="solar:check-circle-bold" className="text-[#E1B552]" width="18" height="18"></iconify-icon>
            Milisaniyelik Gecikme
          </div>
        </div>
      </div>

      <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
        <div className="relative w-full h-80 bg-[#0A0A0A] rounded-2xl border border-[#E1B552]/20 shadow-[0_0_50px_rgba(225,181,82,0.1)] overflow-hidden font-mono text-xs flex flex-col group">
          {/* Terminal Header */}
          <div className="h-10 bg-[#151515] border-b border-white/5 flex items-center px-4 gap-2 relative">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 text-gray-500 font-medium tracking-wider">
              Socket.IO / Live Feed
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="flex-1 p-5 overflow-hidden relative bg-gradient-to-b from-transparent to-[#0A0A0A]/50">
            <pre className="text-gray-300 leading-loose">
              <code>
                <span className="text-gray-500">{"// Kuyumcu ekranları için sürekli akan veri..."}</span><br/>
                <span className="text-purple-400">socket</span>.<span className="text-blue-400">on</span>(<span className="text-green-400">'gold_prices'</span>, (data) =&gt; {"{"}<br/>
                {"  "}console.<span className="text-blue-400">log</span>(data);<br/>
                {"}"});<br/><br/>
                <span className="text-gray-500">{"// Gelen Yanıt:"}</span><br/>
                {"{"}<br/>
                {"  "}<span className="text-blue-400">"symbol"</span>: <span className="text-green-400">"HAS"</span>,<br/>
                {"  "}<span className="text-blue-400">"type"</span>: <span className="text-green-400">"Has Altın"</span>,<br/>
                {"  "}<span className="text-blue-400">"buy"</span>: <span className="text-[#E1B552] animate-pulse">2450.85</span>,<br/>
                {"  "}<span className="text-blue-400">"sell"</span>: <span className="text-[#E1B552] animate-pulse" style={{animationDelay: '0.2s'}}>2455.10</span>,<br/>
                {"  "}<span className="text-blue-400">"timestamp"</span>: <span className="text-green-400">"14:32:01.045"</span><br/>
                {"}"}<span className="inline-block w-2 h-4 bg-[#E1B552] ml-1 animate-ping"></span>
              </code>
            </pre>
            
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}