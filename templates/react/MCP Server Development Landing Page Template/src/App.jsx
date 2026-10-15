import React, { memo, useEffect, useMemo, useRef, useState } from "react";

const navLinks = ["Problem", "Solution", "Architecture", "Deliverables", "Process", "Contact"];

const symptoms = [
  "Agents cannot access the right business data",
  "API credentials and permissions are messy",
  "Tools are fragmented across SaaS platforms",
  "Teams are copy-pasting data into AI chats",
  "Existing APIs are not designed for agent use"
];

const deliverables = [
  ["solar:server-square-cloud-linear", "MCP server design", "A practical server architecture mapped to your agent client, tools, data boundaries, and workflow risk."],
  ["solar:document-text-linear", "Tool list and request/response contracts", "Clear tool names, parameters, returns, errors, and expected agent behavior."],
  ["solar:shield-keyhole-linear", "Authentication and environment setup", "Scoped credentials, environment variables, secrets handling, and access boundaries."],
  ["solar:code-square-linear", "Implementation and local testing", "Working MCP server implementation tested against real workflows and edge cases."],
  ["solar:notebook-bookmark-linear", "README/setup documentation", "Readable handoff documentation your technical team can run, inspect, and extend."],
  ["solar:chat-round-dots-linear", "Example prompts for Codex, Claude, Cursor, or custom agents", "Prompt patterns that demonstrate correct tool use without encouraging unsafe automation."],
  ["solar:rocket-linear", "Optional deployment plan", "Deployment notes for your chosen environment, including logging and operational considerations."]
];

const builds = [
  {
    title: "Database lookup MCP server",
    icon: "solar:database-linear",
    desc: "Expose scoped read tools for customer records, inventory, analytics, or operational data without giving agents broad database access."
  },
  {
    title: "Internal CRM tools MCP server",
    icon: "solar:users-group-rounded-linear",
    desc: "Let agents search, summarize, update, or prepare CRM actions through controlled tool contracts."
  },
  {
    title: "File/knowledge access MCP server",
    icon: "solar:folder-with-files-linear",
    desc: "Create safe retrieval tools for internal documents, policies, project files, and knowledge bases."
  },
  {
    title: "Business workflow approval MCP server",
    icon: "solar:checklist-minimalistic-linear",
    desc: "Route agent-proposed actions through approval steps, human review, and logs before execution."
  },
  {
    title: "Custom API wrapper MCP server",
    icon: "solar:plug-circle-linear",
    desc: "Turn fragmented third-party or internal APIs into agent-readable tools with predictable inputs and outputs."
  }
];

const process = [
  ["01", "Map the system", "Identify the data sources, APIs, workflow steps, credentials, and actions agents should never take silently."],
  ["02", "Define safe tools", "Translate real tasks into scoped MCP tools with explicit inputs, outputs, errors, and review points."],
  ["03", "Build the MCP server", "Implement the server, tool registry, auth boundary, environment setup, and local test workflow."],
  ["04", "Test with real agent workflows", "Run representative Codex, Claude, Cursor, or custom-agent tasks to refine contracts and safety controls."],
  ["05", "Document and hand off", "Provide setup notes, example prompts, tool descriptions, and extension guidance."]
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 }
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      return undefined;
    }
  }, [key, value]);

  return [value, setValue];
}

const SectionLabel = ({ icon, children }) => (
  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2rem] text-cyan-200">
    <iconify-icon icon={icon} width="16" height="16" aria-hidden="true"></iconify-icon>
    {children}
  </div>
);

