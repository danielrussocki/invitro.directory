/* mock data */
import {
  doctorListMock,
  doctorSpecialtiesMock,
  availableDates,
} from "./mock/doctor.mock";
/* types */
import type { IDoctor } from "@/lib/types/doctor";

class AppDoctorService {
  getDoctors = new Promise<IDoctor[]>((resolve) => {
    resolve(doctorListMock);
  });

  getSpecialtiesCatalog = new Promise<string[]>((resolve) => {
    resolve(doctorSpecialtiesMock);
  });

  getAvailabilitiesCatalog = new Promise<string[]>((resolve) => {
    resolve(availableDates);
  });
}

export const appDoctorService = new AppDoctorService();
