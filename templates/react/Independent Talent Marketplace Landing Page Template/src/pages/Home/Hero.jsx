import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Abstract floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1], rotate: [0, 5, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#098178]/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ y: [0, 40, 0], scale: [1, 1.1, 1], rotate: [0, -5, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#098178]/5 blur-[150px]" 
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#098178]/20 text-xs font-medium text-zinc-600 mb-8 shadow-sm shadow-[#098178]/5">
            <span className="w-2 h-2 rounded-full bg-[#098178] relative flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#098178] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#098178]"></span>
            </span>
            Over 10,000 top-tier professionals ready
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-950 mb-6 leading-[1.1]"
          >
            Access the top 1% of <br className="hidden md:block" />
            <span className="text-[#098178]">independent talent.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl font-normal leading-relaxed"
          >
            A curated network of highly vetted designers, engineers, and strategists ready to integrate seamlessly into your most ambitious projects.
          </motion.p>

          <motion.div variants={itemVariants} className="w-full max-w-2xl mb-8">
            <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-lg shadow-zinc-200/50 border border-zinc-200/80 transition-all duration-300 focus-within:shadow-xl focus-within:shadow-[#098178]/10 focus-within:border-[#098178]/50 hover:border-zinc-300">
              <div className="pl-4 pr-2 text-zinc-400 flex items-center transition-colors focus-within:text-[#098178]">
                <iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What role or skill are you looking for?"
                className="flex-grow bg-transparent border-none outline-none text-zinc-800 placeholder:text-zinc-400 py-3 text-base"
              />
              <button className="bg-[#098178] text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-[#076b63] transition-all duration-300 ml-2 shadow-md shadow-[#098178]/20 hover:shadow-lg hover:shadow-[#098178]/40 hover:-translate-y-0.5">
                Search
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-500">
            <span>Popular:</span>
            {['Product Design', 'React Native', 'Brand Strategy', 'Smart Contracts'].map(tag => (
              <button key={tag} className="px-3 py-1 rounded-full bg-white border border-zinc-200 hover:border-[#098178]/50 hover:text-[#098178] hover:bg-[#098178]/5 transition-all duration-300">
                {tag}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}