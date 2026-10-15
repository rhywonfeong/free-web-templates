export default function Whatsapp() {
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
            <h1 className="h1" style={{ marginBottom: 'var(--space-8)' }}>Opt-in WhatsApp</h1>
            <div className="body-lg" style={{ color: 'var(--slate-600)', marginBottom: 'var(--space-8)' }}>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                Esta página destina-se ao registro de prova de consentimento para comunicação via WhatsApp.
              </p>
              <p>
                A FARMACO NATURAL LTDA (CNPJ 47.996.230/0001-16) respeita as diretrizes da Meta e a Lei Geral de Proteção de Dados (LGPD). Os contatos realizados por nossos canais oficiais no WhatsApp ocorrem mediante opt-in prévio e explícito de nossos usuários e clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
