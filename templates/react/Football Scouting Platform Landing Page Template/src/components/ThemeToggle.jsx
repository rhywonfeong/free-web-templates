import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-500 dark:hover:bg-slate-800/50 dark:hover:text-white"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <iconify-icon icon="solar:sun-linear" className="text-lg"></iconify-icon>
      ) : (
        <iconify-icon icon="solar:moon-linear" className="text-lg"></iconify-icon>
      )}
    </button>
  );
}