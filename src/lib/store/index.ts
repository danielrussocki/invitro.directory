import { create } from "zustand";
/* types */
import { IDoctorState } from "@/lib/types/doctor";

export const useExampleStore = create<IDoctorState>((set) => ({
  appointments: 0,
  increase: (by) => set((state) => ({ appointments: state.appointments + by })),
}));
