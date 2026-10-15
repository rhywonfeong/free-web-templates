import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'Jan', value: 32000 },
  { name: 'Feb', value: 45000 },
  { name: 'Mar', value: 68000 },
  { name: 'Apr', value: 54000 },
  { name: 'May', value: 78000 },
  { name: 'Jun', value: 92000 },
];

const kpiCards = [
  { title: "Meta Mensal (NFs)", value: "R$ 92.400", sub: "102% da meta", status: "success", icon: "solar:chart-square-linear" },
  { title: "Em Execução", value: "14", sub: "4 projetos em risco", status: "warning", icon: "solar:settings-linear" },
  { title: "Inadimplência", value: "R$ 12.500", sub: "2 clientes atrasados", status: "danger", icon: "solar:danger-triangle-linear" },
  { title: "Taxa de Ocupação", value: "88%", sub: "Equipe técnica", status: "neutral", icon: "solar:users-group-two-rounded-linear" },
];

export default function Dashboard() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-[#303030] tracking-tight mb-2">Visão Executiva</h1>
          <p className="text-[#8C9BAA]">Acompanhamento da meta mensal e saúde operacional.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-[#C8D3DC] text-[#303030] font-medium rounded-xl hover:bg-[#F4F6F8] transition-colors flex items-center gap-2 text-sm shadow-sm">
            <iconify-icon icon="solar:calendar-linear" style={{ fontSize: '18px' }}></iconify-icon>
            Junho 2026
          </button>
          <button className="px-5 py-2.5 bg-[#1E2124] text-white font-medium rounded-xl hover:bg-[#303030] transition-colors flex items-center gap-2 text-sm shadow-md">
            <iconify-icon icon="solar:document-add-linear" style={{ fontSize: '18px' }}></iconify-icon>
            Novo Projeto
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((card, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col relative overflow-hidden group">
            {/* Status indicator bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${
              card.status === 'success' ? 'bg-[#8FFF00]' : 
              card.status === 'warning' ? 'bg-[#F59E0B]' : 
              card.status === 'danger' ? 'bg-[#EF4444]' : 'bg-[#C8D3DC]'
            }`}></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F4F6F8] flex items-center justify-center text-[#8C9BAA] group-hover:bg-[#1E2124] group-hover:text-white transition-colors">
                <iconify-icon icon={card.icon} style={{ fontSize: '20px' }}></iconify-icon>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-[#303030] tracking-tight mb-1">{card.value}</h3>
            <p className="text-sm font-semibold text-[#8C9BAA] mb-1">{card.title}</p>
            <p className="text-xs text-[#8C9BAA] mt-auto font-medium">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart & Alerts Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart Panel */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-black/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-[#303030]">Faturamento vs Meta</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-[#8FFF00]/10 text-[#559900] rounded-full text-xs font-bold">Meta: 90k</span>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8FFF00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8FFF00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8EDF2" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#8C9BAA', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#8C9BAA', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#303030', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="value" stroke="#8FFF00" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Alerts Panel - Dark to draw attention */}
        <div className="bg-[#252729] rounded-2xl p-6 shadow-md flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">Alertas Prioritários</h2>
            <span className="w-6 h-6 bg-[#EF4444] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-[0_0_12px_rgba(239,68,68,0.5)]">3</span>
          </div>

          <div className="space-y-3 overflow-y-auto pr-2 scrollbar-dark">
            {[
              { type: 'danger', title: 'TCO-2026.04 Atrasado', desc: 'Prazo de entrega venceu há 2 dias', eng: 'Marcos R.' },
              { type: 'warning', title: 'NF Pendente', desc: 'Projeto TCO-2026.01 entregue, aguardando emissão', eng: 'Financeiro' },
              { type: 'neutral', title: 'Cliente Inativo', desc: 'Petrobras sem novos pedidos há 60 dias', eng: 'Comercial' },
              { type: 'danger', title: 'Adiantamento sem NF', desc: 'Vale SA - R$ 15.000 recebidos', eng: 'Financeiro' },
            ].map((alert, idx) => (
              <div key={idx} className="bg-[#303338] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                    alert.type === 'danger' ? 'bg-[#EF4444]' : 
                    alert.type === 'warning' ? 'bg-[#F59E0B]' : 'bg-[#C8D3DC]'
                  }`}></div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#8FFF00] transition-colors">{alert.title}</h4>
                    <p className="text-xs text-[#8C9BAA] mt-1 line-clamp-1">{alert.desc}</p>
                    <div className="mt-2 text-[10px] uppercase tracking-wider font-semibold text-[#8C9BAA] bg-white/5 inline-block px-2 py-1 rounded-md">
                      Resp: {alert.eng}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-xl transition-colors">
            Ver todos os 12 alertas
          </button>
        </div>

      </div>
    </div>
  );
}