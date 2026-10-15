import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Placeholders for other routes */}
        <Route path="talent" element={<div className="min-h-screen pt-32 text-center tracking-tight text-2xl">Find Talent Page</div>} />
        <Route path="projects" element={<div className="min-h-screen pt-32 text-center tracking-tight text-2xl">Find Projects Page</div>} />
        <Route path="enterprise" element={<div className="min-h-screen pt-32 text-center tracking-tight text-2xl">Enterprise Solutions</div>} />
      </Route>
    </Routes>
  );
}

export default App;