export type Product = {
  slug: string;
  name: string;
  accent: "violet" | "field" | "amber";
  category: string;
  description: string;
  tags: string[];
  proof: string;
  liveUrl: string;
  extraLinks?: { label: string; href: string }[];
  screen: {
    title: string;
    rows: { label: string; value: string; state: "ok" | "warn" | "info" }[];
  };
};

export const products: Product[] = [
  {
    slug: "quietpilot",
    name: "QuietPilot",
    accent: "violet",
    category: "Catering revenue and operations",
    description:
      "QuietPilot connects commercial context with payment evidence, staffing, inventory, production, and readiness so operators can see what is known, what is blocked, and what needs review.",
    tags: [
      "Quotes and proposals",
      "Payment verification",
      "Staffing and inventory",
      "Readiness review",
    ],
    proof: "Read-only demo available",
    liveUrl: "https://www.quietpilot.us",
    extraLinks: [
      { label: "[mbmapps surface]", href: "https://quietpilot.mbmapps.com/" },
    ],
    screen: {
      title: "quietpilot — event readiness",
      rows: [
        { label: "accepted work", value: "12 events", state: "ok" },
        { label: "payment evidence", value: "9 verified", state: "ok" },
        { label: "staffing", value: "2 gaps flagged", state: "warn" },
        { label: "inventory", value: "review needed", state: "warn" },
        { label: "readiness", value: "7 / 12 confirmed", state: "info" },
      ],
    },
  },
  {
    slug: "leaguepilot",
    name: "LeaguePilot",
    accent: "field",
    category: "Private youth-sports operations",
    description:
      "LeaguePilot gives families and approved team staff one private place for schedules, attendance, official updates, practice context, and the details that keep a season moving.",
    tags: [
      "Schedules and calendars",
      "RSVP visibility",
      "Team communication",
      "Role-aware access",
    ],
    proof: "Sign-in or access request required for team areas",
    liveUrl: "https://www.leaguepilot.us",
    screen: {
      title: "leaguepilot — season board",
      rows: [
        { label: "next game", value: "sat 9:00 am", state: "info" },
        { label: "rsvp", value: "14 in · 3 out", state: "ok" },
        { label: "official updates", value: "1 unread", state: "warn" },
        { label: "practice", value: "tue confirmed", state: "ok" },
        { label: "access", value: "role-scoped", state: "info" },
      ],
    },
  },
  {
    slug: "quoteflow",
    name: "QuoteFlow",
    accent: "amber",
    category: "Quote-to-event operations",
    description:
      "QuoteFlow is the product system behind the QuotePilot workspace, connecting quote configuration, proposals, customer decisions, payment context, and event-production planning.",
    tags: [
      "Guided quote building",
      "Scenario comparison",
      "Customer decisions",
      "Production checklist",
    ],
    proof: "Staff sign-in required",
    liveUrl: "https://tonicatering.web.app",
    screen: {
      title: "quoteflow — quote pipeline",
      rows: [
        { label: "open quotes", value: "5 drafts", state: "info" },
        { label: "proposals", value: "3 sent", state: "ok" },
        { label: "decisions", value: "1 awaiting", state: "warn" },
        { label: "payments", value: "2 deposits in", state: "ok" },
        { label: "production", value: "checklist 80%", state: "info" },
      ],
    },
  },
];

export type ClientProject = {
  name: string;
  type: string;
  description: string;
  url: string;
  linkLabel: string;
  screen: { headline: string; sub: string; cta: string };
};

export const clientProjects: ClientProject[] = [
  {
    name: "Wake for Warriors",
    type: "Ecommerce storefront / Shopify integration / mission-driven brand",
    description:
      "A purpose-driven commerce concept that keeps the storefront experience connected to the Wake for Warriors mission before shoppers continue into Shopify.",
    url: "https://wakeforwarriorsshopify.netlify.app/",
    linkLabel: "[visit storefront]",
    screen: {
      headline: "Wake for Warriors",
      sub: "Mission-led merchandise · Shopify checkout",
      cta: "Shop the mission",
    },
  },
  {
    name: "Jour et Nuit Concierge",
    type: "Business website / strategy / professional services",
    description:
      "A conversion-focused website for a concierge consultancy, helping entrepreneurs understand the offer and move into a structured consultation.",
    url: "https://www.jouretnuitconcierge.com/",
    linkLabel: "[visit site]",
    screen: {
      headline: "Jour et Nuit Concierge",
      sub: "Business readiness · Growth consulting",
      cta: "Book a consultation",
    },
  },
];

export type SystemNote = {
  title: string;
  href: string;
  category: string;
  detail: string;
};

export const systems: SystemNote[] = [
  {
    title: "quietpilot/authority-map",
    href: "https://www.quietpilot.us",
    category: "Accepted-work and event-readiness operations",
    detail:
      "Accepted is not paid, provider return is not settlement, and staffing or inventory planning alone does not prove readiness.",
  },
  {
    title: "leaguepilot/authority-map",
    href: "https://www.leaguepilot.us",
    category: "Private team and season coordination",
    detail:
      "Private team information remains role-scoped. External notifications and provider delivery depend on configuration and verified sends.",
  },
  {
    title: "quoteflow/authority-map",
    href: "https://tonicatering.web.app",
    category: "Quote-to-event decision flow",
    detail:
      "A sent proposal is not a decision, and a decision is not a deposit. Production planning starts only from verified commitments.",
  },
];

export const articles = {
  featured: {
    badge: "NEW",
    year: "2026",
    topic: "AI SYSTEMS",
    title: "The Intelligence Improves. Your World Remains.",
    excerpt:
      "AI's durable advantage is not a clever prompt or agent diagram. It is a faithful operating world with observation, memory, authority, feedback, and proof.",
  },
  notes: [
    {
      title: "The Proof Register",
      detail: "Authority, evidence, and the claims software is allowed to make.",
      year: "2026",
    },
    {
      title: "Choosing cloud combinations",
      detail: "How to assemble infrastructure without hiding operational boundaries.",
      year: "2025",
    },
  ],
};

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Firebase",
  "PostgreSQL",
  "Stripe",
  "Vercel",
  "Product systems",
];

export const CONTACT_EMAIL = "flightcontrol@quietpilot.us";
export const GITHUB_URL = "https://github.com/TOTALLYMAJOR";
