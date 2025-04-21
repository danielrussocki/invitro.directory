/* mock data */
import { doctorListMock } from "./mock/doctor.mock";
/* types */
import type { IDoctor } from "@/lib/types/doctor";

class AppDoctorService {
  getDoctors = new Promise<IDoctor[]>((resolve) => {
    resolve(doctorListMock);
  });
}

export const appDoctorService = new AppDoctorService();
