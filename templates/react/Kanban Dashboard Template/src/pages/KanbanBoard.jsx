import React, { useState } from 'react';
import { useAppState } from '../context/AppStateContext';
import Column from '../components/kanban/Column';
import CreateTaskModal from '../components/kanban/CreateTaskModal';

const COLUMNS = [
  { id: 'pending', title: 'Pending', icon: 'solar:clock-circle-bold-duotone', color: 'text-slate-400', bg: 'bg-slate-500/10', gradient: 'from-slate-400 to-slate-500' },
  { id: 'in-progress', title: 'In Progress', icon: 'solar:bolt-circle-bold-duotone', color: 'text-violet-400', bg: 'bg-violet-500/10', gradient: 'from-violet-400 to-fuchsia-500' },
  { id: 'review', title: 'Review', icon: 'solar:eye-bold-duotone', color: 'text-amber-400', bg: 'bg-amber-500/10', gradient: 'from-amber-400 to-orange-400' },
  { id: 'done', title: 'Done', icon: 'solar:check-circle-bold-duotone', color: 'text-emerald-400', bg: 'bg-emerald-500/10', gradient: 'from-emerald-400 to-teal-400' }
];

export default function KanbanBoard() {
  const { 
    tasks, 
    showTraineeOnly, 
    setIsModalOpen, 
    updateTaskStatus, 
    toast,
    currentUser,
    currentUserRole
  } = useAppState();
  
  const [draggedTaskId, setDraggedTaskId] = useState(null);

  const filteredTasks = tasks.filter(task => {
    // RBAC: Non-admins can only see their own assigned tasks
    if (currentUserRole !== 'Admin' && task.assignee.name !== currentUser.name) {
      return false;
    }
    // Trainee toggle strictly for filtering current view
    if (showTraineeOnly && task.assignee.role !== 'Trainee') {
      return false;
    }
    return true;
  });

  const handleDragStart = (e, id) => {
    setDraggedTaskId(id);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id); // Required for Firefox
    
    // Smooth visual ghosting effect with scale and slight rotation
    setTimeout(() => {
      const el = document.getElementById(`task-${id}`);
      if(el) {
        el.classList.add('opacity-40', 'scale-95', 'rotate-2', 'ring-2', 'ring-fuchsia-500');
        el.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      }
    }, 0);
  };

  const handleDragEnd = (e, id) => {
    setDraggedTaskId(null);
    const el = document.getElementById(`task-${id}`);
    if(el) el.classList.remove('opacity-40', 'scale-95', 'rotate-2', 'ring-2', 'ring-fuchsia-500');
  };

  const handleDrop = (status) => {
    if (draggedTaskId) {
      let finalStatus = status;
      
      // RBAC: Trainees cannot move tasks directly to "Done"
      if (currentUserRole === 'Trainee' && status === 'done') {
        finalStatus = 'review';
      }

      updateTaskStatus(draggedTaskId, finalStatus);
      setDraggedTaskId(null);
    }
  };

  return (
    <div className="relative flex flex-col h-full z-0">
      
      {/* Glassmorphic Control Header */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Project Workspace
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1.5">
            Manage and track your team's progress seamlessly.
          </p>
        </div>
        
        {/* RBAC: Only Admins can create tasks */}
        {currentUserRole === 'Admin' && (
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(168,85,247,0.4)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <iconify-icon icon="solar:add-circle-bold-duotone" width="22" height="22" className="relative z-10"></iconify-icon>
            <span className="relative z-10">Create New Task</span>
          </button>
        )}
      </div>

      {/* Kanban Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 min-h-0">
        {COLUMNS.map(column => (
          <Column 
            key={column.id}
            column={column}
            tasks={filteredTasks.filter(t => t.status === column.id)}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrop={() => handleDrop(column.id)}
          />
        ))}
      </div>

      {/* Futuristic Toast Notification */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 transform">
          <div className="flex items-center gap-3 bg-slate-900/90 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] px-5 py-3.5 rounded-2xl">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${toast.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-fuchsia-500/20 text-fuchsia-400'}`}>
              <iconify-icon 
                icon={toast.type === 'success' ? "solar:check-circle-bold-duotone" : "solar:info-circle-bold-duotone"} 
                width="20"
              ></iconify-icon>
            </div>
            <span className="text-sm font-semibold text-white tracking-wide">{toast.message}</span>
          </div>
        </div>
      )}

      <CreateTaskModal />
    </div>
  );
}