import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectsGrid from './ProjectsGrid';
import FeaturesGrid from './FeaturesGrid';

const Showcase = () => {
  return (
    <div className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-[0_30px_60px_rgba(2,44,34,0.08)] overflow-hidden border border-emerald-900/5">
      
      {/* Top Section */}
      <div className="p-8 md:p-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-emerald-900/10 pb-8 mb-16 gap-8">
          <div className="flex items-center gap-12">
            <span className="text-xs font-semibold tracking-widest text-emerald-900/40 uppercase">Curriculum</span>
            <span className="text-xs font-semibold tracking-widest text-emerald-900/40 uppercase">Pedagogy</span>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <div className="text-2xl font-bold tracking-tight text-emerald-950">94.2%</div>
              <div className="text-[10px] font-medium tracking-widest text-emerald-900/40 uppercase mt-1">Engagement</div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-[5rem] md:text-[9rem] leading-none font-extrabold tracking-tighter text-[#022c22] -ml-2">
            Lumina.
          </h2>
        </div>

        {/* Navigation Row */}
        <div className="flex flex-wrap gap-8 md:gap-16 border-b border-emerald-900/10 pb-6 mb-16 text-xs font-bold tracking-widest uppercase text-emerald-900/50">
          <span className="text-emerald-950 relative">
            Overview
            <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-lime-400"></span>
          </span>
          <span className="hover:text-emerald-950 cursor-pointer transition-colors">Methodology</span>
          <span className="hover:text-emerald-950 cursor-pointer transition-colors">Classrooms</span>
          <span className="hover:text-emerald-950 cursor-pointer transition-colors">Outcomes</span>
        </div>

        {/* Projects Section Title */}
        <div className="flex justify-between items-end mb-10">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-950">Modules</h3>
          <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-900 hover:text-lime-600 transition-colors group">
            View All
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <ProjectsGrid />
      </div>

      {/* Features Grid attached to bottom of showcase */}
      <FeaturesGrid />
    </div>
  );
};

export default Showcase;