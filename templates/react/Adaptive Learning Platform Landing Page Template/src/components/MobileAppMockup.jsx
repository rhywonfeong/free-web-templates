import React, { useState } from 'react';
import { Activity, Book, RefreshCcw, TrendingUp } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { value: 40 }, { value: 30 }, { value: 55 }, 
  { value: 45 }, { value: 70 }, { value: 65 }, 
  { value: 85 }, { value: 75 }, { value: 95 }
];

const MobileAppMockup = () => {
  const [activeTab, setActiveTab] = useState('YEAR');

  return (
    <div className="relative mx-auto w-[320px] h-[660px] rounded-[3rem] border-[10px] border-emerald-950 bg-[#f8fafc] shadow-[0_50px_100px_rgba(2,44,34,0.15)] overflow-hidden flex flex-col font-sans transform transition-transform hover:-translate-y-2 duration-500">
      
      {/* Fake Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-emerald-950 rounded-b-2xl z-20 flex items-center justify-center gap-2">
        <div className="w-1 h-1 rounded-full bg-emerald-800"></div>
        <div className="w-12 h-1.5 rounded-full bg-emerald-900"></div>
      </div>

      {/* App Header */}
      <div className="pt-12 px-6 pb-6 bg-white rounded-b-3xl shadow-sm z-10 relative">
        <div className="flex justify-between items-center mb-6">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
             <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-emerald-950">Progress</h2>
          <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center">
             <div className="w-1 h-1 bg-emerald-950 rounded-full shadow-[4px_0_0_0_#022c22,-4px_0_0_0_#022c22]"></div>
          </div>
        </div>

        {/* Segmented Control */}
        <div className="bg-slate-100 p-1 rounded-full flex text-[10px] font-bold tracking-widest uppercase mb-8">
          <button 
            onClick={() => setActiveTab('MONTH')}
            className={`flex-1 py-2 rounded-full transition-all ${activeTab === 'MONTH' ? 'bg-white shadow-sm text-emerald-950' : 'text-emerald-900/40 hover:text-emerald-900/60'}`}
          >
            Semester
          </button>
          <button 
            onClick={() => setActiveTab('YEAR')}
            className={`flex-1 py-2 rounded-full transition-all ${activeTab === 'YEAR' ? 'bg-white shadow-sm text-emerald-950' : 'text-emerald-900/40 hover:text-emerald-900/60'}`}
          >
            Year
          </button>
        </div>

        {/* Main Metric */}
        <div className="text-center mb-6">
          <div className="text-[4rem] leading-none font-bold tracking-tighter text-emerald-950 flex items-start justify-center">
            75<span className="text-2xl mt-2 text-lime-500">%</span>
          </div>
          <div className="text-xs font-medium tracking-widest uppercase text-emerald-900/40 mt-2">Knowledge Mastery</div>
        </div>

        {/* Progress Bar / Chart area */}
        <div className="h-16 w-full relative mb-2">
           <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Scrollable Content Below */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar pb-24">
        
        {/* Module Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-900/5">
            <div className="w-8 h-8 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center mb-4">
              <TrendingUp size={16} />
            </div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-emerald-900/40 mb-1">Focus</div>
            <div className="text-lg font-bold tracking-tight text-emerald-950">94%</div>
          </div>
          
          <div className="bg-emerald-950 p-4 rounded-2xl shadow-sm text-white">
            <div className="w-8 h-8 rounded-full bg-emerald-800 text-emerald-300 flex items-center justify-center mb-4">
              <Activity size={16} />
            </div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-emerald-300/60 mb-1">Status</div>
            <div className="text-lg font-bold tracking-tight text-white">On Track</div>
          </div>
        </div>

        {/* List Item */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-900/5 flex items-center gap-4">
           <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-emerald-600">
             <RefreshCcw size={18} />
           </div>
           <div>
             <div className="text-sm font-bold text-emerald-950">Concept Review</div>
             <div className="text-[10px] font-medium tracking-widest uppercase text-emerald-900/40 mt-0.5">Completed 2h ago</div>
           </div>
        </div>

      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-14 bg-emerald-950 rounded-full flex items-center justify-between px-6 shadow-2xl z-20">
        <Activity size={20} className="text-lime-400 cursor-pointer" />
        <Book size={20} className="text-emerald-500/50 hover:text-emerald-300 cursor-pointer transition-colors" />
        <div className="w-6 h-6 rounded-full border-2 border-emerald-500/50 hover:border-emerald-300 cursor-pointer transition-colors"></div>
      </div>

    </div>
  );
};

export default MobileAppMockup;