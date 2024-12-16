import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import { ToastContainer } from "react-toastify";

import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />

      <ToastContainer />
    </HashRouter>
  </StrictMode>,
);
