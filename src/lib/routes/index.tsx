/* lib */
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
/* layouts */
import AppAuthLayout from "@/components/auth/Layout";
import AppDashboardLayout from "@/components/dashboard/Layout";
/* pages */
import AppAuthLoginPage from "@/components/auth/login/Page";
import AppDashboardIndexPage from "@/components/dashboard/Page";
import AppAuthRegisterPage from "@/components/auth/register/Page";
import AppSummaryPage from "@/components/dashboard/summary/Page";

export default function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        {/* not protected */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
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
          <Route path="summary" element={<AppSummaryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
