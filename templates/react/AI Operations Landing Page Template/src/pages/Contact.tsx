import { FormEvent, useState } from 'react'
import Reveal from '../components/Reveal'
import { ArrowUpRight, ClockIcon, RouteIcon, ShieldIcon } from '../components/Icons'

const projectTypes = ['Workflow rebuild', 'Operational AI system', 'Production rescue', 'Not sure yet']

export default function Contact() {
  const [selected, setSelected] = useState('Workflow rebuild')
  const [submitted, setSubmitted] = useState(false)

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-hero section-grid">
        <div className="contact-intro">
          <Reveal><span className="eyebrow"><i /> DEPLOYMENT INTAKE / Q3</span></Reveal>
          <h1 className="hero-title compact"><span className="mask"><span>Bring the</span></span><span className="mask"><span>blocked workflow.</span></span></h1>
          <Reveal delay={220}>
            <p className="intro-copy">In one working session, we will map the operation, pressure-test the deployment path, and tell you exactly what it takes to ship.</p>
            <div className="contact-proof">
              <span><b>300+</b> production systems</span>
              <span><b>0</b> shelfware</span>
            </div>
          </Reveal>
          <Reveal className="support-block">
            <span>WHAT TO BRING</span>
            <p>A workflow with real operational stakes, an executive owner, and a reason it needs to move now.</p>
            <a href="mailto:deploy@fulcrumlabs.ai">deploy@fulcrumlabs.ai <ArrowUpRight /></a>
          </Reveal>
        </div>

        <Reveal delay={120} className="form-panel">
          {submitted ? (
            <div className="success-state" role="status">
              <div className="success-mark"><i /></div>
              <span className="eyebrow">INTAKE / RECEIVED</span>
              <h2>Workflow logged.</h2>
              <p>A deployment lead will review the operating context and respond within two business days.</p>
              <button className="button-primary" onClick={() => setSubmitted(false)}>Submit another workflow</button>
            </div>
          ) : (
            <form onSubmit={submitForm}>
              <div className="form-heading"><div><span>DEPLOYMENT REQUEST</span><h2>Map your workflow.</h2></div><small>01—04</small></div>
              <fieldset>
                <legend>01 / WHAT ARE WE SOLVING?</legend>
                <div className="choice-grid">
                  {projectTypes.map(type => (
                    <button key={type} type="button" aria-pressed={selected === type} className={selected === type ? 'choice active' : 'choice'} onClick={() => setSelected(type)}>
                      <i />{type}
                    </button>
                  ))}
                  <input type="hidden" name="projectType" value={selected} />
                </div>
              </fieldset>
              <div className="form-row">
                <label><span>02 / WORK EMAIL</span><input required type="email" placeholder="you@company.com" /></label>
                <label><span>COMPANY</span><input required type="text" placeholder="Company name" /></label>
              </div>
              <label><span>03 / THE WORKFLOW</span><textarea required rows={5} placeholder="What is the workflow, where does it break, and what is the operational consequence?" /></label>
              <label><span>04 / WHY NOW?</span><input required type="text" placeholder="What changed or created urgency?" /></label>
              <div className="submit-area">
                <button className="button-primary" type="submit">Request a mapping session <ArrowUpRight /></button>
                <small>NO PITCH DECK. ONE WORKING SESSION.</small>
              </div>
            </form>
          )}
        </Reveal>
      </section>

      <section className="contact-process">
        <div className="section-grid process-heading">
          <div className="section-index">WHAT HAPPENS NEXT</div>
          <Reveal><h2>A precise first move.</h2></Reveal>
        </div>
        <div className="process-grid">
          <Reveal className="process-step"><span>01</span><ClockIcon /><h3>We review the context</h3><p>An operator assesses the workflow, executive mandate, and path to production. Response within two business days.</p></Reveal>
          <Reveal delay={100} className="process-step"><span>02</span><RouteIcon /><h3>We map it together</h3><p>A 60-minute working session to expose the real handoffs, constraints, and decisions that govern the operation.</p></Reveal>
          <Reveal delay={200} className="process-step"><span>03</span><ShieldIcon /><h3>You get the deployment path</h3><p>A clear view of the system, pod composition, governance requirements, and the first production milestone.</p></Reveal>
        </div>
      </section>

      <section className="contact-assurance section-grid">
        <div className="assurance-status"><i /><span>YOUR SYSTEM. YOUR DATA. YOUR CONTROL.</span></div>
        <Reveal><p>We work inside the constraints that make your operation real: security, governance, legacy systems, expert judgment, and the responsibility to keep the business running.</p></Reveal>
      </section>
    </main>
  )
}
