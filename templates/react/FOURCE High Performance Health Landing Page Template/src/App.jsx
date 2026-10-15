import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Placeholder routes for multi-page scaling if needed */}
        <Route path="espaco" element={<Home />} />
        <Route path="programas" element={<Home />} />
        <Route path="equipe" element={<Home />} />
        <Route path="planos" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App