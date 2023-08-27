import { BASE_URL } from "@constants";
import { Goal } from "@type/goals";
import axios from "axios";

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
