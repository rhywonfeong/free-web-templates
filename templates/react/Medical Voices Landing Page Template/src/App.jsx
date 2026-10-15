import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Labs from './pages/Labs';
import Projects from './pages/Projects';
import Initiate from './pages/Initiate';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Initiate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;