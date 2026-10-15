import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative large logo background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
         <iconify-icon icon="solar:cup-hot-bold" width="800"></iconify-icon>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <iconify-icon icon="solar:cup-hot-bold" width="20"></iconify-icon>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">Lumina.</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Elevating your daily ritual with premium coffee gear and ethically sourced beans. Crafted for those who appreciate the perfect brew.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors duration-300">
                  <iconify-icon icon={`simple-icons:${social}`} width="18"></iconify-icon>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-tight mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Home', 'About Us', 'Shop Collection', 'Brewing Guides'].map(item => (
                <li key={item}><Link to="#" className="hover:text-amber-500 transition-colors inline-flex items-center gap-2">
                   <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> {item}
                </Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-tight mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['FAQ', 'Shipping Policy', 'Returns', 'Contact Us'].map(item => (
                <li key={item}><Link to="#" className="hover:text-amber-500 transition-colors inline-flex items-center gap-2">
                   <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> {item}
                </Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-tight mb-6">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-4">Subscribe for tips, new arrivals, and special offers.</p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-stone-800 border-none outline-none px-4 py-3 rounded-l-xl text-sm w-full focus:ring-2 focus:ring-amber-600"
              />
              <button className="bg-amber-600 text-white px-5 rounded-r-xl hover:bg-amber-500 transition-colors">
                <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-stone-500">
          <p>&copy; {new Date().getFullYear()} Lumina Coffee Co. All rights reserved.</p>
          <div className="flex gap-3">
             <iconify-icon icon="simple-icons:visa" width="32" class="text-stone-400 opacity-50 hover:opacity-100 transition-opacity"></iconify-icon>
             <iconify-icon icon="simple-icons:mastercard" width="32" class="text-stone-400 opacity-50 hover:opacity-100 transition-opacity"></iconify-icon>
             <iconify-icon icon="simple-icons:paypal" width="32" class="text-stone-400 opacity-50 hover:opacity-100 transition-opacity"></iconify-icon>
          </div>
        </div>
      </div>
    </footer>
  );
}