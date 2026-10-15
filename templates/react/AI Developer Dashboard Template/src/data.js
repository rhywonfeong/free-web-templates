export const MODELS = [
  { id: "claude-sonnet-4", label: "Claude Sonnet 4", provider: "anthropic" },
  { id: "gpt-4.1", label: "GPT-4.1", provider: "openai" },
  { id: "qwen2.5-coder", label: "Qwen 2.5 Coder (local)", provider: "ollama" },
];

/* default contents of the prompt files — like opencode's mode prompts,
   stored on disk (~/.config/opencode/prompts/{build,plan}.md) and editable in Settings */
export const DEFAULT_PROMPTS = {
  build: `You are opencode, an interactive CLI agent that helps users with software engineering tasks.

# Tone and style
- Be concise, direct, and to the point. Minimize output tokens while maintaining helpfulness.
- Answer in fewer than 4 lines unless the user asks for detail.
- Avoid preamble ("Here is...", "Based on...") and postamble summaries unless requested.

# Following conventions
- Understand the file's code conventions before editing. Mimic code style, use existing libraries and utilities.
- NEVER assume a library is available. Check package.json / neighboring files first.
- Never add comments unless asked or the code is complex.

# Doing tasks
1. Use search tools to understand the codebase and the user's query.
2. Implement the solution using all tools available.
3. Verify the solution with tests if possible. NEVER assume a test framework.
4. Run lint/typecheck commands when provided.

# Skills
- Skills live in .opencode/skills/<name>/SKILL.md. Load a skill with the skill tool
  when the user's request matches its description, and follow its instructions.

# Tool usage
- Prefer the dedicated search tools (grep, glob) over bash find/grep.
- Batch independent tool calls. Never commit unless explicitly asked.`,
  plan: `You are opencode in PLAN MODE — a read-only architect.

# Plan mode constraints
- You may ONLY use read-only tools: read, grep, glob, list, webfetch.
- You MUST NOT edit, write, or execute anything that mutates state.
- Your goal is to research the codebase and produce a precise, step-by-step implementation plan.

# Output format
- Present a numbered plan with exact file paths and the changes for each.
- Call out risks, open questions, and verification steps.
- End by telling the user to switch to Build mode to apply the plan.`,
};

/* App.jsx consumes the prompts under this name — keep it in sync with DEFAULT_PROMPTS */
export const SYSTEM_PROMPTS = DEFAULT_PROMPTS;

/* agent skills — markdown files the agent can load on demand */
export const SKILLS = [
  {
    id: "commit",
    name: "commit",
    title: "Conventional Commits",
    path: ".opencode/skills/commit/SKILL.md",
    icon: "solar:code-square-linear",
    description: "Пишет git-коммиты в формате conventional commits на основе staged-диффа.",
    keywords: ["коммит", "commit", "git "],
    enabled: true,
    preview: "---\nname: commit\ndescription: Write conventional commit messages from the staged diff\n---\n\nRun `git diff --staged`, pick a type (feat / fix / refactor / chore),\nwrite an imperative subject ≤ 72 chars, body explains the *why*.",
  },
  {
    id: "review",
    name: "review",
    title: "Code Review",
    path: ".opencode/skills/review/SKILL.md",
    icon: "solar:checklist-minimalistic-linear",
    description: "Структурированное ревью: корректность, безопасность, производительность, стиль.",
    keywords: ["ревью", "review", "проверь код"],
    enabled: true,
    preview: "---\nname: review\ndescription: Structured code review for diffs and PRs\n---\n\nReview in passes: correctness → security → performance → style.\nQuote exact lines, suggest concrete fixes, no nitpicks without value.",
  },
  {
    id: "tests",
    name: "tests",
    title: "Test Writer",
    path: ".opencode/skills/tests/SKILL.md",
    icon: "solar:test-tube-linear",
    description: "Генерирует тесты под существующий test-runner проекта, без новых зависимостей.",
    keywords: ["тест", "test"],
    enabled: false,
    preview: "---\nname: tests\ndescription: Write tests using the project's existing test runner\n---\n\nDetect the runner from package.json first. Cover the happy path,\nedge cases and one failure mode per public function.",
  },
  {
    id: "docs",
    name: "docs",
    title: "Docs Writer",
    path: ".opencode/skills/docs/SKILL.md",
    icon: "solar:notebook-linear",
    description: "Пишет README и документацию, следуя тону существующих доков проекта.",
    keywords: ["док", "readme", "docs"],
    enabled: false,
    preview: "---\nname: docs\ndescription: Write README sections and docs matching project tone\n---\n\nMirror the existing docs voice. Lead with usage examples,\nkeep prose short, prefer tables for options.",
  },
];

