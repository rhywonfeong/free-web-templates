import { Routes, Route } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        {/* Additional routes would go here */}
      </Route>
    </Routes>
  )
}

export default App