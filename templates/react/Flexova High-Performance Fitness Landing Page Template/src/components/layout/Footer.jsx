import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-12 px-6 md:px-12 xl:px-20 relative z-10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-heading font-bold text-2xl tracking-wide flex items-center gap-1">
          FLEXOVA<span className="text-[var(--color-primary)]">.</span>
        </div>
        
        <div className="flex items-center gap-6 text-[var(--color-text-muted)] text-[13px]">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        
        <div className="text-[var(--color-text-muted)] text-[12px]">
          &copy; {new Date().getFullYear()} Forge Identity. All rights reserved.
        </div>
      </div>
    </footer>
  )
}