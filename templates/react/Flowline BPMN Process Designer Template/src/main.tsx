import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles.css";

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
} else {
  // If #root is missing the app can never mount. Say so instead of failing
  // silently into a blank document.
  document.body.innerHTML =
    '<pre style="padding:24px;font:14px ui-monospace,monospace;color:#b91c1c">' +
    "Flowline could not start: no element with id=\"root\" in index.html." +
    "</pre>";
}
