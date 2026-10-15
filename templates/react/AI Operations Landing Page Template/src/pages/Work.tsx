import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../components/Reveal'
import { ArrowUpRight } from '../components/Icons'

gsap.registerPlugin(ScrollTrigger)

const gates = [
  { number: '01', title: 'See the whole system', copy: 'The Analyst maps the workflow as it actually runs: handoffs, exceptions, controls, and the decisions hidden between systems.', role: 'FORWARD DEPLOYED ANALYST' },
  { number: '02', title: 'Design the operating layer', copy: 'The Designer turns operational complexity into a clear interface, preserving expert judgment while removing avoidable work.', role: 'FORWARD DEPLOYED DESIGNER' },
  { number: '03', title: 'Ship it into production', copy: 'The Developer builds inside your environment, integrating with the stack you have and the governance you require.', role: 'FORWARD DEPLOYED DEVELOPER' },
]

const runwayGates = [
  {
    number: '01',
    title: 'SELECT',
    lead: 'Orchestrator + Analyst',
    provide: 'a workflow causing measurable friction, its business owner, the people closest to it',
    does: 'assess importance, repeatability, feasibility, access, and likely value',
    ships: 'Workflow Candidate Brief',
    decision: '"Is this the right first workflow?"',
  },
  {
    number: '02',
    title: 'FRAME',
    lead: 'Orchestrator',
    provide: 'a sponsor with decision authority, system owners, security constraints',
    does: 'set scope, decision rights, escalation, access sequence, cadence',
    ships: 'Pod Charter & Authority Map',
    decision: '"Can the Pod enter the work safely?"',
  },
  {
    number: '03',
    title: 'OBSERVE',
    lead: 'Analyst',
    provide: 'access to real operators and representative cases',
    does: 'shadow the process, map tasks and exceptions, find the judgment points, set the baseline',
    ships: 'Current-State Process & Constraint Map',
    decision: '"Are we solving the real problem?"',
  },
  {
    number: '04',
    title: 'DESIGN',
    lead: 'Designer',
    provide: 'operator feedback, policy interpretation, acceptance criteria',
    does: "draft the future process, prototype the operating experience, validate with the people who'll run it",
    ships: 'Future-State Process & Working Prototype',
    decision: '"Is this how the new work should run?"',
  },
  {
    number: '05',
    title: 'BUILD',
    lead: 'Developer',
    provide: 'approved system access, testers, production approvals',
    does: 'build the system, connect tools, implement agents and permissions, stand up evals, release in controlled steps',
    ships: 'Governed Production Release',
    decision: '"Has the system earned production authority?"',
  },
  {
    number: '06',
    title: 'PROVE & TRANSFER',
    lead: 'Entire Pod',
    provide: 'operating participation, value-measure sign-off, a receiving owner',
    does: 'measure against the baseline, fix what surfaces, document ownership, transfer access and knowledge',
    ships: 'Evidence Record & Handoff Package',
    decision: '"Sustain, scale, or retire?"',
  },
]

const fractures = [
  'The work was never understood. The documented process says one thing. The real one runs on workarounds, side spreadsheets, and judgment nobody wrote down — so the pilot automates a job that doesn\'t exist.',
  'The new work was never designed. AI gets bolted onto the old process. Nobody decides what stays human, what becomes agentic, or how an exception finds its way back to a person.',
  'The prototype can\'t cross the production boundary. Security, integration, and approval requirements stop it at the door. It impresses in the demo and never touches real data.',
  'Nobody owns the change. Decisions stall, access waits, and when the vendor leaves, no one inside can run what was built.',
]

