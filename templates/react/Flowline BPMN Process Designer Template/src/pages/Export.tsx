import { useMemo, useState } from "react";
import Icon from "../components/Icon";
import PageHeader from "../components/PageHeader";
import {
  PROCESS,
  copyText,
  downloadFile,
  toBpmnXml,
  toJson,
  toMermaid,
  toSvg,
} from "../lib/process";

type FormatId = "bpmn" | "json" | "mermaid" | "svg";

type Format = {
  id: FormatId;
  label: string;
  extension: string;
  mime: string;
  icon: string;
  tone: string;
  blurb: string;
  build: () => string;
};

const FORMATS: Format[] = [
  {
    id: "bpmn",
    label: "BPMN 2.0 XML",
    extension: "bpmn",
    mime: "application/xml",
    icon: "file-code",
    tone: "tone-indigo",
    blurb: "Interchange format for Camunda, Zeebe, Flowable and bpmn.io.",
    build: () => toBpmnXml(PROCESS),
  },
  {
    id: "json",
    label: "Flowline JSON",
    extension: "json",
    mime: "application/json",
    icon: "braces",
    tone: "tone-amber",
    blurb: "Native schema with node bounds — round-trips back into the designer.",
    build: () => toJson(PROCESS),
  },
  {
    id: "mermaid",
    label: "Mermaid",
    extension: "mmd",
    mime: "text/plain",
    icon: "workflow",
    tone: "tone-emerald",
    blurb: "Drop straight into a README, Notion page or GitHub comment.",
    build: () => toMermaid(PROCESS),
  },
  {
    id: "svg",
    label: "Vector SVG",
    extension: "svg",
    mime: "image/svg+xml",
    icon: "image",
    tone: "tone-cyan",
    blurb: "Standalone diagram with no external fonts or scripts.",
    build: () => toSvg(PROCESS),
  },
];

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function Export() {
  const [active, setActive] = useState<FormatId>("bpmn");
  const [toast, setToast] = useState<string | null>(null);

  const format = FORMATS.find((entry) => entry.id === active) ?? FORMATS[0];

  // Serializing is pure and cheap, but memoising keeps the <pre> stable while
  // the user toggles unrelated state.
  const content = useMemo(() => format.build(), [format]);

  const filename = `${slug(PROCESS.name)}-v${PROCESS.version}.${format.extension}`;
  const sizeKb = (new Blob([content]).size / 1024).toFixed(1);
  const lineCount = content.trimEnd().split("\n").length;

  const flash = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2400);
  };

  const handleDownload = () => {
    downloadFile(filename, content, format.mime);
    flash(`Downloaded ${filename}`);
  };

  const handleDownloadAll = () => {
    FORMATS.forEach((entry, index) => {
      // Stagger so browsers do not silently drop rapid multi-file downloads.
      window.setTimeout(() => {
        downloadFile(
          `${slug(PROCESS.name)}-v${PROCESS.version}.${entry.extension}`,
          entry.build(),
          entry.mime,
        );
      }, index * 350);
    });
    flash(`Downloading all ${FORMATS.length} formats`);
  };

  const handleCopy = async () => {
    const ok = await copyText(content);
    flash(ok ? "Copied to clipboard" : "Copy failed — select the text manually");
  };

  return (
    <div className="page scroll-thin">
      <div className="page__inner">
        <PageHeader
          eyebrow="Step 1 of 2"
          title="Export"
          subtitle={`Serialize “${PROCESS.name}” to a portable file. Every format is generated from the same model the canvas renders, so exports can never drift from the diagram.`}
          icon="download"
        />

        <section className="format-grid">
          {FORMATS.map((entry) => {
            const selected = entry.id === active;
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => setActive(entry.id)}
                aria-pressed={selected}
                className={`format-card ${entry.tone}${selected ? " is-selected" : ""}`}
              >
                <span className="format-card__icon">
                  <Icon name={entry.icon} size={20} />
                </span>
                <span className="format-card__body">
                  <span className="format-card__label">{entry.label}</span>
                  <span className="format-card__blurb">{entry.blurb}</span>
                </span>
                <span className="format-card__ext mono">.{entry.extension}</span>
              </button>
            );
          })}
        </section>

        <section className="preview">
          <header className="preview__head">
            <span className="preview__file mono">
              <Icon name="file-text" size={14} />
              {filename}
            </span>
            <span className="preview__meta mono">
              {lineCount} lines · {sizeKb} KB
            </span>
            <div className="preview__actions">
              <button type="button" className="btn btn--ghost btn--always" onClick={handleCopy}>
                <Icon name="copy" size={16} />
                Copy
              </button>
              <button type="button" className="btn btn--dark" onClick={handleDownload}>
                <Icon name="download" size={16} />
                Download
              </button>
            </div>
          </header>

          <pre className="preview__code scroll-thin mono">{content}</pre>

          <footer className="preview__foot">
            <div className="hint hint--flat">
              <Icon name="info" size={16} />
              <p>
                Downloads are produced in the browser with a <code>Blob</code> and an object
                URL — no server round-trip, so they work in the sandboxed preview and from a
                published build alike.
              </p>
            </div>
            <button type="button" className="btn btn--ghost btn--always" onClick={handleDownloadAll}>
              <Icon name="download" size={16} />
              Download all {FORMATS.length} formats
            </button>
          </footer>
        </section>

        <section className="summary">
          <h2 className="section-title">What is in this export</h2>
          <div className="stat-row">
            <div className="stat">
              <span className="stat__value mono">{PROCESS.nodes.length}</span>
              <span className="stat__label">Elements</span>
            </div>
            <div className="stat">
              <span className="stat__value mono">{PROCESS.flows.length}</span>
              <span className="stat__label">Sequence flows</span>
            </div>
            <div className="stat">
              <span className="stat__value mono">
                {PROCESS.nodes.filter((node) => node.kind === "gateway").length}
              </span>
              <span className="stat__label">Gateways</span>
            </div>
            <div className="stat">
              <span className="stat__value mono">v{PROCESS.version}</span>
              <span className="stat__label">Revision</span>
            </div>
          </div>
        </section>
      </div>

      {toast && (
        <div className="toast" role="status">
          <Icon name="circle-check" size={16} />
          {toast}
        </div>
      )}
    </div>
  );
}
