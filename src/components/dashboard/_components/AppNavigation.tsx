/* lib */
import { NavLink } from "react-router";
/* components */
import AppHeading from "@/components/_core/heading/AppHeading";

export default function AppNavigation() {
  return (
    <>
      <div className="sticky top-0 left-0 z-99 p-5 pointer-events-none">
        <nav className="rounded-full w-full h-15 px-7 py-3 flex justify-end items-center bg-white shadow-sm pointer-events-auto">
          <div className="w-full h-full flex items-center justify-between">
            <AppHeading className="uppercase" size="xl">
              Logo
            </AppHeading>
            <div className="flex gap-1.5 font-medium">
              <NavLink
                className="px-3 py-1.5 rounded-lg hover:bg-gray-100"
                to="/dashboard"
              >
                Directory
              </NavLink>
              <NavLink
                className="px-3 py-1.5 rounded-lg hover:bg-gray-100"
                to="/dashboard/summary"
              >
                Summary
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
