export type IAppointment = {
  date: Date;
  hour: string;
  doctor: string;
  location: string;
  specialty: string;
};

export type IAppointmentState = {
  appointments: IAppointment[];
  addAppointment: (appointment: IAppointment) => void;
};
