import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="z-10 focus:outline-none focus:ring-2 focus:ring-[#3B5DE5] rounded-lg">
            <BrandLogo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-[1.125rem]">
            <Link to="#services" className="text-[#171717] hover:text-[#3B5DE5] transition-colors">Services</Link>
            <Link to="#how-it-works" className="text-[#171717] hover:text-[#3B5DE5] transition-colors">How it Works</Link>
            <Link to="#trust" className="text-[#171717] hover:text-[#3B5DE5] transition-colors">Trust & Safety</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-[#171717] font-semibold hover:text-[#3B5DE5] transition-colors px-4 py-2">
              Log in
            </button>
            <button className="bg-[#3B5DE5] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-[0_4px_14px_0_rgba(59,93,229,0.39)] hover:shadow-[0_6px_20px_rgba(59,93,229,0.23)] hover:-translate-y-0.5 active:translate-y-0">
              Become an Expert
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-10 p-2 text-[#171717]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`
          absolute top-0 left-0 w-full h-screen bg-white flex flex-col pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <nav className="flex flex-col gap-6 text-xl font-medium mb-8">
            <Link to="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-[#171717] border-b border-gray-100 pb-4">Services</Link>
            <Link to="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-[#171717] border-b border-gray-100 pb-4">How it Works</Link>
            <Link to="#trust" onClick={() => setIsMobileMenuOpen(false)} className="text-[#171717] border-b border-gray-100 pb-4">Trust & Safety</Link>
          </nav>
          <div className="flex flex-col gap-4">
            <button className="w-full border-2 border-[#171717] text-[#171717] px-6 py-4 rounded-xl font-semibold">
              Log in
            </button>
            <button className="w-full bg-[#3B5DE5] text-white px-6 py-4 rounded-xl font-semibold shadow-lg">
              Become an Expert
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      <footer className="bg-[#171717] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <BrandLogo light className="mb-6" />
              <p className="text-gray-400 text-lg max-w-sm mb-8">
                Connecting you to trusted local experts. Fast, verified, and easy to use.
              </p>
              <div className="flex gap-4">
                 <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 rounded-xl border border-white/10">
                    <iconify-icon icon="simple-icons:apple" style={{ fontSize: '24px' }}></iconify-icon>
                    <div className="text-left leading-tight">
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="font-semibold text-sm">App Store</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 rounded-xl border border-white/10">
                    <iconify-icon icon="simple-icons:googleplay" style={{ fontSize: '24px' }}></iconify-icon>
                    <div className="text-left leading-tight">
                      <div className="text-xs text-gray-300">GET IT ON</div>
                      <div className="font-semibold text-sm">Google Play</div>
                    </div>
                  </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-6">Platform</h3>
              <ul className="flex flex-col gap-4 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">Browse Services</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">How it Works</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Trust & Verification</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6">Company</h3>
              <ul className="flex flex-col gap-4 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Become a Raketero</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Raketly Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <iconify-icon icon="solar:shield-check-bold" style={{ fontSize: '20px', color: '#3B5DE5' }}></iconify-icon>
                Guaranteed Partners
              </span>
              <span className="flex items-center gap-2">
                <iconify-icon icon="solar:accessibility-bold" style={{ fontSize: '20px', color: '#3B5DE5' }}></iconify-icon>
                AAA Accessible
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}