function WhyAiStalls() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      section.classList.add('is-reduced')
      return () => section.classList.remove('is-reduced')
    }

    const context = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.fracture-copy', section)
      const points = gsap.utils.toArray<HTMLElement>('.fracture-point', section)
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=420%',
          pin: '.ai-stalls__stage',
          scrub: 0.7,
          anticipatePin: 1,
        },
      })

      gsap.set(panels.slice(1), { autoAlpha: 0, y: 34, clipPath: 'inset(0 0 100% 0)' })
      gsap.set(points.slice(1), { scale: 0.72, opacity: 0.42 })

      panels.forEach((panel, index) => {
        if (index > 0) {
          timeline
            .to(panels[index - 1], { autoAlpha: 0, y: -28, duration: 0.35 }, `step-${index}`)
            .to(points[index - 1], { scale: 0.72, opacity: 0.42, duration: 0.35 }, `step-${index}`)
            .to(panel, { autoAlpha: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.55 }, `step-${index}+=0.08`)
            .to(points[index], { scale: 1, opacity: 1, duration: 0.45 }, `step-${index}+=0.08`)
        }
        timeline.to({}, { duration: 0.65 })
      })

      timeline
        .to(panels[3], { autoAlpha: 0, y: -24, duration: 0.35 })
        .to('.fracture-point', { scale: 1, opacity: 1, duration: 0.35 }, '<')
        .to('.workflow-line__reconnect', { scaleX: 1, duration: 0.7, ease: 'power2.inOut' })
        .to('.ai-stalls__bridge', { autoAlpha: 1, y: 0, duration: 0.55 }, '<0.15')
        .to({}, { duration: 0.4 })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section className="ai-stalls" ref={sectionRef} data-no-reveal>
      <div className="ai-stalls__stage">
        <div className="ai-stalls__grid">
          <div className="ai-stalls__intro">
            <div className="section-index">01 / WHY AI STALLS</div>
            <h2>AI rarely fails at the model. <span>It fails around the model.</span></h2>
            <p>Most enterprise AI doesn't die in the demo. It dies between the demo and the way your people actually work.</p>
          </div>

          <div className="fracture-readout" aria-live="polite">
            {fractures.map((copy, index) => (
              <article className={`fracture-copy fracture-copy--${index + 1}`} key={copy}>
                <span>{String(index + 1).padStart(2, '0')} / FAILURE POINT</span>
                <p>{copy}</p>
              </article>
            ))}
          </div>

          <div className="workflow-line" aria-label="Four workflow failure points">
            <i className="workflow-line__base" />
            <i className="workflow-line__reconnect" />
            {[1, 2, 3, 4].map((number) => (
              <div className={`fracture-point fracture-point--${number}`} key={number}>
                <i /><b>{String(number).padStart(2, '0')}</b>
              </div>
            ))}
          </div>

          <div className="ai-stalls__bridge">A Forward Deployed Pod is built to close all four.</div>
        </div>
      </div>
    </section>
  )
}

