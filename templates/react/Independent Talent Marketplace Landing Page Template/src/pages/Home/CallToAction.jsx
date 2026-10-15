import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-32 md:py-48 bg-zinc-950 relative overflow-hidden">
      {/* Immersive glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#098178] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-10 pointer-events-none" />
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#098178] animate-pulse"></span>
          Start scaling today
        </div>
        
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
          Your next big hire is <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            just a click away.
          </span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto">
          Join hundreds of fast-growing companies that trust Aura to scale their teams with elite independent talent.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#098178] text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#0aa69a] transition-all duration-300 shadow-[0_0_40px_-10px_rgba(9,129,120,0.5)] hover:shadow-[0_0_60px_-10px_rgba(9,129,120,0.7)] hover:-translate-y-1 flex items-center justify-center gap-2">
            Hire Talent Now
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
          </button>
          <button className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Apply as a Freelancer
          </button>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          No credit card required • Cancel anytime
        </p>
      </motion.div>
    </section>
  );
}