'use client';

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { handleGetHubReports } from "../api/handleGetHubReports";
import { useSearchParams } from "next/navigation";

function useHubReports() {
    const searchParams = useSearchParams();

    const page = searchParams.get('page');
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const batch = searchParams.get('batch');
    const its = searchParams.get('its');

    return useQuery({
        queryKey:['hub_reports',page,from,to,batch,its],
        queryFn:() => handleGetHubReports({page,from,to,batch,its}),
        refetchOnMount:false,
        placeholderData:keepPreviousData,
    })
}

export default useHubReports
