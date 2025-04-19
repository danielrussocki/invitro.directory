/* lib */
import { Outlet, NavLink } from "react-router";
/* components */
import AppNavigationMenu, {
  AppNavigationItem,
} from "@/components/_core/AppNavigationMenu";

export default function AppAuthLayout() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full py-10 2xl:py-6.5">
        <AppNavigationMenu>
          <AppNavigationItem href="/">Home</AppNavigationItem>
          <AppNavigationItem href="/auth/login">
            Booking System
          </AppNavigationItem>
          <AppNavigationItem
            isTrigger
            content={
              <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li>
                  <NavLink to="/">Inicio</NavLink>
                </li>
              </ul>
            }
          >
            About me
          </AppNavigationItem>
        </AppNavigationMenu>
      </div>
      <Outlet />
    </>
  );
}
