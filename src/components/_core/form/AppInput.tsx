/* lib */
import { Form } from "radix-ui";
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";
import type { ReactNode, HTMLInputTypeAttribute, ComponentProps } from "react";

type Props = ICommonProps &
  ComponentProps<"input"> & {
    name: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    label?: ReactNode;
    message?: ReactNode;
    match?: Form.FormMessageProps["match"];
  };

export default function AppInput({
  name,
  type = "text",
  className,
  ...props
}: Props) {
  const inputClassName = classNames(
    "border-2 inline-flex py-2 w-full appearance-none items-center justify-center rounded px-2.5 text-base leading-none bg-white shadow-sm outline-none",
    "selection:bg-black selection:text-white hover:shadow-sm focus:shadow-sm",
    className
  );
  return (
    <Form.Field name={name}>
      <div className="flex items-baseline justify-between mb-2">
        <Form.Label className="text-base font-medium leading-none">
          {props.label}
        </Form.Label>
        <Form.Message className="text-xs opacity-80" match={props.match}>
          {props.message}
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className={inputClassName} type={type} {...props} />
      </Form.Control>
    </Form.Field>
  );
}
