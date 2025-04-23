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

type ItemProps = ICommonProps &
  ToggleGroup.ToggleGroupItemProps & {
    size?: "small" | "normal";
  };

export function AppToggleGroupItem({
  className,
  children,
  size = "normal",
  severity = "none",
  ...props
}: ItemProps) {
  const itemClassName = classNames(
    "rounded-sm items-center justify-center cursor-pointer",
    "first:rounded-l last:rounded-r focus:z-10 focus:outline-none",
    {
      "bg-white border border-gray-200 hover:bg-gray-100 data-[state=on]:bg-blue-500 data-[state=on]:text-white":
        severity === "none",
    },
    {
      "bg-gray-100 hover:bg-gray-200 data-[state=on]:bg-gray-300":
        severity === "info",
    },
    { "px-4 py-2 leading-4": size === "normal" },
    { "px-3 py-1.5 text-xs leading-none": size === "small" },
    className
  );

  return (
    <ToggleGroup.Item className={itemClassName} {...props}>
      {children}
    </ToggleGroup.Item>
  );
}
