/* lib */
import { Form } from "radix-ui";
/* types */
import type { ReactNode, HTMLInputTypeAttribute } from "react";
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps & {
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: ReactNode;
  message?: ReactNode;
  match?: Form.FormMessageProps["match"];
};

export default function AppInput({ name, type = "text", ...props }: Props) {
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
        <input
          className="box-border inline-flex py-2 w-full appearance-none items-center justify-center rounded px-2.5 text-base leading-none bg-white text-violet-500 shadow-sm outline-none selection:bg-black selection:text-white hover:shadow-sm focus:shadow-sm"
          placeholder={props.placeholder}
          type={type}
          required
        />
      </Form.Control>
    </Form.Field>
  );
}
