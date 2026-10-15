import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Network from './pages/Network';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="network" element={<Network />} />
        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;