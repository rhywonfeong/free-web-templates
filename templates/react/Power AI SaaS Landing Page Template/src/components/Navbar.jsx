import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);

  const NavItem = ({ children, hasDropdown }) => (
    <button className="flex items-center gap-1.5 text-foreground/90 hover:text-white transition-colors font-medium text-sm">
      {children}
      {hasDropdown && (
        <iconify-icon 
          icon="solar:alt-arrow-down-linear" 
          width="16" 
          height="16"
          class="opacity-70 mt-0.5"
        />
      )}
    </button>
  );

  return (
    <div className="w-full relative">
      <nav className="w-full py-5 px-8 flex items-center justify-between z-20">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center">
          {!logoError ? (
            <img 
              src="src/assets/logo.png" 
              alt="Power AI Logo" 
              className="h-[32px] object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            // Fallback sleek logo if src/assets/logo.png is missing
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <iconify-icon icon="solar:bolt-linear" style={{ color: 'white' }} width="20" />
              </div>
            </div>
          )}
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavItem hasDropdown>Features</NavItem>
          <NavItem>Solutions</NavItem>
          <NavItem>Plans</NavItem>
          <NavItem hasDropdown>Learning</NavItem>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center">
          <button className="hero-secondary-btn rounded-full px-4 py-2 text-sm font-medium">
            Sign Up
          </button>
        </div>
      </nav>
      
      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent mt-[3px]" />
    </div>
  );
}