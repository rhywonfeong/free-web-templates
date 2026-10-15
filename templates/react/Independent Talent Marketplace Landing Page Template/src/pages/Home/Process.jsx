import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Post your project',
      description: 'Define your requirements clearly. Our intelligent matching system analyzes your needs instantly.',
      icon: 'solar:document-add-linear'
    },
    {
      number: '02',
      title: 'Review curated matches',
      description: 'Receive a shortlist of heavily vetted professionals who perfectly align with your tech stack and culture.',
      icon: 'solar:users-group-two-rounded-linear'
    },
    {
      number: '03',
      title: 'Hire & manage seamlessly',
      description: 'Interview, hire, collaborate, and pay all through our secure, intuitive workspace platform.',
      icon: 'solar:hand-shake-linear'
    }
  ];

  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Subtle premium glow effect */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#098178]/15 to-transparent pointer-events-none blur-[80px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#098178]/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          
          <div className="lg:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight"
            >
              A refined hiring experience.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 text-lg mb-10 leading-relaxed font-light"
            >
              We've stripped away the noise of traditional freelance platforms. No bidding wars, no unqualified applicants. Just high-signal matching.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#098178] text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-[#076b63] transition-all duration-300 inline-flex items-center gap-3 shadow-lg shadow-[#098178]/20 hover:shadow-[#098178]/40 hover:-translate-y-1"
            >
              Learn how it works 
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
            </motion.button>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-col gap-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-8 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-[#098178] group-hover:border-[#098178] group-hover:shadow-[0_0_30px_rgba(9,129,120,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <iconify-icon icon={step.icon} width="28"></iconify-icon>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-medium mb-3 flex items-center gap-4 tracking-tight">
                      <span className="text-sm font-mono text-[#098178] bg-[#098178]/10 px-2.5 py-1 rounded-md border border-[#098178]/20">{step.number}</span>
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-md font-light group-hover:text-zinc-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}