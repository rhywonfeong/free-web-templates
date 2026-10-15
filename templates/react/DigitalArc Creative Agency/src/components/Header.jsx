import React from 'react';

export default function Header({ theme, toggleTheme }) {
  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Services', href: '#' },
    { name: 'Project', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="border-b border-border/50 py-5 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container flex items-center justify-between px-5 xl:px-10">
        <a className="w-fit inline-block" href="#">
          <img 
            alt="logo" 
            width="160" 
            height="50" 
            className="block" 
            style={{ width: 'auto', height: '40px' }} 
            src="https://digital-arc.vercel.app/images/logos/white-logo.svg"
          />
        </a>

        <nav className="group/navigation-menu relative max-w-max flex-1 items-center justify-center hidden lg:flex">
          <ul className="group flex flex-1 list-none items-center justify-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a 
                  className={`flex items-center gap-1.5 rounded-sm outline-none focus-visible:ring-[3px] focus-visible:outline-1 text-base font-mono font-medium transition-colors p-0 hover:bg-transparent focus:bg-transparent ${link.active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`} 
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
            
            <button 
              type="button" 
              aria-label="theme toggler" 
              onClick={toggleTheme}
              className="focus-visible:ring-ring/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] transition-all outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 flex h-8 w-8 rounded-full items-center justify-center duration-300 cursor-pointer"
            >
              <span className="group-hover/toggle:rotate-180 transition-transform duration-700 ease-in-out">
                {theme === 'dark' ? (
                  <iconify-icon icon="solar:sun-linear" class="size-5 block"></iconify-icon>
                ) : (
                  <iconify-icon icon="solar:moon-linear" class="size-5 block"></iconify-icon>
                )}
              </span>
            </button>
          </ul>
        </nav>

        <div className="lg:hidden flex gap-2 items-center">
          <button 
            type="button" 
            aria-label="theme toggler" 
            onClick={toggleTheme}
            className="focus-visible:ring-ring/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] transition-all outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 flex h-8 w-8 rounded-full items-center justify-center duration-300 cursor-pointer"
          >
            <span className="group-hover/toggle:rotate-180 transition-transform duration-700 ease-in-out">
              {theme === 'dark' ? (
                <iconify-icon icon="solar:sun-linear" class="size-5 block"></iconify-icon>
              ) : (
                <iconify-icon icon="solar:moon-linear" class="size-5 block"></iconify-icon>
              )}
            </span>
          </button>
          <button 
            type="button" 
            className="focus-visible:ring-ring/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] inline-flex items-center justify-center whitespace-nowrap transition-all outline-none select-none bg-primary text-primary-foreground hover:bg-primary/80 size-9 h-8 w-8 rounded-full"
          >
            <iconify-icon icon="solar:hamburger-menu-linear" class="h-6 w-6"></iconify-icon>
          </button>
        </div>
      </div>
    </header>
  );
}