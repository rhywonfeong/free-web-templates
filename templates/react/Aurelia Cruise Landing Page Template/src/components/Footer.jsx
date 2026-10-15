import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#030609] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <iconify-icon icon="solar:anchor-outline" style={{ fontSize: '28px' }} className="text-gold"></iconify-icon>
              <span className="font-heading text-2xl font-medium tracking-tight text-white">Aurelia</span>
            </Link>
            <p className="font-body text-sm text-gray-400 mb-6 max-w-xs">
              Crafted for elegance. Where the ocean meets unparalleled luxury and extraordinary journeys begin.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-[#050A10] transition-colors">
                <iconify-icon icon="simple-icons:instagram"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-[#050A10] transition-colors">
                <iconify-icon icon="simple-icons:x"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-[#050A10] transition-colors">
                <iconify-icon icon="simple-icons:youtube"></iconify-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-white font-medium mb-6">Explore</h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li><a href="#destinations" className="hover:text-gold transition-colors">Destinations</a></li>
              <li><a href="#ships" className="hover:text-gold transition-colors">Our Fleet</a></li>
              <li><a href="#experiences" className="hover:text-gold transition-colors">Onboard Experience</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Voyages & Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-white font-medium mb-6">Newsletter</h4>
            <p className="font-body text-sm text-gray-400 mb-4">
              Subscribe to receive exclusive offers and updates.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600"
              />
              <button className="bg-gold text-[#050A10] px-4 py-2 hover:bg-white transition-colors">
                <iconify-icon icon="solar:arrow-right-linear" style={{ fontSize: '20px' }}></iconify-icon>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Aurelia Cruises. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}