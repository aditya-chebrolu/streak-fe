import axios from "axios";
const BASE_URL = "http://localhost:4000/goals";

export type Goal = {
 name: string;
 startDate: string;
 endDate: string;
 streak: { checked: boolean; streakDate: string }[];
 tasks: string[];
 totalDays: number;
};

export const getAllGaols = async () => {
 try {
  const res = await axios<Goal[]>(BASE_URL);
  return res.data;
 } catch (e) {
  console.log(e);
  return [];
 }
};

export const createGoal = async (data: { name: string; startDate: Date; endDate: Date }) => {
 try {
  const res = await axios.post<Goal>(BASE_URL, data);
  return res.data;
 } catch (e) {
  console.log(e);
  return null;
 }
};
