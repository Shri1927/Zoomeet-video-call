import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getStatistics = async () => {
  const response = await axios.get("/api/stats");
  return response.data;
};

export const useStatistics = () => {
  return useQuery({
    queryKey: ["statistics"],
    queryFn: getStatistics,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
