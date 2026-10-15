import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2, BadgeCheck, Star } from "lucide-react";

const projectTypes = [
  "Full-Stack Build",
  "ML / Research",
  "Automation",
  "Consulting",
];

const proof = [
  { icon: Star, label: "5.0 Fiverr Rating" },
  { icon: BadgeCheck, label: "IEEE Published" },
  { icon: CheckCircle2, label: "50K+ Delivered" },
];

export default function Contact() {
  const [type, setType] = useState(projectTypes[0]);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#bc13fe]/12 blur-[130px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-[#00f3ff]/12 blur-[130px]" />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        {/* CTA copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00f3ff]/30 bg-[#00f3ff]/5 px-4 py-1.5 font-mono text-xs text-[#00f3ff]">
            06 — Contact
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">intelligent</span>.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Whether it&apos;s a scalable full-stack platform, an ML research
            collaboration, or high-volume automation — Tanvir is ready to
            engineer the solution.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-white/80">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#00f3ff]/30 bg-[#00f3ff]/10 text-[#00f3ff]">
                <Mail size={16} />
              </span>
              tanvir@cyberos.dev
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#bc13fe]/30 bg-[#bc13fe]/10 text-[#bc13fe]">
                <MapPin size={16} />
              </span>
              Bangladesh · Available Worldwide (Remote)
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {proof.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
              >
                <p.icon size={14} className="text-[#00f3ff]" />
                {p.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Form panel — full dark-mode glass treatment */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-7 shadow-neon sm:p-9"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#00ff66]/40 bg-[#00ff66]/10 text-[#00ff66] shadow-neon">
                <CheckCircle2 size={32} />
              </span>
              <h3 className="text-xl font-bold text-white">Message sent</h3>
              <p className="max-w-xs text-sm text-muted">
                Thanks, {form.name || "friend"} — Tanvir will reach out to your
                inbox shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt}
                      type="button"
                      onClick={() => setType(pt)}
                      className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                        type === pt
                          ? "border-[#00f3ff] bg-[#00f3ff]/10 text-[#00f3ff] shadow-neon"
                          : "border-white/10 bg-white/[0.03] text-muted hover:border-white/25 hover:text-white"
                      }`}
                    >
                      {pt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-muted outline-none transition-all focus:border-[#00f3ff]/60 focus:shadow-neon"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-muted outline-none transition-all focus:border-[#00f3ff]/60 focus:shadow-neon"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-muted outline-none transition-all focus:border-[#bc13fe]/60 focus:shadow-purple"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#00f3ff] bg-[#00f3ff]/10 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#00f3ff] shadow-neon transition-all hover:bg-[#00f3ff]/20 hover:shadow-neon-strong"
              >
                Send Message
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
