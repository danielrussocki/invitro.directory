/* lib */
import { Toast } from "radix-ui";
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
      <Toast.Viewport className="fixed bottom-0 right-0 z-99999999 m-0 flex w-96 max-w-screen list-none flex-col gap-2.5 p-(--viewport-padding) outline-none [--viewport-padding:25px]" />
    </>
  );
}
