import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BraseaCase from './pages/BraseaCase';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio/brasea" element={<BraseaCase />} />
      </Route>
    </Routes>
  );
}

export default App;