import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App