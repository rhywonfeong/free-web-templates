import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20 text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <iconify-icon icon="lucide:shield-check" width="24" height="24" className="text-slate-300"></iconify-icon>
            <span className="uppercase tracking-wider">1 Year<br />Warranty</span>
          </div>
          <div className="flex items-center gap-3">
            <iconify-icon icon="lucide:truck" width="24" height="24" className="text-slate-300"></iconify-icon>
            <span className="uppercase tracking-wider">Fast &amp; Safe<br />Delivery</span>
          </div>
          <div className="flex items-center gap-3">
            <iconify-icon icon="lucide:refresh-ccw" width="24" height="24" className="text-slate-300"></iconify-icon>
            <span className="uppercase tracking-wider">Easy<br />Returns</span>
          </div>
          <div className="flex items-center gap-3">
            <iconify-icon icon="lucide:lock" width="24" height="24" className="text-slate-300"></iconify-icon>
            <span className="uppercase tracking-wider">Secure<br />Payment</span>
          </div>
        </div>

        {/* Big Logo CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-3xl p-12 md:p-20 relative overflow-hidden group mb-12">
          <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-cyan-500/10 transition-colors duration-700"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <iconify-icon icon="lucide:audio-lines" className="text-cyan-400 text-5xl md:text-6xl"></iconify-icon>
              <span className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
                AR<span className="font-normal text-slate-400">Buds Pro</span>
              </span>
            </div>
            <p className="text-lg md:text-xl text-slate-400 tracking-widest uppercase mb-12">
              Wireless Freedom. Unlimited Possibilities.
            </p>
            
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-10">
              UPGRADE YOUR SOUND TODAY!
            </h2>
            
            <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-cyan-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Add to Cart - ₹1,499
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-base text-slate-500">
          <div className="flex items-center gap-4">
            <span>Follow Us</span>
            <a href="#" className="hover:text-white transition-colors">
              <iconify-icon icon="simple-icons:instagram" width="20" height="20"></iconify-icon>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <iconify-icon icon="simple-icons:facebook" width="20" height="20"></iconify-icon>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <iconify-icon icon="simple-icons:youtube" width="20" height="20"></iconify-icon>
            </a>
            <span className="text-sm">/ARBudsPro</span>
          </div>
          <a href="#" className="hover:text-cyan-400 transition-colors">www.arbudspro.in</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;