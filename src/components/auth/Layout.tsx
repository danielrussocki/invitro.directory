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
          {[...Array(3)].map((_, index) => {
            return (
              <AppNavigationItem href="/auth/login" key={index}>
                Item {index + 1}
              </AppNavigationItem>
            );
          })}
          <AppNavigationItem
            isTrigger
            content={
              <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-2 sm:gap-2.5">
                {[...Array(8)].map((_, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to="/"
                        className="flex flex-col leading-none hover:bg-gray-100 px-4 py-2 rounded-lg"
                      >
                        <span className="inline-block font-medium text-sm">
                          Sublink {index + 1}
                        </span>
                        <span className="text-xs text-gray-600">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            }
          >
            Item 4
          </AppNavigationItem>
        </AppNavigationMenu>
      </div>
      <Outlet />
      <Toast.Viewport className="fixed bottom-0 right-0 z-99999999 m-0 flex w-96 max-w-screen list-none flex-col gap-2.5 p-(--viewport-padding) outline-none [--viewport-padding:25px]" />
    </>
  );
}
