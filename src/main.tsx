import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import AppRoutes from "./AppRoutes";
import "./i18n"; // Import the i18n configuration

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
