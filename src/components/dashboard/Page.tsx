/* lib */
import { use, Suspense } from "react";
/* components */
import AppCard from "@/components/_core/panel/AppCard";
import AppAvatar from "@/components/_core/misc/AppAvatar";
import AppRating from "@/components/_core/form/AppRating";
import AppDialog from "@/components/_core/overlay/AppDialog";
import AppToggleGroup, {
  AppToggleGroupItem,
} from "@/components/_core/form/AppToggleGroup";
/* icons */
import { CheckCircledIcon } from "@radix-ui/react-icons";
/* services */
import { appDoctorService } from "@/lib/services/doctor";
/* utils */
import { getCalendarDate, getSmallDate } from "@/lib/utils/date";

export default function AppDashboardPage() {
  const list = use(appDoctorService.getDoctors);

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-3 grid-rows-4 gap-5">
        <Suspense fallback={<p>Loading...</p>}>
          {list.map((item, index) => {
            return (
              <AppCard key={index} className="flex gap-5">
                <AppAvatar
                  src={item.photo}
                  className="shrink-0 border border-gray-200"
                >
                  {item.alias}
                </AppAvatar>
                <div className="flex flex-col gap-5">
                  <div>
                    <h6 className="font-medium inline-flex gap-2 text-lg">
                      {item.alias} {item.name}
                      {item.verified && (
                        <span className="inline-flex items-center text-blue-400">
                          <CheckCircledIcon />
                        </span>
                      )}
                    </h6>
                    <p className="text-xs">
                      {item.specialty} -{" "}
                      <span className="opacity-40">{item.location}</span>
                    </p>
                    <AppRating
                      className="mt-1.5 text-blue-500"
                      value={item.averageRating}
                    />
                    <div className="mt-2.5">
                      {item.availability.map((schedule, i) => {
                        return (
                          <p className="text-xs" key={i}>
                            {String(schedule.date)}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <AppDialog triggerContent="Book Appointment">
                      <div className="grid grid-cols-5 gap-x-2.5">
                        {item.availability.map((schedule, i) => {
                          return (
                            <>
                              <AppToggleGroup
                                type="single"
                                className="flex-col gap-2"
                              >
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
                                      <AppToggleGroupItem
                                        value={String(indexHour)}
                                      >
                                        {hour.time}
                                      </AppToggleGroupItem>
                                    );

                                  return (
                                    <div className="rounded-sm px-2 py-1.5 text-center items-center line-through justify-center leading-4 text-gray-500 first:rounded-l last:rounded-r focus:z-10 focus:outline-none cursor-pointer">
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
          })}
        </Suspense>
      </div>
    </div>
  );
}