/* gruvbox-tinted tool colors */
export const TOOL_META = {
  read:      { icon: "solar:document-text-linear",   color: "#83a598", verb: "Read" },
  grep:      { icon: "solar:magnifer-linear",        color: "#fabd2f", verb: "Grep" },
  glob:      { icon: "solar:folder-with-files-linear", color: "#fabd2f", verb: "Glob" },
  list:      { icon: "solar:folder-linear",          color: "#d3869b", verb: "List" },
  edit:      { icon: "solar:pen-2-linear",           color: "#b8bb26", verb: "Edit" },
  write:     { icon: "solar:file-check-linear",      color: "#b8bb26", verb: "Write" },
  bash:      { icon: "solar:command-linear",         color: "#fe8019", verb: "Bash" },
  webfetch:  { icon: "solar:global-linear",          color: "#83a598", verb: "Fetch" },
  todowrite: { icon: "solar:checklist-minimalistic-linear", color: "#d3869b", verb: "Todo" },
  skill:     { icon: "solar:star-shine-linear",      color: "#8ec07c", verb: "Skill" },
};

const PLAN_TEXT = `## Implementation plan

После анализа кодовой базы предлагаю следующий план:

### 1. Backend — \`src/server/agent.js\`
- Добавить event-loop агента с шагами \`thinking → tool → text\`
- Стримить события клиенту через **SSE** (\`text/event-stream\`)
- Вынести системные промпты в \`prompts/\` (режимы \`build.md\`, \`plan.md\`)

### 2. Persistence — \`src/server/db.js\`
- Схема хранения: таблицы \`sessions\`, \`messages\`, \`parts\`
- Сохранять каждую part (thinking / tool / text) отдельной строкой со статусом
- Индекс по \`session_id, created_at\` для быстрой загрузки истории

### 3. Tool registry — \`src/server/tools/\`
- \`read\`, \`grep\`, \`glob\`, \`edit\`, \`write\`, \`bash\`, \`skill\` — как в opencode
- В plan-режиме фильтровать registry до read-only набора

### Risks
- \`bash\` требует sandbox / allowlist команд
- Конкурентные записи в БД → включить \`WAL\` mode

Переключитесь в **Build mode**, чтобы я применил этот план.`;

const BUILD_TEXT = `Готово. Что было сделано:

## Changes

### \`src/server/agent.js\`
Добавлен event-loop агента со стримингом частей сообщения:

\`\`\`js
export async function* runAgent({ mode, messages, tools }) {
  const system = await loadPrompt(mode); // prompts/build.md | prompts/plan.md
  for await (const event of llm.stream({ system, messages, tools })) {
    yield event; // { type: "thinking" | "tool" | "text", ... }
    await db.saveLine(event); // persist каждую part
  }
}
\`\`\`

### \`src/server/db.js\`
Схема хранения сессий:

\`\`\`sql
CREATE TABLE sessions (id TEXT PRIMARY KEY, title TEXT, mode TEXT, created_at INTEGER);
CREATE TABLE parts (
  id TEXT PRIMARY KEY, message_id TEXT, type TEXT,
  status TEXT, payload JSON, created_at INTEGER
);
CREATE INDEX idx_parts_msg ON parts(message_id, created_at);
\`\`\`

## Verification
- \`npm test\` — **12 passed**, 0 failed
- typecheck чистый

Запуск: \`node src/server/index.js\` → агент доступен на \`http://localhost:4096\`.`;

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

