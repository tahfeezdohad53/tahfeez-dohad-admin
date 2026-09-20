"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { handleGetFeeStats, handleGetObligationStats } from "../api/handleGetObligationsStats";


function useObligationStats() {
  
  return useQuery({
    queryKey: ["obligation_stats"],
    queryFn: () => handleGetObligationStats(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

}

export default useObligationStats;
