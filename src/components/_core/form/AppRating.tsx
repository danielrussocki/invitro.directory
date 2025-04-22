/* lib */
import classNames from "classnames";
/* icons */
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
/* types */
import type { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps & {
  max?: number;
  value: number;
};

export default function AppRating({ max = 5, value, className }: Props) {
  const rootClassName = classNames("flex items-center", className);
  const filledQuantity = Math.round(value);
  const notFilledQuantity = max - filledQuantity;

  return (
    <div className={rootClassName}>
      {[...Array(filledQuantity)].map((_, index) => {
        return <StarFilledIcon key={index} />;
      })}
      {[...Array(notFilledQuantity)].map((_, index) => {
        return <StarIcon key={index} />;
      })}
      <small className="ml-1 text-gray-400 leading-none">({value})</small>
    </div>
  );
}
