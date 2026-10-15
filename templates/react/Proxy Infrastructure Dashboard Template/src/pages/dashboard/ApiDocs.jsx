import React, { useState } from 'react';
import clsx from 'clsx';

export default function ApiDocs() {
  const [showToken, setShowToken] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState('js');
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);
  const [demoResult, setDemoResult] = useState(null);

  const token = "sk_live_51MabcDeF123GHIjkLMnoPQRstUVwxYZ";
  const baseUrl = "https://rest.datshop.com.tr";

  const runDemo = () => {
    setIsLoadingDemo(true);
    setDemoResult(null);
    // Simulate network latency
    setTimeout(() => {
      setDemoResult({
        status: "success",
        timestamp: new Date().toISOString(),
        data: {
          "HAS": { price: 2450.85, change: "+0.45%" },
          "GRAM": { price: 2450.85, change: "+0.45%" },
          "CEYREK": { price: 4085.00, change: "-0.15%" }
        }
      });
      setIsLoadingDemo(false);
    }, 800);
  };

  const copyToken = () => {
    // In a real app, use navigator.clipboard
    alert("Token kopyalandı!");
  };

  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <header className="border-b border-white/5 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">API Referansı</h1>
        <p className="text-gray-400">Hasfiyat finansal veri uç noktaları ve bağlantı rehberi.</p>
      </header>

      {/* Authentication Block */}
      <div className="bg-[#121212] border border-white/5 rounded-xl p-6 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-lg font-medium text-white mb-1">Kimlik Doğrulama</h2>
          <p className="text-sm text-gray-400">API isteklerinizde Authorization Header (Bearer Token) veya Socket.IO auth objesi ile bu anahtarı kullanın.</p>
        </div>
        <div className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 p-2 rounded-lg shrink-0 w-full sm:w-auto">
          <code className="text-[#E1B552] font-mono text-sm px-3 select-all">
            {showToken ? token : 'sk_live_••••••••••••••••••••••••••••'}
          </code>
          <div className="flex items-center gap-1 border-l border-white/10 pl-2 ml-1">
            <button 
              onClick={() => setShowToken(!showToken)}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors"
            >
              <iconify-icon icon={showToken ? "solar:eye-closed-linear" : "solar:eye-linear"} width="18" height="18"></iconify-icon>
            </button>
            <button 
              onClick={copyToken}
              className="p-1.5 text-gray-400 hover:text-[#E1B552] hover:bg-[#E1B552]/10 rounded transition-colors"
            >
              <iconify-icon icon="solar:copy-linear" width="18" height="18"></iconify-icon>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-10">
        {/* Left Content Area */}
        <div className="flex-1 space-y-12">
          
          {/* Base URL */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">REST Base URL</h2>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 font-mono text-sm text-gray-300">
              {baseUrl}
            </div>
          </section>

          {/* Endpoints List */}
          <section>
            <h2 className="text-xl font-medium text-white mb-6">Uç Noktalar (Endpoints)</h2>
            
            <div className="space-y-6">
              {/* Endpoint 1 */}
              <div className="bg-[#121212] border border-white/5 rounded-xl overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-[#1A1A1A]">
                  <span className="px-2.5 py-1 text-xs font-bold bg-blue-500/20 text-blue-400 rounded">GET</span>
                  <code className="text-white font-mono font-medium">/api/prices</code>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-6">Tüm güncel altın ve döviz fiyatlarını döndürür. İsteğe bağlı olarak belirli sembolleri filtreleyebilirsiniz.</p>
                  
                  <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Query Parametreleri</h3>
                  <table className="w-full text-left text-sm mb-0">
                    <thead className="text-gray-400 text-xs border-b border-white/5">
                      <tr>
                        <th className="pb-2 font-medium">Parametre</th>
                        <th className="pb-2 font-medium">Tip</th>
                        <th className="pb-2 font-medium">Açıklama</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 font-mono text-gray-300">symbols</td>
                        <td className="py-3 font-mono text-xs text-[#E1B552]">string</td>
                        <td className="py-3 text-gray-400">Virgülle ayrılmış sembol listesi (Örn: HAS,GRAM). Boş bırakılırsa tümünü getirir.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Endpoint 2 */}
              <div className="bg-[#121212] border border-white/5 rounded-xl overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-[#1A1A1A]">
                  <span className="px-2.5 py-1 text-xs font-bold bg-blue-500/20 text-blue-400 rounded">GET</span>
                  <code className="text-white font-mono font-medium">/api/prices/:symbol</code>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-400">Sadece belirtilen sembolün (örn: /api/prices/HAS) detaylı fiyat verisini ve günlük değişim istatistiklerini döndürür.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Code Area */}
        <div className="w-full xl:w-[500px] shrink-0">
          <div className="sticky top-24 space-y-6">
            
            {/* Multi-language Code Switcher */}
            <div className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col">
              <div className="flex items-center overflow-x-auto border-b border-white/5 bg-[#0A0A0A] no-scrollbar">
                {[
                  { id: 'js', label: 'JavaScript' },
                  { id: 'node', label: 'Node.js' },
                  { id: 'py', label: 'Python' },
                  { id: 'php', label: 'PHP' },
                  { id: 'curl', label: 'cURL' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCodeTab(tab.id)}
                    className={clsx(
                      "px-4 py-3 text-xs font-medium transition-colors whitespace-nowrap border-b-2",
                      activeCodeTab === tab.id 
                        ? "text-[#E1B552] border-[#E1B552] bg-white/5" 
                        : "text-gray-500 border-transparent hover:text-gray-300"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="p-5 bg-[#0A0A0A]/80 font-mono text-xs leading-loose overflow-x-auto min-h-[250px]">
                {activeCodeTab === 'js' && (
                  <pre>
                    <code>
                      <span className="text-purple-400">fetch</span>(<span className="text-green-400">'{baseUrl}/api/prices?symbols=HAS,GRAM'</span>, {'{\n'}
                      {'  '}headers: {'{\n'}
                      {'    '}<span className="text-green-400">'Authorization'</span>: <span className="text-blue-400">`Bearer sk_live_...`</span>{' \n'}
                      {'  }'}{' \n'}
                      {'}'}){' \n'}
                      .<span className="text-blue-400">then</span>(res =&gt; res.<span className="text-blue-400">json</span>()){' \n'}
                      .<span className="text-blue-400">then</span>(console.log);
                    </code>
                  </pre>
                )}
                {activeCodeTab === 'node' && (
                  <pre>
                    <code>
                      <span className="text-purple-400">const</span> axios = <span className="text-blue-400">require</span>(<span className="text-green-400">'axios'</span>);<br/><br/>
                      <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> axios.<span className="text-blue-400">get</span>(<span className="text-green-400">'{baseUrl}/api/prices'</span>, {'{\n'}
                      {'  '}headers: {'{\n'}
                      {'    '}<span className="text-green-400">'Authorization'</span>: <span className="text-green-400">'Bearer sk_live_...'</span>{' \n'}
                      {'  }'}{' \n'}
                      {'}'});<br/>
                      console.<span className="text-blue-400">log</span>(response.data);
                    </code>
                  </pre>
                )}
                {activeCodeTab === 'py' && (
                  <pre>
                    <code>
                      <span className="text-purple-400">import</span> requests<br/><br/>
                      headers = {'{\n'}
                      {'  '}<span className="text-green-400">'Authorization'</span>: <span className="text-green-400">'Bearer sk_live_...'</span>{' \n'}
                      {'}'}<br/>
                      response = requests.<span className="text-blue-400">get</span>(<span className="text-green-400">'{baseUrl}/api/prices'</span>, headers=headers)<br/>
                      <span className="text-blue-400">print</span>(response.<span className="text-blue-400">json</span>())
                    </code>
                  </pre>
                )}
                {activeCodeTab === 'php' && (
                  <pre>
                    <code>
                      <span className="text-gray-400">&lt;?php</span><br/>
                      <span className="text-blue-400">$ch</span> = <span className="text-purple-400">curl_init</span>();<br/>
                      <span className="text-purple-400">curl_setopt</span>(<span className="text-blue-400">$ch</span>, CURLOPT_URL, <span className="text-green-400">"{baseUrl}/api/prices"</span>);<br/>
                      <span className="text-purple-400">curl_setopt</span>(<span className="text-blue-400">$ch</span>, CURLOPT_HTTPHEADER, <span className="text-purple-400">array</span>(<br/>
                      {'  '}<span className="text-green-400">"Authorization: Bearer sk_live_..."</span><br/>
                      ));<br/>
                      <span className="text-blue-400">$response</span> = <span className="text-purple-400">curl_exec</span>(<span className="text-blue-400">$ch</span>);<br/>
                      <span className="text-purple-400">curl_close</span>(<span className="text-blue-400">$ch</span>);
                    </code>
                  </pre>
                )}
                {activeCodeTab === 'curl' && (
                  <pre>
                    <code>
                      <span className="text-[#E1B552]">curl</span> -X GET \ <br/>
                      {'  '}'{baseUrl}/api/prices' \<br/>
                      {'  '}-H <span className="text-green-400">'Authorization: Bearer sk_live_...'</span>
                    </code>
                  </pre>
                )}
              </div>
            </div>

            {/* Live Demo Block */}
            <div className="bg-[#121212] border border-[#E1B552]/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(225,181,82,0.1)]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#1A1A1A]">
                <span className="text-sm font-semibold text-white flex items-center gap-2">
                  <iconify-icon icon="solar:play-circle-bold-duotone" className="text-[#E1B552]" width="20" height="20"></iconify-icon>
                  Canlı Demo Çalıştır
                </span>
                <button 
                  onClick={runDemo}
                  disabled={isLoadingDemo}
                  className="bg-[#E1B552] text-[#000000] text-xs font-bold px-3 py-1.5 rounded-md hover:bg-[#cfa548] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoadingDemo ? 'İstek Atılıyor...' : 'İstek Gönder'}
                </button>
              </div>
              <div className="p-4 bg-[#0A0A0A] font-mono text-xs leading-relaxed min-h-[180px] relative">
                {!isLoadingDemo && !demoResult && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    GET /api/prices?symbols=HAS,GRAM,CEYREK
                  </div>
                )}
                
                {isLoadingDemo && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#E1B552] gap-3">
                    <iconify-icon icon="solar:spinner-bold-duotone" width="24" height="24" className="animate-spin"></iconify-icon>
                    <span className="text-xs text-gray-400 font-sans">Sunucuya bağlanılıyor...</span>
                  </div>
                )}

                {demoResult && !isLoadingDemo && (
                  <pre className="text-gray-300 animate-[fadeIn_0.3s_ease-out] overflow-x-auto">
                    <code>
                      {JSON.stringify(demoResult, null, 2).replace(/"(.*?)":/g, (match) => {
                        return `<span class="text-blue-400">${match}</span>`;
                      }).replace(/"(success|.*T.*Z|\+.*|-.*)"/g, (match) => {
                        return `<span class="text-green-400">${match}</span>`;
                      }).replace(/(\d+\.\d+)/g, (match) => {
                         return `<span class="text-[#E1B552]">${match}</span>`;
                      })}
                    </code>
                  </pre>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}