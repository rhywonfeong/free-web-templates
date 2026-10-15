import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Future routes can be added here (e.g., /portfolio, /about, /contact) */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;