import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-[#F7F7F7]/60 py-16 border-t border-[#F7F7F7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tighter text-[#F7F7F7] mb-6">MAINAMI</h2>
            <p className="text-sm max-w-sm leading-relaxed mb-6">
              Reimagining curl care. We believe in defining your natural texture without the crunch, flakes, or fuss. Just soft, hydrated, bouncy curls every day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#b7cad2] transition-colors">
                <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
              </a>
              <a href="#" className="hover:text-[#b7cad2] transition-colors">
                <iconify-icon icon="simple-icons:tiktok" width="20"></iconify-icon>
              </a>
              <a href="#" className="hover:text-[#b7cad2] transition-colors">
                <iconify-icon icon="simple-icons:facebook" width="20"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-[#F7F7F7] font-medium mb-4 text-sm uppercase tracking-wider">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#b7cad2] transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-[#b7cad2] transition-colors">Hair Pudding</a></li>
              <li><a href="#" className="hover:text-[#b7cad2] transition-colors">Bundles</a></li>
              <li><a href="#" className="hover:text-[#b7cad2] transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#F7F7F7] font-medium mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#b7cad2] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#b7cad2] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#b7cad2] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#b7cad2] transition-colors">Track Order</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#F7F7F7]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Mainami. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#b7cad2] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#b7cad2] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}