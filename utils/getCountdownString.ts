import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

export function getCountdownString(targetTime: number): string {
  const now = new Date();
  const targetDate = new Date(targetTime * 1000);

  const days = differenceInDays(targetDate, now);
  const hours = differenceInHours(targetDate, now) % 24;
  const minutes = differenceInMinutes(targetDate, now) % 60;
  const seconds = differenceInSeconds(targetDate, now) % 60;

  return `Drop ends in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}
