import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import AppRoutes from "./AppRoutes";
import "./i18n"; // Import the i18n configuration
import { DarkModeProvider } from "./contexts/DarkModeContext"; // Import the provider

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <AppRoutes />
    </DarkModeProvider>
  </StrictMode>
);
