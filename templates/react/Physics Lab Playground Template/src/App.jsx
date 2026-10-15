import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Lab from './pages/Lab';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lab />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;