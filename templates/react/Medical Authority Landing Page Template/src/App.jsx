import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Method from './pages/Platform';
import Outcomes from './pages/Labs';
import Cases from './pages/Projects';
import Engage from './pages/Initiate';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/method" element={<Method />} />
          <Route path="/outcomes" element={<Outcomes />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/engage" element={<Engage />} />
          {/* Legacy redirects preserved as routes */}
          <Route path="/platform" element={<Method />} />
          <Route path="/labs" element={<Outcomes />} />
          <Route path="/projects" element={<Cases />} />
          <Route path="/contact" element={<Engage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;