export type IHour = {
  available: boolean;
  time: string;
};

export type IAvailability = {
  date: Date;
  hours: IHour[];
};

export type IDoctor = {
  id: number;
  alias: string;
  name: string;
  photo: string;
  verified: boolean;
  averageRating: number;
  availability: IAvailability[];
  location: string;
  specialty: string;
};

export type IDoctorState = {
  appointments: number;
  increase: (by: number) => void;
};

export type IFilterState = {
  dates: string[];
  specialties: string[];
  setDates: (date: string[]) => void;
  setSpecialties: (specialty: string[]) => void;
};
