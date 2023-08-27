import { BASE_URL } from "@constants";
import { Goal } from "@type/goals";
import axios from "axios";

export const getAllGaols = async () => {
  try {
    const res = await axios<Goal[]>(BASE_URL);
    if (typeof res.data !== "object") throw "blah";
    return res.data;
  } catch (e) {
    return [];
  }
};
