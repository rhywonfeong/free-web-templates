export default function Team() {
  const team = [
    {
      name: "Alex Mercer",
      role: "Managing Partner",
      cred: "Ex-VP Enterprise Tech, 15+ years B2B growth.",
      linkedin: "#"
    },
    {
      name: "Sarah Chen",
      role: "Partner",
      cred: "Former Founder & Operator in AI SaaS.",
      linkedin: "#"
    },
    {
      name: "David Ross",
      role: "Venture Partner",
      cred: "Cybersecurity leader, multiple exits.",
      linkedin: "#"
    },
    {
      name: "Elena Rostova",
      role: "Principal",
      cred: "Corporate development and M&A specialist.",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4 block">People behind the fund</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
            Built by operators, investors and domain experts.
          </h2>
          <div className="space-y-6 text-lg text-zinc-500 leading-relaxed">
            <p>
              EPIC Ventures combines venture perspective, operating experience and specialist access across the categories where we invest. Around the fund is a network of investors, managers and experts with backgrounds in venture capital, corporate development, enterprise technology, AI, cybersecurity, M&A, B2B growth and international business development.
            </p>
            <p>
              This matters because early-stage companies rarely need money alone. They need sharper decisions, better access, stronger pattern recognition and support from people who understand what it takes to move from technical promise to commercial traction.
            </p>
            <p className="text-sm text-zinc-400 mt-4">
              Selected advisors and venture partners bring experience from areas such as corporate venture activity, enterprise software, AI engineering, cybersecurity leadership, strategic growth and cross-border business development. That network is meant to improve both sourcing quality and post-investment support.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="group p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-zinc-100 mb-6 overflow-hidden flex items-center justify-center text-zinc-400 border border-zinc-200">
                {/* Placeholder for real headshots - using icon for now to maintain clean look */}
                <iconify-icon icon="solar:user-linear" width="32"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium tracking-tight text-zinc-900">{member.name}</h3>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-4 mt-1">{member.role}</p>
              <p className="text-sm text-zinc-600 mb-6 min-h-[40px]">
                {member.cred}
              </p>
              <a 
                href={member.linkedin} 
                className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-[#0A66C2] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <iconify-icon icon="simple-icons:linkedin" width="14"></iconify-icon>
                View LinkedIn profile
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}