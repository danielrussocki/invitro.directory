/* lib */
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";
import type { ComponentProps } from "react";

type Props = ICommonProps & ComponentProps<"button">;

export default function AppButton({ children, className, ...props }: Props) {
  const buttonClassName = classNames(
    "p-2.5 border-2 rounded-sm hover:bg-gray-100 cursor-pointer",
    className
  );

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
