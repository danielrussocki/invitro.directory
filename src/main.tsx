import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* routes */
import AppRoutes from "./lib/routes/index.tsx";
/* styles */
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
