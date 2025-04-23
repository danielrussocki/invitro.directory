/* lib */
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps & {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
};

export default function AppHeading({
  children,
  className,
  tag = "h1",
  size = "3xl",
}: Props) {
  const HeadingTag = tag;
  const headingClassName = classNames(
    "leading-none tracking-tight",
    { "text-6xl": size === "6xl" },
    { "text-5xl": size === "5xl" },
    { "text-4xl": size === "4xl" },
    { "text-3xl": size === "3xl" },
    { "text-2xl": size === "2xl" },
    { "text-xl": size === "xl" },
    { "text-lg": size === "lg" },
    { "text-md": size === "md" },
    { "text-sm": size === "sm" },
    { "text-xs": size === "sm" },
    className
  );

  return <HeadingTag className={headingClassName}>{children}</HeadingTag>;
}
