import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useOutletContext } from "react-router-dom";
import Icon from "../components/Icon";
import type { ShellContext } from "../lib/shell";

/* ------------------------------------------------------------------ types */

type Tone =
  | "emerald"
  | "rose"
  | "sky"
  | "amber"
  | "orange"
  | "violet"
  | "indigo"
  | "cyan"
  | "slate";

type Shape = "round" | "tile" | "diamond";

type PaletteEntry = {
  icon: string;
  label: string;
  type: string;
  tone: Tone;
  filled?: boolean;
  dashed?: boolean;
};

type PaletteGroup = {
  id: string;
  title: string;
  shape: Shape;
  items: PaletteEntry[];
};

type PortTone = "slate" | "indigo" | "emerald" | "amber";

/* ---------------------------------------------------------------- palette */

const PALETTE: PaletteGroup[] = [
  {
    id: "events",
    title: "Events",
    shape: "round",
    items: [
      { icon: "play", label: "Start event", type: "bpmn:StartEvent", tone: "emerald" },
      { icon: "square", label: "End event", type: "bpmn:EndEvent", tone: "rose", filled: true },
      { icon: "mail", label: "Message event", type: "bpmn:MessageEvent", tone: "sky" },
      { icon: "clock", label: "Timer event", type: "bpmn:TimerEvent", tone: "amber" },
      { icon: "zap", label: "Error boundary", type: "bpmn:ErrorBoundary", tone: "orange" },
      { icon: "radio", label: "Signal event", type: "bpmn:SignalEvent", tone: "violet" },
    ],
  },
  {
    id: "activities",
    title: "Activities",
    shape: "tile",
    items: [
      { icon: "task", label: "Task", type: "bpmn:Task", tone: "slate" },
      { icon: "user-round", label: "User task", type: "bpmn:UserTask", tone: "indigo" },
      { icon: "cog", label: "Service task", type: "bpmn:ServiceTask", tone: "cyan" },
      { icon: "scroll-text", label: "Script task", type: "bpmn:ScriptTask", tone: "violet" },
      {
        icon: "decision-table",
        label: "Business rule",
        type: "bpmn:BusinessRuleTask",
        tone: "emerald",
      },
      { icon: "send", label: "Send / Receive", type: "bpmn:SendTask", tone: "sky" },
      { icon: "square-plus", label: "Sub-process", type: "bpmn:SubProcess", tone: "amber" },
    ],
  },
  {
    id: "gateways",
    title: "Gateways",
    shape: "diamond",
    items: [
      { icon: "x", label: "Exclusive (XOR)", type: "bpmn:ExclusiveGateway", tone: "amber" },
      { icon: "plus", label: "Parallel (AND)", type: "bpmn:ParallelGateway", tone: "amber" },
      { icon: "circle", label: "Inclusive (OR)", type: "bpmn:InclusiveGateway", tone: "amber" },
      { icon: "hexagon", label: "Event-based", type: "bpmn:EventBasedGateway", tone: "amber" },
    ],
  },
  {
    id: "data",
    title: "Data & Artifacts",
    shape: "tile",
    items: [
      { icon: "file-text", label: "Data object", type: "bpmn:DataObject", tone: "slate" },
      { icon: "database", label: "Data store", type: "bpmn:DataStore", tone: "slate" },
      { icon: "rows-3", label: "Pool / Lane", type: "bpmn:Participant", tone: "slate" },
      {
        icon: "message-square-text",
        label: "Annotation",
        type: "bpmn:TextAnnotation",
        tone: "slate",
      },
      { icon: "group", label: "Group", type: "bpmn:Group", tone: "slate", dashed: true },
    ],
  },
];

const IMPLEMENTATIONS = [
  { label: "HTTP Connector", icon: "plug" },
  { label: "Delegate Expression", icon: "code" },
  { label: "External Worker", icon: "cog" },
  { label: "Inline Script", icon: "scroll-text" },
];

/* ------------------------------------------------------------- components */

function PaletteBadge({ item, shape }: { item: PaletteEntry; shape: Shape }) {
  if (shape === "round") {
    return (
      <span className={`badge badge--round tone-${item.tone}`}>
        <Icon name={item.icon} size={item.filled ? 12 : 18} filled={item.filled} />
      </span>
    );
  }

  if (shape === "diamond") {
    return (
      <span className={`badge badge--diamond tone-${item.tone}`}>
        <Icon name={item.icon} size={15} strokeWidth={2} />
      </span>
    );
  }

  return (
    <span
      className={`badge badge--tile tone-${item.tone}${item.dashed ? " badge--dashed" : ""}`}
    >
      <Icon name={item.icon} size={18} />
    </span>
  );
}

