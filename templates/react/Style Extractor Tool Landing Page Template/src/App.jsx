import React, { useState, useEffect } from 'react';
import SettingsModal from './components/SettingsModal';
import ToastContainer from './components/ToastContainer';
import { SYSTEM_PROMPT, PROVIDERS } from './utils/constants';
import { generateMarkdown, generateCSS, generateTailwind, generateTokens, highlightSyntax } from './utils/generators';

export default function App() {
    // Application State
    const [view, setView] = useState('hero'); // 'hero', 'loading', 'results'
    const [url, setUrl] = useState('');
    const [extractedData, setExtractedData] = useState(null);
    const [currentTab, setCurrentTab] = useState('markdown');
    
    // Config State
    const [config, setConfig] = useState({ provider: 'anthropic', model: 'claude-3-5-sonnet-20241022', key: '', baseUrl: 'https://api.anthropic.com' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // UI State
    const [toasts, setToasts] = useState([]);

    // Initialize config from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('styleExtractorConfig');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (!parsed.baseUrl && PROVIDERS[parsed.provider]) {
                    parsed.baseUrl = PROVIDERS[parsed.provider].url;
                }
                setConfig({ ...config, ...parsed });
            } catch (e) {
                console.error("Failed to parse config", e);
            }
        }
    }, []);

    // Open modal if no key on mount
    useEffect(() => {
        if (!config.key) {
            setIsModalOpen(true);
        }
    }, [config.key]);

    const showToast = (message, type = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };

    const handleSaveConfig = (newConfig) => {
        setConfig(newConfig);
        localStorage.setItem('styleExtractorConfig', JSON.stringify(newConfig));
        setIsModalOpen(false);
        showToast('Configuration saved', 'success');
    };

    const resetView = () => {
        setView('hero');
        setUrl('');
        setExtractedData(null);
    };

    const extractJSON = (str) => {
        const match = str.match(/\{[\s\S]*\}/);
        return match ? match[0] : null;
    };

    const fetchApi = async (targetUrl) => {
        let endpoint = `${config.baseUrl}/v1/chat/completions`;
        if (endpoint.includes('//v1')) endpoint = endpoint.replace('//v1', '/v1');

        const payload = {
            model: config.model,
            max_tokens: 3000,
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `Analyze the visual design system of: ${targetUrl}\nBased on your knowledge of this website, return only the JSON.` }
            ]
        };

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.key}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`API Error: ${response.status} - ${errText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    };

    const startExtraction = async (targetUrlStr) => {
        if (!config.key) {
            setIsModalOpen(true);
            return;
        }

        let processUrl = targetUrlStr || url;
        if (!processUrl) return;
        processUrl = processUrl.trim();
        if (!processUrl.startsWith('http')) processUrl = 'https://' + processUrl;
        
        try { new URL(processUrl); } catch(e) {
            showToast('Invalid URL format', 'error');
            return;
        }

        setUrl(processUrl);
        setView('loading');

        try {
            const response = await fetchApi(processUrl);
            if (!response) throw new Error("Empty response");
            
            const jsonStr = extractJSON(response);
            if (!jsonStr) throw new Error("Could not parse JSON from response.");
            
            setExtractedData(JSON.parse(jsonStr));
            setCurrentTab('markdown');
            setView('results');
        } catch (error) {
            console.error(error);
            showToast(error.message || 'Extraction failed.', 'error');
            resetView();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') startExtraction();
    };

    const setExample = (exampleUrl) => {
        setUrl(exampleUrl);
        startExtraction(exampleUrl);
    };

    const copyText = (text, label) => {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`Copied ${label}`, 'success');
        }).catch(() => {
            showToast('Failed to copy', 'error');
        });
    };

    const getGeneratedCode = () => {
        if (!extractedData) return '';
        switch(currentTab) {
            case 'markdown': return generateMarkdown(extractedData);
            case 'css': return generateCSS(extractedData);
            case 'tailwind': return generateTailwind(extractedData);
            case 'tokens': return JSON.stringify(generateTokens(extractedData), null, 2);
            case 'raw': return JSON.stringify(extractedData, null, 2);
            default: return '';
        }
    };

    const copyOutput = () => {
        navigator.clipboard.writeText(getGeneratedCode()).then(() => {
            showToast('Output copied to clipboard', 'success');
        });
    };

    const downloadOutput = () => {
        const text = getGeneratedCode();
        const extMap = { 'markdown': 'md', 'css': 'css', 'tailwind': 'js', 'tokens': 'json', 'raw': 'json' };
        const ext = extMap[currentTab] || 'txt';
        const filename = `design-system-${currentTab}.${ext}`;
        
        const blob = new Blob([text], { type: 'text/plain' });
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(blobUrl);
        showToast(`Downloaded ${filename}`, 'success');
    };

    // Calculate max space for rendering progress bars
    let maxSpace = 100;
    if (extractedData?.spacing) {
        let max = 0;
        extractedData.spacing.forEach(s => {
            const val = parseFloat(s.value);
            if (!isNaN(val) && val > max) max = val;
        });
        if (max > 0) maxSpace = max;
    }

    const currentHostname = url ? (function() { try { return new URL(url).hostname; } catch(e){ return 'url'; }})() : 'url';

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-40 bg-[#F5F3EE]/80 backdrop-blur-md border-b border-neutral-200/50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={resetView}>
                        <div className="w-7 h-7 bg-neutral-900 text-[#F5F3EE] rounded flex items-center justify-center font-serif text-base tracking-tighter">SE</div>
                        <span className="font-semibold tracking-tight text-sm">Style Extractor</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-200/50 text-neutral-600 text-xs font-medium hover:bg-neutral-200 transition-colors" onClick={() => setIsModalOpen(true)}>
                            <span className={`w-1.5 h-1.5 rounded-full ${config.key ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            <span className={config.key ? 'text-neutral-900' : 'text-neutral-600'}>{config.key ? config.model : 'Configure API'}</span>
                        </button>
                        <button onClick={() => setIsModalOpen(true)} className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-200/50">
                            <iconify-icon icon="solar:settings-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col">
                
                {/* View: Hero */}
                {view === 'hero' && (
                    <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full text-center space-y-8 animate-in fade-in duration-500">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-neutral-900">
                                Design taste, <span className="italic text-neutral-600">extracted.</span>
                            </h1>
                            <p className="text-base text-neutral-500 max-w-lg mx-auto">
                                Input a URL and let AI distill its visual design system into Colors, Typography, CSS Variables, and Design configs.
                            </p>
                        </div>

                        <div className="w-full relative group shadow-sm rounded-xl">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-neutral-900 transition-colors">
                                <iconify-icon icon="solar:link-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                            </div>
                            <input 
                                type="url" 
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="https://example.com" 
                                className="w-full bg-white border border-neutral-200/80 text-neutral-900 text-sm rounded-xl pl-10 pr-28 py-4 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all placeholder:text-neutral-400 font-mono" 
                            />
                            <button onClick={() => startExtraction()} className="absolute right-2 top-2 bottom-2 bg-neutral-900 text-[#F5F3EE] px-4 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-1.5 active:scale-95">
                                Extract
                                <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5"></iconify-icon>
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Try these</span>
                            <div className="flex flex-wrap justify-center gap-2">
                                <button onClick={() => setExample('https://stripe.com')} className="px-3 py-1.5 bg-neutral-200/40 hover:bg-neutral-200/80 border border-neutral-200 rounded-full text-xs font-medium text-neutral-600 transition-colors">stripe.com</button>
                                <button onClick={() => setExample('https://linear.app')} className="px-3 py-1.5 bg-neutral-200/40 hover:bg-neutral-200/80 border border-neutral-200 rounded-full text-xs font-medium text-neutral-600 transition-colors">linear.app</button>
                                <button onClick={() => setExample('https://vercel.com')} className="px-3 py-1.5 bg-neutral-200/40 hover:bg-neutral-200/80 border border-neutral-200 rounded-full text-xs font-medium text-neutral-600 transition-colors">vercel.com</button>
                                <button onClick={() => setExample('https://notion.so')} className="px-3 py-1.5 bg-neutral-200/40 hover:bg-neutral-200/80 border border-neutral-200 rounded-full text-xs font-medium text-neutral-600 transition-colors">notion.so</button>
                            </div>
                        </div>

                        <div className="pt-8 flex items-center justify-center gap-4 text-xs text-neutral-400 font-mono">
                            <span>DESIGN.md</span>
                            <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                            <span>CSS Variables</span>
                            <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                            <span>Tailwind v4</span>
                            <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                            <span>Design Tokens</span>
                        </div>
                    </div>
                )}

                {/* View: Loading */}
                {view === 'loading' && (
                    <div className="flex-1 flex flex-col items-center justify-center w-full">
                        <div className="loader-ring mb-6"><div></div><div></div><div></div><div></div></div>
                        <h3 className="text-lg font-serif tracking-tight text-neutral-900 mb-2">Analyzing Design System</h3>
                        <p className="text-sm text-neutral-500 font-mono">{url || '...'}</p>
                    </div>
                )}

                {/* View: Results */}
                {view === 'results' && extractedData && (
                    <div className="w-full flex-col gap-6 animate-in fade-in duration-500 flex">
                        {/* Results Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                            <div className="flex items-center gap-3">
                                <img src={`https://www.google.com/s2/favicons?domain=${currentHostname}&sz=64`} alt="favicon" className="w-6 h-6 rounded-sm bg-white p-0.5 shadow-sm border border-neutral-100" />
                                <div>
                                    <h2 className="font-semibold text-base tracking-tight leading-tight">{extractedData.site || 'Extracted Design'}</h2>
                                    <a href={url} target="_blank" rel="noreferrer" className="text-xs text-neutral-500 hover:text-neutral-900 font-mono transition-colors">{currentHostname}</a>
                                </div>
                            </div>
                            <button onClick={resetView} className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors bg-white px-3 py-1.5 rounded-md border border-neutral-200 shadow-sm">
                                <iconify-icon icon="solar:arrow-left-linear" stroke-width="1.5"></iconify-icon>
                                New URL
                            </button>
                        </div>

                        <p className="text-sm text-neutral-600 max-w-3xl leading-relaxed italic border-l-2 border-neutral-300 pl-4 py-1">{extractedData.personality || ''}</p>

                        <div className="flex flex-col md:flex-row gap-6 mt-2">
                            {/* Left Panel: Visuals */}
                            <div className="w-full md:w-[320px] shrink-0 flex flex-col gap-8">
                                
                                {/* Colors */}
                                <section>
                                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                                        <iconify-icon icon="solar:palette-linear" stroke-width="1.5"></iconify-icon> Colors
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {(extractedData.colors || []).map((c, i) => (
                                            <div key={i} className="bg-white border border-neutral-100 rounded-lg p-2 shadow-sm flex items-center gap-3 cursor-pointer hover:bg-neutral-50 transition-colors" onClick={() => copyText(c.hex, `Color ${c.hex}`)} title={`Copy ${c.hex}`}>
                                                <div className="w-8 h-8 rounded-md shadow-inner border border-black/5 shrink-0" style={{ backgroundColor: c.hex }}></div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[10px] font-mono text-neutral-500 uppercase truncate">{c.name}</p>
                                                    <p className="text-xs font-semibold text-neutral-900 uppercase">{c.hex}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Typography */}
                                <section>
                                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                                        <iconify-icon icon="solar:text-field-linear" stroke-width="1.5"></iconify-icon> Typography
                                    </h3>
                                    <div className="flex flex-col gap-4">
                                        {(extractedData.typography || []).map((t, i) => (
                                            <div key={i} className="bg-white border border-neutral-100 rounded-lg p-3 shadow-sm">
                                                <div className="flex justify-between items-baseline mb-2">
                                                    <span className="text-xs font-medium text-neutral-500 capitalize">{t.role}</span>
                                                    <span className="text-[10px] font-mono text-neutral-400 bg-neutral-100 px-1.5 rounded">{t.family}</span>
                                                </div>
                                                <div style={{ fontFamily: `'${t.family}', ${t.substitute || 'sans-serif'}`, fontWeight: t.weights?.[0] || 400, lineHeight: t.lineHeight || 1.2, fontSize: t.sizes?.[0] || '16px' }} className="text-neutral-900 truncate">
                                                    The quick brown fox
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Spacing/Radius */}
                                <section>
                                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                                        <iconify-icon icon="solar:ruler-linear" stroke-width="1.5"></iconify-icon> Spacing & Radius
                                    </h3>
                                    <div className="bg-white border border-neutral-200/60 rounded-xl p-4 shadow-sm">
                                        <div className="flex flex-col gap-3">
                                            {(extractedData.spacing || []).map((s, i) => {
                                                const val = parseFloat(s.value) || 0;
                                                const width = Math.max(5, (val / maxSpace) * 100);
                                                return (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="w-8 text-[10px] font-mono text-neutral-500 text-right">{s.name}</div>
                                                        <div className="flex-1 bg-neutral-100 rounded-r h-4 flex items-center relative group cursor-help">
                                                            <div className="bg-neutral-900 h-full rounded-r transition-all" style={{ width: `${width}%` }}></div>
                                                            <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono whitespace-nowrap bg-neutral-800 text-white px-1 rounded z-10">{s.value}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="w-full h-px bg-neutral-100 my-4"></div>
                                        <div className="flex flex-wrap gap-2">
                                            {(extractedData.borderRadius || []).map((r, i) => (
                                                <div key={i} className="flex items-center gap-2 border border-neutral-100 rounded px-2 py-1 bg-neutral-50">
                                                    <div className="w-4 h-4 border border-neutral-300 border-t-0 border-l-0" style={{ borderBottomRightRadius: r.value }}></div>
                                                    <span className="text-[10px] font-mono text-neutral-600">{r.name}: {r.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Right Panel: Code Outputs */}
                            <div className="flex-1 bg-white border border-neutral-200/60 rounded-xl shadow-sm flex flex-col overflow-hidden h-[800px] md:h-auto min-h-[600px]">
                                {/* Toolbar */}
                                <div className="bg-neutral-50 border-b border-neutral-200/60 p-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                                    <div className="flex p-1 bg-neutral-200/50 rounded-lg w-full sm:w-auto overflow-x-auto no-scrollbar">
                                        {[
                                            { id: 'markdown', label: 'DESIGN.md' },
                                            { id: 'css', label: 'CSS Variables' },
                                            { id: 'tailwind', label: 'Tailwind v4' },
                                            { id: 'tokens', label: 'Design Tokens' },
                                            { id: 'raw', label: 'Raw JSON' }
                                        ].map(tab => (
                                            <button 
                                                key={tab.id}
                                                onClick={() => setCurrentTab(tab.id)} 
                                                className={`tab-btn px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap ${currentTab === tab.id ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'}`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                                        <button onClick={copyOutput} className="p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/50 rounded transition-colors group relative" aria-label="Copy">
                                            <iconify-icon icon="solar:copy-linear" stroke-width="1.5" class="text-base"></iconify-icon>
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Copy</span>
                                        </button>
                                        <button onClick={downloadOutput} className="p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/50 rounded transition-colors group relative" aria-label="Download">
                                            <iconify-icon icon="solar:download-linear" stroke-width="1.5" class="text-base"></iconify-icon>
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Download</span>
                                        </button>
                                    </div>
                                </div>
                                {/* Code Area */}
                                <div className="flex-1 overflow-auto bg-neutral-50 p-4 relative group">
                                    <pre 
                                        className="text-xs font-mono text-neutral-800 leading-relaxed whitespace-pre-wrap break-words w-full h-full"
                                        dangerouslySetInnerHTML={{ __html: highlightSyntax(getGeneratedCode(), currentTab) }}
                                    ></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <SettingsModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                initialConfig={config}
                onSave={handleSaveConfig}
            />

            <ToastContainer toasts={toasts} />
        </>
    );
}