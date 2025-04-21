/* lib */
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps;

export default function AppCard({ children, className }: Props) {
  const cardClassName = classNames(
    "flex border-2 rounded-md pl-2 pt-2 pb-2 shadow-sm",
    className
  );

  return <div className={cardClassName}>{children}</div>;
}
