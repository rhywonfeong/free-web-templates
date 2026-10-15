import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-amber-500/80">
            <iconify-icon icon="solar:layers-minimalistic-linear" width="14"></iconify-icon>
          </div>
          <span className="text-white/80 font-medium text-sm tracking-wide">LaunchLayer AI</span>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm text-zinc-500 font-light">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">System Status</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-zinc-600 font-light">
          © {new Date().getFullYear()} LaunchLayer. All systems nominal.
        </div>

      </div>
    </footer>
  )
}