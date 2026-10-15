import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const PortfolioAllocation = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-16 border-b border-emerald-900/10 pb-8">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-emerald-950">Skill<br/>Mastery</h2>
        <div className="w-16 h-16 rounded-full border border-emerald-900/20 flex items-center justify-center text-emerald-950 hover:bg-emerald-950 hover:text-white transition-all cursor-pointer group">
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Card */}
        <div className="lg:col-span-3 bg-white p-8 rounded-3xl border border-emerald-900/5 shadow-sm flex flex-col justify-between min-h-[400px]">
          <div>
            <div className="w-12 h-12 bg-lime-100 text-lime-700 rounded-xl flex items-center justify-center mb-8">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-emerald-950 mb-4">Adaptive Learning<br/>Strategy</h3>
            <p className="text-sm text-emerald-800/60 leading-relaxed">
              Proprietary assessment algorithms map student proficiency across distinct cognitive domains, maintaining strict curriculum standards.
            </p>
          </div>
          
          <div className="pt-8 border-t border-emerald-900/10 mt-8">
            <div className="flex justify-between items-end">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-900/40">Active Learners</span>
              <span className="text-xl font-bold text-emerald-950">2.4M</span>
            </div>
          </div>
        </div>

        {/* Middle 3D simulation elements */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <div className="bg-lime-300 rounded-3xl p-6 h-1/2 flex items-center justify-center shadow-inner relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
             <div className="text-4xl font-bold tracking-tighter text-emerald-950 relative z-10 group-hover:scale-110 transition-transform">45%</div>
          </div>
          <div className="bg-emerald-950 rounded-3xl p-6 h-1/2 flex items-center justify-center shadow-2xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
             <div className="text-4xl font-bold tracking-tighter text-white relative z-10 group-hover:scale-110 transition-transform">30%</div>
          </div>
        </div>

        {/* Right Tall Image */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden relative min-h-[400px]">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3c61453-3f8e-416c-b8c9-c3c44118d41a_1600w.png" 
            alt="Students collaborating and studying" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-emerald-950 shadow-sm">
              Foundational
            </span>
            <span className="bg-emerald-950/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-white shadow-sm">
              Advanced
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioAllocation;