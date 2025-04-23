import { create } from "zustand";
/* types */
import { IFilterState } from "@/lib/types/doctor";

export const useFilterStore = create<IFilterState>((set) => ({
  dates: [],
  specialties: [],
  setSpecialties: (data) => set(() => ({ specialties: data })),
  setDates: (data) => set(() => ({ dates: data })),
}));
