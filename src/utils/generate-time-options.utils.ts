import { IProjectRestrictedHours } from "@/features/projects/types/project-general-settings.interface";
import moment from "moment";

export interface TimeOption {
  label: string;
  value: string;
  disabled?: boolean;
}

/**
 * Generate an array of time options for a day with a given step size in minutes.
 * @param stepMinutes The step size in minutes (e.g., 30 for half-hour intervals)
 * @param startDate Optional date to use (defaults to today)
 */
export function generateTimeOptionsWithStepInRange(
  stepMinutes: number,
  startDate: Date = new Date()
): TimeOption[] {
  if (stepMinutes <= 0 || stepMinutes > 1440) {
    throw new Error("stepMinutes must be between 1 and 1440");
  }

  const result: TimeOption[] = [];
  const baseMoment = moment(startDate).startOf("day"); // reset to midnight

  const totalSteps = Math.floor((24 * 60) / stepMinutes);

  for (let i = 0; i < totalSteps; i++) {
    const start = baseMoment.clone().add(i * stepMinutes, "minutes");
    const end = start.clone().add(stepMinutes, "minutes");

    // Example output: "9:00 - 9:30 PM"
    const startFormatted = start.format("h:mm");
    const endFormatted = end.format("h:mm a");

    result.push({
      label: `${startFormatted} - ${endFormatted}`,
      value: start.toISOString(),
    });
  }

  return result;
}

/**
 * Generate an array of time options for a day with a given step size in minutes.
 * @param stepMinutes The step size in minutes (e.g., 30 for half-hour intervals)
 * @param selectedDateISO The date (in ISO format) for which we generate time options
 * @param startDate Optional date to use (defaults to today)
 * @param restrictedHours Optional array of restricted hours that mark certain times as disabled
 */
export function generateTimeOptionsWithStep(
  stepMinutes: number,
  selectedDateISO: string,
  restrictedHours?: IProjectRestrictedHours[]
): TimeOption[] {
  if (stepMinutes <= 0 || stepMinutes > 1440) {
    throw new Error("stepMinutes must be between 1 and 1440");
  }

  const result: TimeOption[] = [];
  const baseMoment = moment().startOf("day");
  const totalSteps = Math.floor((24 * 60) / stepMinutes);
  const selectedDate = moment(selectedDateISO).startOf("day");
  const selected = moment(selectedDateISO);

  for (let i = 0; i < totalSteps; i++) {
    const current = baseMoment.clone().add(i * stepMinutes, "minutes");
    current.year(selected.year());
    current.month(selected.month());
    current.date(selected.date());

    const currentEnd = baseMoment.clone().add((i + 1) * stepMinutes, "minutes"); // fix
    currentEnd.year(selected.year());
    currentEnd.month(selected.month());
    currentEnd.date(selected.date());

    const startFormatted = current.format("h:mm a");
    const currentISO = current.toISOString();

    let disabled = false;

    // Disable past times if selected date is today
    if (selected.isSame(baseMoment, "day")) {
      const now = moment();
      if (current.isBefore(now)) {
        disabled = true;
      }
    }

    if (restrictedHours && restrictedHours.length > 0) {
      for (const r of restrictedHours) {
        const restrictedStart = moment(selectedDate).set({
          hour: moment(r.start_date).hour(),
          minute: moment(r.start_date).minute(),
        });
        const restrictedEnd = moment(selectedDate).set({
          hour: moment(r.end_date).hour(),
          minute: moment(r.end_date).minute(),
        });

        if (r.apply_everyday) {
          // Handle crossing midnight
          if (restrictedEnd.isBefore(restrictedStart)) {
            if (
              current.isSameOrAfter(restrictedStart) || // overlaps before midnight
              currentEnd.isBefore(restrictedEnd) // overlaps after midnight
            ) {
              disabled = true;
              break;
            }
          } else if (
            current.isBefore(restrictedEnd) && // start < restrictedEnd
            currentEnd.isAfter(restrictedStart) // end > restrictedStart
          ) {
            // overlapping
            disabled = true;
            break;
          }
        } else {
          const startDate = moment(r.start_date).startOf("day");
          const endDate = moment(r.end_date).startOf("day");

          if (selectedDate.isBetween(startDate, endDate, "day", "[]")) {
            const restrictedStart = selectedDate.clone().set({
              hour: moment(r.start_date).hour(),
              minute: moment(r.start_date).minute(),
            });
            const restrictedEnd = selectedDate.clone().set({
              hour: moment(r.end_date).hour(),
              minute: moment(r.end_date).minute(),
            });

            if (
              currentEnd.isAfter(restrictedStart) &&
              current.isBefore(restrictedEnd)
            ) {
              disabled = true;
              break;
            }
          }
        }
      }
    }

    result.push({
      label: startFormatted,
      value: currentISO,
      disabled,
    });
  }

  return result;
}
