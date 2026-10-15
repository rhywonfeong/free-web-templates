import React, { useState, useEffect } from 'react';
import { PROVIDERS } from '../utils/constants';

export default function SettingsModal({ isOpen, onClose, initialConfig, onSave }) {
    const [provider, setProvider] = useState(initialConfig.provider || 'anthropic');
    const [model, setModel] = useState(initialConfig.model || '');
    const [apiKey, setApiKey] = useState(initialConfig.key || '');
    const [baseUrl, setBaseUrl] = useState(initialConfig.baseUrl || '');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen) {
            setProvider(initialConfig.provider || 'anthropic');
            setModel(initialConfig.model || PROVIDERS['anthropic'].hint);
            setApiKey(initialConfig.key || '');
            setBaseUrl(initialConfig.baseUrl || PROVIDERS['anthropic'].url);
            setError('');
        }
    }, [isOpen, initialConfig]);

    const handleProviderChange = (e) => {
        const newProvider = e.target.value;
        const data = PROVIDERS[newProvider];
        setProvider(newProvider);
        setModel(data.hint);
        setBaseUrl(data.url);
    };

    const handleSave = () => {
        if (!apiKey.trim()) {
            setError('API Key is required.');
            return;
        }
        onSave({ provider, model: model.trim(), key: apiKey.trim(), baseUrl: baseUrl.trim() });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-neutral-900/20 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden transform scale-100 transition-transform duration-200 flex flex-col">
                <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
                    <h3 className="font-semibold tracking-tight flex items-center gap-2">
                        <iconify-icon icon="solar:settings-minimalistic-linear" stroke-width="1.5"></iconify-icon>
                        API Configuration
                    </h3>
                    <button onClick={onClose} className="text-neutral-400 hover:text-neutral-900 transition-colors p-1">
                        <iconify-icon icon="solar:close-circle-linear" stroke-width="1.5" class="text-xl"></iconify-icon>
                    </button>
                </div>
                
                <div className="p-6 space-y-5">
                    {/* Provider */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">Provider</label>
                        <div className="relative">
                            <select value={provider} onChange={handleProviderChange} className="w-full appearance-none bg-white border border-neutral-300 text-neutral-900 text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors">
                                <option value="anthropic">Anthropic</option>
                                <option value="openai">OpenAI</option>
                                <option value="groq">Groq</option>
                                <option value="openrouter">OpenRouter</option>
                                <option value="custom">Custom (OpenAI Compatible)</option>
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-neutral-400">
                                <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
                            </div>
                        </div>
                    </div>

                    {/* Model */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">Model</label>
                        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} className="w-full bg-white border border-neutral-300 text-neutral-900 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors font-mono" />
                        <p className="text-[10px] text-neutral-500">Example: {PROVIDERS[provider]?.hint}</p>
                    </div>

                    {/* API Key */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">API Key</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="sk-..." className="w-full bg-white border border-neutral-300 text-neutral-900 text-sm rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors font-mono" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-neutral-900 transition-colors">
                                <iconify-icon icon={showPassword ? "solar:eye-closed-linear" : "solar:eye-linear"} stroke-width="1.5"></iconify-icon>
                            </button>
                        </div>
                    </div>

                    {/* Base URL (Custom Only) */}
                    <div className={`space-y-1.5 ${provider === 'custom' ? 'block' : 'hidden'}`}>
                        <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">Base URL</label>
                        <input type="url" value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} placeholder="https://api.example.com" className="w-full bg-white border border-neutral-300 text-neutral-900 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors font-mono" />
                    </div>
                    
                    {error && <p className="text-xs text-red-500">{error}</p>}
                </div>

                <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50/50 flex justify-end">
                    <button onClick={handleSave} className="bg-neutral-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors active:scale-95">
                        Save Configuration
                    </button>
                </div>
            </div>
        </div>
    );
}