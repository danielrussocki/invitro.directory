/* lib */
import classNames from "classnames";
/* types */
import type { ICommonPropsWithRef } from "@/lib/types/common";
import type { ComponentProps } from "react";

type Props = ICommonPropsWithRef<ComponentProps<"button">> &
  ComponentProps<"button"> & {
    rounded?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  };

export default function AppButton({
  children,
  className,
  size = "md",
  severity = "none",
  rounded = false,
  ...props
}: Props) {
  const buttonClassName = classNames(
    "inline-flex border cursor-pointer",
    { "bg-white border-gray-200 hover:bg-gray-200": severity === "none" },
    {
      "bg-blue-500 text-white border-blue-400 hover:bg-blue-600":
        severity === "primary",
    },
    { "rounded-sm": !rounded },
    { "rounded-full": rounded },
    { "px-3 py-1.5 text-xs leading-none": size === "xs" },
    { "px-4 py-2 text-xs leading-none": size === "sm" },
    { "px-5 py-2.5": size === "md" },
    className
  );

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
