/* lib */
import { Avatar } from "radix-ui";
/* types */
import type { ICommonProps } from "@/lib/types/common";
import classNames from "classnames";

type Props = ICommonProps & {
  src?: string;
  alt?: string;
  delayMs?: number;
};

export default function AppAvatar({
  children,
  className,
  delayMs = 600,
  ...props
}: Props) {
  const avatarClassName = classNames(
    "inline-flex size-40 select-none items-center justify-center overflow-hidden rounded-sm align-middle",
    className
  );

  return (
    <Avatar.Root className={avatarClassName}>
      <Avatar.Image
        className="size-full rounded-[inherit] object-cover shrink-0"
        src={props.src}
        alt={props.alt}
      />
      <Avatar.Fallback
        className="leading-none flex size-full items-center justify-center bg-white text-base font-medium text-gray-900"
        delayMs={delayMs}
      >
        {children}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
