'use client';

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { handleGetFeeObligations } from "../api/handleGetFeeObligations"
import { useSearchParams } from "next/navigation";

function useGetFeeObligations() {
    const searchParams = useSearchParams();
    const batch = searchParams.get('batch');
    const status = searchParams.get('fee_status');
    const page = searchParams.get('page');
    const its = searchParams.get('its');
   const {data:fee} = useQuery({
    queryKey:['fee',batch,status,its,page],
    queryFn:() => handleGetFeeObligations({batch,status,its,page}),
    placeholderData:keepPreviousData,
    refetchOnWindowFocus:false,
   })

   return fee || {obligations:[],count:0};
}

export default useGetFeeObligations
