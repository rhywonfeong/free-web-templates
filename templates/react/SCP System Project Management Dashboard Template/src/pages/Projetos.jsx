import React, { useState } from 'react';
import { projetos } from '../data/mockData';
import { StatusBadge, Semaforo } from '../components/Badges';

export default function Projetos() {
  const [filter, setFilter] = useState('Todos');

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Gestão de Projetos</h1>
        
        <div className="flex items-center gap-2 bg-white border border-light p-1 rounded-lg shadow-sm">
          {['Todos', 'Em Execução', 'Faturados', 'Parados'].map(tab => (
            <button 
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filter === tab 
                  ? 'bg-accent text-dark shadow-sm' 
                  : 'text-muted hover:bg-zinc-100 hover:text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="panel-light overflow-hidden bg-white">
        <div className="p-4 border-b border-light flex justify-between items-center bg-[#F8F9FB]">
          <div className="relative w-64">
            <iconify-icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"></iconify-icon>
            <input 
              type="text" 
              placeholder="Buscar TCO ou Cliente..." 
              className="w-full pl-9 pr-4 py-2 border border-light rounded-full text-sm outline-none focus:border-accent bg-white"
            />
          </div>
          <button className="btn-primary py-2 text-sm shadow-sm">
            <iconify-icon icon="solar:add-circle-bold"></iconify-icon>
            Novo Projeto
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F8F9FB] text-[11px] uppercase tracking-wider text-muted font-semibold border-b border-light">
              <tr>
                <th className="p-4">TCO</th>
                <th className="p-4">Cliente</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Engenheiro</th>
                <th className="p-4">Valor Contrato</th>
                <th className="p-4">Status</th>
                <th className="p-4">Prazo</th>
                <th className="p-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-light">
              {projetos.map(proj => (
                <tr key={proj.id} className="hover:bg-zinc-50 transition-colors group cursor-pointer">
                  <td className="p-4 font-mono text-xs">{proj.tco}</td>
                  <td className="p-4 font-medium">{proj.cliente}</td>
                  <td className="p-4 text-muted">{proj.tipo}</td>
                  <td className="p-4 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate text-inverted flex items-center justify-center text-[10px] font-bold">
                      {proj.engenheiro.charAt(0)}
                    </div>
                    {proj.engenheiro}
                  </td>
                  <td className="p-4 font-semibold text-primary">R$ {proj.valor.toLocaleString('pt-BR')}</td>
                  <td className="p-4"><StatusBadge status={proj.status} /></td>
                  <td className="p-4"><Semaforo dias={proj.prazo} /></td>
                  <td className="p-4 text-right">
                    <button className="text-muted hover:text-accent transition-colors p-1 rounded-full hover:bg-dark">
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-light flex justify-between items-center text-xs text-muted bg-[#F8F9FB]">
          <span>Mostrando 4 de 24 projetos</span>
          <div className="flex gap-1">
            <button className="w-7 h-7 rounded border border-light flex items-center justify-center hover:bg-white disabled:opacity-50" disabled>
              <iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
            </button>
            <button className="w-7 h-7 rounded bg-accent text-dark font-medium flex items-center justify-center">1</button>
            <button className="w-7 h-7 rounded border border-light flex items-center justify-center hover:bg-white">2</button>
            <button className="w-7 h-7 rounded border border-light flex items-center justify-center hover:bg-white">
              <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}