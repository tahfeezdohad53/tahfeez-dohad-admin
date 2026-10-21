'use client';

import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation";
import { handleGetAccounts } from "../api/handleGetAccounts";

function useAccounts() {
    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    const batch = searchParams.get("batch");
    const ITS = searchParams.get("ITS");
    const isActive = searchParams.get('isActive');

    return useQuery({
    queryKey:['accounts',page,batch,ITS,isActive],
    queryFn:() => handleGetAccounts({page,batch,ITS,isActive}),
    refetchOnWindowFocus:false,
    placeholderData:keepPreviousData,
  })
}

export default useAccounts
