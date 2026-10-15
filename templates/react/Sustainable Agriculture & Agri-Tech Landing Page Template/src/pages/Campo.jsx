import React from 'react';
import { Link } from 'react-router-dom';

export default function Campo() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6 py-24 min-h-screen">
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#eab308] hover:text-white transition-colors text-sm font-semibold uppercase tracking-widest">
          <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
          Torna alla Home
        </Link>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A8E8]/10 border border-[#00A8E8]/20 text-xs font-bold text-[#00A8E8] tracking-widest mb-6">
            Soluzioni per il Campo
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Agricoltura a <span className="text-[#00A8E8]">Pieno Campo</span>
          </h1>
          <p className="text-[#a3b8ad] text-lg leading-relaxed mb-8">
            Ottimizza la resa delle tue colture a terra, vigneti e frutteti con tecnologie avanzate e indipendenza energetica. Agroland ti supporta nella transizione completa verso un modello più efficiente e sostenibile.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-2xl bg-[#0a140f] border border-white/5 hover:border-[#00A8E8]/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#00A8E8]/10 flex items-center justify-center text-[#00A8E8] shrink-0">
                <iconify-icon icon="solar:sun-linear" className="text-xl"></iconify-icon>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Agrivoltaico su terra</h3>
                <p className="text-[#a3b8ad] text-sm leading-relaxed">
                  Pannelli solari installati in modo da non ostacolare le lavorazioni agricole. Producono energia pulita per le tue operazioni e proteggono le colture dagli eventi atmosferici estremi.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 rounded-2xl bg-[#0a140f] border border-white/5 hover:border-[#00A8E8]/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#00A8E8]/10 flex items-center justify-center text-[#00A8E8] shrink-0">
                <iconify-icon icon="solar:drop-linear" className="text-xl"></iconify-icon>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Gestione Idrica IoT</h3>
                <p className="text-[#a3b8ad] text-sm leading-relaxed">
                  Sensori di umidità e sistemi di irrigazione automatizzati alimentati a energia solare. Monitorano lo stato del suolo in tempo reale e riducono gli sprechi d'acqua fino al 40%.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 rounded-2xl bg-[#0a140f] border border-white/5 hover:border-[#00A8E8]/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#00A8E8]/10 flex items-center justify-center text-[#00A8E8] shrink-0">
                <iconify-icon icon="solar:spedometer-max-linear" className="text-xl"></iconify-icon>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Macchinari Elettrici</h3>
                <p className="text-[#a3b8ad] text-sm leading-relaxed">
                  Integrazione di trattori, seminatrici e droni agricoli a propulsione elettrica. Possono essere ricaricati direttamente dall'energia prodotta in azienda, abbattendo i costi del carburante.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 h-[600px] sticky top-32 animate-fade-up animation-delay-300">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600" alt="Agricoltura Pieno Campo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06120b] via-[#06120b]/40 to-transparent opacity-90"></div>
          
          <div className="absolute bottom-10 left-10 right-10">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h4 className="text-white font-semibold mb-2">Pronto per innovare?</h4>
              <p className="text-[#a3b8ad] text-sm mb-4">Scopri i bandi e i finanziamenti disponibili per finanziare il tuo progetto a pieno campo.</p>
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#00A8E8] text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                Richiedi Consulenza
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}