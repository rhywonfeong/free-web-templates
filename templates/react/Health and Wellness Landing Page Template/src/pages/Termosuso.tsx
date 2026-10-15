export default function Termos() {
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
            <h1 className="h1" style={{ marginBottom: 'var(--space-8)' }}>Termos de Uso</h1>
            <div className="body-lg" style={{ color: 'var(--slate-600)', marginBottom: 'var(--space-8)' }}>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                Bem-vindo à Farmaco Natural. Ao acessar nosso site, portais e materiais educativos, você concorda em cumprir e estar vinculado a estes Termos de Uso.
              </p>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                Nossos serviços, incluindo a marca PepDose, são operados pela FARMACO NATURAL LTDA (CNPJ 47.996.230/0001-16).
              </p>
              <p>
                Todo o conteúdo e informações educacionais fornecidas possuem base em literatura científica, mas não substituem o aconselhamento, diagnóstico ou tratamento médico profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
