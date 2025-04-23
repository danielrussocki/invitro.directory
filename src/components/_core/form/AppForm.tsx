/* lib */
import { Form } from "radix-ui";
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps &
  Omit<Form.FormProps, "children"> & {
    submitText?: string;
  };

export default function AppForm({
  children,
  className,
  submitText = "Submit",
  ...props
}: Props) {
  const formClassName = classNames("w-full", className);

  return (
    <Form.Root className={formClassName} {...props}>
      <div className="flex flex-col gap-2">{children}</div>
      <Form.Submit asChild className="mt-2.5">
        <button className="inline-flex h-9 w-full items-center justify-center rounded bg-white border border-gray-400 px-3.5 font-medium leading-none shadow-sm cursor-pointer hover:bg-gray-100 focus:shadow-md focus:outline-none">
          {submitText}
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