const FlowNode = memo(function FlowNode({ label, detail, icon, active }) {
  return (
    <div
      className={`relative min-h-28 rounded-2xl border p-4 transition duration-300 ${
        active
          ? "border-cyan-300/60 bg-cyan-300/10 shadow-[0_0_35px_rgba(34,211,238,0.16)]"
          : "border-white/10 bg-slate-950/60 hover:border-cyan-300/35 hover:bg-white/[0.045]"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-200">
          <iconify-icon icon={icon} width="20" height="20" aria-hidden="true"></iconify-icon>
        </span>
        <span className={`size-2 rounded-full ${active ? "bg-cyan-300" : "bg-slate-500"}`}></span>
      </div>
      <p className="text-sm font-medium text-white">{label}</p>
      <p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p>
    </div>
  );
});

function HeroVisual() {
  const nodes = [
    ["AI client", "Codex, Claude, Cursor, custom agents", "solar:cpu-bolt-linear"],
    ["MCP server", "Typed, inspectable tool interface", "solar:server-path-linear"],
    ["Controlled tools", "Scoped actions and contracts", "solar:settings-minimalistic-linear"],
    ["Systems", "APIs, database, files, workflows", "solar:database-linear"],
    ["Review + logs", "Human approvals and audit trail", "solar:clipboard-check-linear"]
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(current => (current + 1) % nodes.length), 1800);
    return () => clearInterval(id);
  }, [nodes.length]);

  return (
    <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.13),transparent_30%)]"></div>
      <div className="relative mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25rem] text-slate-500">Controlled agent access map</p>
          <p className="mt-1 text-sm text-slate-300">tool calls → checks → business systems</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-400/80"></span>
          <span className="size-2 rounded-full bg-amber-300/80"></span>
          <span className="size-2 rounded-full bg-emerald-300/80"></span>
        </div>
      </div>

      <div className="relative grid gap-3 md:grid-cols-5">
        <div className="flow-line hidden md:block"></div>
        {nodes.map((node, index) => (
          <FlowNode key={node[0]} label={node[0]} detail={node[1]} icon={node[2]} active={active === index} />
        ))}
      </div>

      <div className="relative mt-4 grid gap-3 md:grid-cols-3">
        {["Scoped credentials", "Tool schema validation", "Human approval paths"].map(item => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs text-slate-300">
            <span className="mr-2 inline-block size-1.5 rounded-full bg-cyan-300"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label="MCP Server Development home">
          <span className="grid size-10 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 transition group-hover:scale-105">
            <iconify-icon icon="solar:server-square-cloud-linear" width="22" height="22" aria-hidden="true"></iconify-icon>
          </span>
          <span>
            <span className="block text-sm font-medium tracking-tight text-white">MCP Server Development</span>
            <span className="block text-xs text-slate-500">Agent tool access, built safely.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-full px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:scale-105 hover:bg-cyan-200 lg:inline-flex"
        >
          Book discovery
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-200 lg:hidden"
          onClick={() => setOpen(value => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <iconify-icon icon={open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="22" height="22"></iconify-icon>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Problem() {
  return (
    <section id="problem" className="section-shell" data-reveal>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionLabel icon="solar:danger-triangle-linear">Problem</SectionLabel>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Your agents cannot act if your tools are invisible.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
            AI agents are only useful when they can reach the right context and take the right controlled actions.
            Most business systems were not designed for agent-readable access, scoped tool calls, or safe handoff.
          </p>
        </div>

        <div className="grid gap-3">
          {symptoms.map((symptom, index) => (
            <div
              key={symptom}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.045]"
            >
              <div className="flex gap-4">
                <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-xl border border-white/10 bg-slate-950 text-xs text-cyan-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-medium text-white">{symptom}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    The workaround is usually manual copying, broad credentials, or fragile one-off scripts.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const controls = ["Scoped tools", "Clear contracts", "Auth boundaries", "Human approval", "Logs"];

  return (
    <section id="solution" className="section-shell" data-reveal>
      <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.035] to-blue-500/[0.06] p-6 md:p-10">
        <SectionLabel icon="solar:shield-check-linear">Solution</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A clean tool layer for AI agents.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              I design and build MCP servers that expose your business systems through scoped tools with clear
              request/response contracts, authentication boundaries, safer workflows, and readable operational logs.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-400">
              The goal is not to make agents fully autonomous. The goal is to give them the right tools, with the
              right limits, so useful work can move through controlled interfaces.
            </p>
          </div>

          <div className="grid gap-3">
            {controls.map((control, index) => (
              <div key={control} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                <span className="grid size-9 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <iconify-icon icon="solar:check-circle-linear" width="19" height="19" aria-hidden="true"></iconify-icon>
                </span>
                <span className="text-sm font-medium text-white">{control}</span>
                <span className="ml-auto text-xs text-slate-600">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const systems = [
    ["API", "solar:programming-linear"],
    ["Database", "solar:database-linear"],
    ["Files", "solar:folder-open-linear"],
    ["Business Workflow", "solar:workflow-square-linear"]
  ];

  return (
    <section id="architecture" className="section-shell" data-reveal>
      <div className="mb-10 max-w-3xl">
        <SectionLabel icon="solar:structure-linear">Architecture</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Purpose-built interfaces between agents and business systems.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-400">
          The MCP server sits between the AI client and internal systems, translating agent requests into controlled
          tool calls with validation, authentication, review paths, and logs.
        </p>
      </div>

      <div className="architecture-grid rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 md:p-8">
        <div className="arch-card arch-client">
          <iconify-icon icon="solar:laptop-linear" width="24" height="24"></iconify-icon>
          <strong>AI Client</strong>
          <span>Codex / Claude / Cursor / custom app</span>
        </div>

        <div className="arch-card arch-server">
          <iconify-icon icon="solar:server-square-cloud-linear" width="26" height="26"></iconify-icon>
          <strong>MCP Server</strong>
          <span>Tool interface and runtime boundary</span>
        </div>

        <div className="arch-card arch-registry">
          <iconify-icon icon="solar:list-check-linear" width="24" height="24"></iconify-icon>
          <strong>Tool Registry</strong>
          <span>Names, schemas, contracts, errors</span>
        </div>

        <div className="arch-card arch-auth">
          <iconify-icon icon="solar:shield-keyhole-linear" width="24" height="24"></iconify-icon>
          <strong>Auth Boundary</strong>
          <span>Scoped secrets and permissions</span>
        </div>

        <div className="arch-systems">
          {systems.map(system => (
            <div key={system[0]} className="arch-card">
              <iconify-icon icon={system[1]} width="23" height="23"></iconify-icon>
              <strong>{system[0]}</strong>
              <span>Controlled access target</span>
            </div>
          ))}
        </div>

        <div className="arch-card arch-logs">
          <iconify-icon icon="solar:document-add-linear" width="24" height="24"></iconify-icon>
          <strong>Logs</strong>
          <span>Tool calls, outputs, approvals, failures</span>
        </div>
      </div>
    </section>
  );
}

function Deliverables() {
  return (
    <section id="deliverables" className="section-shell" data-reveal>
      <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <SectionLabel icon="solar:box-minimalistic-linear">Deliverables</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            What a scoped MCP server build includes.
          </h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 lg:max-w-sm">
          <p className="text-sm font-medium text-white">Discovery call first</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Custom MCP server builds are quoted after a technical discovery call. You receive a scoped build quote.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {deliverables.map(item => (
          <div key={item[1]} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]">
            <span className="mb-5 grid size-11 place-items-center rounded-2xl border border-white/10 bg-slate-950 text-cyan-200 transition group-hover:scale-105">
              <iconify-icon icon={item[0]} width="23" height="23" aria-hidden="true"></iconify-icon>
            </span>
            <h3 className="text-lg font-medium tracking-tight text-white">{item[1]}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item[2]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExampleBuilds() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="section-shell" data-reveal>
      <div className="mb-10 max-w-3xl">
        <SectionLabel icon="solar:case-round-linear">Example builds</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Focused servers for real agent workflows.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-3">
          {builds.map((build, index) => (
            <button
              key={build.title}
              type="button"
              onClick={() => setSelected(index)}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${
                selected === index
                  ? "border-cyan-300/45 bg-cyan-300/10 text-white"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <iconify-icon icon={build.icon} width="22" height="22" aria-hidden="true"></iconify-icon>
              <span className="text-sm font-medium">{build.title}</span>
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8">
          <div className="absolute -right-20 -top-20 size-56 rounded-full bg-cyan-300/10 blur-3xl"></div>
          <div className="relative">
            <span className="grid size-14 place-items-center rounded-3xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
              <iconify-icon icon={builds[selected].icon} width="28" height="28" aria-hidden="true"></iconify-icon>
            </span>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">{builds[selected].title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">{builds[selected].desc}</p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {["Tool schema", "Auth checks", "Readable logs"].map(label => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-xs uppercase tracking-[0.18rem] text-slate-500">{label}</p>
                  <p className="mt-2 text-sm text-slate-300">Included in scope</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section-shell" data-reveal>
      <div className="mb-10 max-w-3xl">
        <SectionLabel icon="solar:route-linear">Process</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          From messy systems to a safe agent tool interface.
        </h2>
      </div>

      <div className="relative grid gap-4">
        {process.map(step => (
          <div key={step[0]} className="group grid gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/30 md:grid-cols-[7rem_1fr]">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-semibold tracking-tight text-cyan-200">{step[0]}</span>
              <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/50 to-transparent"></span>
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-tight text-white">{step[1]}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const initial = {
    name: "",
    email: "",
    phone: "",
    business: "",
    access: "",
    client: "Claude",
    useCase: "Internal use"
  };

  const [form, setForm] = useLocalStorageState("mcp-contact-draft", initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const accessRef = useRef(null);

  const emailBody = useMemo(() => {
    return encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nBusiness: ${form.business}\nAI client: ${form.client}\nUse type: ${form.useCase}\n\nTool/API/database to access:\n${form.access}`
    );
  }, [form]);

  function updateField(field, value) {
    setForm(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: "" }));
  }

  function validate() {
    const next = {};
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.access.trim()) next.access = "Briefly describe the tool, API, or database you want agents to access.";
    return next;
  }

  function submit(event) {
    event.preventDefault();
    const next = validate();
    setErrors(next);

    if (Object.keys(next).length) {
      if (next.access && accessRef.current) accessRef.current.focus();
      return;
    }

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      setForm(initial);
    }, 900);
  }

  return (
    <section id="contact" className="section-shell pb-24" data-reveal>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel icon="solar:letter-linear">Contact</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Map your first MCP server.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400">
            Share the system you want AI agents to access. I will review the technical shape and respond from{" "}
            <a className="text-cyan-200 underline decoration-cyan-300/30 underline-offset-4" href="mailto:samisabiridrissi@gmail.com">
              samisabiridrissi@gmail.com
            </a>
            .
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm font-medium text-white">Good fit signals</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>• You already know which data or workflow matters.</li>
              <li>• You want scoped access instead of broad credentials.</li>
              <li>• You need an implementation handoff your team can run.</li>
            </ul>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-5 shadow-2xl shadow-cyan-950/20 md:p-8" noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" value={form.name} onChange={value => updateField("name", value)} autoComplete="name" />
            <Field
              label="Email"
              type="email"
              required
              value={form.email}
              error={errors.email}
              onChange={value => updateField("email", value)}
              autoComplete="email"
            />
            <Field label="Phone optional" value={form.phone} onChange={value => updateField("phone", value)} autoComplete="tel" />
            <Field label="Business name" value={form.business} onChange={value => updateField("business", value)} autoComplete="organization" />
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-slate-200">What tool, API, or database do you want agents to access?</span>
            <textarea
              ref={accessRef}
              value={form.access}
              onChange={event => updateField("access", event.target.value)}
              className={`mt-2 min-h-32 w-full resize-y rounded-2xl border bg-white/[0.035] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 ${
                errors.access ? "border-red-400/60" : "border-white/10"
              }`}
              placeholder="Example: Postgres customer database, HubSpot API, internal approval workflow, shared project files..."
              aria-invalid={Boolean(errors.access)}
            />
            {errors.access && <span className="mt-2 block text-xs text-red-300">{errors.access}</span>}
          </label>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <ChoiceGroup
              label="Which AI client are you using?"
              options={["Codex", "Claude", "Cursor", "Custom app", "Other"]}
              value={form.client}
              onChange={value => updateField("client", value)}
            />
            <ChoiceGroup
              label="Internal use or customer-facing use?"
              options={["Internal use", "Customer-facing use", "Both / not sure"]}
              value={form.useCase}
              onChange={value => updateField("useCase", value)}
            />
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <span className="spinner"></span>
                  Preparing request
                </>
              ) : (
                <>
                  Book a Technical Discovery Call
                  <iconify-icon icon="solar:arrow-right-up-linear" width="18" height="18"></iconify-icon>
                </>
              )}
            </button>

            <a
              href={`mailto:samisabiridrissi@gmail.com?subject=${encodeURIComponent("MCP Server Development Discovery")}&body=${emailBody}`}
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              Email directly
            </a>
          </div>

          {status === "success" && (
            <div role="status" className="mt-5 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 p-4 text-sm text-emerald-100">
              Your request was prepared. If this were connected to a backend, it would be sent now. You can also use the email button to send it directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", required = false, error, autoComplete }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-200">
        {label}
        {required && <span className="text-cyan-200"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={event => onChange(event.target.value)}
        autoComplete={autoComplete}
        className={`mt-2 w-full rounded-2xl border bg-white/[0.035] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 ${
          error ? "border-red-400/60" : "border-white/10"
        }`}
        aria-invalid={Boolean(error)}
      />
      {error && <span className="mt-2 block text-xs text-red-300">{error}</span>}
    </label>
  );
}

function ChoiceGroup({ label, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-slate-200">{label}</legend>
      <div className="mt-2 grid gap-2">
        {options.map(option => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
              value === option
                ? "border-cyan-300/50 bg-cyan-300/10 text-white"
                : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-white/20 hover:text-white"
            }`}
            aria-pressed={value === option}
          >
            {option}
            <span className={`size-2 rounded-full ${value === option ? "bg-cyan-300" : "bg-slate-600"}`}></span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default function App() {
  useReveal();

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.13),transparent_30%),linear-gradient(to_bottom,#020617,#08111f_45%,#020617)]"></div>
      <div className="fixed inset-0 -z-10 technical-grid opacity-60"></div>
      <Nav />

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-40">
          <div data-reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-300 opacity-60"></span>
                <span className="relative inline-flex size-2 rounded-full bg-cyan-300"></span>
              </span>
              Custom MCP servers for controlled agent access
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Give your AI agents real tools, safely.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I design and build custom MCP servers that connect AI agents to your APIs, databases, internal systems,
              and workflows through clear, controlled tool interfaces.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-medium text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:scale-105 hover:bg-cyan-200"
              >
                Book a Technical Discovery Call
                <iconify-icon icon="solar:calendar-add-linear" width="18" height="18"></iconify-icon>
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-medium text-slate-200 transition hover:scale-105 hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                Map My First MCP Server
                <iconify-icon icon="solar:map-arrow-right-linear" width="18" height="18"></iconify-icon>
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {["Scoped access", "Human review", "Readable logs"].map(item => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-medium text-white">{item}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Built into the interface</p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal>
            <HeroVisual />
          </div>
        </section>

        <Problem />
        <Solution />
        <Architecture />
        <Deliverables />
        <ExampleBuilds />
        <Process />
        <Contact />
      </main>

      <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row md:items-center">
          <p>MCP Server Development is a service page operated by SSI Automations LLC.</p>
          <a className="text-slate-400 transition hover:text-cyan-200" href="mailto:samisabiridrissi@gmail.com">
            samisabiridrissi@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}