import React, { useState } from 'react';
import clsx from 'clsx';

// Mock Data
const projects = [
  { id: 'TCO-2026.01', client: 'Petrobras S.A.', amount: 45000, status: 'Em Execução', tag: 'Atrasado', type: 'Classificação Área' },
  { id: 'TCO-2026.02', client: 'Vale SA', amount: 12500, status: 'NF Emitida', tag: 'No Prazo', type: 'Inspeção' },
  { id: 'TCO-2026.03', client: 'Braskem', amount: 28000, status: 'Em Execução', tag: 'Crítico', type: 'Prontuário' },
  { id: 'TCO-2026.04', client: 'Raízen', amount: 9500, status: 'Parado', tag: 'Falta Doc', type: 'Classificação Área' },
  { id: 'TCO-2026.05', client: 'Bayer', amount: 18000, status: 'Pago', tag: 'Concluído', type: 'Inspeção' },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('Em Execução');
  const [selectedId, setSelectedId] = useState('TCO-2026.01');

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <div className="h-full flex flex-col">
      {/* Light Upper Area - Filters & Controls */}
      <div className="px-8 pt-8 pb-6 shrink-0 bg-[#F4F6F8]">
        <div className="flex flex-col gap-6 max-w-[1400px] mx-auto">
          
          <div className="flex items-center justify-between">
             <div>
                <h1 className="text-3xl font-bold text-[#303030] tracking-tight">Gestão de Projetos</h1>
             </div>
             <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/5 shadow-sm text-[#303030] hover:bg-[#F4F6F8] transition-colors">
                <iconify-icon icon="solar:menu-dots-bold" style={{ fontSize: '24px' }}></iconify-icon>
             </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Pill */}
            <div className="flex items-center bg-white border border-[#C8D3DC] rounded-full px-4 py-2 shadow-sm min-w-[280px]">
              <iconify-icon icon="solar:magnifer-linear" className="text-[#8C9BAA] text-xl mr-2"></iconify-icon>
              <input type="text" placeholder="Buscar cliente, TCO ou engenheiro..." className="bg-transparent border-none outline-none text-sm w-full text-[#303030] placeholder-[#8C9BAA]" />
            </div>

            {/* Filter Pills */}
            <button className="flex items-center gap-2 bg-white border border-[#C8D3DC] rounded-full px-4 py-2 text-sm font-medium text-[#303030] shadow-sm hover:bg-[#F4F6F8]">
              Status <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
            </button>
            <button className="flex items-center gap-2 bg-white border border-[#C8D3DC] rounded-full px-4 py-2 text-sm font-medium text-[#303030] shadow-sm hover:bg-[#F4F6F8]">
              Engenheiro <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
            </button>

            <div className="h-6 w-px bg-[#C8D3DC] mx-2"></div>

            {/* Tabs */}
            <div className="flex items-center bg-white p-1 rounded-full border border-black/5 shadow-sm">
              {['Todos', 'Em Execução', 'NF Emitida', 'Parados'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={clsx(
                    "px-5 py-2 rounded-full text-sm font-bold transition-all",
                    activeTab === tab 
                      ? "bg-[#8FFF00] text-[#1E2124] shadow-sm" 
                      : "text-[#8C9BAA] hover:text-[#303030]"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dark Workspace Panel - Split View */}
      <div className="flex-1 bg-[#252729] rounded-t-[32px] mx-4 md:mx-8 mb-0 overflow-hidden flex shadow-xl border-x border-t border-white/5 relative">
        
        {/* Left List Panel */}
        <div className="w-full md:w-[380px] border-r border-white/10 flex flex-col shrink-0 bg-[#252729]">
          <div className="p-6 border-b border-white/5 flex justify-between items-center shrink-0">
             <h2 className="text-white font-bold text-lg">Projetos Ativos</h2>
             <span className="text-[#8C9BAA] text-sm">12 itens</span>
          </div>
          
          <div className="flex-1 overflow-y-auto scrollbar-dark p-4 space-y-3">
            {projects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedId(proj.id)}
                className={clsx(
                  "w-full text-left p-4 rounded-[16px] transition-all duration-200 border",
                  selectedId === proj.id 
                    ? "bg-[#7A9EAD]/20 border-[#7A9EAD]/50" 
                    : "bg-[#303338] border-transparent hover:border-white/10"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[#8C9BAA] text-xs font-mono">{proj.id}</span>
                  <div className="flex items-center gap-1.5">
                    {proj.tag === 'Atrasado' || proj.tag === 'Crítico' ? (
                      <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
                    ) : proj.tag === 'Concluído' ? (
                      <span className="w-2 h-2 rounded-full bg-[#8FFF00]"></span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
                    )}
                    <span className="text-xs font-semibold text-white/70">{proj.tag}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-1 tracking-tight">{proj.client}</h3>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-[#8C9BAA] text-xs">{proj.status}</span>
                  <span className="text-white font-light text-xl tracking-tight">
                    <span className="text-[#8C9BAA] text-sm mr-1">R$</span>
                    {proj.amount.toLocaleString('pt-BR')}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Detail Panel (Blue Muted Surface) */}
        <div className="hidden md:flex flex-1 p-6 lg:p-8 bg-[#252729] items-start justify-center overflow-y-auto scrollbar-dark relative">
          
          {/* Detail Card matching design specs (bg-[#7A9EAD] variant) */}
          <div className="w-full max-w-[800px] bg-[#7A9EAD] rounded-[24px] overflow-hidden shadow-2xl flex flex-col relative z-10">
            
            {/* Detail Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-2 block">Detalhes do Projeto</span>
                  <div className="flex items-center gap-4">
                    <h2 className="text-4xl font-light text-white tracking-tight">{selectedProject?.id}</h2>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold backdrop-blur-sm">
                      {selectedProject?.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                   <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                      <iconify-icon icon="solar:printer-linear" style={{ fontSize: '20px' }}></iconify-icon>
                   </button>
                   <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                      <iconify-icon icon="solar:pen-linear" style={{ fontSize: '20px' }}></iconify-icon>
                   </button>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1E2124] font-bold text-xl shadow-sm">
                  {selectedProject?.client.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">{selectedProject?.client}</h3>
                  <p className="text-white/70 text-sm">{selectedProject?.type}</p>
                </div>
              </div>
            </div>

            {/* Sub-cards Row */}
            <div className="p-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Data Início", value: "12 Jun 2026", icon: "solar:calendar-linear" },
                { label: "Prazo Entrega", value: "30 Jul 2026", icon: "solar:flag-linear" },
                { label: "Horas Alocadas", value: "45h / 120h", icon: "solar:clock-circle-linear" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/15 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                  <iconify-icon icon={stat.icon} className="text-white/60 text-xl mb-3"></iconify-icon>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                </div>
              ))}
              
              {/* Add Action Card */}
              <button className="bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_10px,transparent_10px,transparent_20px)] border-2 border-dashed border-white/30 rounded-2xl p-4 flex flex-col items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-colors">
                <iconify-icon icon="solar:add-circle-linear" style={{ fontSize: '28px' }} className="mb-2"></iconify-icon>
                <span className="text-sm font-semibold">Nova Nota</span>
              </button>
            </div>

            {/* Footer Row */}
            <div className="mt-auto bg-[#1E2124] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-[#8C9BAA] text-sm font-semibold mb-1 uppercase tracking-wider">Valor Total</p>
                <p className="text-white font-light text-4xl tracking-tight">
                  <span className="text-[#8C9BAA] text-2xl mr-2">R$</span>
                  {selectedProject?.amount.toLocaleString('pt-BR')}
                </p>
              </div>
              
              <div className="flex gap-4 items-center">
                 <button className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-colors">
                    <iconify-icon icon="solar:chat-round-line-linear" style={{ fontSize: '24px' }}></iconify-icon>
                 </button>
                 <button className="px-8 py-4 bg-[#8FFF00] hover:bg-[#9eff1a] text-[#1E2124] font-bold rounded-xl text-lg transition-colors shadow-lg flex items-center gap-2">
                   Avançar Etapa
                   <iconify-icon icon="solar:arrow-right-linear" style={{ fontSize: '20px' }}></iconify-icon>
                 </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}