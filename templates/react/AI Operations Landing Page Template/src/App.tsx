import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components/Shell'
import Motion from './components/Motion'
import Work from './pages/Work'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Motion />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/work" replace />} />
          <Route path="/work" element={<Work />} />
          <Route path="/features" element={<Navigate to="/work" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/work" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
