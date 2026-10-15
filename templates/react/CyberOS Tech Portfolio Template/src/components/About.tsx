import { motion } from "framer-motion";
import { Award, GraduationCap, Building2, BadgeCheck } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    text: "Computer Science & Engineering student with a research-first mindset and a track record of published work.",
  },
  {
    icon: Award,
    title: "Rising Researcher",
    text: "Recognized as a 'Rising Researcher' by the CSE department and IEEE for contributions to applied machine learning.",
  },
  {
    icon: Building2,
    title: "Enterprise Execution",
    text: "Owner and operator of a real manufacturing business — blending academic rigor with industrial-scale delivery.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#bc13fe]/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#bc13fe]/30 bg-[#bc13fe]/5 px-4 py-1.5 font-mono text-xs text-[#bc13fe]">
            <BadgeCheck size={14} /> 01 — About
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Recognized as a{" "}
            <span className="gradient-text">Rising Researcher</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Honored by the CSE department and IEEE for research contributions,
            Tanvir blends academic excellence with real-world enterprise
            execution — turning intelligent systems research into
            production-ready, data-driven solutions.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-7 transition-all hover:border-[#00f3ff]/40 hover:shadow-neon"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#00f3ff]/30 bg-[#00f3ff]/10 text-[#00f3ff]">
                <h.icon size={22} />
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {h.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
