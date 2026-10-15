import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-2">
            <h2 className="text-4xl font-serif mb-6 tracking-tight">Atelier.</h2>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed font-light">
              Elevating spaces through meticulous design, architectural precision, and uncompromising craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:instagram" width="20" height="20" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:pinterest" width="20" height="20" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:houzz" width="20" height="20" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Studio</h4>
            <ul className="space-y-4">
              <li><Link to="/portfolio" className="hover:text-gray-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-gray-400 transition-colors">Services</Link></li>
              <li><Link to="/philosophy" className="hover:text-gray-400 transition-colors">Philosophy</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Contact</h4>
            <address className="not-italic text-gray-300 space-y-4 font-light">
              <p>42 Design District<br/>London, UK W1D 4EY</p>
              <p>
                <a href="mailto:hello@atelier.com" className="hover:text-white transition-colors">hello@atelier.com</a>
              </p>
              <p>
                <a href="tel:+442071234567" className="hover:text-white transition-colors">+44 (0) 207 123 4567</a>
              </p>
            </address>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-wider">
          <p>&copy; {new Date().getFullYear()} Atelier Interior Design. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}