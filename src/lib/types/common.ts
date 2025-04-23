import type { ReactNode, Ref } from "react";

export type AppSeverity =
  | "none"
  | "info"
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "help"
  | "danger";

export type ICommonProps = {
  children?: ReactNode;
  className?: string;
  severity?: AppSeverity;
};

export type ICommonPropsWithRef<T> = ICommonProps & {
  ref?: Ref<T>;
};
