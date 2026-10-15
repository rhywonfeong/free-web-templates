import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "Rigorous Vetting",
      description: "Only 1% of applicants pass our technical and behavioral assessments. We ensure every talent meets our strict quality standards.",
      icon: "solar:shield-check-linear",
      color: "from-blue-500/10 to-blue-500/5",
      iconColor: "text-blue-500"
    },
    {
      title: "Seamless Matching",
      description: "Our AI-driven matching engine analyzes your project requirements to pair you with the perfect professional within 48 hours.",
      icon: "solar:magic-stick-3-linear",
      color: "from-[#098178]/10 to-[#098178]/5",
      iconColor: "text-[#098178]"
    },
    {
      title: "Managed Engagements",
      description: "We handle the administrative overhead, from contracts to payments, so you can focus purely on building your product.",
      icon: "solar:document-text-linear",
      color: "from-purple-500/10 to-purple-500/5",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 border border-zinc-100 group-hover:scale-110 transition-transform duration-300`}>
                <iconify-icon icon={feature.icon} className={`text-2xl ${feature.iconColor}`}></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-zinc-950 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed font-medium text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}