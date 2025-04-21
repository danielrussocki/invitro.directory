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
  const containerClassName = classNames("bg-white", className);
  const innerContainerClassName = classNames("w-full p-5", innerClassName);

  return (
    <div className={containerClassName}>
      <main className={innerContainerClassName}>{children}</main>
    </div>
  );
}
