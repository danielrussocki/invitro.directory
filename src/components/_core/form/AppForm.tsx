/* lib */
import { Form } from "radix-ui";
import classNames from "classnames";
/* types */
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps & {
  submitText?: string;
};

export default function AppForm({
  children,
  className,
  submitText = "Submit",
}: Props) {
  const formClassName = classNames("w-full max-w-xs mx-auto", className);

  return (
    <Form.Root className={formClassName}>
      <div className="flex flex-col gap-2">{children}</div>
      <Form.Submit asChild className="mt-10">
        <button className="mt-2.5 inline-flex h-9 w-full items-center justify-center rounded bg-white px-3.5 font-medium leading-none text-violet-400 shadow-sm cursor-pointer hover:bg-violet-50 focus:shadow-md focus:outline-none">
          {submitText}
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
