import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { CONTACT_EMAIL } from "../data";
import { ArrowUpRight, Send, X } from "./Icons";

type ChatContextValue = {
  openChat: () => void;
  closeChat: () => void;
};

const ChatContext = createContext<ChatContextValue>({
  openChat: () => {},
  closeChat: () => {},
});

export function useChat() {
  return useContext(ChatContext);
}

type Message = { from: "studio" | "you"; text: string };

const GREETING: Message = {
  from: "studio",
  text: "Hi. Tell me what you are trying to improve. I can point you toward an MBMApps product or prepare an email for the studio.",
};

const QUICK_PROMPTS = [
  "I need help choosing an app",
  "I need custom software",
  "I want to discuss a partnership",
];

function studioReply(input: string): string {
  const text = input.toLowerCase();
  if (/(cater|kitchen|banquet|event revenue|payment)/.test(text)) {
    return "That sounds like QuietPilot territory — it connects accepted work with payment evidence, staffing, inventory, and readiness. Try the read-only demo at quietpilot.us, or send the transcript and we will follow up.";
  }
  if (/(sport|team|league|season|schedule|practice|game)/.test(text)) {
    return "LeaguePilot keeps schedules, RSVPs, and official updates in one private, role-scoped place for families and team staff. See leaguepilot.us, or leave your email and we will reply directly.";
  }
  if (/(quote|proposal|estimate|invoice|pricing)/.test(text)) {
    return "QuoteFlow connects quote configuration, proposals, customer decisions, payment context, and event-production planning. Share a bit more about your workflow and we will map it.";
  }
  if (/(choos|which app|recommend)/.test(text)) {
    return "Quick map: catering revenue and readiness → QuietPilot. Private youth-sports coordination → LeaguePilot. Quote-to-event workflows → QuoteFlow. What kind of work are you running?";
  }
  if (/(custom|bespoke|build|new system|from scratch)/.test(text)) {
    return "We take on a small number of custom systems. Share the outcome, the constraint, and what is already in motion — then send the transcript so the studio can review it.";
  }
  if (/(partner|invest|collab|resell)/.test(text)) {
    return "Partnerships start with a direct conversation. Add your email below and send the transcript, or write to flightcontrol@quietpilot.us with the context.";
  }
  return "Noted. Add any constraints, timelines, or systems already in play. When you are ready, leave your email for a reply or open the transcript in your email app.";
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openChat = useCallback(() => setOpen(true), []);
  const closeChat = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openChat, closeChat }), [openChat, closeChat]);

  return (
    <ChatContext.Provider value={value}>
      {children}
      <ChatDialog open={open} onClose={closeChat} />
    </ChatContext.Provider>
  );
}

function buildMailto(messages: Message[]) {
  const transcript = messages
    .map((m) => `${m.from === "studio" ? "MBMApps" : "Me"}: ${m.text}`)
    .join("\n\n");
  const body = `Hello MBMApps,\n\nHere is the context from the website chat:\n\n${transcript}\n\nMy name and preferred contact details:`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "MBMApps project conversation",
  )}&body=${encodeURIComponent(body)}`;
}

function ChatDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [draft, setDraft] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [transcriptSent, setTranscriptSent] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      const onKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [open, onClose]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTranscriptSent(false);
    setMessages((prev) => [
      ...prev,
      { from: "you", text: trimmed },
      { from: "studio", text: studioReply(trimmed) },
    ]);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendMessage(draft);
    setDraft("");
  };

  const handleDelivery = (event: FormEvent) => {
    event.preventDefault();
    if (!replyEmail || !consent) return;
    setTranscriptSent(true);
    setMessages((prev) => [
      ...prev,
      {
        from: "studio",
        text: `Transcript queued for ${replyEmail}. The studio replies directly — no automated follow-ups.`,
      },
    ]);
  };

  if (!open) return null;

  return (
    <div className="terminal-chat-overlay" role="presentation" onClick={onClose}>
      <div
        className="terminal-chat"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header>
          <div>
            <span>$ contact --interactive</span>
            <h2 id="chat-title">MBMApps studio chat</h2>
          </div>
          <button type="button" aria-label="Close chat" onClick={onClose}>
            <X size={16} />
          </button>
        </header>

        <div className="terminal-chat__body" aria-live="polite" ref={bodyRef}>
          {messages.map((message, index) => (
            <p
              key={index}
              className={`terminal-chat__line terminal-chat__line--${message.from}`}
            >
              <span>{message.from === "studio" ? "mbm:" : "you:"}</span> {message.text}
            </p>
          ))}
        </div>

        <div className="terminal-chat__prompts">
          {QUICK_PROMPTS.map((prompt) => (
            <button key={prompt} type="button" onClick={() => sendMessage(prompt)}>
              {prompt}
            </button>
          ))}
        </div>

        <form className="terminal-chat__composer" onSubmit={handleSubmit}>
          <label htmlFor="chat-message">Message</label>
          <input
            id="chat-message"
            ref={inputRef}
            placeholder="Describe the workflow or product..."
            maxLength={600}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
          />
          <button type="submit" aria-label="Send message">
            <Send size={15} />
          </button>
        </form>

        <form className="terminal-chat__delivery" onSubmit={handleDelivery}>
          <label htmlFor="chat-reply-email">Your email for a reply</label>
          <div className="terminal-chat__delivery-row">
            <input
              id="chat-reply-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              value={replyEmail}
              onChange={(event) => setReplyEmail(event.target.value)}
            />
            <button type="submit" disabled={!replyEmail || !consent}>
              {transcriptSent ? "Queued ✓" : "Send transcript"}
            </button>
          </div>
          <label className="terminal-chat__consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
            />
            <span>MBMApps may use this email and transcript to reply.</span>
          </label>
        </form>

        <a className="terminal-chat__handoff" href={buildMailto(messages)}>
          Open transcript in my email app <ArrowUpRight size={13} />
        </a>
        <p className="terminal-chat__note">
          Nothing is sent until you choose direct delivery or send from your email app.
        </p>
      </div>
    </div>
  );
}
