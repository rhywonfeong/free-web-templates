import { Link } from "react-router-dom";
import { useChat } from "../components/ChatDialog";
import { GITHUB_URL } from "../data";

const principles = [
  {
    cmd: "no guesswork",
    detail:
      "Every surface distinguishes what is known from what is assumed. Accepted is not paid. Planned is not ready.",
  },
  {
    cmd: "role-aware by default",
    detail:
      "Private information stays scoped to the people who need it — families, staff, operators — never a public feed.",
  },
  {
    cmd: "proof over promises",
    detail:
      "Software only makes claims it can back with evidence: verified payments, confirmed sends, completed checklists.",
  },
  {
    cmd: "human decisions stay human",
    detail:
      "Systems surface what is blocked and what needs review. The decision itself belongs to a person, with full context.",
  },
];

export default function About() {
  const { openChat } = useChat();

  return (
    <div className="terminal-home terminal-page">
      <section className="terminal-shell terminal-pagehead" data-reveal="true">
        <p className="terminal-command">
          <span>~/mbmapps/about</span> $ whoami --long
        </p>
        <h1>
          about the studio
          <span className="terminal-cursor" aria-hidden="true"></span>
        </h1>
        <p className="terminal-subline">
          independent software studio · chicago · founded on operational truth
        </p>
        <p className="terminal-lede">
          MBMApps LLC is a one-studio operation building focused software for work that
          cannot run on guesswork: catering revenue, youth-sports seasons, and
          quote-to-event pipelines. Each product started as a real operational problem,
          not a market thesis.
        </p>
        <div className="terminal-links">
          <Link to="/apps">[browse apps]</Link>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            [github]
          </a>
          <button type="button" onClick={openChat}>
            [chat]
          </button>
        </div>
      </section>

      <section
        className="terminal-section terminal-shell"
        aria-labelledby="principles-title"
        data-reveal="true"
      >
        <div className="terminal-section__head">
          <div>
            <h2 id="principles-title">
              <span>*</span> principles
            </h2>
            <p>
              <span>$</span> cat --values
            </p>
          </div>
          <p>4 non-negotiables</p>
        </div>
        <ol className="terminal-approach">
          {principles.map((principle, index) => (
            <li key={principle.cmd}>
              <span className="terminal-approach__index">0{index + 1}</span>
              <div>
                <p className="terminal-approach__cmd">$ {principle.cmd}</p>
                <p>{principle.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="terminal-section terminal-shell"
        aria-labelledby="facts-title"
        data-reveal="true"
      >
        <h2 id="facts-title">
          <span>*</span> studio facts
        </h2>
        <div className="terminal-system-grid">
          <article>
            <p className="terminal-fact__label">base of operations</p>
            <p>Chicago, USA. Working with operators across the US.</p>
          </article>
          <article>
            <p className="terminal-fact__label">portfolio</p>
            <p>3 products live: QuietPilot, LeaguePilot, and QuoteFlow.</p>
          </article>
          <article>
            <p className="terminal-fact__label">engagement model</p>
            <p>Direct studio contact. No account managers, no ticket queues.</p>
          </article>
          <article>
            <p className="terminal-fact__label">stack</p>
            <p>React, TypeScript, Firebase, PostgreSQL, Stripe, Vercel.</p>
          </article>
        </div>
      </section>

      <section
        className="terminal-section terminal-shell terminal-contact"
        aria-label="Start a conversation"
        data-reveal="true"
      >
        <div>
          <p className="terminal-command">
            <span>~/mbmapps/about</span> $ next
          </p>
          <h2>
            <span>*</span> working on something that needs proof?
          </h2>
          <p>
            Tell the studio what needs to work better. You will get a direct reply, not a
            funnel.
          </p>
        </div>
        <div className="terminal-contact__actions">
          <button type="button" onClick={openChat}>
            [open chat]
          </button>
          <Link to="/contact">[contact page]</Link>
        </div>
      </section>
    </div>
  );
}
