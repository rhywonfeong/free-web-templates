import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <iconify-icon icon="simple-icons:fitbit" class="text-xl text-white group-hover:text-orange-500 transition-colors"></iconify-icon>
              <span className="font-semibold tracking-tight">fitbit</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Empowering you to live a healthier, more active life. Discover our range of premium fitness trackers and smartwatches.
            </p>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-white font-medium mb-4">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-sm text-neutral-400 hover:text-orange-500 transition-colors">Smartwatches</Link></li>
              <li><Link to="/products" className="text-sm text-neutral-400 hover:text-orange-500 transition-colors">Trackers</Link></li>
              <li><Link to="/products" className="text-sm text-neutral-400 hover:text-orange-500 transition-colors">Accessories</Link></li>
              <li><Link to="/products" className="text-sm text-neutral-400 hover:text-orange-500 transition-colors">Premium</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-neutral-400 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-neutral-400 hover:text-orange-500 transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-sm text-neutral-400 hover:text-orange-500 transition-colors">Press</Link></li>
              <li><Link to="/contact" className="text-sm text-neutral-400 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="text-white font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all">
                <iconify-icon icon="simple-icons:twitter" class="text-sm"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all">
                <iconify-icon icon="simple-icons:instagram" class="text-sm"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all">
                <iconify-icon icon="simple-icons:facebook" class="text-sm"></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Fitbit, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;