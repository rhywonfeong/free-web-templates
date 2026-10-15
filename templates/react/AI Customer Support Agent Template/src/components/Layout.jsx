import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import clsx from 'clsx';

export default function Layout() {
  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Live Demo', path: '/demo' },
    { name: 'Integration', path: '/docs' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <iconify-icon icon="solar:user-speak-linear" width="20"></iconify-icon>
            </div>
            <span className="font-semibold text-slate-900 tracking-tight">AgentDeploy</span>
          </div>
          
          <nav className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    "px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200",
                    isActive 
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200/50" 
                      : "text-slate-500 hover:text-slate-900"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             <a href="https://github.com/elevenlabs/elevenlabs-react" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors flex items-center">
                <iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
             </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AI Agent Deployment. Powered by ElevenLabs.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Secure Connection</span>
            <span className="flex items-center gap-1"><iconify-icon icon="solar:server-linear"></iconify-icon> WebRTC Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}