/* lib */
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps & {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function AppHeadingOne({
  children,
  className,
  tag = "h1",
}: Props) {
  const HeadingTag = tag;
  const headingClassName = classNames(
    "text-3xl leading-none font-bold tracking-tight",
    className
  );

  return <HeadingTag className={headingClassName}>{children}</HeadingTag>;
}
