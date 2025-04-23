/* lib */
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps;

export default function AppContainer({ children, className }: Props) {
  const containerClassName = classNames("w-full px-5", className);

  return <div className={containerClassName}>{children}</div>;
}