export function buildRun(mode, prompt, skills = SKILLS) {
  const short = prompt.length > 42 ? prompt.slice(0, 42) + "…" : prompt;
  const lower = prompt.toLowerCase();
  const matched = skills.filter((s) => s.enabled).find((s) => s.keywords.some((k) => lower.includes(k)));

  if (mode === "plan") {
    return [
      { type: "thinking", duration: 2.8, text: `Пользователь просит: «${short}». Я в plan-режиме — только read-only инструменты. Сначала изучу структуру проекта: package.json для зависимостей, затем найду точку входа сервера и существующую работу с БД. После этого составлю пошаговый план с точными путями файлов.` },
      { type: "tool", tool: "read", title: "package.json", input: "read({ filePath: \"package.json\" })", output: "{\n  \"name\": \"local-agent\",\n  \"type\": \"module\",\n  \"dependencies\": {\n    \"better-sqlite3\": \"^11.3.0\",\n    \"hono\": \"^4.6.0\"\n  }\n}", ms: 700 },
      { type: "tool", tool: "grep", title: "\"createServer\" in src/", input: "grep({ pattern: \"createServer\", path: \"src/\" })", output: "src/server/index.js:12:  const server = createServer(app)\nsrc/server/sse.js:4:  // attach to createServer instance\n\n2 matches in 2 files", ms: 900 },
      { type: "tool", tool: "list", title: "src/server/", input: "list({ path: \"src/server\" })", output: "src/server/\n├── index.js\n├── sse.js\n├── routes/\n│   └── sessions.js\n└── db.js (empty stub)", ms: 600 },
      { type: "text", text: PLAN_TEXT },
    ];
  }
  return [
    { type: "thinking", duration: 2.1, text: `Build-режим. Задача: «${short}».${matched ? ` Запрос совпадает со скиллом «${matched.name}» — загружу его SKILL.md и буду следовать инструкциям.` : ""} Сначала перечитаю agent.js чтобы не сломать существующий стиль, затем сделаю edit, создам схему и прогоню тесты для верификации.` },
    ...(matched ? [{ type: "tool", tool: "skill", title: matched.path, input: `skill({ name: "${matched.id}" })`, output: matched.preview, ms: 550 }] : []),
    { type: "tool", tool: "read", title: "src/server/agent.js", input: "read({ filePath: \"src/server/agent.js\" })", output: "import { llm } from \"./llm.js\";\n\nexport async function runAgent() {\n  // TODO: implement event loop\n}", ms: 600 },
    { type: "tool", tool: "edit", title: "src/server/agent.js  +24 −3", input: "edit({ filePath: \"src/server/agent.js\", ... })", output: "@@ -1,5 +1,26 @@\n+export async function* runAgent({ mode, messages, tools }) {\n+  const system = await loadPrompt(mode);\n+  for await (const event of llm.stream({ system, messages, tools })) {\n+    yield event;\n+    await db.saveLine(event);\n+  }\n+}", ms: 1100 },
    { type: "tool", tool: "write", title: "src/server/schema.sql", input: "write({ filePath: \"src/server/schema.sql\" })", output: "Created file with sessions, messages, parts tables (WAL mode enabled).", ms: 800 },
    { type: "tool", tool: "bash", title: "npm test", input: "bash({ command: \"npm test\", description: \"Run test suite\" })", output: "> local-agent@0.1.0 test\n> node --test\n\n✔ agent streams thinking parts (24ms)\n✔ parts persisted to store (11ms)\n✔ plan mode blocks mutating tools (8ms)\n\ntests 12 · pass 12 · fail 0", ms: 1400 },
    { type: "text", text: BUILD_TEXT },
  ];
}

export { delay };