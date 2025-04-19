/* lib */
import { Outlet } from "react-router";
/* components */
import AppNavigationMenu, {
  AppNavigationItem,
} from "@/components/_core/AppNavigationMenu";

export default function AppAuthLayout() {
  return (
    <>
      <AppNavigationMenu>
        <AppNavigationItem href="/">Home</AppNavigationItem>
        <AppNavigationItem href="/auth/login">Login</AppNavigationItem>
        <AppNavigationItem isTrigger>About me</AppNavigationItem>
      </AppNavigationMenu>
      <Outlet />
    </>
  );
}
