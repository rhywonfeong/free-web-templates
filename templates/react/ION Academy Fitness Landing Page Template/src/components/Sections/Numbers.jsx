import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const metrics = [
  { val: "+1.200", label: "Alunos ativos" },
  { val: "94%", label: "Retenção média" },
  { val: "8 anos", label: "Tempo em operação" },
  { val: "1.8K M²", label: "Área dedicada" },
];

const performanceData = [
  { month: 'Jan', performance: 70 },
  { month: 'Fev', performance: 75 },
  { month: 'Mar', performance: 73 },
  { month: 'Abr', performance: 85 },
  { month: 'Mai', performance: 82 },
  { month: 'Jun', performance: 94 },
  { month: 'Jul', performance: 98 },
];

// Custom Tooltip for Recharts to match DS dark theme
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-850/90 backdrop-blur-md border border-neutral-600 p-3 rounded-lg shadow-soft">
        <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-widest mb-1">{payload[0].payload.month}</p>
        <p className="text-brand-blue font-bold text-lg">{payload[0].value}% Ativos</p>
      </div>
    );
  }
  return null;
};

export default function Numbers() {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Col - Data Viz specific to Design System (Blue Data context) */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-blue transition-colors duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-[40px] rounded-full pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-neutral-50 font-display font-bold text-2xl uppercase tracking-tight">Crescimento Sustentável</h3>
              <p className="text-neutral-400 text-xs font-semibold uppercase tracking-widest mt-1">Engajamento Semestral</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shadow-glow-data">
              <iconify-icon icon="solar:graph-up-bold" width="20"></iconify-icon>
            </div>
          </div>
          
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#3D3D3D', strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Area 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="#3B82F6" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorPerf)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Col - Core Metrics */}
        <div>
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="relative">
                <div className="text-4xl md:text-6xl font-display font-black tracking-tighter text-brand-green uppercase mb-2 drop-shadow-[0_0_15px_rgba(141,182,0,0.2)]">
                  {metric.val}
                </div>
                <div className="text-xs font-semibold text-neutral-200 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-neutral-600"></span>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}