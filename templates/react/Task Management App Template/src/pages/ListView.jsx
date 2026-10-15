import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTodo } from '../context/TodoContext';
import TaskInput from '../components/tasks/TaskInput';
import TaskItem from '../components/tasks/TaskItem';

export default function ListView() {
  const { listId } = useParams();
  const { lists, getTodosByList, clearCompleted } = useTodo();

  const currentList = useMemo(() => lists.find(l => l.id === listId), [lists, listId]);
  const todos = getTodosByList(listId);
  
  const activeTodos = todos.filter(t => !t.completed);
  const completedTodos = todos.filter(t => t.completed);

  if (!currentList) {
    return <Navigate to="/list/inbox" replace />;
  }

  return (
    <div className="h-full flex flex-col items-center p-4 md:p-8 overflow-y-auto">
      <div className="w-full max-w-3xl flex flex-col min-h-full pb-12">
        
        {/* Header */}
        <header className="mb-8 pt-4 md:pt-10 flex items-end justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white dark:bg-neutral-900 shadow-sm border border-neutral-200/50 dark:border-neutral-800/50 text-neutral-700 dark:text-neutral-300">
              <iconify-icon icon={currentList.icon} width="24"></iconify-icon>
            </div>
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">
              {currentList.name}
            </h1>
          </div>
          
          <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium tracking-tight">
            {activeTodos.length} active tasks
          </div>
        </header>

        {/* Task Input Section */}
        <div className="mb-8">
          <TaskInput listId={listId} />
        </div>

        {/* Task List Section */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Active Tasks */}
          {activeTodos.length > 0 ? (
            <div className="flex flex-col gap-1">
              {activeTodos.map(todo => (
                <TaskItem key={todo.id} todo={todo} />
              ))}
            </div>
          ) : (
             <div className="py-12 flex flex-col items-center justify-center text-center px-4">
              <div className="w-16 h-16 mb-4 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 dark:text-neutral-600">
                 <iconify-icon icon="solar:tea-cup-linear" width="32"></iconify-icon>
              </div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">All caught up</p>
              <p className="text-sm text-neutral-500 max-w-[250px]">
                There are no active tasks in this list. Add a new task above to get started.
              </p>
            </div>
          )}

          {/* Completed Tasks */}
          {completedTodos.length > 0 && (
            <div className="mt-4 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
              <div className="flex items-center justify-between mb-3 px-2">
                <h3 className="text-xs font-medium tracking-tight text-neutral-400 dark:text-neutral-500 uppercase">
                  Completed
                </h3>
                <button 
                  onClick={() => clearCompleted(listId)}
                  className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors flex items-center gap-1"
                >
                  <iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon>
                  Clear all
                </button>
              </div>
              <div className="flex flex-col gap-1 opacity-60 hover:opacity-100 transition-opacity duration-300">
                {completedTodos.map(todo => (
                  <TaskItem key={todo.id} todo={todo} />
                ))}
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}