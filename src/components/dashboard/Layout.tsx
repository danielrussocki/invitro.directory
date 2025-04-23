/* lib */
import { Outlet } from "react-router";
/* components */
import AppContainer from "@/components/_core/grid/AppContainer";
import AppNavigation from "@/components/dashboard/_components/AppNavigation";

export default function AppDashboardLayout() {
  return (
    <>
      <div className="bg-slate-200 pb-5 lg:pb-10">
        <AppNavigation />
        <AppContainer>
          <div className="w-full">
            <div className="bg-white w-full min-h-screen p-5 lg:p-10 rounded-4xl shadow-sm">
              <Outlet />
            </div>
          </div>
        </AppContainer>
      </div>
    </>
  );
}
