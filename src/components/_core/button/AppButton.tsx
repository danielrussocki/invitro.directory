/* lib */
import classNames from "classnames";
/* types */
import type { ICommonPropsWithRef } from "@/lib/types/common";
import type { ComponentProps } from "react";

type Props = ICommonPropsWithRef<ComponentProps<"button">> &
  ComponentProps<"button">;

export default function AppButton({ children, className, ...props }: Props) {
  const buttonClassName = classNames(
    "inline-flex px-2.5 py-1.5 border-2 rounded-sm hover:bg-gray-100 cursor-pointer",
    className
  );

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
