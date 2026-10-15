import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import clsx from 'clsx';

export default function Layout({ children }) {
  const [crmValue, setCrmValue] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  // Lock scroll while CRM is unverified
  useEffect(() => {
    if (!isVerified) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isVerified]);

  const handleCrmSubmit = (e) => {
    e.preventDefault();
    // Validate 4-7 digits + slash + 2 uppercase letters (e.g., 123456/SP)
    const regex = /^\d{4,7}\/[A-Z]{2}$/;
    if (regex.test(crmValue)) {
      setIsVerified(true);
      setError('');
    } else {
      setError('CRM inválido. Verifique o formato: 123456/SP');
    }
  };

  const handleCrmChange = (e) => {
    // Automatically uppercase the input for better UX
    setCrmValue(e.target.value.toUpperCase());
    if (error) setError('');
  };

  return (
    <div className="relative min-h-screen bg-[#fbfbfb] text-gray-900 font-sans antialiased selection:bg-gray-200 flex flex-col overflow-x-hidden">
      
      {/* CRM Verification Gate Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-[#fbfbfb] z-[999] flex flex-col items-center justify-center p-6 transition-all duration-700 ease-in-out", 
          isVerified ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
        )}
      >
        <div className="max-w-md w-full bg-white border border-gray-200 p-8 md:p-12 shadow-2xl shadow-gray-200/40 relative flex flex-col gap-8">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold tracking-[0.2em] text-gray-900 mb-6 flex justify-center items-center">
              MEDICAL<span className="text-emerald-500 mx-1">·</span>VOICES
            </div>
            <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">
              Confirme sua identidade médica
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              Medical Voices é exclusivo para médicos.
            </p>
          </div>
          
          <form onSubmit={handleCrmSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="crm" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                Número do CRM
              </label>
              <input 
                type="text" 
                id="crm"
                value={crmValue}
                onChange={handleCrmChange}
                className={clsx(
                  "w-full bg-gray-50 border-b px-4 py-3 text-gray-900 font-medium focus:outline-none focus:bg-white transition-colors placeholder:text-gray-400",
                  error ? "border-red-400 focus:border-red-600" : "border-gray-300 focus:border-gray-900"
                )}
                placeholder="Ex: 123456/SP"
                autoComplete="off"
              />
              {error && <span className="text-xs text-red-500 font-medium mt-1">{error}</span>}
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gray-900 text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-gray-800 transition-all outline-none focus-visible:ring-4 focus-visible:ring-gray-300 flex items-center justify-center gap-3"
            >
              Continuar
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
            </button>
            
            <p className="text-[10px] uppercase tracking-widest text-gray-400 text-center font-semibold mt-2">
              Seus dados não são armazenados.
            </p>
          </form>
        </div>
      </div>

      {/* Main Layout */}
      <AnimatedBackground />
      <Header />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}