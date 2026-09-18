"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { handleGetFeeStats, handleGetObligationStats } from "../api/handleGetObligationsStats";


function useObligationStats() {
  
  const { data: stats } = useQuery({
    queryKey: ["obligation_stats"],
    queryFn: () => handleGetObligationStats(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  return stats ? {...stats} : {};
}

export default useObligationStats;
