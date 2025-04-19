/* lib */
import classNames from "classnames";
import { NavLink } from "react-router";
import { NavigationMenu } from "radix-ui";
/* icons */
import { CaretDownIcon } from "@radix-ui/react-icons";
/* types */
import type { To } from "react-router";
import type { ICommonProps } from "@/lib/types/common";

type AppNavigationProps = ICommonProps;

export default function AppNavigation({ children }: AppNavigationProps) {
  return (
    <NavigationMenu.Root className="relative flex justify-center w-screen z-1">
      <NavigationMenu.List className="flex items-center justify-center bg-white p-1 rounded-md list-none shadow-lg m-0">
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

type AppNavigationTrigger = {
  isTrigger: true;
  href?: never;
};

type AppNavigationLink = {
  isTrigger?: false;
  href: To;
};

type AppNavigationItemProps = ICommonProps &
  (AppNavigationLink | AppNavigationTrigger);

export function AppNavigationItem({
  children,
  className,
  ...props
}: AppNavigationItemProps) {
  const commonClassName = classNames(
    "py-2 px-3 outline-none select-none leading-none text-violet-500 rounded-sm text-base font-medium focus:shadow-xs hover:bg-violet-50",
    className
  );

  const navigationMenuTriggerClassName = classNames(
    "flex items-center justify-center gap-0.5",
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
        className="relative text-violet-500 top-0.25 transition-transform parent-state-open:rotate-180"
        aria-hidden
      />
    </NavigationMenu.Trigger>
  );
}
