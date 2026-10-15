import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const footerObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = footerRef.current?.querySelectorAll('.footer-reveal');
    elements?.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8');
      footerObserver.observe(el);
    });

    return () => footerObserver.disconnect();
  }, []);

  return (
    <footer className="overflow-hidden font-inter bg-[#1F3E3D] w-full z-20 pt-20 pb-8 relative" id="portalra-footer" ref={footerRef}>
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96A]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-10 border-b border-white/10 footer-reveal transition-all duration-1000 ease-out">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-oswald text-white tracking-tight uppercase">Excellent</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <iconify-icon key={i} icon="lucide:star" class="w-5 h-5 text-[#C8A96A]" style={{ fill: '#C8A96A' }}></iconify-icon>
                ))}
              </div>
            </div>
            <span className="text-sm text-white/60 font-light">4.9/5 based on 10,000+ reviews on TrustPortal</span>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <span className="text-xs font-oswald uppercase tracking-widest text-[#C8A96A]">Associated With</span>
            <div className="flex flex-wrap gap-8 items-center text-white/40">
              <span className="text-lg font-oswald tracking-widest uppercase hover:text-white/80 transition-colors cursor-default">Virtuoso</span>
              <span className="text-lg font-oswald tracking-widest uppercase hover:text-white/80 transition-colors cursor-default">ASTA</span>
              <span className="text-lg font-oswald tracking-widest uppercase hover:text-white/80 transition-colors cursor-default">USTOA</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          
          <div className="flex flex-col gap-10 footer-reveal transition-all duration-1000 delay-100 ease-out">
            <div className="flex flex-col gap-5">
              <h4 className="text-base font-oswald uppercase tracking-wider text-white">Company</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">About us</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light group flex items-center gap-2">
                  Careers
                  <span className="px-2 py-0.5 rounded-full bg-[#C8A96A]/10 border border-[#C8A96A]/30 text-[#C8A96A] text-xs group-hover:bg-[#C8A96A] group-hover:text-[#1F3E3D] transition-colors">Apply Now!</span>
                </a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Sustainability</a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-base font-oswald uppercase tracking-wider text-white">Travelers</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Escape Magazine</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light group flex items-center gap-2">
                  Win an Adventure
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs group-hover:border-[#C8A96A] group-hover:text-[#C8A96A] transition-colors">Enter Now!</span>
                </a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Why Portalra?</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Cancellation policy</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 footer-reveal transition-all duration-1000 delay-200 ease-out">
            <div className="flex flex-col gap-5">
              <h4 className="text-base font-oswald uppercase tracking-wider text-white">Curated Experiences</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Our Platform Explained</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Bespoke Solutions</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Corporate Retreats</a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-base font-oswald uppercase tracking-wider text-white">Operators</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Partner With Us</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Payment Solutions</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Operator Login</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 footer-reveal transition-all duration-1000 delay-[300ms] ease-out">
            <div className="flex flex-col gap-5">
              <h4 className="text-base font-oswald uppercase tracking-wider text-white">Local Guides</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Guide of the Year</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Join our Network</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Guide Login</a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-base font-oswald uppercase tracking-wider text-white">Affiliates</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Travel Advisors</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Creators Program</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Affiliate Login</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 footer-reveal transition-all duration-1000 delay-[400ms] ease-out">
            <div className="flex flex-col gap-5">
              <h4 className="text-base font-oswald uppercase tracking-wider text-white">Support</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light">Contact Us</a>
                <a href="#" className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light mb-2">Help Center</a>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-[10px] font-oswald uppercase tracking-widest text-[#C8A96A]">US & Canada</span>
                  <a href="tel:+18338956770" className="text-sm text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">+1 833 895 6770</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-oswald uppercase tracking-widest text-[#C8A96A]">UK & Europe</span>
                  <a href="tel:+448008021046" className="text-sm text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">+44 800 802 1046</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-oswald uppercase tracking-widest text-[#C8A96A]">Australia</span>
                  <a href="tel:+61731068663" className="text-sm text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">+61 7 3106 8663</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-10 border-y border-white/10 footer-reveal transition-all duration-1000 delay-[500ms] ease-out">
          
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-oswald uppercase tracking-wider text-white">Select Language</h4>
            <div className="flex flex-wrap gap-2">
              <button className="w-10 h-10 rounded-full bg-[#C8A96A] text-[#1F3E3D] text-sm font-medium flex items-center justify-center transition-transform hover:scale-105 shadow-[0_0_15px_rgba(200,169,106,0.3)]">EN</button>
              <button className="w-10 h-10 rounded-full bg-transparent border border-white/20 text-white/70 text-sm font-normal flex items-center justify-center hover:border-[#C8A96A] hover:text-[#C8A96A] transition-all duration-300">DE</button>
              <button className="w-10 h-10 rounded-full bg-transparent border border-white/20 text-white/70 text-sm font-normal flex items-center justify-center hover:border-[#C8A96A] hover:text-[#C8A96A] transition-all duration-300">ES</button>
              <button className="w-10 h-10 rounded-full bg-transparent border border-white/20 text-white/70 text-sm font-normal flex items-center justify-center hover:border-[#C8A96A] hover:text-[#C8A96A] transition-all duration-300">FR</button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-oswald uppercase tracking-wider text-white">Follow Us</h4>
            <div className="flex gap-6 gap-x-6 gap-y-6 items-center text-white/40">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all">
                <iconify-icon icon="lucide:twitter" class="w-[18px] h-[18px]"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all">
                <iconify-icon icon="lucide:instagram" class="w-[18px] h-[18px]"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all">
                <iconify-icon icon="lucide:facebook" class="w-[18px] h-[18px]"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all">
                <iconify-icon icon="lucide:youtube" class="w-[18px] h-[18px]"></iconify-icon>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-oswald uppercase tracking-wider text-white">Secure Payments</h4>
            <div className="flex flex-wrap gap-4 text-white/30">
              <iconify-icon icon="lucide:credit-card" class="w-8 h-8 hover:text-white/60 transition-colors"></iconify-icon>
              <iconify-icon icon="lucide:banknote" class="w-8 h-8 hover:text-white/60 transition-colors"></iconify-icon>
              <iconify-icon icon="lucide:shield-check" class="w-8 h-8 hover:text-white/60 transition-colors"></iconify-icon>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-oswald uppercase tracking-wider text-white">Download App</h4>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <a href="#" className="flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-lg hover:border-[#5A3A22] hover:bg-[#5A3A22]/20 transition-all duration-300 group">
                <iconify-icon icon="lucide:apple" class="w-6 h-6 text-white group-hover:text-[#C8A96A] transition-colors"></iconify-icon>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 font-light leading-none mb-0.5">Download on the</span>
                  <span className="text-sm font-normal text-white leading-tight">App Store</span>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-lg hover:border-[#5A3A22] hover:bg-[#5A3A22]/20 transition-all duration-300 group">
                <iconify-icon icon="lucide:play" class="w-5 h-5 text-white group-hover:text-[#C8A96A] transition-colors"></iconify-icon>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 font-light leading-none mb-0.5">GET IT ON</span>
                  <span className="text-sm font-normal text-white leading-tight">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2 pb-6 footer-reveal transition-all duration-1000 delay-[600ms] ease-out">
          <span className="text-sm font-light text-white/50 tracking-wide">© 2024 Portalra Escape. Designed by Kunal Lonare.</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-sm font-light tracking-wide">
            <a href="#" className="text-white/50 hover:text-[#C8A96A] transition-colors">Legal Notice</a>
            <span className="text-white/20 hidden sm:inline">•</span>
            <a href="#" className="text-white/50 hover:text-[#C8A96A] transition-colors">Privacy Policy</a>
            <span className="text-white/20 hidden sm:inline">•</span>
            <a href="#" className="text-white/50 hover:text-[#C8A96A] transition-colors">Cookies</a>
            <span className="text-white/20 hidden sm:inline">•</span>
            <a href="#" className="text-white/50 hover:text-[#C8A96A] transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;