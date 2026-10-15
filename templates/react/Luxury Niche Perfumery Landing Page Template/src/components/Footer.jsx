import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto border-t border-gray-200 bg-[#fbfbfb] relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-4 outline-none group w-max">
              <div className="w-6 h-6 bg-transparent border border-gray-900 flex items-center justify-center text-gray-900 transition-transform group-hover:scale-90 duration-300">
                <iconify-icon icon="solar:box-minimalistic-linear" width="14" height="14" stroke-width="1.5"></iconify-icon>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold tracking-widest uppercase leading-none mb-1">Lumina</span>
                <span className="text-xs text-gray-400 tracking-widest uppercase leading-none">Studio</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed font-medium mt-2">
              Engineering spatial digital platforms and immersive web architectures for forward-thinking brands.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-2 md:col-start-7 flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-4">Index</h4>
            <div className="flex flex-col gap-3">
              <Link to="/platform" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max outline-none focus-visible:text-gray-900">Platform</Link>
              <Link to="/labs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max outline-none focus-visible:text-gray-900">Labs</Link>
              <Link to="/projects" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max outline-none focus-visible:text-gray-900">Projects</Link>
              <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max outline-none focus-visible:text-gray-900">Initiate Dialogue</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2 w-max outline-none focus-visible:text-gray-900 group">
                <iconify-icon icon="simple-icons:x" width="14" className="transition-transform group-hover:scale-110"></iconify-icon> Twitter / X
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2 w-max outline-none focus-visible:text-gray-900 group">
                <iconify-icon icon="simple-icons:github" width="14" className="transition-transform group-hover:scale-110"></iconify-icon> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2 w-max outline-none focus-visible:text-gray-900 group">
                <iconify-icon icon="simple-icons:linkedin" width="14" className="transition-transform group-hover:scale-110"></iconify-icon> LinkedIn
              </a>
            </div>
          </div>

          {/* Status & Copyright */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between h-full min-h-[120px]">
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-4">Status</h4>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                Systems Operational
              </div>
            </div>
            
            <div className="text-xs text-gray-400 tracking-widest uppercase mt-8 md:mt-0">
              &copy; {currentYear} Lumina
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}