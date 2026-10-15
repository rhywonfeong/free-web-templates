import React, { useState } from 'react';
import TaskCard from './TaskCard';

export default function Column({ column, tasks, onDragStart, onDragEnd, onDrop }) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    onDrop();
  };

  return (
    <div className="flex flex-col h-full bg-white/30 backdrop-blur-2xl rounded-[2rem] p-5 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:bg-white/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
      
      {/* Sleek top gradient glow for each column */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${column.gradient} opacity-90 shadow-[0_0_15px_rgba(255,255,255,0.5)]`}></div>

      {/* Column Header */}
      <div className="flex items-center justify-between mb-5 relative z-10 mt-1">
        <div className="flex items-center gap-3">
          <div className={`flex items-center justify-center w-11 h-11 rounded-2xl ${column.bg} shadow-[inset_0_2px_10px_rgba(255,255,255,0.8)] border border-white/40 backdrop-blur-md`}>
            <iconify-icon icon={column.icon} className={`${column.color} drop-shadow-sm`} width="24" height="24"></iconify-icon>
          </div>
          <h2 className="font-bold text-lg tracking-tight text-slate-800 drop-shadow-sm">{column.title}</h2>
        </div>
        <span className={`flex items-center justify-center min-w-[28px] h-7 px-2 rounded-full bg-white/90 text-sm font-extrabold shadow-sm border border-white backdrop-blur-md ${column.color}`}>
          {tasks.length}
        </span>
      </div>

      {/* Task List Container */}
      <div 
        className={`flex-1 flex flex-col gap-4 min-h-[150px] transition-all duration-300 rounded-2xl p-2 -mx-2 relative z-10
          ${isDragOver ? 'bg-white/50 shadow-[inset_0_0_30px_rgba(139,92,246,0.15)] ring-2 ring-violet-400/50 scale-[1.02]' : 'bg-transparent'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          />
        ))}
      </div>
    </div>
  );
}