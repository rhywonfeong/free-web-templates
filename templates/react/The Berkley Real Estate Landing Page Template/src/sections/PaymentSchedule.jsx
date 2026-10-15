import React, { useEffect, useRef, useState } from 'react'
import { useInView } from '../components/useInView'

const STAGES = [
  { num: 1, label: 'Đặt Cọc & Thanh Toán Ban Đầu', percent: '22%', est: '~4 - 9 tỷ', condition: 'Nhận nhà ngay lập tức', cum: 22, highlight: true },
  { num: 2, label: 'Trả Góp Linh Hoạt', percent: '28%', est: '~5 - 9 tỷ', condition: 'Trong 18 tháng, không lãi suất', cum: 50, highlight: false },
  { num: 3, label: 'Ký HĐMB & Hoàn Tất', percent: '50%', est: '~9 - 16 tỷ', condition: 'Q4/2027 theo chính sách CĐT', cum: 100, highlight: false },
]

export default function PaymentSchedule({ onOpenModal }) {
  const [ref, inView] = useInView()
  const [barWidth, setBarWidth] = useState(0)

  useEffect(() => {
    if (inView) {
      setTimeout(() => setBarWidth(100), 300)
    }
  }, [inView])

  return (
    <section id="payment-schedule" style={{ background: '#0B2D72', padding: '80px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: '0.72rem', color: '#58A0C8', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 12 }}>THANH TOÁN</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 8 }}>
            Lộ Trình Thanh Toán
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(192,192,192,0.7)', fontFamily: "'Inter', sans-serif", fontStyle: 'italic', marginBottom: 16 }}>Chỉ 22% nhận nhà — Trả góp siêu linh hoạt đến 18 tháng</p>
          <p style={{ maxWidth: 600, margin: '0 auto', fontSize: '0.9rem', color: 'rgba(192,192,192,0.7)', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            Chính sách bán hàng đột phá: Sở hữu ngay căn hộ hạng sang với số vốn siêu thấp.
          </p>
        </div>

        {/* Featured highlight */}
        <div ref={ref} style={{
          background: 'rgba(88,160,200,0.12)', border: '1px solid rgba(88,160,200,0.4)',
          borderRadius: 16, padding: '24px 28px', marginBottom: 32, textAlign: 'center',
          opacity: inView ? 1 : 0, transition: 'all 0.6s ease-out'
        }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 600, color: '#58A0C8', lineHeight: 1 }}>22%</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#fff', fontWeight: 600, marginTop: 8 }}>Chỉ cần đóng 22% để nhận nhà và bắt đầu khai thác ngay</div>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: 32, position: 'relative' }}>
          <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              height: '100%', background: 'linear-gradient(to right, #58A0C8, #22c55e)',
              borderRadius: 2, width: `${barWidth}%`,
              transition: 'width 1.4s ease-out'
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            {STAGES.map(s => (
              <span key={s.num} style={{ fontSize: '0.72rem', color: '#58A0C8', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{s.cum}%</span>
            ))}
          </div>
        </div>

        {/* Stage cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="payment-grid">
          {STAGES.map((s, i) => (
            <div key={i} style={{
              background: s.highlight ? 'rgba(88,160,200,0.1)' : 'rgba(255,255,255,0.04)',
              border: s.highlight ? '1px solid rgba(88,160,200,0.5)' : '1px solid rgba(192,192,192,0.1)',
              borderRadius: 14, padding: '20px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s ease-out ${0.2 + i * 0.15}s`
            }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#58A0C8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, fontSize: '0.75rem', color: '#fff', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                {s.num}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#C0C0C0', fontWeight: 600, marginBottom: 6, lineHeight: 1.4 }}>{s.label}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: s.highlight ? '#58A0C8' : '#fff', fontWeight: 600, marginBottom: 4 }}>{s.percent}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: 'rgba(192,192,192,0.6)', marginBottom: 8 }}>{s.est}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: s.highlight ? '#58A0C8' : 'rgba(192,192,192,0.5)', fontStyle: 'italic' }}>{s.condition}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={onOpenModal} className="btn-primary" style={{ padding: '11px 24px', borderRadius: 10, border: 'none', fontSize: '0.875rem' }}>
            Nhận Bảng Tính Dòng Tiền
          </button>
          <button onClick={onOpenModal} className="btn-outline-sky" style={{ padding: '11px 24px', borderRadius: 10, fontSize: '0.875rem', fontFamily: "'Inter', sans-serif" }}>
            Tư Vấn Gói Vay
          </button>
        </div>
        <p style={{ marginTop: 16, fontSize: '0.72rem', color: 'rgba(192,192,192,0.4)', textAlign: 'center', fontFamily: "'Inter', sans-serif", fontStyle: 'italic' }}>
          Lịch thanh toán mang tính chất tham khảo. Vui lòng liên hệ để nhận chính sách chính xác nhất.
        </p>
      </div>
      <style>{`@media(max-width:768px){.payment-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}