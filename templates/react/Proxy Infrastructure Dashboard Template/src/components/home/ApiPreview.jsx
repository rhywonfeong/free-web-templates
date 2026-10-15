import React, { useState } from 'react';
import clsx from 'clsx';

export default function ApiPreview() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('curl');

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 max-w-5xl mx-auto w-full my-12" id="docs">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Saniyeler İçinde Entegre Edin</h2>
        <p className="text-gray-400">Tüm altın piyasasına yüksek hızlı tek bir uç nokta (endpoint) üzerinden erişin.</p>
      </div>

      <div className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0A0A0A]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveTab('curl')}
              className={clsx(
                "text-xs font-medium px-3 py-1 rounded-md transition-colors",
                activeTab === 'curl' ? "bg-white/10 text-[#E1B552]" : "text-gray-500 hover:text-gray-300"
              )}
            >
              cURL
            </button>
            <button 
              onClick={() => setActiveTab('node')}
              className={clsx(
                "text-xs font-medium px-3 py-1 rounded-md transition-colors",
                activeTab === 'node' ? "bg-white/10 text-[#E1B552]" : "text-gray-500 hover:text-gray-300"
              )}
            >
              Node.js
            </button>
          </div>

          <button 
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs bg-white/5 px-2 py-1 rounded"
          >
            {copied ? (
              <>
                <iconify-icon icon="solar:check-read-linear" width="14" height="14" className="text-green-400"></iconify-icon>
                Kopyalandı!
              </>
            ) : (
              <>
                <iconify-icon icon="solar:copy-linear" width="14" height="14"></iconify-icon>
                Kopyala
              </>
            )}
          </button>
        </div>

        <div className="p-6 overflow-x-auto bg-[#0A0A0A]/50 font-mono text-sm leading-relaxed">
          {activeTab === 'curl' && (
            <pre>
              <code>
                <span className="text-gray-400"># Has, Gram ve Çeyrek fiyatlarını çekin</span><br/>
                <span className="text-[#E1B552]">curl</span> -X GET \<br/>
                {'  '}'https://rest.datshop.com.tr/api/prices?symbols=HAS,GRAM,CEYREK' \<br/>
                {'  '}-H <span className="text-green-400">'Authorization: Bearer API_ANAHTARINIZ'</span> \<br/>
                {'  '}-H <span className="text-green-400">'Accept: application/json'</span>
              </code>
            </pre>
          )}

          {activeTab === 'node' && (
            <pre>
              <code>
                <span className="text-gray-400">// Native fetch implementasyonu</span><br/>
                <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> fetch(<span className="text-green-400">'https://rest.datshop.com.tr/api/prices?symbols=HAS,GRAM'</span>, {'{\n'}
                {'  '}method: <span className="text-green-400">'GET'</span>,{' \n'}
                {'  '}headers: {'{\n'}
                {'    '}<span className="text-green-400">'Authorization'</span>: <span className="text-blue-400">`Bearer </span><span className="text-[#E1B552]">${'{'}API_KEY{'}'}</span><span className="text-blue-400">`</span>,{' \n'}
                {'    '}<span className="text-green-400">'Accept'</span>: <span className="text-green-400">'application/json'</span>{' \n'}
                {'  }'}{' \n'}
                {'}'});{' \n'}
                <br/>
                <span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> response.<span className="text-blue-400">json</span>();<br/>
                console.<span className="text-blue-400">log</span>(data.prices);
              </code>
            </pre>
          )}
        </div>
      </div>
    </section>
  );
}