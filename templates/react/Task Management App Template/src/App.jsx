import { Routes, Route, Navigate } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import AppLayout from './components/layout/AppLayout';
import ListView from './pages/ListView';

function App() {
  return (
    <TodoProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/list/inbox" replace />} />
          <Route path="list/:listId" element={<ListView />} />
          <Route path="*" element={<Navigate to="/list/inbox" replace />} />
        </Route>
      </Routes>
    </TodoProvider>
  );
}

export default App;