const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Image & Corporate Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" 
          alt="Modern corporate healthcare environment" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-slate-50/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-600"></span>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-widest">Excellence in Healthcare</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
            Welcome to <br />
            <span className="text-teal-700 font-semibold">EABENSON Healthcare <br className="hidden md:block" /> Private Limited</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 font-light leading-relaxed max-w-2xl">
            At EABENSON Healthcare, we are dedicated to providing top-notch medical services designed for modern corporate and individual needs, ensuring excellence, integrity, and unparalleled patient satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-3.5 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Explore Services
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-800 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;