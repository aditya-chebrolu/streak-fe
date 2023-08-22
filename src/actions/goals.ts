import axios from "axios";
const BASE_URL = "http://localhost:4000/goals";

export type Goal = {
  _id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  days: { date: Date; checked: boolean; noDelay?: boolean }[];
  totalDays: number;
};

export const getAllGaols = async () => {
  try {
    const res = await axios<Goal[]>(BASE_URL);
    if (typeof res.data !== "object") throw "blah";
    return res.data;
  } catch (e) {
    return [];
  }
};

export const createGoal = async (data: { name: string; startDate: string; endDate: string }) => {
  try {
    const res = await axios.post<Goal>(BASE_URL, {
      name: data.name,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate)
    });
    return res.data;
  } catch (e) {
    return null;
  }
};

export const checkIn = async (goalId: string) => {
  try {
    const res = await axios.post<{ date: Date; checked: boolean }>(`${BASE_URL}/check-in`, { goalId });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
