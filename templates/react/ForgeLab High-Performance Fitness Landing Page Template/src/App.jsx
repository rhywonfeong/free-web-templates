import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Additional pages would be routed here, e.g., /contact, /schedule */}
      </Route>
    </Routes>
  );
}

export default App;