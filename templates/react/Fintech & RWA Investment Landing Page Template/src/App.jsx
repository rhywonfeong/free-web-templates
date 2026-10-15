import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoBackground from './components/VideoBackground';
import Layout from './components/Layout';
import Home from './pages/Home';
import Narratives from './pages/Narratives';
import Dashboard from './pages/Dashboard';
import RwaPortal from './pages/RwaPortal';
import Governance from './pages/Governance';

function App() {
  return (
    <Router>
      <VideoBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/narratives" element={<Narratives />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rwa" element={<RwaPortal />} />
          <Route path="/governance" element={<Governance />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;