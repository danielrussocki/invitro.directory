/* lib */
import classNames from "classnames";
/* types */
import type { ICommonPropsWithRef } from "@/lib/types/common";
import type { ComponentProps } from "react";

type Props = ICommonPropsWithRef<ComponentProps<"button">> &
  ComponentProps<"button"> & {
    rounded?: boolean;
  };

export default function AppButton({
  children,
  className,
  rounded = false,
  ...props
}: Props) {
  const buttonClassName = classNames(
    "inline-flex px-2.5 py-2.5 bg-white border border-gray-200 hover:bg-gray-200 cursor-pointer",
    { "rounded-sm": !rounded },
    { "rounded-full": rounded },
    className
  );

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
