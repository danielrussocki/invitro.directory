/* lib */
import { use, Suspense, useMemo, startTransition } from "react";
/* components */
import AppDoctorCard from "@/components/dashboard/_components/AppDoctorCard";
import AppAccordion, {
  AppAccordionItem,
} from "@/components/_core/panel/AppAccordion";
import AppToggleGroup, {
  AppToggleGroupItem,
} from "@/components/_core/form/AppToggleGroup";
/* icons */
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
/* services */
import { appDoctorService } from "@/lib/services/doctor";
/* utils */
import { getCalendarDate, getSmallDate, formatDate } from "@/lib/utils/date";
/* types */
import { useFilterStore } from "@/lib/store/filter";

export default function AppDashboardPage() {
  const list = use(appDoctorService.getDoctors);
  const specialties = use(appDoctorService.getSpecialtiesCatalog);
  const availabilities = use(appDoctorService.getAvailabilitiesCatalog);
  /* state */
  const selectedDates = useFilterStore((state) => state.dates);
  const selectedSpecialties = useFilterStore((state) => state.specialties);
  const setSelectedDates = useFilterStore((state) => state.setDates);
  const setSelectedSpecialties = useFilterStore(
    (state) => state.setSpecialties
  );

  const filteredData = useMemo(() => {
    if (selectedSpecialties.length === 0 && selectedDates.length === 0)
      return list;

    const selectedDateStrings = selectedDates.map((d) =>
      formatDate(new Date(d))
    );

    return list.filter((doctor) => {
      const matchesSpecialty =
        selectedSpecialties.length === 0 ||
        selectedSpecialties.includes(doctor.specialty);

      if (!matchesSpecialty) return false;

      if (selectedDateStrings.length === 0) return true;

      return doctor.availability.some(
        (item) =>
          item.hours.some((hour) => hour.available) &&
          selectedDateStrings.includes(formatDate(item.date))
      );
    });
  }, [list, selectedSpecialties, selectedDates]);

  return (
    <div className="w-full">
      <AppAccordion
        className="mb-10 rounded-xl"
        type="single"
        defaultValue="filter"
        collapsible
      >
        <AppAccordionItem
          value="filter"
          header={
            <>
              <MixerHorizontalIcon /> Filter
            </>
          }
          className="text-xs"
        >
          <div className="mb-5">
            <p className="text-xs mb-2 font-medium ml-3.5">By Availability:</p>
            <AppToggleGroup
              type="multiple"
              className="gap-1 flex-wrap"
              value={selectedDates}
              onValueChange={(value) => {
                startTransition(() => {
                  setSelectedDates(value);
                });
              }}
            >
              {availabilities.map((date, index) => {
                return (
                  <AppToggleGroupItem key={index} value={date} size="small">
                    {getCalendarDate(date)} {getSmallDate(date, false)}
                  </AppToggleGroupItem>
                );
              })}
            </AppToggleGroup>
          </div>
          <div>
            <p className="text-xs mb-2 font-medium ml-3.5">By Specialty:</p>
            <AppToggleGroup
              type="multiple"
              className="gap-1 flex-wrap"
              value={selectedSpecialties}
              onValueChange={(value) => {
                startTransition(() => {
                  setSelectedSpecialties(value);
                });
              }}
            >
              {specialties.map((specialty, index) => {
                return (
                  <AppToggleGroupItem
                    key={index}
                    value={specialty}
                    size="small"
                  >
                    {specialty}
                  </AppToggleGroupItem>
                );
              })}
            </AppToggleGroup>
          </div>
        </AppAccordionItem>
      </AppAccordion>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid-rows-4 gap-5">
        <Suspense fallback={<p>Loading...</p>}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              return <AppDoctorCard key={item.id} {...item} />;
            })
          ) : (
            <p>We couldn't find any results based on your selected filters.</p>
          )}
        </Suspense>
      </div>
    </div>
  );
}
