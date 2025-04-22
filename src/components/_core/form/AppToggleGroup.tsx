/* lib */
import { ToggleGroup } from "radix-ui";
/* types */
import type { ICommonProps } from "@/lib/types/common";
import classNames from "classnames";

type Props = ICommonProps &
  (ToggleGroup.ToggleGroupSingleProps | ToggleGroup.ToggleGroupMultipleProps);

export default function AppToggleGroup({
  children,
  className,
  ...props
}: Props) {
  const rootClassName = classNames("inline-flex", className);

  return (
    <ToggleGroup.Root className={rootClassName} {...props}>
      {children}
    </ToggleGroup.Root>
  );
}

type ItemProps = ICommonProps & ToggleGroup.ToggleGroupItemProps;

export function AppToggleGroupItem({
  className,
  children,
  ...props
}: ItemProps) {
  const itemClassName = classNames(
    "rounded-sm px-2 py-1.5 bg-gray-100 items-center justify-center leading-4 first:rounded-l last:rounded-r hover:bg-gray-200 focus:z-10 focus:outline-none data-[state=on]:bg-gray-300 cursor-pointer data-[state=on]:font-medium",
    className
  );

  return (
    <ToggleGroup.Item className={itemClassName} {...props}>
      {children}
    </ToggleGroup.Item>
  );
}
