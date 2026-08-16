"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { handleGetFeeStats } from "../api/handleGetFeeStats";


function useFeeStats() {
  
  const { data: stats } = useQuery({
    queryKey: ["fee_stats"],
    queryFn: () => handleGetFeeStats(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  return stats ? {...stats} : {};
}

export default useFeeStats;
