import { BrowserRouter, Routes, Route } from "react-router";
/* components */
import App from "@/App";
/* layouts */
import AppAuthLayout from "@/components/auth/Layout";
import AppDashboardLayout from "@/components/dashboard/Layout";
/* pages */
import AppAuthLoginPage from "@/components/auth/login/Page";
import AppAuthRegisterPage from "@/components/auth/register/Page";
import AppDashboardIndexPage from "@/components/dashboard/Page";

export default function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        {/* not protected */}
        <Route index element={<App />} />
        {/* auth */}
        <Route path="auth" element={<AppAuthLayout />}>
          <Route path="login" element={<AppAuthLoginPage />} />
          <Route path="register" element={<AppAuthRegisterPage />} />
        </Route>
        {/* dashboard */}
        <Route path="dashboard" element={<AppDashboardLayout />}>
          <Route index element={<AppDashboardIndexPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
