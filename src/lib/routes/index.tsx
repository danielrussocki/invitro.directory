import { BrowserRouter, Routes, Route } from "react-router";
/* components */
import App from "@/App";
/* layouts */
import AppAuthLayout from "@/components/auth/Layout";
/* pages */
import AppAuthPage from "@/components/auth/Page";

export default function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        {/* not protected */}
        <Route index element={<App />} />
        {/* auth */}
        <Route path="auth" element={<AppAuthLayout />}>
          <Route path="login" element={<AppAuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
