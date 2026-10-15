export default function TestimonialSection() {
  return (
    <section className="section section-muted">
      <div className="testimonial-wrap reveal-up">
        <div style={{ marginBottom: '2.5rem' }}>
          <iconify-icon
            icon="solar:quote-up-linear"
            width="32"
            height="32"
            style={{ color: '#d4d4d4', marginBottom: '1.5rem' }}
          />
          <h3 className="testimonial-quote">
            "Jonathan é um dos melhores profissionais com quem tive a oportunidade de trabalhar,
            principalmente por sua capacidade de superar expectativas observando detalhes que poucos
            se atentam. Seu olhar do todo agrega resultados efetivos ao negócio. Além de ser um ser
            humano íntegro e que veste a camisa do time em que atua."
          </h3>
          <div className="testimonial-person">
            <div className="avatar">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf795bec-e9bc-4ecf-9989-d83620709311_320w.jpg"
                alt="Client"
              />
            </div>
            <div className="person-meta">
              <div className="person-name">Victor Gonçalves</div>
              <div className="person-role">Chief Digital Officer @Verity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}