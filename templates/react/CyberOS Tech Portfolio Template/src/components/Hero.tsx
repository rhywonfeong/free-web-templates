import { motion } from "framer-motion";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#bc13fe]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#00f3ff]/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#07070a] to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-[#00f3ff]/30 bg-[#00f3ff]/5 px-4 py-1.5 text-xs font-medium text-[#00f3ff]"
        >
          <Sparkles size={14} />
          <span className="font-mono tracking-wide">
            CS Engineer · Full-Stack Dev · Entrepreneur
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Engineering{" "}
          <span className="gradient-text">Intelligent Systems</span> &{" "}
          <span className="neon-text text-[#00f3ff]">Data-Driven</span> Futures.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Bridging the gap between scalable full-stack development, academic AI
          research, and industrial operations.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#roadmap"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-[#00f3ff] bg-[#00f3ff]/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#00f3ff] shadow-neon transition-all hover:shadow-neon-strong sm:w-auto"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#00f3ff]/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <Cpu size={18} />
            Enter CyberOS App
          </motion.a>

          <motion.a
            href="#roadmap"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-[#bc13fe]/60 hover:text-[#bc13fe] sm:w-auto"
          >
            Explore Roadmap
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
        >
          {[
            { n: "50K+", l: "Automated Posts" },
            { n: "10", l: "Agro Products" },
            { n: "IEEE", l: "Published" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-mono text-2xl font-bold text-[#00f3ff] sm:text-3xl">
                {s.n}
              </div>
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
