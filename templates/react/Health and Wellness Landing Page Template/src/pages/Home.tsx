import { Link } from 'react-router-dom';
import { BookOpen, Sprout, GraduationCap, MapPin, Mail, Phone, Building } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Seção Sobre */}
      <section id="sobre" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <div className="grid grid-editorial">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <span className="caption" style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Sobre a empresa
              </span>
            </div>
            
            <div style={{ display: 'none' }} className="respiro"></div>

            <div>
              <h1 className="display" style={{ marginBottom: 'var(--space-6)', color: 'var(--slate-900)' }}>
                Farmaco Natural — Conteúdo e educação em saúde e bem-estar
              </h1>
              <p className="body-lg" style={{ marginBottom: 'var(--space-8)', color: 'var(--slate-600)', maxWidth: '800px' }}>
                Desde 2022, produzimos conteúdo educativo, livros digitais e treinamentos sobre saúde, nutrição e longevidade, com base em literatura científica.
              </p>

              <div style={{ marginBottom: 'var(--space-8)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200&h=400" 
                  alt="Bem-estar e saúde" 
                  style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
                />
              </div>
              
              <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-12)', flexWrap: 'wrap' }}>
                <a href="#marcas" className="btn btn-primary">
                  Conheça nossas marcas
                </a>
                <a href="#contato" className="btn btn-secondary">
                  Fale conosco
                </a>
              </div>

              <div className="card-muted" style={{ marginBottom: 'var(--space-12)' }}>
                <p style={{ marginBottom: 'var(--space-8)' }}>
                  A FARMACO NATURAL LTDA é uma empresa brasileira com sede em São Paulo/SP. Atuamos em três frentes:
                </p>
                <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400&h=250" 
                      alt="Conteúdo e informação" 
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} 
                    />
                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <div style={{ color: 'var(--color-accent)', flexShrink: 0 }}>
                        <BookOpen size={24} />
                      </div>
                      <div>
                        <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Conteúdo e informação</h3>
                        <p className="body-sm">Portais e materiais educativos sobre saúde e bem-estar.</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400&h=250" 
                      alt="Livros e treinamentos" 
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} 
                    />
                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <div style={{ color: 'var(--color-accent)', flexShrink: 0 }}>
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Livros e treinamentos</h3>
                        <p className="body-sm">E-books, guias e cursos para profissionais e público geral.</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=400&h=250" 
                      alt="Produtos naturais" 
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} 
                    />
                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <div style={{ color: 'var(--color-accent)', flexShrink: 0 }}>
                        <Sprout size={24} />
                      </div>
                      <div>
                        <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Produtos naturais</h3>
                        <p className="body-sm">Comércio de produtos alimentícios e naturais.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Marcas */}
      <section id="marcas" style={{ backgroundColor: 'var(--slate-25)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid grid-editorial">
            <div>
               <span className="caption" style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Nossas Marcas
              </span>
            </div>
            
            <div style={{ display: 'none' }} className="respiro"></div>

            <div>
              <h2 className="h2" style={{ marginBottom: 'var(--space-8)' }}>Marcas registradas e operadas</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200&h=600" 
                    alt="PepDose Produtos" 
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: 'var(--space-6) var(--space-8)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
                    <div style={{ 
                      width: '64px', height: '64px', 
                      borderRadius: 'var(--radius-lg)', 
                      backgroundColor: 'var(--blue-50)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--blue-600)', fontWeight: 'bold', fontSize: '24px',
                      flexShrink: 0
                    }}>
                      P
                    </div>
                    <div>
                      <h3 className="h3" style={{ marginBottom: 'var(--space-1)' }}>PepDose</h3>
                      <p className="body-sm caption">Marca integrante do portfólio Farmaco Natural focada em nutrição avançada.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato">
        <div className="container">
          <div className="grid grid-editorial">
            <div>
               <span className="caption" style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Contato Corporativo
              </span>
            </div>
            
            <div style={{ display: 'none' }} className="respiro"></div>

            <div>
              <h2 className="h2" style={{ marginBottom: 'var(--space-8)' }}>Dados cadastrais oficiais</h2>
              <p className="body-sm" style={{ marginBottom: 'var(--space-8)', maxWidth: '600px' }}>
                Para fins de verificação e transparência corporativa, apresentamos abaixo nossos dados fiscais e de contato conforme registro na Receita Federal do Brasil.
              </p>

              <div className="grid grid-2" style={{ gap: 'var(--space-8)', alignItems: 'start' }}>
                <div className="card-muted">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    
                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <Building size={20} style={{ color: 'var(--slate-400)', flexShrink: 0 }} />
                      <div>
                        <div className="caption" style={{ marginBottom: '2px' }}>Razão Social & Nome Fantasia</div>
                        <div style={{ fontWeight: 500, color: 'var(--slate-900)' }}>FARMACO NATURAL LTDA</div>
                        <div className="body-sm">FARMACO NATURAL</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <div style={{ width: 20, flexShrink: 0 }} />
                      <div>
                        <div className="caption" style={{ marginBottom: '2px' }}>CNPJ</div>
                        <div style={{ fontWeight: 500, color: 'var(--slate-900)' }}>47.996.230/0001-16</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <MapPin size={20} style={{ color: 'var(--slate-400)', flexShrink: 0 }} />
                      <div>
                        <div className="caption" style={{ marginBottom: '2px' }}>Endereço Sede</div>
                        <div style={{ color: 'var(--slate-900)' }}>
                          Rua Afonso XIII, 406 – Vila Campestre<br />
                          São Paulo/SP – CEP 04331-030
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <Mail size={20} style={{ color: 'var(--slate-400)', flexShrink: 0 }} />
                      <div>
                        <div className="caption" style={{ marginBottom: '2px' }}>E-mail de Contato</div>
                        <a href="mailto:atendimento@farmaconaturalbr.com.br" style={{ fontWeight: 500, color: 'var(--color-accent)' }}>
                          atendimento@farmaconaturalbr.com.br
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <Phone size={20} style={{ color: 'var(--slate-400)', flexShrink: 0 }} />
                      <div>
                        <div className="caption" style={{ marginBottom: '2px' }}>Telefone (Business Manager)</div>
                        <div style={{ fontWeight: 500, color: 'var(--slate-900)' }}>
                          +55 (11) 99999-9999 <span style={{ fontWeight: 400, color: 'var(--slate-500)', fontSize: '13px' }}>(em atualização)</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=450" 
                    alt="Escritório corporativo" 
                    style={{ width: '100%', height: '100%', minHeight: '320px', objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
