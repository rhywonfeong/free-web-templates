import Reveal from './Reveal';

export default function Socials() {
  const socials = [
    {
      name: "Instagram",
      icon: "simple-icons:instagram",
      href: "#",
      color: "hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:bg-white/10 text-white"
    },
    {
      name: "Discord",
      icon: "simple-icons:discord",
      href: "#",
      color: "hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:bg-white/10 text-white"
    },
    {
      name: "Twitter / X",
      icon: "simple-icons:x",
      href: "#",
      color: "hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:bg-white/10 text-white"
    },
    {
      name: "Mail",
      icon: "solar:letter-linear",
      href: "mailto:hello@example.com",
      color: "hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:bg-zinc-500/20 text-white hover:text-zinc-200"
    }
  ];

  return (
    <section id="connect" className="py-32 relative bg-black overflow-hidden">
      
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-zinc-700/20 mix-blend-screen blur-[100px] animate-liquid pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 drop-shadow-xl">Let's create together.</h2>
          <p className="text-zinc-400 text-lg font-light mb-14 max-w-xl mx-auto">
            Ready to elevate your visual identity? Reach out and let's discuss how we can bring that premium feel to your next project.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                className={`group flex items-center gap-3 px-8 py-4 rounded-full liquid-glass glass-shine-effect transition-all duration-500 hover:-translate-y-2 ${social.color}`}
              >
                <iconify-icon icon={social.icon} class="text-xl group-hover:scale-110 transition-transform duration-300"></iconify-icon>
                <span className="font-medium tracking-wide text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}