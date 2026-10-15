import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Space from './pages/Space';
import Programs from './pages/Programs';
import Team from './pages/Team';
import Plans from './pages/Plans';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/espaco" element={<Space />} />
        <Route path="/programas" element={<Programs />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/planos" element={<Plans />} />
      </Routes>
    </Layout>
  );
}

export default App;