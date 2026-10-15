import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export default function TodoInput() {
  const [value, setValue] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative flex items-center border-b border-zinc-100 bg-white"
    >
      <div className="absolute left-4 text-zinc-300 flex items-center pointer-events-none">
        <iconify-icon icon="solar:pen-new-square-linear" width="20" height="20"></iconify-icon>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="w-full bg-transparent py-4 pl-12 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
      />
      {value.trim() && (
        <button 
          type="submit"
          className="absolute right-3 px-3 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-md hover:bg-zinc-800 transition-colors"
        >
          Add
        </button>
      )}
    </form>
  );
}