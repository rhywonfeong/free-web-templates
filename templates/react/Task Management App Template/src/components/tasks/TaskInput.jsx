import React, { useState } from 'react';
import { useTodo } from '../../context/TodoContext';
import clsx from 'clsx';

export default function TaskInput({ listId }) {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, listId);
      setText('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={clsx(
        "relative flex items-center w-full rounded-xl transition-all duration-300 overflow-hidden bg-white dark:bg-neutral-900 shadow-sm border",
        isFocused 
          ? "border-neutral-400 dark:border-neutral-500 shadow-md ring-1 ring-neutral-400/20 dark:ring-neutral-500/20" 
          : "border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700"
      )}
    >
      <div className="pl-4 pr-3 py-3.5 flex items-center justify-center text-neutral-400 dark:text-neutral-500">
        <iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
      </div>
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Add a new task..."
        className="flex-1 w-full bg-transparent outline-none py-3.5 pr-4 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
      />
      
      {/* Submit helper hint - shows when typing */}
      <div className={clsx(
        "absolute right-3 px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-xs font-medium tracking-tight text-neutral-500 pointer-events-none transition-opacity duration-200",
        text.trim() && isFocused ? "opacity-100" : "opacity-0"
      )}>
        Press Enter
      </div>
    </form>
  );
}