import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* routes */
import AppRoutes from "./lib/routes/index.tsx";
/* providers */
import { Toast } from "radix-ui";
/* styles */
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toast.Provider swipeDirection="right">
      <AppRoutes />
    </Toast.Provider>
  </StrictMode>
);
