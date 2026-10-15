const VisionMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision */}
          <div className="group bg-slate-50 border border-slate-100 p-10 rounded-2xl hover:border-teal-100 hover:shadow-[0_0_40px_rgba(13,148,136,0.05)] transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-teal-600">
              <iconify-icon icon="solar:eye-linear" width="24"></iconify-icon>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed font-light text-lg">
              To be a global benchmark in corporate healthcare, delivering innovative, accessible, and premium medical services that enrich lives and build healthier, thriving communities worldwide.
            </p>
          </div>

          {/* Mission */}
          <div className="group bg-slate-50 border border-slate-100 p-10 rounded-2xl hover:border-teal-100 hover:shadow-[0_0_40px_rgba(13,148,136,0.05)] transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-teal-600">
              <iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed font-light text-lg">
              Our mission is to foster a healthier community by providing accessible, comprehensive, and compassionate medical services, ensuring every patient feels heard, respected, and well-cared for.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;