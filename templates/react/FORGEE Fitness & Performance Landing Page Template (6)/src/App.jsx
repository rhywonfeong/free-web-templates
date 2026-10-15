import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PlaceholderPage from './pages/PlaceholderPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="espaco" element={<PlaceholderPage title="O Espaço" />} />
        <Route path="programas" element={<PlaceholderPage title="Programas" />} />
        <Route path="equipe" element={<PlaceholderPage title="Equipe" />} />
        <Route path="planos" element={<PlaceholderPage title="Planos" />} />
      </Route>
    </Routes>
  )
}

export default App