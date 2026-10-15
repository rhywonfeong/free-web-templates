import React from 'react';

function Footer() {
  return (
    <footer id="compliance" className="border-t border-white/5 bg-black/50 backdrop-blur-lg relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <a href="#" className="font-medium tracking-tighter text-lg uppercase flex items-center gap-2 mb-2">
            SYNERGY
          </a>
          <p className="text-xs text-white/40 max-w-xs">Global standard development architecture. Engineered for scale, secured by design.</p>
        </div>
        
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <iconify-icon icon="solar:shield-check-linear" className="text-lg"></iconify-icon>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <iconify-icon icon="solar:lock-password-linear" className="text-lg"></iconify-icon>
            <span>SSL/TLS Encrypted</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 text-center py-6">
        <p className="text-[10px] text-white/30 uppercase tracking-widest">© 2026 Synergy Architecture. All Systems Nominal.</p>
      </div>
    </footer>
  );
}

export default Footer;