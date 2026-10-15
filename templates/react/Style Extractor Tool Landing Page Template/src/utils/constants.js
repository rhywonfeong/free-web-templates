export const PROVIDERS = {
    anthropic: { url: 'https://api.anthropic.com', hint: 'claude-3-5-sonnet-20241022' },
    openai: { url: 'https://api.openai.com', hint: 'gpt-4o' },
    groq: { url: 'https://api.groq.com/openai', hint: 'llama3-70b-8192' },
    openrouter: { url: 'https://openrouter.ai/api', hint: 'anthropic/claude-3.5-sonnet' },
    custom: { url: '', hint: 'Enter model ID' }
};

export const SYSTEM_PROMPT = `You are a design systems expert. Analyze a website's visual design and extract its complete design system.

Extract:
1. Colors — primary, secondary, accent, background, text, border colors with hex and semantic roles
2. Typography — font families (with fallbacks), sizes, weights, line heights
3. Spacing — base unit and common spacing values with context
4. Border Radius — values for cards, buttons, inputs, pills
5. Shadows — elevation system if present
6. Design Personality — 1-2 sentences on the aesthetic

Return ONLY valid JSON, no markdown fences, no explanation:
{"site":"name","personality":"desc","colors":[{"name":"token","hex":"#HEX","role":"role"}],"typography":[{"role":"heading|body|label|mono","family":"name","substitute":"fallback","sizes":["16px"],"weights":[400],"lineHeight":"1.5"}],"spacing":[{"name":"sm","value":"8px","usage":"context"}],"borderRadius":[{"name":"md","value":"6px","usage":"buttons"}],"shadows":[{"name":"md","value":"0 1px 3px rgba(0,0,0,0.1)","usage":"cards"}]}`;