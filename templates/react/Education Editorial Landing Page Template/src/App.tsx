import React from 'react';

const overloadTasks = ['Transcription', 'Ideas', 'Sentences', 'Paragraphs', 'Audience', 'Purpose'];

const frameBlocks = [
  { label: 'Claim', tone: 'ink' },
  { label: 'Evidence', tone: 'gold' },
  { label: 'Commentary', tone: 'rose' },
  { label: 'Reasoning', tone: 'blue' },
];

function App() {
  return (
    <main className="magazine-page" aria-label="Editorial illustration about chunking writing instruction">
      <section className="poster">
        <div className="poster__masthead">
          <span>Learning Design Review</span>
          <span>Issue 04 / Cognitive Load</span>
        </div>

        <div className="poster__grid">
          <article className="copy-block">
            <p className="eyebrow">Editorial Illustration</p>
            <h1>Chunk the writing task. Free the thinking.</h1>
            <p>
              When paragraph structures become predictable, novice writers stop spending all of
              their working memory on where ideas go and start using it for meaning, reasoning,
              and audience.
            </p>
          </article>

          <section className="visual" aria-label="Visual metaphor for cognitive load and chunking">
            <div className="memory-vessel" aria-label="Overloaded working memory">
              <div className="vessel-label">limited working memory</div>
              <div className="pressure-ring pressure-ring--one" />
              <div className="pressure-ring pressure-ring--two" />
              {overloadTasks.map((task, index) => (
                <span className={`task-chip task-chip--${index + 1}`} key={task}>
                  {task}
                </span>
              ))}
              <div className="warning-meter">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="chunk-bridge" aria-label="Chunked sentence and paragraph frames">
              <div className="bridge-title">chunked frames</div>
              <div className="frames-stack">
                {frameBlocks.map((block) => (
                  <div className={`frame-card frame-card--${block.tone}`} key={block.label}>
                    <span>{block.label}</span>
                    <i />
                    <i />
                  </div>
                ))}
              </div>
            </div>

            <div className="idea-field" aria-label="Freed cognitive resources for higher order writing">
              <div className="idea-orbit idea-orbit--large" />
              <div className="idea-orbit idea-orbit--small" />
              <div className="lightbulb">
                <div className="bulb-top" />
                <div className="bulb-base" />
              </div>
              <div className="idea-note idea-note--one">elaborate</div>
              <div className="idea-note idea-note--two">reason</div>
              <div className="idea-note idea-note--three">compose</div>
            </div>
          </section>
        </div>

        <aside className="caption-strip" aria-label="Article concept summary">
          <span>Overload</span>
          <strong>Routine structure lowers cognitive demand</strong>
          <span>Meaning-making</span>
        </aside>
      </section>
    </main>
  );
}

export default App;
