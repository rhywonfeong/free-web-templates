import React from 'react';
import { kpis, projetos, user } from '../data/mockData';
import { StatusBadge, Semaforo } from '../components/Badges';

export default function Dashboard() {
  const percentMeta = Math.min(100, Math.round((kpis.faturadoAtual / kpis.metaMensal) * 100));

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Bem-vindo, {user.name}
          </h1>
          <p className="text-muted mt-1">Visão geral das operações e status financeiro.</p>
        </div>
        
        <div className="panel-light p-4 w-full md:w-72 shrink-0">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted font-medium">Meta Mensal</span>
            <span className="font-bold text-amber-500">{percentMeta}%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-400 h-full rounded-full transition-all duration-1000" style={{ width: `${percentMeta}%` }}></div>
          </div>
          <p className="text-xs text-right text-muted mt-1">
            R$ {kpis.faturadoAtual.toLocaleString('pt-BR')} / R$ {kpis.metaMensal.toLocaleString('pt-BR')}
          </p>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Em Execução" value={kpis.emExecucao} color="border-cyan-500" icon="solar:bolt-linear" />
        <KPICard title="NF Emitida" value={kpis.nfEmitida} color="border-amber-500" icon="solar:document-add-linear" />
        <KPICard title="Pagos (Mês)" value={kpis.pagos} color="border-green-500" icon="solar:check-circle-linear" />
        <KPICard title="Parados" value={kpis.parados} color="border-purple-500" icon="solar:danger-triangle-linear" />
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Table Section */}
        <div className="lg:col-span-2 panel-light overflow-hidden flex flex-col">
          <div className="p-4 sm:p-5 border-b border-light flex justify-between items-center bg-white">
            <h2 className="font-semibold text-lg">Projetos Recentes</h2>
            <button className="text-sm font-medium text-accent hover:text-accent-hover px-3 py-1 bg-dark rounded-full transition-colors">
              Ver todos
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[#F8F9FB] text-[11px] uppercase tracking-wider text-muted font-semibold border-b border-light">
                <tr>
                  <th className="p-4">TCO</th>
                  <th className="p-4">Cliente / Tipo</th>
                  <th className="p-4">Valor</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Prazo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light bg-white">
                {projetos.slice(0,4).map(proj => (
                  <tr key={proj.id} className="hover:bg-zinc-50 transition-colors">
                    <td className="p-4 font-mono text-xs">{proj.tco}</td>
                    <td className="p-4">
                      <div className="font-medium text-primary">{proj.cliente}</div>
                      <div className="text-xs text-muted mt-0.5">{proj.tipo}</div>
                    </td>
                    <td className="p-4 font-semibold">R$ {proj.valor.toLocaleString('pt-BR')}</td>
                    <td className="p-4"><StatusBadge status={proj.status} /></td>
                    <td className="p-4"><Semaforo dias={proj.prazo} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Actions / Alerts */}
        <div className="panel-dark p-5 flex flex-col">
          <h3 className="text-inverted font-semibold text-lg mb-4 flex items-center gap-2">
            <iconify-icon icon="solar:bell-bing-bold" className="text-accent"></iconify-icon>
            Ações Requeridas
          </h3>
          
          <div className="space-y-3 flex-1">
            <AlertItem 
              type="critical" 
              title="Prazo Crítico" 
              desc="Raízen (TCO-148.24) sem engenheiro alocado." 
            />
            <AlertItem 
              type="warning" 
              title="NF Pendente" 
              desc="Emitir NF 1ª parcela - Petrobras." 
            />
            <AlertItem 
              type="action" 
              title="Aprovação" 
              desc="Relatório final Braskem pronto para envio." 
            />
          </div>

          <button className="w-full mt-4 bg-slate hover:bg-[#9DBECB] text-inverted text-sm py-2.5 rounded transition-colors font-medium">
            Ver central de alertas
          </button>
        </div>

      </div>
    </div>
  );
}

function KPICard({ title, value, color, icon }) {
  return (
    <div className={`bg-white border border-light border-l-4 ${color} rounded-sm p-4 sm:p-5 flex flex-col justify-between hover:shadow-sm transition-shadow`}>
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-medium text-muted uppercase tracking-wider">{title}</span>
        <iconify-icon icon={icon} width="20" className="text-muted opacity-50"></iconify-icon>
      </div>
      <span className="text-3xl font-bold text-primary">{value}</span>
    </div>
  );
}

function AlertItem({ type, title, desc }) {
  const styles = {
    critical: 'bg-red-500/10 border-l-2 border-red-500 text-red-400',
    warning: 'bg-amber-500/10 border-l-2 border-amber-500 text-amber-400',
    action: 'bg-slate/20 border-l-2 border-slate text-inverted'
  };

  return (
    <div className={`p-3 rounded-r-md ${styles[type]} text-sm`}>
      <div className="font-semibold mb-0.5">{title}</div>
      <div className="opacity-80 text-xs leading-relaxed">{desc}</div>
    </div>
  );
}