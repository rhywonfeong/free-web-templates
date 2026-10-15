import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { MODELS, SYSTEM_PROMPTS, TOOL_META, buildRun, delay } from "./data.js";

/* ---------- persistence layer (simulates Node backend + SQLite) ---------- */
const DB_KEY = "agent.sessions.db";
const loadDB = () => {
  try { return JSON.parse(localStorage.getItem(DB_KEY)) || []; } catch { return []; }
};
const uid = () => Math.random().toString(36).slice(2, 10);

/* ------------------------------ markdown ------------------------------ */
function renderInline(text) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*\s][^*]*\*)/g;
  let last = 0, m, i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const t = m[0];
    if (t.startsWith("**")) out.push(<strong key={i++} className="font-semibold text-zinc-100">{t.slice(2, -2)}</strong>);
    else if (t.startsWith("`")) out.push(<code key={i++} className="inline">{t.slice(1, -1)}</code>);
    else out.push(<em key={i++}>{t.slice(1, -1)}</em>);
    last = m.index + t.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function CodeBlock({ lang, code }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="rounded-lg border border-zinc-800 overflow-hidden bg-[#101014]">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-zinc-800/80 bg-zinc-900/40">
        <span className="text-xs text-zinc-500 mono">{lang || "text"}</span>
        <button
          onClick={() => { navigator.clipboard?.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
          aria-label="Copy code"
        >
          <iconify-icon icon={copied ? "solar:check-circle-linear" : "solar:copy-linear"} width="13" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-3 overflow-x-auto text-xs mono leading-relaxed text-zinc-300">{code}</pre>
    </div>
  );
}

function Markdown({ text }) {
  const blocks = useMemo(() => {
    const lines = text.split("\n");
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const l = lines[i];
      if (l.startsWith("```")) {
        const lang = l.slice(3).trim();
        const buf = [];
        i++;
        while (i < lines.length && !lines[i].startsWith("```")) buf.push(lines[i++]);
        i++;
        out.push({ t: "code", lang, code: buf.join("\n") });
      } else if (/^###\s/.test(l)) { out.push({ t: "h3", v: l.slice(4) }); i++; }
      else if (/^##\s/.test(l)) { out.push({ t: "h2", v: l.slice(3) }); i++; }
      else if (/^[-*]\s/.test(l)) {
        const items = [];
        while (i < lines.length && /^[-*]\s/.test(lines[i])) items.push(lines[i++].slice(2));
        out.push({ t: "ul", items });
      } else if (/^\d+\.\s/.test(l)) {
        const items = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) items.push(lines[i++].replace(/^\d+\.\s/, ""));
        out.push({ t: "ol", items });
      } else if (l.trim() === "") i++;
      else {
        const buf = [];
        while (i < lines.length && lines[i].trim() !== "" && !/^(```|##|[-*]\s|\d+\.\s)/.test(lines[i])) buf.push(lines[i++]);
        out.push({ t: "p", v: buf.join(" ") });
      }
    }
    return out;
  }, [text]);

  return (
    <div className="md-content text-sm text-zinc-300">
      {blocks.map((b, i) => {
        if (b.t === "code") return <CodeBlock key={i} lang={b.lang} code={b.code} />;
        if (b.t === "h2") return <h2 key={i}>{renderInline(b.v)}</h2>;
        if (b.t === "h3") return <h3 key={i}>{renderInline(b.v)}</h3>;
        if (b.t === "ul") return <ul key={i}>{b.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ul>;
        if (b.t === "ol") return <ol key={i}>{b.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ol>;
        return <p key={i}>{renderInline(b.v)}</p>;
      })}
    </div>
  );
}

/* ----------------------------- part rows ----------------------------- */
function Spinner() {
  return <iconify-icon icon="solar:refresh-linear" width="14" class="animate-spin text-violet-400" />;
}

function ThinkingPart({ part }) {
  const [open, setOpen] = useState(true);
  useEffect(() => { if (part.status === "done") setOpen(false); }, [part.status]);
  const running = part.status === "running";
  return (
    <div className="rounded-lg border border-zinc-800/70 bg-zinc-900/30 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800/40 transition-colors text-left"
        aria-expanded={open}
      >
        {running ? <Spinner /> : <iconify-icon icon="solar:lightbulb-minimalistic-linear" width="14" class="text-amber-300/80" />}
        <span className="text-xs text-zinc-400 flex-1">
          {running ? <span className="pulse-dot">Thinking…</span> : `Thought for ${part.duration}s`}
        </span>
        <iconify-icon icon="solar:alt-arrow-down-linear" width="13" class={`text-zinc-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-3 pb-3 pt-1 text-xs leading-relaxed text-zinc-500 italic border-t border-zinc-800/50">
          {part.text}{running && <span className="cursor-blink" />}
        </div>
      )}
    </div>
  );
}

function ToolPart({ part }) {
  const [open, setOpen] = useState(false);
  const meta = TOOL_META[part.tool] || TOOL_META.read;
  const running = part.status === "running";
  return (
    <div className="rounded-lg border border-zinc-800/70 bg-zinc-900/30 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800/40 transition-colors text-left"
        aria-expanded={open}
      >
        <iconify-icon icon={meta.icon} width="14" style={{ color: meta.color }} />
        <span className="text-xs font-medium text-zinc-300">{meta.verb}</span>
        <span className="text-xs mono text-zinc-500 truncate flex-1">{part.title}</span>
        {running ? <Spinner /> : <iconify-icon icon="solar:check-circle-linear" width="14" class="text-emerald-400/80" />}
        <iconify-icon icon="solar:alt-arrow-down-linear" width="13" class={`text-zinc-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-zinc-800/50">
          <div className="px-3 py-2">
            <div className="text-[0.65rem] uppercase tracking-wider text-zinc-600 mb-1">Input</div>
            <pre className="mono text-xs text-zinc-400 overflow-x-auto">{part.input}</pre>
          </div>
          {part.output && (
            <div className="px-3 py-2 border-t border-zinc-800/50">
              <div className="text-[0.65rem] uppercase tracking-wider text-zinc-600 mb-1">Output</div>
              <pre className="mono text-xs text-zinc-400 overflow-x-auto max-h-48 overflow-y-auto">{part.output}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------ messages ------------------------------ */
function AssistantMessage({ msg }) {
  return (
    <div className="flex gap-3 fade-up">
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500/30 to-indigo-500/20 border border-violet-500/30 flex items-center justify-center shrink-0 mt-0.5">
        <iconify-icon icon="solar:bolt-linear" width="14" class="text-violet-300" />
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-2">
        {msg.parts.map((p) =>
          p.type === "thinking" ? <ThinkingPart key={p.id} part={p} /> :
          p.type === "tool" ? <ToolPart key={p.id} part={p} /> :
          <div key={p.id}><Markdown text={p.text} />{p.status === "running" && <span className="cursor-blink" />}</div>
        )}
        {msg.parts.length === 0 && (
          <div className="flex items-center gap-2 text-xs text-zinc-500 py-1"><Spinner /> Connecting to agent…</div>
        )}
      </div>
    </div>
  );
}

function UserMessage({ msg }) {
  return (
    <div className="flex gap-3 justify-end fade-up">
      <div className="max-w-[85%] rounded-xl rounded-tr-sm bg-zinc-800/70 border border-zinc-700/50 px-4 py-2.5 text-sm text-zinc-200 leading-relaxed">
        {msg.text}
        <div className="mt-1 flex items-center gap-1 text-[0.65rem] text-zinc-500 justify-end">
          <iconify-icon icon={msg.mode === "plan" ? "solar:clipboard-list-linear" : "solar:hammer-linear"} width="11" />
          {msg.mode}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- app ------------------------------- */
export default function App() {
  const [sessions, setSessions] = useState(loadDB);
  const [activeId, setActiveId] = useState(() => loadDB()[0]?.id || null);
  const [mode, setMode] = useState("build");
  const [model, setModel] = useState(MODELS[0].id);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [promptModal, setPromptModal] = useState(false);
  const [saved, setSaved] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setSaved(false);
    const t = setTimeout(() => { localStorage.setItem(DB_KEY, JSON.stringify(sessions)); setSaved(true); }, 300);
    return () => clearTimeout(t);
  }, [sessions]);

  const active = sessions.find((s) => s.id === activeId) || null;

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [active?.messages, busy]);

  const patchMsg = useCallback((sid, mid, fn) => {
    setSessions((prev) => prev.map((s) => s.id !== sid ? s :
      { ...s, messages: s.messages.map((m) => m.id !== mid ? m : fn(m)) }));
  }, []);

  const send = async () => {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    let sid = activeId;
    const userMsg = { id: uid(), role: "user", text, mode };
    const asstId = uid();
    const asstMsg = { id: asstId, role: "assistant", parts: [] };

    if (!sid) {
      sid = uid();
      const title = text.length > 38 ? text.slice(0, 38) + "…" : text;
      setSessions((p) => [{ id: sid, title, createdAt: Date.now(), messages: [userMsg, asstMsg] }, ...p]);
      setActiveId(sid);
    } else {
      setSessions((p) => p.map((s) => s.id === sid ? { ...s, messages: [...s.messages, userMsg, asstMsg] } : s));
    }

    setBusy(true);
    const steps = buildRun(mode, text);
    await delay(500);

    for (const step of steps) {
      const pid = uid();
      if (step.type === "thinking") {
        patchMsg(sid, asstId, (m) => ({ ...m, parts: [...m.parts, { id: pid, type: "thinking", text: "", status: "running", duration: step.duration }] }));
        const words = step.text.split(" ");
        for (let i = 0; i < words.length; i += 4) {
          const chunk = words.slice(0, i + 4).join(" ");
          patchMsg(sid, asstId, (m) => ({ ...m, parts: m.parts.map((p) => p.id === pid ? { ...p, text: chunk } : p) }));
          await delay(70);
        }
        patchMsg(sid, asstId, (m) => ({ ...m, parts: m.parts.map((p) => p.id === pid ? { ...p, text: step.text, status: "done" } : p) }));
      } else if (step.type === "tool") {
        patchMsg(sid, asstId, (m) => ({ ...m, parts: [...m.parts, { id: pid, type: "tool", tool: step.tool, title: step.title, input: step.input, output: "", status: "running" }] }));
        await delay(step.ms);
        patchMsg(sid, asstId, (m) => ({ ...m, parts: m.parts.map((p) => p.id === pid ? { ...p, output: step.output, status: "done" } : p) }));
      } else {
        patchMsg(sid, asstId, (m) => ({ ...m, parts: [...m.parts, { id: pid, type: "text", text: "", status: "running" }] }));
        const words = step.text.split(" ");
        for (let i = 0; i < words.length; i += 5) {
          const chunk = words.slice(0, i + 5).join(" ");
          patchMsg(sid, asstId, (m) => ({ ...m, parts: m.parts.map((p) => p.id === pid ? { ...p, text: chunk } : p) }));
          await delay(45);
        }
        patchMsg(sid, asstId, (m) => ({ ...m, parts: m.parts.map((p) => p.id === pid ? { ...p, text: step.text, status: "done" } : p) }));
      }
    }
    setBusy(false);
    inputRef.current?.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === "Tab") { e.preventDefault(); setMode((m) => (m === "build" ? "plan" : "build")); }
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const deleteSession = (id) => {
    setSessions((p) => p.filter((s) => s.id !== id));
    if (activeId === id) setActiveId(null);
  };

  return (
    <div className="h-screen flex bg-[#0a0a0c] overflow-hidden">
      {/* sidebar */}
      <aside className="w-64 shrink-0 border-r border-zinc-800/70 flex flex-col bg-[#0d0d10]">
        <div className="px-4 h-13 py-3.5 flex items-center gap-2 border-b border-zinc-800/70">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <iconify-icon icon="solar:bolt-linear" width="13" class="text-white" />
          </div>
          <span className="font-semibold tracking-tight text-zinc-100">opencode<span className="text-zinc-600 font-normal"> · local</span></span>
        </div>
        <div className="p-3">
          <button
            onClick={() => { setActiveId(null); inputRef.current?.focus(); }}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-700/60 bg-zinc-800/40 hover:bg-zinc-800 hover:border-zinc-600 transition-all text-sm text-zinc-200"
          >
            <iconify-icon icon="solar:add-circle-linear" width="15" /> New session
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 pb-3 flex flex-col gap-0.5">
          <div className="text-[0.65rem] uppercase tracking-wider text-zinc-600 px-2 py-1.5">History · sessions.db</div>
          {sessions.length === 0 && <div className="text-xs text-zinc-600 px-2 py-2">No sessions yet</div>}
          {sessions.map((s) => (
            <div key={s.id} className={`group flex items-center gap-2 px-2.5 py-2 rounded-lg cursor-pointer transition-colors ${s.id === activeId ? "bg-zinc-800/80 text-zinc-100" : "text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200"}`} onClick={() => setActiveId(s.id)}>
              <iconify-icon icon="solar:chat-line-linear" width="14" class="shrink-0 text-zinc-500" />
              <span className="text-xs truncate flex-1">{s.title}</span>
              <button onClick={(e) => { e.stopPropagation(); deleteSession(s.id); }} aria-label="Delete session"
                className="opacity-0 group-hover:opacity-100 text-zinc-600 hover:text-red-400 transition-all">
                <iconify-icon icon="solar:trash-bin-minimalistic-linear" width="13" />
              </button>
            </div>
          ))}
        </div>
        <div className="px-4 py-2.5 border-t border-zinc-800/70 flex items-center gap-2 text-[0.65rem] text-zinc-600">
          <iconify-icon icon="simple-icons:sqlite" width="12" class="text-sky-700" />
          sqlite · WAL
          <span className="flex-1" />
          <span className={`w-1.5 h-1.5 rounded-full ${saved ? "bg-emerald-500" : "bg-amber-500"}`} />
          {saved ? "saved" : "writing…"}
        </div>
      </aside>

      {/* main */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-13 px-5 py-3 border-b border-zinc-800/70 flex items-center gap-3">
          <span className="text-sm font-medium text-zinc-200 truncate">{active?.title || "New session"}</span>
          {busy && <span className="flex items-center gap-1.5 text-xs text-violet-400"><Spinner /> agent working</span>}
          <span className="flex-1" />
          <select value={model} onChange={(e) => setModel(e.target.value)} aria-label="Model"
            className="bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-300 px-2.5 py-1.5 outline-none hover:border-zinc-700 cursor-pointer">
            {MODELS.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
          </select>
          <button onClick={() => setPromptModal(true)} aria-label="View system prompt"
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700 rounded-lg px-2.5 py-1.5 transition-colors">
            <iconify-icon icon="solar:document-text-linear" width="13" /> System prompt
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-5 py-6 flex flex-col gap-5">
            {!active && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <iconify-icon icon="solar:bolt-linear" width="22" class="text-violet-300" />
                </div>
                <h1 className="text-xl font-semibold tracking-tight text-zinc-100">Local coding agent</h1>
                <p className="text-sm text-zinc-500 mt-1.5 max-w-sm">Опишите задачу — агент исследует кодовую базу, составит план или внесёт изменения. <span className="text-zinc-400">Tab</span> переключает режим.</p>
                <div className="flex gap-2 mt-6 flex-wrap justify-center">
                  {["Добавь SSE-стриминг в agent.js", "Спроектируй схему SQLite для сессий", "Почему падает npm test?"].map((s) => (
                    <button key={s} onClick={() => setInput(s)}
                      className="text-xs text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200 rounded-full px-3.5 py-1.5 transition-all hover:-translate-y-0.5">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {active?.messages.map((m) => m.role === "user" ? <UserMessage key={m.id} msg={m} /> : <AssistantMessage key={m.id} msg={m} />)}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* composer */}
        <div className="border-t border-zinc-800/70 bg-[#0d0d10]">
          <div className="max-w-3xl mx-auto px-5 py-4">
            <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/60 focus-within:border-violet-500/50 focus-within:shadow-[0_0_0_3px_rgba(139,92,246,0.08)] transition-all">
              <textarea
                ref={inputRef} rows={2} value={input} autoFocus
                onChange={(e) => setInput(e.target.value)} onKeyDown={onKeyDown}
                placeholder={mode === "plan" ? "Что спланировать? (read-only режим)" : "Что построить?"}
                aria-label="Message"
                className="w-full bg-transparent px-4 pt-3 text-sm text-zinc-200 placeholder-zinc-600"
              />
              <div className="flex items-center gap-2 px-3 pb-2.5">
                <div className="flex rounded-lg border border-zinc-700/60 overflow-hidden" role="tablist" aria-label="Agent mode">
                  {["build", "plan"].map((m) => (
                    <button key={m} role="tab" aria-selected={mode === m} onClick={() => setMode(m)}
                      className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium transition-colors ${mode === m ? (m === "plan" ? "bg-sky-500/20 text-sky-300" : "bg-violet-500/20 text-violet-300") : "text-zinc-500 hover:text-zinc-300"}`}>
                      <iconify-icon icon={m === "plan" ? "solar:clipboard-list-linear" : "solar:hammer-linear"} width="12" />
                      {m === "plan" ? "Plan" : "Build"}
                    </button>
                  ))}
                </div>
                <span className="text-[0.65rem] text-zinc-600 hidden sm:block">Tab переключает режим · Enter отправить</span>
                <span className="flex-1" />
                <button onClick={send} disabled={!input.trim() || busy} aria-label="Send"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-medium transition-all hover:scale-[1.03] active:scale-95">
                  {busy ? <Spinner /> : <iconify-icon icon="solar:plain-linear" width="13" />}
                  {busy ? "Running" : "Send"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* system prompt modal */}
      {promptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6" onClick={() => setPromptModal(false)} role="dialog" aria-modal="true">
          <div className="w-full max-w-2xl max-h-[80vh] rounded-2xl border border-zinc-800 bg-[#101014] flex flex-col fade-up" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 px-5 py-4 border-b border-zinc-800">
              <iconify-icon icon="solar:document-text-linear" width="16" class="text-violet-300" />
              <span className="font-medium tracking-tight text-zinc-100">System prompt — {mode === "plan" ? "Plan mode" : "Build mode"}</span>
              <span className="flex-1" />
              <button onClick={() => setPromptModal(false)} className="text-zinc-500 hover:text-zinc-200 transition-colors" aria-label="Close">
                <iconify-icon icon="solar:close-circle-linear" width="18" />
              </button>
            </div>
            <pre className="flex-1 overflow-y-auto p-5 text-xs mono leading-relaxed text-zinc-400 whitespace-pre-wrap">{SYSTEM_PROMPTS[mode]}</pre>
          </div>
        </div>
      )}
    </div>
  );
}