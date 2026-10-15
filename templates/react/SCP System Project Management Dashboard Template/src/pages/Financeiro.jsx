import React from 'react';
import { faturas } from '../data/mockData';

export default function Financeiro() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col h-full space-y-6">
      
      {/* Top Filter Bar (as per image reference) */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 shrink-0">
        <button className="w-10 h-10 rounded-full bg-white border border-light flex items-center justify-center shrink-0 hover:border-dark">
          <iconify-icon icon="solar:filter-linear" width="20"></iconify-icon>
        </button>
        
        <div className="flex bg-white rounded-full p-1 shadow-sm border border-light shrink-0">
          <button className="px-4 py-1.5 rounded-full text-sm font-medium">Todas NFs</button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-accent text-dark">Pendentes 2</button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium text-muted">Pagas</button>
        </div>

        <div className="bg-white rounded-full border border-light px-4 py-2 flex items-center gap-2 text-sm shrink-0">
          <iconify-icon icon="solar:calendar-linear" className="text-muted"></iconify-icon>
          <span>Abr 2024</span>
        </div>

        <div className="relative w-64 shrink-0 ml-auto">
          <iconify-icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"></iconify-icon>
          <input type="text" placeholder="Buscar Fatura..." className="w-full pl-9 pr-4 py-2 rounded-full border border-light outline-none focus:border-accent text-sm" />
        </div>
      </div>

      {/* Main Dual-Tone Content Area */}
      <div className="flex-1 panel-dark p-2 sm:p-4 flex flex-col lg:flex-row gap-4 overflow-hidden">
        
        {/* Left List */}
        <div className="w-full lg:w-1/3 flex flex-col gap-2 overflow-y-auto pr-2">
          {faturas.map((fat, idx) => (
            <div 
              key={fat.id} 
              className={`p-4 rounded-xl cursor-pointer transition-all border ${idx === 0 ? 'bg-slate border-transparent shadow-md' : 'bg-[#2A2A2A] border-dark hover:border-[#4A4A4A]'}`}
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`text-xs font-mono px-2 py-0.5 rounded ${idx === 0 ? 'bg-white/20 text-white' : 'bg-dark text-muted-dark'}`}>{fat.id}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/20 text-accent">Pendente</span>
              </div>
              <h3 className="text-inverted font-medium">{fat.empresa}</h3>
              <div className="flex justify-between items-end mt-4">
                <span className="text-sm opacity-70 text-inverted">{fat.vencimento}</span>
                <span className="text-lg font-bold text-inverted">R$ {fat.valor.toLocaleString('pt-BR')}</span>
              </div>
            </div>
          ))}
          {/* Add Item Placeholder */}
          <button className="p-4 rounded-xl border border-dashed border-[#4A4A4A] flex flex-col items-center justify-center text-muted-dark hover:bg-[#4A4A4A]/20 transition-colors h-32 mt-2">
            <iconify-icon icon="solar:add-circle-linear" width="24" className="mb-2"></iconify-icon>
            <span className="text-sm font-medium">Nova Cobrança</span>
          </button>
        </div>

        {/* Right Detail Panel (Blue-gray inset) */}
        <div className="flex-1 bg-slate rounded-2xl p-6 sm:p-8 flex flex-col text-inverted overflow-y-auto relative">
          
          {/* Action icons top right */}
          <div className="absolute top-6 right-6 flex gap-2">
            <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <iconify-icon icon="solar:printer-linear"></iconify-icon>
            </button>
            <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <iconify-icon icon="solar:menu-dots-bold"></iconify-icon>
            </button>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-light tracking-tight">{faturas[0].id}</h2>
              <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium uppercase tracking-wider">Pendente</span>
            </div>
            
            <div className="flex flex-wrap gap-8 sm:gap-16">
              <div>
                <p className="text-sm opacity-70 mb-1">Empresa</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center">
                    <iconify-icon icon="simple-icons:petrobras" width="24" style={{ color: '#008542' }}></iconify-icon>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{faturas[0].empresa}</p>
                    <p className="text-sm opacity-80">{faturas[0].nf}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm opacity-70 mb-1">Responsável</p>
                <div className="flex items-center gap-3">
                  <img src={faturas[0].avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white/20" />
                  <div>
                    <p className="font-semibold text-lg">Carlos Eduardo</p>
                    <p className="text-sm opacity-80">Diretoria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Tiles (Items) */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {faturas[0].items.map((item, i) => (
              <div key={i} className="bg-white/10 border border-white/10 p-4 rounded-xl flex flex-col justify-between h-28">
                <p className="text-sm font-medium leading-tight">{item.desc}</p>
                <p className="text-xl font-bold">R$ {item.valor.toLocaleString('pt-BR')}</p>
              </div>
            ))}
            <div className="bg-transparent border border-dashed border-white/30 p-4 rounded-xl flex items-center justify-center h-28 hover:bg-white/5 cursor-pointer transition-colors text-white/60">
              <iconify-icon icon="solar:add-circle-linear" width="28"></iconify-icon>
            </div>
          </div>

          {/* Footer Totals & Action */}
          <div className="mt-auto pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-end gap-6">
            <div className="w-full sm:w-auto">
              <div className="flex justify-between gap-12 text-sm mb-2 opacity-80">
                <span>Subtotal</span>
                <span>R$ {faturas[0].valor.toLocaleString('pt-BR')}</span>
              </div>
              <div className="flex justify-between gap-12 text-2xl font-bold">
                <span>Total Devido</span>
                <span>R$ {faturas[0].valor.toLocaleString('pt-BR')}</span>
              </div>
            </div>
            
            <button className="w-full sm:w-auto btn-primary shadow-lg hover:shadow-xl text-base px-8 py-3.5">
              Baixar NF
              <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}