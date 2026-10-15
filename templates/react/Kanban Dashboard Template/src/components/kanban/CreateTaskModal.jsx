import React, { useState } from 'react';
import { useAppState } from '../../context/AppStateContext';

export default function CreateTaskModal() {
  const { isModalOpen, setIsModalOpen, addTask, mockUsers } = useAppState();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    assigneeRole: 'Executor',
    status: 'pending'
  });

  const [errors, setErrors] = useState({});

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addTask({
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      status: formData.status,
      assignee: mockUsers[formData.assigneeRole]
    });

    setFormData({ title: '', description: '', priority: 'medium', assigneeRole: 'Executor', status: 'pending' });
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Deep Blur Backdrop */}
      <div 
        className="absolute inset-0 bg-[#050505]/60 backdrop-blur-xl modal-overlay"
        onClick={() => setIsModalOpen(false)}
      ></div>

      {/* Glassmorphic Modal Content - Dark Theme */}
      <div className="bg-[#0f111a]/80 backdrop-blur-3xl rounded-[2rem] w-full max-w-lg shadow-[0_16px_64px_rgba(0,0,0,0.5)] relative z-10 modal-content border border-white/10 overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:px-8 sm:pt-8 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <iconify-icon icon="solar:pen-new-square-bold-duotone" width="24" height="24"></iconify-icon>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white">
                Create New Task
              </h2>
              <p className="text-sm font-medium text-slate-400 mt-0.5">Add details for your team's next goal.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="text-slate-400 hover:text-rose-400 hover:bg-white/5 p-2.5 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Close modal"
          >
            <iconify-icon icon="solar:close-circle-bold-duotone" width="28" height="28"></iconify-icon>
          </button>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto p-6 sm:px-8 custom-scrollbar">
          <form id="create-task-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Title Field */}
            <div>
              <label htmlFor="title" className="block text-sm font-bold text-slate-300 mb-2 ml-1">Task Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Update homepage hero section"
                className={`w-full px-5 py-3.5 rounded-2xl border ${errors.title ? 'border-rose-500/50 focus:ring-rose-500/20 bg-rose-500/5' : 'border-white/10 focus:border-violet-500 focus:ring-violet-500/20 bg-black/40'} shadow-inner outline-none focus:ring-4 transition-all text-sm text-white placeholder:text-slate-600`}
              />
              {errors.title && <p className="text-rose-400 text-sm font-medium mt-2 ml-1 flex items-center gap-1"><iconify-icon icon="solar:danger-circle-bold" width="16"></iconify-icon>{errors.title}</p>}
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-sm font-bold text-slate-300 mb-2 ml-1">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide details about what needs to be done..."
                rows="4"
                className={`w-full px-5 py-4 rounded-2xl border ${errors.description ? 'border-rose-500/50 focus:ring-rose-500/20 bg-rose-500/5' : 'border-white/10 focus:border-violet-500 focus:ring-violet-500/20 bg-black/40'} shadow-inner outline-none focus:ring-4 transition-all text-sm resize-none text-white placeholder:text-slate-600`}
              ></textarea>
              {errors.description && <p className="text-rose-400 text-sm font-medium mt-2 ml-1 flex items-center gap-1"><iconify-icon icon="solar:danger-circle-bold" width="16"></iconify-icon>{errors.description}</p>}
            </div>

            {/* Select Grids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Priority */}
              <div>
                <label htmlFor="priority" className="block text-sm font-bold text-slate-300 mb-2 ml-1">Priority Level</label>
                <div className="relative group">
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-2xl border border-white/10 focus:border-violet-500 focus:ring-violet-500/20 bg-black/40 shadow-inner outline-none focus:ring-4 transition-all text-sm appearance-none text-white cursor-pointer"
                  >
                    <option value="low" className="bg-slate-900">Low Priority</option>
                    <option value="medium" className="bg-slate-900">Medium Priority</option>
                    <option value="high" className="bg-slate-900">High Priority</option>
                  </select>
                  <iconify-icon icon="solar:alt-arrow-down-linear" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within:text-violet-400 transition-colors" width="20"></iconify-icon>
                </div>
              </div>

              {/* Assignee */}
              <div>
                <label htmlFor="assigneeRole" className="block text-sm font-bold text-slate-300 mb-2 ml-1">Assign To Role</label>
                <div className="relative group">
                  <select
                    id="assigneeRole"
                    name="assigneeRole"
                    value={formData.assigneeRole}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-2xl border border-white/10 focus:border-violet-500 focus:ring-violet-500/20 bg-black/40 shadow-inner outline-none focus:ring-4 transition-all text-sm appearance-none text-white cursor-pointer"
                  >
                    <option value="Admin" className="bg-slate-900">Admin</option>
                    <option value="Executor" className="bg-slate-900">Executor</option>
                    <option value="Trainee" className="bg-slate-900">Trainee</option>
                  </select>
                  <iconify-icon icon="solar:alt-arrow-down-linear" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within:text-violet-400 transition-colors" width="20"></iconify-icon>
                </div>
              </div>
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="p-6 sm:px-8 border-t border-white/10 bg-black/20 flex justify-end gap-4 mt-auto">
          <button 
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-3 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Cancel
          </button>
          <button 
            type="submit"
            form="create-task-form"
            className="group relative flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(168,85,247,0.4)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10">Create Task</span>
            <iconify-icon icon="solar:arrow-right-linear" width="18" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"></iconify-icon>
          </button>
        </div>

      </div>
    </div>
  );
}