/* lib */
import classNames from "classnames";
import { NavLink } from "react-router";
import { NavigationMenu } from "radix-ui";
/* icons */
import { CaretDownIcon } from "@radix-ui/react-icons";
/* types */
import type { ReactNode } from "react";
import type { To } from "react-router";
import type { ICommonProps } from "@/lib/types/common";

type AppNavigationProps = ICommonProps;

export default function AppNavigation({ children }: AppNavigationProps) {
  return (
    <NavigationMenu.Root className="relative flex justify-center w-screen z-10">
      <NavigationMenu.List className="flex items-center justify-center bg-white border-2 p-1 rounded-md list-none shadow-lg m-0">
        {children}
      </NavigationMenu.List>

      <NavigationMenu.Indicator className="flex items-end justify-center h-2.5 top-full overflow-hidden z-10 transition-(--transition-width-transform) duration-250 ease-in state-visible:animate-fade-in state-hidden:animate-fade-out">
        <div className="relative top-7/10 bg-black w-2.5 h-2.5 rotate-45 rounded-tl-xs" />
      </NavigationMenu.Indicator>

      <div className="absolute left-0 top-full flex w-full justify-center perspective-distant">
        <NavigationMenu.Viewport className="relative origin-top mt-2.5 w-full border-2 bg-white rounded-md overflow-hidden shadow-navigation-viewport h-(--radix-navigation-menu-viewport-height) transition-(--transition-size) duration-300 ease-in state-open:animate-scale-in state-closed:animate-scale-out sm:w-(--radix-navigation-menu-viewport-width)" />
      </div>
    </NavigationMenu.Root>
  );
}

type AppNavigationTrigger = {
  isTrigger: true;
  href?: never;
  content: ReactNode;
};

type AppNavigationLink = {
  isTrigger?: false;
  href: To;
  content?: never;
};

type AppNavigationItemProps = ICommonProps &
  (AppNavigationLink | AppNavigationTrigger);

export function AppNavigationItem({
  children,
  className,
  ...props
}: AppNavigationItemProps) {
  const commonClassName = classNames(
    "py-2 px-3 outline-none select-none leading-none rounded-sm text-base font-medium focus:shadow-sm hover:bg-gray-100",
    className
  );

  const navigationMenuTriggerClassName = classNames(
    "flex items-center justify-between gap-0.5",
    commonClassName
  );

  const navigationMenuLinkClassName = classNames(
    "block no-underline",
    commonClassName
  );

  if (props.isTrigger) {
    return (
      <NavigationMenu.Item>
        <AppNavigationItemTrigger className={navigationMenuTriggerClassName}>
          {children}
          <NavigationMenu.Content className="absolute top-0 left-0 w-full duration-250 ease-in motion-from-start:animate-enter-from-left motion-from-end:animate-enter-from-right motion-to-start:animate-exit-to-left motion-to-end:animate-exit-to-right sm:w-auto">
            {props.content}
          </NavigationMenu.Content>
        </AppNavigationItemTrigger>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link className={navigationMenuLinkClassName} asChild>
        <NavLink to={props.href}>{children}</NavLink>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

type AppNavigationItemTriggerProps = ICommonProps;

function AppNavigationItemTrigger({
  children,
  className,
}: AppNavigationItemTriggerProps) {
  return (
    <NavigationMenu.Trigger className={className}>
      {children}{" "}
      <CaretDownIcon
        className="relative text-gray-700 top-0.25 transition-transform parent-state-open:rotate-180"
        aria-hidden
      />
    </NavigationMenu.Trigger>
  );
}
