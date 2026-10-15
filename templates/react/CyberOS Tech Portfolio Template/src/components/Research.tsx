import { motion } from "framer-motion";
import { FileText, Quote, ExternalLink, Beaker } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="relative px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00f3ff]/10 blur-[130px]" />
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00f3ff]/30 bg-[#00f3ff]/5 px-4 py-1.5 font-mono text-xs text-[#00f3ff]">
            <Beaker size={14} /> 05 — Research
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Academic <span className="gradient-text">Publication</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="glass overflow-hidden rounded-3xl p-8 sm:p-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-[#00f3ff]/40 bg-[#00f3ff]/10 text-[#00f3ff] shadow-neon">
              <FileText size={30} />
            </span>
            <div className="flex-1">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#00f3ff]/30 bg-[#00f3ff]/10 px-3 py-1 text-xs font-medium text-[#00f3ff]">
                  IEEE QPAIN 2026
                </span>
                <span className="rounded-full border border-[#bc13fe]/30 bg-[#bc13fe]/10 px-3 py-1 text-xs font-medium text-[#bc13fe]">
                  Machine Learning
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-muted">
                  CUET
                </span>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                An Optimized Machine Learning Framework for Dengue Disease
                Prediction
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Co-authored research paper presented at the IEEE QPAIN 2026
                conference at CUET. The framework couples{" "}
                <span className="text-[#00f3ff]">MG-PSO</span> feature
                optimization with{" "}
                <span className="text-[#bc13fe]">XGBoost</span> classification
                to deliver a robust, data-driven predictive pipeline for Dengue
                outbreak forecasting.
              </p>

              <blockquote className="mt-6 flex gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-5">
                <Quote size={20} className="flex-shrink-0 text-[#bc13fe]" />
                <p className="text-sm italic leading-relaxed text-white/80">
                  Recognized by the CSE department and IEEE as the work of a
                  &ldquo;Rising Researcher&rdquo; — merging academic rigor with
                  applied impact.
                </p>
              </blockquote>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00f3ff] transition-colors hover:text-white"
              >
                Request full paper <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
