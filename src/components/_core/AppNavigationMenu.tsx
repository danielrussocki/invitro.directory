/* lib */
import { NavLink } from "react-router";
import { NavigationMenu } from "radix-ui";
/* types */
import type { To } from "react-router";
import type { ICommonProps } from "@/lib/types/common";

type AppNavigationProps = ICommonProps;

export default function AppNavigation({ children }: AppNavigationProps) {
  return (
    <NavigationMenu.Root className="relative flex justify-center w-screen z-1">
      <NavigationMenu.List className="flex justify-center bg-white p-1 rounded-md list-none shadow-lg m-0">
        {children}
      </NavigationMenu.List>

      <NavigationMenu.Indicator className="flex items-end justify-center h-2.5 top-full overflow-hidden z-1 transition-(--transition-width-transform) duration-250 ease-in state-visible:animate-fade-in state-hidden:animate-fade-out">
        <div className="relative top-7/10 bg-white w-2.5 h-2.5 rotate-45 rounded-tl-xs" />
      </NavigationMenu.Indicator>

      <div className="absolute flex justify-center w-full top-full left-0 perspective-distant">
        <NavigationMenu.Viewport />
      </div>
    </NavigationMenu.Root>
  );
}

type AppNavigationItemProps = ICommonProps & {
  href: To;
};

export function AppNavigationItem({
  children,
  ...props
}: AppNavigationItemProps) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link
        className="block no-underline py-2 px-3 outline-none select-none font-medium leading-none rounded-sm text-base focus:shadow-xs hover:bg-violet-50"
        asChild
      >
        <NavLink to={props.href}>{children}</NavLink>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}
