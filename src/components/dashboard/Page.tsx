/* lib */
import { use, Suspense } from "react";
/* components */
import AppCard from "@/components/_core/panel/AppCard";
import AppAvatar from "@/components/_core/misc/AppAvatar";
import AppDialog from "@/components/_core/overlay/AppDialog";
/* services */
import { appDoctorService } from "@/lib/services/doctor";

export default function AppDashboardPage() {
  const list = use(appDoctorService.getDoctors);

  return (
    <div className="w-full h-full">
      <div className="w-full grid grid-cols-3 grid-rows-4 gap-2.5">
        <Suspense fallback={<p>Loading...</p>}>
          {list.map((item, index) => {
            return (
              <AppCard key={index} className="flex gap-2.5">
                <AppAvatar
                  src={item.photo}
                  className="shrink-0 border-2 shadow-xs"
                >
                  {item.alias}
                </AppAvatar>
                <div className="flex flex-col gap-5">
                  <div>
                    <h6 className="font-medium text-lg">
                      {item.alias} {item.name}
                    </h6>
                    <p className="text-xs">
                      {item.specialty} -{" "}
                      <span className="opacity-40">{item.location}</span>
                    </p>
                    <div className="mt-2.5">
                      {item.availability.map((schedule, i) => {
                        return (
                          <p className="text-xs" key={i}>
                            {schedule}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <AppDialog triggerContent="Book Appointment">
                      Hola
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
