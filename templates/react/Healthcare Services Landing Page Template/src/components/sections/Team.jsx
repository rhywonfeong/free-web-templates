const Team = () => {
  return (
    <section id="team" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Subtle background abstract shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Block */}
          <div className="w-full lg:w-1/2">
            <span className="text-teal-400 font-semibold text-xs tracking-widest uppercase block mb-4">Leadership & Expertise</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">
              Our Team
            </h2>
            <div className="space-y-6 text-slate-300 font-light text-lg leading-relaxed mb-10">
              <p>
                Behind EABENSON Healthcare is a cohesive, multidisciplinary team of professionals committed to collaborative excellence. We bring together profound industry expertise, advanced operational strategies, and an unwavering dedication to trust.
              </p>
              <p>
                Our structural hierarchy is designed not just for clinical precision, but for creating a holistic ecosystem where knowledge is shared freely. This synergy ensures that our corporate promise of premium healthcare is consistently met at every level.
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-semibold text-white">50+</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Specialists</p>
              </div>
              <div className="w-px h-12 bg-slate-800"></div>
              <div>
                <p className="text-3xl font-semibold text-white">100%</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Commitment</p>
              </div>
            </div>
          </div>

          {/* Abstract / Team Illustration Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80" 
                alt="Professional team collaboration" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;