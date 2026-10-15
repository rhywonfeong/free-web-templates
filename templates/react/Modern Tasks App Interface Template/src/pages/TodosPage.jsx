import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTodos } from '../context/TodoContext';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import clsx from 'clsx';

export default function TodosPage() {
  const { todos, clearCompleted } = useTodos();
  const [searchParams, setSearchParams] = useSearchParams();
  const [copied, setCopied] = useState(false);
  
  // Read filter from URL, default to 'all'
  const filter = searchParams.get('filter') || 'all';

  const setFilter = (newFilter) => {
    if (newFilter === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ filter: newFilter });
    }
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active': return todos.filter(t => !t.completed);
      case 'completed': return todos.filter(t => t.completed);
      default: return todos;
    }
  }, [todos, filter]);

  const activeCount = todos.filter(t => !t.completed).length;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-medium tracking-tight text-zinc-900 mb-1">Good morning</h1>
          <p className="text-sm text-zinc-500">You have {activeCount} active {activeCount === 1 ? 'task' : 'tasks'} today.</p>
        </div>
        <button
          onClick={handleCopyLink}
          className={clsx(
            "flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md shadow-sm border transition-all duration-200",
            copied 
              ? "bg-zinc-900 text-white border-zinc-900" 
              : "bg-white text-zinc-500 border-zinc-200/80 hover:text-zinc-900 hover:bg-zinc-50"
          )}
          title="Copy permanent link"
        >
          <iconify-icon 
            icon={copied ? "solar:check-circle-linear" : "solar:link-linear"} 
            width="14" 
            height="14"
          />
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200/60 overflow-hidden flex flex-col transition-all">
        <TodoInput />
        
        <div className="flex-1 overflow-y-auto max-h-[60vh] min-h-[300px]">
          {filteredTodos.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-400 py-16 gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center">
                <iconify-icon icon="solar:tea-cup-linear" width="24" height="24"></iconify-icon>
              </div>
              <p className="text-sm font-medium">No tasks found. Time to relax!</p>
            </div>
          ) : (
            <ul className="divide-y divide-zinc-100">
              {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </ul>
          )}
        </div>

        {/* Footer actions */}
        <div className="h-12 border-t border-zinc-100 bg-zinc-50/50 flex items-center justify-between px-4 text-xs font-medium text-zinc-500">
          <span>{activeCount} items left</span>
          
          <div className="flex gap-1 hidden sm:flex">
            {['all', 'active', 'completed'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={clsx(
                  "px-2.5 py-1 rounded capitalize transition-colors duration-200",
                  filter === f ? "bg-zinc-200 text-zinc-900" : "hover:bg-zinc-200/50 hover:text-zinc-800"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <button
            onClick={clearCompleted}
            className="hover:text-zinc-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={todos.filter(t => t.completed).length === 0}
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
}