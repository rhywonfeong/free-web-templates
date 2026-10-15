import React, { useState, useEffect } from 'react'

const messages = [
  "Khách hàng T.H.M vừa đặt chỗ ưu tiên căn góc 3PN view Landmark 81.",
  "Chỉ còn 2 suất booking ưu tiên cho căn hộ sân vườn tầng 3 trong đợt này.",
  "Khách hàng N.V.L vừa giao dịch thành công căn 2PN diện tích lớn tầng 15.",
  "Sự kiện tham quan cuối tuần này đã kín 85% lịch đăng ký.",
  "Chính sách thanh toán 22% nhận nhà ngay đang nhận được sự quan tâm rất lớn.",
]

export default function FomoNotification() {
  const [visible, setVisible] = useState(false)
  const [msgIndex, setMsgIndex] = useState(0)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      if (!dismissed) setVisible(true)
    }, 4000)
    return () => clearTimeout(firstTimer)
  }, [])

  useEffect(() => {
    if (!visible) return
    const hideTimer = setTimeout(() => setVisible(false), 5000)
    return () => clearTimeout(hideTimer)
  }, [visible, msgIndex])

  useEffect(() => {
    const cycleTimer = setInterval(() => {
      if (!dismissed) {
        setMsgIndex(i => (i + 1) % messages.length)
        setVisible(true)
      }
    }, 15000)
    return () => clearInterval(cycleTimer)
  }, [dismissed])

  if (dismissed) return null

  return (
    <div style={{
      position: 'fixed', bottom: 80, left: 16, zIndex: 97,
      transform: visible ? 'translateX(0)' : 'translateX(-120%)',
      transition: 'transform 0.4s ease-out',
      maxWidth: 340,
    }}>
      <div style={{
        background: '#0B2D72',
        border: '1px solid rgba(245,158,11,0.4)',
        borderRadius: 10,
        padding: '10px 14px',
        display: 'flex', alignItems: 'flex-start', gap: 10,
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      }}>
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: '#F59E0B', marginTop: 5, flexShrink: 0,
          boxShadow: '0 0 8px rgba(245,158,11,0.6)',
        }} />
        <p style={{
          fontSize: '0.75rem', color: '#F59E0B',
          fontFamily: "'Inter', sans-serif", lineHeight: 1.5, flex: 1
        }}>{messages[msgIndex]}</p>
        <button onClick={() => setDismissed(true)} style={{
          background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
          cursor: 'pointer', fontSize: '0.9rem', padding: 0, lineHeight: 1, flexShrink: 0
        }}>×</button>
      </div>
    </div>
  )
}