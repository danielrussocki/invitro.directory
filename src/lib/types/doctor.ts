export type IDoctor = {
  name: string;
  rating: number;
  specialty: string;
};

export type IDoctorState = {
  appointments: number;
  increase: (by: number) => void;
};
