import moment, { type MomentInput } from "moment";

export function getDayName(date: MomentInput, short: boolean = false) {
  const momentDate = moment(date);
  if (short) return momentDate.format("ddd");
  return momentDate.format("dddd");
}

export function getDayOfMonth(date: MomentInput) {
  return moment(date).format("D");
}

export function getSmallDate(date: MomentInput, short: boolean = true) {
  if (short) return moment(date).format("D MMM");
  return moment(date).format("D MMMM");
}

export function getFromNow(date: MomentInput) {
  return moment(date).fromNow();
}

export function getCalendarDate(date: MomentInput) {
  return moment(date).calendar({
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd",
    lastDay: "[Yesterday]",
    lastWeek: "dddd",
    sameElse: "DD/MM/YYYY",
  });
}

export function parseToMoment(
  date: MomentInput,
  format: string = "YYYY-MM-DD"
) {
  return moment(date, format);
}

export function getMomentToday() {
  return moment().startOf("day");
}

export function getClosestFutureDate(
  dates: MomentInput[],
  format: string = "YYYY-MM-DD"
) {
  const today = moment().startOf("day");
  return (
    dates.filter((date) => moment(date, format).isAfter(today)).sort()?.[0] ??
    null
  );
}

export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
