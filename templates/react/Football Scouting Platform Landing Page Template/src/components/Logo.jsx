import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function Logo({ className }) {
  return (
    <Link to="/" className={clsx("group flex cursor-pointer items-center gap-2", className)}>
      <div className="from-pitch-500 group-hover:shadow-pitch-500/20 to-pitch-700 flex h-8 w-8 transform items-center justify-center rounded bg-gradient-to-br text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
        <iconify-icon icon="solar:football-linear" className="text-lg"></iconify-icon>
      </div>
      <span className="font-medium tracking-tight text-slate-900 dark:text-white">
        NEXT<span className="font-medium opacity-70">CHAPTER</span>
      </span>
    </Link>
  );
}