import React, { useState } from 'react'

const FOMO_MESSAGES = [
  "Khách hàng T.H.M vừa đặt chỗ ưu tiên căn góc 3PN view Landmark 81.",
  "Chỉ còn 2 suất booking ưu tiên cho căn hộ sân vườn tầng 3 trong đợt này.",
  "Khách hàng N.V.L vừa giao dịch thành công căn 2PN diện tích lớn tầng 15.",
  "Sự kiện tham quan cuối tuần này đã kín 85% lịch đăng ký.",
  "Chính sách thanh toán 22% nhận nhà ngay đang nhận được sự quan tâm rất lớn.",
]

const PILL_OPTIONS = ['2 Phòng Ngủ', '3 Phòng Ngủ + Study', 'Phiên Bản Đặc Biệt', 'Đầu tư', 'Để ở']

export default function HeroSection({ onOpenModal }) {
  const [form, setForm] = useState({ ho_ten: '', so_dien_thoai: '', quan_tam: [] })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.ho_ten || form.ho_ten.trim().length < 4) e.ho_ten = 'Ít nhất 4 ký tự'
    if (!form.so_dien_thoai || form.so_dien_thoai.replace(/\D/g,'').length < 9) e.so_dien_thoai = 'Ít nhất 9 chữ số'
    return e
  }

  const togglePill = (pill) => {
    setForm(f => ({
      ...f,
      quan_tam: f.quan_tam.includes(pill) ? f.quan_tam.filter(p => p !== pill) : [...f.quan_tam, pill]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      await fetch('https://stephen-hub.com/webhook/website-form-submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'hero-form', project: 'The Berkley' })
      })
    } catch {}
    setLoading(false)
    setSuccess(true)
  }

  return (
    <section id="hero" style={{ background: '#0B2D72', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(88,160,200,0.08) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(11,45,114,0.9) 0%, #060f1e 100%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px 0', position: 'relative', zIndex: 1 }}>
        {/* Top: Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(320px, 38%, 460px) 1fr',
          gap: 24,
          alignItems: 'start',
          minHeight: 'calc(100vh - 160px)'
        }}
        className="hero-grid"
        >
          {/* LEFT PANEL */}
          <div style={{ paddingTop: 40, paddingBottom: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Developer badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(192,192,192,0.25)',
                borderRadius: 6, padding: '4px 12px',
                fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)',
                fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}>Sơn Kim Land</div>
            </div>

            {/* Headline */}
            <div>
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                fontWeight: 600, letterSpacing: '-0.02em',
                color: '#58A0C8', lineHeight: 1.1, marginBottom: 12
              }}>The Berkley</h1>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, fontStyle: 'italic'
              }}>Tuyệt tác độc bản cuối cùng tại Thảo Điền từ Sơn Kim Land</p>
            </div>

            {/* Bio pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                '💎 Giới hạn 85 căn hộ Luxury Boutique',
                '📍 Tầm nhìn vĩnh cửu sông Sài Gòn & Landmark 81',
                '🔑 Đã hoàn thiện — Nhận nhà khai thác ngay'
              ].map((pill, i) => (
                <div key={i} style={{
                  borderLeft: '3px solid #58A0C8',
                  paddingLeft: 14, paddingTop: 6, paddingBottom: 6,
                  background: 'rgba(88,160,200,0.07)',
                  borderRadius: '0 8px 8px 0',
                  fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)',
                  fontFamily: "'Inter', sans-serif", fontWeight: 400,
                  animation: `fadeInUp 0.6s ease-out ${0.2 + i * 0.1}s both`
                }}>{pill}</div>
              ))}
            </div>

            {/* Inline form */}
            <div style={{
              background: 'rgba(26,37,53,0.88)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(88,160,200,0.4)',
              borderRadius: 16, padding: '22px 20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}>
              {!success ? (
                <>
                  <div style={{ fontSize: '0.82rem', color: '#58A0C8', fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 14, letterSpacing: '0.04em' }}>THE BERKLEY — NHẬN TƯ VẤN</div>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      { name: 'ho_ten', label: 'Họ và tên', type: 'text', placeholder: 'Nguyễn Văn A' },
                      { name: 'so_dien_thoai', label: 'Số điện thoại', type: 'tel', placeholder: '0912 345 678' }
                    ].map(field => (
                      <div key={field.name}>
                        <label style={{ fontSize: '0.72rem', color: 'rgba(192,192,192,0.8)', display: 'block', marginBottom: 5, fontFamily: "'Inter', sans-serif" }}>{field.label}</label>
                        <input type={field.type} placeholder={field.placeholder} value={form[field.name]}
                          onChange={e => { setForm(f => ({...f, [field.name]: e.target.value})); setErrors(er => ({...er, [field.name]: ''})) }}
                          style={{
                            width: '100%', padding: '9px 12px', borderRadius: 8,
                            background: 'rgba(255,255,255,0.07)', border: `1px solid ${errors[field.name] ? '#ef4444' : 'rgba(192,192,192,0.25)'}`,
                            color: '#fff', fontSize: '0.875rem', fontFamily: "'Inter', sans-serif"
                          }}
                        />
                        {errors[field.name] && <div style={{ fontSize: '0.68rem', color: '#ef4444', marginTop: 3 }}>{errors[field.name]}</div>}
                      </div>
                    ))}

                    {/* Pill select */}
                    <div>
                      <label style={{ fontSize: '0.72rem', color: 'rgba(192,192,192,0.8)', display: 'block', marginBottom: 7, fontFamily: "'Inter', sans-serif" }}>Tôi quan tâm đến</label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {PILL_OPTIONS.map(opt => (
                          <button key={opt} type="button" onClick={() => togglePill(opt)}
                            style={{
                              padding: '4px 10px', borderRadius: 20, fontSize: '0.72rem',
                              border: `1px solid ${form.quan_tam.includes(opt) ? '#58A0C8' : 'rgba(192,192,192,0.3)'}`,
                              background: form.quan_tam.includes(opt) ? '#58A0C8' : 'transparent',
                              color: form.quan_tam.includes(opt) ? '#fff' : 'rgba(255,255,255,0.6)',
                              cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Inter', sans-serif"
                            }}
                          >{opt}</button>
                        ))}
                      </div>
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary"
                      style={{
                        width: '100%', padding: '12px', borderRadius: 10, border: 'none',
                        fontSize: '0.82rem', letterSpacing: '0.07em',
                        animation: 'pulse-ring 2s ease-out 1s 1'
                      }}>
                      {loading ? 'Đang gửi...' : 'NHẬN TƯ VẤN NGAY'}
                    </button>
                  </form>
                  <div style={{ marginTop: 10, fontSize: '0.68rem', color: 'rgba(88,160,200,0.7)', textAlign: 'center', fontFamily: "'Inter', sans-serif" }}>
                    🔒 Bảo mật thông tin — Phản hồi trong 15 phút
                  </div>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '12px 0' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 10 }}>✅</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#fff', fontWeight: 600, marginBottom: 6 }}>
                    Cảm ơn {form.ho_ten.trim().split(' ').pop()}!
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(192,192,192,0.8)', marginBottom: 14, fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                    Chuyên viên sẽ liên hệ trong 15 phút.
                  </p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <a href="https://zalo.me/0902345678" target="_blank" rel="noopener noreferrer" className="btn-primary"
                      style={{ flex: 1, padding: '9px', borderRadius: 8, textDecoration: 'none', textAlign: 'center', fontSize: '0.78rem' }}>
                      💬 Zalo
                    </a>
                    <a href="tel:0902345678" className="btn-outline-sky"
                      style={{ flex: 1, padding: '9px', borderRadius: 8, textDecoration: 'none', textAlign: 'center', fontSize: '0.78rem' }}>
                      📞 Gọi ngay
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Direct contact row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <a href="tel:0902345678" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: "'Inter', sans-serif', fontWeight: 500', transition: 'color 0.2s'" }}
                onMouseEnter={e => e.currentTarget.style.color = '#58A0C8'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <iconify-icon icon="solar:phone-bold" style={{ fontSize: '14px', color: '#58A0C8' }}></iconify-icon>
                090 234 5678
              </a>
              <a href="https://zalo.me/0902345678" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: "'Inter', sans-serif'", transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#58A0C8'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <iconify-icon icon="simple-icons:zalo" style={{ fontSize: '14px', color: '#0068FF' }}></iconify-icon>
                Nhắn Zalo
              </a>
            </div>
          </div>

          {/* RIGHT PANEL — Facade image */}
          <div style={{ position: 'relative', height: '90vh', minHeight: 560, borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}>
            <img
              src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_facade_thucte_metro.webp.webp"
              alt="The Berkley Facade"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* Overlay gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(11,45,114,0.4) 100%)' }} />

            {/* Bottom-left badge */}
            <div style={{
              position: 'absolute', bottom: 20, left: 20,
              background: 'rgba(11,45,114,0.88)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #58A0C8',
              borderRadius: 10, padding: '8px 16px',
              boxShadow: '0 0 20px rgba(88,160,200,0.25)',
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>Luxury Boutique</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#58A0C8', fontWeight: 600 }}>Từ 18 tỷ</div>
            </div>

            {/* Top-right developer badge */}
            <div style={{
              position: 'absolute', top: 16, right: 16,
              background: 'rgba(255,255,255,0.92)',
              borderRadius: 8, padding: '5px 12px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.2)'
            }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: '#0B2D72', fontWeight: 600 }}>Sơn Kim Land</div>
            </div>
          </div>
        </div>
      </div>

      {/* FOMO Ticker */}
      <div style={{
        background: '#060f1e',
        borderTop: '1px solid rgba(88,160,200,0.15)',
        padding: '10px 0',
        overflow: 'hidden',
        marginTop: 24,
        position: 'relative', zIndex: 1
      }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 30s linear infinite' }}>
          {[...FOMO_MESSAGES, ...FOMO_MESSAGES].map((msg, i) => (
            <span key={i} style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.78rem',
              color: '#F59E0B', paddingRight: 48
            }}>
              🔴 {msg}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}