import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10 border-t border-white/5 mt-32">
      <div className="flex-1 max-w-sm">
        <div className="flex items-center gap-2 mb-4 group cursor-pointer">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center">
            <iconify-icon icon="solar:programming-linear" className="text-white text-sm" stroke-width="1.5"></iconify-icon>
          </div>
          <span className="text-base tracking-tight font-medium group-hover:text-indigo-300 transition-colors">C O G N I X</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-6">
          Synthesizing cognitive behavioral methodology with digital mechanics to provide sustained mental acuity tracking.
        </p>
        <div className="flex gap-4 text-gray-400">
          <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all hover:scale-110">
            <iconify-icon icon="solar:gamepad-linear" className="text-sm" stroke-width="1.5"></iconify-icon>
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all hover:scale-110">
            <iconify-icon icon="solar:chat-round-line-linear" className="text-sm" stroke-width="1.5"></iconify-icon>
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all hover:scale-110">
            <iconify-icon icon="solar:letter-linear" className="text-sm" stroke-width="1.5"></iconify-icon>
          </a>
        </div>
      </div>

      <div className="flex gap-16 text-xs text-gray-400">
        <div className="flex flex-col gap-4">
          <Link to="/" className="hover:text-white hover:translate-x-1 transition-all">PLATFORM</Link>
          <a href="#" className="hover:text-white hover:translate-x-1 transition-all">RESEARCH</a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="hover:text-white hover:translate-x-1 transition-all">JOURNAL</a>
          <Link to="/about" className="hover:text-white hover:translate-x-1 transition-all">SUPPORT</Link>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[10px] font-medium tracking-widest text-gray-500 uppercase mb-1">Acquire Client:</span>
        <button className="group px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 w-40">
          <iconify-icon icon="solar:apple-linear" className="text-lg group-hover:text-white text-gray-400 transition-colors" stroke-width="1.5"></iconify-icon>
          <span className="text-xs group-hover:text-white text-gray-300 transition-colors">App Store</span>
        </button>
        <button className="group px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 w-40">
          <iconify-icon icon="solar:play-stream-linear" className="text-lg group-hover:text-white text-gray-400 transition-colors" stroke-width="1.5"></iconify-icon>
          <span className="text-xs group-hover:text-white text-gray-300 transition-colors">Google Play</span>
        </button>
      </div>
    </footer>
  );
}