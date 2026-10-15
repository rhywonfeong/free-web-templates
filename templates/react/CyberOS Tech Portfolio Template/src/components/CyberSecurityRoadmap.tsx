import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Flame,
  Zap,
  Trophy,
  ChevronDown,
  ChevronRight,
  RotateCcw,
  Shield,
  CalendarDays,
  ArrowUpRight,
  Link2,
} from "lucide-react";
import { roadmap, allTopics, totalDays } from "../data/roadmapData";

const ALL_TOPICS = allTopics;
const TOTAL_TOPICS = ALL_TOPICS.length;
const TOTAL_XP = ALL_TOPICS.reduce((sum, t) => sum + t.xp, 0);
const TOTAL_DAYS = totalDays;
const XP_PER_LEVEL = 500;

/** All topics of a given month, flattened across its weeks. */
const monthTopics = (m: (typeof roadmap)[number]) =>
  m.weeks.flatMap((w) => w.topics);

/** Count the daily study sessions in a month. */
const monthDayCount = (m: (typeof roadmap)[number]) =>
  monthTopics(m).reduce((sum, t) => sum + t.days.length, 0);

export default function CyberSecurityRoadmap() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [activeMonth, setActiveMonth] = useState<string>(roadmap[0].id);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleExpand = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const reset = () => setCompleted({});

  const { earnedXp, doneCount, level, progressPct, streak } = useMemo(() => {
    let xp = 0;
    let count = 0;
    ALL_TOPICS.forEach((t) => {
      if (completed[t.id]) {
        xp += t.xp;
        count += 1;
      }
    });
    // "streak": number of consecutive fully-completed months (dashboard logic)
    let s = 0;
    for (const m of roadmap) {
      if (monthTopics(m).every((t) => completed[t.id])) s += 1;
      else break;
    }
    return {
      earnedXp: xp,
      doneCount: count,
      level: Math.floor(xp / XP_PER_LEVEL) + 1,
      progressPct: Math.round((count / TOTAL_TOPICS) * 100),
      streak: s,
    };
  }, [completed]);

  const monthProgress = (monthId: string) => {
    const m = roadmap.find((x) => x.id === monthId)!;
    const topics = monthTopics(m);
    const done = topics.filter((t) => completed[t.id]).length;
    return Math.round((done / topics.length) * 100);
  };

  const active = roadmap.find((m) => m.id === activeMonth)!;

  return (
    <section id="roadmap" className="relative px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-[#bc13fe]/10 blur-[130px]" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00f3ff]/30 bg-[#00f3ff]/5 px-4 py-1.5 font-mono text-xs text-[#00f3ff]">
            <Shield size={14} /> 03 — CyberOS Roadmap
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            6-Month <span className="gradient-text">Cyber Security</span>{" "}
            Roadmap
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            An interactive learning dashboard with a{" "}
            <span className="text-[#00f3ff]">day-by-day study plan</span>. Each
            topic breaks down into daily missions — every day has a focus and a
            free resource link to open.
          </p>
        </motion.div>

        {/* Dashboard shell */}
        <div className="glass overflow-hidden rounded-3xl p-5 sm:p-8">
          {/* Top stats bar */}
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <StatBadge
                icon={<Zap size={16} />}
                label="XP"
                value={`${earnedXp.toLocaleString()} / ${TOTAL_XP.toLocaleString()}`}
                color="#bc13fe"
              />
              <StatBadge
                icon={<Trophy size={16} />}
                label="Level"
                value={`${level}`}
                color="#00f3ff"
              />
              <StatBadge
                icon={<Flame size={16} />}
                label="Streak"
                value={`${streak} mo`}
                color="#ff003c"
              />
              <StatBadge
                icon={<CalendarDays size={16} />}
                label="Days"
                value={`${TOTAL_DAYS}`}
                color="#fac775"
              />
              <StatBadge
                icon={<Check size={16} />}
                label="Done"
                value={`${doneCount}/${TOTAL_TOPICS}`}
                color="#00ff66"
              />
            </div>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 self-start rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-[#ff003c]/40 hover:text-[#ff003c] lg:self-auto"
            >
              <RotateCcw size={14} /> Reset Progress
            </button>
          </div>

          {/* Overall progress */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
              <span>OVERALL_COMPLETION</span>
              <span className="text-[#00f3ff]">{progressPct}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full border border-white/10 bg-black/50">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#00f3ff] to-[#bc13fe] shadow-neon"
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            {/* Sidebar: months */}
            <div className="flex flex-col gap-2">
              {roadmap.map((m) => {
                const pct = monthProgress(m.id);
                const isActive = m.id === activeMonth;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveMonth(m.id)}
                    className={`group flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                      isActive
                        ? "border-[#00f3ff]/40 bg-[#00f3ff]/10 shadow-neon"
                        : "border-white/8 bg-white/[0.03] hover:border-white/20"
                    }`}
                  >
                    <span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border"
                      style={{
                        color: m.accent,
                        borderColor: `${m.accent}44`,
                        background: `${m.accent}14`,
                      }}
                    >
                      <m.icon size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
                        <span>{m.month}</span>
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays size={10} /> {monthDayCount(m)}d
                        </span>
                      </span>
                      <span
                        className={`block truncate text-sm font-semibold ${
                          isActive ? "text-white" : "text-white/80"
                        }`}
                      >
                        {m.title}
                      </span>
                      <span className="mt-1.5 block h-1 w-full overflow-hidden rounded-full bg-black/40">
                        <span
                          className="block h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%`, background: m.accent }}
                        />
                      </span>
                    </span>
                    <ChevronDown
                      size={16}
                      className={`flex-shrink-0 text-muted transition-transform ${
                        isActive ? "-rotate-90 text-[#00f3ff]" : ""
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Main: active month topics */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 sm:p-8"
              >
                <div className="mb-6 flex items-start gap-4 border-b border-white/8 pb-6">
                  <span
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      color: active.accent,
                      borderColor: `${active.accent}44`,
                      background: `${active.accent}14`,
                    }}
                  >
                    <active.icon size={26} />
                  </span>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">
                      {active.month}
                    </span>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {active.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{active.focus}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {active.weeks.map((w, wi) => {
                    const weekDone = w.topics.filter(
                      (t) => completed[t.id]
                    ).length;
                    const weekPct = Math.round(
                      (weekDone / w.topics.length) * 100
                    );
                    const weekComplete = weekDone === w.topics.length;
                    return (
                      <div key={w.id} className="flex flex-col gap-3">
                        {/* Week header */}
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-8 min-w-[3.25rem] items-center justify-center rounded-lg border px-2 font-mono text-[11px] font-bold uppercase tracking-wider ${
                              weekComplete
                                ? "border-[#00ff66]/40 bg-[#00ff66]/10 text-[#00ff66]"
                                : "border-white/10 bg-white/[0.04]"
                            }`}
                            style={
                              weekComplete
                                ? undefined
                                : { color: active.accent }
                            }
                          >
                            {w.week.replace("Week ", "W")}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h4 className="truncate text-sm font-semibold text-white">
                              {w.title}
                            </h4>
                          </div>
                          <span className="flex-shrink-0 font-mono text-[11px] text-muted">
                            {weekDone}/{w.topics.length} · {weekPct}%
                          </span>
                        </div>

                        {/* Topics for this week */}
                        <ul className="flex flex-col gap-3 border-l border-white/8 pl-4 sm:pl-5">
                          {w.topics.map((t, i) => {
                            const done = !!completed[t.id];
                            const isOpen = !!expanded[t.id];
                            return (
                              <motion.li
                                key={t.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: wi * 0.06 + i * 0.05 }}
                                className={`overflow-hidden rounded-xl border transition-all ${
                                  done
                                    ? "border-[#00ff66]/30 bg-[#00ff66]/[0.06]"
                                    : isOpen
                                    ? "border-[#00f3ff]/30 bg-[#00f3ff]/[0.04]"
                                    : "border-white/8 bg-white/[0.03] hover:border-[#00f3ff]/30 hover:bg-[#00f3ff]/[0.04]"
                                }`}
                              >
                                <div className="group flex w-full items-center gap-3 p-4">
                                  {/* Completion toggle */}
                                  <button
                                    type="button"
                                    onClick={() => toggle(t.id)}
                                    aria-label={
                                      done
                                        ? "Mark as not done"
                                        : "Mark as done"
                                    }
                                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border transition-all ${
                                      done
                                        ? "border-[#00ff66] bg-[#00ff66] text-black"
                                        : "border-white/25 text-transparent hover:border-[#00f3ff]"
                                    }`}
                                  >
                                    <Check size={14} strokeWidth={3} />
                                  </button>

                                  {/* Title + expand toggle */}
                                  <button
                                    type="button"
                                    onClick={() => toggleExpand(t.id)}
                                    aria-expanded={isOpen}
                                    className="flex flex-1 items-center gap-2 text-left"
                                  >
                                    <span className="flex flex-1 flex-col gap-1">
                                      <span
                                        className={`text-sm font-medium transition-colors ${
                                          done
                                            ? "text-white/60 line-through"
                                            : "text-white"
                                        }`}
                                      >
                                        {t.title}
                                      </span>
                                      <span className="inline-flex w-fit items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                                        <CalendarDays size={11} />
                                        {t.days.length} day
                                        {t.days.length > 1 ? "s" : ""}
                                      </span>
                                    </span>
                                    <ChevronRight
                                      size={16}
                                      className={`flex-shrink-0 text-muted transition-transform ${
                                        isOpen
                                          ? "rotate-90 text-[#00f3ff]"
                                          : ""
                                      }`}
                                    />
                                  </button>

                                  <span
                                    className={`flex items-center gap-1 font-mono text-xs ${
                                      done ? "text-[#00ff66]" : "text-muted"
                                    }`}
                                  >
                                    <Zap size={12} /> {t.xp}
                                  </span>
                                </div>

                                {/* Details panel: description + DAILY topics & links */}
                                <AnimatePresence initial={false}>
                                  {isOpen && (
                                    <motion.div
                                      key="details"
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{
                                        duration: 0.25,
                                        ease: "easeInOut",
                                      }}
                                      className="overflow-hidden"
                                    >
                                      <div className="border-t border-white/8 px-4 py-4 sm:pl-[2.25rem]">
                                        <p className="text-sm leading-relaxed text-muted">
                                          {t.detail}
                                        </p>

                                        {/* Daily study plan timeline */}
                                        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#fac775]">
                                          <CalendarDays size={12} />
                                          Daily Study Plan
                                        </div>
                                        <ol className="relative mt-3 flex flex-col gap-2.5 border-l border-white/10 pl-4">
                                          {t.days.map((d, di) => (
                                            <motion.li
                                              key={d.day}
                                              initial={{ opacity: 0, x: -8 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: di * 0.05 }}
                                              className="relative flex flex-col gap-2 rounded-lg border border-white/8 bg-black/30 p-3 transition-colors hover:border-[#00f3ff]/25 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
                                            >
                                              {/* timeline node */}
                                              <span
                                                className="absolute -left-[1.35rem] top-3.5 h-2.5 w-2.5 rounded-full ring-2 ring-black"
                                                style={{
                                                  background: active.accent,
                                                }}
                                              />
                                              <span className="flex min-w-0 items-start gap-2.5">
                                                <span
                                                  className="mt-0.5 flex-shrink-0 rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-bold"
                                                  style={{
                                                    color: active.accent,
                                                    borderColor: `${active.accent}44`,
                                                    background: `${active.accent}12`,
                                                  }}
                                                >
                                                  {d.day.replace("Day ", "D")}
                                                </span>
                                                <span className="min-w-0 text-sm font-medium text-white/90">
                                                  {d.topic}
                                                </span>
                                              </span>
                                              <a
                                                href={d.link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link inline-flex flex-shrink-0 items-center gap-1.5 self-start rounded-md border border-[#00f3ff]/25 bg-[#00f3ff]/10 px-2.5 py-1.5 font-mono text-[11px] font-medium text-[#00f3ff] transition-colors hover:border-[#00f3ff]/60 hover:bg-[#00f3ff]/20 sm:self-center"
                                              >
                                                <Link2 size={12} />
                                                <span className="max-w-[11rem] truncate">
                                                  {d.link.label}
                                                </span>
                                                <ArrowUpRight
                                                  size={12}
                                                  className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                                />
                                              </a>
                                            </motion.li>
                                          ))}
                                        </ol>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-6 flex items-center gap-2 font-mono text-[11px] text-muted">
                  <ChevronRight size={12} className="text-[#00f3ff]" />
                  Tap a topic to open its day-by-day plan — every day links to a
                  free learning resource.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBadge({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className="flex items-center gap-2 rounded-xl border bg-black/30 px-3 py-2"
      style={{ borderColor: `${color}33` }}
    >
      <span style={{ color }}>{icon}</span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
        {label}
      </span>
      <span className="font-mono text-sm font-bold" style={{ color }}>
        {value}
      </span>
    </div>
  );
}
