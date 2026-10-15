export default function FocusAreas() {
  const categories = [
    {
      title: "Enterprise and workflow software",
      desc: "Products that digitize processes, connect fragmented systems, improve execution and make organizations easier to run.",
      icon: "solar:layers-linear"
    },
    {
      title: "Data, analytics and decision-support tools",
      desc: "Platforms and applications that help teams turn raw or dispersed data into insight, reporting, forecasts and better operating decisions.",
      icon: "solar:pie-chart-2-linear"
    },
    {
      title: "AI-enabled and AI-native products",
      desc: "Tools that automate work, improve decision quality, augment teams or make business processes faster, smarter and more adaptive.",
      icon: "solar:magic-stick-3-linear"
    },
    {
      title: "Cybersecurity and resilience infrastructure",
      desc: "Solutions that protect systems, users, applications, networks and data in a world where cyber risk is growing faster than most organizations can internally manage.",
      icon: "solar:lock-password-unlocked-linear"
    },
    {
      title: "Selected IoT and software-connected systems",
      desc: "Products that combine hardware, sensing and software to improve monitoring, control, maintenance, productivity or operational visibility in real environments.",
      icon: "solar:devices-linear"
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4 block">Focus areas</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
            Clear focus. Clear fit.
          </h2>
          <p className="text-xl text-zinc-500 leading-relaxed">
            We invest primarily in B2B ICT, with software at the center of the strategy and selective exposure to IoT where software and connected infrastructure create a meaningful advantage.
          </p>
        </div>

        <div className="grid gap-4">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="group flex flex-col md:flex-row gap-6 md:gap-12 p-8 md:p-10 rounded-2xl bg-zinc-50/50 hover:bg-white border border-transparent hover:border-zinc-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover:scale-110 transition-transform duration-500">
                  <iconify-icon icon={cat.icon} width="24"></iconify-icon>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">{cat.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800">
          <p className="text-sm font-medium leading-relaxed">
            <span className="text-white">Note:</span> Software-led opportunities are expected to represent the majority of the portfolio. Selected IoT opportunities complement that focus where connected systems can create defensible value.
          </p>
        </div>
      </div>
    </section>
  );
}