export type IHour = {
  available: boolean;
  time: string;
};

export type IAvailability = {
  date: Date;
  hours: IHour[];
};

export type IDoctor = {
  alias: string;
  name: string;
  photo: string;
  availability: IAvailability[];
  location: string;
  specialty: string;
};

export type IDoctorState = {
  appointments: number;
  increase: (by: number) => void;
};