function PaletteItem({ item, shape }: { item: PaletteEntry; shape: Shape }) {
  return (
    <div className={`palette-item tone-${item.tone}`} draggable title={item.type}>
      <PaletteBadge item={item} shape={shape} />
      <span className="palette-item__text">
        <span className="palette-item__label">{item.label}</span>
        <span className="palette-item__type">{item.type}</span>
      </span>
      <Icon name="grip-vertical" size={16} className="palette-item__grip" />
    </div>
  );
}

function PaletteSection({
  group,
  items,
  open,
  onToggle,
}: {
  group: PaletteGroup;
  items: PaletteEntry[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="palette-section">
      <button
        type="button"
        className="palette-section__toggle"
        onClick={onToggle}
        aria-expanded={open}
      >
        <Icon name="chevron-right" size={14} className="palette-section__chevron" />
        <span className="palette-section__title">{group.title}</span>
        <span className="palette-section__count">{items.length}</span>
      </button>
      {open && (
        <div className="palette-section__items">
          {items.map((item) => (
            <PaletteItem key={item.type + item.label} item={item} shape={group.shape} />
          ))}
        </div>
      )}
    </div>
  );
}

function Switch({
  on,
  onChange,
  label,
}: {
  on: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onChange}
      className={`switch${on ? " is-on" : ""}`}
    >
      <span className="switch__knob" />
    </button>
  );
}

function NodeCard({
  label,
  fn,
  icon,
  tone,
  active = false,
  children,
  inPort,
  outPort,
  width,
  left,
  top,
}: {
  label: string;
  fn: string;
  icon: string;
  tone: Tone;
  active?: boolean;
  children: ReactNode;
  inPort: PortTone;
  outPort: PortTone;
  width: number;
  left: number;
  top: number;
}) {
  return (
    <div className="node" style={{ left, top, width }}>
      <div className="node-card__fn mono">{fn}</div>
      <div className={`node-card${active ? " node-card--active" : ""}`}>
        <div className="node-card__head">
          <span className={`node-card__icon tone-${tone}`}>
            <Icon name={icon} size={16} />
          </span>
          <span className="node-card__title">{label}</span>
          <button
            type="button"
            className="icon-btn icon-btn--xs node-card__run"
            aria-label="Run step"
          >
            <Icon name="play" size={13} />
          </button>
        </div>
        <div className="node-card__body">{children}</div>
      </div>
      <span className={`port port--in dot--${inPort}`} />
      <span className={`port port--out dot--${outPort}`} />
    </div>
  );
}

/* ----------------------------------------------------------------- page */

