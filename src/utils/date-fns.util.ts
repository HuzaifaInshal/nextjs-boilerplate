import moment from "moment";

export function toISOLocaleString(date: string) {
  return moment(date).format("yyyy-MM-DD'T'HH:mm:ss.SSS");
}
