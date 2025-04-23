/* components */
import AppCard from "@/components/_core/panel/AppCard";
import AppAvatar from "@/components/_core/misc/AppAvatar";
import AppButton from "@/components/_core/button/AppButton";
import AppHeading from "@/components/_core/heading/AppHeading";
/* icons */
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
/* store */
import { useAppointmentStore } from "@/lib/store/appointment";
/* utils */
import { getCalendarDate, parseToMoment } from "@/lib/utils/date";

export default function AppSummaryPage() {
  const appointments = useAppointmentStore((state) => state.appointments);

  function getInitials(name: string): string {
    if (!name) return "";

    return name
      .split(" ")
      .map((word) => word[0]?.toUpperCase())
      .join("");
  }

  return (
    <>
      <AppHeading className="font-medium mb-10">Your Appointments</AppHeading>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
        {appointments.length > 0 ? (
          appointments.map((item, index) => {
            return (
              <AppCard key={index} className="flex-col">
                <div className="flex gap-4 items-center">
                  <AppAvatar className="w-10! h-10! rounded-full!">
                    {getInitials(item.doctor)}
                  </AppAvatar>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">
                      {getCalendarDate(item.date)}{" "}
                      {parseToMoment(item.date).format("D MMMM")}
                    </p>
                    <p className="text-xs">
                      With Dr. {item.doctor} -{" "}
                      <span className="text-gray-400">{item.specialty}</span>
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs font-medium inline-flex items-center gap-0.5">
                  <SewingPinFilledIcon />
                  {item.location}
                </p>
                <div className="mt-5">
                  <AppButton severity="primary" size="sm">
                    Details
                  </AppButton>
                </div>
              </AppCard>
            );
          })
        ) : (
          <>Nothing found.</>
        )}
      </div>
    </>
  );
}