export default function Designer() {
  const { sidebarOpen, propsOpen, setSidebarOpen, setPropsOpen } =
    useOutletContext<ShellContext>();

  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [ddOpen, setDdOpen] = useState(false);
  const [implementation, setImplementation] = useState(IMPLEMENTATIONS[0]);
  const [asyncBefore, setAsyncBefore] = useState(true);
  const [retry, setRetry] = useState(false);
  const ddRef = useRef<HTMLDivElement | null>(null);

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PALETTE.map((group) => ({
      group,
      items: q
        ? group.items.filter(
            (item) =>
              item.label.toLowerCase().includes(q) || item.type.toLowerCase().includes(q),
          )
        : group.items,
    })).filter((entry) => entry.items.length > 0);
  }, [query]);

  useEffect(() => {
    if (!ddOpen) return undefined;
    const onPointerDown = (event: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(event.target as Node)) setDdOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [ddOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDdOpen(false);
      setSidebarOpen(false);
      setPropsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [setSidebarOpen, setPropsOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(false);
      if (window.innerWidth >= 1280) setPropsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setSidebarOpen, setPropsOpen]);

  const searching = query.trim().length > 0;

  return (
    <div className="workspace">
      {/* ------------------------------------------- elements sidebar */}
      <aside className={`panel panel--left${sidebarOpen ? " is-open" : ""}`}>
        <div className="panel__head">
          <span className="panel__title">Elements</span>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close elements"
            className="icon-btn icon-btn--sm"
          >
            <Icon name="x" size={16} />
          </button>
        </div>

        <div className="palette__search">
          <div className="search">
            <Icon name="search" size={16} className="search__icon" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search elements…"
              className="search__input"
              aria-label="Search elements"
            />
            {searching && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="search__clear"
              >
                <Icon name="x" size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="palette__list scroll-thin">
          {sections.map(({ group, items }) => (
            <PaletteSection
              key={group.id}
              group={group}
              items={items}
              open={searching || !collapsed[group.id]}
              onToggle={() =>
                setCollapsed((prev) => ({ ...prev, [group.id]: !prev[group.id] }))
              }
            />
          ))}

          {sections.length === 0 && (
            <div className="palette-empty">
              <span className="palette-empty__icon">
                <Icon name="search" size={16} />
              </span>
              <p className="palette-empty__title">No elements found</p>
              <p className="palette-empty__hint">Nothing matches “{query.trim()}”.</p>
            </div>
          )}
        </div>

        <div className="palette__foot">
          <div className="hint">
            <Icon name="sparkles" size={16} />
            <p>
              Drag any element onto the canvas, or press <span className="kbd">N</span> to
              insert.
            </p>
          </div>
        </div>
      </aside>

      {/* ------------------------------------------------------ canvas */}
      <main className="canvas">
        <div className="canvas__scroll scroll-thin">
          <div className="canvas__surface">
            <svg className="canvas__wires" fill="none">
              <defs>
                <marker
                  id="a-slate"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M0,1 L9,5 L0,9 z" fill="#94a3b8" />
                </marker>
                <marker
                  id="a-amber"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M0,1 L9,5 L0,9 z" fill="#f59e0b" />
                </marker>
                <marker
                  id="a-emerald"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M0,1 L9,5 L0,9 z" fill="#10b981" />
                </marker>
              </defs>

              <rect
                x="1090"
                y="60"
                width="310"
                height="480"
                rx="18"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              <path d="M120 355 H196" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#a-slate)" />
              <path d="M440 355 H496" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#a-slate)" />
              <path
                d="M572 355 C 614 355, 610 235, 646 235"
                stroke="#10b981"
                strokeWidth="2"
                markerEnd="url(#a-emerald)"
              />
              <path
                d="M536 391 C 536 470, 590 555, 646 555"
                stroke="#f59e0b"
                strokeWidth="2"
                markerEnd="url(#a-amber)"
              />
              <path d="M900 235 H960" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#a-slate)" />
              <path
                d="M1036 235 C 1078 235, 1080 160, 1116 160"
                stroke="#94a3b8"
                strokeWidth="2"
                markerEnd="url(#a-slate)"
              />
              <path
                d="M1036 235 C 1078 235, 1080 400, 1116 400"
                stroke="#94a3b8"
                strokeWidth="2"
                markerEnd="url(#a-slate)"
              />
              <path
                d="M1370 160 C 1408 160, 1400 280, 1434 280"
                stroke="#94a3b8"
                strokeWidth="2"
                markerEnd="url(#a-slate)"
              />
              <path
                d="M1370 400 C 1408 400, 1400 280, 1434 280"
                stroke="#94a3b8"
                strokeWidth="2"
                markerEnd="url(#a-slate)"
              />
              <path d="M900 555 H976" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#a-amber)" />

              <path
                d="M690 118 V 145"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                markerEnd="url(#a-slate)"
              />
              <path d="M712 668 V 632" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5 5" />
            </svg>

            {/* start event */}
            <div className="node" style={{ left: 60, top: 355 }}>
              <span className="event tone-emerald">
                <Icon name="play" size={20} />
              </span>
              <div className="event__label">
                Order
                <br />
                received
              </div>
            </div>

            <NodeCard
              width={240}
              left={200}
              top={355}
              fn="receiveOrder()"
              icon="inbox"
              tone="sky"
              label="Receive Order"
              inPort="slate"
              outPort="indigo"
            >
              <div className="row">
                <span className="row__name">channel</span>
                <span className="row__type">message</span>
              </div>
              <div className="row row--out">
                <span className="row__type">json</span>
                <span className="row__name">order</span>
              </div>
            </NodeCard>

            {/* exclusive gateway */}
            <div className="node node--center gateway" style={{ left: 536, top: 355 }}>
              <span className="gateway__shape">
                <Icon name="x" size={20} strokeWidth={2} />
              </span>
              <div className="gateway__label">Payment valid?</div>
            </div>

            <div className="flow-label flow-label--yes" style={{ left: 592, top: 262 }}>
              Yes
            </div>
            <div className="flow-label flow-label--no" style={{ left: 548, top: 452 }}>
              No
            </div>

            {/* data object */}
            <div style={{ position: "absolute", left: 640, top: 40 }}>
              <div className="data-object">
                <Icon name="file-text" size={16} />
                <div className="data-object__label">Payment.json</div>
              </div>
            </div>

            <NodeCard
              width={250}
              left={650}
              top={235}
              fn="verifyPayment()"
              icon="cog"
              tone="cyan"
              label="Verify Payment"
              active
              inPort="emerald"
              outPort="indigo"
            >
              <div className="row row--out">
                <span className="row__type">POST /payments/verify</span>
              </div>
              <div className="row">
                <span className="row__name">amount</span>
                <span className="row__type">number</span>
              </div>
              <div className="row">
                <span className="row__name">currency</span>
                <span className="row__type">text</span>
              </div>
              <div className="field-chip field-chip--accent">USD</div>
              <div className="row row--out">
                <span className="row__type">bool</span>
                <span className="row__name">approved</span>
              </div>
            </NodeCard>

            <NodeCard
              width={250}
              left={650}
              top={555}
              fn="requestDetails()"
              icon="user-round"
              tone="indigo"
              label="Request Details"
              inPort="amber"
              outPort="amber"
            >
              <div className="row">
                <span className="row__name">assignee</span>
                <span className="row__type">group</span>
              </div>
              <div className="field-chip">billing-team</div>
              <div className="row row--out">
                <span className="row__type">form</span>
                <span className="row__name">response</span>
              </div>
            </NodeCard>

            <div className="annotation" style={{ left: 700, top: 668 }}>
              <p>SLA — customer must respond within 24 hours, otherwise the case escalates.</p>
            </div>

            {/* parallel gateway */}
            <div className="node node--center gateway" style={{ left: 1000, top: 235 }}>
              <span className="gateway__shape">
                <Icon name="plus" size={20} strokeWidth={2} />
              </span>
              <div className="gateway__label">Fork</div>
            </div>

            <div className="lane-label" style={{ left: 1106, top: 50 }}>
              Fulfillment lane
            </div>

            <NodeCard
              width={250}
              left={1120}
              top={160}
              fn="reserveStock()"
              icon="scroll-text"
              tone="violet"
              label="Reserve Stock"
              inPort="slate"
              outPort="indigo"
            >
              <div className="code-chip">
                inventory.hold(<span className="tok">items</span>)
              </div>
              <div className="row row--out">
                <span className="row__type">id</span>
                <span className="row__name">holdRef</span>
              </div>
            </NodeCard>

            <NodeCard
              width={250}
              left={1120}
              top={400}
              fn="sendConfirmation()"
              icon="send"
              tone="sky"
              label="Send Confirmation"
              inPort="slate"
              outPort="indigo"
            >
              <div className="row">
                <span className="row__name">template</span>
                <span className="row__type">text</span>
              </div>
              <div className="field-chip">order-confirmed</div>
              <div className="row row--out">
                <span className="row__type">status</span>
                <span className="row__name">sent</span>
              </div>
            </NodeCard>

            <div className="node" style={{ left: 1438, top: 280 }}>
              <span className="event event--thick tone-emerald">
                <Icon name="check" size={20} strokeWidth={2.25} />
              </span>
              <div className="event__label">Completed</div>
            </div>

            <div className="node" style={{ left: 980, top: 555 }}>
              <span className="event event--thick tone-rose">
                <Icon name="square" size={16} filled />
              </span>
              <div className="event__label">On hold</div>
            </div>
          </div>
        </div>

        {/* canvas tool bar */}
        <div className="floating toolbar">
          <button type="button" aria-label="Select" className="icon-btn icon-btn--active">
            <Icon name="mouse-pointer-2" size={16} />
          </button>
          <button type="button" aria-label="Pan" className="icon-btn">
            <Icon name="hand" size={16} />
          </button>
          <button type="button" aria-label="Connect" className="icon-btn">
            <Icon name="spline" size={16} />
          </button>
          <button type="button" aria-label="Text" className="icon-btn">
            <Icon name="type" size={16} />
          </button>
          <span className="divider-v" />
          <button type="button" aria-label="Comment" className="icon-btn">
            <Icon name="message-circle" size={16} />
          </button>
        </div>

        <div className="floating zoombar">
          <button type="button" aria-label="Zoom out" className="icon-btn icon-btn--sm">
            <Icon name="minus" size={16} />
          </button>
          <span className="zoombar__value">100%</span>
          <button type="button" aria-label="Zoom in" className="icon-btn icon-btn--sm">
            <Icon name="plus" size={16} />
          </button>
          <span className="divider-v" />
          <button type="button" aria-label="Fit to screen" className="icon-btn icon-btn--sm">
            <Icon name="maximize" size={16} />
          </button>
        </div>

        <div className="floating statusbar">
          <span className="status-dot" />
          <span>12 elements · no validation errors</span>
        </div>
      </main>

      {/* -------------------------------------------- properties sidebar */}
      <aside className={`panel panel--right${propsOpen ? " is-open" : ""}`}>
        <div className="panel__head">
          <span className="panel__title">Properties</span>
          <button
            type="button"
            onClick={() => setPropsOpen(false)}
            aria-label="Close properties"
            className="icon-btn icon-btn--sm"
          >
            <Icon name="x" size={16} />
          </button>
        </div>

        <div className="tabs">
          <button type="button" className="tab is-active">
            General
          </button>
          <button type="button" className="tab">
            Execution
          </button>
          <button type="button" className="tab">
            Listeners
          </button>
        </div>

        <div className="props__body scroll-thin">
          <div className="props__identity">
            <span className="badge badge--tile tone-cyan">
              <Icon name="cog" size={18} />
            </span>
            <div>
              <div className="props__identity-name">Verify Payment</div>
              <div className="props__identity-type">bpmn:ServiceTask</div>
            </div>
          </div>

          <div>
            <label htmlFor="prop-name" className="field__label">
              Name
            </label>
            <input id="prop-name" type="text" defaultValue="Verify Payment" className="input" />
          </div>

          <div>
            <label htmlFor="prop-id" className="field__label">
              Element ID
            </label>
            <input
              id="prop-id"
              type="text"
              readOnly
              value="Task_0f2ab13"
              className="input input--readonly"
            />
          </div>

          <div className="select" ref={ddRef}>
            <span className="field__label">Implementation</span>
            <button
              type="button"
              onClick={() => setDdOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={ddOpen}
              className="select__button"
            >
              <Icon name={implementation.icon} size={16} />
              <span>{implementation.label}</span>
              <Icon
                name="chevron-down"
                size={16}
                className={`select__chevron${ddOpen ? " is-open" : ""}`}
              />
            </button>
            {ddOpen && (
              <div role="listbox" className="select__menu">
                {IMPLEMENTATIONS.map((option) => {
                  const selected = option.label === implementation.label;
                  return (
                    <button
                      key={option.label}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        setImplementation(option);
                        setDdOpen(false);
                      }}
                      className={`select__option${selected ? " is-selected" : ""}`}
                    >
                      <Icon name={option.icon} size={16} />
                      {option.label}
                      {selected && <Icon name="check" size={16} className="select__check" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="switch-card">
            <div className="switch-row">
              <div>
                <div className="switch-row__title">Asynchronous before</div>
                <div className="switch-row__desc">Create a transaction boundary</div>
              </div>
              <Switch
                on={asyncBefore}
                onChange={() => setAsyncBefore((value) => !value)}
                label="Asynchronous before"
              />
            </div>
            <div className="hr" />
            <div className="switch-row">
              <div>
                <div className="switch-row__title">Retry on failure</div>
                <div className="switch-row__desc">3 attempts · 30s backoff</div>
              </div>
              <Switch
                on={retry}
                onChange={() => setRetry((value) => !value)}
                label="Retry on failure"
              />
            </div>
          </div>

          <div>
            <label htmlFor="prop-doc" className="field__label">
              Documentation
            </label>
            <textarea
              id="prop-doc"
              rows={3}
              defaultValue="Calls the payment gateway and returns an approval flag used by the exclusive gateway."
              placeholder="Describe this step…"
              className="textarea"
            />
          </div>
        </div>

        <div className="props__foot">
          <button type="button" className="btn btn--dark btn--block">
            <Icon name="check" size={16} />
            Apply changes
          </button>
        </div>
      </aside>

      {(sidebarOpen || propsOpen) && (
        <button
          type="button"
          aria-label="Close panel"
          onClick={() => {
            setSidebarOpen(false);
            setPropsOpen(false);
          }}
          className="overlay"
        />
      )}
    </div>
  );
}
