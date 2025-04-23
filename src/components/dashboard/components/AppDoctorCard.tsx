/* lib */
import { MouseEventHandler, useState } from "react";
import classNames from "classnames";
/* components */
import AppCard from "@/components/_core/panel/AppCard";
import AppAvatar from "@/components/_core/misc/AppAvatar";
import AppRating from "@/components/_core/form/AppRating";
import AppButton from "@/components/_core/button/AppButton";
import AppDialog from "@/components/_core/overlay/AppDialog";
import AppToggleGroup, {
  AppToggleGroupItem,
} from "@/components/_core/form/AppToggleGroup";
/* icons */
import {
  CheckCircledIcon,
  CalendarIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
/* utils */
import {
  getCalendarDate,
  getMomentToday,
  getSmallDate,
  parseToMoment,
} from "@/lib/utils/date";
/* types */
import type { ICommonProps } from "@/lib/types/common";
import type { IAvailability, IDoctor } from "@/lib/types/doctor";

type Props = Omit<ICommonProps, "children"> & IDoctor;

export default function AppDoctorCard({ className, ...props }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const rootClassName = classNames(
    "flex flex-col gap-5",
    "sm:flex-row",
    className
  );
  const closestFutureDate = getClosesFutureDate();

  function getClosesFutureDate() {
    const today = getMomentToday();
    const availability = props.availability
      .filter((item) => {
        const date = parseToMoment(item.date);
        const hasAvailableHours = item.hours.some((h) => h.available);
        return date.isAfter(today) && hasAvailableHours;
      })
      .sort((a, b) => parseToMoment(a.date).diff(parseToMoment(b.date)));

    if (availability.length > 0) return availability[0];
    return null;
  }

  function onMoreClickHandler() {
    setOpen(true);
  }

  return (
    <AppCard className={rootClassName}>
      <AppAvatar src={props.photo} className="shrink-0 border border-gray-200">
        {props.alias}
      </AppAvatar>
      <div className="w-full flex flex-col gap-1.5">
        <div className="flex flex-col gap-5">
          <div className="w-full">
            <h6 className="font-medium inline-flex gap-2 text-lg">
              {props.alias} {props.name}
              {props.verified && (
                <span className="inline-flex items-center text-blue-400">
                  <CheckCircledIcon />
                </span>
              )}
            </h6>
            <p className="text-xs">
              {props.specialty} -{" "}
              <span className="opacity-40">{props.location}</span>
            </p>
            <AppRating
              className="mt-1.5 text-blue-500"
              value={props.averageRating}
            />
          </div>
          <AppUpcomingAvailability
            availability={closestFutureDate}
            onMoreClick={onMoreClickHandler}
          >
            No availability
          </AppUpcomingAvailability>
        </div>
        <div className="mt-auto">
          <AppDialog
            triggerContent={
              <>
                <CalendarIcon />
                Book Appointment
              </>
            }
            open={open}
            onOpenChange={setOpen}
            triggerClassName="gap-x-2 items-center w-full justify-center sm:w-auto sm:justify-start"
          >
            <div className="grid grid-cols-5 gap-x-2.5">
              {props.availability.map((schedule, i) => {
                return (
                  <>
                    <AppToggleGroup type="single" className="flex-col gap-2">
                      <div key={i} className="text-center mb-2">
                        <p className="font-medium leading-none">
                          {getCalendarDate(schedule.date)}
                        </p>
                        <small className="opacity-80">
                          {getSmallDate(schedule.date)}
                        </small>
                      </div>
                      {schedule.hours.map((hour, indexHour) => {
                        if (hour.available)
                          return (
                            <AppToggleGroupItem value={String(indexHour)}>
                              {hour.time}
                            </AppToggleGroupItem>
                          );

                        return (
                          <div className="rounded-sm px-2 py-1.5 text-center items-center line-through justify-center leading-4 text-gray-500 first:rounded-l last:rounded-r focus:z-10 focus:outline-none">
                            {hour.time}
                          </div>
                        );
                      })}
                    </AppToggleGroup>
                  </>
                );
              })}
            </div>
          </AppDialog>
        </div>
      </div>
    </AppCard>
  );
}

type AppUpcomingAvailabilityProps = ICommonProps & {
  availability: IAvailability | null;
  maxItems?: number;
  onMoreClick?: MouseEventHandler<HTMLButtonElement>;
};

function AppUpcomingAvailability({
  availability,
  className,
  maxItems = 3,
  onMoreClick,
  children,
}: AppUpcomingAvailabilityProps) {
  const rootClassName = classNames("my-auto", className);

  if (availability != null) {
    const maxHours = availability.hours
      .filter((a) => a.available)
      .slice(0, maxItems);

    return (
      <div className={rootClassName}>
        <div className="flex items-center gap-2">
          <CalendarIcon />
          <small className="text-xs">
            Upcoming availability: {getCalendarDate(availability.date)}{" "}
            {getSmallDate(availability.date, false)}
          </small>
        </div>
        <div className="mt-2.5 flex flex-wrap items-center gap-1">
          {maxHours.map((h, index) => {
            if (h.available)
              return (
                <AppButton key={index} size="xs">
                  {h.time}
                </AppButton>
              );
          })}
          <AppButton size="xs" className="items-end" onClick={onMoreClick}>
            more <ChevronRightIcon width={10} height={10} />
          </AppButton>
        </div>
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      <small>{children}</small>
    </div>
  );
}
