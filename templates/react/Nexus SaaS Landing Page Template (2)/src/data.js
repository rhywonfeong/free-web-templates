export const features = [
  {
    icon: "solar:magic-stick-3-linear",
    title: "Context-aware completion",
    desc: "Nexus reads your whole repository graph, not just the open file, so suggestions land in the right place with the right types.",
  },
  {
    icon: "solar:refresh-circle-linear",
    title: "Agentic refactors",
    desc: "Describe an outcome and the agent plans, edits across files, and runs your tests until everything stays green.",
  },
  {
    icon: "solar:shield-keyhole-linear",
    title: "Private by design",
    desc: "Code never trains foundation models. Run on dedicated, isolated execution with zero retention guarantees.",
  },
  {
    icon: "solar:bug-minimalistic-linear",
    title: "Self-healing diagnostics",
    desc: "Stack traces become fixes. Nexus reproduces, isolates, and patches regressions before they reach review.",
  },
  {
    icon: "solar:branch-linear",
    title: "Reviews that ship",
    desc: "Pull-request summaries, risk flags, and inline rationale that read like your most senior teammate wrote them.",
  },
  {
    icon: "solar:bolt-circle-linear",
    title: "Instant wake-ups",
    desc: "Edge-optimized routing keeps the agent warm. Frictionless growth with smart scheduling across the network.",
  },
];

export const testimonials = [
  {
    quote:
      "It replaced three internal tools and a week of onboarding. New engineers ship to production on day one now.",
    name: "Mara Velasquez",
    role: "VP Engineering, Lumen Grid",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&q=80",
  },
  {
    quote:
      "The agent refactored a 40k-line monolith over a weekend and every test passed. I genuinely did not believe it.",
    name: "Dev Okonkwo",
    role: "Staff Engineer, Northwind",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    quote:
      "Reviews used to bottleneck us. Nexus writes summaries so sharp our seniors approve in minutes, not days.",
    name: "Aria Chen",
    role: "CTO, Parallax",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
  },
];

export const codeLines = [
  { t: "$ ", c: "nexus", g: " agent run", x: ' --task "add rate limiting"' },
  { p: "→ analyzing 1,284 files across 12 packages…" },
  { p: "→ planning: middleware + redis store + tests" },
  { p: "✓ edited src/server/limiter.ts" },
  { p: "✓ edited src/server/index.ts" },
  { p: "✓ added 9 tests · all passing" },
  { p: "✓ opened PR #482 with summary" },
];