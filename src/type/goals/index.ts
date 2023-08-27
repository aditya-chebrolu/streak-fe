export type Goal = {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  days: { date: Date; checked: boolean; noDelay?: boolean }[];
  totalDays: number;
};
