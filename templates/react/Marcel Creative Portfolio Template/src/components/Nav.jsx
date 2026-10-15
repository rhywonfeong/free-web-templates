import React from 'react';

export default function Nav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 border-b border-[#F0F0F0]/10">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <div className="text-xs font-semibold tracking-widest uppercase cursor-pointer hover:opacity-50 transition-opacity" onClick={() => scrollTo('top')}>
          Marcel.
        </div>
        
        <div className="flex gap-8 text-xs font-semibold tracking-widest uppercase">
          {['Works', 'Philosophy', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="hover:opacity-50 transition-opacity"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}