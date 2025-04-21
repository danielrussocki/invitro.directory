export type IDoctor = {
  alias: string;
  name: string;
  photo: string;
  availability: string[];
  location: string;
  specialty: string;
};

export type IDoctorState = {
  appointments: number;
  increase: (by: number) => void;
};
