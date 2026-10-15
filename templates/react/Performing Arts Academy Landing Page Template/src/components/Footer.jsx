import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#Fdfcf8] pt-20 pb-10 px-6 md:px-12 rounded-b-[2rem] mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-serif-display italic text-xl mb-6">U</div>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Umbiance Center for the Performing Arts.<br />Inspiring artistry since 2012.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif-display text-xl mb-6 italic text-stone-500">Classes</h4>
            <ul className="space-y-3 text-sm font-light text-stone-300">
              <li><a href="#" className="hover:text-white transition-colors">Preschool</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Youth &amp; Teen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Adult Classes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Lessons</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-display text-xl mb-6 italic text-stone-500">Studio</h4>
            <ul className="space-y-3 text-sm font-light text-stone-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Company Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portal Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-display text-xl mb-6 italic text-stone-500">Connect</h4>
            <ul className="space-y-3 text-sm font-light text-stone-300">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="font-serif-display text-[12vw] leading-none opacity-10 select-none">UMBIANCE</h1>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-stone-500">
            <a href="#">Privacy</a>
            <a href="#">Policies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}