export default function ExclusaoDados() {
  return (
    <section style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-16)' }}>
      <div className="container">
        <div className="grid grid-editorial">
          <div>
            <span className="caption" style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Legal
            </span>
          </div>
          
          <div style={{ display: 'none' }} className="respiro"></div>

          <div>
            <h1 className="h1" style={{ marginBottom: 'var(--space-8)' }}>Exclusão de Dados</h1>
            <div className="body-lg" style={{ color: 'var(--slate-600)', marginBottom: 'var(--space-8)' }}>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                Se você deseja que a Farmaco Natural exclua os seus dados pessoais e informações associadas à sua conta ou interações com nossos serviços (incluindo aplicativos da Meta vinculados a nós), você pode solicitar a exclusão de dados.
              </p>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                <strong>Como solicitar a exclusão:</strong><br/>
                Envie um e-mail para <a href="mailto:atendimento@farmaconaturalbr.com.br" style={{ fontWeight: 500 }}>atendimento@farmaconaturalbr.com.br</a> com o assunto "Solicitação de Exclusão de Dados".
              </p>
              <p>
                No e-mail, inclua as informações necessárias para identificarmos sua conta (como o endereço de e-mail e número de telefone utilizados). Processaremos sua solicitação de acordo com os prazos e requisitos legais da LGPD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
