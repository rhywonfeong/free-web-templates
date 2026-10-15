import { motion } from 'framer-motion';

export default function Categories() {
  const categories = [
    { title: 'Design & Creative', icon: 'solar:pen-new-square-linear', count: '1,200+' },
    { title: 'Development & IT', icon: 'solar:code-square-linear', count: '3,500+' },
    { title: 'Sales & Marketing', icon: 'solar:graph-up-linear', count: '850+' },
    { title: 'Finance & Legal', icon: 'solar:bill-list-linear', count: '420+' },
    { title: 'Operations', icon: 'solar:settings-linear', count: '600+' },
    { title: 'AI & Data Science', icon: 'solar:cpu-linear', count: '300+' },
  ];

  return (
    <section className="py-32 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 mb-4">
              Explore expertise
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl">
              Discover specialized professionals across disciplines, thoroughly vetted for skill and execution.
            </p>
          </div>
          <button className="text-sm font-medium text-zinc-900 flex items-center gap-1 hover:text-[#098178] transition-colors group">
            Browse all categories 
            <motion.span className="flex items-center" group-hover={{ x: 5 }}>
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </motion.span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white border border-zinc-200/70 p-8 rounded-2xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#098178]/10 hover:border-[#098178]/30 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#098178] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-900 mb-8 group-hover:bg-[#098178] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#098178]/30 transition-all duration-500">
                <iconify-icon icon={category.icon} width="28"></iconify-icon>
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">{category.title}</h3>
              <div className="flex items-center justify-between text-sm mt-4">
                <span className="text-zinc-500 font-medium">{category.count} experts</span>
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#098178]">
                  <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}