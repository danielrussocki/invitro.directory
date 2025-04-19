/* lib */
import classNames from "classnames";
/* types */
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<"img">, "children">;

export default function AppImage({ className, ...props }: Props) {
  const imgClassName = classNames("object-cover", className);

  return <img className={imgClassName} {...props} />;
}
