/* lib */
import { Toast } from "radix-ui";
import { useImperativeHandle, useState } from "react";
/* types */
import type { ICommonPropsWithRef } from "@/lib/types/common";
import classNames from "classnames";

export type AppToastRef = {
  open: () => void;
};

type Props = ICommonPropsWithRef<AppToastRef> &
  Omit<Toast.ToastProps, "children" | "open" | "onOpenChange"> & {
    closeText?: string;
  };

export default function AppToast({
  ref,
  children,
  className,
  closeText = "Close",
  ...props
}: Props) {
  const [open, setOpen] = useState(false);

  const toastClassName = classNames("border-2", className);

  /* ref handling */
  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
  }));

  return (
    <Toast.Root
      open={open}
      onOpenChange={setOpen}
      className={toastClassName}
      {...props}
    >
      {props.title && (
        <Toast.Title className="mb-3.5 text-base leading-none font-medium text-slate-950 [grid-area:_title]">
          {props.title}
        </Toast.Title>
      )}
      <Toast.Description>
        <div className="text-xs leading-none text-slate-600 [grid-area:_description]">
          {children}
        </div>
      </Toast.Description>
      <Toast.Close className="bg-gray-100 border-2 rounded-sm px-2.5 py-1 cursor-pointer [grid-area:_action]">
        {closeText}
      </Toast.Close>
    </Toast.Root>
  );
}
