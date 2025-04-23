import { create } from "zustand";
import { persist } from "zustand/middleware";
/* types */
import { IAppointmentState } from "@/lib/types/appointment";

export const useAppointmentStore = create<IAppointmentState>()(
  persist(
    (set) => ({
      appointments: [],
      addAppointment: (appointment) =>
        set((current) => ({
          ...current,
          appointments: [...current.appointments, appointment],
        })),
    }),
    {
      name: "appointments",
      partialize: (state) => ({ appointments: state.appointments }),
    }
  )
);
