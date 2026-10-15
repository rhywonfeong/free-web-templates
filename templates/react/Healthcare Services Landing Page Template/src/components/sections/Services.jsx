const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-700 font-semibold text-xs tracking-widest uppercase mb-4 block">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Comprehensive Corporate Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* A. Primary Care (Highlight Card) */}
          <div className="lg:col-span-2 bg-slate-900 text-white p-8 md:p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all duration-700"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-teal-400 backdrop-blur-sm border border-white/5">
                  <iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">Primary Care</h3>
                <p className="text-slate-400 leading-relaxed font-light max-w-md mb-8">
                  The cornerstone of our healthcare model. Comprehensive routine checks, preventative strategies, and immediate care designed to maintain long-term health and productivity.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-teal-400 font-medium text-sm hover:text-white transition-colors">
                Schedule a Consultation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>
          </div>

          {/* B. Specialized Care (Multi-item list) */}
          <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-slate-700 border border-slate-100">
              <iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Specialized Care</h3>
            <ul className="space-y-3">
              {['Cardiology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'Gynecology', 'Neurology', 'Gastroenterology'].map((specialty, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm font-light">
                  <iconify-icon icon="solar:check-circle-linear" className="text-teal-600" width="16"></iconify-icon>
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          {/* C. Diagnostic Services */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-slate-700 border border-slate-100">
              <iconify-icon icon="solar:test-tube-linear" width="20"></iconify-icon>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Diagnostic Services</h3>
            <p className="text-slate-500 text-sm font-light mb-4">Precision testing for accurate results.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">Lab tests</span>
              <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">Imaging</span>
              <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">Ultrasound</span>
            </div>
          </div>

          {/* D. Telemedicine */}
          <div className="bg-teal-50 border border-teal-100 p-8 rounded-2xl shadow-sm">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-6 text-teal-700 shadow-sm">
              <iconify-icon icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Telemedicine</h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Virtual consultations powered by secure, modern technology. Connect with our specialists from anywhere in the world.
            </p>
          </div>

          {/* E. Emergency Services */}
          <div className="bg-red-50 border border-red-100 p-8 rounded-2xl shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4 text-red-500 animate-pulse">
              <iconify-icon icon="solar:siren-rounded-bold" width="24"></iconify-icon>
            </div>
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-6 text-red-600 shadow-sm">
              <iconify-icon icon="solar:ambulance-linear" width="20"></iconify-icon>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Emergency Services</h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
              Rapid response protocols for critical situations, available 24/7 with dedicated priority channels.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;