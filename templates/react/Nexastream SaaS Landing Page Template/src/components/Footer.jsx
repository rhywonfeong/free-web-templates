import React from 'react';

const Footer = () => {
  return (
    <footer className="md:px-12 bg-black/50 w-full max-w-[1400px] z-10 mx-auto py-16 px-6 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
        {/* Brand Column */}
        <div className="col-span-2 lg:col-span-2 pr-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-white bg-gradient-to-br from-sky-500 to-blue-600 w-8 h-8 rounded-full items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.4)]">
              <iconify-icon icon="solar:box-bold-duotone" width="20" height="20" style={{ color: '#fff' }}></iconify-icon>
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">Nexastream</span>
          </div>
          <p className="leading-relaxed text-sm text-zinc-500 mb-6">
            The streaming data platform for modern engineering teams. Capture, transform, and route events with zero
            infrastructure overhead.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <iconify-icon icon="simple-icons:x" width="18" height="18"></iconify-icon>
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <iconify-icon icon="simple-icons:github" width="18" height="18"></iconify-icon>
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <iconify-icon icon="simple-icons:linkedin" width="18" height="18"></iconify-icon>
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <iconify-icon icon="simple-icons:discord" width="18" height="18"></iconify-icon>
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-sky-400 transition-colors">Pipelines</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Connectors</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Transformations</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Observability</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Enterprise</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-sky-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Changelog</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-sky-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Customers</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Partners</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Links Column 4 */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Security</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Status</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
        <p>© 2024 Nexastream Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;