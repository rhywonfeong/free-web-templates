import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Aura completely transformed how we build our product. We hired a senior designer who integrated with our team instantly and elevated our entire brand system.",
      author: "Rebecca Sterling",
      role: "VP of Product, FinTech Co",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    },
    {
      quote: "The quality of engineering talent is unmatched. We needed a specialized Web3 developer and Aura matched us within 24 hours. The project was delivered ahead of schedule.",
      author: "Marcus Vance",
      role: "CTO, Nexus Labs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    }
  ];

  return (
    <section className="py-32 bg-zinc-50 border-y border-zinc-200/60 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #098178 1px, transparent 1px), linear-gradient(to bottom, #098178 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-950 mb-6">
            Trusted by leaders
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            See how top companies are scaling their operations and launching faster with our curated network of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-10 md:p-12 rounded-[2rem] border border-zinc-200/80 shadow-xl shadow-zinc-200/20 hover:shadow-2xl hover:shadow-[#098178]/5 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-[#098178]/20 mb-8">
                <iconify-icon icon="solar:quote-left-bold" width="48"></iconify-icon>
              </div>
              <p className="text-xl md:text-2xl font-medium text-zinc-900 leading-relaxed mb-10 tracking-tight">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 pt-8 border-t border-zinc-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-zinc-950">{testimonial.author}</h4>
                  <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}