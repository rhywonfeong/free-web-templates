import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/Overview';
import GenericPage from './pages/GenericPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="uploader" element={<GenericPage title="Uploader" />} />
        <Route path="gallery" element={<GenericPage title="Gallery" />} />
        <Route path="keys" element={<GenericPage title="Keys" />} />
        <Route path="domains" element={<GenericPage title="Domains" />} />
        <Route path="api" element={<GenericPage title="API" />} />
        <Route path="webhooks" element={<GenericPage title="Webhooks" />} />
        <Route path="settings" element={<GenericPage title="Settings" />} />
        <Route path="billing" element={<GenericPage title="Billing" />} />
      </Route>
    </Routes>
  );
}

export default App;