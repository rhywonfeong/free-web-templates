import { useCallback, useMemo, useState } from "react";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Designer from "./pages/Designer";
import Export from "./pages/Export";
import Publish from "./pages/Publish";
import NotFound from "./pages/NotFound";
import type { ShellContext } from "./lib/shell";
import "./styles.css";

/**
 * HashRouter, deliberately.
 *
 * BrowserRouter needs the host to rewrite every unknown path to index.html.
 * Static publishing targets (object storage, CDN sub-paths, zipped exports,
 * file://) usually do not, so a refresh on /publish returns the host's own
 * 404 — "The requested published site could not be found."
 *
 * Hash routing keeps the route client-side (…/#/publish). The server only ever
 * requests index.html, so every deep link and hard refresh works on any static
 * host with zero configuration. public/_redirects covers hosts that do support
 * rewrites, so clean URLs still degrade gracefully.
 */

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [propsOpen, setPropsOpen] = useState(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const openProps = useCallback(() => setPropsOpen(true), []);

  const shell = useMemo<ShellContext>(
    () => ({ sidebarOpen, propsOpen, setSidebarOpen, setPropsOpen }),
    [sidebarOpen, propsOpen],
  );

  return (
    <div className="app">
      <TopBar onOpenSidebar={openSidebar} onOpenProps={openProps} />
      <Outlet context={shell} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Designer />} />
          <Route path="/export" element={<Export />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
