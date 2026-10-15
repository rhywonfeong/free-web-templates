const PDF_FILE_NAME = "Bulletin_Adhesion.pdf";

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

/*
 * Construit un vrai document PDF (une page A4) en mémoire, avec des
 * offsets xref calculés dynamiquement. Le contenu reste en ASCII pour
 * garantir des offsets d'octets exacts dans le Blob généré.
 */
function buildAdhesionPdf() {
  const lines = [
    ["F2", 22, 0, "VIBRA'SON"],
    ["F1", 11, -20, "Association culturelle et artistique"],
    ["F2", 15, -46, "BULLETIN D'ADHESION - SAISON 2026 / 2027"],
    ["F1", 10, -26, "Document officiel a completer et a retourner a contact@vibrason.fr"],
    ["F1", 10, -14, "ou a remettre en main propre lors de votre premier atelier."],
    ["F2", 12, -40, "1. Informations personnelles"],
    ["F1", 11, -26, "Nom : ..............................................................................."],
    ["F1", 11, -24, "Prenom : ..........................................................................."],
    ["F1", 11, -24, "Date de naissance : ......... / ......... / ...................."],
    ["F1", 11, -24, "Adresse : .........................................................................."],
    ["F1", 11, -24, "Code postal / Ville : ......................................................."],
    ["F1", 11, -24, "Telephone : ......................................................................"],
    ["F1", 11, -24, "Email : ............................................................................."],
    ["F2", 12, -40, "2. Formule choisie"],
    ["F1", 11, -26, "[  ] Atelier decouverte        [  ] Formule trimestre        [  ] Formule annee"],
    ["F1", 11, -24, "[  ] Tarif reduit (etudiant, demandeur d'emploi) - justificatif a joindre"],
    ["F2", 12, -40, "3. Reglement"],
    ["F1", 11, -26, "[  ] Especes        [  ] Cheque (ordre : VIBRA'SON)        [  ] Virement"],
    ["F2", 12, -40, "4. Signature"],
    ["F1", 11, -26, "Je declare adherer a l'association VIBRA'SON et accepter son reglement interieur."],
    ["F1", 11, -28, "Fait a : ....................................    Le : ......... / ......... / ...................."],
    ["F1", 11, -28, "Signature :"],
    ["F1", 9, -70, "VIBRA'SON - Association loi 1901 - contact@vibrason.fr"],
  ];

  let stream = "BT\n56 780 Td\n";
  lines.forEach(([font, size, dy, text]) => {
    stream += `/${font} ${size} Tf\n`;
    if (dy !== 0) stream += `0 ${dy} Td\n`;
    stream += `(${escapePdfText(text)}) Tj\n`;
  });
  stream += "ET";

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>\nendobj\n",
    `4 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}\nendstream\nendobj\n`,
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
    "6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n",
  ];

  const header = "%PDF-1.4\n";
  let offset = header.length;
  const offsets = objects.map((object) => {
    const current = offset;
    offset += object.length;
    return current;
  });

  const xref =
    "xref\n0 7\n0000000000 65535 f \n" +
    offsets.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("");
  const trailer = `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${offset}\n%%EOF`;

  return header + objects.join("") + xref + trailer;
}

function createPdfObjectUrl() {
  const blob = new Blob([buildAdhesionPdf()], { type: "application/pdf" });
  return URL.createObjectURL(blob);
}

export default function DownloadSection() {
  const handleDownload = () => {
    const url = createPdfObjectUrl();
    const link = document.createElement("a");
    link.href = url;
    link.download = PDF_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  const handlePreview = () => {
    const url = createPdfObjectUrl();
    window.open(url, "_blank", "noopener");
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  };

  const checklist = [
    "Formulaire officiel d'adhésion 2026 / 2027",
    "À remplir tranquillement chez vous",
    "Compatible impression et lecture mobile",
    "Retour par email ou lors d'un atelier",
  ];

  return (
    <section className="section_download" id="telechargement">
      <div className="padding-global">
        <div className="container-large">
          <div className="download_panel">
            <div className="download_content">
              <div className="download_badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                Document officiel
              </div>
              <h2 className="download_title">
                Téléchargez votre bulletin d'adhésion
              </h2>
              <p className="download_text">
                Remplissez le bulletin puis renvoyez-le à{" "}
                <strong>contact@vibrason.fr</strong> ou remettez-le en main
                propre lors de votre premier atelier. Toute l'équipe VIBRA'SON
                vous accueillera avec plaisir.
              </p>
              <ul className="download_list">
                {checklist.map((item) => (
                  <li key={item} className="download_list-item">
                    <span className="download_check" aria-hidden="true">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6.2 4.8 9 10 3.4"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="download_actions">
                <button type="button" className="download_cta" onClick={handleDownload}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19h16"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Télécharger le PDF
                </button>
                <button
                  type="button"
                  className="download_cta-secondary"
                  onClick={handlePreview}
                >
                  Voir le document
                </button>
              </div>
            </div>
            <div className="download_preview">
              <div className="download_file-card">
                <div className="download_file-icon" aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M14 2v6h6" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
                    <path
                      d="M8.5 13.5h7M8.5 17h4.5"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="download_file-name">{PDF_FILE_NAME}</div>
                <p className="download_file-hint">
                  Bulletin d'adhésion prêt à imprimer
                </p>
                <div className="download_file-meta">
                  <span className="download_file-tag">PDF</span>
                  <span className="download_file-tag">1 page</span>
                  <span className="download_file-tag">Format A4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
