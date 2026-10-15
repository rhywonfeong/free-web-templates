import React, { useState, useEffect } from 'react'

const INTEREST_PILLS = [
  'Báo cáo thị trường PDF',
  'Top 5 căn giá tốt tuần này',
  'Bảng tính dòng tiền & lãi suất',
  'Tư vấn gói vay ân hạn',
  'Hồ sơ pháp lý dự án',
]

export default function InquiryModal({ onClose }) {
  const [form, setForm] = useState({ ho_ten: '', so_dien_thoai: '', email: '' })
  const [selectedPills, setSelectedPills] = useState([])
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const validate = () => {
    const e = {}
    if (!form.ho_ten || form.ho_ten.trim().length < 4) e.ho_ten = 'Vui lòng nhập ít nhất 4 ký tự'
    if (!form.so_dien_thoai || form.so_dien_thoai.replace(/\D/g,'').length < 9) e.so_dien_thoai = 'Số điện thoại cần ít nhất 9 chữ số'
    return e
  }

  const togglePill = (pill) => {
    setSelectedPills(prev => prev.includes(pill) ? prev.filter(p => p !== pill) : [...prev, pill])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      await fetch('https://stephen-hub.com/webhook/website-form-submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, interests: selectedPills, source: 'inquiry-modal', project: 'The Berkley' })
      })
    } catch {}
    setLoading(false)
    setSuccess(true)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 16,
    }} onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div style={{
        background: 'rgba(11,45,114,0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(88,160,200,0.4)',
        borderRadius: 20,
        padding: 32,
        width: '100%', maxWidth: 480,
        maxHeight: '90vh', overflowY: 'auto',
        animation: 'scaleIn 0.35s ease-out',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
        position: 'relative',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(255,255,255,0.1)', border: 'none',
          color: '#fff', width: 32, height: 32, borderRadius: '50%',
          cursor: 'pointer', fontSize: '1rem', display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>×</button>

        {!success ? (
          <>
            {/* Agent Avatar */}
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'rgba(88,160,200,0.2)',
                border: '2px solid #58A0C8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 10px',
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem', color: '#58A0C8', fontWeight: 700,
              }}>TN</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#fff', fontWeight: 600 }}>Nhận Báo Giá Ngay Hôm Nay</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(192,192,192,0.8)', marginTop: 4, fontFamily: "'Inter', sans-serif" }}>Chuyên viên Thanh Nhã phản hồi trong 15 phút</div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { name: 'ho_ten', label: 'Họ và tên *', type: 'text', placeholder: 'Nguyễn Văn A' },
                { name: 'so_dien_thoai', label: 'Số điện thoại *', type: 'tel', placeholder: '0912 345 678' },
                { name: 'email', label: 'Email (không bắt buộc)', type: 'email', placeholder: 'email@example.com' },
              ].map(field => (
                <div key={field.name}>
                  <label style={{ fontSize: '0.78rem', color: 'rgba(192,192,192,0.9)', display: 'block', marginBottom: 6, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} value={form[field.name]}
                    onChange={e => { setForm(f => ({...f, [field.name]: e.target.value})); setErrors(er => ({...er, [field.name]: ''})) }}
                    style={{
                      width: '100%', padding: '10px 14px', borderRadius: 8,
                      background: 'rgba(255,255,255,0.08)', border: `1px solid ${errors[field.name] ? '#ef4444' : 'rgba(192,192,192,0.3)'}`,
                      color: '#fff', fontSize: '0.9rem', fontFamily: "'Inter', sans-serif"
                    }}
                  />
                  {errors[field.name] && <div style={{ fontSize: '0.72rem', color: '#ef4444', marginTop: 4 }}>{errors[field.name]}</div>}
                </div>
              ))}

              {/* Interest pills */}
              <div>
                <label style={{ fontSize: '0.78rem', color: 'rgba(192,192,192,0.9)', display: 'block', marginBottom: 8, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Tôi muốn nhận:</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {INTEREST_PILLS.map(pill => (
                    <button key={pill} type="button" onClick={() => togglePill(pill)}
                      className={`pill-tag ${selectedPills.includes(pill) ? 'active' : ''}`}
                      style={{ fontSize: '0.72rem' }}
                    >{pill}</button>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'center', fontSize: '0.72rem', color: 'rgba(88,160,200,0.9)', padding: '4px 0' }}>
                ✓ 50+ khách nhận báo giá tuần này &nbsp;🔒 Bảo mật 100%
              </div>

              <button type="submit" className="btn-primary" disabled={loading} style={{
                width: '100%', padding: '14px', borderRadius: 10, border: 'none',
                fontSize: '0.9rem', letterSpacing: '0.06em'
              }}>
                {loading ? 'Đang gửi...' : 'NHẬN BÁO GIÁ NGAY'}
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: '#fff', fontWeight: 600, marginBottom: 8 }}>
              Cảm ơn {form.ho_ten.split(' ').pop()}!
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(192,192,192,0.9)', fontFamily: "'Inter', sans-serif", marginBottom: 24, lineHeight: 1.6 }}>
              Chuyên viên Thanh Nhã sẽ liên hệ trong vòng 15 phút.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="https://zalo.me/0902345678" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '12px', borderRadius: 10, textDecoration: 'none', display: 'block', textAlign: 'center', fontSize: '0.9rem' }}>
                💬 Nhắn Zalo ngay
              </a>
              <a href="tel:0902345678" className="btn-outline-sky" style={{ padding: '12px', borderRadius: 10, textDecoration: 'none', display: 'block', textAlign: 'center', fontSize: '0.9rem' }}>
                📞 Gọi HOTLINE
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}