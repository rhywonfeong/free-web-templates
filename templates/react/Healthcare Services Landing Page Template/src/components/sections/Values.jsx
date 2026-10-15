const Values = () => {
  const values = [
    {
      icon: "solar:heart-angle-linear",
      title: "Compassion",
      desc: "Delivering care with empathy and respect, prioritizing the human element in every interaction."
    },
    {
      icon: "solar:star-circle-linear",
      title: "Excellence",
      desc: "Upholding the highest standards of professional and clinical performance across all services."
    },
    {
      icon: "solar:shield-linear",
      title: "Integrity",
      desc: "Operating with absolute transparency, ethical practices, and unwavering moral principles."
    },
    {
      icon: "solar:lightbulb-bolt-linear",
      title: "Innovation",
      desc: "Continuously advancing our methodologies and technology to provide modern health solutions."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-700 font-semibold text-xs tracking-widest uppercase mb-4 block">Core Principles</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-slate-100 rounded-2xl hover:border-teal-100 hover:shadow-[0_10px_40px_rgba(13,148,136,0.08)] transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors duration-300">
                <iconify-icon icon={value.icon} width="24"></iconify-icon>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">{value.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;