function EngagementRunway() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const context = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>('.runway-gate', section)
      const nodes = gsap.utils.toArray<HTMLElement>('.gate-rail__node', section)
      const links = gsap.utils.toArray<HTMLElement>('.gate-rail__link', section)

      rows.forEach((row, index) => {
        ScrollTrigger.create({
          trigger: row,
          start: 'top 68%',
          end: 'bottom 32%',
          onEnter: () => {
            nodes[index]?.classList.add('is-reached')
            if (index > 0) links[index - 1]?.classList.add('is-reached')
          },
          onLeaveBack: () => {
            nodes[index]?.classList.remove('is-reached')
            if (index > 0) links[index - 1]?.classList.remove('is-reached')
          },
        })
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section className="runway-section" ref={sectionRef}>
      <div className="section-grid runway-heading">
        <div className="section-index">03 / HOW IT WORKS</div>
        <Reveal><h2>A system that survives<br />the room we leave.</h2></Reveal>
      </div>

      <div className="gate-rail" aria-label="Select, Frame, Observe, Design, Build, Prove and Transfer">
        {runwayGates.map((gate, index) => (
          <div className="gate-rail__stage" key={gate.number}>
            <span className="gate-rail__node"><i />{gate.title}</span>
            {index < runwayGates.length - 1 && <i className="gate-rail__link" />}
          </div>
        ))}
      </div>

      <div className="runway-gates">
        {runwayGates.map((gate) => (
          <article className="runway-gate" key={gate.number}>
            <header className="runway-gate__head">
              <span className="runway-gate__number">{gate.number}</span>
              <h3>{gate.title}</h3>
              <span className="runway-role">LEAD / {gate.lead}</span>
            </header>
            <div className="runway-field">
              <span>YOU PROVIDE</span>
              <p>{gate.provide}</p>
            </div>
            <div className="runway-field">
              <span>FULCRUM DOES</span>
              <p>{gate.does}</p>
            </div>
            <div className="runway-field runway-field--ships">
              <span>WHAT SHIPS</span>
              <p>{gate.ships}</p>
            </div>
            <div className="runway-field runway-field--decision">
              <span>THE DECISION</span>
              <p>{gate.decision}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="capability-package">
        <div className="artifact-stack" aria-label="Six engagement artifacts">
          {runwayGates.map((gate, index) => (
            <div className="artifact-sheet" key={gate.ships}>
              <span>{gate.number} / WHAT SHIPS</span><b>{gate.ships}</b><i>0{index + 1}</i>
            </div>
          ))}
        </div>
        <div className="package-lock"><i /><span>CUSTOMER-OWNED CAPABILITY</span><i /></div>
        <p className="runway-thesis">AI made knowledge cheap. Experience — earned in production, inside your operation — is the layer that compounds. Every gate is designed so that when we leave, the experience stays: in the system, in the documentation, in the people who now run it.</p>
      </div>
    </section>
  )
}

export default function Work() {
  return (
    <main className="features-page">
      <div className="page-spine" aria-hidden="true"><i className="page-spine__live" /></div>
      <section className="hero section-grid">
        <div className="hero-copy">
          <Reveal><span className="eyebrow"><i /> FORWARD DEPLOYED PODS</span></Reveal>
          <h1 className="hero-title" aria-label="Your workflow. Rebuilt to run.">
            <span className="mask"><span>Your workflow.</span></span>
            <span className="mask"><span>Rebuilt <em>to run.</em></span></span>
          </h1>
          <Reveal delay={260} className="hero-bottom">
            <p>One embedded pod turns a mission critical workflow into a governed production system your team owns and operates.</p>
            <Link to="/contact" className="button-primary">Bring us one workflow <ArrowUpRight /></Link>
          </Reveal>
        </div>

        <div className="machine" aria-label="Workflow progressing through a Fulcrum deployment pod">
          <div className="machine-top"><span>SYSTEM / 001</span><span className="live"><i /> POD ONLINE</span></div>
          <div className="machine-stage">
            <div className="machine-rings"><i /><i /><i /></div>
            <div className="machine-axis" />
            <div className="input-line"><span>BLOCKED WORKFLOW</span></div>
            <div className="output-line"><span>PRODUCTION</span></div>
            <div className="core"><span>F</span><small>ORCHESTRATOR</small></div>
            <span className="coordinate c1">A.09</span>
            <span className="coordinate c2">DEP. 14</span>
          </div>
          <div className="machine-ledger"><span>INPUT <b>FRAGMENTED</b></span><span>STATE <b className="cyan">RESOLVING</b></span><span>OWNER <b>YOUR TEAM</b></span></div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO TRACE</span><i /></div>
      </section>

      <section className="proof-strip" id="proof">
        <Reveal className="proof-item"><strong>237+</strong><span>PRODUCTION SYSTEMS</span></Reveal>
        <Reveal delay={100} className="proof-item"><strong>0</strong><span>SHELFWARE</span></Reveal>
        <Reveal delay={200} className="proof-statement"><p>Built with operators.<br />Owned by operators.</p></Reveal>
      </section>

      <WhyAiStalls />

      <section className="statement-section section-grid">
        <div className="section-index">02 / THE MODEL</div>
        <Reveal className="statement-copy">
          <h2>Not handed off.<br /><span>Embedded.</span></h2>
          <p>Strategy without the distance. Software without the translation layer. The people making the decisions are the people building the system.</p>
        </Reveal>
      </section>

      <section className="pod-section section-grid">
        <div className="sticky-visual">
          <div className="pod-console">
            <div className="console-head"><span>FULCRUM / POD COMPOSITION</span><span>04 OPERATORS</span></div>
            <div className="role-map">
              <div className="orchestrator-node"><span>ORCHESTRATOR</span><small>CLEARS THE PATH</small></div>
              <div className="role-nodes">
                <span>ANALYST</span><span>DESIGNER</span><span>DEVELOPER</span>
              </div>
              <div className="system-output"><i /> GOVERNED SYSTEM</div>
            </div>
            <div className="console-foot"><span>WORKFLOW / ACTIVE</span><span>OWNERSHIP / CLIENT</span></div>
          </div>
        </div>
        <div className="gate-list">
          <span className="eyebrow">THE DEPLOYMENT SEQUENCE</span>
          {gates.map((gate, index) => (
            <Reveal key={gate.number} delay={index * 80} className="gate">
              <div className="gate-number">{gate.number}</div>
              <div>
                <span className="role-chip">{gate.role}</span>
                <h3>{gate.title}</h3>
                <p>{gate.copy}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="orchestrator-note">
            <span>∞</span>
            <p><strong>The Orchestrator clears the path.</strong> Dependencies, access, decisions, and executive air cover are resolved before they slow the pod.</p>
          </Reveal>
        </div>
      </section>

      <EngagementRunway />

      <section className="closing-section section-grid">
        <div className="section-index">04 / FIRST MOVE</div>
        <Reveal className="closing-copy">
          <span className="eyebrow"><i /> DEPLOYMENT INTAKE OPEN</span>
          <h2>Bring us one<br />workflow.</h2>
          <p>Leave with a deployment map.</p>
          <Link to="/contact" className="button-primary">Start the mapping session <ArrowUpRight /></Link>
        </Reveal>
        <div className="closing-rail"><i /><span>WORKFLOW / READY</span></div>
      </section>
    </main>
  )
}
