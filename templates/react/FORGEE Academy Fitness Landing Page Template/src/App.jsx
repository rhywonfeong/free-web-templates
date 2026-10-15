import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Fallback routes for navigation links to keep the SPA feel without breaking */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App