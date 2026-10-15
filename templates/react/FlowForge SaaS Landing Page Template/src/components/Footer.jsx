import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
        
        <div className="lg:col-span-2 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 flex flex-col items-center justify-center rounded bg-zinc-100 text-zinc-950 font-mono text-[10px] font-medium shadow-sm">
              FF
            </div>
            <span className="text-base tracking-tight text-white font-medium">FlowForge</span>
          </div>
          <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs">
            Automate everything. From backend workflows to full operational systems, we eliminate manual friction.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-mono text-zinc-300 mb-4">Product</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">Changelog</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-mono text-zinc-300 mb-4">Resources</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">API Reference</a></li>
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-mono text-zinc-300 mb-4">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="text-sm font-light text-zinc-500 hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs font-light text-zinc-600">© 2024 FlowForge Systems. All rights reserved.</span>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
          <span className="text-xs font-mono text-zinc-500">All Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;