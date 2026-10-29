import { keepPreviousData, useQuery } from "@tanstack/react-query"
import getBatches from "../api/getBatches"

function useBatches() {
    return useQuery({
        queryKey:['batches'],
        queryFn:getBatches,
        placeholderData:keepPreviousData,
    })
}

export default useBatches
