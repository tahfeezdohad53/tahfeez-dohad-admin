import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { handleUpdateStudentsBatch } from "../api/handleUpdateStudentsBatch"

function useUpdateStudentsBatch() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:handleUpdateStudentsBatch,
        onSuccess:() => {
            toast.success('batch updated!')
            queryClient.invalidateQueries({queryKey:['obligation']});
        },
        onError:() => toast.error('failed to update batch!'),
    })
}

export default useUpdateStudentsBatch
