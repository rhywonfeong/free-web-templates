import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const dataFat = [
  { name: 'Jan', total: 45000 },
  { name: 'Fev', total: 52000 },
  { name: 'Mar', total: 38000 },
  { name: 'Abr', total: 65400 },
  { name: 'Mai', total: 48000 },
  { name: 'Jun', total: 72000 },
];

const dataStatus = [
  { name: 'Em Execução', value: 12 },
  { name: 'NF Emitida', value: 5 },
  { name: 'Pago', value: 28 },
  { name: 'Parado', value: 3 },
];
const COLORS = ['#BFFF00', '#f59e0b', '#22c55e', '#a855f7'];

export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics & Relatórios</h1>
        <p className="text-muted mt-1">Métricas de desempenho e saúde financeira.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Area Chart - Full Width on Mobile, 2/3 on Desktop */}
        <div className="lg:col-span-2 panel-dark p-5 rounded-none border-border-dark flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-inverted font-semibold">Faturamento Histórico (2024)</h3>
            <select className="bg-dark border border-dark text-inverted text-sm rounded px-2 py-1 outline-none">
              <option>Últimos 6 meses</option>
              <option>Ano atual</option>
            </select>
          </div>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataFat} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#BFFF00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#BFFF00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#4A4A4A" />
                <XAxis dataKey="name" stroke="#8A9099" tick={{fill: '#8A9099', fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis stroke="#8A9099" tick={{fill: '#8A9099', fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(v) => `R$${v/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#303030', borderColor: '#4A4A4A', color: '#fff', borderRadius: '8px' }}
                  itemStyle={{ color: '#BFFF00' }}
                  formatter={(value) => [`R$ ${value}`, 'Faturado']}
                />
                <Area type="monotone" dataKey="total" stroke="#BFFF00" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="panel-dark p-5 rounded-none border-border-dark flex flex-col">
          <h3 className="text-inverted font-semibold mb-6">Distribuição por Status</h3>
          <div className="flex-1 min-h-[250px] flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataStatus}
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {dataStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#303030', borderColor: '#4A4A4A', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-bold text-inverted">48</span>
              <span className="text-xs text-muted-dark uppercase tracking-widest">Total</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dataStatus.map((item, i) => (
              <div key={item.name} className="flex items-center gap-2 text-xs text-muted-dark">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Carga Engenheiros Bar Chart */}
        <div className="lg:col-span-3 panel-light p-5 border-l-4 border-l-purple-500 rounded-sm">
          <h3 className="font-semibold mb-6">Carga Atual vs Capacidade (Horas)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { name: 'Roberto', atual: 140, cap: 160 },
                  { name: 'Lucas', atual: 165, cap: 160 },
                  { name: 'Jana', atual: 90, cap: 160 },
                ]}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                barGap={4}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E6ED" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#5A5A5A', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#5A5A5A', fontSize: 12}} />
                <Tooltip cursor={{fill: '#F0F2F5'}} contentStyle={{ borderRadius: '8px', border: '1px solid #E2E6ED' }} />
                <Bar dataKey="atual" name="Horas Alocadas" fill="#7FA8B8" radius={[4, 4, 0, 0]} maxBarSize={40} />
                <Bar dataKey="cap" name="Capacidade" fill="#E2E6ED" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}