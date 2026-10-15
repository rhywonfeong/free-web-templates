import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#D4AF37] to-[#856D24] flex items-center justify-center border border-[#F3E5AB]/30">
                <iconify-icon icon="solar:widget-5-bold-duotone" width="20" style={{ color: '#050505' }}></iconify-icon>
              </div>
              <span className="text-white font-medium tracking-tight text-lg">OpsCore</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              The premium operations platform for businesses where accuracy, approvals, and immutable workflows are non-negotiable.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-8 flex flex-wrap md:flex-nowrap justify-between gap-10 lg:gap-20 md:justify-end">
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-semibold mb-2">Platform</h4>
              {['Features', 'Workflows', 'AI Governance', 'Security'].map((item) => (
                <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-semibold mb-2">Resources</h4>
              {['Documentation', 'API Reference', 'Case Studies', 'Blog'].map((item) => (
                <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-semibold mb-2">Company</h4>
              {['About', 'Careers', 'Contact Sales', 'Legal'].map((item) => (
                <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-slate-400 hover:text-[#D4AF37] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} OpsCore Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;