import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroPage() {
  return (
    <main className="relative w-full h-[100dvh] min-h-[600px] max-h-[965px] bg-[#010101] overflow-hidden font-inter flex flex-col justify-between pt-6 pb-8 sm:pt-8 sm:pb-10 px-6 md:px-10 lg:px-[80px]">
      
      {/* Background Video Layer */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90" 
        autoPlay 
        loop 
        muted 
        playsInline 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260213_051817_c7d8ccc6-bfaa-417c-8474-e5cefeea26b4.mp4"
      />

      {/* Gradient Overlays for Readability */}
      <div className="absolute top-0 inset-x-0 h-[260px] bg-gradient-to-b from-black/50 sm:from-black/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[260px] bg-gradient-to-t from-black/50 sm:from-black/40 to-transparent z-10 pointer-events-none" />

      {/* Decorative Text */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 z-10 w-[85%] sm:w-[75%] max-w-[1073px] pointer-events-none flex justify-center">
        <h1 
          className="font-bebas text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[180px] leading-[0.85] text-center tracking-wider"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.83) 0%, rgba(255, 255, 255, 0.12) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          NEW ERA
        </h1>
      </div>

      {/* Top Navigation */}
      <header className="z-20 relative w-full flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer transition-opacity hover:opacity-80">
          <iconify-icon 
            icon="solar:globus-bold" 
            style={{ fontSize: '28px', color: 'white' }}
          ></iconify-icon>
          <span className="text-[24px] font-semibold tracking-tight text-white hidden sm:block mt-1">
            Logoipsum
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-[38px]">
          {['Home', 'Shop', 'Blog', 'About Us', 'Contact Us'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-[#EEEFF2] text-[15px] font-medium tracking-[-0.32px] hover:text-white transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <Link 
            to="/login" 
            className="hidden sm:block text-[#FBFBFD] text-[15px] font-medium hover:text-white/80 transition-colors"
          >
            Sign In
          </Link>
          <button className="bg-white rounded-lg h-[48px] px-[22px] flex items-center justify-center gap-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-[#272835] font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-white/95 active:scale-95">
            <iconify-icon 
              icon="solar:cart-large-2-linear" 
              style={{ fontSize: '18px', color: '#272835' }}
            ></iconify-icon>
            <span className="text-[15px] mt-0.5">Cart</span>
          </button>
        </div>
      </header>

      {/* Bottom CTA Area */}
      <footer className="z-20 relative w-full mt-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-8 pb-4">
        
        {/* Left Side Content */}
        <div className="flex flex-col sm:flex-row sm:items-center lg:items-start xl:items-center gap-6 lg:gap-8 w-full lg:w-auto">
          <p className="text-white text-[18px] sm:text-[20px] leading-[1.5] max-w-[414px] font-normal drop-shadow-md">
            Choose from thousands of certified cars you can trust, transparently priced, because buying a car should feel exciting.
          </p>
          <button className="bg-white rounded-lg h-[48px] px-[24px] flex items-center justify-center gap-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.15)] border border-[#EEEFF2] text-[#272835] font-medium whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 w-fit">
            <span className="text-[15px] mt-0.5">Shop Now</span>
            <iconify-icon 
              icon="solar:arrow-right-linear" 
              style={{ fontSize: '18px', color: '#272835' }}
            ></iconify-icon>
          </button>
        </div>

        {/* Right Side Tagline */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <h2 className="font-bebas text-[48px] sm:text-[56px] lg:text-[64px] leading-[0.9] max-w-[466px] text-white lg:text-right drop-shadow-lg tracking-wide">
            FIND THE PERFECT CAR THAT FITS OUR JOURNEY
          </h2>
        </div>
        
      </footer>

    </main>
  );
}