import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Protocol from './pages/Protocol'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="protocol/:id" element={<Protocol />} />
      </Route>
    </Routes>
  )
}

export default App