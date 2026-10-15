import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTodo } from '../../context/TodoContext';
import clsx from 'clsx';

export default function Sidebar({ onClose }) {
  const { lists, getActiveCount } = useTodo();

  return (
    <div className="flex flex-col h-full w-full py-4 md:py-6">
      <div className="px-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center shadow-sm">
            <iconify-icon icon="solar:check-square-linear" width="14"></iconify-icon>
          </div>
          <h1 className="font-medium tracking-tight text-sm">Tasks</h1>
        </div>
        <button 
          onClick={onClose}
          className="md:hidden text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 p-1"
        >
          <iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
        </button>
      </div>

      <div className="px-3 flex-1 overflow-y-auto">
        <div className="text-xs font-medium tracking-tight text-neutral-400 dark:text-neutral-500 uppercase px-3 mb-2">
          Your Lists
        </div>
        <nav className="space-y-0.5">
          {lists.map((list) => {
            const count = getActiveCount(list.id);
            return (
              <NavLink
                key={list.id}
                to={`/list/${list.id}`}
                onClick={() => {
                  // Close sidebar on mobile when navigating
                  if (window.innerWidth < 768 && onClose) onClose();
                }}
                className={({ isActive }) => clsx(
                  "flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 outline-none",
                  isActive 
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-sm border border-neutral-200/50 dark:border-neutral-700/50 font-medium" 
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40 hover:text-neutral-900 dark:hover:text-neutral-200 border border-transparent"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <iconify-icon 
                    icon={list.icon} 
                    width="18" 
                    class={clsx("transition-colors")}
                  ></iconify-icon>
                  <span>{list.name}</span>
                </div>
                {count > 0 && (
                  <span className="text-xs py-0.5 px-1.5 rounded-md bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-500 dark:text-neutral-400">
                    {count}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="px-6 mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200/60 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80" 
            alt="User profile" 
            className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-700 object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-tight">Alex Carter</span>
            <span className="text-xs text-neutral-500">Pro Plan</span>
          </div>
        </div>
      </div>
    </div>
  );
}