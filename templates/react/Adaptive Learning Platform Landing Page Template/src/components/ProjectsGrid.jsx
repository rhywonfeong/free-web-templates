import React from 'react';

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Large Left Image */}
      <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] md:aspect-auto">
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0077477e-f13a-44af-ac13-6fe3d0f0fd5c_1600w.png" 
          alt="Modern classroom environment" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <div className="text-lime-300 text-xs font-bold tracking-widest uppercase mb-2">Core Subject</div>
            <div className="text-white text-2xl font-semibold tracking-tight">Adaptive Mathematics</div>
          </div>
        </div>
      </div>

      {/* Smaller Right Images Column */}
      <div className="md:col-span-4 flex flex-col gap-6">
        <div className="group relative overflow-hidden rounded-2xl bg-slate-100 h-[250px] md:h-[50%]">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6991bd48-3d71-4254-82e4-c3e32daa56e1_800w.png" 
            alt="Student writing in a notebook next to a tablet" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-emerald-950">
            Active
          </div>
        </div>
        
        <div className="bg-emerald-950 rounded-2xl p-8 h-[250px] md:h-[50%] flex flex-col justify-between text-white group hover:bg-emerald-900 transition-colors">
          <div className="w-10 h-10 bg-emerald-800/50 rounded-full flex items-center justify-center">
             <div className="w-4 h-4 bg-lime-400 rotate-45"></div>
          </div>
          <div>
            <div className="text-4xl font-light tracking-tighter mb-2 text-lime-400">3.2x</div>
            <div className="text-xs tracking-widest uppercase text-emerald-300/70 font-medium">Learning Velocity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;