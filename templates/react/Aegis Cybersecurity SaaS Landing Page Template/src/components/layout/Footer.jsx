import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#030706] pt-20 pb-10 mt-20 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Logo */}
          <div className="md:col-span-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-white flex items-center justify-center">
              <iconify-icon icon="solar:shield-keyhole-linear" width="20" style={{ color: '#030706' }}></iconify-icon>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold tracking-wide leading-none text-lg">AEGIS</span>
              <span className="text-emerald-500 text-[10px] tracking-[0.2em] font-medium mt-1 leading-none">SECURE</span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-6 flex justify-center gap-8 md:gap-12">
            {['Platform', 'Pricing', 'Company', 'SOC Team'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">
                {item}
              </Link>
            ))}
          </div>

          {/* Contact / Action */}
          <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-end">
            <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all">
              <iconify-icon icon="solar:siren-linear" width="20" className="text-emerald-500"></iconify-icon>
              <div className="text-left flex flex-col">
                <span className="text-[9px] text-emerald-500/70 uppercase tracking-widest leading-none">24/7 Hotline</span>
                <span className="text-xs text-emerald-500 font-medium mt-0.5 leading-none">Report Incident</span>
              </div>
            </button>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-600">
          <p>© 2025 Aegis Cybersecurity Infrastructure. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/compliance" className="hover:text-slate-400 transition-colors">Compliance & Trust</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;