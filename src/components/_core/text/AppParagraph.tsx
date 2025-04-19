/* lib */
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps;

export default function AppParagraph({ children, className }: Props) {
  const pClassName = classNames(
    "text-base leading-none tracking-tight text-gray-600",
    className
  );

  return <p className={pClassName}>{children}</p>;
}
