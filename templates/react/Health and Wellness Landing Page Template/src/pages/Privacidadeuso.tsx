export default function Privacidade() {
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
            <h1 className="h1" style={{ marginBottom: 'var(--space-8)' }}>Política de Privacidade</h1>
            <div className="body-lg" style={{ color: 'var(--slate-600)', marginBottom: 'var(--space-8)' }}>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                A sua privacidade é importante para a Farmaco Natural. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações.
              </p>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                A FARMACO NATURAL LTDA (CNPJ 47.996.230/0001-16), com sede na Rua Afonso XIII, 406 – Vila Campestre – São Paulo/SP – CEP 04331-030, é a controladora dos dados pessoais coletados por nossos serviços.
              </p>
              <p>
                Para dúvidas relacionadas à privacidade ou ao tratamento de dados, entre em contato através do e-mail atendimento@farmaconaturalbr.com.br.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
