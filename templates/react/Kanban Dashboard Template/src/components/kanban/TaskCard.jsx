import React from 'react';
import { useAppState } from '../../context/AppStateContext';

const PRIORITY_STYLES = {
  high: 'bg-rose-100/90 text-rose-700 border-rose-200/60 shadow-[0_2px_10px_-2px_rgba(225,29,72,0.15)]',
  medium: 'bg-amber-100/90 text-amber-700 border-amber-200/60 shadow-[0_2px_10px_-2px_rgba(217,119,6,0.15)]',
  low: 'bg-emerald-100/90 text-emerald-700 border-emerald-200/60 shadow-[0_2px_10px_-2px_rgba(5,150,105,0.15)]',
};

const ROLE_STYLES = {
  Admin: 'bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-md shadow-slate-900/20',
  Executor: 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/20',
  Trainee: 'bg-gradient-to-r from-orange-400 to-rose-400 text-white shadow-md shadow-orange-500/20',
};

export default function TaskCard({ task, onDragStart, onDragEnd }) {
  const { currentUserRole, updateTaskStatus } = useAppState();

  return (
    <div 
      id={`task-${task.id}`}
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
      onDragEnd={(e) => onDragEnd(e, task.id)}
      className="relative bg-white/60 backdrop-blur-xl p-5 rounded-2xl border border-white/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] cursor-grab active:cursor-grabbing hover:bg-white/90 hover:shadow-[0_12px_30px_-8px_rgba(139,92,246,0.3)] hover:border-violet-200 hover:-translate-y-1 transition-all duration-300 ease-out group overflow-hidden flex flex-col"
    >
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-fuchsia-500/0 group-hover:from-violet-500/5 group-hover:to-fuchsia-500/5 transition-all duration-300 pointer-events-none"></div>

      <div className="flex justify-between items-start mb-3 relative z-10">
        <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md border ${PRIORITY_STYLES[task.priority]} backdrop-blur-sm`}>
          {task.priority}
        </span>
        
        {/* Sleek action icon */}
        <button className="text-slate-400/50 opacity-0 group-hover:opacity-100 hover:text-violet-600 hover:bg-violet-50 p-1.5 rounded-lg transition-all duration-200">
          <iconify-icon icon="solar:menu-dots-bold" width="18" height="18"></iconify-icon>
        </button>
      </div>

      <h3 className="font-bold text-slate-800 mb-2 leading-snug tracking-tight relative z-10 group-hover:text-violet-950 transition-colors">
        {task.title}
      </h3>
      <p className="text-sm font-medium text-slate-500 line-clamp-2 mb-5 relative z-10 flex-1">
        {task.description}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/60 relative z-10">
        <div className="flex items-center gap-2.5">
          <img 
            src={task.assignee.avatar} 
            alt={task.assignee.name}
            className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm group-hover:ring-2 ring-violet-400/50 transition-all duration-300" 
          />
          <span className="text-xs font-semibold text-slate-700">{task.assignee.name}</span>
        </div>
        
        <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md ${ROLE_STYLES[task.assignee.role]}`}>
          {task.assignee.role}
        </span>
      </div>

      {/* RBAC: Admin Approval Action */}
      {currentUserRole === 'Admin' && task.status === 'review' && (
        <button
          onClick={(e) => {
            // Prevent drag start if clicking the button
            e.stopPropagation();
            updateTaskStatus(task.id, 'done');
          }}
          className="w-full mt-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-[11px] uppercase tracking-widest rounded-xl shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_16px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative z-10 flex items-center justify-center gap-2"
        >
          <iconify-icon icon="solar:check-read-bold-duotone" width="16"></iconify-icon>
          Approve Task
        </button>
      )}
    </div>
  );
}