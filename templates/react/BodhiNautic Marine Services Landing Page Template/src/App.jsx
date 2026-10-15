import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Particulares from "./pages/Particulares";
import PrivateOwners from "./pages/PrivateOwners";
import Superyacht from "./pages/Superyacht";
import Team from "./pages/Team";
import Professionals from "./pages/Professionals";
import TransomFenders from "./pages/TransomFenders";
import TransomFendersTechnical from "./pages/TransomFendersTechnical";
import Tienda from "./pages/Tienda";
import RestauracionIntegral from "./pages/RestauracionIntegral";
import Lightbox from "./components/Lightbox";

export default function App() {
  return (
    <BrowserRouter>
      <Lightbox />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/particulares" element={<Particulares />} />
        <Route path="/particulares/restauracion-integral" element={<RestauracionIntegral />} />
        <Route path="/profesionales" element={<Professionals />} />
        <Route path="/private-owners" element={<PrivateOwners />} />
        <Route path="/superyacht" element={<Superyacht />} />
        <Route path="/transom-fenders" element={<TransomFenders />} />
        <Route path="/transom-fenders/technical" element={<TransomFendersTechnical />} />
        <Route path="/team" element={<Team language="en" />} />
        <Route path="/equipo" element={<Team language="es" />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/shop" element={<Tienda />} />
      </Routes>
    </BrowserRouter>
  );
}
