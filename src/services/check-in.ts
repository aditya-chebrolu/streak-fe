import { BASE_URL } from "@constants";
import axios from "axios";

export const checkIn = async (goalId: string) => {
  try {
    const res = await axios.post<{ date: Date; checked: boolean }>(`${BASE_URL}/check-in`, { goalId });
    return res.data;
  } catch (e) {
    return null;
  }
};
