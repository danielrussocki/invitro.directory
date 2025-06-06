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
  } & Pick<Form.FormMessageProps, "match" | "forceMatch"> &
  Pick<Form.FormFieldProps, "serverInvalid">;

export default function AppInput({
  name,
  type = "text",
  serverInvalid,
  className,
  forceMatch,
  match,
  ...props
}: Props) {
  const inputClassName = classNames(
    "border border-gray-400 inline-flex py-2 w-full appearance-none items-center justify-center rounded px-2.5 text-base leading-none bg-white shadow-sm outline-none",
    "selection:bg-black selection:text-white hover:shadow-sm focus:shadow-sm",
    className
  );
  return (
    <Form.Field name={name} serverInvalid={serverInvalid}>
      <div className="flex items-baseline justify-between mb-2">
        <Form.Label className="text-base font-medium leading-none">
          {props.label}
        </Form.Label>
        <Form.Message
          className="text-xs opacity-80"
          match={match}
          forceMatch={forceMatch}
        >
          {props.message}
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className={inputClassName} type={type} {...props} />
      </Form.Control>
    </Form.Field>
  );
}
