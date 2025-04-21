/* lib */
import { Outlet } from "react-router";
/* components */
import AppContainer from "@/components/_core/grid/AppContainer";
import AppAsideMenu from "@/components/_core/AppAsideMenu";

export default function AppDashboardLayout() {
  return (
    <>
      <AppContainer className="h-screen" innerClassName="h-full">
        <AppAsideMenu>
          <Outlet />
        </AppAsideMenu>
      </AppContainer>
    </>
  );
}
