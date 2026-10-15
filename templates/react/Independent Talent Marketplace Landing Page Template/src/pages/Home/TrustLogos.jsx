import { motion } from 'framer-motion';

export default function TrustLogos() {
  const logos = [
    { name: 'Stripe', icon: 'simple-icons:stripe' },
    { name: 'Vercel', icon: 'simple-icons:vercel' },
    { name: 'Linear', icon: 'simple-icons:linear' },
    { name: 'Notion', icon: 'simple-icons:notion' },
    { name: 'Loom', icon: 'simple-icons:loom' },
    { name: 'Raycast', icon: 'simple-icons:raycast' }
  ];

  return (
    <section className="py-14 border-y border-zinc-200/50 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-xs font-semibold text-zinc-400 mb-10 tracking-widest uppercase">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex items-center text-zinc-500 hover:text-[#098178] hover:scale-110 transition-all duration-300"
              title={logo.name}
            >
              <iconify-icon icon={logo.icon} width="32"></iconify-icon>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}