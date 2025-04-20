import type { ReactNode, Ref } from "react";

export type ICommonProps = {
  children?: ReactNode;
  className?: string;
};

export type ICommonPropsWithRef<T> = ICommonProps & {
  ref?: Ref<T>;
};
