import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingCta from './components/FloatingCta'
import Home from './pages/Home'
import Servicii from './pages/Servicii'
import DespreNoi from './pages/DespreNoi'
import Recenzii from './pages/Recenzii'
import IntrebariFrecvente from './pages/IntrebariFrecvente'
import Contact from './pages/Contact'
import { useGaPageview, useOutboundClickTracking, useScrollReveal } from './hooks'

export type Preselect = { value: string; n: number }
export type RequestService = (service?: string) => void

/** Scrolls to the hash target on navigation, otherwise back to the top. */
function useRouteScroll(location: ReturnType<typeof useLocation>) {
  useEffect(() => {
    const { hash } = location
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }
    const id = hash.slice(1)
    const raf = window.requestAnimationFrame(() => {
      const target = document.getElementById(id)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
    return () => window.cancelAnimationFrame(raf)
  }, [location.key, location.pathname, location.hash])
}

function Shell() {
  const location = useLocation()
  const navigate = useNavigate()
  const [preselect, setPreselect] = useState<Preselect>({ value: '', n: 0 })

  useRouteScroll(location)
  useScrollReveal(location.pathname)
  useGaPageview(location.pathname + location.search)
  // Site-wide GA4 tracking for every tel: and WhatsApp link (delegated, mounted once).
  useOutboundClickTracking()

  const requestService = useCallback<RequestService>(
    (service = '') => {
      setPreselect((p) => ({ value: service, n: p.n + 1 }))
      navigate('/contact#formular')
    },
    [navigate]
  )

  const openForm = useCallback(() => requestService(''), [requestService])

  return (
    <>
      <Header onRequest={openForm} />

      <main>
        <Routes>
          <Route path="/" element={<Home onRequest={requestService} preselect={preselect} />} />
          <Route path="/servicii" element={<Servicii onRequest={requestService} />} />
          <Route path="/despre-noi" element={<DespreNoi onRequest={openForm} />} />
          <Route path="/recenzii" element={<Recenzii onRequest={openForm} />} />
          <Route path="/intrebari-frecvente" element={<IntrebariFrecvente onRequest={openForm} />} />
          <Route path="/contact" element={<Contact onRequest={openForm} preselect={preselect} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <FloatingCta onRequest={openForm} />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
