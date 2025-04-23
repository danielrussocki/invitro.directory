/* lib */
import { use, Suspense, useState } from "react";
/* components */
import AppCard from "@/components/dashboard/components/AppDoctorCard";
import AppAccordion, {
  AppAccordionItem,
} from "@/components/_core/panel/AppAccordion";
/* services */
import { appDoctorService } from "@/lib/services/doctor";
/* types */
import type { IDoctor } from "@/lib/types/doctor";

export default function AppDashboardPage() {
  const list = use(appDoctorService.getDoctors);
  const [data, setData] = useState<IDoctor[]>([...list]);

  function resetFilters() {
    setData([...list]);
  }

  function filterBySpecialty(specialty: string) {
    setData(
      data.filter((doctor) =>
        doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
      )
    );
  }

  return (
    <div className="w-full">
      <AppAccordion className="mb-10" type="single" collapsible>
        <AppAccordionItem value="filter" header="Filter">
          Hola <button onClick={() => filterBySpecialty("a")}>Test</button>
          <button onClick={() => resetFilters()}>Reset</button>
        </AppAccordionItem>
      </AppAccordion>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid-rows-4 gap-5">
        <Suspense fallback={<p>Loading...</p>}>
          {data.map((item, index) => {
            return <AppCard key={index} {...item} />;
          })}
        </Suspense>
      </div>
    </div>
  );
}
