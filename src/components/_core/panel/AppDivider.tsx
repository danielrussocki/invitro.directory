/* lib */
import classNames from "classnames";
import { Separator } from "radix-ui";

type Props = Separator.SeparatorProps & {
  label?: string;
};

export default function AppDivider({ className, ...props }: Props) {
  const dividerClassName = classNames(
    "bg-gray-500 data-[orientation=horizontal]:h-0.25 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-0.5",
    className
  );

  if (typeof props.label !== "undefined") {
    return (
      <div className="flex items-center gap-x-2.5">
        <Separator.Root className={dividerClassName} {...props} />
        <span className="text-xs text-nowrap text-gray-400">{props.label}</span>
        <Separator.Root className={dividerClassName} {...props} />
      </div>
    );
  }

  return <Separator.Root className={dividerClassName} {...props} />;
}
