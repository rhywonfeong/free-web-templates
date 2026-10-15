import { motion } from "framer-motion";
import { Brain, Zap, Factory, ArrowUpRight, LucideIcon } from "lucide-react";

interface Project {
  id: string;
  category: string;
  icon: LucideIcon;
  title: string;
  description: string;
  badges: string[];
  accent: string;
}

const projects: Project[] = [
  {
    id: "research",
    category: "AI & Academic Research",
    icon: Brain,
    title: "Dengue Prediction ML Framework",
    description:
      "Co-authored research paper presented at the IEEE QPAIN 2026 conference at CUET. An optimized machine learning framework for Dengue disease prediction utilizing MG-PSO feature optimization paired with XGBoost models.",
    badges: ["IEEE QPAIN 2026", "Machine Learning"],
    accent: "#00f3ff",
  },
  {
    id: "freelance",
    category: "Freelance Development",
    icon: Zap,
    title: "High-Volume Content Automation",
    description:
      "Delivered high-volume data formatting and content automation on Fiverr — executing 50,000+ posts within a strict 2-day deadline under a $500 budget through custom pipelines.",
    badges: ["Fiverr Expert", "Automation"],
    accent: "#bc13fe",
  },
  {
    id: "business",
    category: "Business Operations",
    icon: Factory,
    title: "Mimpex Agro Chemicals Ltd.",
    description:
      "Ownership and management of Mimpex Agro Chemicals Ltd. — overseeing the manufacturing and distribution of 10 distinct agro-chemical products across supply and operations.",
    badges: ["Entrepreneurship", "Leadership"],
    accent: "#00ff66",
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#00f3ff]/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00f3ff]/30 bg-[#00f3ff]/5 px-4 py-1.5 font-mono text-xs text-[#00f3ff]">
            02 — Portfolio
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            Research, engineering, and enterprise — executed at the intersection
            of theory and impact.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl glass-card p-7 transition-all duration-300 hover:shadow-neon"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: p.accent }}
              />
              <div className="mb-5 flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl border"
                  style={{
                    color: p.accent,
                    borderColor: `${p.accent}44`,
                    background: `${p.accent}14`,
                  }}
                >
                  <p.icon size={22} />
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  style={{ color: p.accent }}
                />
              </div>

              <span className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                {p.category}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border px-3 py-1 text-xs font-medium"
                    style={{
                      color: p.accent,
                      borderColor: `${p.accent}33`,
                      background: `${p.accent}10`,
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
