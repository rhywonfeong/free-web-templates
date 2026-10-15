import React from 'react';
import { Link } from 'react-router-dom';

export default function Allevamento() {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-xs font-bold text-[#D4AF37] tracking-widest mb-6">
            Soluzioni per l'Allevamento
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Allevamenti <span className="text-[#D4AF37]">Intensivi e Zootecnia</span>
          </h1>
          <p className="text-[#a3b8ad] text-lg leading-relaxed mb-8">
            Modernizza le tue strutture con soluzioni avanzate per l'efficienza energetica, il benessere animale e l'automazione dei processi produttivi.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-2xl bg-[#0a140f] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <iconify-icon icon="solar:home-smile-linear" className="text-xl"></iconify-icon>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Efficientamento Strutture</h3>
                <p className="text-[#a3b8ad] text-sm leading-relaxed">
                  Fotovoltaico sui tetti di stalle e magazzini, abbinato a pompe di calore industriali. Permette di climatizzare gli ambienti a costo zero riducendo la spesa energetica.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 rounded-2xl bg-[#0a140f] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <iconify-icon icon="solar:heart-pulse-linear" className="text-xl"></iconify-icon>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Benessere Animale</h3>
                <p className="text-[#a3b8ad] text-sm leading-relaxed">
                  Sistemi automatizzati di ventilazione e raffrescamento, sensori per il monitoraggio continuo della salute del bestiame per incrementare la qualità e la produttività.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 rounded-2xl bg-[#0a140f] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <iconify-icon icon="solar:settings-linear" className="text-xl"></iconify-icon>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Automazione Zootecnica</h3>
                <p className="text-[#a3b8ad] text-sm leading-relaxed">
                  Transizione a carri miscelatori elettrici, macchine telescopiche e robot di mungitura per abbattere i costi operativi e semplificare le attività quotidiane.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 h-[600px] sticky top-32 animate-fade-up animation-delay-300">
          <img src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1600" alt="Allevamenti e Zootecnia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06120b] via-[#06120b]/40 to-transparent opacity-90"></div>
          
          <div className="absolute bottom-10 left-10 right-10">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h4 className="text-white font-semibold mb-2">Migliora la tua stalla</h4>
              <p className="text-[#a3b8ad] text-sm mb-4">Scopri gli incentivi del Parco Agrisolare per finanziare il rifacimento dei tetti e l'installazione del fotovoltaico.</p>
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                Richiedi Consulenza
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}