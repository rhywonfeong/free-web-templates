export default function StageTicket() {
  const stages = [
    {
      title: "Pre-seed",
      desc: "Discovery tickets from PLN 1M to 2M for teams with a clear problem thesis, an early prototype or product direction, and a need to reach stronger product and market validation."
    },
    {
      title: "Seed",
      desc: "Capital for companies with stronger product maturity, early pilot results, first customer feedback or initial revenue signals that demand is beginning to form."
    },
    {
      title: "Early commercial stage",
      desc: "Support for companies with validated market need and commercial readiness, preparing to accelerate go-to-market, product expansion or geographic growth."
    }
  ];

  return (
    <section className="py-32 bg-zinc-50 border-y border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4 block">Stage and check size</span>
          <h2 className="text-4xl font-medium tracking-tight text-zinc-900 mb-6">
            Designed for companies moving from proof to commercial momentum.
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
            We invest early, but we do not define “early” as idea-only. Our strongest fit is with teams that can already show an informed view of the market, an early product direction and credible signals that the problem is real.
          </p>
          <p className="text-lg text-zinc-500 leading-relaxed mt-4">
            We are particularly interested in companies approaching commercialization, because this is where execution risk can begin to compress while the upside of early-stage entry is still very much intact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {stages.map((stage, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-zinc-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-100 group-hover:bg-zinc-900 transition-colors"></div>
              <h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">{stage.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-8 flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 shrink-0 hidden sm:flex">
            <iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
          </div>
          <p className="text-zinc-700 font-medium leading-relaxed">
            We reserve capacity for follow-on investment in selected portfolio companies that achieve clear milestones and attract strong co-investment interest.
          </p>
        </div>

      </div>
    </section>
  );
}