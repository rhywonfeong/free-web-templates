import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 sm:px-8 ${
          scrolled
            ? "glass shadow-neon mx-4"
            : "border border-transparent mx-4"
        }`}
      >
        <a href="#hero" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#00f3ff] to-[#bc13fe] text-black shadow-neon">
            <Terminal size={18} strokeWidth={2.5} />
          </span>
          <span className="font-mono text-lg font-bold tracking-widest text-white transition-colors group-hover:text-[#00f3ff]">
            TANVIR<span className="text-[#00f3ff]">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-white"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-[#00f3ff] to-[#bc13fe] transition-transform duration-300 hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg border border-[#00f3ff]/50 bg-[#00f3ff]/10 px-5 py-2 text-sm font-semibold text-[#00f3ff] transition-all hover:shadow-neon md:inline-block"
        >
          Let&apos;s Talk
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-[#00f3ff]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg border border-[#00f3ff]/50 bg-[#00f3ff]/10 px-4 py-3 text-center text-sm font-semibold text-[#00f3ff]"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
