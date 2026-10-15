import React, { useState, useRef, useEffect } from 'react';
import { useTodos } from '../context/TodoContext';
import clsx from 'clsx';

export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, updateTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSubmit = () => {
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
    if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className="group flex items-center justify-between py-3 px-4 hover:bg-zinc-50/80 transition-colors duration-200">
      <div className="flex items-center gap-3 flex-1 overflow-hidden">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={clsx(
            "flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200",
            todo.completed 
              ? "bg-zinc-900 border-zinc-900 text-white" 
              : "border-zinc-300 text-transparent hover:border-zinc-400"
          )}
          aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          <iconify-icon icon="solar:check-read-linear" width="14" height="14"></iconify-icon>
        </button>

        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSubmit}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-white border border-zinc-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400"
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            className={clsx(
              "text-sm truncate select-none transition-colors duration-200 cursor-text",
              todo.completed ? "text-zinc-400 line-through decoration-zinc-300" : "text-zinc-700"
            )}
          >
            {todo.text}
          </span>
        )}
      </div>

      {!isEditing && (
        <button
          onClick={() => deleteTodo(todo.id)}
          className="opacity-0 group-hover:opacity-100 flex-shrink-0 text-zinc-400 hover:text-red-500 transition-all duration-200 p-1 ml-2"
          aria-label="Delete task"
        >
          <iconify-icon icon="solar:trash-bin-trash-linear" width="16" height="16"></iconify-icon>
        </button>
      )}
    </li>
  );
}