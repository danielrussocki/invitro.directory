import { Outlet } from "react-router";

export default function AppDashboardLayout() {
  return (
    <>
      <div className="flex">
        <aside>Menú</aside>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
