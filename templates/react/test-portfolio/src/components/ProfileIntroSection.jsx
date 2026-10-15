export default function ProfileIntroSection() {
  return (
    <section id="about" className="section section-bordered-top section-profile">
      <div className="container-main">
        <div className="profile-grid">
          <div className="profile-portrait-col reveal-up reveal-delay-1">
            <div className="profile-portrait">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27df3787-21a9-4fa7-b980-f3d42a608eed_800w.png"
                alt="Portrait"
              />
            </div>
          </div>

          <div className="profile-content-col reveal-up reveal-delay-2">
            <div className="profile-content">
              <div className="eyebrow-row">
                <iconify-icon icon="solar:arrow-right-down-linear" width="18" height="18" style={{ color: '#a3a3a3' }} />
                <div className="eyebrow-line" />
              </div>

              <h2 className="section-title">Product Designer</h2>
              <p className="profile-copy">
                Sou Product Designer com 9 anos de experiência e atualmente atuo como Senior Product
                Designer na Allos. Crio interfaces escaláveis com Design Systems sólidos — de tokens
                a componentes — garantindo consistência, eficiência e experiências digitais de alta
                qualidade para times de produto e tecnologia.
              </p>

              <div className="skills-grid">
                <div className="skills-col">
                  <h3>SKILLS</h3>
                  <ul>
                    <li>• UI/UX Design</li>
                    <li>• UX/AI Design</li>
                    <li>• Design Systems</li>
                  </ul>
                </div>
                <div className="skills-col">
                  <h3>INDUSTRIAS</h3>
                  <ul>
                    <li>• Seguros</li>
                    <li>• Shopping Centers</li>
                    <li>• Enterprise Solutions</li>
                  </ul>
                </div>
              </div>

              <div className="cta-row">
                <a href="#work" className="btn-dark">
                  Ver portfolio
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=5521972139499&text=Preciso+de+ajuda+com+a+plataforma+Gamble+Sports&type=phone_number&app_absent=0"
                  className="btn-light"
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar no Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}