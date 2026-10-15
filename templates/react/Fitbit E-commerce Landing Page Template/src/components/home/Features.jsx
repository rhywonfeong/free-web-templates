import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "solar:video-library-linear",
      title: "On-Screen Workouts",
      desc: "Get personalized workouts right on your wrist that coach you through each move."
    },
    {
      icon: "solar:battery-charge-linear",
      title: "4+ Day Battery Life",
      desc: "Track morning, night & everything in between with a multi-day battery."
    },
    {
      icon: "solar:bluetooth-linear",
      title: "Bluetooth Sync",
      desc: "Connect seamlessly to wireless headphones and your smartphone."
    },
    {
      icon: "solar:heart-angle-linear",
      title: "Heart Rate Tracking",
      desc: "Use 24/7 heart rate to better track calorie burn and optimize effort."
    }
  ];

  return (
    <section className="py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#0f0f0f] border border-white/[0.03] rounded-2xl p-8 hover:bg-[#141414] hover:border-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <iconify-icon icon={feature.icon} class="text-2xl text-orange-500"></iconify-icon>
              </div>
              <h3 className="text-white font-medium mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;