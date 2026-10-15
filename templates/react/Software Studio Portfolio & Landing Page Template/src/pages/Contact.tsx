import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useChat } from "../components/ChatDialog";
import { Mail, MessageSquare, Send } from "../components/Icons";
import { CONTACT_EMAIL } from "../data";

export default function Contact() {
  const { openChat } = useChat();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const body = `Hello MBMApps,\n\n${message}\n\n— ${name || "(name)"}\nReply to: ${
      email || "(email)"
    }`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "MBMApps project conversation",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="terminal-home terminal-page">
      <section className="terminal-shell terminal-pagehead" data-reveal="true">
        <p className="terminal-command">
          <span>~/mbmapps/contact</span> $ start
        </p>
        <h1>
          start a conversation
          <span className="terminal-cursor" aria-hidden="true"></span>
        </h1>
        <p className="terminal-lede">
          Share the outcome, the constraint, and what is already in motion. Nothing is
          sent until you choose to send it.
        </p>
        <div className="terminal-links">
          <button type="button" onClick={openChat}>
            [use guided chat]
          </button>
          <a href={`mailto:${CONTACT_EMAIL}`}>[email directly]</a>
          <Link to="/">[back home]</Link>
        </div>
      </section>

      <section
        className="terminal-section terminal-shell"
        aria-labelledby="contact-form-title"
        data-reveal="true"
      >
        <div className="terminal-section__head">
          <div>
            <h2 id="contact-form-title">
              <span>*</span> write to the studio
            </h2>
            <p>
              <span>$</span> compose --direct
            </p>
          </div>
          <p>opens in your email app</p>
        </div>
        <form className="terminal-form" onSubmit={handleSubmit}>
          <div className="terminal-form__row">
            <label htmlFor="contact-name">
              name
              <input
                id="contact-name"
                placeholder="Ada Operator"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label htmlFor="contact-email">
              reply email
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <label htmlFor="contact-message">
            what needs to work better
            <textarea
              id="contact-message"
              rows={6}
              placeholder="The outcome, the constraint, and what is already in motion..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </label>
          <div className="terminal-form__actions">
            <button type="submit">
              <Send size={14} /> [open in email app]
            </button>
            <button type="button" onClick={openChat}>
              <MessageSquare size={14} /> [prefer chat]
            </button>
          </div>
        </form>
      </section>

      <section
        className="terminal-section terminal-shell terminal-contact"
        aria-label="Direct contact details"
        data-reveal="true"
      >
        <div>
          <p className="terminal-command">
            <span>~/mbmapps/contact</span> $ cat details
          </p>
          <h2>
            <span>*</span> direct lines
          </h2>
          <p>
            The studio replies directly. Expect a considered answer, not an automated
            sequence.
          </p>
        </div>
        <div className="terminal-contact__actions">
          <a href={`mailto:${CONTACT_EMAIL}`}>
            <Mail size={15} /> [{CONTACT_EMAIL}]
          </a>
          <button type="button" onClick={openChat}>
            <MessageSquare size={15} /> [open chat]
          </button>
        </div>
      </section>
    </div>
  );
}
