import { BASE_URL } from "@constants";
import axios from "axios";

export const deleteGoal = async (goalId: string) => {
  try {
    const res = await axios.delete<{ success: boolean }>(BASE_URL, { params: { goalId } });
    return res.data.success;
  } catch (e) {
    return false;
  }
};
