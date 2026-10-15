export default function HowWeWork() {
  return (
    <section className="py-32 bg-zinc-950 text-white selection:bg-zinc-800 selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 block">How we work</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Hands-on with founders.<br className="hidden md:block" /> Clear and disciplined with co-investors.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
          {/* Divider visible on md screens */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2"></div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium tracking-tight flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                <iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
              </div>
              For founders
            </h3>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                We believe capital should be visible in the operating life of the company, not only in the closing documents. EPIC Ventures works closely with portfolio companies on the issues that shape outcomes early: commercial direction, business development, strategic decisions, fundraising readiness, partner access and the practical questions that determine whether momentum builds or stalls.
              </p>
              <p>
                Our ambition is not to create reporting theater for founders. It is to be useful where judgment, access and speed can materially improve the odds.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium tracking-tight flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                <iconify-icon icon="solar:handshake-linear" width="16"></iconify-icon>
              </div>
              For co-investors
            </h3>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                We are building EPIC Ventures as a credible partner for selective co-investment in focused B2B technology categories. That means clarity of thesis, discipline in fit assessment, preference for companies close to meaningful commercial proof and a portfolio model that does not stop at the first check.
              </p>
              <p>
                We want to help build companies that can earn the attention of strong follow-on capital, not simply complete early rounds.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-zinc-800 text-center">
          <p className="text-xl font-medium text-zinc-300">
            In both cases, the standard is the same: real market need, clear reasoning, transparent criteria and long-term value creation.
          </p>
        </div>

      </div>
    </section>
  );
}