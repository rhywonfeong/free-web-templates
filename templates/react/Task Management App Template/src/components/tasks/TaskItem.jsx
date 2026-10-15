import React from 'react';
import { useTodo } from '../../context/TodoContext';
import clsx from 'clsx';

export default function TaskItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <div 
      className={clsx(
        "group flex items-center justify-between p-3 md:p-4 rounded-xl transition-all duration-200 border",
        todo.completed 
          ? "bg-transparent border-transparent" 
          : "bg-white dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800/60 shadow-sm hover:border-neutral-200 dark:hover:border-neutral-700"
      )}
    >
      <div className="flex items-center gap-3 md:gap-4 flex-1 overflow-hidden cursor-pointer" onClick={() => toggleTodo(todo.id)}>
        
        {/* Custom Checkbox */}
        <button 
          className={clsx(
            "flex-shrink-0 w-[22px] h-[22px] rounded-full border flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950",
            todo.completed 
              ? "bg-neutral-900 dark:bg-neutral-100 border-neutral-900 dark:border-neutral-100 text-white dark:text-neutral-900 scale-95" 
              : "border-neutral-300 dark:border-neutral-600 bg-transparent text-transparent hover:border-neutral-400 dark:hover:border-neutral-500 scale-100"
          )}
          aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
          onClick={(e) => {
            e.stopPropagation();
            toggleTodo(todo.id);
          }}
        >
          <iconify-icon 
            icon="solar:check-read-linear" 
            width="14" 
            class={clsx(
              "transition-transform duration-300",
              todo.completed ? "scale-100 opacity-100" : "scale-50 opacity-0"
            )}
          ></iconify-icon>
        </button>

        {/* Task Text */}
        <span 
          className={clsx(
            "text-sm flex-1 truncate transition-all duration-300 select-none",
            todo.completed 
              ? "text-neutral-400 dark:text-neutral-600 line-through decoration-neutral-300 dark:decoration-neutral-700" 
              : "text-neutral-800 dark:text-neutral-200 font-medium"
          )}
        >
          {todo.text}
        </span>
      </div>

      {/* Actions (Delete) */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        className={clsx(
          "ml-2 p-1.5 rounded-md text-neutral-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-200 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400",
          "opacity-0 md:group-hover:opacity-100 focus-within:opacity-100"
        )}
        aria-label="Delete task"
      >
        <iconify-icon icon="solar:trash-bin-minimalistic-linear" width="18"></iconify-icon>
      </button>

      {/* Mobile delete button (always visible slightly on mobile) */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        className="md:hidden ml-2 p-1.5 rounded-md text-neutral-300 hover:text-red-500"
        aria-label="Delete task"
      >
         <iconify-icon icon="solar:trash-bin-minimalistic-linear" width="18"></iconify-icon>
      </button>
    </div>
  );
}