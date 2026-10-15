import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t bg-white border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 text-left">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#E76F9B] flex items-center justify-center text-white">
                <iconify-icon icon="solar:code-square-linear" width="18" strokeWidth="1.5"></iconify-icon>
              </div>
              <span className="font-semibold text-xl tracking-tight text-[#333333]">RapidDev</span>
            </a>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              The premier e-learning platform for no-code development. Master the skills to build complex apps, automate workflows, and launch startups faster than ever without writing code.
            </p>
          </div>

          <div className="text-left">
            <h4 className="font-semibold text-sm text-[#333333] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#problem" className="text-xs text-gray-500 hover:text-[#E76F9B] transition-colors">Why No-Code?</a></li>
              <li><a href="#solution" className="text-xs text-gray-500 hover:text-[#E76F9B] transition-colors">Bootcamps</a></li>
              <li><a href="#testimonials" className="text-xs text-gray-500 hover:text-[#E76F9B] transition-colors">Student Success</a></li>
              <li><a href="#faq" className="text-xs text-gray-500 hover:text-[#E76F9B] transition-colors">FAQ</a></li>
              <li><a href="#booking" className="text-xs text-gray-500 hover:text-[#E76F9B] transition-colors">Apply</a></li>
            </ul>
          </div>

          <div className="text-left">
            <h4 className="font-semibold text-sm text-[#333333] mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-xs text-gray-500">
                <iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                admissions@rapiddev.com
              </li>
              <li className="flex items-center gap-2 text-xs text-gray-500">
                <iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                +1 (555) 987-6543
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#E76F9B] transition-colors bg-gray-50 text-gray-400 hover:text-white">
                <iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#E76F9B] transition-colors bg-gray-50 text-gray-400 hover:text-white">
                <iconify-icon icon="solar:chat-round-linear" width="16"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-gray-50 text-left">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} RapidDev Learning Platform. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-[#333333]">Privacy Policy</a>
            <a href="#" className="hover:text-[#333333]">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}