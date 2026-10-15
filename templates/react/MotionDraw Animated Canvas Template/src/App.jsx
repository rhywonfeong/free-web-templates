import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Editor from './pages/Editor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Editor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;