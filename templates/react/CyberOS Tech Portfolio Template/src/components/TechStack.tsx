import { motion } from "framer-motion";
import {
  Atom,
  Server,
  Code2,
  Database,
  BrainCircuit,
  LayoutTemplate,
  LucideIcon,
} from "lucide-react";

interface Tech {
  name: string;
  icon: LucideIcon;
  desc: string;
  accent: string;
}

const stack: Tech[] = [
  { name: "React", icon: Atom, desc: "Component UI Engineering", accent: "#00f3ff" },
  { name: "PHP", icon: Server, desc: "Server-Side Backends", accent: "#bc13fe" },
  { name: "Python", icon: Code2, desc: "Automation & ML", accent: "#00ff66" },
  { name: "MySQL", icon: Database, desc: "Relational Data Layer", accent: "#fac775" },
  {
    name: "ML Pipelines",
    icon: BrainCircuit,
    desc: "XGBoost · MG-PSO",
    accent: "#ff003c",
  },
  {
    name: "UI/UX Architecture",
    icon: LayoutTemplate,
    desc: "Design Systems",
    accent: "#00f3ff",
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#bc13fe]/30 bg-[#bc13fe]/5 px-4 py-1.5 font-mono text-xs text-[#bc13fe]">
            04 — Tech Stack
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Tools of the <span className="gradient-text">Trade</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {stack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group flex flex-col items-center gap-3 rounded-2xl glass-card p-6 text-center transition-all hover:shadow-neon"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-xl border transition-all group-hover:scale-110"
                style={{
                  color: t.accent,
                  borderColor: `${t.accent}44`,
                  background: `${t.accent}12`,
                }}
              >
                <t.icon size={26} />
              </span>
              <div>
                <div className="text-sm font-semibold text-white sm:text-base">
                  {t.name}
                </div>
                <div className="mt-0.5 text-xs text-muted">{t.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
