import axios from "axios";
import { useQuery } from "react-query";

export const usePriorty = () => {
  return useQuery("priorities", () => axios.get("http://localhost:4000/api"));
};
