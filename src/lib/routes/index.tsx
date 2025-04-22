import { BrowserRouter, Routes, Route, Navigate } from "react-router";
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
        <Route element={<AppAuthLayout />}>
          <Route path="auth/login" element={<AppAuthLoginPage />} />
          <Route path="auth/register" element={<AppAuthRegisterPage />} />
          <Route
            path="auth/*"
            element={<Navigate to="/auth/login" replace />}
          />
        </Route>
        {/* dashboard */}
        <Route path="dashboard" element={<AppDashboardLayout />}>
          <Route index element={<AppDashboardIndexPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
