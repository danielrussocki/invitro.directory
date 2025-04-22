/* lib */
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps;

export default function AppCard({ children, className }: Props) {
  const cardClassName = classNames(
    "flex rounded-xl p-5 shadow-lg bg-white border border-gray-200",
    className
  );

  return <div className={cardClassName}>{children}</div>;
}
