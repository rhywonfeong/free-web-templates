const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <span className="text-teal-700 font-semibold text-xs tracking-widest uppercase">The Organization</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-8">
              About Eabenson Healthcare
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
              <p>
                EABENSON Healthcare delivers high-quality, patient-centered care through a synergy of experienced medical professionals and modern, ethical practices. We operate with a standard of excellence that reflects our deep commitment to corporate responsibility and community well-being.
              </p>
              <p>
                We believe in treating not just symptoms, but individuals, ensuring every patient feels heard, respected, and well-cared for. Our infrastructure and processes are meticulously designed to provide a seamless, premium healthcare experience.
              </p>
            </div>
          </div>

          {/* Image Side - Corporate/Abstract Style */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden bg-slate-200 aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80" 
                alt="Corporate professionals collaborating" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Subtle gradient overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent"></div>
            </div>
            
            {/* Elegant Floating Element */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4 z-10 hidden md:flex">
              <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center text-teal-700 border border-slate-100">
                <iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
              </div>
              <div>
                <p className="text-slate-900 font-semibold tracking-tight">Certified Excellence</p>
                <p className="text-xs text-slate-500 mt-0.5">Global Standards</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;