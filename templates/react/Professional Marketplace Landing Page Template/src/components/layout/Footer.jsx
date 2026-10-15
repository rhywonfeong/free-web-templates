import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-slate-100 text-slate-600 w-8 h-8 rounded-lg flex items-center justify-center">
            <iconify-icon icon="solar:layer-bold" width="20"></iconify-icon>
          </div>
          <span className="font-semibold text-lg tracking-tight text-slate-900">ProConnect</span>
        </div>
        
        <div className="flex gap-6 text-sm text-slate-500">
          <Link to="/" className="hover:text-indigo-600 transition-colors">About Us</Link>
          <Link to="/" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
          <Link to="/" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
            <iconify-icon icon="simple-icons:twitter" width="20"></iconify-icon>
          </a>
          <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
            <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
          </a>
          <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
            <iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}