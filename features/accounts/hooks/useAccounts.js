'use client';

import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation";
import { handleGetAccounts } from "../api/handleGetAccounts";

function useAccounts() {
    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    const batch = searchParams.get("batch");
    const role = searchParams.get("role");

    return useQuery({
    queryKey:['accounts',page,batch,role],
    queryFn:() => handleGetAccounts({page,batch,role}),
    refetchOnWindowFocus:false,
    placeholderData:keepPreviousData,
  })
}

export default useAccounts
