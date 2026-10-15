import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-stone-200 selection:text-stone-900">
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <iconify-icon icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>
            </div>
            <span className="font-medium text-stone-900 tracking-tight">TripLocked</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
            <a href="#product" className="hover:text-stone-900 transition-colors">Product</a>
            <a href="#how-it-works" className="hover:text-stone-900 transition-colors">How it Works</a>
            <a href="#security" className="hover:text-stone-900 transition-colors">Security</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/admin" className="hidden sm:inline-flex items-center justify-center text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors">
              Sign In
            </Link>
            <Link to="/demo" className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-md hover:-translate-y-0.5">
              Book demo
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-stone-200/50 bg-[#FDFBF7] py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-stone-500">
            <iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
            <span className="text-sm font-medium">© 2024 TripLocked Inc.</span>
          </div>
          <div className="flex gap-6 text-sm text-stone-400">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-900 transition-colors">System Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}