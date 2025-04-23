/* lib */
import classNames from "classnames";
import { Accordion } from "radix-ui";
/* icons */
import { ChevronDownIcon } from "@radix-ui/react-icons";
/* types */
import type { ICommonProps } from "@/lib/types/common";
import type { ReactNode } from "react";

type Props = ICommonProps &
  (Accordion.AccordionSingleProps | Accordion.AccordionMultipleProps);

export default function AppAccordion({ children, className, ...props }: Props) {
  const rootClassName = classNames("w-full bg-gray-100", className);

  return (
    <Accordion.Root className={rootClassName} {...props}>
      {children}
    </Accordion.Root>
  );
}

type AppAccordionItemProps = ICommonProps &
  Accordion.AccordionItemProps & {
    header: ReactNode;
    icon?: ReactNode;
  };

export function AppAccordionItem({
  children,
  header,
  icon = <AppAccordionItemIconDefault />,
  ...props
}: AppAccordionItemProps) {
  return (
    <Accordion.Item {...props}>
      <Accordion.Header>
        <Accordion.Trigger className="group/accordion flex items-center gap-1 py-3 px-6 cursor-pointer">
          {header} <span className="inline-block">{icon}</span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down overflow-hidden">
        <div className="py-3 px-6">{children}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

function AppAccordionItemIconDefault() {
  return (
    <ChevronDownIcon className="transition-transform duration-300 ease-in-out group-data-[state=open]/accordion:rotate-180" />
  );
}
