/* lib */
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps & {
  innerClassName?: string;
};

export default function AppContainer({
  children,
  className,
  innerClassName,
}: Props) {
  const containerClassName = classNames("bg-slate-200", className);
  const innerContainerClassName = classNames("w-full", innerClassName);

  return (
    <div className={containerClassName}>
      <main className={innerContainerClassName}>{children}</main>
    </div>
  );
}
