import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const channels = [
  {
    title: "Public enquiries",
    copy: "Media, community groups, and supporters can use the form. We reply through published channels only.",
  },
  {
    title: "Partnerships",
    copy: "Sponsor conversations start here. Recognition appears on the site only after a partnership is published.",
  },
  {
    title: "What we do not collect",
    copy: "Do not send medical details, private travel plans, or athlete attendance. Those stay off this form.",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-intro" aria-labelledby="contact-title">
        <p className="site-eyebrow">Contact</p>
        <h1 id="contact-title">Reach the public desk.</h1>
        <p className="page-intro__lede">
          Questions about published matches, community support, or team gear start here. Private team operations
          are not handled on this page.
        </p>
      </section>

      <section className="site-section" aria-labelledby="contact-form-title">
        <div className="contact-layout">
          <form className="contact-form" onSubmit={onSubmit} aria-labelledby="contact-form-title">
            <h2 id="contact-form-title">Send a public message.</h2>
            <p>This preview does not transmit messages. Your note stays in the browser.</p>

            <label className="contact-field">
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="contact-field">
              <span>Topic</span>
              <select name="topic" defaultValue="schedule">
                <option value="schedule">Public schedule</option>
                <option value="support">Community support</option>
                <option value="shop">Team gear</option>
                <option value="media">Media</option>
              </select>
            </label>
            <label className="contact-field">
              <span>Message</span>
              <textarea name="message" rows={5} required />
            </label>

            <button className="site-button site-button--primary" type="submit">
              Send message
            </button>
            {sent ? (
              <p className="contact-form__status" role="status">
                Message noted locally. A live inbox is not connected on this public preview.
              </p>
            ) : null}
          </form>

          <div>
            <ul className="impact-grid">
              {channels.map((channel) => (
                <li key={channel.title} className="impact-card">
                  <h3>{channel.title}</h3>
                  <p>{channel.copy}</p>
                </li>
              ))}
            </ul>
            <div className="site-actions">
              <Link className="site-button" to="/donate">
                Support the team
              </Link>
              <Link className="site-button site-button--secondary" to="/about">
                About the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
