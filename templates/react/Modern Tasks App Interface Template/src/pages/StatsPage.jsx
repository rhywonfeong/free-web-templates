import React, { useMemo } from 'react';
import { useTodos } from '../context/TodoContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

export default function StatsPage() {
  const { todos } = useTodos();

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const active = total - completed;
    const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);

    return { total, completed, active, completionRate };
  }, [todos]);

  const chartData = [
    { name: 'Completed', value: stats.completed, color: '#18181b' }, // zinc-900
    { name: 'Active', value: stats.active, color: '#e4e4e7' } // zinc-200
  ];

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-medium tracking-tight text-zinc-900 mb-1">Productivity Overview</h1>
        <p className="text-sm text-zinc-500">Your task completion metrics and history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Tasks" value={stats.total} icon="solar:folder-with-files-linear" />
        <StatCard title="Completed" value={stats.completed} icon="solar:check-square-linear" />
        <StatCard title="Active" value={stats.active} icon="solar:hourglass-linear" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200/60 p-6 flex flex-col md:flex-row items-center gap-8 mt-2">
        <div className="w-48 h-48 relative flex-shrink-0">
          {stats.total > 0 ? (
            <>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 500 }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-semibold tracking-tight text-zinc-900">{stats.completionRate}%</span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Done</span>
              </div>
            </>
          ) : (
            <div className="w-full h-full rounded-full border-8 border-zinc-50 flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold tracking-tight text-zinc-300">0%</span>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-zinc-900 mb-2">Completion Status</h3>
          <p className="text-sm text-zinc-500 mb-4">
            {stats.completionRate >= 80 ? "You're doing great! Keeping the backlog clean." :
             stats.completionRate >= 40 ? "Making steady progress. Keep checking them off!" :
             stats.total === 0 ? "Add some tasks to see your productivity metrics." :
             "Lots of active tasks. Focus on completing a few small ones first."}
          </p>
          
          {stats.total > 0 && (
            <div className="space-y-3 mt-6">
              <div className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-zinc-900"></div>
                  <span className="text-zinc-600">Completed</span>
                </div>
                <span className="text-zinc-900">{stats.completed}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-zinc-200"></div>
                  <span className="text-zinc-600">Active</span>
                </div>
                <span className="text-zinc-900">{stats.active}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zinc-200/60 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4 text-zinc-500">
        <span className="text-xs font-medium uppercase tracking-wider">{title}</span>
        <iconify-icon icon={icon} width="16" height="16"></iconify-icon>
      </div>
      <span className="text-3xl font-medium tracking-tight text-zinc-900">{value}</span>
    </div>
  );
}