import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import TopBar from '../components/dashboard/TopBar';
import SpotlightCard from '../components/SpotlightCard';
import PlayerCardDetailed from '../components/PlayerCardDetailed';

const Sonar = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-sonar absolute inline-flex h-full w-full rounded-full bg-pitch-500 opacity-75"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-pitch-500"></span>
  </span>
);

const DashboardNoodles = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 mix-blend-multiply dark:opacity-20 dark:mix-blend-screen">
    <svg className="absolute top-0 left-0 w-full h-[600px]" preserveAspectRatio="none">
      <path d="M -100,50 C 300,100 400,200 1000,50 S 1400,300 2000,100" fill="none" className="noodle-path stroke-2" />
      <path d="M -100,50 C 300,100 400,200 1000,50 S 1400,300 2000,100" fill="none" className="noodle-beam stroke-2" />
    </svg>
  </div>
);

// Mock Data
const playerData = {
  id: '01',
  name: 'Jamal Musiala',
  nat: 'GER',
  club: 'Bayern Munich',
  position: 'CAM',
  age: 21,
  height: '1.84m',
  foot: 'Right',
  ovr: 89,
  image: 'https://images.unsplash.com/photo-1518605368461-1ee061320d36?w=800&q=80',
  stats: [
    { label: 'PAC', val: 86 },
    { label: 'SHO', val: 83 },
    { label: 'PAS', val: 85 },
    { label: 'DRI', val: 94 },
    { label: 'DEF', val: 54 },
    { label: 'PHY', val: 68 },
  ]
};

const performanceData = [
  { match: 'Match 1', rating: 7.8 },
  { match: 'Match 2', rating: 8.2 },
  { match: 'Match 3', rating: 7.5 },
  { match: 'Match 4', rating: 9.1 },
  { match: 'Match 5', rating: 8.8 },
  { match: 'Match 6', rating: 9.4 },
];

export default function PlayerProfile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { id } = useParams();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Background vertical container lines spanning the entire page */}
      <div className="pointer-events-none fixed inset-0 z-[-1] mx-auto flex w-full max-w-[90rem] justify-evenly px-4 lg:px-8">
        <div className="h-full w-px bg-slate-200/50 dark:bg-slate-800/40"></div>
        <div className="hidden h-full w-px bg-slate-200/50 dark:bg-slate-800/40 md:block"></div>
        <div className="hidden h-full w-px bg-slate-200/50 dark:bg-slate-800/40 lg:block"></div>
        <div className="h-full w-px bg-slate-200/50 dark:bg-slate-800/40"></div>
      </div>

      <TopBar onMenuToggle={() => setIsMobileMenuOpen(true)} />

      {/* Hero Layout: Header Focus */}
      <header className="relative overflow-hidden border-b border-slate-200 bg-white/50 pt-16 pb-20 dark:border-slate-800 dark:bg-slate-950/50">
        <DashboardNoodles />
        
        <div className="relative z-10 mx-auto max-w-[90rem] px-4 lg:px-8">
          <nav className="mb-8 flex items-center gap-1.5 text-xs font-medium">
            <Link to="/dashboard" className="text-slate-500 transition-colors hover:text-pitch-600 dark:text-slate-400 dark:hover:text-pitch-400">Dashboard</Link>
            <iconify-icon icon="solar:alt-arrow-right-linear" className="text-xs text-slate-400 dark:text-slate-600"></iconify-icon>
            <span className="text-slate-500 dark:text-slate-400">Prospects</span>
            <iconify-icon icon="solar:alt-arrow-right-linear" className="text-xs text-slate-400 dark:text-slate-600"></iconify-icon>
            <span className="text-slate-900 dark:text-white">{playerData.name}</span>
          </nav>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-pitch-200 bg-pitch-50 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-pitch-600 uppercase dark:border-pitch-500/20 dark:bg-pitch-500/10 dark:text-pitch-400">
                  <Sonar /> Live Tracking Active
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold tracking-wider text-slate-600 uppercase shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Updated 2h ago
                </span>
              </div>
              <h1 className="mb-2 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
                {playerData.name}
              </h1>
              <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
                {playerData.position} • {playerData.club}
              </p>
            </div>
            
            <div className="flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-700/50">
                <iconify-icon icon="solar:star-linear" className="text-lg opacity-70"></iconify-icon> Shortlist
              </button>
              <button className="bg-pitch-600 hover:bg-pitch-500 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 focus:outline-none dark:bg-pitch-500 dark:hover:bg-pitch-400">
                <iconify-icon icon="solar:document-add-linear" className="text-lg"></iconify-icon> Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto w-full max-w-[90rem] flex-1 px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          
          {/* Left Column: Player Card */}
          <aside className="w-full shrink-0 lg:w-80">
            <PlayerCardDetailed player={playerData} />
          </aside>

          {/* Right Column: Detailed Stats & Charts */}
          <div className="flex w-full flex-col gap-6 min-w-0">
            
            {/* Attribute Radar */}
            <SpotlightCard className="p-6">
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                <h3 className="text-sm font-medium tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                  <iconify-icon icon="solar:radar-linear" className="text-lg text-pitch-500"></iconify-icon> Technical Profile
                </h3>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="h-[250px] w-[250px] shrink-0 md:h-[300px] md:w-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={playerData.stats}>
                      <PolarGrid stroke="#cbd5e1" className="dark:stroke-slate-700" />
                      <PolarAngleAxis 
                        dataKey="label" 
                        tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }} 
                      />
                      <Radar
                        name={playerData.name}
                        dataKey="val"
                        stroke="#07A751"
                        strokeWidth={2}
                        fill="#07A751"
                        fillOpacity={0.3}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-grow w-full">
                  {playerData.stats.map(s => (
                    <div key={s.label} className="bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-md p-3">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">{s.label}</span>
                      <span className="text-xl font-bold text-slate-900 dark:text-white block leading-none">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            {/* Performance Chart */}
            <SpotlightCard className="p-6">
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                <h3 className="text-sm font-medium tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                  <iconify-icon icon="solar:chart-line-up-linear" className="text-lg text-pitch-500"></iconify-icon> Recent Form
                </h3>
                <span className="text-xs font-medium bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400 px-2.5 py-1 rounded border border-accent-200 dark:border-accent-500/20 flex items-center gap-1">
                  Avg Rating: 8.4 <iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
                </span>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#07A751" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#07A751" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
                    <XAxis 
                      dataKey="match" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 11, fill: '#64748b' }} 
                      dy={10} 
                    />
                    <YAxis 
                      domain={[5, 10]}
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 11, fill: '#64748b' }} 
                    />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: '1px solid #e2e8f0', 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                      }} 
                      itemStyle={{ color: '#0f172a', fontWeight: 600 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="rating" 
                      stroke="#07A751" 
                      strokeWidth={2} 
                      fillOpacity={1} 
                      fill="url(#colorRating)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </SpotlightCard>

          </div>
        </div>
      </main>
    </div>
  );
}