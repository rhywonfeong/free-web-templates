import { Github, Linkedin, Twitter, Mail, Terminal } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#hero" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00f3ff] to-[#bc13fe] text-black shadow-neon">
            <Terminal size={16} strokeWidth={2.5} />
          </span>
          <span className="font-mono text-base font-bold tracking-widest text-white">
            TANVIR<span className="text-[#00f3ff]">.</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-muted transition-all hover:border-[#00f3ff]/40 hover:text-[#00f3ff] hover:shadow-neon"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-muted">
        © 2026 Tanvir | Designed for Innovation.
      </p>
    </footer>
  );
}
